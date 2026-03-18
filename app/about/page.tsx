// app/about/page.tsx
// Pure server component. CSS-only animations.

import type { Metadata } from "next";
import Image from "next/image";

const SITE_URL = "https://www.waaza.co";

export const metadata: Metadata = {
  title: "About Waaza: The Financing Intelligence Layer for Yacht Transactions | Waaza",
  description: "Waaza encodes yacht financing intelligence — structuring logic, lender criteria, readiness scoring — into a structured layer that makes financing conversations better before they begin.",
  alternates: { canonical: `${SITE_URL}/about/` },
  openGraph: {
    title: "About Waaza",
    description: "The financing intelligence layer for yacht transactions.",
    url: `${SITE_URL}/about/`,
    siteName: "Waaza", locale: "en_GB", type: "website",
    images: [{ url: `${SITE_URL}/og/about-og.jpg`, width: 1200, height: 630, alt: "About Waaza" }],
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

const principles = [
  { number: "01", heading: "Intelligence over introductions", body: "Waaza does not connect buyers to lenders. It gives buyers, brokers, and advisers the intelligence to arrive at lender conversations properly prepared. The relationship is theirs. The preparation is ours." },
  { number: "02", heading: "Structure before speed", body: "The instinct in yacht transactions is to move quickly once a buyer is interested. Waaza encourages the opposite: slow down long enough to get the structure right. A well-structured deal closes faster than an ill-structured one." },
  { number: "03", heading: "Embedded, not standalone", body: "Waaza is built to sit inside broker workflows, marketplace platforms, and adviser processes — not to create a new destination. Intelligence is most useful where decisions are being made." },
  { number: "04", heading: "Infrastructure, not a feature", body: "The goal is not a product that gets used once. It's a layer that becomes indispensable — that brokers feel uncomfortable not running, that buyers expect as part of the process." },
];

export default function AboutPage() {
  return (
    <>
      <style>{STYLES}</style>
      <div style={{ background: C.bg, fontFamily: "'Inter Tight', sans-serif" }}>
        <div style={{ height: 3, background: C.accent }} />

        {/* ── Hero — editorial, text-led ── */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "100px clamp(20px,5vw,80px) 80px" }}>
          <div className="hi-eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 12px", background: C.accentLight, borderRadius: 6, marginBottom: 40, border: `1px solid ${C.accent}80` }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.accentDark }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: C.accentDark, letterSpacing: "0.06em" }}>About Waaza</span>
          </div>
          <h1 className="hi-h1" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(48px,7vw,88px)", fontWeight: 400, lineHeight: 0.95, letterSpacing: -3, color: C.black, marginBottom: 48, maxWidth: 800 }}>
            The financing intelligence layer for yacht transactions.
          </h1>
          <div className="hi-body" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 60px", maxWidth: 800 }}>
            <p style={{ fontSize: 18, color: C.gray2, lineHeight: 1.8 }}>
              Yacht transactions are high-value, cross-border, structurally complex, and under-digitised at the intelligence layer. Banks rely on relationships. Brokers rely on experience. Buyers rely on advisers. Nobody owns the intelligence.
            </p>
            <p style={{ fontSize: 18, color: C.gray2, lineHeight: 1.8 }}>
              Waaza encodes the structuring logic, lender criteria, and readiness assessment framework into a system that makes financing conversations better — more structured, more realistic, and more useful — before they begin.
            </p>
          </div>
        </section>

        {/* ── What Waaza is not ── */}
        <section style={{ background: C.black, padding: "80px clamp(20px,5vw,80px)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div className="reveal" style={{ marginBottom: 48 }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b7280", marginBottom: 20 }}>What Waaza is not</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
                {[
                  { label: "Not a brokerage", desc: "Waaza does not buy, sell, or broker yacht transactions." },
                  { label: "Not a lender", desc: "Waaza does not advance funds or take risk on transactions." },
                  { label: "Not a referral network", desc: "Waaza does not earn commission by connecting buyers to lenders." },
                ].map((item, i) => (
                  <div key={item.label} className="reveal" style={{ "--d": `${i * 80}ms`, padding: "32px 28px", background: "#111111", borderRadius: 16 } as React.CSSProperties}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: C.accent, marginBottom: 12, letterSpacing: "0.02em" }}>{item.label}</div>
                    <div style={{ fontSize: 15, color: "#9ca3af", lineHeight: 1.7 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── What it is ── */}
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "100px clamp(20px,5vw,80px)" }}>
          <div className="reveal" style={{ marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.gray4, marginBottom: 16 }}>What it is</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -1, color: C.black, maxWidth: 600 }}>
              An intelligence layer. Not a product. Not a feature.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 60px", marginBottom: 48 }}>
            <div className="reveal">
              <p style={{ fontSize: 16, color: C.gray2, lineHeight: 1.8, marginBottom: 20 }}>
                Waaza is built around a deterministic rule engine that encodes lender criteria, vessel risk factors, and structuring logic — and produces structured, explainable assessments from structured inputs.
              </p>
              <p style={{ fontSize: 16, color: C.gray2, lineHeight: 1.8 }}>
                The engine is versioned. Every rule change is logged. Every assessment is traceable to the rule set that produced it. This is infrastructure thinking, not product thinking.
              </p>
            </div>
            <div className="reveal" style={{ "--d": "100ms" } as React.CSSProperties}>
              <p style={{ fontSize: 16, color: C.gray2, lineHeight: 1.8, marginBottom: 20 }}>
                The output — a readiness score, an LTV estimate, a risk flag summary, a structuring direction — is designed to be useful at the earliest stage of a financing conversation, not as a confirmation of a decision already made.
              </p>
              <p style={{ fontSize: 16, color: C.gray2, lineHeight: 1.8 }}>
                The long-term goal is a dataset of approval outcomes, lender behaviour, and structuring patterns — a moat built from every transaction that passes through the system.
              </p>
            </div>
          </div>
          <div className="reveal" style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "16/7" }}>
            <Image src="/insurance/waaza-insurance-7.png" alt="Waaza financing intelligence — the infrastructure layer for yacht transactions" width={1200} height={525} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </section>

        {/* ── Principles ── */}
        <section style={{ background: C.accentLight, borderTop: `1px solid ${C.accent}60`, borderBottom: `1px solid ${C.accent}60`, padding: "100px clamp(20px,5vw,80px)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div className="reveal" style={{ marginBottom: 64 }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.accentDark, opacity: 0.6, marginBottom: 16 }}>Principles</p>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -1, color: C.black, maxWidth: 500 }}>
                How Waaza is built and why
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {principles.map((p, i) => (
                <div key={p.number} className="reveal" style={{ "--d": `${i * 70}ms`, display: "grid", gridTemplateColumns: "80px 1fr 1fr", gap: "0 48px", padding: "40px 0", borderTop: i > 0 ? `1px solid ${C.accentBorder}` : "none", alignItems: "start" } as React.CSSProperties}>
                  <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 36, fontWeight: 400, color: C.accent, opacity: 0.5, lineHeight: 1, paddingTop: 4 }}>{p.number}</div>
                  <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 24, fontWeight: 400, color: C.black, lineHeight: 1.2 }}>{p.heading}</h3>
                  <p style={{ fontSize: 15, color: C.gray2, lineHeight: 1.75 }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: C.black, padding: "100px clamp(20px,5vw,80px)", textAlign: "center" }}>
          <div className="reveal" style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(36px,5vw,60px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: -1.5, color: C.white, marginBottom: 20 }}>
              See what it produces
            </h2>
            <p style={{ fontSize: 17, color: "#9ca3af", lineHeight: 1.7, marginBottom: 40 }}>
              Run a free assessment. Three minutes. No account required. The output shows exactly what Waaza is — and what it does.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
              <a href="/wizard" className="btn-accent">Start a free assessment →</a>
              <a href="/documentation" className="btn-ghost-light">Read the documentation</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const accentBorder = "#f0ec5a";

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
  .hi-h1      { animation: fadeUp    0.8s cubic-bezier(0.22,1,0.36,1) 0.15s both; }
  .hi-body    { animation: fadeUp    0.7s cubic-bezier(0.22,1,0.36,1) 0.35s both; }
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

  .card-lift { transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s; }
  .card-lift:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.08); }

  .btn-accent { display: inline-block; padding: 18px 44px; background: #FFF86C; color: #0a0a0a; font-size: 16px; font-weight: 700; border-radius: 10px; text-decoration: none; font-family: 'Inter Tight', sans-serif; transition: opacity 0.15s, box-shadow 0.3s; }
  .btn-accent:hover { opacity: 0.9; box-shadow: 0 0 0 4px rgba(255,248,108,0.3); }
  .btn-ghost-light { display: inline-block; padding: 18px 28px; color: #9ca3af; font-size: 15px; font-weight: 500; text-decoration: none; font-family: 'Inter Tight', sans-serif; transition: color 0.15s; }
  .btn-ghost-light:hover { color: #ffffff; }

  @media (max-width: 768px) {
    section[style*="repeat(3"] { grid-template-columns: 1fr !important; }
    section[style*="repeat(2"] { grid-template-columns: 1fr !important; }
    section[style*="1fr 1fr"]  { grid-template-columns: 1fr !important; }
    div[style*="80px 1fr 1fr"] { grid-template-columns: 1fr !important; }
  }
`;