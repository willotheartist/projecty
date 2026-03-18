// app/solutions/broker-networks/page.tsx

import type { Metadata } from "next";
import Image from "next/image";

const SITE_URL = "https://www.waaza.co";

export const metadata: Metadata = {
  title: "Waaza for Broker Networks: Financing Intelligence at Scale | Waaza",
  description: "Give every broker in your network a structured financing qualification layer. Consistent assessments, institutional reports, and a shared intelligence standard across your entire team.",
  alternates: { canonical: `${SITE_URL}/solutions/broker-networks/` },
  openGraph: {
    title: "Waaza for Broker Networks",
    description: "Consistent financing intelligence across every broker in your network.",
    url: `${SITE_URL}/solutions/broker-networks/`,
    siteName: "Waaza", locale: "en_GB", type: "website",
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
    heading: "Financing qualification varies broker to broker",
    body: "In a network, every broker handles the financing conversation differently. Some are thorough. Some aren't. The deals that fall apart late are almost always the ones where the financing wasn't properly assessed early — and that happens inconsistently across any team.",
  },
  {
    number: "02",
    heading: "There's no shared intelligence layer",
    body: "Each broker operates with their own instincts, their own contacts, their own approach. When a broker leaves, the knowledge leaves with them. Waaza encodes the intelligence structurally — so the standard travels with the network, not with the individual.",
  },
  {
    number: "03",
    heading: "No visibility on financing readiness across the pipeline",
    body: "How many deals in your current pipeline have a buyer who is genuinely finance-ready? Most network principals can't answer that question with confidence. Waaza makes financing readiness visible, documented, and trackable.",
  },
];

const features = [
  {
    heading: "Consistent assessment standard",
    body: "Every broker in your network runs the same structured assessment. The score, the LTV estimate, the risk flags — consistent methodology, regardless of who runs it.",
    icon: "◎",
  },
  {
    heading: "White-label ready",
    body: "Waaza can be embedded under your network's brand. Your buyers see your identity, backed by Waaza's intelligence engine.",
    icon: "⊞",
  },
  {
    heading: "Shared assessment history",
    body: "Assessments are stored, versioned, and accessible. When a deal moves between brokers or escalates to network level, the financing picture is already documented.",
    icon: "▲",
  },
  {
    heading: "API and widget integration",
    body: "Embed directly in your existing systems — CRM, listing platform, or broker portal. No new interface to learn. Intelligence where your team already works.",
    icon: "⬡",
  },
];

export default function BrokerNetworksPage() {
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
              For Broker Networks
            </span>
          </div>
          <h1 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(42px, 5.5vw, 72px)",
            fontWeight: 400, lineHeight: 1.0,
            letterSpacing: -2, color: C.black, marginBottom: 28,
          }}>
            One intelligence standard.<br />
            <em style={{ fontStyle: "italic", color: C.gray2 }}>Every broker.</em>
          </h1>
          <p style={{
            fontSize: 18, color: C.gray2, lineHeight: 1.75,
            marginBottom: 40, maxWidth: 480,
            fontFamily: "'Inter Tight', sans-serif",
          }}>
            Waaza gives broker networks a shared financing intelligence layer — so every broker qualifies buyers consistently, and no deal falls apart because the financing conversation was handled informally.
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
            <a href="/integrations" style={{
              display: "inline-block", padding: "16px 24px",
              color: C.gray2, fontSize: 14, fontWeight: 500,
              textDecoration: "none", fontFamily: "'Inter Tight', sans-serif",
            }}>
              See integration options
            </a>
          </div>
        </div>
        <div style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4/3" }}>
          <Image
            src="/insurance/waaza-insurance-7.png"
            alt="Broker network team using Waaza financing intelligence platform"
            width={1080} height={720}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ background: C.black, padding: "48px clamp(20px, 5vw, 80px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
          {[
            { number: "1 standard", label: "Across every broker in your network" },
            { number: "Zero training", label: "Required to run a first assessment" },
            { number: "White-label", label: "Ready for your network's brand" },
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
            Three ways inconsistency costs broker networks deals
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
              Financing intelligence that scales with your network
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

      {/* Integration strip */}
      <section style={{ background: C.accentLight, borderTop: `1px solid ${C.accent}60`, borderBottom: `1px solid ${C.accent}60`, padding: "80px clamp(20px, 5vw, 80px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px 80px", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.accentDark, opacity: 0.6, marginBottom: 16, fontFamily: "'Inter Tight', sans-serif" }}>Integration</p>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: -0.8, color: C.black, marginBottom: 20 }}>
              Embed in your existing platform
            </h2>
            <p style={{ fontSize: 16, color: C.gray2, lineHeight: 1.75, marginBottom: 32, maxWidth: 440, fontFamily: "'Inter Tight', sans-serif" }}>
              Waaza's widget and API drop into your existing broker portal, CRM, or listing platform. Your brokers don't need a new tool — they need intelligence in the tools they already use.
            </p>
            <a href="/integrations" style={{ display: "inline-block", padding: "14px 28px", background: C.black, color: C.white, fontSize: 14, fontWeight: 700, borderRadius: 10, textDecoration: "none", fontFamily: "'Inter Tight', sans-serif" }}>
              See integration documentation →
            </a>
          </div>
          <div style={{ borderRadius: 16, overflow: "hidden", background: C.white, aspectRatio: "4/3" }}>
            <Image
              src="/insurance/waaza-insurance-8.png"
              alt="Waaza financing intelligence embedded in a broker network platform"
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
            Bring your network up to a consistent standard
          </h2>
          <p style={{ fontSize: 17, color: "#9ca3af", lineHeight: 1.7, marginBottom: 40, fontFamily: "'Inter Tight', sans-serif" }}>
            Start with a free assessment. See the output. Then talk to us about rolling it out across your team.
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