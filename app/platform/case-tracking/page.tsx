// app/platform/case-tracking/page.tsx
// Pure server component. CSS-only animations. No client boundary.

import type { Metadata } from "next";
import Image from "next/image";

const SITE_URL = "https://www.waaza.co";

export const metadata: Metadata = {
  title: "Case Tracking: Every Deal, Every Stage | Waaza",
  description: "Waaza tracks financing cases from first assessment through to completion — every stage documented, every decision recorded, every document accounted for.",
  alternates: { canonical: `${SITE_URL}/platform/case-tracking/` },
  openGraph: {
    title: "Waaza Case Tracking",
    description: "Every deal. Every stage. Nothing falls through the cracks.",
    url: `${SITE_URL}/platform/case-tracking/`,
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

const stages = [
  { stage: "Assessment", status: "complete", color: "#22c55e", bg: "#f0fdf4", desc: "Readiness score run. LTV band established. Risk flags reviewed." },
  { stage: "Structuring", status: "complete", color: "#22c55e", bg: "#f0fdf4", desc: "Ownership structure confirmed. VAT treatment agreed." },
  { stage: "Lender Outreach", status: "active", color: "#f59e0b", bg: "#fffbeb", desc: "Two lenders approached. Indicative terms requested." },
  { stage: "Survey", status: "pending", color: "#9ca3af", bg: "#f9fafb", desc: "Waiting on lender confirmation before commissioning." },
  { stage: "Legal & Insurance", status: "pending", color: "#9ca3af", bg: "#f9fafb", desc: "Solicitor instructed. Insurance to be confirmed post-approval." },
  { stage: "Completion", status: "pending", color: "#9ca3af", bg: "#f9fafb", desc: "Target: 6 weeks from lender approval." },
];

const features = [
  { icon: "◎", heading: "Stage-by-stage visibility", body: "Every financing case tracked through assessment, structuring, lender outreach, survey, legal, and completion. The full picture, always." },
  { icon: "▲", heading: "Documentation checklist", body: "Each stage has a documentation checklist. Know what's been submitted, what's outstanding, and what's blocking the next stage." },
  { icon: "⬡", heading: "Assessment version history", body: "Every assessment run on a case is stored and versioned. If the buyer's profile changes or the vessel switches, the history is preserved." },
  { icon: "⊞", heading: "Broker and client views", body: "Brokers see the full case. Clients see a curated summary. The same data, presented appropriately for each audience." },
];

const docItems = [
  { label: "Identity and source of funds confirmed", done: true },
  { label: "Survey report received and reviewed", done: true },
  { label: "Agreed value insurance policy in place", done: false },
  { label: "Lender noted as interested party", done: false },
  { label: "Legal charge registered — completion ready", done: false },
];

export default function CaseTrackingPage() {
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
              <span style={{ fontSize: 12, fontWeight: 700, color: C.accentDark, letterSpacing: "0.06em" }}>Platform · Case Tracking</span>
            </div>
            <h1 className="hi-h1" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(42px,5.5vw,72px)", fontWeight: 400, lineHeight: 1.0, letterSpacing: -2, color: C.black, marginBottom: 28 }}>
              Every deal.<br /><em style={{ fontStyle: "italic", color: C.gray2 }}>Every stage.</em>
            </h1>
            <p className="hi-body" style={{ fontSize: 18, color: C.gray2, lineHeight: 1.75, marginBottom: 40, maxWidth: 480 }}>
              Waaza tracks financing cases from first assessment through to completion. Every stage documented, every decision recorded, every document accounted for. Nothing falls through the cracks.
            </p>
            <div className="hi-ctas" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <a href="/wizard" className="btn-primary">Start a free assessment →</a>
              <a href="/documentation" className="btn-ghost">Read the documentation</a>
            </div>
          </div>

          {/* Pipeline visual */}
          <div className="hi-image" style={{ borderRadius: 20, background: C.black, padding: "32px 28px" }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6b7280", marginBottom: 20 }}>
              Case pipeline — Vessel: Sunseeker 76
            </div>
            {stages.map((s) => (
              <div key={s.stage} className="stage-row" style={{
                display: "flex", alignItems: "center", gap: 14,
                padding: "12px 16px", marginBottom: 2,
                background: s.status === "active" ? "#1a1a1a" : "#111111",
                borderRadius: 10,
                borderLeft: s.status === "active" ? `3px solid ${C.accent}` : "3px solid transparent",
              }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: s.status === "pending" ? "#4b5563" : C.white }}>{s.stage}</div>
                  <div style={{ fontSize: 11, color: "#4b5563", marginTop: 2 }}>{s.desc}</div>
                </div>
                <div style={{ fontSize: 10, fontWeight: 700, color: s.status === "active" ? C.accentDark : s.color, background: s.status === "active" ? C.accent : s.bg, padding: "2px 8px", borderRadius: 20, textTransform: "capitalize" }}>
                  {s.status}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Stats ── */}
        <div style={{ background: C.black, padding: "48px clamp(20px,5vw,80px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 40 }}>
            {[
              { n: "6 stages", l: "From first assessment to completion" },
              { n: "Full history", l: "Every version of every assessment stored" },
              { n: "One view", l: "Broker and client access to the same case" },
            ].map((s, i) => (
              <div key={s.l} className="reveal" style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 400, color: C.accent, lineHeight: 1, marginBottom: 8 }}>{s.n}</div>
                <div style={{ fontSize: 14, color: "#9ca3af", lineHeight: 1.5 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Features ── */}
        <section style={{ background: C.black, padding: "100px clamp(20px,5vw,80px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="reveal" style={{ marginBottom: 64 }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b7280", marginBottom: 16 }}>Features</p>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -1, color: C.white, maxWidth: 600 }}>
                Deals don't fall apart when they're tracked
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

        {/* ── Documentation ── */}
        <section style={{ background: C.accentLight, borderTop: `1px solid ${C.accent}60`, borderBottom: `1px solid ${C.accent}60`, padding: "80px clamp(20px,5vw,80px)" }}>
          <div className="reveal" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px 80px", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.accentDark, opacity: 0.6, marginBottom: 16 }}>Documentation</p>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -0.8, color: C.black, marginBottom: 20 }}>
                Know exactly what's outstanding
              </h2>
              <p style={{ fontSize: 16, color: C.gray2, lineHeight: 1.75, marginBottom: 28 }}>
                Each stage carries a documentation checklist. Survey commissioned but not yet received. Insurance confirmed but lender not yet noted. These gaps delay closings — and they're invisible without a system to surface them.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {docItems.map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: item.done ? C.accent : C.gray5, flexShrink: 0, marginTop: 2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: item.done ? C.accentDark : C.gray3 }}>
                      {item.done ? "✓" : "·"}
                    </div>
                    <span style={{ fontSize: 15, color: item.done ? C.gray1 : C.gray4, lineHeight: 1.6 }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
              <Image src="/insurance/waaza-insurance-5.png" alt="Yacht financing case documentation checklist in Waaza" width={1080} height={720} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: C.black, padding: "100px clamp(20px,5vw,80px)", textAlign: "center" }}>
          <div className="reveal" style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(36px,5vw,60px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: -1.5, color: C.white, marginBottom: 20 }}>
              Start tracking your first case
            </h2>
            <p style={{ fontSize: 17, color: "#9ca3af", lineHeight: 1.7, marginBottom: 40 }}>
              Run a readiness assessment. It becomes the first entry in the case record. Everything that follows is tracked from there.
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
  .stage-row  { animation: fadeUp    0.45s cubic-bezier(0.22,1,0.36,1) calc(0.45s + var(--d, 0ms)) both; }

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
    section[style*="repeat(2"] { grid-template-columns: 1fr !important; }
    section[style*="1fr 1fr"]  { grid-template-columns: 1fr !important; }
    div[style*="repeat(3"]     { grid-template-columns: 1fr !important; }
  }
`;