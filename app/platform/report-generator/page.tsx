// app/platform/report-generator/page.tsx
// Pure server component. CSS-only animations. No client boundary.

import type { Metadata } from "next";
import Image from "next/image";

const SITE_URL = "https://www.waaza.co";

export const metadata: Metadata = {
  title: "Report Generator: Institutional-Grade Buyer Reports | Waaza",
  description: "Every Waaza assessment generates an institutional-grade financing intelligence report — six structured sections, PDF and web formats, shareable in one click.",
  alternates: { canonical: `${SITE_URL}/platform/report-generator/` },
  openGraph: {
    title: "Waaza Report Generator",
    description: "A document your buyer can take to their bank.",
    url: `${SITE_URL}/platform/report-generator/`,
    siteName: "Waaza", locale: "en_GB", type: "website",
    images: [{ url: `${SITE_URL}/og/platform-report-generator-og.jpg`, width: 1200, height: 630, alt: "Waaza Report Generator" }],
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
  { number: "01", title: "Executive Summary", desc: "One-page overview of the financing position — readiness tier, key figures, and recommended next step." },
  { number: "02", title: "Readiness Score", desc: "The score with its component breakdown — what's driving it up, what's pulling it down, and what can be improved." },
  { number: "03", title: "Indicative Financing Structure", desc: "Recommended approach — loan or leasing, ownership vehicle, jurisdiction — with rationale." },
  { number: "04", title: "LTV & Cost Projection", desc: "Deposit requirement, monthly payment estimate, and five-year total cost." },
  { number: "05", title: "Risk Considerations", desc: "Flagged issues explained in plain language — vessel age, VAT position, structure, flag." },
  { number: "06", title: "Next Steps", desc: "A clear action list — what to prepare, who to approach, and in what order." },
];

const features = [
  { icon: "◎", heading: "Institutional design language", body: "The report looks like it came from a private bank, not a startup. Clean typography, structured hierarchy, and a format buyers feel comfortable sharing with their advisers." },
  { icon: "▲", heading: "PDF and web formats", body: "Generate a downloadable PDF for sharing, or send a secure web link. Both formats render identically and carry the same structured content." },
  { icon: "⬡", heading: "Versioned to the assessment", body: "Every report is tied to a specific assessment version. When the inputs change, a new report is generated — and the previous version is preserved in the case history." },
  { icon: "⊞", heading: "White-label ready", body: "For broker networks and integration partners, reports can carry your branding rather than Waaza's — the intelligence is ours, the presentation is yours." },
];

export default function ReportGeneratorPage() {
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
              <span style={{ fontSize: 12, fontWeight: 700, color: C.accentDark, letterSpacing: "0.06em" }}>Platform · Report Generator</span>
            </div>
            <h1 className="hi-h1" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(42px,5.5vw,72px)", fontWeight: 400, lineHeight: 1.0, letterSpacing: -2, color: C.black, marginBottom: 28 }}>
              A document<br /><em style={{ fontStyle: "italic", color: C.gray2 }}>your buyer can use.</em>
            </h1>
            <p className="hi-body" style={{ fontSize: 18, color: C.gray2, lineHeight: 1.75, marginBottom: 40, maxWidth: 480 }}>
              Every Waaza assessment generates an institutional-grade report. Executive summary, readiness score, financing structure, cost projection, risk considerations, and next steps — in a format buyers can share with their bank, their accountant, or their adviser.
            </p>
            <div className="hi-ctas" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <a href="/wizard" className="btn-primary">Generate a sample report →</a>
              <a href="/documentation" className="btn-ghost">Read the documentation</a>
            </div>
          </div>

          {/* Report mockup */}
          <div className="hi-image" style={{ borderRadius: 20, background: C.white, boxShadow: "0 24px 60px rgba(0,0,0,0.10)", padding: "32px 28px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24, paddingBottom: 20, borderBottom: `1px solid ${C.gray6}` }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.gray4, marginBottom: 6 }}>Financing Intelligence Report</div>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 18, color: C.black, fontWeight: 400 }}>Sunseeker Predator 76</div>
                <div style={{ fontSize: 12, color: C.gray3, marginTop: 4 }}>Generated 18 March 2026 · v1</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 40, color: C.black, lineHeight: 1, fontWeight: 400 }}>82</div>
                <div style={{ fontSize: 10, fontWeight: 700, color: "#22c55e" }}>Finance Ready</div>
              </div>
            </div>
            {reportSections.slice(0, 4).map((s, i) => (
              <div key={s.number} className="report-row" style={{ "--d": `${i * 60}ms`, display: "flex", gap: 14, paddingBottom: 14, borderBottom: i < 3 ? `1px solid ${C.gray6}` : "none", marginBottom: 14 } as React.CSSProperties}>
                <div style={{ fontSize: 11, fontWeight: 700, color: C.gray4, flexShrink: 0, marginTop: 1, width: 24 }}>{s.number}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: C.black, marginBottom: 3 }}>{s.title}</div>
                  <div style={{ fontSize: 11, color: C.gray3, lineHeight: 1.5 }}>{s.desc}</div>
                </div>
              </div>
            ))}
            <div style={{ fontSize: 11, color: C.gray4, textAlign: "center", marginTop: 8 }}>+ 2 more sections · 8 pages total</div>
          </div>
        </section>

        {/* ── Stats ── */}
        <div style={{ background: C.black, padding: "48px clamp(20px,5vw,80px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 40 }}>
            {[
              { n: "6 sections", l: "Structured consistently across every report" },
              { n: "PDF + web", l: "Two formats, identical content" },
              { n: "White-label", l: "Available for broker and network partners" },
            ].map((s, i) => (
              <div key={s.l} className="reveal" style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 400, color: C.accent, lineHeight: 1, marginBottom: 8 }}>{s.n}</div>
                <div style={{ fontSize: 14, color: "#9ca3af", lineHeight: 1.5 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Report sections ── */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px clamp(20px,5vw,80px)" }}>
          <div className="reveal" style={{ marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.gray4, marginBottom: 16 }}>Report structure</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -1, color: C.black, maxWidth: 600 }}>
              Six sections. Every one earns its place.
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

        {/* ── Features ── */}
        <section style={{ background: C.black, padding: "100px clamp(20px,5vw,80px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="reveal" style={{ marginBottom: 64 }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b7280", marginBottom: 16 }}>Format & delivery</p>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -1, color: C.white, maxWidth: 600 }}>
                Built to be shared and trusted
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

        {/* ── Why it works ── */}
        <section style={{ background: C.accentLight, borderTop: `1px solid ${C.accent}60`, borderBottom: `1px solid ${C.accent}60`, padding: "80px clamp(20px,5vw,80px)" }}>
          <div className="reveal" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px 80px", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.accentDark, opacity: 0.6, marginBottom: 16 }}>Why it works</p>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -0.8, color: C.black, marginBottom: 20 }}>
                The document that moves the conversation forward
              </h2>
              <p style={{ fontSize: 16, color: C.gray2, lineHeight: 1.75, marginBottom: 24 }}>
                When a buyer arrives at a finance adviser or lender with a Waaza report, the conversation starts differently. The basics are established. The risk flags are visible. The recommended path is already articulated. The adviser doesn't spend the first meeting getting up to speed.
              </p>
              <a href="/wizard" className="btn-primary">Generate a sample report →</a>
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
              <Image src="/insurance/waaza-insurance-1.png" alt="Yacht broker presenting a Waaza financing report to a buyer" width={1080} height={720} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: C.black, padding: "100px clamp(20px,5vw,80px)", textAlign: "center" }}>
          <div className="reveal" style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(36px,5vw,60px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: -1.5, color: C.white, marginBottom: 20 }}>
              See what the report looks like
            </h2>
            <p style={{ fontSize: 17, color: "#9ca3af", lineHeight: 1.7, marginBottom: 40 }}>
              Run a free assessment. The report is generated automatically. Download the PDF or share the web link.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
              <a href="/wizard" className="btn-accent">Generate a sample report →</a>
              <a href="/documentation" className="btn-ghost-light">Read the documentation</a>
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
  .report-row { animation: fadeUp 0.4s cubic-bezier(0.22,1,0.36,1) calc(0.5s + var(--d, 0ms)) both; }

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
  .card-lift:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.12); }

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