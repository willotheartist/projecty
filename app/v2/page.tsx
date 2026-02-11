"use client";

import { useState } from "react";

/* ─────────────────────────────────────────────
   YFI Landing — Swap Commerce aesthetic (v2)
   Instrument Serif · massive left-aligned type
   Light blue tints · electric blue accents
   ───────────────────────────────────────────── */

const C = {
  bg: "#ffffff",
  tint: "#eef4ff",
  tintMid: "#dde9fc",
  accent: "#2563eb",
  accentPale: "#e8f1ff",
  black: "#0a0a0a",
  gray1: "#1a1a1a",
  gray2: "#4b5563",
  gray3: "#6b7280",
  gray4: "#9ca3af",
  gray5: "#d1d5db",
  gray6: "#f3f4f6",
};

export default function LandingPage() {
  const [email, setEmail] = useState("");

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}
        body{overflow-x:hidden}
        a{text-decoration:none;color:inherit}
        input:focus{outline:none;border-color:${C.accent}!important}
        .nav-link:hover{color:${C.black}!important}
        .pill-primary:hover{opacity:.9;transform:translateY(-1px);box-shadow:0 4px 16px rgba(37,99,235,.25)}
        .pill-black:hover{background:#1a1a1a!important}
        .pill-outline:hover{border-color:${C.gray2}!important}
        .feature-card:hover{transform:translateY(-2px);box-shadow:0 8px 32px rgba(0,0,0,.06)}
        .bento:hover{transform:translateY(-2px)}
        @media(max-width:900px){
          .hero-h1{font-size:48px!important}
          .section-h2{font-size:40px!important}
          .grid-3,.grid-4,.grid-2,.bento-grid,.split{grid-template-columns:1fr!important}
          .bento-span2{grid-column:span 1!important}
        }
        @media(max-width:600px){
          .hero-h1{font-size:36px!important}
          .section-h2{font-size:32px!important}
        }
      `}</style>

      <div style={{ fontFamily: "'DM Sans',sans-serif", color: C.black, background: C.bg }}>

        {/* NAV */}
        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          height: 72, padding: "0 clamp(24px,5vw,80px)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: "rgba(255,255,255,.9)", backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)", borderBottom: `1px solid ${C.gray6}`,
        }}>
          <span style={{ fontFamily: "'Instrument Serif',serif", fontSize: 28 }}>YFI</span>
          <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
            <a href="#how" className="nav-link" style={{ fontSize: 14, fontWeight: 500, color: C.gray2, transition: "color .2s" }}>How It Works</a>
            <a href="#platform" className="nav-link" style={{ fontSize: 14, fontWeight: 500, color: C.gray2, transition: "color .2s" }}>Platform</a>
            <a href="#who" className="nav-link" style={{ fontSize: 14, fontWeight: 500, color: C.gray2, transition: "color .2s" }}>Who It&#39;s For</a>
            <a href="#contact" className="pill-primary" style={{
              padding: "10px 24px", background: C.accent, color: "#fff",
              fontSize: 14, fontWeight: 600, borderRadius: 100, transition: "all .2s",
            }}>Book a Demo</a>
          </div>
        </nav>

        {/* HERO */}
        <section style={{
          minHeight: "100vh", display: "flex", flexDirection: "column",
          justifyContent: "center", padding: "140px clamp(24px,5vw,80px) 80px",
        }}>
          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" as const, color: C.gray2, marginBottom: 24 }}>
            YACHT FINANCING INTELLIGENCE
          </p>
          <h1 className="hero-h1" style={{
            fontFamily: "'Instrument Serif',serif", fontSize: "clamp(48px,7vw,88px)",
            fontWeight: 400, lineHeight: 1.02, letterSpacing: -2, maxWidth: 900, marginBottom: 32,
          }}>
            The structuring engine for yacht transactions.
          </h1>
          <p style={{ fontSize: 18, color: C.gray3, maxWidth: 520, lineHeight: 1.7, marginBottom: 40 }}>
            YFI encodes financing logic, scores buyer readiness, and generates
            institutional-grade reports — embedded inside broker workflows.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" as const }}>
            <a href="#contact" className="pill-primary" style={{
              padding: "14px 32px", background: C.accent, color: "#fff",
              fontSize: 15, fontWeight: 600, borderRadius: 100, transition: "all .2s",
            }}>Book a Demo</a>
            <a href="#how" className="pill-outline" style={{
              padding: "14px 32px", color: C.black, fontSize: 15, fontWeight: 500,
              borderRadius: 100, border: `1px solid ${C.gray5}`, transition: "all .2s",
            }}>See How It Works →</a>
          </div>
        </section>

        {/* 3-COL VALUE PROPS */}
        <section style={{ padding: "100px clamp(24px,5vw,80px)", background: C.bg }}>
          <div className="grid-3" style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 48 }}>
            {[
              { title: "Score every buyer", desc: "Replace guesswork with a structured 0–100 financing readiness index calibrated to real lender criteria." },
              { title: "Structure every deal", desc: "Get recommended financing paths — loan, leasing, or hybrid — with jurisdiction and ownership logic encoded." },
              { title: "Close with confidence", desc: "Generate institutional-grade reports that give lenders and buyers clarity before the first submission." },
            ].map((v, i) => (
              <div key={i}>
                <div style={{ width: 14, height: 14, borderRadius: "50%", background: C.accent, marginBottom: 24 }} />
                <h3 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 400, lineHeight: 1.1, marginBottom: 16, letterSpacing: -0.5 }}>{v.title}</h3>
                <p style={{ fontSize: 16, color: C.gray3, lineHeight: 1.65, maxWidth: 360 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TINTED FEATURE — READINESS ENGINE */}
        <section style={{ padding: "0 clamp(24px,5vw,80px) 100px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", background: C.tint, borderRadius: 28, padding: "clamp(40px,5vw,80px)", overflow: "hidden" }}>
            <div className="split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: C.accentPale, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: C.accent }}>◎</div>
                  <span style={{ fontSize: 15, fontWeight: 600 }}>Readiness Engine</span>
                </div>
                <h2 className="section-h2" style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 400, lineHeight: 1.08, letterSpacing: -1, marginBottom: 20 }}>
                  Know if a deal is financeable before you pick up the phone.
                </h2>
                <p style={{ fontSize: 16, color: C.gray3, lineHeight: 1.7, maxWidth: 440, marginBottom: 28 }}>
                  The readiness engine scores buyer profiles against encoded lender criteria — surfacing risk flags, LTV bands, and structuring direction instantly.
                </p>
                <a href="#contact" className="pill-black" style={{ display: "inline-block", padding: "12px 28px", background: C.black, color: "#fff", fontSize: 14, fontWeight: 600, borderRadius: 100, transition: "background .2s" }}>Learn more</a>
              </div>
              <div style={{ background: "#fff", borderRadius: 20, padding: 32, boxShadow: "0 2px 20px rgba(0,0,0,.04)", border: `1px solid ${C.tintMid}` }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: C.gray4, marginBottom: 20, textTransform: "uppercase" as const }}>ASSESSMENT OUTPUT</div>
                <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 72, color: C.accent, lineHeight: 1, marginBottom: 4 }}>82</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#059669", marginBottom: 24 }}>Finance Ready</div>
                {[["LTV Estimate","55 – 65%"],["Structuring Path","Malta Leasing Preferred"],["Risk Flags","Vessel age approaching limit"],["Complexity Tier","Moderate"]].map(([k,v],i)=>(
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderTop: `1px solid ${C.gray6}`, fontSize: 14 }}>
                    <span style={{ color: C.gray4 }}>{k}</span>
                    <span style={{ fontWeight: 500, color: k==="Risk Flags"?"#d97706":C.gray1, textAlign: "right" as const }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" style={{ padding: "100px clamp(24px,5vw,80px) 120px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" as const, color: C.gray2, marginBottom: 20 }}>HOW IT WORKS</p>
            <h2 className="section-h2" style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(36px,5vw,64px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: -1.5, maxWidth: 800, marginBottom: 64 }}>
              From buyer profile to financing intelligence — in minutes.
            </h2>
            <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 40 }}>
              {[
                { num: "01", title: "Input buyer & vessel data", desc: "Liquidity, net worth, residency, income type, vessel price, age, and intended use." },
                { num: "02", title: "Engine scores readiness", desc: "Deterministic rules produce a 0–100 score with risk flags and LTV estimation bands." },
                { num: "03", title: "Review structuring path", desc: "Loan, leasing, or hybrid — with complexity tier and jurisdiction sensitivity." },
                { num: "04", title: "Generate buyer report", desc: "Institutional-grade PDF with executive summary, risk analysis, and next steps." },
              ].map((s,i)=>(
                <div key={i}>
                  <div style={{ fontFamily: "'Instrument Serif',serif", fontSize: 48, lineHeight: 1, marginBottom: 16 }}>{s.num}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: C.gray3, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENTO GRID */}
        <section id="platform" style={{ padding: "0 clamp(24px,5vw,80px) 120px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" as const, color: C.gray2, marginBottom: 20 }}>THE PLATFORM</p>
            <h2 className="section-h2" style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(36px,5vw,64px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: -1.5, maxWidth: 700, marginBottom: 56 }}>
              Every transaction. Every buyer. One source of truth.
            </h2>
            <div className="bento-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { title: "Readiness Scoring", desc: "0–100 index combining liquidity strength, asset quality, structuring complexity, income stability, and jurisdiction sensitivity.", bg: C.gray6, span: false },
                { title: "Institutional Reports", desc: "PDF and web reports with executive summary, LTV projections, structuring recommendation, risk flags, and next steps.", bg: C.gray6, span: false },
                { title: "Versioned Rule Engine", desc: "Every rule stored, versioned, and auditable. Adjust weights, thresholds, and conditions without rebuilding. Transparent by design.", bg: C.tint, span: true },
                { title: "Broker Dashboard", desc: "Financing intelligence embedded in the broker's existing workflow — triggered from the buyer profile, before offer negotiation.", bg: C.gray6, span: false },
                { title: "API & Embeddable Widget", desc: "REST endpoints and a lightweight drop-in module. Any broker website can surface a readiness score preview.", bg: C.gray6, span: false },
              ].map((f,i)=>(
                <div key={i} className={`bento ${f.span?"bento-span2":""}`} style={{ ...(f.span?{gridColumn:"span 2"}:{}), background: f.bg, borderRadius: 20, padding: "36px 32px", transition: "transform .2s" }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10 }}>{f.title}</h3>
                  <p style={{ fontSize: 15, color: C.gray3, lineHeight: 1.65, maxWidth: 520 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUOTE */}
        <section style={{ padding: "100px clamp(24px,5vw,80px)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.2, letterSpacing: -0.5, maxWidth: 900, margin: "0 auto 32px" }}>
              &ldquo;Finally, a structured way to qualify financing before wasting time with lenders who were never going to approve the deal.&rdquo;
            </h2>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" as const }}>YACHT BROKER</p>
            <p style={{ fontSize: 12, letterSpacing: 1, color: C.gray4, marginTop: 2, textTransform: "uppercase" as const }}>MEDITERRANEAN REGION</p>
          </div>
        </section>

        {/* TINTED FEATURE — REPORTS */}
        <section style={{ padding: "0 clamp(24px,5vw,80px) 100px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", background: C.tint, borderRadius: 28, padding: "clamp(40px,5vw,80px)" }}>
            <div className="split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
              <div style={{ background: "#fff", borderRadius: 20, padding: 36, boxShadow: "0 2px 20px rgba(0,0,0,.04)", border: `1px solid ${C.tintMid}` }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28ca41" }} />
                </div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: C.gray4, marginBottom: 16, textTransform: "uppercase" as const }}>BUYER FINANCING REPORT</div>
                {["1. Executive Summary","2. Financing Readiness Score","3. Indicative Financing Structure","4. LTV & Cost Projection","5. Risk Considerations","6. Next Steps"].map((s,i)=>(
                  <div key={i} style={{ padding: "10px 0", borderBottom: i<5?`1px solid ${C.gray6}`:"none", fontSize: 14, color: i===0?C.black:C.gray3, fontWeight: i===0?600:400 }}>{s}</div>
                ))}
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: C.accentPale, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: C.accent }}>⊞</div>
                  <span style={{ fontSize: 15, fontWeight: 600 }}>Report Generator</span>
                </div>
                <h2 className="section-h2" style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 400, lineHeight: 1.08, letterSpacing: -1, marginBottom: 20 }}>
                  Reports that look like they came from a private bank.
                </h2>
                <p style={{ fontSize: 16, color: C.gray3, lineHeight: 1.7, maxWidth: 440, marginBottom: 28 }}>
                  Generate institutional-grade buyer reports in one click. PDF and web view with every section a lender expects to see.
                </p>
                {["Executive summary with readiness score","Structuring recommendation with jurisdiction logic","Risk flags and documentation checklist","Shareable with buyers and lenders"].map((item,i)=>(
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <span style={{ color: C.accent, fontWeight: 700, fontSize: 16 }}>✓</span>
                    <span style={{ fontSize: 15, color: C.gray2 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section id="who" style={{ padding: "100px clamp(24px,5vw,80px) 120px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" as const, color: C.gray2, marginBottom: 20 }}>WHO IT&#39;S FOR</p>
            <h2 className="section-h2" style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(36px,5vw,64px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: -1.5, maxWidth: 700, marginBottom: 56 }}>
              Built for the people who close yacht deals.
            </h2>
            <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              {[
                { title: "Yacht Brokers", desc: "Qualify buyer financing before engaging lenders. Reduce wasted outreach. Increase deal confidence.", items: ["Score every buyer in minutes","Generate shareable reports","Embedded in your workflow"] },
                { title: "Broker Networks", desc: "Standardise financing conversations across your organisation with a structured intelligence module.", items: ["White-label ready","API integration","Usage analytics dashboard"] },
                { title: "Finance Advisors", desc: "Encode your structuring expertise into a scalable engine. Build on the intelligence layer.", items: ["Custom rule configuration","Scenario comparison","Lender matching (v2)"] },
              ].map((w,i)=>(
                <div key={i} className="feature-card" style={{ background: C.gray6, borderRadius: 20, padding: "36px 28px", transition: "all .25s" }}>
                  <h3 style={{ fontFamily: "'Instrument Serif',serif", fontSize: 28, fontWeight: 400, marginBottom: 12, letterSpacing: -0.3 }}>{w.title}</h3>
                  <p style={{ fontSize: 14, color: C.gray3, lineHeight: 1.65, marginBottom: 20 }}>{w.desc}</p>
                  {w.items.map((item,j)=>(
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                      <span style={{ color: C.accent, fontWeight: 700, fontSize: 14 }}>✓</span>
                      <span style={{ fontSize: 14, color: C.gray2 }}>{item}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" style={{ padding: "120px clamp(24px,5vw,80px)", background: C.tint, textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: "clamp(36px,5.5vw,68px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: -1.5, maxWidth: 800, margin: "0 auto 20px" }}>
            Book a free, 15-minute demo with the founding team.
          </h2>
          <p style={{ fontSize: 17, color: C.gray3, maxWidth: 480, margin: "0 auto 44px", lineHeight: 1.7 }}>
            See the readiness engine in action on a real yacht transaction scenario.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" as const, maxWidth: 540, margin: "0 auto" }}>
            <input type="email" placeholder="Work Email*" value={email} onChange={(e) => setEmail(e.target.value)} style={{
              flex: 1, minWidth: 220, padding: "14px 20px", fontSize: 15,
              border: `1px solid ${C.gray5}`, borderRadius: 100,
              fontFamily: "'DM Sans',sans-serif", background: "#fff",
            }} />
            <button className="pill-primary" style={{
              padding: "14px 32px", background: C.accent, color: "#fff",
              fontSize: 15, fontWeight: 600, borderRadius: 100,
              border: "none", cursor: "pointer", transition: "all .2s",
            }}>Submit</button>
          </div>
          <p style={{ fontSize: 12, color: C.gray4, marginTop: 16, lineHeight: 1.5 }}>
            We&#39;ll reach out to schedule a walkthrough. No spam, no mailing lists.
          </p>
        </section>

        {/* FOOTER */}
        <footer style={{ padding: "60px clamp(24px,5vw,80px) 32px", borderTop: `1px solid ${C.gray6}` }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap" as const, gap: 40 }}>
            <div>
              <span style={{ fontFamily: "'Instrument Serif',serif", fontSize: 24 }}>YFI</span>
              <p style={{ color: C.gray3, fontSize: 14, marginTop: 8, lineHeight: 1.6 }}>The financing intelligence layer<br/>for yacht transactions.</p>
            </div>
            <div style={{ display: "flex", gap: 60 }}>
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" as const, marginBottom: 14 }}>Platform</p>
                <a href="#platform" style={{ display: "block", fontSize: 14, color: C.gray3, marginBottom: 10 }}>Readiness Engine</a>
                <a href="#platform" style={{ display: "block", fontSize: 14, color: C.gray3, marginBottom: 10 }}>Buyer Reports</a>
                <a href="#platform" style={{ display: "block", fontSize: 14, color: C.gray3, marginBottom: 10 }}>API & Widget</a>
              </div>
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" as const, marginBottom: 14 }}>Company</p>
                <a href="#who" style={{ display: "block", fontSize: 14, color: C.gray3, marginBottom: 10 }}>Who It&#39;s For</a>
                <a href="#contact" style={{ display: "block", fontSize: 14, color: C.gray3, marginBottom: 10 }}>Book a Demo</a>
              </div>
            </div>
          </div>
          <div style={{ maxWidth: 1280, margin: "40px auto 0", paddingTop: 24, borderTop: `1px solid ${C.gray6}` }}>
            <p style={{ color: C.gray4, fontSize: 12 }}>© 2026 YFI — Yacht Financing Intelligence. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}