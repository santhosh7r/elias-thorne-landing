import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://eliasthorne.film"),
  title: "Elias Thorne — Filmmaker & Creative Director",
  description:
    "Elias Thorne directs cinematic adverts, brand films, documentaries and music videos. Films that move people — and numbers.",
  openGraph: {
    title: "Elias Thorne — Filmmaker & Creative Director",
    description: "Films that move people — and numbers.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&f[]=satoshi@500,700,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;450;500&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
