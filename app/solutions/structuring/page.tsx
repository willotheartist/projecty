// app/solutions/structuring/page.tsx
// Pure server component. CSS-only animations.

import type { Metadata } from "next";
import Image from "next/image";

const SITE_URL = "https://www.waaza.co";

export const metadata: Metadata = {
  title: "Yacht Ownership Structuring Intelligence | Waaza",
  description: "Waaza encodes yacht ownership structuring logic — VAT treatment, leasing structures, SPV ownership, flag jurisdiction — and surfaces the right path before any deal is committed.",
  alternates: { canonical: `${SITE_URL}/solutions/structuring/` },
  openGraph: {
    title: "Waaza Structuring Intelligence",
    description: "The structuring conversation should happen before the offer, not after the survey.",
    url: `${SITE_URL}/solutions/structuring/`,
    siteName: "Waaza", locale: "en_GB", type: "website",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
};

export const dynamic = "force-static";
export const revalidate = 86400;

const C = {
  bg: "#f4f3ef", black: "#0a0a0a", gray1: "#1a1a1a", gray2: "#4b5563",
  gray3: "#6b7280", gray4: "#9ca3af", gray5: "#d1d5db", gray6: "#eae9e4",
  white: "#ffffff", accent: "#FFF86C", accentDark: "#0a0a0a", accentLight: "#fffde0",
  accentBorder: "#f0ec5a",
};

const decisions = [
  {
    number: "01",
    heading: "Personal or SPV ownership",
    body: "The ownership vehicle determines what financing is available, what VAT structures are possible, and what the ongoing administrative burden looks like. Getting it wrong means restructuring mid-transaction — which is expensive and disruptive.",
  },
  {
    number: "02",
    heading: "VAT treatment",
    body: "On a €2 million vessel, the difference between a standard purchase and a Malta leasing structure can be €250,000 or more in effective VAT. This decision must be made before the purchase agreement is signed — not after.",
  },
  {
    number: "03",
    heading: "Flag and jurisdiction",
    body: "The flag affects lender appetite, insurance terms, charter permissions, and crew requirements. Some lenders won't finance vessels under certain flags. Discovering this after the purchase agreement is in place creates serious complications.",
  },
];

const features = [
  { icon: "◎", heading: "Ownership vehicle recommendation", body: "Personal, Maltese SPV, or other structure — Waaza surfaces the right vehicle based on vessel value, buyer residency, intended use, and VAT position." },
  { icon: "▲", heading: "VAT structuring direction", body: "Malta leasing or standard purchase? The engine identifies when a leasing structure produces material VAT savings and flags it early — when there's still time to set it up correctly." },
  { icon: "⬡", heading: "Flag and jurisdiction flags", body: "Vessel flags that create lender or insurer complications are surfaced in the risk flags output — before the vessel is purchased and before any financing is committed." },
  { icon: "⊞", heading: "Structuring integrated with financing", body: "Waaza doesn't assess structuring in isolation. The financing implications of every structuring decision — LTV impact, lender appetite, documentation requirements — are modelled together." },
];

const structuringGuides = [
  { label: "Yacht VAT Explained", href: "/structuring/yacht-vat-explained/", desc: "When it applies, how much it costs, how leasing reduces it." },
  { label: "Malta Yacht Leasing", href: "/structuring/malta-yacht-leasing/", desc: "How the structure works and when to use it." },
  { label: "Personal vs SPV Ownership", href: "/structuring/personal-vs-spv-yacht-ownership/", desc: "Financing, tax, and operational implications of each." },
  { label: "Buying Through a Company", href: "/structuring/buying-a-yacht-through-a-company/", desc: "When company ownership makes sense — and when it doesn't." },
];

export default function SolutionsStructuringPage() {
  return (
    <>
      <style>{STYLES}</style>
      <div style={{ background: C.bg, fontFamily: "'Inter Tight', sans-serif" }}>
        <div style={{ height: 3, background: C.accent }} />

        {/* ── Hero ── */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px clamp(20px,5vw,80px) 100px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px 80px", alignItems: "center" }}>
          <div>
            <div className="hi-eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 12px", background: C.accentLight, borderRadius: 6, marginBottom: 28, border: `1px solid ${C.accent}80` }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.accentDark }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: C.accentDark, letterSpacing: "0.06em" }}>Solutions · Structuring</span>
            </div>
            <h1 className="hi-h1" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(42px,5.5vw,72px)", fontWeight: 400, lineHeight: 1.0, letterSpacing: -2, color: C.black, marginBottom: 28 }}>
              Structure the deal<br /><em style={{ fontStyle: "italic", color: C.gray2 }}>before it's a deal.</em>
            </h1>
            <p className="hi-body" style={{ fontSize: 18, color: C.gray2, lineHeight: 1.75, marginBottom: 40, maxWidth: 480 }}>
              Ownership vehicle, VAT treatment, leasing structure, flag jurisdiction — these decisions shape the total cost and the financing options available. Waaza encodes the structuring logic and surfaces the right path before any commitment is made.
            </p>
            <div className="hi-ctas" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <a href="/wizard" className="btn-primary">Run a structuring assessment →</a>
              <a href="/structuring" className="btn-ghost">Read the structuring guides</a>
            </div>
          </div>
          <div className="hi-image" style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4/3" }}>
            <Image src="/insurance/waaza-insurance-4.png" alt="Waaza structuring intelligence surfacing ownership vehicle and VAT treatment recommendations" width={1080} height={720} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </section>

        {/* ── Stats ── */}
        <div style={{ background: C.black, padding: "48px clamp(20px,5vw,80px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 40 }}>
            {[
              { n: "€250,000+", l: "Potential VAT saving on a €2m vessel via Malta leasing" },
              { n: "Before", l: "The purchase agreement — when structuring decisions must be made" },
              { n: "3 decisions", l: "That shape the total cost of every yacht transaction" },
            ].map((s, i) => (
              <div key={s.l} className="reveal" style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 400, color: C.accent, lineHeight: 1, marginBottom: 8 }}>{s.n}</div>
                <div style={{ fontSize: 14, color: "#9ca3af", lineHeight: 1.5 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Decisions ── */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px clamp(20px,5vw,80px)" }}>
          <div className="reveal" style={{ marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.gray4, marginBottom: 16 }}>The decisions that matter</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -1, color: C.black, maxWidth: 600 }}>
              Three structuring decisions every buyer gets wrong when they're left too late
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
            {decisions.map((d, i) => (
              <div key={d.number} className="reveal card-lift" style={{ "--d": `${i * 80}ms`, padding: "40px 36px", background: C.white, borderRadius: 16 } as React.CSSProperties}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 48, fontWeight: 400, color: C.gray6, lineHeight: 1, marginBottom: 20 }}>{d.number}</div>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, fontWeight: 400, color: C.black, lineHeight: 1.2, marginBottom: 16 }}>{d.heading}</h3>
                <p style={{ fontSize: 15, color: C.gray2, lineHeight: 1.75 }}>{d.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Features ── */}
        <section style={{ background: C.black, padding: "100px clamp(20px,5vw,80px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="reveal" style={{ marginBottom: 64 }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b7280", marginBottom: 16 }}>How Waaza helps</p>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -1, color: C.white, maxWidth: 600 }}>
                Structuring intelligence encoded, not improvised
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 2 }}>
              {features.map((f, i) => (
                <div key={f.heading} className="reveal card-lift" style={{ "--d": `${i * 80}ms`, padding: "40px 36px", background: "#111111", borderRadius: 16 } as React.CSSProperties}>
                  <div style={{ fontSize: 28, marginBottom: 20, color: C.accent, lineHeight: 1 }}>{f.icon}</div>
                  <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, fontWeight: 400, color: C.white, lineHeight: 1.2, marginBottom: 12 }}>{f.heading}</h3>
                  <p style={{ fontSize: 15, color: "#9ca3af", lineHeight: 1.75 }}>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Guides strip ── */}
        <section style={{ background: C.accentLight, borderTop: `1px solid ${C.accent}60`, borderBottom: `1px solid ${C.accent}60`, padding: "80px clamp(20px,5vw,80px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="reveal" style={{ marginBottom: 48 }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.accentDark, opacity: 0.6, marginBottom: 16 }}>Structuring guides</p>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -0.8, color: C.black, maxWidth: 560 }}>
                The intelligence, explained in full
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {structuringGuides.map((g, i) => (
                <a key={g.label} href={g.href} className="reveal guide-row" style={{ "--d": `${i * 60}ms`, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0", borderTop: `1px solid ${C.accentBorder}`, textDecoration: "none" } as React.CSSProperties}>
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 500, color: C.black, marginBottom: 4 }}>{g.label}</div>
                    <div style={{ fontSize: 14, color: C.gray3 }}>{g.desc}</div>
                  </div>
                  <span style={{ fontSize: 20, color: C.accentDark, flexShrink: 0, marginLeft: 24 }}>→</span>
                </a>
              ))}
              <div style={{ borderTop: `1px solid ${C.accentBorder}` }} />
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: C.black, padding: "100px clamp(20px,5vw,80px)", textAlign: "center" }}>
          <div className="reveal" style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(36px,5vw,60px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: -1.5, color: C.white, marginBottom: 20 }}>
              Get the structuring direction right, first time
            </h2>
            <p style={{ fontSize: 17, color: "#9ca3af", lineHeight: 1.7, marginBottom: 40 }}>
              Run a free assessment. Waaza surfaces the ownership vehicle, VAT treatment, and structuring considerations relevant to your specific transaction — before any commitment is made.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
              <a href="/wizard" className="btn-accent">Run a structuring assessment →</a>
              <a href="/structuring" className="btn-ghost-light">Browse the structuring guides</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const STYLES = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideRight {
    from { opacity: 0; transform: translateX(-16px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .hi-eyebrow { animation: slideRight 0.5s cubic-bezier(0.22,1,0.36,1) 0.1s both; }
  .hi-h1      { animation: fadeUp    0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both; }
  .hi-body    { animation: fadeUp    0.7s cubic-bezier(0.22,1,0.36,1) 0.35s both; }
  .hi-ctas    { animation: fadeUp    0.7s cubic-bezier(0.22,1,0.36,1) 0.48s both; }
  .hi-image   { animation: fadeIn    0.9s cubic-bezier(0.22,1,0.36,1) 0.3s both; }

  @supports (animation-timeline: view()) {
    .reveal {
      animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both;
      animation-timeline: view();
      animation-range: entry 0% entry 30%;
      animation-delay: var(--d, 0ms);
    }
  }
  @supports not (animation-timeline: view()) {
    .reveal { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) var(--d, 0ms) both; }
  }

  .card-lift { transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s cubic-bezier(0.22,1,0.36,1); }
  .card-lift:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.08); }

  .guide-row { transition: padding-left 0.2s cubic-bezier(0.22,1,0.36,1); }
  .guide-row:hover { padding-left: 8px !important; }

  --accentBorder: #f0ec5a;

  .btn-primary { display: inline-block; padding: 16px 36px; background: #0a0a0a; color: #fff; font-size: 15px; font-weight: 700; border-radius: 10px; text-decoration: none; font-family: 'Inter Tight', sans-serif; transition: opacity 0.15s; }
  .btn-primary:hover { opacity: 0.85; }
  .btn-accent { display: inline-block; padding: 18px 44px; background: #FFF86C; color: #0a0a0a; font-size: 16px; font-weight: 700; border-radius: 10px; text-decoration: none; font-family: 'Inter Tight', sans-serif; transition: opacity 0.15s, box-shadow 0.3s; }
  .btn-accent:hover { opacity: 0.9; box-shadow: 0 0 0 4px rgba(255,248,108,0.3); }
  .btn-ghost { display: inline-block; padding: 16px 24px; color: #4b5563; font-size: 14px; font-weight: 500; text-decoration: none; font-family: 'Inter Tight', sans-serif; transition: color 0.15s; }
  .btn-ghost:hover { color: #0a0a0a; }
  .btn-ghost-light { display: inline-block; padding: 18px 28px; color: #9ca3af; font-size: 15px; font-weight: 500; text-decoration: none; font-family: 'Inter Tight', sans-serif; transition: color 0.15s; }
  .btn-ghost-light:hover { color: #ffffff; }

  @media (max-width: 768px) {
    section[style*="repeat(3"] { grid-template-columns: 1fr !important; }
    section[style*="repeat(2"] { grid-template-columns: 1fr !important; }
    section[style*="1fr 1fr"]  { grid-template-columns: 1fr !important; }
  }
`;

const accentBorder = "#f0ec5a";