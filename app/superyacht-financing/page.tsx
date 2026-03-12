import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Superyacht Financing | Waaza",
  description:
    "Learn how superyacht financing differs from simpler marine finance conversations and why readiness, structure and clarity matter even more.",
  alternates: {
    canonical: "/superyacht-financing",
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
          Superyacht financing
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
          Superyacht financing usually involves a more demanding conversation than simpler marine
          finance scenarios. Values are higher, structures are often more nuanced, and the cost of
          ambiguity rises quickly. That is why early-stage clarity matters even more here. When a
          high-value transaction begins with vague assumptions and weak framing, everyone risks
          wasting time. Waaza is useful in this context because it helps organise the conversation
          before outside financing discussions become unnecessarily messy.
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 38 }}>
          <Link
            href="/yacht-financing"
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
            Yacht financing guide
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
              Why superyacht financing is different
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2, marginBottom: 14 }}>
              At higher values, financing discussions tend to become more structurally sensitive.
              It is not simply that the numbers are larger. The expectations are different, the
              consequences of poor early qualification are greater, and the shape of the
              conversation often involves more nuance around asset, structure and overall case
              coherence.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2 }}>
              This is exactly why a product like Waaza becomes more valuable rather than less.
              The more complex the conversation, the more useful it is to create better structure
              before it moves outward into more formal financing channels.
            </p>
          </section>

          <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 32 }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
              Why readiness matters even more at the top end
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2, marginBottom: 14 }}>
              In higher-value transactions, weak early assumptions become more expensive. If the
              buyer conversation is not properly framed, the financing discussion can drift into
              wishful thinking or premature external outreach. Readiness scoring and scenario-based
              thinking help reduce that risk by giving the conversation more shape before it starts
              consuming serious time.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2 }}>
              That does not mean every superyacht case should be reduced to a score. It means the
              early stage benefits from more disciplined framing. Waaza helps create that discipline.
            </p>
          </section>

          <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 32 }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
              What buyers, brokers and advisors need in this part of the market
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2, marginBottom: 14 }}>
              Buyers need realism and clarity. Brokers need a more disciplined qualification
              framework. Advisors need a cleaner base from which to apply deeper judgement. These
              needs are aligned, even though the people involved may have different perspectives.
              That is why a shared platform layer can be valuable here.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: C.gray2 }}>
              Waaza is strongest when it helps align those perspectives earlier, before the financing
              story becomes fragmented or overconfident.
            </p>
          </section>

          <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 32 }}>
            <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
              Related pages
            </h2>
            <div style={{ display: "grid", gap: 10 }}>
              <Link href="/yacht-financing" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                Yacht financing
              </Link>
              <Link href="/yacht-finance-calculator" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                Yacht finance calculator
              </Link>
              <Link href="/can-you-finance-a-yacht" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                Can you finance a yacht?
              </Link>
              <Link href="/documentation" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                Documentation
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
