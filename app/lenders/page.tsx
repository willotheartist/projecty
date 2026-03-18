// app/lenders/page.tsx — Lenders silo hub

import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

const SITE_URL = "https://www.waaza.co";

export const metadata: Metadata = {
  title: "Who Finances Yachts: Lender Intelligence Hub | Waaza",
  description: "The complete guide to yacht lenders — who they are, what they look for, how private banks differ from marine lenders, and how to approach the right one for your transaction.",
  alternates: { canonical: `${SITE_URL}/lenders/` },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

const pages = [
  { href: "/lenders/who-finances-yachts-in-the-uk/", title: "Who finances yachts in the UK", desc: "The lenders, banks, and marine finance houses that actually lend against vessels." },
  { href: "/lenders/private-bank-vs-marine-lender/", title: "Private bank vs marine lender", desc: "How the two main lender types differ in appetite, process, and terms." },
  { href: "/lenders/what-lenders-look-for-in-a-yacht-loan/", title: "What lenders look for in a yacht loan", desc: "The exact criteria lenders use to assess a yacht financing application." },
  { href: "/lenders/lloyds-bank-yacht-financing/", title: "Lloyds Bank yacht financing", desc: "What Lloyds offers for yacht purchases and what they require." },
  { href: "/lenders/bnp-paribas-yacht-financing/", title: "BNP Paribas yacht financing", desc: "BNP Paribas's marine finance offering and typical client profile." },
];

const C = {
  bg: "#f4f3ef", black: "#0a0a0a", gray2: "#4b5563",
  gray6: "#eae9e4", accent: "#1a4d2e", accentLight: "#e8f5ee", accentBorder: "#b7dfc8",
};

export default function LendersHubPage() {
  return (
    <div style={{ background: C.bg, minHeight: "100vh", fontFamily: "'Inter Tight', sans-serif" }}>
      <div style={{ height: 3, background: C.accent }} />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "64px clamp(20px, 4vw, 60px) 100px" }}>

        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 12px", background: C.accentLight, borderRadius: 6, marginBottom: 24, border: `1px solid ${C.accentBorder}` }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.accent }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: C.accent, letterSpacing: "0.05em" }}>Lender Intelligence</span>
        </div>

        <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(38px, 5vw, 64px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: -1.5, color: C.black, marginBottom: 20, maxWidth: 700 }}>
          Who finances yachts — and what they actually want
        </h1>

        <p style={{ fontSize: 18, color: C.gray2, lineHeight: 1.75, marginBottom: 56, maxWidth: 600 }}>
          The yacht lending market is small, relationship-driven, and opaque. This hub covers every major lender type operating in the UK and European market — what they finance, what they require, and how to approach them effectively.
        </p>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {pages.map((page) => (
            <a key={page.href} href={page.href} className="lndr-hub-link" style={{
              display: "block", padding: "24px 0",
              borderTop: `1px solid ${C.gray6}`,
              textDecoration: "none", transition: "padding-left 0.15s",
            }}>
              <div style={{ fontSize: 19, fontWeight: 500, color: C.black, marginBottom: 6 }}>{page.title}</div>
              <div style={{ fontSize: 14, color: "#6b7280" }}>{page.desc}</div>
            </a>
          ))}
          <div style={{ borderTop: `1px solid ${C.gray6}` }} />
        </div>
      </div>
      <style>{`
        .lndr-hub-link:hover { padding-left: 6px !important; }
        .lndr-hub-link:hover div:first-child { color: #1a4d2e; text-decoration: underline; }
      `}</style>
    </div>
  );
}