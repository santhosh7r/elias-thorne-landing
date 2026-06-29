"use client";

import { useEffect } from "react";

export default function Interactions() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const cleanups = [];
    const on = (el, ev, fn, opt) => {
      if (!el) return;
      el.addEventListener(ev, fn, opt);
      cleanups.push(() => el.removeEventListener(ev, fn, opt));
    };

    /* ── Intro ── */
    const intro = document.querySelector("[data-intro]");
    const fill = document.querySelector("[data-intro-fill]");
    if (intro) {
      if (reduce) intro.classList.add("is-done");
      else {
        let p = 0;
        const t = setInterval(() => {
          p += Math.random() * 16 + 7;
          if (p >= 100) {
            p = 100;
            clearInterval(t);
            setTimeout(() => intro.classList.add("is-done"), 380);
          }
          if (fill) fill.style.width = p + "%";
        }, 120);
        cleanups.push(() => clearInterval(t));
      }
    }

    /* ── Magnetic buttons ── */
    if (fine && !reduce) {
      document.querySelectorAll("[data-magnetic]").forEach((el) => {
        const mm = (e) => {
          const r = el.getBoundingClientRect();
          el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.28}px, ${(e.clientY - (r.top + r.height / 2)) * 0.28}px)`;
        };
        on(el, "mousemove", mm);
        on(el, "mouseleave", () => (el.style.transform = "translate(0,0)"));
      });
    }

    /* ── Reveal on scroll ── */
    const revealEls = document.querySelectorAll("[data-reveal],[data-stagger],.pstep");
    if (reduce) revealEls.forEach((el) => el.classList.add("is-in"));
    else {
      const io = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-in");
              io.unobserve(e.target);
            }
          }),
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      revealEls.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    /* ── Count-up ── */
    const cio = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const target = parseFloat(el.dataset.count);
          const pre = el.dataset.prefix || "";
          const suf = el.dataset.suffix || "";
          if (reduce) el.textContent = pre + target + suf;
          else {
            const dur = 1700;
            let start;
            const step = (t) => {
              if (!start) start = t;
              const r = Math.min((t - start) / dur, 1);
              el.textContent = pre + Math.round(target * (1 - Math.pow(1 - r, 3))) + suf;
              if (r < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
          cio.unobserve(el);
        }),
      { threshold: 0.6 }
    );
    document.querySelectorAll("[data-count]").forEach((el) => cio.observe(el));
    cleanups.push(() => cio.disconnect());

    /* ── Nav scrolled ── */
    const nav = document.querySelector("[data-nav]");
    const ns = () => nav && nav.classList.toggle("is-scrolled", window.scrollY > 36);
    on(window, "scroll", ns, { passive: true });
    ns();

    /* ── Mobile menu ── */
    on(document.querySelector("[data-burger]"), "click", () => document.body.classList.toggle("menu-open"));
    document.querySelectorAll("[data-menu] a").forEach((a) =>
      on(a, "click", () => document.body.classList.remove("menu-open"))
    );

    /* ── Featured hover video ── */
    document.querySelectorAll("[data-video]").forEach((wrap) => {
      const src = wrap.getAttribute("data-video");
      const vid = wrap.querySelector("video");
      if (!vid || !src || !fine) return;
      let loaded = false;
      on(wrap, "mouseenter", () => {
        if (!loaded) { vid.src = src; loaded = true; }
        wrap.classList.add("is-playing");
        const pr = vid.play();
        if (pr) pr.catch(() => {});
      });
      on(wrap, "mouseleave", () => { wrap.classList.remove("is-playing"); vid.pause(); });
    });

    /* ── Work: filter + single sticky preview ── */
    const rows = Array.from(document.querySelectorAll("[data-row]"));
    const pv = document.querySelector("[data-pv]");
    const pvImg = document.querySelector("[data-pv-img]");
    const set = (sel, txt) => {
      const el = document.querySelector(sel);
      if (el) el.textContent = txt;
    };
    const setPreview = (r) => {
      if (!r) return;
      rows.forEach((x) => x.classList.toggle("is-active", x === r));
      const d = r.dataset;
      if (pvImg && pvImg.getAttribute("src") !== d.img) {
        if (pv) pv.classList.remove("is-on");
        pvImg.src = d.img;
        requestAnimationFrame(() => pv && pv.classList.add("is-on"));
      } else if (pv) pv.classList.add("is-on");
      set("[data-pv-name]", d.title);
      set("[data-pv-client]", d.client + " · " + d.year);
      set("[data-pv-v]", d.views);
      set("[data-pv-r]", d.reach);
    };
    rows.forEach((r) => {
      on(r, "mouseenter", () => setPreview(r));
      on(r, "click", () => setPreview(r));
    });
    if (rows[0]) setPreview(rows[0]);

    const filterBar = document.querySelector("[data-filters]");
    if (filterBar) {
      filterBar.querySelectorAll(".filter").forEach((btn) =>
        on(btn, "click", () => {
          filterBar.querySelectorAll(".filter").forEach((b) => b.classList.remove("is-active"));
          btn.classList.add("is-active");
          const cat = btn.dataset.filter;
          let firstVisible = null;
          rows.forEach((r) => {
            const match = cat === "all" || (r.dataset.cat || "").split(" ").includes(cat);
            r.classList.toggle("is-hidden", !match);
            if (match && !firstVisible) firstVisible = r;
          });
          if (firstVisible) setPreview(firstVisible);
        })
      );
    }

    /* ── Testimonials ── */
    const items = Array.from(document.querySelectorAll("[data-quote]"));
    if (items.length) {
      let idx = 0;
      const go = (n) => {
        idx = (n + items.length) % items.length;
        items.forEach((q, i) => q.classList.toggle("is-on", i === idx));
      };
      on(document.querySelector("[data-quote-next]"), "click", () => go(idx + 1));
      on(document.querySelector("[data-quote-prev]"), "click", () => go(idx - 1));
      if (!reduce) {
        const auto = setInterval(() => go(idx + 1), 6500);
        cleanups.push(() => clearInterval(auto));
      }
    }

    /* ── Form ── */
    document.querySelectorAll(".chip").forEach((c) => on(c, "click", () => c.classList.toggle("is-on")));
    const form = document.querySelector("[data-form]");
    const note = document.querySelector("[data-form-note]");
    on(form, "submit", (e) => {
      e.preventDefault();
      if (note) note.textContent = "Thank you — your enquiry is in. I'll reply within a day.";
      const lbl = form && form.querySelector(".btn span");
      if (lbl) lbl.textContent = "Sent ✓";
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
