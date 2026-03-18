// app/solutions/pre-qualification/page.tsx
// Pure server component. CSS-only animations. No client boundary.

import type { Metadata } from "next";
import Image from "next/image";

const SITE_URL = "https://www.waaza.co";

export const metadata: Metadata = {
  title: "Yacht Financing Pre-Qualification: The Conversation That Should Happen First | Waaza",
  description: "Pre-qualification means knowing where a buyer stands on financing before the deal gains momentum — with a score, an LTV estimate, and a clear picture of what needs resolving.",
  alternates: { canonical: `${SITE_URL}/solutions/pre-qualification/` },
  openGraph: {
    title: "Waaza Pre-Qualification",
    description: "The conversation that should happen first.",
    url: `${SITE_URL}/solutions/pre-qualification/`,
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

const problems = [
  {
    number: "01",
    heading: "Pre-qualification happens informally or not at all",
    body: "Most yacht transactions have no structured financing pre-qualification step. A buyer expresses interest. The broker proceeds. The financing question surfaces later — sometimes much later — with no preparation behind it.",
  },
  {
    number: "02",
    heading: "The lender is the first to find the problems",
    body: "When the financing conversation starts at the lender stage, the lender is the first to surface issues that should have been visible weeks earlier. Vessel too old. Deposit insufficient. VAT position unclear. At this point, the deal is already committed.",
  },
  {
    number: "03",
    heading: "Buyers don't know what they don't know",
    body: "Most yacht buyers have never financed a vessel before. They don't know about LTV constraints, survey requirements, or VAT implications. Pre-qualification is as much about education as it is about assessment.",
  },
];

const steps = [
  { step: "1", label: "Buyer profile collected", sub: "Liquidity, income type, net worth band, residency, and intended ownership structure." },
  { step: "2", label: "Vessel profile confirmed", sub: "Purchase price, vessel age, flag, usage, and intended structuring." },
  { step: "3", label: "Assessment run", sub: "The rule engine scores readiness, estimates LTV, and surfaces risk flags in under 60 seconds." },
  { step: "4", label: "Output reviewed", sub: "Score, LTV band, flags, and structuring direction — reviewed with the buyer before any lender approach." },
  { step: "5", label: "Report generated", sub: "An institutional-grade PDF for the buyer to share with their adviser, accountant, or bank." },
];

const features = [
  { icon: "◎", heading: "Surfaces problems before they become deal-breakers", body: "Vessel age, VAT position, deposit level, ownership complexity — flagged at the pre-qualification stage when there's still time to address them." },
  { icon: "▲", heading: "Sets buyer expectations correctly from the start", body: "A readiness score of 62 is a different conversation than a score of 84. Pre-qualification makes that conversation happen at the right point." },
  { icon: "⬡", heading: "Gives brokers a credible qualification standard", body: "Brokers who pre-qualify buyers with Waaza approach lenders with structured submissions rather than informal introductions. The lender relationship improves." },
  { icon: "⊞", heading: "Embeddable in broker and marketplace workflows", body: "Pre-qualification can be triggered from a broker portal, a listing page, or a contact form — wherever a buyer first expresses serious interest." },
];

const beneficiaries = [
  { who: "Buyers", benefit: "Understand their position before the deal gains momentum. No late surprises." },
  { who: "Brokers", benefit: "Qualify faster. Approach lenders with confidence. Fewer deals that fall apart late." },
  { who: "Finance advisors", benefit: "Receive better-framed cases. Spend the first conversation on structuring, not basics." },
  { who: "Lenders", benefit: "Receive submissions where the pre-work has already been done. Faster decisions." },
];

export default function PreQualificationPage() {
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
              <span style={{ fontSize: 12, fontWeight: 700, color: C.accentDark, letterSpacing: "0.06em" }}>Solutions · Pre-Qualification</span>
            </div>
            <h1 className="hi-h1" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(42px,5.5vw,72px)", fontWeight: 400, lineHeight: 1.0, letterSpacing: -2, color: C.black, marginBottom: 28 }}>
              The conversation<br /><em style={{ fontStyle: "italic", color: C.gray2 }}>that should happen first.</em>
            </h1>
            <p className="hi-body" style={{ fontSize: 18, color: C.gray2, lineHeight: 1.75, marginBottom: 40, maxWidth: 480 }}>
              Pre-qualification means knowing where a buyer stands on financing before the deal gains momentum. Not vaguely. Structurally. With a score, an LTV estimate, and a clear picture of what needs to be resolved before the lender conversation begins.
            </p>
            <div className="hi-ctas" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <a href="/wizard" className="btn-primary">Start a free assessment →</a>
              <a href="/solutions/yacht-brokers" className="btn-ghost">See how brokers use it</a>
            </div>
          </div>
          <div className="hi-image" style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4/3" }}>
            <Image src="/insurance/waaza-insurance-2.png" alt="Yacht buyer pre-qualified through Waaza — confident financing position before lender outreach" width={1080} height={720} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </section>

        {/* ── Stats ── */}
        <div style={{ background: C.black, padding: "48px clamp(20px,5vw,80px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 40 }}>
            {[
              { n: "< 3 min", l: "To complete a full pre-qualification assessment" },
              { n: "Before", l: "The lender — not after — is when it matters" },
              { n: "1 report", l: "The buyer walks away with to share with advisers" },
            ].map((s, i) => (
              <div key={s.l} className="reveal" style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 400, color: C.accent, lineHeight: 1, marginBottom: 8 }}>{s.n}</div>
                <div style={{ fontSize: 14, color: "#9ca3af", lineHeight: 1.5 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Problems ── */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px clamp(20px,5vw,80px)" }}>
          <div className="reveal" style={{ marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.gray4, marginBottom: 16 }}>The problem</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -1, color: C.black, maxWidth: 600 }}>
              What happens when pre-qualification is skipped
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
            {problems.map((p, i) => (
              <div key={p.number} className="reveal card-lift" style={{ "--d": `${i * 80}ms`, padding: "40px 36px", background: C.white, borderRadius: 16 } as React.CSSProperties}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 48, fontWeight: 400, color: C.gray6, lineHeight: 1, marginBottom: 20 }}>{p.number}</div>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, fontWeight: 400, color: C.black, lineHeight: 1.2, marginBottom: 16 }}>{p.heading}</h3>
                <p style={{ fontSize: 15, color: C.gray2, lineHeight: 1.75 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Steps — black bg ── */}
        <section style={{ background: C.black, padding: "100px clamp(20px,5vw,80px)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="reveal" style={{ marginBottom: 64 }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b7280", marginBottom: 16 }}>The process</p>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -1, color: C.white, maxWidth: 600 }}>
                Five steps. Under three minutes.
              </h2>
            </div>
            {steps.map((s, i) => (
              <div key={s.step} className="reveal" style={{ "--d": `${i * 70}ms`, display: "grid", gridTemplateColumns: "56px 1fr", gap: 24, padding: "28px 0", borderTop: i > 0 ? "1px solid #1a1a1a" : "none", alignItems: "center" } as React.CSSProperties}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: C.accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: C.accentDark, flexShrink: 0 }}>
                  {s.step}
                </div>
                <div>
                  <div style={{ fontSize: 17, fontWeight: 600, color: C.white, marginBottom: 4 }}>{s.label}</div>
                  <div style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Features ── */}
        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px clamp(20px,5vw,80px)" }}>
          <div className="reveal" style={{ marginBottom: 64 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.gray4, marginBottom: 16 }}>What it changes</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -1, color: C.black, maxWidth: 600 }}>
              Pre-qualification changes every conversation that follows
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 2 }}>
            {features.map((f, i) => (
              <div key={f.heading} className="reveal card-lift" style={{ "--d": `${i * 80}ms`, padding: "40px 36px", background: C.white, borderRadius: 16 } as React.CSSProperties}>
                <div style={{ fontSize: 28, marginBottom: 20, color: C.accentDark, lineHeight: 1 }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, fontWeight: 400, color: C.black, lineHeight: 1.2, marginBottom: 12 }}>{f.heading}</h3>
                <p style={{ fontSize: 15, color: C.gray2, lineHeight: 1.75 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Who benefits ── */}
        <section style={{ background: C.accentLight, borderTop: `1px solid ${C.accent}60`, borderBottom: `1px solid ${C.accent}60`, padding: "80px clamp(20px,5vw,80px)" }}>
          <div className="reveal" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px 80px", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.accentDark, opacity: 0.6, marginBottom: 16 }}>Who benefits</p>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -0.8, color: C.black, marginBottom: 28 }}>
                Everyone in the transaction moves faster
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {beneficiaries.map((item) => (
                  <div key={item.who} style={{ display: "flex", gap: 16 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: C.accentDark, background: C.accent, padding: "4px 12px", borderRadius: 20, height: "fit-content", flexShrink: 0, marginTop: 2 }}>
                      {item.who}
                    </div>
                    <p style={{ fontSize: 15, color: C.gray2, lineHeight: 1.65 }}>{item.benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
              <Image src="/insurance/waaza-insurance-6.png" alt="Yacht transaction benefiting from structured pre-qualification through Waaza" width={1080} height={720} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ background: C.black, padding: "100px clamp(20px,5vw,80px)", textAlign: "center" }}>
          <div className="reveal" style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(36px,5vw,60px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: -1.5, color: C.white, marginBottom: 20 }}>
              Pre-qualify your next buyer in three minutes
            </h2>
            <p style={{ fontSize: 17, color: "#9ca3af", lineHeight: 1.7, marginBottom: 40 }}>
              No account required. Enter buyer and vessel details. Get a financing readiness score, LTV estimate, risk flags, and a shareable report.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
              <a href="/wizard" className="btn-accent">Start a free assessment →</a>
              <a href="/solutions/yacht-brokers" className="btn-ghost-light">See how brokers use Waaza</a>
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