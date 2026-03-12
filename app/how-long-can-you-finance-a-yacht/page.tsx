import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Long Can You Finance a Yacht? | Waaza",
  description:
    "Understand what affects how long you can finance a yacht, including term length, vessel age, leverage, structure and overall financing readiness.",
  alternates: {
    canonical: "/how-long-can-you-finance-a-yacht",
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
          How long can you finance a yacht?
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
          There is no single universal term length for yacht financing. The realistic answer depends
          on the case itself. Vessel age matters. Borrower strength matters. Deposit strategy
          matters. Intended use and structural complexity matter. In other words, the question is not
          only about what is theoretically possible. It is about what is commercially plausible for a
          given case. That is why it helps to frame the discussion through readiness and scenario
          context rather than searching for one fixed number that applies to every situation.
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
            Explore scenarios
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
              Why term length is never the whole story
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2, marginBottom: 14 }}>
              It is natural to focus on term because it has a visible effect on repayments. A longer
              term can make monthly numbers feel more comfortable. But term length does not exist in
              isolation. It sits inside a broader financing picture shaped by leverage, asset
              profile, borrower strength and overall case structure.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2 }}>
              That means the question of how long a yacht can be financed is usually answered through
              the specific characteristics of the case rather than through a universal rule.
            </p>
          </section>

          <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 32 }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
              What usually affects the likely financing term
            </h2>
            <ul style={{ paddingLeft: 20 }}>
              {[
                "The age and condition of the vessel",
                "How aggressive or conservative the leverage request is",
                "How strong the borrower profile appears",
                "How large the deposit is relative to the transaction",
                "Whether the case is structurally simple or more complex",
                "Whether intended use adds additional risk or constraint",
              ].map((item) => (
                <li key={item} style={{ fontSize: 16, lineHeight: 1.95, color: C.gray2 }}>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 32 }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
              Why older vessels change the conversation
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2, marginBottom: 14 }}>
              Vessel age often has an outsized influence on how comfortable a financing structure may
              look. This is one reason the same borrower profile can produce a different financing
              discussion depending on the asset in question. It is also why a product like Waaza is
              more useful when it includes asset context inside the simulation and readiness journey.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2 }}>
              Buyers often think first in terms of the vessel they want. Financing logic forces the
              conversation to think also in terms of how the asset is likely to be viewed. Those are
              not always the same thing.
            </p>
          </section>

          <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 32 }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
              Why Waaza is useful for this question
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2, marginBottom: 14 }}>
              This is exactly the kind of question where a simple generic answer is not very helpful.
              Waaza helps users think through term length as part of a larger financing picture. That
              makes the conversation more grounded and less misleading.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2 }}>
              Instead of treating term as a fixed fact, the platform helps frame it as one of several
              variables that work together to shape how strong or complex the case looks.
            </p>
          </section>

          <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 32 }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
              Related pages
            </h2>
            <div style={{ display: "grid", gap: 10 }}>
              <Link href="/can-you-finance-a-yacht" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                Can you finance a yacht?
              </Link>
              <Link href="/yacht-finance-calculator" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                Yacht finance calculator
              </Link>
              <Link href="/yacht-financing" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                Yacht financing
              </Link>
              <Link href="/superyacht-financing" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                Superyacht financing
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
