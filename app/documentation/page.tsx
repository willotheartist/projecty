// app/documentation/page.tsx
// Pure server component. CSS-only animations.

import type { Metadata } from "next";

const SITE_URL = "https://www.waaza.co";

export const metadata: Metadata = {
  title: "Waaza Documentation: API, Widget Integration & Platform Guides | Waaza",
  description: "Technical documentation for Waaza — REST API reference, embeddable widget integration, assessment endpoints, report generation, and platform architecture.",
  alternates: { canonical: `${SITE_URL}/documentation/` },
  openGraph: {
    title: "Waaza Documentation",
    description: "API reference, widget integration, and platform guides.",
    url: `${SITE_URL}/documentation/`,
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
  codeBg: "#0f1117", codeText: "#e2e8f0", codeGreen: "#86efac", codeYellow: "#fde68a", codePurple: "#c4b5fd",
};

const sections = [
  {
    category: "Getting started",
    items: [
      { title: "Overview", desc: "What Waaza is, how the API works, and where to start.", tag: "Guide" },
      { title: "Authentication", desc: "API key setup, request headers, and rate limits.", tag: "Reference" },
      { title: "Quick start", desc: "Run your first assessment in five minutes.", tag: "Tutorial" },
    ],
  },
  {
    category: "API reference",
    items: [
      { title: "POST /v1/assessments", desc: "Run a financing readiness assessment. Returns score, LTV band, and risk flags.", tag: "Endpoint" },
      { title: "GET /v1/assessments/:id", desc: "Retrieve a stored assessment by ID.", tag: "Endpoint" },
      { title: "POST /v1/reports", desc: "Generate a PDF or web report from an assessment.", tag: "Endpoint" },
      { title: "GET /v1/reports/:id", desc: "Retrieve a generated report.", tag: "Endpoint" },
    ],
  },
  {
    category: "Widget integration",
    items: [
      { title: "Widget overview", desc: "The embeddable financing readiness widget — fields, output, and customisation.", tag: "Guide" },
      { title: "Script installation", desc: "One-line embed for broker portals, listing sites, and marketplace platforms.", tag: "Tutorial" },
      { title: "Configuration options", desc: "Branding, field visibility, CTA customisation, and callback events.", tag: "Reference" },
      { title: "Findaly integration", desc: "The reference integration — how Waaza embeds in a boat listing marketplace.", tag: "Example" },
    ],
  },
  {
    category: "Platform",
    items: [
      { title: "Assessment engine", desc: "How the rule engine works — inputs, outputs, versioning, and rule sets.", tag: "Guide" },
      { title: "Readiness scoring", desc: "Score components, weights, tier thresholds, and interpretation.", tag: "Reference" },
      { title: "Report format", desc: "Report sections, field definitions, and PDF generation.", tag: "Reference" },
      { title: "Webhooks", desc: "Event-driven notifications for assessment completion and report generation.", tag: "Reference" },
    ],
  },
];

const tagColors: Record<string, { bg: string; color: string }> = {
  Guide:     { bg: C.accentLight, color: C.accentDark },
  Reference: { bg: "#f0f0ff", color: "#4338ca" },
  Tutorial:  { bg: "#f0fdf4", color: "#166534" },
  Endpoint:  { bg: "#0f1117", color: C.codeGreen },
  Example:   { bg: "#fef3c7", color: "#92400e" },
};

export default function DocumentationPage() {
  return (
    <>
      <style>{STYLES}</style>
      <div style={{ background: C.bg, fontFamily: "'Inter Tight', sans-serif" }}>
        <div style={{ height: 3, background: C.accent }} />

        {/* ── Hero ── */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px clamp(20px,5vw,80px) 60px" }}>
          <div className="hi-eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 12px", background: C.accentLight, borderRadius: 6, marginBottom: 32, border: `1px solid ${C.accent}80` }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.accentDark }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: C.accentDark, letterSpacing: "0.06em" }}>Documentation</span>
          </div>
          <h1 className="hi-h1" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(42px,5.5vw,72px)", fontWeight: 400, lineHeight: 1.0, letterSpacing: -2, color: C.black, marginBottom: 24, maxWidth: 700 }}>
            Build with Waaza
          </h1>
          <p className="hi-body" style={{ fontSize: 18, color: C.gray2, lineHeight: 1.75, marginBottom: 40, maxWidth: 560 }}>
            REST API, embeddable widget, webhook events, and platform guides. Everything needed to embed Waaza's financing intelligence into your workflow or platform.
          </p>

          {/* Code snippet */}
          <div className="hi-code" style={{ background: C.codeBg, borderRadius: 14, padding: "24px 28px", maxWidth: 600, marginBottom: 40, boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}>
            <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
              {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
              ))}
            </div>
            <pre style={{ margin: 0, fontSize: 13, lineHeight: 1.7, fontFamily: "'JetBrains Mono', 'Fira Code', monospace", color: C.codeText, overflowX: "auto" }}><code>{`POST /v1/assessments
Authorization: Bearer <your-api-key>

{
  "buyer": {
    "liquidity": 500000,
    "net_worth_band": "1m_5m",
    "income_type": "business",
    "residency": "GB"
  },
  "vessel": {
    "purchase_price": 2200000,
    "year_built": 2018,
    "usage_type": "private",
    "intended_flag": "KY"
  }
}`}</code></pre>
          </div>

          <div className="hi-ctas" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="/api/v1/assessments" className="btn-primary">View API reference →</a>
            <a href="/wizard" className="btn-ghost">Try a live assessment</a>
          </div>
        </section>

        {/* ── Sections ── */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "20px clamp(20px,5vw,80px) 100px" }}>
          {sections.map((section, si) => (
            <div key={section.category} className="reveal" style={{ "--d": `${si * 60}ms`, marginBottom: 64 } as React.CSSProperties}>
              <h2 style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: C.gray4, marginBottom: 20 }}>
                {section.category}
              </h2>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {section.items.map((item, ii) => (
                  <a key={item.title} href="#" className="doc-row reveal" style={{ "--d": `${ii * 50}ms`, display: "flex", alignItems: "center", gap: 20, padding: "18px 20px", borderTop: `1px solid ${C.gray6}`, textDecoration: "none", borderRadius: ii === 0 ? "10px 10px 0 0" : ii === section.items.length - 1 ? "0 0 10px 10px" : "0", background: C.white } as React.CSSProperties}>
                    <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: tagColors[item.tag]?.bg ?? C.accentLight, color: tagColors[item.tag]?.color ?? C.accentDark, flexShrink: 0, letterSpacing: "0.04em" }}>
                      {item.tag}
                    </span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 15, fontWeight: 600, color: C.black, marginBottom: 2 }}>{item.title}</div>
                      <div style={{ fontSize: 13, color: C.gray3 }}>{item.desc}</div>
                    </div>
                    <span style={{ fontSize: 16, color: C.gray4, flexShrink: 0 }}>→</span>
                  </a>
                ))}
                <div style={{ borderTop: `1px solid ${C.gray6}`, borderRadius: "0 0 10px 10px" }} />
              </div>
            </div>
          ))}
        </section>

        {/* ── CTA ── */}
        <section style={{ background: C.black, padding: "100px clamp(20px,5vw,80px)", textAlign: "center" }}>
          <div className="reveal" style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(36px,5vw,60px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: -1.5, color: C.white, marginBottom: 20 }}>
              Get API access
            </h2>
            <p style={{ fontSize: 17, color: "#9ca3af", lineHeight: 1.7, marginBottom: 40 }}>
              API access is available for broker networks and marketplace integrations. Start with a live assessment to see what the API produces — then get in touch to discuss integration.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
              <a href="/wizard" className="btn-accent">Try a live assessment →</a>
              <a href="/partners" className="btn-ghost-light">Talk to us about API access</a>
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
  .hi-body    { animation: fadeUp    0.7s cubic-bezier(0.22,1,0.36,1) 0.32s both; }
  .hi-code    { animation: fadeUp    0.7s cubic-bezier(0.22,1,0.36,1) 0.44s both; }
  .hi-ctas    { animation: fadeUp    0.7s cubic-bezier(0.22,1,0.36,1) 0.54s both; }

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

  .doc-row { transition: background 0.15s, padding-left 0.2s cubic-bezier(0.22,1,0.36,1); }
  .doc-row:hover { background: #f9f8f4 !important; padding-left: 28px !important; }

  .btn-primary { display: inline-block; padding: 14px 28px; background: #0a0a0a; color: #fff; font-size: 14px; font-weight: 700; border-radius: 10px; text-decoration: none; font-family: 'Inter Tight', sans-serif; transition: opacity 0.15s; }
  .btn-primary:hover { opacity: 0.85; }
  .btn-accent { display: inline-block; padding: 18px 44px; background: #FFF86C; color: #0a0a0a; font-size: 16px; font-weight: 700; border-radius: 10px; text-decoration: none; font-family: 'Inter Tight', sans-serif; transition: opacity 0.15s, box-shadow 0.3s; }
  .btn-accent:hover { opacity: 0.9; box-shadow: 0 0 0 4px rgba(255,248,108,0.3); }
  .btn-ghost { display: inline-block; padding: 14px 20px; color: #4b5563; font-size: 14px; font-weight: 500; text-decoration: none; font-family: 'Inter Tight', sans-serif; transition: color 0.15s; }
  .btn-ghost:hover { color: #0a0a0a; }
  .btn-ghost-light { display: inline-block; padding: 18px 28px; color: #9ca3af; font-size: 15px; font-weight: 500; text-decoration: none; font-family: 'Inter Tight', sans-serif; transition: color 0.15s; }
  .btn-ghost-light:hover { color: #ffffff; }

  @media (max-width: 768px) {
    section[style*="1fr 1fr"] { grid-template-columns: 1fr !important; }
  }
`;