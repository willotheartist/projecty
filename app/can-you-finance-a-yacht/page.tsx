import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Can You Finance a Yacht? | Waaza",
  description:
    "Find out what influences whether you can finance a yacht, including liquidity, deposit, vessel profile, usage and overall readiness.",
  alternates: {
    canonical: "/can-you-finance-a-yacht",
  },
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
          Buyer question
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
          Can you finance a yacht?
        </h1>

        <p
          style={{
            fontSize: 18,
            lineHeight: 1.82,
            color: C.gray2,
            maxWidth: 960,
            marginBottom: 30,
          }}
        >
          Yes, many yacht purchases can be financed. But that is not really the most useful version
          of the question. A better question is whether a particular buyer, vessel and financing
          structure are likely to create a strong or weak case. That is where the real complexity
          sits. Financing is not usually determined by one variable alone. It is the combination of
          profile strength, leverage, asset quality, intended use and structure that shapes what is
          likely to be realistic.
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 38 }}>
          <Link
            href="/wizard"
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
            Check readiness
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
            Use yacht finance calculator
          </Link>
        </div>

        <div style={{ display: "grid", gap: 18 }}>
          <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 32 }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
              The short answer and the real answer
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2, marginBottom: 14 }}>
              The short answer is yes: yacht financing exists and many buyers use it. The real
              answer is more nuanced. Whether a case looks financeable depends on the combination of
              borrower profile, deposit level, asset profile and structural complexity. A strong
              buyer with a sensible deposit and a relatively lender-friendly asset may look very
              different from a buyer pursuing a more ambitious structure with more challenging
              variables in play.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2 }}>
              That is why it helps to ask not only whether financing is available in principle, but
              how strong the specific case looks before it moves into a formal process.
            </p>
          </section>

          <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 32 }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
              What usually influences whether a yacht can be financed
            </h2>
            <ul style={{ paddingLeft: 20 }}>
              {[
                "How much liquidity is available relative to the intended purchase",
                "How large or conservative the deposit strategy is",
                "How the asset looks from a lender appetite perspective",
                "Whether the vessel is newer or older",
                "Whether intended use introduces extra complexity",
                "Whether the ownership path is simple or more structurally involved",
                "How clear and supportable the broader financing story is",
              ].map((item) => (
                <li key={item} style={{ fontSize: 16, lineHeight: 1.95, color: C.gray2 }}>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 32 }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
              Why buyers often ask this question too broadly
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2, marginBottom: 14 }}>
              It is understandable to ask “can you finance a yacht?” as a simple yes-or-no question.
              Most people want a quick sense of possibility before they invest too much effort. The
              problem is that the useful answer is rarely a pure binary. A case may be possible and
              still be structurally demanding. A case may look promising but require a different
              deposit or asset choice to become stronger.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2 }}>
              That is why Waaza focuses on readiness and structure rather than only on generic
              permission. It helps users understand the quality of the case, not just the existence
              of financing in the market.
            </p>
          </section>

          <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 32 }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
              Related pages
            </h2>
            <div style={{ display: "grid", gap: 10 }}>
              <Link href="/how-long-can-you-finance-a-yacht" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                How long can you finance a yacht?
              </Link>
              <Link href="/yacht-finance-calculator" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                Yacht finance calculator
              </Link>
              <Link href="/yacht-financing" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                Yacht financing
              </Link>
              <Link href="/faq" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                FAQ
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
