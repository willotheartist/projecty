import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boat Finance Calculator | Waaza",
  description:
    "Explore boat finance calculator scenarios, indicative repayments and financing context with Waaza, then move into a more structured readiness journey.",
  alternates: {
    canonical: "/boat-finance-calculator",
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
          Boat finance calculator
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
          Some users search for a boat finance calculator before they search for yacht financing
          specifically. That makes this page useful for broader acquisition intent. The challenge is
          that “boat finance” can cover a wide range of deal sizes and asset contexts. Waaza uses
          that broader intent as a starting point, but the product becomes more powerful when the
          conversation moves beyond generic repayment curiosity and into the real factors shaping
          financing readiness.
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
          <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 32 }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
              Why this page exists separately
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2, marginBottom: 14 }}>
              Search behaviour is not always precise. Some users search for yacht finance calculator.
              Others search for boat finance calculator even when they are looking at larger,
              more premium assets. This page helps Waaza capture that broader intent without forcing
              every user to arrive through the same entry phrase.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2 }}>
              It also gives the site another meaningful page in the financing cluster, which
              strengthens internal linking and topical coverage across the broader marine finance
              space while still supporting the more targeted yacht pages.
            </p>
          </section>

          <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 32 }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
              What a boat finance calculator can and cannot tell you
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2, marginBottom: 14 }}>
              A calculator can help estimate repayments and show how basic variables affect the
              picture. That is useful. But it cannot tell you everything. It cannot fully reflect
              how lender appetite may respond to asset type, borrower profile, intended use or
              structural complexity.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2 }}>
              That is exactly why Waaza goes further than a static repayment tool. It uses the
              calculator as an entry point into a more serious financing conversation rather than
              treating the number as the whole story.
            </p>
          </section>

          <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 32 }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
              How this page fits into the broader Waaza journey
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2, marginBottom: 14 }}>
              This page is designed to capture broad search interest and then move users deeper into
              the more specific financing content that Waaza offers. Once the user understands the
              value of a calculator, the natural next step is to introduce yacht-specific financing
              thinking, readiness and scenario-based context.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2 }}>
              That makes this page strategically useful. It is not only here to rank for a keyword.
              It is here to route broader search intent into the stronger and more differentiated
              parts of the product.
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
              <Link href="/yacht-financing" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                Yacht financing
              </Link>
              <Link href="/superyacht-financing" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                Superyacht financing
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
