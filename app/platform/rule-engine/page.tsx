// app/platform/rule-engine/page.tsx

import type { Metadata } from "next";
import Image from "next/image";

const SITE_URL = "https://www.waaza.co";

export const metadata: Metadata = {
  title: "The Rule Engine: Deterministic Yacht Financing Intelligence | Waaza",
  description: "Waaza's rule engine encodes lender criteria, vessel risk factors, and structuring logic into a versioned, auditable system — producing consistent financing assessments at scale.",
  alternates: { canonical: `${SITE_URL}/platform/rule-engine/` },
  openGraph: {
    title: "Waaza Rule Engine",
    description: "Deterministic, versioned financing intelligence. Not a black box.",
    url: `${SITE_URL}/platform/rule-engine/`,
    siteName: "Waaza", locale: "en_GB", type: "website",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
};

const C = {
  bg: "#f4f3ef", black: "#0a0a0a", gray1: "#1a1a1a", gray2: "#4b5563",
  gray3: "#6b7280", gray4: "#9ca3af", gray5: "#d1d5db", gray6: "#eae9e4",
  white: "#ffffff", accent: "#FFF86C", accentDark: "#0a0a0a", accentLight: "#fffde0",
};

const principles = [
  {
    heading: "Deterministic",
    body: "The same inputs always produce the same outputs. No probabilistic guessing. No model drift. A rule set applied consistently across every assessment.",
    icon: "◎",
  },
  {
    heading: "Versioned",
    body: "Every rule change is logged, dated, and versioned. You can always see what rule set produced a given assessment — and compare outputs across versions as the engine evolves.",
    icon: "▲",
  },
  {
    heading: "Transparent",
    body: "The output explains itself. Every score, every risk flag, every LTV estimate is traceable to the specific rules that produced it. Not a number from a black box.",
    icon: "⬡",
  },
  {
    heading: "Adjustable",
    body: "Rules are stored in the database, not hardcoded. As lender criteria change, as market conditions shift, the rule set updates — without touching the underlying engine.",
    icon: "⊞",
  },
];

const inputs = [
  { category: "Buyer", items: ["Liquidity available", "Net worth band", "Income type and stability", "Residency and tax jurisdiction", "Intended ownership structure", "Existing leverage"] },
  { category: "Vessel", items: ["Purchase price", "Year built", "Usage type (private / charter)", "Intended flag", "Builder reputation", "Refit history"] },
  { category: "Structure", items: ["Personal or SPV ownership", "Flag jurisdiction", "VAT status", "Leasing arrangement", "Charter income offset"] },
];

export default function RuleEnginePage() {
  return (
    <div style={{ background: C.bg, fontFamily: "'Inter Tight', sans-serif" }}>
      <div style={{ height: 3, background: C.accent }} />

      {/* Hero */}
      <section style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "80px clamp(20px, 5vw, 80px) 100px",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "60px 80px", alignItems: "center",
      }}>
        <div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "4px 12px", background: C.accentLight,
            borderRadius: 6, marginBottom: 28,
            border: `1px solid ${C.accent}80`,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.accentDark }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: C.accentDark, letterSpacing: "0.06em", fontFamily: "'Inter Tight', sans-serif" }}>
              Platform · Rule Engine
            </span>
          </div>
          <h1 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(42px, 5.5vw, 72px)",
            fontWeight: 400, lineHeight: 1.0,
            letterSpacing: -2, color: C.black, marginBottom: 28,
          }}>
            Financing logic<br />
            <em style={{ fontStyle: "italic", color: C.gray2 }}>encoded, not guessed.</em>
          </h1>
          <p style={{
            fontSize: 18, color: C.gray2, lineHeight: 1.75,
            marginBottom: 40, maxWidth: 480,
            fontFamily: "'Inter Tight', sans-serif",
          }}>
            Waaza's rule engine encodes lender criteria, vessel risk factors, and structuring logic into a deterministic, versioned system. The same inputs always produce the same outputs. Every assessment is auditable and explainable.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <a href="/wizard" style={{
              display: "inline-block", padding: "16px 36px",
              background: C.black, color: C.white,
              fontSize: 15, fontWeight: 700, borderRadius: 10,
              textDecoration: "none", fontFamily: "'Inter Tight', sans-serif",
            }}>
              Start a free assessment →
            </a>
            <a href="/documentation" style={{
              display: "inline-block", padding: "16px 24px",
              color: C.gray2, fontSize: 14, fontWeight: 500,
              textDecoration: "none", fontFamily: "'Inter Tight', sans-serif",
            }}>
              Read the documentation
            </a>
          </div>
        </div>
        <div style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4/3" }}>
          <Image
            src="/insurance/waaza-insurance-3.png"
            alt="Waaza rule engine assessing yacht financing inputs against encoded lender criteria"
            width={1080} height={720}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </section>

      {/* Principles */}
      <section style={{ background: C.black, padding: "100px clamp(20px, 5vw, 80px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b7280", marginBottom: 16, fontFamily: "'Inter Tight', sans-serif" }}>Design principles</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -1, color: C.white, maxWidth: 600 }}>
              Built to be trusted, not just used
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}>
            {principles.map((p) => (
              <div key={p.heading} style={{ padding: "40px 36px", background: "#111111", borderRadius: 16, marginBottom: 2 }}>
                <div style={{ fontSize: 28, marginBottom: 20, color: C.accent, lineHeight: 1 }}>{p.icon}</div>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, fontWeight: 400, color: C.white, lineHeight: 1.2, marginBottom: 12 }}>{p.heading}</h3>
                <p style={{ fontSize: 15, color: "#9ca3af", lineHeight: 1.75, fontFamily: "'Inter Tight', sans-serif" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inputs section */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px clamp(20px, 5vw, 80px)" }}>
        <div style={{ marginBottom: 64 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.gray4, marginBottom: 16, fontFamily: "'Inter Tight', sans-serif" }}>What it processes</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -1, color: C.black, maxWidth: 600 }}>
            Three input categories. One structured output.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {inputs.map((input) => (
            <div key={input.category} style={{ padding: "40px 36px", background: C.white, borderRadius: 16, marginRight: 2 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "4px 12px", background: C.accentLight,
                borderRadius: 6, marginBottom: 24,
                border: `1px solid ${C.accent}80`,
              }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: C.accentDark, letterSpacing: "0.05em", fontFamily: "'Inter Tight', sans-serif" }}>
                  {input.category}
                </span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {input.items.map((item) => (
                  <li key={item} style={{
                    display: "flex", alignItems: "flex-start", gap: 10,
                    fontSize: 14, color: C.gray2, lineHeight: 1.6,
                    marginBottom: 10, fontFamily: "'Inter Tight', sans-serif",
                  }}>
                    <span style={{ color: C.gray4, flexShrink: 0, marginTop: 2 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Output section */}
      <section style={{ background: C.accentLight, borderTop: `1px solid ${C.accent}60`, borderBottom: `1px solid ${C.accent}60`, padding: "80px clamp(20px, 5vw, 80px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px 80px", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.accentDark, opacity: 0.6, marginBottom: 16, fontFamily: "'Inter Tight', sans-serif" }}>Output</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -0.8, color: C.black, marginBottom: 20 }}>
              Every output is explainable
            </h2>
            <p style={{ fontSize: 16, color: C.gray2, lineHeight: 1.75, marginBottom: 24, maxWidth: 440, fontFamily: "'Inter Tight', sans-serif" }}>
              The rule engine doesn't produce a number and leave you to interpret it. Every score, every flag, and every LTV estimate is accompanied by the reasoning that produced it — traceable to specific rules and inputs.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { label: "Readiness Score", desc: "0–100 scale with tier classification and supporting rationale" },
                { label: "LTV Estimate Band", desc: "Minimum and maximum based on vessel and buyer profile" },
                { label: "Risk Flags", desc: "Specific issues that affect lender appetite, surfaced clearly" },
                { label: "Structuring Direction", desc: "High-level recommendation on ownership and VAT approach" },
              ].map((output) => (
                <div key={output.label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.accent, flexShrink: 0, marginTop: 6 }} />
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: C.black, marginBottom: 2, fontFamily: "'Inter Tight', sans-serif" }}>{output.label}</div>
                    <div style={{ fontSize: 13, color: C.gray3, lineHeight: 1.5, fontFamily: "'Inter Tight', sans-serif" }}>{output.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderRadius: 16, overflow: "hidden", background: C.white, aspectRatio: "4/3" }}>
            <Image
              src="/insurance/waaza-insurance-4.png"
              alt="Waaza rule engine output showing readiness score, LTV estimate, and risk flags"
              width={1080} height={720}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: C.black, padding: "100px clamp(20px, 5vw, 80px)", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: -1.5, color: C.white, marginBottom: 20 }}>
            See the rule engine in action
          </h2>
          <p style={{ fontSize: 17, color: "#9ca3af", lineHeight: 1.7, marginBottom: 40, fontFamily: "'Inter Tight', sans-serif" }}>
            Run a free assessment. See exactly how the inputs map to the output — score, LTV estimate, flags, and the reasoning behind each.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a href="/wizard" style={{ display: "inline-block", padding: "18px 44px", background: C.accent, color: C.accentDark, fontSize: 16, fontWeight: 700, borderRadius: 10, textDecoration: "none", fontFamily: "'Inter Tight', sans-serif" }}>
              Start a free assessment →
            </a>
            <a href="/documentation" style={{ display: "inline-block", padding: "18px 28px", color: "#9ca3af", fontSize: 15, fontWeight: 500, textDecoration: "none", fontFamily: "'Inter Tight', sans-serif" }}>
              Read the documentation
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          section[style*="grid-template-columns: repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
          section[style*="grid-template-columns: repeat(2, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}