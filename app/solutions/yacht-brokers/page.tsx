// app/solutions/yacht-brokers/page.tsx
// ─────────────────────────────────────────────────────────────
// Premium marketing landing page for yacht brokers.
// Design: editorial luxury — warm off-white #f4f3ef, Waaza yellow
// accents, Instrument Serif for all display text, Inter Tight body.
// No sidebar, no ToC — pure conversion page.
// ─────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import Image from "next/image";

const SITE_URL = "https://www.waaza.co";

export const metadata: Metadata = {
  title: "Waaza for Yacht Brokers: Structured Financing Intelligence | Waaza",
  description:
    "Waaza gives yacht brokers a structured way to qualify buyers before lender outreach — so financing conversations happen at the right time, with the right preparation.",
  alternates: { canonical: `${SITE_URL}/solutions/yacht-brokers/` },
  openGraph: {
    title: "Waaza for Yacht Brokers",
    description: "Qualify buyers before lender outreach. Run financing assessments in minutes. Present institutional-grade reports to clients.",
    url: `${SITE_URL}/solutions/yacht-brokers/`,
    siteName: "Waaza",
    locale: "en_GB",
    type: "website",
    images: [{ url: `${SITE_URL}/og/solutions-yacht-brokers-og.jpg`, width: 1200, height: 630, alt: "Waaza for Yacht Brokers" }],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
};

const C = {
  bg: "#f4f3ef",
  black: "#0a0a0a",
  gray1: "#1a1a1a",
  gray2: "#4b5563",
  gray3: "#6b7280",
  gray4: "#9ca3af",
  gray5: "#d1d5db",
  gray6: "#eae9e4",
  white: "#ffffff",
  accent: "#FFF86C",
  accentDark: "#0a0a0a",
  accentLight: "#fffde0",
};

const problems = [
  {
    number: "01",
    heading: "Unqualified buyers waste your time",
    body: "A buyer with enthusiasm but no financing clarity will take your time through viewing, negotiation, and survey — then stall or fall away when the financing conversation begins. The problem isn't that they weren't ready. It's that nobody checked.",
  },
  {
    number: "02",
    heading: "There's no structured way to qualify before you call a lender",
    body: "Every broker runs financing qualification informally — a gut feel, a few questions, an instinct. When the instinct is wrong, you're already deep into a deal. Waaza makes the qualification structural, documented, and replicable.",
  },
  {
    number: "03",
    heading: "Deals fall apart late because financing wasn't assessed early",
    body: "The survey is done. The purchase agreement is signed. The lender comes back with a 50% LTV on a vessel the buyer thought they'd finance at 70%. The deal unravels. This is a preventable failure — and it happens because the financing conversation was left too late.",
  },
];

const features = [
  {
    heading: "Financing readiness score",
    body: "Run a structured assessment in minutes. The score tells you — and your buyer — where the financing stands before you pick up the phone to a lender. No ambiguity. No surprises.",
    icon: "◎",
  },
  {
    heading: "Indicative LTV range",
    body: "Know the likely loan-to-value before the lender does. Waaza's engine factors in vessel age, buyer profile, ownership structure, and jurisdiction to output a realistic LTV band.",
    icon: "▲",
  },
  {
    heading: "Risk flags surfaced early",
    body: "Vessel too old. VAT position unclear. Ownership structure the lender won't accept. Waaza flags these before they become deal-killers — when there's still time to address them.",
    icon: "⬡",
  },
  {
    heading: "Institutional-grade buyer reports",
    body: "Generate a PDF report your buyer can take to their adviser, their accountant, or their bank. Structured. Data-forward. Exactly the kind of document that moves a financing conversation forward.",
    icon: "⊞",
  },
];

const steps = [
  { step: "1", label: "Enter buyer and vessel details", sub: "Takes two minutes. No login required for a first assessment." },
  { step: "2", label: "Waaza runs the assessment", sub: "The rule engine scores readiness, estimates LTV, and surfaces flags." },
  { step: "3", label: "Review the output", sub: "Score, LTV band, risk flags, and recommended structuring direction." },
  { step: "4", label: "Share the report", sub: "Generate a PDF for the buyer. Present with confidence. Proceed with clarity." },
];

export default function YachtBrokersPage() {
  return (
    <div style={{ background: C.bg, fontFamily: "'Inter Tight', sans-serif" }}>

      {/* ── Yellow top bar ── */}
      <div style={{ height: 3, background: C.accent }} />

      {/* ── Hero ── */}
      <section style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "80px clamp(20px, 5vw, 80px) 100px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "60px 80px",
        alignItems: "center",
      }}>
        <div>
          {/* Eyebrow */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "4px 12px", background: C.accentLight,
            borderRadius: 6, marginBottom: 28,
            border: `1px solid ${C.accent}80`,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.accentDark }} />
            <span style={{
              fontSize: 12, fontWeight: 700, color: C.accentDark,
              letterSpacing: "0.06em", fontFamily: "'Inter Tight', sans-serif",
            }}>
              For Yacht Brokers
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(42px, 5.5vw, 72px)",
            fontWeight: 400, lineHeight: 1.0,
            letterSpacing: -2, color: C.black,
            marginBottom: 28,
          }}>
            Qualify buyers before<br />
            <em style={{ fontStyle: "italic", color: C.gray2 }}>the lender does.</em>
          </h1>

          <p style={{
            fontSize: 18, color: C.gray2, lineHeight: 1.75,
            marginBottom: 40, maxWidth: 480,
            fontFamily: "'Inter Tight', sans-serif",
          }}>
            Waaza gives brokers a structured financing intelligence layer — so you know where a buyer stands before you invest weeks in a deal that can't complete.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <a href="/wizard" style={{
              display: "inline-block", padding: "16px 36px",
              background: C.black, color: C.white,
              fontSize: 15, fontWeight: 700, borderRadius: 10,
              textDecoration: "none", fontFamily: "'Inter Tight', sans-serif",
              letterSpacing: "-0.01em",
            }}>
              Start a free assessment →
            </a>
            <a href="/documentation" style={{
              display: "inline-block", padding: "16px 24px",
              color: C.gray2, fontSize: 14, fontWeight: 500,
              textDecoration: "none", fontFamily: "'Inter Tight', sans-serif",
            }}>
              See how it works
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div style={{
          borderRadius: 20, overflow: "hidden",
          background: C.accentLight,
          aspectRatio: "4/3",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Image
            src="/insurance/waaza-insurance-1.png"
            alt="Yacht broker using Waaza to run a financing readiness assessment for a buyer"
            width={1080}
            height={720}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div style={{
        background: C.black,
        padding: "48px clamp(20px, 5vw, 80px)",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: 40,
        }}>
          {[
            { number: "< 3 min", label: "To run a full financing assessment" },
            { number: "4–8 weeks", label: "Saved by qualifying buyers earlier" },
            { number: "1 report", label: "Shareable with buyer, adviser, and lender" },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 400, color: C.accent,
                lineHeight: 1, marginBottom: 8,
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: 14, color: "#9ca3af",
                fontFamily: "'Inter Tight', sans-serif", lineHeight: 1.5,
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Problem section ── */}
      <section style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "100px clamp(20px, 5vw, 80px)",
      }}>
        <div style={{ marginBottom: 64 }}>
          <p style={{
            fontSize: 12, fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", color: C.gray4,
            marginBottom: 16, fontFamily: "'Inter Tight', sans-serif",
          }}>
            The problem
          </p>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 400, lineHeight: 1.1,
            letterSpacing: -1, color: C.black,
            maxWidth: 600,
          }}>
            Three financing failures that cost brokers deals
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {problems.map((p) => (
            <div key={p.number} style={{
              padding: "40px 36px",
              background: C.white,
              borderRadius: 16,
              marginRight: 2,
            }}>
              <div style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: 48, fontWeight: 400,
                color: C.gray6, lineHeight: 1,
                marginBottom: 20,
              }}>
                {p.number}
              </div>
              <h3 style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: 22, fontWeight: 400,
                color: C.black, lineHeight: 1.2,
                marginBottom: 16,
              }}>
                {p.heading}
              </h3>
              <p style={{
                fontSize: 15, color: C.gray2, lineHeight: 1.75,
                fontFamily: "'Inter Tight', sans-serif",
              }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Solution section ── */}
      <section style={{
        background: C.black,
        padding: "100px clamp(20px, 5vw, 80px)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <p style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "#6b7280",
              marginBottom: 16, fontFamily: "'Inter Tight', sans-serif",
            }}>
              The solution
            </p>
            <h2 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 400, lineHeight: 1.1,
              letterSpacing: -1, color: C.white,
              maxWidth: 600,
            }}>
              Intelligence before outreach. Structure before the lender.
            </h2>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
          }}>
            {features.map((f) => (
              <div key={f.heading} style={{
                padding: "40px 36px",
                background: "#111111",
                borderRadius: 16,
                marginBottom: 2,
              }}>
                <div style={{
                  fontSize: 28, marginBottom: 20,
                  color: C.accent, lineHeight: 1,
                }}>
                  {f.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: 22, fontWeight: 400,
                  color: C.white, lineHeight: 1.2,
                  marginBottom: 12,
                }}>
                  {f.heading}
                </h3>
                <p style={{
                  fontSize: 15, color: "#9ca3af", lineHeight: 1.75,
                  fontFamily: "'Inter Tight', sans-serif",
                }}>
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "100px clamp(20px, 5vw, 80px)",
      }}>
        <div style={{ marginBottom: 64 }}>
          <p style={{
            fontSize: 12, fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", color: C.gray4,
            marginBottom: 16, fontFamily: "'Inter Tight', sans-serif",
          }}>
            How it works
          </p>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 400, lineHeight: 1.1,
            letterSpacing: -1, color: C.black,
            maxWidth: 500,
          }}>
            Four steps. Under three minutes.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
          {steps.map((s, i) => (
            <div key={s.step} style={{ position: "relative" }}>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div style={{
                  position: "absolute", top: 20, left: "calc(100% - 20px)",
                  width: "40px", height: 1,
                  background: C.gray5, zIndex: 0,
                }} />
              )}
              <div style={{
                width: 40, height: 40, borderRadius: "50%",
                background: C.accent,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, fontWeight: 700, color: C.accentDark,
                marginBottom: 20, position: "relative", zIndex: 1,
                fontFamily: "'Inter Tight', sans-serif",
              }}>
                {s.step}
              </div>
              <h3 style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontSize: 16, fontWeight: 600,
                color: C.black, lineHeight: 1.3,
                marginBottom: 8,
              }}>
                {s.label}
              </h3>
              <p style={{
                fontSize: 14, color: C.gray3, lineHeight: 1.6,
                fontFamily: "'Inter Tight', sans-serif",
              }}>
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Report preview strip ── */}
      <section style={{
        background: C.accentLight,
        borderTop: `1px solid ${C.accent}60`,
        borderBottom: `1px solid ${C.accent}60`,
        padding: "80px clamp(20px, 5vw, 80px)",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "60px 80px", alignItems: "center",
        }}>
          <div>
            <p style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: C.accentDark,
              opacity: 0.6, marginBottom: 16,
              fontFamily: "'Inter Tight', sans-serif",
            }}>
              The output
            </p>
            <h2 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400, lineHeight: 1.1,
              letterSpacing: -0.8, color: C.black,
              marginBottom: 20,
            }}>
              Reports your buyers can take to their bank
            </h2>
            <p style={{
              fontSize: 16, color: C.gray2, lineHeight: 1.75,
              marginBottom: 32, maxWidth: 440,
              fontFamily: "'Inter Tight', sans-serif",
            }}>
              Every assessment generates a structured PDF. Executive summary, readiness score, indicative LTV, risk considerations, and recommended next steps. Institutional-grade. Shareable in one click.
            </p>
            <a href="/wizard" style={{
              display: "inline-block", padding: "14px 28px",
              background: C.black, color: C.white,
              fontSize: 14, fontWeight: 700, borderRadius: 10,
              textDecoration: "none", fontFamily: "'Inter Tight', sans-serif",
            }}>
              Generate a sample report →
            </a>
          </div>
          <div style={{
            borderRadius: 16, overflow: "hidden",
            background: C.white,
            aspectRatio: "4/3",
          }}>
            <Image
              src="/insurance/waaza-insurance-4.png"
              alt="Waaza broker report showing financing readiness score and indicative LTV for a yacht buyer"
              width={1080}
              height={720}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── Broker workflow section ── */}
      <section style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "100px clamp(20px, 5vw, 80px)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "60px 80px",
        alignItems: "center",
      }}>
        <div style={{
          borderRadius: 16, overflow: "hidden",
          background: C.accentLight,
          aspectRatio: "4/3",
        }}>
          <Image
            src="/insurance/waaza-insurance-7.png"
            alt="Yacht brokers using Waaza as part of their financing qualification workflow"
            width={1080}
            height={720}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div>
          <p style={{
            fontSize: 12, fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", color: C.gray4,
            marginBottom: 16, fontFamily: "'Inter Tight', sans-serif",
          }}>
            Built for broker workflow
          </p>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(28px, 3.5vw, 44px)",
            fontWeight: 400, lineHeight: 1.1,
            letterSpacing: -0.8, color: C.black,
            marginBottom: 20,
          }}>
            Embedded in the conversation, not bolted on after
          </h2>
          <p style={{
            fontSize: 16, color: C.gray2, lineHeight: 1.75,
            marginBottom: 24, fontFamily: "'Inter Tight', sans-serif",
          }}>
            Waaza is designed to fit into the broker workflow at the moment it matters most — when a buyer expresses serious interest, before the viewing schedule fills up and before a purchase agreement is drafted.
          </p>
          <p style={{
            fontSize: 16, color: C.gray2, lineHeight: 1.75,
            marginBottom: 32, fontFamily: "'Inter Tight', sans-serif",
          }}>
            Run the assessment during the first serious conversation. Know where the financing stands. Proceed — or manage expectations — with the data to back it up.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              "No specialist knowledge required to run an assessment",
              "Works for any vessel type, size, or ownership structure",
              "Embeddable in your existing workflow or website",
            ].map((point) => (
              <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div style={{
                  width: 20, height: 20, borderRadius: "50%",
                  background: C.accent, flexShrink: 0, marginTop: 2,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 700, color: C.accentDark,
                }}>
                  ✓
                </div>
                <span style={{
                  fontSize: 15, color: C.gray1, lineHeight: 1.6,
                  fontFamily: "'Inter Tight', sans-serif",
                }}>
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: C.black,
        padding: "100px clamp(20px, 5vw, 80px)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: 400, lineHeight: 1.05,
            letterSpacing: -1.5, color: C.white,
            marginBottom: 20,
          }}>
            Run your first assessment in three minutes
          </h2>
          <p style={{
            fontSize: 17, color: "#9ca3af", lineHeight: 1.7,
            marginBottom: 40, fontFamily: "'Inter Tight', sans-serif",
          }}>
            No account required. Enter a buyer profile and vessel details. Get a financing readiness score, indicative LTV, and a shareable report.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a href="/wizard" style={{
              display: "inline-block", padding: "18px 44px",
              background: C.accent, color: C.accentDark,
              fontSize: 16, fontWeight: 700, borderRadius: 10,
              textDecoration: "none", fontFamily: "'Inter Tight', sans-serif",
              letterSpacing: "-0.01em",
            }}>
              Start a free assessment →
            </a>
            <a href="/documentation" style={{
              display: "inline-block", padding: "18px 28px",
              color: "#9ca3af", fontSize: 15, fontWeight: 500,
              textDecoration: "none", fontFamily: "'Inter Tight', sans-serif",
            }}>
              Read the documentation
            </a>
          </div>
        </div>
      </section>

      {/* ── Responsive ── */}
      <style>{`
        @media (max-width: 768px) {
          section[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          section[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          section[style*="grid-template-columns: repeat(4, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          section[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}