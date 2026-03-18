// app/platform/scenario-modelling/page.tsx
// Pure server component. CSS-only animations throughout.
// Hero: staggered fadeUp on load. Scroll: animation-timeline view().

import type { Metadata } from "next";
import Image from "next/image";

const SITE_URL = "https://www.waaza.co";

export const metadata: Metadata = {
  title: "Scenario Modelling: Compare Financing Structures Side by Side | Waaza",
  description: "Waaza's scenario modelling engine lets brokers and buyers compare loan vs leasing, different LTV levels, and ownership structures — with full cost projections — before approaching a lender.",
  alternates: { canonical: `${SITE_URL}/platform/scenario-modelling/` },
  openGraph: {
    title: "Waaza Scenario Modelling",
    description: "Compare loan vs leasing, different LTV levels, and ownership structures side by side.",
    url: `${SITE_URL}/platform/scenario-modelling/`,
    siteName: "Waaza", locale: "en_GB", type: "website",
    images: [{ url: `${SITE_URL}/og/platform-scenario-modelling-og.jpg`, width: 1200, height: 630, alt: "Waaza Scenario Modelling" }],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
};

export const dynamic = "force-static";
export const revalidate = 86400;

const C = {
  bg: "#f4f3ef", black: "#0a0a0a", gray1: "#1a1a1a", gray2: "#4b5563",
  gray3: "#6b7280", gray4: "#9ca3af", gray5: "#d1d5db", gray6: "#eae9e4",
  white: "#ffffff", accent: "#FFF86C", accentDark: "#0a0a0a", accentLight: "#fffde0",
};

const scenarios = [
  { label: "Loan — Personal", ltv: "65%", vatCost: "€360,000", fiveYearCost: "€855,000", highlight: false },
  { label: "Malta Leasing — SPV", ltv: "65%", vatCost: "€108,000", fiveYearCost: "€628,000", highlight: true },
  { label: "Loan — Higher Deposit", ltv: "50%", vatCost: "€360,000", fiveYearCost: "€740,000", highlight: false },
];

const capabilities = [
  { icon: "◎", heading: "Loan vs leasing comparison", body: "Place a standard marine loan and a Malta leasing structure side by side — same vessel, same buyer, full cost difference surfaced." },
  { icon: "▲", heading: "LTV sensitivity analysis", body: "See how changing the deposit level affects monthly payments, total interest cost, and five-year total outlay across any scenario." },
  { icon: "⬡", heading: "Ownership structure modelling", body: "Model the financing implications of personal ownership, Maltese SPV, and other structures — including how each affects lender appetite and LTV." },
  { icon: "⊞", heading: "Five-year cost projection", body: "Every scenario includes a full five-year cost model — interest, principal, VAT, leasing fees, and admin costs — so the true comparison is visible." },
];

export default function ScenarioModellingPage() {
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
              <span style={{ fontSize: 12, fontWeight: 700, color: C.accentDark, letterSpacing: "0.06em" }}>Platform · Scenario Modelling</span>
            </div>
            <h1 className="hi-h1" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(42px,5.5vw,72px)", fontWeight: 400, lineHeight: 1.0, letterSpacing: -2, color: C.black, marginBottom: 28 }}>
              Every structure.<br /><em style={{ fontStyle: "italic", color: C.gray2 }}>Side by side.</em>
            </h1>
            <p className="hi-body" style={{ fontSize: 18, color: C.gray2, lineHeight: 1.75, marginBottom: 40, maxWidth: 480 }}>
              Waaza's scenario engine lets you compare financing structures before committing to any of them. Loan vs leasing. Different LTV levels. Personal vs SPV. Full five-year cost projection on each.
            </p>
            <div className="hi-ctas" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <a href="/simulator" className="btn-primary">Try the simulator →</a>
              <a href="/wizard" className="btn-ghost">Run a full assessment</a>
            </div>
          </div>

          {/* Scenario table in hero */}
          <div className="hi-image" style={{ borderRadius: 20, background: C.black, padding: "32px 28px" }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6b7280", marginBottom: 20 }}>
              Scenario comparison — €2m vessel
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 8, padding: "8px 12px" }}>
              {["Structure", "VAT cost", "5yr cost", ""].map((h) => (
                <div key={h} style={{ fontSize: 11, fontWeight: 600, color: "#4b5563" }}>{h}</div>
              ))}
            </div>
            {scenarios.map((s) => (
              <div key={s.label} className="scenario-row" style={{
                display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr",
                gap: 8, padding: "14px 12px", marginBottom: 2,
                background: s.highlight ? "#1a4d2e" : "#111111",
                borderRadius: 10,
                borderLeft: s.highlight ? `3px solid ${C.accent}` : "3px solid transparent",
              }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: s.highlight ? C.accent : C.white }}>{s.label}</div>
                  <div style={{ fontSize: 11, color: "#6b7280", marginTop: 2 }}>LTV {s.ltv}</div>
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: s.highlight ? C.accent : "#9ca3af", display: "flex", alignItems: "center" }}>{s.vatCost}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: s.highlight ? C.accent : "#9ca3af", display: "flex", alignItems: "center" }}>{s.fiveYearCost}</div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {s.highlight && <span style={{ fontSize: 10, fontWeight: 700, color: "#1a4d2e", background: C.accent, padding: "2px 8px", borderRadius: 20 }}>Best</span>}
                </div>
              </div>
            ))}
            <div style={{ fontSize: 11, color: "#4b5563", marginTop: 16 }}>Indicative — 65% LTV, 10yr term, EU waters</div>
          </div>
        </section>

        {/* ── Stats ── */}
        <div style={{ background: C.black, padding: "48px clamp(20px,5vw,80px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 40 }}>
            {[
              { n: "3 scenarios", l: "Modelled simultaneously side by side" },
              { n: "5-year", l: "Full cost projection on every structure" },
              { n: "1 decision", l: "Made with full information, not instinct" },
            ].map((s, i) => (
              <div key={s.l} className="reveal" style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 400, color: C.accent, lineHeight: 1, marginBottom: 8 }}>{s.n}</div>
                <div style={{ fontSize: 14, color: "#9ca3af", lineHeight: 1.5 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Capabilities ── */}
        <section style={{ background: C.black, padding: "100px clamp(20px,5vw,80px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="reveal" style={{ marginBottom: 64 }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b7280", marginBottom: 16 }}>Capabilities</p>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -1, color: C.white, maxWidth: 600 }}>
                Every comparison a buyer needs before they decide
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 2 }}>
              {capabilities.map((c, i) => (
                <div key={c.heading} className="reveal card-lift" style={{ "--d": `${i * 80}ms`, padding: "40px 36px", background: "#111111", borderRadius: 16 } as React.CSSProperties}>
                  <div style={{ fontSize: 28, marginBottom: 20, color: C.accent, lineHeight: 1 }}>{c.icon}</div>
                  <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, fontWeight: 400, color: C.white, lineHeight: 1.2, marginBottom: 12 }}>{c.heading}</h3>
                  <p style={{ fontSize: 15, color: "#9ca3af", lineHeight: 1.75 }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why model ── */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px clamp(20px,5vw,80px)" }}>
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px 80px", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.gray4, marginBottom: 16 }}>Why it matters</p>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -0.8, color: C.black, marginBottom: 20 }}>
                The right structure isn't obvious until you model it
              </h2>
              <p style={{ fontSize: 16, color: C.gray2, lineHeight: 1.75, marginBottom: 24 }}>
                On a €2 million vessel over 16 metres, the Malta leasing structure saves approximately €250,000 in effective VAT versus a standard purchase. That number is not obvious without running the model. Most buyers — and many brokers — don't know it until it's explained with the figures in front of them.
              </p>
              <p style={{ fontSize: 16, color: C.gray2, lineHeight: 1.75, marginBottom: 32 }}>
                Scenario modelling makes the invisible visible. The right decision is the one made with full information.
              </p>
              <a href="/simulator" className="btn-primary">Open the simulator →</a>
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
              <Image src="/insurance/waaza-insurance-4.png" alt="Waaza scenario modelling cost comparison between loan and leasing structures" width={1080} height={720} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: C.black, padding: "100px clamp(20px,5vw,80px)", textAlign: "center" }}>
          <div className="reveal" style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(36px,5vw,60px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: -1.5, color: C.white, marginBottom: 20 }}>
              Model your scenarios now
            </h2>
            <p style={{ fontSize: 17, color: "#9ca3af", lineHeight: 1.7, marginBottom: 40 }}>
              Enter vessel value, buyer profile, and intended structure. Get a side-by-side cost comparison in under two minutes.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
              <a href="/simulator" className="btn-accent">Try the simulator →</a>
              <a href="/wizard" className="btn-ghost-light">Run a full assessment</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const STYLES = `
  /* ── Page load hero animations ── */
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

  .scenario-row { animation: fadeUp 0.45s cubic-bezier(0.22,1,0.36,1) calc(0.5s + var(--d, 0ms)) both; }

  /* ── Scroll reveal — CSS animation-timeline ── */
  @supports (animation-timeline: view()) {
    .reveal {
      animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both;
      animation-timeline: view();
      animation-range: entry 0% entry 30%;
      animation-delay: var(--d, 0ms);
    }
  }

  /* Fallback for browsers without animation-timeline */
  @supports not (animation-timeline: view()) {
    .reveal {
      animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) var(--d, 0ms) both;
    }
  }

  /* ── Card hover lift ── */
  .card-lift {
    transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s cubic-bezier(0.22,1,0.36,1);
  }
  .card-lift:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.12); }

  /* ── Buttons ── */
  .btn-primary {
    display: inline-block; padding: 16px 36px;
    background: #0a0a0a; color: #ffffff;
    font-size: 15px; font-weight: 700; border-radius: 10px;
    text-decoration: none; font-family: 'Inter Tight', sans-serif;
    transition: opacity 0.15s;
  }
  .btn-primary:hover { opacity: 0.85; }

  .btn-accent {
    display: inline-block; padding: 18px 44px;
    background: #FFF86C; color: #0a0a0a;
    font-size: 16px; font-weight: 700; border-radius: 10px;
    text-decoration: none; font-family: 'Inter Tight', sans-serif;
    transition: opacity 0.15s, box-shadow 0.3s;
  }
  .btn-accent:hover { opacity: 0.9; box-shadow: 0 0 0 4px rgba(255,248,108,0.3); }

  .btn-ghost {
    display: inline-block; padding: 16px 24px;
    color: #4b5563; font-size: 14px; font-weight: 500;
    text-decoration: none; font-family: 'Inter Tight', sans-serif;
    transition: color 0.15s;
  }
  .btn-ghost:hover { color: #0a0a0a; }

  .btn-ghost-light {
    display: inline-block; padding: 18px 28px;
    color: #9ca3af; font-size: 15px; font-weight: 500;
    text-decoration: none; font-family: 'Inter Tight', sans-serif;
    transition: color 0.15s;
  }
  .btn-ghost-light:hover { color: #ffffff; }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    section[style*="repeat(2"] { grid-template-columns: 1fr !important; }
    section[style*="1fr 1fr"]  { grid-template-columns: 1fr !important; }
    div[style*="repeat(3"]     { grid-template-columns: 1fr !important; }
  }
`;