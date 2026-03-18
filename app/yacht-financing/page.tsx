const SITE_URL = "https://www.waaza.co";
const OG_IMAGE = "https://www.waaza.co/hero.png";


import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yacht Financing | Waaza",
  description:
    "A detailed guide to yacht financing, including how it works, what affects lender appetite, how calculators fit in, and why readiness matters before formal outreach.",
  alternates: {
    canonical: "/yacht-financing",
  },
  keywords: ["yacht financing", "how yacht financing works", "yacht finance", "marine financing", "yacht loan", "yacht finance calculator"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    title: "Yacht Financing | Waaza",
    description: "A detailed guide to yacht financing, including how it works, what affects lender appetite, how calculators fit in, and why readiness matters before formal outreach.",
    url: `${SITE_URL}/yacht-financing`,
    siteName: "Waaza",
    type: "article",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Waaza yacht financing guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yacht Financing | Waaza",
    description: "How yacht financing works, what affects lender appetite and why readiness matters.",
    images: [OG_IMAGE],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does yacht financing work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yacht financing usually involves reviewing the buyer profile, deposit size, vessel profile, intended use and ownership structure before a lender considers terms. The process is shaped by both borrower strength and asset-related considerations.",
      },
    },
    {
      "@type": "Question",
      name: "What affects yacht financing approval?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Approval appetite is typically shaped by liquidity, net worth context, deposit size, asset age and condition, intended use, leverage appetite and the clarity of the overall financing story.",
      },
    },
    {
      "@type": "Question",
      name: "Why use a yacht finance calculator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A yacht finance calculator helps estimate indicative repayments and borrowing context, but it becomes more useful when paired with readiness and scenario-based thinking rather than treated as a final answer.",
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
            Pillar Guide
          </p>

          <h1
            style={{
              fontFamily: "var(--font-serif), serif",
              fontSize: "clamp(44px,6vw,82px)",
              lineHeight: 1.03,
              fontWeight: 400,
              letterSpacing: -1.9,
              marginBottom: 22,
              maxWidth: 940,
            }}
          >
            Yacht financing: how it works, what affects the outcome, and how to approach it more intelligently
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
            Yacht financing is often talked about as if it were only a question of rates and monthly
            repayments. That is part of the picture, but it is not the whole picture. In practice,
            yacht financing sits at the intersection of buyer strength, leverage, vessel profile,
            intended usage, structure and timing. That is why the strongest financing conversations
            do not begin with overconfidence. They begin with better framing. If a buyer, broker or
            advisor understands the likely strengths and tensions in a case before formal lender
            outreach begins, the entire process becomes more productive.
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
              Use yacht finance calculator
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
                What yacht financing really involves
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginBottom: 14 }}>
                A useful way to think about yacht financing is as a structured discussion rather than
                a product off a shelf. The lender or financing specialist is not only considering
                what the buyer wants to spend. They are also thinking about how resilient the buyer
                profile looks, how sensible the requested leverage is, how attractive or risky the
                asset appears, and whether the overall structure feels straightforward or likely to
                produce friction later.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                That means the process is influenced by both borrower-side and vessel-side factors.
                A strong profile can still be complicated by the wrong asset or the wrong structure.
                Likewise, an attractive asset does not automatically make a weakly framed case look
                robust. This is one reason early-stage clarity matters so much.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                The main factors that shape lender appetite
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginBottom: 16 }}>
                Every lender has its own internal lens, but several variables tend to shape the
                conversation again and again:
              </p>
              <ul style={{ paddingLeft: 20 }}>
                {[
                  "Liquidity available relative to the intended purchase",
                  "Deposit size and overall leverage appetite",
                  "Net worth context and financial resilience",
                  "Asset age, condition and general marketability",
                  "Intended usage, including whether the case is purely private or more complex",
                  "Ownership path and wider structural considerations",
                  "The clarity, coherence and supportability of the overall financing story",
                ].map((item) => (
                  <li key={item} style={{ fontSize: 16, lineHeight: 1.95, color: C.gray2 }}>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginTop: 16 }}>
                None of these should be treated as isolated checkboxes. The shape of the case emerges
                from how they interact. That is why a more disciplined early-stage process can be so
                useful for buyers, brokers and advisors alike.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                Why vessel profile matters more than many buyers expect
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginBottom: 14 }}>
                Many buyers begin from the assumption that financing is mainly about them as a
                borrower. In reality, the vessel matters a great deal as well. Age, condition and
                overall lender appetite toward the asset can all influence how the case is framed.
                That is one reason two buyers with similar financial strength can still face
                meaningfully different financing conversations if the vessels they are pursuing are
                materially different.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                This does not mean older or more unusual assets are impossible. It means the case may
                need to be approached with more realistic expectations around leverage, complexity
                and likely structure. That is exactly the sort of nuance a serious financing workflow
                should help clarify early.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                Where calculators fit in
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginBottom: 14 }}>
                Calculators are valuable because they match real search intent. Someone looking for a{" "}
                <Link href="/yacht-finance-calculator" style={{ fontWeight: 700, color: C.black }}>
                  yacht finance calculator
                </Link>{" "}
                is usually trying to understand whether the financing picture is even broadly
                plausible. That is a legitimate first step.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginBottom: 14 }}>
                The problem is that many calculators stop too early. They provide a repayment number
                and nothing else. A better calculator journey helps the user think through what
                changes the result and why the case may still be straightforward, conditional or
                complex. That is where Waaza is more useful than a static widget. It connects the
                calculator to a richer financing context.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                If you want to explore the commercial page built around this intent, start here:{" "}
                <Link href="/yacht-finance-calculator" style={{ fontWeight: 700, color: C.black }}>
                  yacht finance calculator
                </Link>
                .
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                Why readiness matters before formal outreach
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginBottom: 14 }}>
                Readiness is one of the most underappreciated parts of yacht financing. Too many
                cases move into serious conversations before anyone has properly framed how strong the
                case currently looks, what introduces complexity and what needs to be improved or
                clarified before the next step becomes productive.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginBottom: 14 }}>
                This matters because a financing discussion can feel active while still being badly
                framed. A buyer may be enthusiastic. A broker may want to maintain momentum. An
                advisor may already sense complexity. But without a clearer early-stage view of
                readiness, the conversation risks becoming noisy, repetitive or prematurely
                optimistic.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                That is why Waaza is built around readiness, scenario context and structured outputs
                rather than a single repayment number alone.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                What smarter yacht financing conversations look like
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginBottom: 14 }}>
                A smarter financing conversation is not one that pretends certainty exists too early.
                It is one that understands the shape of the case more clearly. It knows what looks
                supportive, what may create friction, and which changes could make the next step more
                productive. That kind of conversation is more credible for the buyer, more efficient
                for the broker and more useful for the advisor.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                That is ultimately the role of Waaza. It helps improve the quality of early-stage
                thinking before the formal financing process absorbs serious time, attention and
                expectation.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                Start here next
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
                <Link href="/documentation" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                  Documentation
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
