const SITE_URL = "https://www.waaza.co";
const OG_IMAGE = "https://www.waaza.co/hero.png";


import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yacht Finance Calculator | Waaza",
  description:
    "Use Waaza’s yacht finance calculator to explore indicative repayments, deposit scenarios, term changes and the broader financing context around a yacht purchase.",
  alternates: {
    canonical: "/yacht-finance-calculator",
  },
  keywords: ["yacht finance calculator", "yacht financing calculator", "boat finance calculator", "marine finance calculator", "yacht repayment calculator"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    title: "Yacht Finance Calculator | Waaza",
    description: "Use Waaza's yacht finance calculator to explore indicative repayments, deposit scenarios, term changes and the broader financing context around a yacht purchase.",
    url: `${SITE_URL}/yacht-finance-calculator`,
    siteName: "Waaza",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Waaza yacht finance calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yacht Finance Calculator | Waaza",
    description: "Explore indicative repayments, deposit scenarios and term changes around a yacht purchase.",
    images: [OG_IMAGE],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a yacht finance calculator do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A yacht finance calculator helps estimate indicative monthly repayments or borrowing range based on assumptions such as purchase price, deposit, term and rate.",
      },
    },
    {
      "@type": "Question",
      name: "Is a yacht finance calculator enough to understand financing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A calculator is useful as a starting point, but not enough on its own. The broader financing picture also depends on borrower strength, vessel profile, intended use and structure.",
      },
    },
    {
      "@type": "Question",
      name: "Why does deposit size matter so much?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deposit size changes the leverage profile of the deal. That affects repayment context and can also influence how straightforward or ambitious the case appears.",
      },
    },
  ],
};

export default function Page() {
  const C = {
    bg: "#f4f3ef",
    white: "#ffffff",
    black: "#0a0a0a",
    gray2: "#4b5563",
    gray3: "#6b7280",
    gray6: "#eae9e4",
    accent: "#FFF86C",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main style={{ background: C.bg, color: C.black, padding: "88px 24px 120px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 1.8,
              textTransform: "uppercase",
              color: C.gray3,
              marginBottom: 18,
            }}
          >
            Commercial SEO page
          </p>

          <h1
            style={{
              fontFamily: "var(--font-serif), serif",
              fontSize: "clamp(44px,6vw,82px)",
              lineHeight: 1.03,
              fontWeight: 400,
              letterSpacing: -1.9,
              marginBottom: 22,
              maxWidth: 920,
            }}
          >
            Yacht finance calculator: estimate repayments, explore scenarios and understand what really changes the picture
          </h1>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.84,
              color: C.gray2,
              maxWidth: 980,
              marginBottom: 30,
            }}
          >
            A yacht finance calculator is one of the most useful early tools in the financing
            journey, but only if it is used properly. At its simplest, a calculator helps estimate
            monthly repayments or borrowing range based on purchase price, deposit, term and
            indicative rate. That is helpful, especially when someone is trying to understand whether
            a deal feels broadly realistic. The problem is that many calculators stop there. They do
            not help the user understand why the number changes, what may complicate the case, or
            when a more structured readiness conversation becomes necessary. Waaza is designed to do
            more than give a flat estimate. It uses the calculator as the gateway into a smarter
            financing workflow.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 38 }}>
            <Link
              href="/simulator"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "15px 24px",
                borderRadius: 12,
                background: C.accent,
                color: C.black,
                fontWeight: 700,
              }}
            >
              Open simulator
            </Link>

            <Link
              href="/wizard"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "15px 24px",
                borderRadius: 12,
                background: C.white,
                border: `1px solid ${C.gray6}`,
                color: C.black,
                fontWeight: 700,
              }}
            >
              Run readiness intake
            </Link>
          </div>

          <div style={{ display: "grid", gap: 18 }}>
            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                What a yacht finance calculator should help you do
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginBottom: 14 }}>
                A useful calculator should do more than display a payment figure. It should help you
                think through the relationship between price, deposit, term length and financing
                context. In other words, it should improve decision-making rather than just creating
                a momentary sense of certainty.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                That matters because a repayment number can look comfortable while the broader case is
                still structurally weak. Likewise, a more demanding monthly number may still sit
                inside a stronger overall financing picture if the leverage is sensible and the case
                is well framed. The number is useful, but it is never the whole story.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                The four variables most users focus on first
              </h2>
              <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
                {[
                  "Purchase price, because it sets the overall scale of the transaction",
                  "Deposit size, because it changes the leverage profile dramatically",
                  "Term length, because it affects monthly affordability",
                  "Indicative rate, because it influences both repayments and overall cost",
                ].map((item) => (
                  <li key={item} style={{ fontSize: 16, lineHeight: 1.95, color: C.gray2 }}>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                These variables matter because they are the easiest to model quickly. But a serious
                financing conversation does not end there. A calculator becomes much more useful when
                it is understood as part of a wider context.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                What changes the result beyond the obvious numbers
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginBottom: 14 }}>
                In yacht financing, the repayment estimate is shaped by more than just maths. Vessel
                age can influence how straightforward the case appears. Intended use can introduce
                more complexity. Ownership structure can change the overall framing of the deal. The
                result is that two cases with similar headline numbers can still feel very different
                once the broader context is considered.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                This is why Waaza connects calculator behaviour with readiness and scenario-based
                thinking. It helps users understand not only what the repayment estimate is, but what
                may be influencing it behind the scenes.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                Why deposit size changes the conversation so much
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginBottom: 14 }}>
                Deposit size is one of the most powerful levers in the early financing picture. A
                larger deposit does not only reduce monthly repayments. It also changes how ambitious
                the leverage request appears. That can affect how comfortable the overall case looks,
                especially once asset and structure considerations are taken into account.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                This is why a calculator is most useful when it lets the user explore scenarios rather
                than locking them into one flat assumption. In practical terms, deposit size often
                changes the emotional tone of the financing conversation as much as the numerical one.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                When a calculator stops being enough
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginBottom: 14 }}>
                A calculator is strongest at the beginning of the journey, when a buyer or broker
                needs quick directional clarity. But once the conversation becomes more serious, a
                deeper workflow becomes more valuable. That is where readiness scoring, scenario
                modelling and report-led communication begin to matter more than a single repayment
                number.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                In Waaza, the calculator is not meant to be the end state. It is meant to make the
                next step smarter.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                Continue your research
              </h2>
              <div style={{ display: "grid", gap: 10 }}>
                <Link href="/yacht-financing" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                  Yacht financing
                </Link>
                <Link href="/boat-finance-calculator" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                  Boat finance calculator
                </Link>
                <Link href="/can-you-finance-a-yacht" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                  Can you finance a yacht?
                </Link>
                <Link href="/how-long-can-you-finance-a-yacht" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                  How long can you finance a yacht?
                </Link>
                <Link href="/superyacht-financing" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                  Superyacht financing
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
