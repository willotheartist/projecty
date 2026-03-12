import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yacht Finance Calculator | Waaza",
  description:
    "Use Waaza’s yacht finance calculator page to explore indicative repayments, borrowing context, readiness factors and the variables that shape yacht financing conversations.",
  alternates: {
    canonical: "/yacht-finance-calculator",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a yacht finance calculator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A yacht finance calculator helps estimate indicative monthly repayments or borrowing range based on assumptions like price, deposit, term length and rate. It is most useful as an early directional tool rather than a final lender decision.",
      },
    },
    {
      "@type": "Question",
      name: "Is a yacht finance calculator accurate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A yacht finance calculator can be directionally useful, but actual lender outcomes depend on the borrower profile, vessel profile, intended usage, structure, documentation and underwriting process.",
      },
    },
    {
      "@type": "Question",
      name: "Why use Waaza instead of a generic calculator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waaza is designed to connect repayment estimation with financing readiness, complexity and next-step context rather than stopping at a single repayment number.",
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
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
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
            Calculator
          </p>

          <h1
            style={{
              fontFamily: "var(--font-serif), serif",
              fontSize: "clamp(42px,6vw,80px)",
              lineHeight: 1.04,
              fontWeight: 400,
              letterSpacing: -1.8,
              marginBottom: 22,
              maxWidth: 900,
            }}
          >
            Yacht finance calculator
          </h1>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.82,
              color: C.gray2,
              maxWidth: 940,
              marginBottom: 30,
            }}
          >
            A yacht finance calculator is usually one of the first places a serious buyer or broker
            starts when trying to make sense of a deal. That makes sense. Before anyone wants a long
            explanation, they usually want to understand whether the financing picture looks broadly
            realistic. The problem is that most calculators are too shallow. They show a repayment
            estimate, but they do not help the user understand what is actually shaping that number,
            what may complicate the case, or why one scenario may be more realistic than another.
            Waaza is more useful because it treats the calculator as the beginning of the financing
            conversation rather than the end of it.
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
            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 32 }}>
              <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                What a yacht finance calculator should actually help you understand
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2, marginBottom: 14 }}>
                A useful yacht finance calculator should not just spit out a repayment figure. It
                should help the user understand how the financing picture behaves when key
                assumptions change. Deposit size matters. Loan term matters. The indicative rate
                matters. Vessel age matters. Usage matters. These are not minor details. They are
                the core forces shaping whether a financing conversation is likely to feel
                straightforward or structurally more difficult.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2 }}>
                That is why Waaza treats the calculator as part of a broader financing workflow.
                Repayment estimation is useful, but only when it is connected to readiness,
                complexity and better next-step thinking.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 32 }}>
              <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                What changes the output of a yacht finance calculator
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2, marginBottom: 10 }}>
                Even before formal underwriting begins, a financing scenario is shaped by several
                major variables:
              </p>
              <ul style={{ paddingLeft: 20 }}>
                {[
                  "Purchase price and how ambitious the overall transaction is",
                  "Deposit size and leverage appetite",
                  "Indicative rate assumptions",
                  "Loan term and how repayment is spread over time",
                  "Vessel age, condition and general lender appetite toward the asset",
                  "Whether the vessel is intended for private use or more complex usage patterns",
                  "Ownership path, structure and jurisdiction-sensitive considerations",
                ].map((item) => (
                  <li key={item} style={{ fontSize: 16, lineHeight: 1.95, color: C.gray2 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 32 }}>
              <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                Why Waaza is more useful than a generic finance widget
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2, marginBottom: 14 }}>
                A generic finance widget is usually isolated. It gives a number, maybe a simple term
                selector, and little else. That is enough for surface-level curiosity but not enough
                for a serious financing discussion. Waaza is more useful because it connects the
                number to a wider conversation about readiness and realism.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2 }}>
                That matters for buyers who want a more grounded understanding of what they are
                getting into, for brokers who want fewer vague conversations, and for advisors who
                benefit when a case arrives with more structured thinking already in place.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 32 }}>
              <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                When to use the calculator and when to go deeper
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2, marginBottom: 14 }}>
                The calculator is a strong first step when you want directional clarity. It is useful
                when you want to understand how changes in deposit, term or vessel context affect the
                picture. But once the conversation becomes more serious, it helps to move into a more
                structured readiness workflow.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2 }}>
                That is where Waaza becomes more differentiated. It does not force you to stay inside
                a flat repayment tool. It gives you a path into readiness scoring, scenario thinking
                and clearer next-step framing.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 32 }}>
              <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                Related pages
              </h2>
              <div style={{ display: "grid", gap: 10 }}>
                <Link href="/boat-finance-calculator" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                  Boat finance calculator
                </Link>
                <Link href="/yacht-financing" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                  Yacht financing
                </Link>
                <Link href="/superyacht-financing" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                  Superyacht financing
                </Link>
                <Link href="/can-you-finance-a-yacht" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                  Can you finance a yacht?
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
