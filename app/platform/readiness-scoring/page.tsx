// app/platform/readiness-scoring/page.tsx

import type { Metadata } from "next";
import Image from "next/image";

const SITE_URL = "https://www.waaza.co";

export const metadata: Metadata = {
  title: "Financing Readiness Scoring: Know Where Your Buyer Stands | Waaza",
  description: "Waaza's readiness scoring system gives brokers and buyers a structured 0–100 financing readiness score — with supporting LTV estimate, risk flags, and structuring direction.",
  alternates: { canonical: `${SITE_URL}/platform/readiness-scoring/` },
  openGraph: {
    title: "Waaza Readiness Scoring",
    description: "Know where your buyer stands before you call a lender.",
    url: `${SITE_URL}/platform/readiness-scoring/`,
    siteName: "Waaza", locale: "en_GB", type: "website",
    images: [{ url: `${SITE_URL}/og/platform-readiness-scoring-og.jpg`, width: 1200, height: 630, alt: "Waaza Readiness Scoring" }],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
};

const C = {
  bg: "#f4f3ef", black: "#0a0a0a", gray1: "#1a1a1a", gray2: "#4b5563",
  gray3: "#6b7280", gray4: "#9ca3af", gray5: "#d1d5db", gray6: "#eae9e4",
  white: "#ffffff", accent: "#FFF86C", accentDark: "#0a0a0a", accentLight: "#fffde0",
};

const tiers = [
  {
    range: "80 – 100",
    label: "Finance Ready",
    color: "#22c55e",
    bg: "#f0fdf4",
    desc: "Strong buyer profile, acceptable vessel, clean structure. Suitable for immediate lender outreach with a well-prepared submission.",
  },
  {
    range: "50 – 79",
    label: "Conditional",
    color: "#f59e0b",
    bg: "#fffbeb",
    desc: "Financing is achievable but requires structuring work — address ownership structure, VAT position, or deposit level before approaching lenders.",
  },
  {
    range: "0 – 49",
    label: "High Complexity",
    color: "#ef4444",
    bg: "#fef2f2",
    desc: "Significant barriers to standard financing. Specialist lender required, or fundamental changes needed to the vessel, buyer profile, or structure.",
  },
];

const scoreFactors = [
  { label: "Liquidity strength", weight: "High", desc: "Available liquid assets relative to deposit requirement" },
  { label: "Income stability", weight: "High", desc: "Type, consistency, and documentability of income" },
  { label: "Asset quality", weight: "Medium", desc: "Vessel age, condition, flag, and builder reputation" },
  { label: "Structuring complexity", weight: "Medium", desc: "Ownership vehicle, VAT clarity, leasing requirements" },
  { label: "Jurisdiction sensitivity", weight: "Medium", desc: "Buyer residency, vessel flag, and lender jurisdiction appetite" },
  { label: "Existing leverage", weight: "Low–medium", desc: "Existing debts and financial commitments relative to income" },
];

export default function ReadinessScoringPage() {
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
              Platform · Readiness Scoring
            </span>
          </div>
          <h1 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(42px, 5.5vw, 72px)",
            fontWeight: 400, lineHeight: 1.0,
            letterSpacing: -2, color: C.black, marginBottom: 28,
          }}>
            Know where<br />
            your buyer stands.<br />
            <em style={{ fontStyle: "italic", color: C.gray2 }}>Before the lender does.</em>
          </h1>
          <p style={{
            fontSize: 18, color: C.gray2, lineHeight: 1.75,
            marginBottom: 40, maxWidth: 480,
            fontFamily: "'Inter Tight', sans-serif",
          }}>
            The financing readiness score gives brokers, buyers, and advisors a single, structured number that reflects the full financing picture — buyer profile, vessel quality, ownership structure, and risk flags combined.
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
            <a href="/platform/rule-engine" style={{
              display: "inline-block", padding: "16px 24px",
              color: C.gray2, fontSize: 14, fontWeight: 500,
              textDecoration: "none", fontFamily: "'Inter Tight', sans-serif",
            }}>
              How the engine works
            </a>
          </div>
        </div>

        {/* Score visual */}
        <div style={{
          borderRadius: 20, background: C.black,
          padding: "48px 40px",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          aspectRatio: "4/3",
        }}>
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b7280", marginBottom: 16, fontFamily: "'Inter Tight', sans-serif" }}>
            Readiness Score
          </div>
          <div style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 120, fontWeight: 400,
            color: C.accent, lineHeight: 1,
            marginBottom: 8,
          }}>
            74
          </div>
          <div style={{
            display: "inline-block", padding: "6px 16px",
            background: "#fffbeb", borderRadius: 20,
            fontSize: 13, fontWeight: 700, color: "#f59e0b",
            fontFamily: "'Inter Tight', sans-serif", marginBottom: 32,
          }}>
            Conditional — structuring required
          </div>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { label: "LTV estimate", value: "55–65%" },
              { label: "Risk flags", value: "2 identified" },
              { label: "Structuring", value: "SPV recommended" },
            ].map((item) => (
              <div key={item.label} style={{
                display: "flex", justifyContent: "space-between",
                padding: "10px 16px",
                background: "#111111", borderRadius: 8,
              }}>
                <span style={{ fontSize: 13, color: "#6b7280", fontFamily: "'Inter Tight', sans-serif" }}>{item.label}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: C.white, fontFamily: "'Inter Tight', sans-serif" }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px clamp(20px, 5vw, 80px)" }}>
        <div style={{ marginBottom: 64 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.gray4, marginBottom: 16, fontFamily: "'Inter Tight', sans-serif" }}>Score tiers</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -1, color: C.black, maxWidth: 600 }}>
            Three tiers. Clear implications for each.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {tiers.map((tier) => (
            <div key={tier.label} style={{ padding: "40px 36px", background: C.white, borderRadius: 16, marginRight: 2 }}>
              <div style={{
                display: "inline-block", padding: "6px 16px",
                background: tier.bg, borderRadius: 20,
                fontSize: 13, fontWeight: 700, color: tier.color,
                fontFamily: "'Inter Tight', sans-serif", marginBottom: 20,
              }}>
                {tier.label}
              </div>
              <div style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: 40, fontWeight: 400,
                color: C.black, lineHeight: 1, marginBottom: 16,
              }}>
                {tier.range}
              </div>
              <p style={{ fontSize: 15, color: C.gray2, lineHeight: 1.75, fontFamily: "'Inter Tight', sans-serif" }}>
                {tier.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Score factors */}
      <section style={{ background: C.black, padding: "100px clamp(20px, 5vw, 80px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b7280", marginBottom: 16, fontFamily: "'Inter Tight', sans-serif" }}>What drives the score</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -1, color: C.white, maxWidth: 600 }}>
              Six weighted factors. Every one explained.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {scoreFactors.map((factor, i) => (
              <div key={factor.label} style={{
                display: "grid", gridTemplateColumns: "2fr 1fr 3fr",
                gap: 40, alignItems: "center",
                padding: "24px 0",
                borderTop: i === 0 ? "none" : "1px solid #222222",
              }}>
                <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 16, fontWeight: 600, color: C.white }}>
                  {factor.label}
                </div>
                <div style={{
                  display: "inline-flex", padding: "4px 12px",
                  background: "#1a1a1a", borderRadius: 20,
                  fontSize: 12, fontWeight: 600, color: C.accent,
                  fontFamily: "'Inter Tight', sans-serif",
                  width: "fit-content",
                }}>
                  {factor.weight}
                </div>
                <div style={{ fontSize: 14, color: "#6b7280", fontFamily: "'Inter Tight', sans-serif", lineHeight: 1.6 }}>
                  {factor.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section style={{ background: C.accentLight, borderTop: `1px solid ${C.accent}60`, borderBottom: `1px solid ${C.accent}60`, padding: "80px clamp(20px, 5vw, 80px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px 80px", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.accentDark, opacity: 0.6, marginBottom: 16, fontFamily: "'Inter Tight', sans-serif" }}>Why it matters</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -0.8, color: C.black, marginBottom: 20 }}>
              A score that changes broker behaviour
            </h2>
            <p style={{ fontSize: 16, color: C.gray2, lineHeight: 1.75, marginBottom: 24, maxWidth: 440, fontFamily: "'Inter Tight', sans-serif" }}>
              The readiness score isn't a vanity metric. It's a decision tool. A score of 82 tells a broker to proceed confidently. A score of 51 tells them to address two specific issues before approaching a lender. A score of 34 tells them to have a different kind of conversation with the buyer entirely.
            </p>
            <p style={{ fontSize: 16, color: C.gray2, lineHeight: 1.75, marginBottom: 32, fontFamily: "'Inter Tight', sans-serif" }}>
              The score changes what happens next. That's the point.
            </p>
            <a href="/wizard" style={{ display: "inline-block", padding: "14px 28px", background: C.black, color: C.white, fontSize: 14, fontWeight: 700, borderRadius: 10, textDecoration: "none", fontFamily: "'Inter Tight', sans-serif" }}>
              Run a scoring assessment →
            </a>
          </div>
          <div style={{ borderRadius: 16, overflow: "hidden", background: C.white, aspectRatio: "4/3" }}>
            <Image
              src="/insurance/waaza-insurance-1.png"
              alt="Yacht broker reviewing a Waaza readiness score with a buyer to decide next steps"
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
            Get a score in three minutes
          </h2>
          <p style={{ fontSize: 17, color: "#9ca3af", lineHeight: 1.7, marginBottom: 40, fontFamily: "'Inter Tight', sans-serif" }}>
            Enter buyer and vessel details. Get a readiness score, LTV estimate, risk flags, and structuring direction — with the reasoning behind every output.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a href="/wizard" style={{ display: "inline-block", padding: "18px 44px", background: C.accent, color: C.accentDark, fontSize: 16, fontWeight: 700, borderRadius: 10, textDecoration: "none", fontFamily: "'Inter Tight', sans-serif" }}>
              Start a free assessment →
            </a>
            <a href="/platform/rule-engine" style={{ display: "inline-block", padding: "18px 28px", color: "#9ca3af", fontSize: 15, fontWeight: 500, textDecoration: "none", fontFamily: "'Inter Tight', sans-serif" }}>
              See how the engine works
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