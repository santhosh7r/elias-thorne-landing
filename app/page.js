import Interactions from "./Interactions";

const U = (id, w) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

const VID = {
  city: "https://videos.pexels.com/video-files/3129671/3129671-uhd_3840_2160_30fps.mp4",
  drone: "https://videos.pexels.com/video-files/2169880/2169880-uhd_3840_2160_30fps.mp4",
  maker: "https://videos.pexels.com/video-files/7578552/7578552-uhd_2560_1440_30fps.mp4",
};

// Full body of work — rendered as a typographic index (one image previews on hover)
const WORK = [
  { id: "01", title: "Nocturne", client: "Horizon Motors", year: "2025", cat: "advert film", kind: "Automotive Advert", img: "1574169208507-84376144848b", views: "6.2M", reach: "+40% pre-orders" },
  { id: "02", title: "The Long Way Home", client: "Original", year: "2024", cat: "youtube documentary", kind: "YouTube Documentary", img: "1469474968028-56623f02e42e", views: "2.4M", reach: "96K likes" },
  { id: "03", title: "Quiet Luxury", client: "Atlas Clothing", year: "2025", cat: "fashion advert", kind: "Fashion Film", img: "1598899134739-24c46f58b8c0", views: "3.1M", reach: "3× engagement" },
  { id: "04", title: "Echoes", client: "Lael", year: "2024", cat: "music", kind: "Music Video", img: "1493225457124-a3eb161ffa5f", views: "8.7M", reach: "#4 trending" },
  { id: "05", title: "First Light", client: "Ember Coffee", year: "2024", cat: "advert", kind: "Brand Advert", img: "1495474472287-4d71bcdd2085", views: "1.3M", reach: "+22% DTC sales" },
  { id: "06", title: "Higher Ground", client: "Peak Energy", year: "2024", cat: "advert film", kind: "Brand Campaign", img: "1454496522488-7a8e488e8606", views: "4.8M", reach: "3-film series" },
  { id: "07", title: "Northbound", client: "North Studio", year: "2023", cat: "film documentary", kind: "Documentary", img: "1601933470096-0e34634ffcde", views: "1.1M", reach: "Festival run" },
  { id: "08", title: "Wanderlight", client: "Elevate Hotels", year: "2024", cat: "advert film", kind: "Hospitality Advert", img: "1566073771259-6a8506099945", views: "5.4M", reach: "+31% bookings" },
  { id: "09", title: "Signal", client: "Verto Tech", year: "2025", cat: "advert", kind: "Product Advert", img: "1620712943543-bcc4688e7485", views: "2.9M", reach: "Launch film" },
  { id: "10", title: "Inside the Cut", client: "Original", year: "2025", cat: "youtube", kind: "YouTube Series", img: "1606016159991-dfe4f2746ad5", views: "3.6M", reach: "120K subs gained" },
  { id: "11", title: "Golden Hour", client: "Nova Coffee", year: "2024", cat: "advert", kind: "Lifestyle Campaign", img: "1447933601403-0c6688de566e", views: "2.1M", reach: "15-film cutdown" },
  { id: "12", title: "Static", client: "MØSS", year: "2023", cat: "music", kind: "Music Video", img: "1598387993441-a364f854c3e1", views: "5.9M", reach: "Vimeo Staff Pick" },
];

const FILTERS = [
  ["all", "All", 12],
  ["advert", "Adverts", 7],
  ["film", "Films", 4],
  ["youtube", "YouTube", 3],
  ["music", "Music Videos", 2],
  ["documentary", "Documentary", 2],
];

const CAPS = [
  { no: "01", name: "Adverts & Commercials", desc: "Broadcast and online films built to sell without shouting — story-led spots for brands that want to be felt.", tags: ["TVC", "Online", "Cutdowns"] },
  { no: "02", name: "Brand Films", desc: "Longer-form anthems and origin stories that define how a company sounds, looks and feels on screen.", tags: ["Anthem", "Origin", "Manifesto"] },
  { no: "03", name: "YouTube & Social", desc: "Native, platform-first content engineered for retention, reach and a channel that actually grows.", tags: ["Long-form", "Shorts", "Series"] },
  { no: "04", name: "Documentary", desc: "Observational, human storytelling — the craft I came up through, brought to every commercial frame.", tags: ["Short Doc", "Feature", "Portrait"] },
  { no: "05", name: "Music Videos", desc: "Bold, performance-driven films for artists and labels — concept, direction and edit, end to end.", tags: ["Concept", "Performance", "Narrative"] },
];

const CLIENTS = ["Horizon Motors", "Atlas Clothing", "Ember Coffee", "Solis Skincare", "Elevate Hotels", "Verto Tech", "Nova Coffee", "Peak Energy", "North Studio", "Urban Habitat"];

const PROCESS = [
  { no: "01", h: "Discovery", p: "We agree the single thing the film must do — and who it's for." },
  { no: "02", h: "Direction", p: "Treatment, references and shot language. You see it before we roll." },
  { no: "03", h: "Production", p: "Senior, right-sized crew. Calm sets, considered light." },
  { no: "04", h: "Edit & Grade", p: "Story-first cut, sound design and a colour grade with skin." },
  { no: "05", h: "Delivery", p: "Every ratio and cut your channels need, ready to perform." },
];

const AWARDS = [
  { b: "Vimeo Staff Pick", s: "Nocturne · Echoes · Static · Northbound", e: "×4" },
  { b: "Young Director Award", s: "Automotive — Shortlist", e: "2025" },
  { b: "D&AD", s: "Brand Film craft", e: "Wood Pencil" },
  { b: "Webby", s: "YouTube Documentary", e: "Honoree" },
  { b: "1.4 Awards", s: "Best Direction — Nominee", e: "2024" },
];

export default function Page() {
  return (
    <>
      <Interactions />
      <div className="grain" />

      {/* Intro */}
      <div className="intro" data-intro>
        <div className="intro__bar">
          <div className="intro__name"><span>Elias Thorne</span><span>Filmmaker</span></div>
          <div className="intro__track"><div className="intro__fill" data-intro-fill /></div>
        </div>
      </div>

      {/* Nav */}
      <header className="nav" data-nav>
        <a href="#top" className="nav__brand" data-magnetic>
          <span className="nav__mark">Elias Thorne</span>
          <span className="nav__role">Filmmaker · Creative Director</span>
        </a>
        <nav className="nav__links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav__right">
          <span className="nav__avail"><span className="dot" />Available · 2026</span>
          <a href="#contact" className="nav__cta" data-magnetic>
            <span>Start a project</span>
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.4" /></svg>
          </a>
          <button className="nav__burger" data-burger aria-label="Menu"><span /><span /></button>
        </div>
      </header>

      <div className="menu" data-menu>
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
        <div className="menu__foot"><a href="mailto:studio@eliasthorne.film">studio@eliasthorne.film</a><a href="#">Instagram</a></div>
      </div>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero__glow" />
          <div className="hero__inner">
            <div className="hero__top">
              <span className="hero__avail"><span className="dot" />Available for projects — 2026</span>
              <span className="hero__coords">Lisbon · London — 38.7°N / filming worldwide</span>
            </div>

            <div className="hero__head">
              <h1 className="hero__title" data-stagger>
                <span className="line"><span>Films that move</span></span>
                <span className="line"><span>people <span className="serif">— and</span></span></span>
                <span className="line"><span>the <span className="serif">numbers.</span></span></span>
              </h1>
              <div className="hero__intro" data-reveal>
                <p className="hero__lead">
                  I direct cinematic adverts, brand films, documentaries and music videos —
                  work people choose to watch, and that earns its place on the brief.
                </p>
                <div className="hero__actions">
                  <a href="#work" className="hcta hcta--gold" data-magnetic>
                    <span className="hcta__label">View the work</span>
                    <span className="hcta__chip"><svg width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.6" /></svg></span>
                  </a>
                  <a href="#contact" className="hcta hcta--line" data-magnetic>
                    <span className="hcta__label">Book a project</span>
                    <span className="hcta__chip"><svg width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.6" /></svg></span>
                  </a>
                </div>
              </div>
            </div>

            <a href="#work" className="hero__film" data-reveal>
              <video autoPlay muted loop playsInline preload="auto" poster={U("1574169208507-84376144848b", 1600)}>
                <source src="/videos/hero.mp4" type="video/mp4" />
              </video>
              <div className="hero__film-grad" />
              <div className="hero__film-bar">
                <span className="hero__film-label">
                  <span className="hero__film-play"><svg width="13" height="15" viewBox="0 0 14 16" fill="none"><path d="M13 7.13a1 1 0 0 1 0 1.74L2 15.2A1 1 0 0 1 .5 14.33V1.67A1 1 0 0 1 2 .8L13 7.13Z" fill="currentColor" /></svg></span>
                  Showreel <span className="serif">’26</span>
                </span>
                <span className="hero__film-tags">Adverts · YouTube · Films · Music Videos · Documentary</span>
                <span className="hero__film-dur">1:48</span>
              </div>
            </a>
          </div>
        </section>

        {/* STRIP */}
        <div className="strip">
          <div className="strip__track">
            {[0, 1].map((d) =>
              CLIENTS.map((c, i) => (
                <span key={`${d}-${i}`}>{c}<i style={{ marginLeft: 22 }}>✦</i></span>
              ))
            )}
          </div>
        </div>

        {/* WORK */}
        <section className="section" id="work">
          <div className="head">
            <h2 className="head__title" data-reveal>Selected <span className="serif">work,</span><br />filtered your way.</h2>
            <p className="head__sub" data-reveal>Twelve films across adverts, YouTube, documentary and music. Hover any title to preview — filter to find your medium.</p>
          </div>

          {/* two featured pieces */}
          <div className="work__featured">
            <a href="#" className="feat feat--a" data-reveal data-magnetic>
              <div className="feat__media">
                <img loading="lazy" src={U("1574169208507-84376144848b", 1500)} alt="Nocturne — Horizon Motors" />
              </div>
              <div className="feat__grad" />
              <div className="feat__body">
                <div><span className="feat__tag">Automotive Advert · 2025</span><span className="feat__name">Nocturne</span><span className="feat__client">Horizon Motors</span></div>
                <span className="feat__play"><svg width="14" height="16" viewBox="0 0 14 16" fill="none"><path d="M13 7.13a1 1 0 0 1 0 1.74L2 15.2A1 1 0 0 1 .5 14.33V1.67A1 1 0 0 1 2 .8L13 7.13Z" fill="currentColor" /></svg></span>
              </div>
            </a>
            <a href="#" className="feat feat--b" data-reveal data-magnetic>
              <div className="feat__media">
                <img loading="lazy" src={U("1469474968028-56623f02e42e", 1200)} alt="The Long Way Home — documentary" />
              </div>
              <div className="feat__grad" />
              <div className="feat__body">
                <div><span className="feat__tag">YouTube Documentary · 2024</span><span className="feat__name">The Long Way Home</span><span className="feat__client">2.4M views</span></div>
                <span className="feat__play"><svg width="14" height="16" viewBox="0 0 14 16" fill="none"><path d="M13 7.13a1 1 0 0 1 0 1.74L2 15.2A1 1 0 0 1 .5 14.33V1.67A1 1 0 0 1 2 .8L13 7.13Z" fill="currentColor" /></svg></span>
              </div>
            </a>
          </div>

          <div className="filters" data-filters data-reveal>
            {FILTERS.map(([key, label, n], i) => (
              <button key={key} className={`filter${i === 0 ? " is-active" : ""}`} data-filter={key}>{label}<sup>{n}</sup></button>
            ))}
          </div>

          <div className="work__index">
            <div className="idx" data-reveal>
              {WORK.map((w) => (
                <div
                  className="row"
                  key={w.id}
                  data-row={w.id}
                  data-cat={w.cat}
                  data-title={w.title}
                  data-client={w.client}
                  data-year={w.year}
                  data-img={U(w.img, 900)}
                  data-views={w.views}
                  data-reach={w.reach}
                >
                  <span className="row__no">{w.id}</span>
                  <span className="row__main">
                    <span className="row__title">{w.title}</span>
                    <span className="row__sub">{w.client} — {w.year}</span>
                  </span>
                  <span className="row__cat">{w.kind}<span className="row__arrow" style={{ marginLeft: 12 }}>↗</span></span>
                </div>
              ))}
            </div>

            <div className="preview">
              <div className="preview__item is-on" data-pv>
                <img data-pv-img alt="" src={U(WORK[0].img, 900)} />
                <div className="preview__grad" />
                <div className="preview__meta">
                  <span className="preview__name" data-pv-name>{WORK[0].title}</span>
                  <div style={{ color: "var(--muted)", fontSize: 13, marginTop: 6 }} data-pv-client>{WORK[0].client} · {WORK[0].year}</div>
                  <div className="stat-row">
                    <div><b data-pv-v>{WORK[0].views}</b><em>Views</em></div>
                    <div><b data-pv-r>{WORK[0].reach}</b><em>Impact</em></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section" id="services">
          <div className="head">
            <h2 className="head__title" data-reveal>What I <span className="serif">make.</span></h2>
            <p className="head__sub" data-reveal>One director, end to end — from the first idea to the final delivery, across every format your brand lives in.</p>
          </div>
          <div className="caps">
            {CAPS.map((c) => (
              <div className="cap" data-reveal key={c.no}>
                <span className="cap__no">{c.no}</span>
                <span className="cap__name">{c.name}</span>
                <span className="cap__desc">{c.desc}</span>
                <span className="cap__tags">{c.tags.map((t) => <span key={t}>{t}</span>)}</span>
              </div>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="stats">
          <div className="stats__grid">
            {[
              { n: "18", suf: "M+", l: "Combined views generated" },
              { n: "70", suf: "+", l: "Films directed & delivered" },
              { n: "35", suf: "+", l: "Brands collaborated with" },
              { n: "92", suf: "%", l: "Clients who come back" },
            ].map((s) => (
              <div className="stat" key={s.l}>
                <span className="stat__num"><span data-count={s.n} data-suffix={s.suf}>0</span></span>
                <span className="stat__lbl">{s.l}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="about__grid">
            <div>
              <span className="kicker" data-reveal>The person behind the lens</span>
              <h2 className="about__statement" data-reveal>
                I came up through documentary — so even a polished advert is chasing something <span className="serif">true.</span>
              </h2>
              <p className="about__p" data-reveal>
                I'm Elias, a filmmaker and creative director based between Lisbon and London.
                For six years I've helped founders, brand teams and artists make films that
                hold attention without shouting for it — and that move the metrics that matter.
              </p>
              <p className="about__p" data-reveal>
                I run a small, senior crew and stay hands-on from the first idea to the final
                grade. The craft is always in service of the feeling — never the other way around.
              </p>
              <div className="about__signoff" data-reveal>
                <span className="sig">Elias Thorne</span>
                <span>Director — Thorne Pictures</span>
              </div>
            </div>
            <div className="about__media" data-reveal>
              <div className="about__portrait">
                <img loading="lazy" src={U("1506794778202-cad84cf45f1d", 1000)} alt="Elias Thorne" />
              </div>
              <ul className="about__timeline">
                <li><b>2026</b><span>Directing select brand films · independent</span></li>
                <li><b>2023</b><span>Founded Thorne Pictures</span></li>
                <li><b>2021</b><span>Lead director · North Studio</span></li>
                <li><b>2019</b><span>First feature documentary</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="section section--tight" id="process">
          <div className="head">
            <h2 className="head__title" data-reveal>How we'll <span className="serif">work.</span></h2>
            <p className="head__sub" data-reveal>A calm, proven path — built over a hundred productions to protect the idea and respect your time.</p>
          </div>
          <div className="process__grid">
            {PROCESS.map((p) => (
              <div className="pstep" key={p.no}>
                <span className="pstep__no">{p.no}</span>
                <div className="pstep__bar" />
                <h3 className="pstep__h">{p.h}</h3>
                <p className="pstep__p">{p.p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section quotes">
          <span className="kicker" data-reveal>In their words</span>
          <div style={{ marginTop: 40 }} data-reveal>
            <div className="quote">
              <div className="quote__item is-on" data-quote>
                <p>“Elias gave our EV launch a <span className="serif">soul.</span> Pre-orders ran 40% ahead of forecast in two weeks.”</p>
                <footer><span className="av" style={av("#2b2b2b")}>DR</span><span><b>Daniel Reyes</b><span>Creative Director · Horizon Motors</span></span></footer>
              </div>
              <div className="quote__item" data-quote>
                <p>“He made our small roastery look like the most considered brand in the <span className="serif">category.</span>”</p>
                <footer><span className="av" style={av("#2b2b2b")}>MO</span><span><b>Marianne Okafor</b><span>Founder · Ember Coffee</span></span></footer>
              </div>
              <div className="quote__item" data-quote>
                <p>“The most collaborative director we've worked with. Booked him three seasons <span className="serif">running.</span>”</p>
                <footer><span className="av" style={av("#2b2b2b")}>SL</span><span><b>Sophie Lindqvist</b><span>Head of Brand · Atlas Clothing</span></span></footer>
              </div>
            </div>
            <div className="quotes__nav">
              <button data-quote-prev aria-label="Previous">←</button>
              <button data-quote-next aria-label="Next">→</button>
            </div>
          </div>
        </section>

        {/* AWARDS */}
        <section className="section section--tight">
          <div className="head">
            <h2 className="head__title" data-reveal>Recognition.</h2>
            <p className="head__sub" data-reveal>Nice to win. Better, the work that earned it keeps performing.</p>
          </div>
          <div className="awards__list" data-reveal>
            {AWARDS.map((a) => (
              <div className="award" key={a.b}><b>{a.b}</b><span>{a.s}</span><em>{a.e}</em></div>
            ))}
          </div>
        </section>

        {/* CLIENTS */}
        <section className="section section--tight">
          <span className="kicker kicker--plain" data-reveal style={{ marginBottom: 36, display: "block" }}>Selected clients</span>
          <div className="clients" data-reveal>
            <div className="clients__grid">
              {CLIENTS.map((c) => <span key={c}>{c}</span>)}
            </div>
          </div>
        </section>
      </main>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact__inner">
          <span className="kicker" data-reveal>Let's talk</span>
          <h2 className="contact__big" data-reveal>Let's make something<br />people won't <span className="serif">forget.</span></h2>
          <div className="contact__grid">
            <form className="form" data-form>
              <div className="field" data-reveal><label>Your name</label><input type="text" name="name" placeholder="Jordan Avery" required /></div>
              <div className="field" data-reveal><label>Email</label><input type="email" name="email" placeholder="you@brand.com" required /></div>
              <div className="field" data-reveal>
                <label>What are we making?</label>
                <div className="chips">{["Advert", "Brand Film", "YouTube", "Documentary", "Music Video"].map((c) => <button type="button" className="chip" key={c}>{c}</button>)}</div>
              </div>
              <div className="field" data-reveal><label>Tell me about it</label><textarea name="brief" rows="3" placeholder="A few lines on the brand, the idea and timing…" /></div>
              <button className="btn btn--gold btn--full btn--lg" type="submit" data-magnetic><span>Send enquiry</span></button>
              <p className="form__note" data-form-note>Typically replies within one business day.</p>
            </form>

            <aside className="contact__aside">
              <a className="cblock cblock-link" href="#" data-reveal>
                <span className="k">Prefer to talk?</span><span className="v">Book a 20-min call →</span><span className="sub">Calendly · no pitch, just the idea</span>
              </a>
              <a className="cblock cblock-link" href="mailto:studio@eliasthorne.film" data-reveal>
                <span className="k">Email</span><span className="v">studio@eliasthorne.film</span>
              </a>
              <div className="cblock" data-reveal>
                <span className="k">Elsewhere</span>
                <div className="csocials"><a href="#">Instagram</a><a href="#">YouTube</a><a href="#">Vimeo</a><a href="#">LinkedIn</a></div>
              </div>
              <div className="cblock" data-reveal>
                <span className="k">Based in</span><span className="v">Lisbon · London</span><span className="sub">Filming worldwide</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer__top">
          <a href="#top" className="footer__mark" data-magnetic>Elias <span className="serif">Thorne</span></a>
          <a href="#top" className="footer__back">Back to top ↑</a>
        </div>
        <div className="footer__cols">
          <div><span className="footer__h">Menu</span><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="#process">Process</a></div>
          <div><span className="footer__h">Social</span><a href="#">Instagram</a><a href="#">YouTube</a><a href="#">Vimeo</a><a href="#">LinkedIn</a></div>
          <div><span className="footer__h">Contact</span><a href="mailto:studio@eliasthorne.film">studio@eliasthorne.film</a><a href="#">+351 910 000 000</a><a href="#contact">Book a project</a></div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Elias Thorne. All rights reserved.</span>
          <span className="footer__credit">
            Made with Intent by <a href="https://webzyinc.com" target="_blank" rel="noopener noreferrer">Webzy</a>
          </span>
          <span>Lisbon — 38.7°N</span>
        </div>
      </footer>
    </>
  );
}

function av(bg) {
  return {
    background: bg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--f-disp)",
    fontWeight: 700,
    fontSize: 14,
    color: "var(--gold)",
  };
}
