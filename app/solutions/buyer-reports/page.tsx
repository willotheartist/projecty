// app/solutions/buyer-reports/page.tsx
// Pure server component. CSS-only animations.

import type { Metadata } from "next";
import Image from "next/image";

const SITE_URL = "https://www.waaza.co";

export const metadata: Metadata = {
  title: "Buyer Reports: Institutional-Grade Financing Intelligence Documents | Waaza",
  description: "Waaza generates structured financing intelligence reports that buyers can share with their bank, their adviser, or their accountant — moving every conversation forward from the first meeting.",
  alternates: { canonical: `${SITE_URL}/solutions/buyer-reports/` },
  openGraph: {
    title: "Waaza Buyer Reports",
    description: "A document your buyer can take anywhere.",
    url: `${SITE_URL}/solutions/buyer-reports/`,
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
};

const reportSections = [
  { number: "01", title: "Executive Summary", desc: "Readiness tier, key figures, and the single most important next step — on one page." },
  { number: "02", title: "Readiness Score", desc: "The 0–100 score with the component breakdown. What's strong. What needs addressing." },
  { number: "03", title: "Indicative Financing Structure", desc: "Loan or leasing. Personal or SPV. Which lender type. With the reasoning behind each recommendation." },
  { number: "04", title: "LTV & Cost Projection", desc: "Deposit requirement, monthly payment estimate, and five-year total ownership cost." },
  { number: "05", title: "Risk Considerations", desc: "Every flag explained in plain language — vessel age, VAT position, ownership structure, flag jurisdiction." },
  { number: "06", title: "Next Steps", desc: "A clear, ordered action list. What to prepare. Who to approach. In what sequence." },
];

const useCases = [
  { who: "Taking to a private bank", body: "A buyer arriving at Lloyds or BNP Paribas with a Waaza report arrives prepared. The conversation starts at structuring, not at basics." },
  { who: "Sharing with a finance adviser", body: "The adviser receives a structured brief — readiness score, flags surfaced, structuring direction indicated. The first meeting is substantive from the start." },
  { who: "Presenting to an accountant", body: "VAT implications, ownership structure, and five-year cost modelled and documented. The accountant has what they need to advise properly." },
  { who: "Reviewing with a broker", body: "The broker sees where the buyer stands before the lender conversation begins. Deals that can complete are progressed. Deals that can't are addressed early." },
];

export default function BuyerReportsPage() {
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
              <span style={{ fontSize: 12, fontWeight: 700, color: C.accentDark, letterSpacing: "0.06em" }}>Solutions · Buyer Reports</span>
            </div>
            <h1 className="hi-h1" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(42px,5.5vw,72px)", fontWeight: 400, lineHeight: 1.0, letterSpacing: -2, color: C.black, marginBottom: 28 }}>
              A document<br /><em style={{ fontStyle: "italic", color: C.gray2 }}>that opens doors.</em>
            </h1>
            <p className="hi-body" style={{ fontSize: 18, color: C.gray2, lineHeight: 1.75, marginBottom: 40, maxWidth: 480 }}>
              Every Waaza assessment generates an institutional-grade financing intelligence report. Six structured sections. PDF and web formats. A document buyers can take to their bank, their adviser, or their accountant — and that moves every conversation forward from the moment it's shared.
            </p>
            <div className="hi-ctas" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <a href="/wizard" className="btn-primary">Generate a sample report →</a>
              <a href="/platform/report-generator" className="btn-ghost">See how it works</a>
            </div>
          </div>

          {/* Report mockup */}
          <div className="hi-image" style={{ borderRadius: 20, background: C.white, boxShadow: "0 32px 80px rgba(0,0,0,0.10)", padding: "36px 32px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28, paddingBottom: 24, borderBottom: `2px solid ${C.accent}` }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.gray4, marginBottom: 8 }}>Waaza · Financing Intelligence Report</div>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, color: C.black, fontWeight: 400, lineHeight: 1.2 }}>Azimut 72 · €2,200,000</div>
                <div style={{ fontSize: 12, color: C.gray3, marginTop: 6 }}>Personal ownership · UK residency · Malta flag</div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0, marginLeft: 20 }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 52, color: C.black, lineHeight: 1, fontWeight: 400 }}>78</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#f59e0b", background: "#fffbeb", padding: "3px 10px", borderRadius: 20, marginTop: 4 }}>Conditional</div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
              {[
                { l: "LTV estimate", v: "60–70%" },
                { l: "Monthly payment", v: "~€9,400" },
                { l: "VAT saving (Malta leasing)", v: "€216,000" },
                { l: "Risk flags", v: "1 identified" },
              ].map((item) => (
                <div key={item.l} style={{ background: C.bg, borderRadius: 8, padding: "12px 14px" }}>
                  <div style={{ fontSize: 11, color: C.gray4, marginBottom: 4 }}>{item.l}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: C.black }}>{item.v}</div>
                </div>
              ))}
            </div>
            <div style={{ background: C.accentLight, borderRadius: 8, padding: "12px 14px", borderLeft: `3px solid ${C.accent}` }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.accentDark, marginBottom: 4 }}>Recommended next step</div>
              <div style={{ fontSize: 13, color: C.gray2, lineHeight: 1.5 }}>Establish Maltese SPV before purchase agreement. Approach BNP Paribas Marine Finance or Lloyds Private Banking for indicative terms.</div>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <div style={{ background: C.black, padding: "48px clamp(20px,5vw,80px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 40 }}>
            {[
              { n: "6 sections", l: "Consistently structured across every report" },
              { n: "PDF + web", l: "Two formats. One click to share either." },
              { n: "Private bank", l: "Level presentation — every time" },
            ].map((s, i) => (
              <div key={s.l} className="reveal" style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 400, color: C.accent, lineHeight: 1, marginBottom: 8 }}>{s.n}</div>
                <div style={{ fontSize: 14, color: "#9ca3af", lineHeight: 1.5 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Report structure ── */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px clamp(20px,5vw,80px)" }}>
          <div className="reveal" style={{ marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.gray4, marginBottom: 16 }}>What's inside</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -1, color: C.black, maxWidth: 600 }}>
              Six sections. Every one earning its place.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
            {reportSections.map((s, i) => (
              <div key={s.number} className="reveal card-lift" style={{ "--d": `${i * 60}ms`, padding: "32px 28px", background: C.white, borderRadius: 16 } as React.CSSProperties}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 40, fontWeight: 400, color: C.gray6, lineHeight: 1, marginBottom: 16 }}>{s.number}</div>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, fontWeight: 400, color: C.black, lineHeight: 1.2, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: C.gray2, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Use cases ── */}
        <section style={{ background: C.black, padding: "100px clamp(20px,5vw,80px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="reveal" style={{ marginBottom: 64 }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b7280", marginBottom: 16 }}>Where it gets used</p>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -1, color: C.white, maxWidth: 600 }}>
                One document. Every conversation it enables.
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 2 }}>
              {useCases.map((u, i) => (
                <div key={u.who} className="reveal card-lift" style={{ "--d": `${i * 80}ms`, padding: "40px 36px", background: "#111111", borderRadius: 16 } as React.CSSProperties}>
                  <div style={{ display: "inline-block", padding: "4px 12px", background: "#1a1a1a", borderRadius: 20, fontSize: 12, fontWeight: 700, color: C.accent, marginBottom: 20 }}>{u.who}</div>
                  <p style={{ fontSize: 16, color: "#d1d5db", lineHeight: 1.75 }}>{u.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why institutional matters ── */}
        <section style={{ background: C.accentLight, borderTop: `1px solid ${C.accent}60`, borderBottom: `1px solid ${C.accent}60`, padding: "80px clamp(20px,5vw,80px)" }}>
          <div className="reveal" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px 80px", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.accentDark, opacity: 0.6, marginBottom: 16 }}>Why design matters</p>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -0.8, color: C.black, marginBottom: 20 }}>
                The report looks like it came from a private bank
              </h2>
              <p style={{ fontSize: 16, color: C.gray2, lineHeight: 1.75, marginBottom: 24 }}>
                A document that looks homemade gets treated as homemade. A document that looks institutional gets treated as institutional. Waaza's reports are designed to match the presentation standard of the lenders and advisers your buyer will be meeting.
              </p>
              <p style={{ fontSize: 16, color: C.gray2, lineHeight: 1.75, marginBottom: 32 }}>
                When a buyer walks into a private banking meeting with a Waaza report, they walk in looking prepared. That changes the dynamic of the conversation — and the quality of the outcome.
              </p>
              <a href="/wizard" className="btn-primary">Generate a sample report →</a>
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
              <Image src="/insurance/waaza-insurance-1.png" alt="Yacht broker presenting a Waaza buyer report at a private banking meeting" width={1080} height={720} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: C.black, padding: "100px clamp(20px,5vw,80px)", textAlign: "center" }}>
          <div className="reveal" style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(36px,5vw,60px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: -1.5, color: C.white, marginBottom: 20 }}>
              Generate your first report in three minutes
            </h2>
            <p style={{ fontSize: 17, color: "#9ca3af", lineHeight: 1.7, marginBottom: 40 }}>
              Run a free assessment. The report is generated automatically. Download the PDF or share the web link.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
              <a href="/wizard" className="btn-accent">Generate a sample report →</a>
              <a href="/platform/report-generator" className="btn-ghost-light">See how the generator works</a>
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