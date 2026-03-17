import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boat Finance Calculator | Waaza",
  description:
    "Use Waaza’s boat finance calculator page to explore repayments, leverage scenarios and the difference between broad marine finance intent and yacht-specific financing context.",
  alternates: {
    canonical: "/boat-finance-calculator",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a boat finance calculator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A boat finance calculator is an early-stage tool used to estimate indicative repayments or borrowing range based on assumptions like purchase price, deposit, term and rate.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between boat finance and yacht finance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Boat finance is a broader search category, while yacht finance often involves a more specific conversation around asset profile, buyer strength, leverage and structure.",
      },
    },
    {
      "@type": "Question",
      name: "Why does this page exist separately from yacht finance calculator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This page captures broader marine-finance search intent and helps route users into more specific yacht financing content when the conversation becomes more focused.",
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
            Broad-intent calculator page
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
            Boat finance calculator: a broader starting point for buyers exploring marine financing
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
            A boat finance calculator captures broader search intent than a yacht finance calculator.
            That makes this page useful because many buyers begin with a general marine-finance query
            before narrowing into a more specific yacht financing conversation. The challenge is that
            “boat finance” covers a wide range of assets, deal sizes and financing expectations. A
            broad-intent calculator page should recognise that reality. It should help people get
            initial repayment context while also guiding them toward a more precise financing
            conversation when the asset, structure and ambition level become clearer.
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
              href="/yacht-finance-calculator"
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
              Go to yacht finance calculator
            </Link>
          </div>

          <div style={{ display: "grid", gap: 18 }}>
            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                Why this page is different from a yacht finance calculator page
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginBottom: 14 }}>
                A boat finance calculator page should not simply be a weaker clone of a yacht finance
                page. Its job is different. This page exists to capture a wider top-of-funnel search
                pattern. Some users will be comparing smaller marine assets. Others will begin with a
                broad “boat finance” query even though they are interested in premium yacht purchases.
                That means the page needs to be broad enough to meet the search intent while still
                giving the user a path into more specific yacht-related content.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                In SEO terms, that makes this page strategically useful. In product terms, it means
                the page should act as a bridge rather than pretending all marine-finance contexts are
                identical.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                What a broader marine-finance searcher usually wants first
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginBottom: 14 }}>
                At this stage, most users want directional clarity more than a final answer. They
                want to understand whether the purchase looks broadly manageable, how deposit and term
                affect the monthly picture, and how ambitious the financing request feels.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                That means a broad-intent page should focus on clarity and progression. It should help
                the user understand the basics while also signalling that more specific financing
                questions may matter once the asset and transaction become more defined.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                What a boat finance calculator can show — and what it cannot
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginBottom: 14 }}>
                A calculator can show how price, deposit, term and rate affect repayments. That is a
                helpful starting point. But it cannot on its own capture how lender appetite may
                change once the asset becomes more specific, the structure becomes more nuanced or the
                leverage request becomes more ambitious.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                That is why broad-intent pages should help route users deeper rather than pretending
                the first estimate is enough. In Waaza, the next layer is the more focused{" "}
                <Link href="/yacht-finance-calculator" style={{ fontWeight: 700, color: C.black }}>
                  yacht finance calculator
                </Link>{" "}
                and the wider{" "}
                <Link href="/yacht-financing" style={{ fontWeight: 700, color: C.black }}>
                  yacht financing
                </Link>{" "}
                guide.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                When a buyer should move from “boat finance” into “yacht financing”
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginBottom: 14 }}>
                The moment the conversation becomes more specific — around a larger purchase, a more
                premium asset, a more ambitious leverage profile or a more nuanced structure — the
                financing discussion also becomes more specific. That is the point where a broad boat
                finance lens starts to become too vague.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                That is why this page is designed to hand off into stronger, more differentiated
                pages. It catches broader intent, then helps the user move into the financing content
                that better matches the seriousness of the case.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                Continue with more specific pages
              </h2>
              <div style={{ display: "grid", gap: 10 }}>
                <Link href="/yacht-finance-calculator" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                  Yacht finance calculator
                </Link>
                <Link href="/yacht-financing" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                  Yacht financing
                </Link>
                <Link href="/can-you-finance-a-yacht" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                  Can you finance a yacht?
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
