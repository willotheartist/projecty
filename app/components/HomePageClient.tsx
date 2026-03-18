// app/components/HomePageClient.tsx
// Server component. Motion handled by ScrollWatcher (client).
// .reveal elements start hidden, ScrollWatcher adds .in on viewport entry.

import Image from "next/image";
import { EmailForm } from "./EmailForm";
import { ScrollWatcher } from "./ScrollWatcher";

const C = {
  bg: "#f4f3ef",
  white: "#ffffff",
  accent: "#FFF86C",
  accentPale: "#fffde0",
  black: "#0a0a0a",
  gray1: "#1a1a1a",
  gray2: "#4b5563",
  gray3: "#6b7280",
  gray4: "#9ca3af",
  gray5: "#d1d5db",
  gray6: "#eae9e4",
};

const STYLES = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes slideRight {
    from { opacity: 0; transform: translateX(-18px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  .h-badge { animation: slideRight 0.5s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
  .h-h1    { animation: fadeUp    0.8s cubic-bezier(0.22,1,0.36,1) 0.15s both; }
  .h-body  { animation: fadeUp    0.7s cubic-bezier(0.22,1,0.36,1) 0.3s  both; }
  .h-cta   { animation: fadeUp    0.7s cubic-bezier(0.22,1,0.36,1) 0.44s both; }
  .h-img   { animation: fadeIn    1s   cubic-bezier(0.22,1,0.36,1) 0.2s  both; }

  /* ScrollWatcher drives these */
  .reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1),
                transform 0.75s cubic-bezier(0.22,1,0.36,1);
  }
  .reveal.in {
    opacity: 1;
    transform: translateY(0);
  }

  .btn-yellow { transition: opacity 0.15s, transform 0.15s, box-shadow 0.2s; }
  .btn-yellow:hover { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(232,227,72,.35); }
  .btn-black  { transition: background 0.15s; }
  .btn-black:hover  { background: #1a1a1a !important; }
  .card-lift  { transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s; }
  .card-lift:hover  { transform: translateY(-3px); box-shadow: 0 10px 36px rgba(0,0,0,.07); }

  /* ── Platform rows ── */
  .plat-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 12px;
    min-height: 240px;
    text-decoration: none;
    color: inherit;
    transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s;
    align-items: stretch;
  }
  .plat-row:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,.09); }
  .plat-text { padding: 44px 48px; display: flex; flex-direction: column; justify-content: center; }
  .plat-img  { overflow: hidden; }
  .plat-img img { width: 100%; height: 100%; object-fit: cover; display: block; }

  @media (max-width: 900px) {
    .hero-grid, .split-grid, .grid-3, .grid-4 { grid-template-columns: 1fr !important; }
    .hero-h1  { font-size: 50px !important; }
    .s-h2     { font-size: 36px !important; }
    .plat-row { grid-template-columns: 1fr !important; }
    .plat-img { min-height: 200px; }
  }
  @media (max-width: 600px) {
    .hero-h1 { font-size: 40px !important; letter-spacing: -1px !important; }
    .s-h2    { font-size: 30px !important; }
  }
`;

export function HomePageClient() {
  return (
    <>
      <style>{STYLES}</style>
      <ScrollWatcher />
      <div style={{ fontFamily: "'Inter Tight', sans-serif", color: C.black, background: C.bg }}>
        <div style={{ height: 72 }} />

        {/* ══ HERO ══════════════════════════════════════════════ */}
        <section style={{ padding: "80px clamp(24px,5vw,80px) 100px" }}>
          <div className="hero-grid" style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div>
              <div className="h-badge" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 12px", background: C.accentPale, borderRadius: 6, marginBottom: 28, border: `1px solid ${C.accent}80` }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.black }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: C.black, letterSpacing: "0.06em" }}>Yacht Financing Intelligence</span>
              </div>
              <h1 className="h-h1 hero-h1" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(52px,6vw,80px)", fontWeight: 400, lineHeight: 1.0, letterSpacing: -2.5, maxWidth: 560, marginBottom: 28 }}>
                The financing engine that supports your yacht transactions.
              </h1>
              <p className="h-body" style={{ fontSize: 17, color: C.gray2, maxWidth: 480, lineHeight: 1.75, marginBottom: 40 }}>
                <strong style={{ color: C.black }}>Waaza</strong> analyses key financial and asset indicators to provide a structured readiness score, indicative financing range, and recommended structuring path.
              </p>
              <div className="h-cta" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/wizard" className="btn-yellow" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "16px 32px", background: C.accent, color: C.black, fontSize: 15, fontWeight: 700, borderRadius: 10, textDecoration: "none" }}>
                  Simulate my financing →
                </a>
                <a href="/solutions/yacht-brokers" className="btn-black" style={{ display: "inline-flex", alignItems: "center", padding: "16px 24px", background: C.black, color: "#fff", fontSize: 14, fontWeight: 600, borderRadius: 10, textDecoration: "none" }}>
                  For brokers
                </a>
              </div>
            </div>
            <div className="h-img" style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: -14, left: -14, width: "65%", height: "55%", background: C.accent, borderRadius: 24, zIndex: 0 }} />
              <Image src="/hero.png" alt="Waaza yacht financing intelligence" width={700} height={560} priority style={{ position: "relative", width: "100%", height: "auto", borderRadius: 20, objectFit: "cover", maxHeight: 560, zIndex: 1, boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }} />
            </div>
          </div>
        </section>

        {/* ══ 3 VALUE PROPS ════════════════════════════════════ */}
        <section style={{ padding: "100px clamp(24px,5vw,80px)", background: C.bg }}>
          <div className="grid-3" style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 48 }}>
            {[
              { title: "Score every buyer", desc: "Replace guesswork with a structured 0–100 financing readiness index calibrated to real lender criteria." },
              { title: "Structure every deal", desc: "Get recommended financing paths — loan, leasing, or hybrid — with jurisdiction and ownership logic encoded." },
              { title: "Close with confidence", desc: "Generate institutional-grade reports that give lenders and buyers clarity before the first submission." },
            ].map((v, i) => (
              <div key={v.title} className="reveal" data-delay={i * 100}>
                <div style={{ width: 14, height: 14, borderRadius: "50%", background: C.accent, marginBottom: 24 }} />
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(26px,3vw,38px)", fontWeight: 400, lineHeight: 1.1, marginBottom: 14, letterSpacing: -0.5 }}>{v.title}</h3>
                <p style={{ fontSize: 15, color: C.gray3, lineHeight: 1.7, maxWidth: 360 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ READINESS ENGINE FEATURE ══════════════════════ */}
        <section style={{ padding: "0 clamp(24px,5vw,80px) 100px" }}>
          <div className="reveal" style={{ maxWidth: 1280, margin: "0 auto", background: C.white, borderRadius: 28, padding: "clamp(40px,5vw,80px)", overflow: "hidden" }}>
            <div className="split-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: C.accentPale, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>◎</div>
                  <span style={{ fontSize: 15, fontWeight: 600 }}>Readiness Engine</span>
                </div>
                <h2 className="s-h2" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 400, lineHeight: 1.08, letterSpacing: -1, marginBottom: 20 }}>
                  Know if a deal is financeable before you pick up the phone.
                </h2>
                <p style={{ fontSize: 16, color: C.gray3, lineHeight: 1.7, maxWidth: 440, marginBottom: 28 }}>
                  The readiness engine scores buyer profiles against encoded lender criteria — surfacing risk flags, LTV bands, and structuring direction instantly.
                </p>
                <a href="/platform/readiness-scoring" className="btn-black" style={{ display: "inline-block", padding: "12px 28px", background: C.black, color: "#fff", fontSize: 14, fontWeight: 600, borderRadius: 10, textDecoration: "none" }}>
                  Learn more
                </a>
              </div>
              <div style={{ background: C.bg, borderRadius: 20, padding: 32, border: `1px solid ${C.gray6}` }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: C.gray4, marginBottom: 20, textTransform: "uppercase" }}>Assessment Output</div>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 72, color: C.black, lineHeight: 1, marginBottom: 4 }}>82</div>
                <div style={{ display: "inline-block", padding: "4px 12px", background: C.accent, borderRadius: 8, fontSize: 13, fontWeight: 700, color: C.black, marginBottom: 24 }}>Finance Ready</div>
                {[
                  ["LTV Estimate", "55–65%", false],
                  ["Structuring Path", "Malta Leasing Preferred", false],
                  ["Risk Flags", "Vessel age approaching limit", true],
                  ["Complexity Tier", "Moderate", false],
                ].map(([k, v, warn]) => (
                  <div key={String(k)} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderTop: `1px solid ${C.gray6}`, fontSize: 14 }}>
                    <span style={{ color: C.gray4 }}>{k}</span>
                    <span style={{ fontWeight: 500, color: warn ? "#d97706" : C.gray1, textAlign: "right" }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ HOW IT WORKS ════════════════════════════════════ */}
        <section id="how" style={{ padding: "100px clamp(24px,5vw,80px) 120px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="reveal">
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.gray3, marginBottom: 20 }}>How it works</p>
              <h2 className="s-h2" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(36px,5vw,64px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: -1.5, maxWidth: 800, marginBottom: 64 }}>
                From buyer profile to financing intelligence — in minutes.
              </h2>
            </div>
            <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 40 }}>
              {[
                { num: "01", title: "Input buyer & vessel data", desc: "Liquidity, net worth band, income type, residency, vessel price, year, flag, and intended use. Two minutes of structured input." },
                { num: "02", title: "Rule engine fires", desc: "Deterministic, versioned rules score liquidity strength, asset quality, structuring complexity, and jurisdiction sensitivity simultaneously — in under a second." },
                { num: "03", title: "Structuring direction surfaces", desc: "Personal or SPV. Loan or Malta leasing. UK lender or European private bank. The right path — and the risk flags that block the wrong one." },
                { num: "04", title: "Report generated, deal moves", desc: "One click produces an institutional-grade PDF. Score, LTV estimate, structuring recommendation, risk flags, and next steps — in a format lenders recognise." },
              ].map((s, i) => (
                <div key={s.num} className="reveal" data-delay={i * 90}>
                  <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 48, lineHeight: 1, marginBottom: 16, color: C.accent }}>{s.num}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10, lineHeight: 1.3 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: C.gray3, lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PLATFORM — FULL-WIDTH ROWS ══════════════════════ */}
        <section id="platform" style={{ padding: "0 clamp(24px,5vw,80px) 120px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="reveal" style={{ marginBottom: 56 }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.gray3, marginBottom: 20 }}>The platform</p>
              <h2 className="s-h2" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(36px,5vw,64px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: -1.5, maxWidth: 700 }}>
                Every transaction. Every buyer. One source of truth.
              </h2>
            </div>

            {/* Row 1 — Readiness Scoring */}
            <a href="/platform/readiness-scoring" className="plat-row reveal card-lift" data-delay={0} style={{ background: C.white }}>
              <div className="plat-text">
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.gray4, marginBottom: 12 }}>Readiness Scoring</p>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(22px,2.5vw,32px)", fontWeight: 400, letterSpacing: -0.5, marginBottom: 12, lineHeight: 1.15 }}>
                  A 0–100 score calibrated to real lender criteria
                </h3>
                <p style={{ fontSize: 15, color: C.gray3, lineHeight: 1.7, maxWidth: 460, marginBottom: 24 }}>
                  Liquidity strength, asset quality, structuring complexity, income stability, and jurisdiction sensitivity — weighted and scored in seconds.
                </p>
                <span style={{ fontSize: 14, fontWeight: 600, color: C.black }}>Learn more →</span>
              </div>
              <div className="plat-img">
                <Image src="/insurance/waaza-insurance-3.png" alt="Waaza readiness scoring" width={600} height={300} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </a>

            {/* Row 2 — Rule Engine — image left */}
            <a href="/platform/rule-engine" className="plat-row reveal card-lift" data-delay={70} style={{ background: C.accentPale }}>
              <div className="plat-img">
                <Image src="/insurance/waaza-insurance-4.png" alt="Waaza rule engine" width={600} height={300} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className="plat-text">
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "3px 10px", background: `${C.accent}99`, borderRadius: 6, marginBottom: 14, border: `1px solid ${C.accent}`, width: "fit-content" }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: C.black, letterSpacing: "0.06em" }}>Core IP</span>
                </div>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(22px,2.5vw,32px)", fontWeight: 400, letterSpacing: -0.5, marginBottom: 12, lineHeight: 1.15 }}>
                  Deterministic, versioned rule engine
                </h3>
                <p style={{ fontSize: 15, color: C.gray2, lineHeight: 1.7, maxWidth: 460, marginBottom: 24 }}>
                  Every rule stored, versioned, and auditable. The same inputs always produce the same outputs. Adjust weights without rebuilding. Transparent by design.
                </p>
                <span style={{ fontSize: 14, fontWeight: 600, color: C.black }}>Learn more →</span>
              </div>
            </a>

            {/* Row 3 — Reports */}
            <a href="/platform/report-generator" className="plat-row reveal card-lift" data-delay={140} style={{ background: C.white }}>
              <div className="plat-text">
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.gray4, marginBottom: 12 }}>Report Generator</p>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(22px,2.5vw,32px)", fontWeight: 400, letterSpacing: -0.5, marginBottom: 12, lineHeight: 1.15 }}>
                  Reports that look like they came from a private bank
                </h3>
                <p style={{ fontSize: 15, color: C.gray3, lineHeight: 1.7, maxWidth: 460, marginBottom: 24 }}>
                  Six structured sections — executive summary, readiness score, LTV projection, structuring recommendation, risk flags, and next steps. PDF and web in one click.
                </p>
                <span style={{ fontSize: 14, fontWeight: 600, color: C.black }}>Learn more →</span>
              </div>
              <div className="plat-img">
                <Image src="/insurance/waaza-insurance-5.png" alt="Waaza report generator" width={600} height={300} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </a>

            {/* Row 4 — Scenario Modelling — dark */}
            <a href="/platform/scenario-modelling" className="plat-row reveal card-lift" data-delay={210} style={{ background: C.black }}>
              <div className="plat-img">
                <Image src="/insurance/waaza-insurance-6.png" alt="Waaza scenario modelling" width={600} height={300} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }} />
              </div>
              <div className="plat-text">
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b7280", marginBottom: 12 }}>Scenario Modelling</p>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(22px,2.5vw,32px)", fontWeight: 400, letterSpacing: -0.5, marginBottom: 12, lineHeight: 1.15, color: C.white }}>
                  Every structure, side by side
                </h3>
                <p style={{ fontSize: 15, color: "#9ca3af", lineHeight: 1.7, maxWidth: 460, marginBottom: 24 }}>
                  Compare loan vs leasing, different LTV levels, and ownership structures — with full five-year cost projections — before committing to any of them.
                </p>
                <span style={{ fontSize: 14, fontWeight: 600, color: C.accent }}>Learn more →</span>
              </div>
            </a>

            {/* Row 5 — API */}
            <a href="/integrations" className="plat-row reveal card-lift" data-delay={280} style={{ background: C.white }}>
              <div className="plat-text">
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.gray4, marginBottom: 12 }}>API & Embeddable Widget</p>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(22px,2.5vw,32px)", fontWeight: 400, letterSpacing: -0.5, marginBottom: 12, lineHeight: 1.15 }}>
                  Intelligence where your team already works
                </h3>
                <p style={{ fontSize: 15, color: C.gray3, lineHeight: 1.7, maxWidth: 460, marginBottom: 24 }}>
                  REST endpoints and a lightweight drop-in module. Any broker website or listing platform can surface a readiness score preview in one script tag.
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {["REST API", "Webhook events", "Drop-in widget", "White-label"].map((tag) => (
                    <span key={tag} style={{ fontSize: 11, fontWeight: 700, padding: "4px 10px", background: C.accentPale, borderRadius: 6, color: C.black, letterSpacing: "0.04em" }}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="plat-img">
                <Image src="/insurance/waaza-insurance-8.png" alt="Waaza API and widget" width={600} height={300} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </a>
          </div>
        </section>

        {/* ══ QUOTE ════════════════════════════════════════════ */}
        <div className="reveal" style={{ padding: "100px clamp(24px,5vw,80px)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(26px,4vw,46px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.25, letterSpacing: -0.5, maxWidth: 880, margin: "0 auto 28px" }}>
              "Finally, a structured way to qualify financing before wasting time with lenders who were never going to approve the deal."
            </h2>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.gray4 }}>
              Yacht Broker · Mediterranean Region
            </p>
          </div>
        </div>

        {/* ══ WHO IT'S FOR ══════════════════════════════════════ */}
        <section id="who" style={{ padding: "100px clamp(24px,5vw,80px) 120px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="reveal" style={{ marginBottom: 56 }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.gray3, marginBottom: 20 }}>Who it's for</p>
              <h2 className="s-h2" style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(36px,5vw,64px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: -1.5, maxWidth: 700 }}>
                Built for the people who close yacht deals.
              </h2>
            </div>
            <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              {[
                { title: "Yacht Brokers", href: "/solutions/yacht-brokers", desc: "Qualify buyer financing before engaging lenders. Reduce wasted outreach. Increase deal confidence.", items: ["Score every buyer in minutes", "Generate shareable reports", "Embedded in your workflow"] },
                { title: "Broker Networks", href: "/solutions/broker-networks", desc: "Standardise financing conversations across your organisation with a structured intelligence module.", items: ["White-label ready", "API integration", "Usage analytics dashboard"] },
                { title: "Finance Advisors", href: "/solutions/finance-advisors", desc: "Encode your structuring expertise into a scalable engine. Build on the intelligence layer.", items: ["Custom rule configuration", "Scenario comparison", "Lender matching (v2)"] },
              ].map((w, i) => (
                <a key={w.title} href={w.href} className="reveal card-lift" data-delay={i * 100} style={{ background: C.white, borderRadius: 20, padding: "36px 28px", display: "block", textDecoration: "none", color: "inherit" }}>
                  <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 28, fontWeight: 400, marginBottom: 12, letterSpacing: -0.3, color: C.black }}>{w.title}</h3>
                  <p style={{ fontSize: 14, color: C.gray3, lineHeight: 1.65, marginBottom: 20 }}>{w.desc}</p>
                  {w.items.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                      <span style={{ color: C.black, fontWeight: 700, fontSize: 14, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: 14, color: C.gray2 }}>{item}</span>
                    </div>
                  ))}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA ══════════════════════════════════════════════ */}
        <section id="contact" style={{ padding: "120px clamp(24px,5vw,80px)", background: C.white, textAlign: "center" }}>
          <div className="reveal" style={{ maxWidth: 680, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(36px,5.5vw,68px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: -1.5, marginBottom: 20 }}>
              Book a free, 15-minute demo with the founding team.
            </h2>
            <p style={{ fontSize: 17, color: C.gray3, maxWidth: 460, margin: "0 auto 44px", lineHeight: 1.7 }}>
              See the readiness engine in action on a real yacht transaction scenario.
            </p>
            <EmailForm />
            <p style={{ fontSize: 12, color: C.gray4, marginTop: 16, lineHeight: 1.5 }}>
              We'll reach out to schedule a walkthrough. No spam, no mailing lists.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}