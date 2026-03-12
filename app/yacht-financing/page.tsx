import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yacht Financing | Waaza",
  description:
    "Learn how yacht financing works, what shapes lender appetite, and why readiness, structure and scenario context matter before formal outreach.",
  alternates: {
    canonical: "/yacht-financing",
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
          Guide
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
          Yacht financing
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
          Yacht financing is often discussed as if it were only about rates, terms and deposits.
          Those things matter, but they are not the whole story. In practice, yacht financing is a
          combination of borrower strength, vessel profile, intended use, leverage appetite,
          structure and timing. That is why the strongest financing conversations do not begin with
          overconfidence. They begin with clearer framing. Waaza is built around that idea: help the
          user understand the shape of the case before it reaches a formal lending process.
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 38 }}>
          <Link
            href="/yacht-finance-calculator"
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
            Yacht finance calculator
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
              What usually shapes a yacht financing conversation
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2, marginBottom: 14 }}>
              A serious financing discussion is shaped by more than affordability. Liquidity matters
              because it signals resilience and capacity. Deposit size matters because it changes how
              ambitious the leverage request is. Vessel age matters because lender appetite toward
              older assets may be more selective. Intended usage matters because a purely private use
              profile does not raise the same issues as more complex patterns of use.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2 }}>
              Then there is structure. Ownership path, jurisdiction and overall clarity of the case
              all matter. That is why yacht financing should be treated as a structured commercial
              conversation rather than a simple consumer finance exercise.
            </p>
          </section>

          <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 32 }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
              Why readiness is so important
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2, marginBottom: 14 }}>
              Many financing discussions become inefficient because the parties involved are not yet
              aligned on whether the case looks strong, conditional or meaningfully complex.
              Readiness matters because it creates that alignment earlier. It helps replace vague
              optimism with a more useful early-stage picture.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2 }}>
              For buyers, that improves realism. For brokers, it improves qualification. For
              advisors, it improves the starting point. That is exactly why Waaza places so much
              emphasis on readiness scoring and scenario thinking rather than only repayment maths.
            </p>
          </section>

          <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 32 }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
              Where calculators fit in
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2, marginBottom: 14 }}>
              Calculators are useful because they reduce friction and match strong search intent.
              They help users think through repayments and borrowing range quickly. But calculators
              become much more powerful when they lead into a deeper product journey rather than
              ending there.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2 }}>
              That is where Waaza becomes stronger than a generic widget. It uses calculator intent
              to open the door into readiness, structure and a more serious financing conversation.
            </p>
          </section>

          <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 32 }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
              What better yacht financing conversations look like
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2, marginBottom: 14 }}>
              A better financing conversation is not one that promises certainty too early. It is
              one that understands the shape of the case more clearly. It knows where the strengths
              are, where the likely tensions are, and what would make the next step more productive.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2 }}>
              That is the role Waaza is designed to play. It improves the quality of early-stage
              thinking so the rest of the process does not start from vagueness.
            </p>
          </section>

          <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 32 }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
              Related pages
            </h2>
            <div style={{ display: "grid", gap: 10 }}>
              <Link href="/yacht-finance-calculator" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                Yacht finance calculator
              </Link>
              <Link href="/superyacht-financing" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                Superyacht financing
              </Link>
              <Link href="/can-you-finance-a-yacht" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                Can you finance a yacht?
              </Link>
              <Link href="/how-long-can-you-finance-a-yacht" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                How long can you finance a yacht?
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
