// app/solutions/finance-advisors/page.tsx

import type { Metadata } from "next";
import Image from "next/image";

const SITE_URL = "https://www.waaza.co";

export const metadata: Metadata = {
  title: "Waaza for Finance Advisors: Structured Marine Finance Intelligence | Waaza",
  description: "Waaza gives finance advisors a structured pre-qualification layer for yacht financing cases — so you receive better-framed cases and spend less time on deals that can't complete.",
  alternates: { canonical: `${SITE_URL}/solutions/finance-advisors/` },
  openGraph: {
    title: "Waaza for Finance Advisors",
    description: "Receive better-framed cases. Spend less time on deals that can't complete.",
    url: `${SITE_URL}/solutions/finance-advisors/`,
    siteName: "Waaza", locale: "en_GB", type: "website",
    images: [{ url: `${SITE_URL}/og/solutions-finance-advisors-og.jpg`, width: 1200, height: 630, alt: "Waaza for Finance Advisors" }],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
};

const C = {
  bg: "#f4f3ef", black: "#0a0a0a", gray1: "#1a1a1a", gray2: "#4b5563",
  gray3: "#6b7280", gray4: "#9ca3af", gray5: "#d1d5db", gray6: "#eae9e4",
  white: "#ffffff", accent: "#FFF86C", accentDark: "#0a0a0a", accentLight: "#fffde0",
};

const problems = [
  {
    number: "01",
    heading: "Cases arrive under-prepared",
    body: "The client has a yacht in mind, a vague sense of what they want to borrow, and no structured view of their financing position. You spend the first conversation getting the basics in place — time that should have been spent on structuring.",
  },
  {
    number: "02",
    heading: "Vessel details are incomplete or wrong",
    body: "The buyer tells you the price. They don't tell you the vessel is 22 years old with an unclear VAT history and a flag the lender won't accept. You discover these things deep into the process, when unwinding them is expensive.",
  },
  {
    number: "03",
    heading: "Structuring decisions are made too late",
    body: "Personal or SPV? Malta leasing or direct purchase? These decisions need to be made before the purchase agreement is signed. When they come to you after, the options are constrained and the cost of change is high.",
  },
];

const features = [
  {
    heading: "Pre-qualified case intake",
    body: "Clients who have run a Waaza assessment arrive with a readiness score, an LTV estimate, a risk flag summary, and a clear ownership structure. The first conversation is substantive from the start.",
    icon: "◎",
  },
  {
    heading: "Structuring direction surfaced early",
    body: "Waaza's engine flags structuring considerations — VAT position, SPV suitability, Malta leasing relevance — before the case reaches you. You decide the approach; Waaza makes the options visible earlier.",
    icon: "▲",
  },
  {
    heading: "Lender routing intelligence",
    body: "Indicative lender fit based on vessel profile, buyer profile, and ownership structure. Know which lenders have appetite before you make the first call.",
    icon: "⬡",
  },
  {
    heading: "Institutional-grade output documents",
    body: "Every assessment generates a structured PDF your client can share. Executive summary, readiness score, indicative LTV, risk considerations. A professional starting point for any financing conversation.",
    icon: "⊞",
  },
];

export default function FinanceAdvisorsPage() {
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
              For Finance Advisors
            </span>
          </div>
          <h1 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(42px, 5.5vw, 72px)",
            fontWeight: 400, lineHeight: 1.0,
            letterSpacing: -2, color: C.black, marginBottom: 28,
          }}>
            Better cases.<br />
            <em style={{ fontStyle: "italic", color: C.gray2 }}>From the first conversation.</em>
          </h1>
          <p style={{
            fontSize: 18, color: C.gray2, lineHeight: 1.75,
            marginBottom: 40, maxWidth: 480,
            fontFamily: "'Inter Tight', sans-serif",
          }}>
            Waaza gives finance advisors a structured pre-qualification layer for yacht financing cases — so the cases that reach you are better framed, earlier in the process, with the key variables already surfaced.
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
            src="/insurance/waaza-insurance-5.png"
            alt="Finance advisor reviewing a structured yacht financing case prepared with Waaza"
            width={1080} height={720}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ background: C.black, padding: "48px clamp(20px, 5vw, 80px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
          {[
            { number: "Earlier", label: "Structuring decisions reach you in the process" },
            { number: "Fewer", label: "First-meeting hours spent on basics" },
            { number: "Cleaner", label: "Case intake from the first document" },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, color: C.accent, lineHeight: 1, marginBottom: 8 }}>
                {stat.number}
              </div>
              <div style={{ fontSize: 14, color: "#9ca3af", fontFamily: "'Inter Tight', sans-serif", lineHeight: 1.5 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Problems */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px clamp(20px, 5vw, 80px)" }}>
        <div style={{ marginBottom: 64 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.gray4, marginBottom: 16, fontFamily: "'Inter Tight', sans-serif" }}>The problem</p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -1, color: C.black, maxWidth: 600 }}>
            Three ways yacht financing cases arrive poorly framed
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {problems.map((p) => (
            <div key={p.number} style={{ padding: "40px 36px", background: C.white, borderRadius: 16, marginRight: 2 }}>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 48, fontWeight: 400, color: C.gray6, lineHeight: 1, marginBottom: 20 }}>{p.number}</div>
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, fontWeight: 400, color: C.black, lineHeight: 1.2, marginBottom: 16 }}>{p.heading}</h3>
              <p style={{ fontSize: 15, color: C.gray2, lineHeight: 1.75, fontFamily: "'Inter Tight', sans-serif" }}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ background: C.black, padding: "100px clamp(20px, 5vw, 80px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b7280", marginBottom: 16, fontFamily: "'Inter Tight', sans-serif" }}>The solution</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -1, color: C.white, maxWidth: 600 }}>
              Structure before the case reaches your desk
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}>
            {features.map((f) => (
              <div key={f.heading} style={{ padding: "40px 36px", background: "#111111", borderRadius: 16, marginBottom: 2 }}>
                <div style={{ fontSize: 28, marginBottom: 20, color: C.accent, lineHeight: 1 }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, fontWeight: 400, color: C.white, lineHeight: 1.2, marginBottom: 12 }}>{f.heading}</h3>
                <p style={{ fontSize: 15, color: "#9ca3af", lineHeight: 1.75, fontFamily: "'Inter Tight', sans-serif" }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you receive */}
      <section style={{ background: C.accentLight, borderTop: `1px solid ${C.accent}60`, borderBottom: `1px solid ${C.accent}60`, padding: "80px clamp(20px, 5vw, 80px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px 80px", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.accentDark, opacity: 0.6, marginBottom: 16, fontFamily: "'Inter Tight', sans-serif" }}>What you receive</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -0.8, color: C.black, marginBottom: 20 }}>
              A case that's ready to work on
            </h2>
            <p style={{ fontSize: 16, color: C.gray2, lineHeight: 1.75, marginBottom: 24, maxWidth: 440, fontFamily: "'Inter Tight', sans-serif" }}>
              When a broker or buyer runs a Waaza assessment before engaging you, you receive a structured document covering readiness score, indicative LTV, risk flags, and recommended structuring direction.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Financing readiness score with supporting rationale",
                "Indicative LTV band based on vessel and buyer profile",
                "Risk flags — vessel age, VAT, structure, flag",
                "Recommended structuring direction",
                "Documentation checklist for lender submission",
              ].map((point) => (
                <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: C.accent, flexShrink: 0, marginTop: 2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: C.accentDark }}>✓</div>
                  <span style={{ fontSize: 15, color: C.gray1, lineHeight: 1.6, fontFamily: "'Inter Tight', sans-serif" }}>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderRadius: 16, overflow: "hidden", background: C.white, aspectRatio: "4/3" }}>
            <Image
              src="/insurance/waaza-insurance-4.png"
              alt="Structured yacht financing case document prepared by Waaza for finance advisor intake"
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
            See what a well-framed case looks like
          </h2>
          <p style={{ fontSize: 17, color: "#9ca3af", lineHeight: 1.7, marginBottom: 40, fontFamily: "'Inter Tight', sans-serif" }}>
            Run an assessment now. See the output document your clients will bring to you when Waaza is part of their process.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a href="/wizard" style={{ display: "inline-block", padding: "18px 44px", background: C.accent, color: C.accentDark, fontSize: 16, fontWeight: 700, borderRadius: 10, textDecoration: "none", fontFamily: "'Inter Tight', sans-serif" }}>
              Start a free assessment →
            </a>
            <a href="/partners" style={{ display: "inline-block", padding: "18px 28px", color: "#9ca3af", fontSize: 15, fontWeight: 500, textDecoration: "none", fontFamily: "'Inter Tight', sans-serif" }}>
              Talk to us about partnerships
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