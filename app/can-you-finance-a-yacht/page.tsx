const SITE_URL = "https://www.waaza.co";
const OG_IMAGE = "https://www.waaza.co/hero.png";


import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Can You Finance a Yacht? | Waaza",
  description:
    "Find out what influences whether you can finance a yacht, including buyer strength, deposit, vessel profile, intended use and overall readiness.",
  alternates: {
    canonical: "/can-you-finance-a-yacht",
  },
  keywords: ["can you finance a yacht", "yacht financing eligibility", "yacht loan approval", "yacht financing requirements", "can i get a yacht loan"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    title: "Can You Finance a Yacht? | Waaza",
    description: "Find out what influences whether you can finance a yacht, including buyer strength, deposit, vessel profile, intended use and overall readiness.",
    url: `${SITE_URL}/can-you-finance-a-yacht`,
    siteName: "Waaza",
    type: "article",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Can you finance a yacht - Waaza guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Can You Finance a Yacht? | Waaza",
    description: "What influences whether you can finance a yacht — buyer strength, deposit, vessel profile and readiness.",
    images: [OG_IMAGE],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you finance a yacht?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, many yacht purchases can be financed, but the real question is how strong the specific case looks once buyer profile, deposit, vessel characteristics and structure are considered together.",
      },
    },
    {
      "@type": "Question",
      name: "What makes a yacht financing case stronger?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A stronger case typically combines good liquidity, a sensible deposit, a lender-friendly asset profile and a clearer overall financing story.",
      },
    },
    {
      "@type": "Question",
      name: "What makes a yacht financing case more difficult?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "More difficult cases often involve higher leverage, older assets, more complex usage or ownership structures, or a financing story that has not been framed clearly enough yet.",
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
            Direct-answer page
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
            Can you finance a yacht? Yes — but the better question is how strong the case looks
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
            The short answer is yes: yacht financing exists and many purchases can be financed. But
            that is only the surface-level answer. The useful question is not whether financing
            exists in general. The useful question is whether a specific buyer, vessel and structure
            combine to create a strong, conditional or difficult case. That is where most of the
            real-world complexity sits. A buyer can be interested and serious, but the financing
            story may still be weakly framed. A deal can be possible and still be structurally more
            demanding than expected. That is exactly why a more disciplined early-stage process is so
            valuable.
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
            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                The simple answer versus the useful answer
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginBottom: 14 }}>
                If someone asks whether a yacht can be financed, the simplest answer is yes. But the
                simple answer is not the one that helps a real buyer make a better decision. The
                useful answer is that financing depends on how the case looks once all the important
                variables are considered together.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                That means the buyer profile matters, the deposit matters, the vessel matters, and the
                broader structure matters. Financing is not a universal yes-or-no product detached
                from the details. It is a shaped commercial conversation.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                What usually makes a case stronger
              </h2>
              <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
                {[
                  "Liquidity that looks sensible relative to the intended purchase",
                  "A deposit strategy that reduces leverage pressure",
                  "A vessel profile that is easier to support from an appetite perspective",
                  "Clearer intended use with less built-in complexity",
                  "A financing story that is coherent, realistic and supportable",
                ].map((item) => (
                  <li key={item} style={{ fontSize: 16, lineHeight: 1.95, color: C.gray2 }}>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                A stronger case is not necessarily a perfect one. It is simply one that appears more
                coherent, more resilient and more straightforward to discuss seriously.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                What tends to make the conversation more difficult
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginBottom: 14 }}>
                A more difficult financing conversation usually emerges when several stress points
                accumulate. That could mean ambitious leverage, a more challenging asset profile, a
                structurally complex ownership path, or simply a financing story that has not yet
                been framed properly.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                Difficulty does not necessarily mean impossibility. It means the case may require
                more thoughtful positioning, more conservative expectations or more work before
                outside conversations become productive.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                Why buyers often misunderstand this question
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginBottom: 14 }}>
                Buyers often ask whether financing is available in the abstract because they want a
                fast read on possibility. That is understandable. But the more important question is
                how the specific case is likely to be interpreted. Two buyers can ask the same yes-or-
                no question while actually presenting very different financing pictures.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                This is one reason a generic answer is often not good enough. Waaza is built to help
                move the conversation beyond abstract permission and toward a better understanding of
                case quality.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                The best next step
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginBottom: 14 }}>
                If you are seriously asking whether a yacht can be financed, the most useful next
                step is not another vague opinion. It is a clearer view of the current financing
                picture. That means understanding the role of deposit, asset profile, term and
                broader readiness.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                The strongest path is usually to start with the{" "}
                <Link href="/yacht-finance-calculator" style={{ fontWeight: 700, color: C.black }}>
                  yacht finance calculator
                </Link>
                , then move into a more structured readiness view if the conversation is becoming
                serious.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                Continue exploring
              </h2>
              <div style={{ display: "grid", gap: 10 }}>
                <Link href="/yacht-financing" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                  Yacht financing
                </Link>
                <Link href="/how-long-can-you-finance-a-yacht" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                  How long can you finance a yacht?
                </Link>
                <Link href="/superyacht-financing" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                  Superyacht financing
                </Link>
                <Link href="/faq" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                  FAQ
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
