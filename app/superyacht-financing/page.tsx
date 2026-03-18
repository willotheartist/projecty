const SITE_URL = "https://www.waaza.co";
const OG_IMAGE = "https://www.waaza.co/hero.png";


import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Superyacht Financing | Waaza",
  description:
    "A deeper guide to superyacht financing, including why higher-value transactions require stronger readiness, clearer structure and better-prepared conversations.",
  alternates: {
    canonical: "/superyacht-financing",
  },
  keywords: ["superyacht financing", "superyacht finance", "luxury yacht financing", "large yacht loan", "superyacht loan", "yacht financing"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    title: "Superyacht Financing | Waaza",
    description: "A deeper guide to superyacht financing, including why higher-value transactions require stronger readiness, clearer structure and better-prepared conversations.",
    url: `${SITE_URL}/superyacht-financing`,
    siteName: "Waaza",
    type: "article",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Waaza superyacht financing guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Superyacht Financing | Waaza",
    description: "Why higher-value transactions require stronger readiness and clearer structure.",
    images: [OG_IMAGE],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is superyacht financing different from ordinary boat finance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Superyacht financing usually involves greater transaction value, more structural nuance, higher expectations around documentation and a stronger need for early-stage clarity before formal lender outreach.",
      },
    },
    {
      "@type": "Question",
      name: "Why does readiness matter more in superyacht financing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because the cost of ambiguity rises quickly in higher-value transactions. Poorly framed early conversations can waste serious time and reduce the quality of later financing discussions.",
      },
    },
    {
      "@type": "Question",
      name: "Who benefits from a platform like Waaza in superyacht financing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Buyers, brokers and advisors all benefit because the platform helps create earlier clarity around strength, complexity and likely next steps before the process becomes more formal.",
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
            Premium / high-value guide
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
            Superyacht financing: why bigger transactions demand better preparation, not just bigger numbers
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
            Superyacht financing is not simply yacht financing with an extra zero attached. As deal
            size grows, the cost of poor early framing grows with it. Ambiguity becomes more
            expensive. Structural nuance becomes more important. Expectations around documentation,
            readiness and overall deal coherence become harder to ignore. That is why higher-value
            transactions benefit even more from a disciplined early-stage financing process.
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
              Read yacht financing guide
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
                Why superyacht financing deserves its own conversation
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginBottom: 14 }}>
                At higher transaction values, the margin for vague thinking gets smaller. The buyer
                may still begin with the same questions — what can I borrow, what might the monthly
                picture look like, what feels realistic — but the quality of the conversation matters
                much more. A poorly framed case in a lower-value context may waste some time. A
                poorly framed case in a superyacht context can waste a great deal more than that.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                That is why superyacht financing should be approached as a more structured and
                preparation-heavy conversation. It is not just about access to financing. It is about
                the quality of the case entering the conversation.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                What becomes more important as deal value rises
              </h2>
              <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
                {[
                  "Clearer early-stage readiness and buyer strength signals",
                  "Stronger discipline around leverage expectations",
                  "Better alignment between asset choice and financing appetite",
                  "More attention to structure, ownership path and transaction framing",
                  "Less tolerance for vague or underprepared conversations",
                ].map((item) => (
                  <li key={item} style={{ fontSize: 16, lineHeight: 1.95, color: C.gray2 }}>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                None of this means superyacht financing is only for perfectly frictionless cases. It
                means preparation matters more, and structure matters earlier.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                Why brokers and advisors need stronger early qualification here
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginBottom: 14 }}>
                In higher-value deals, brokers and advisors carry more risk when early conversations
                are weakly framed. If the buyer’s financing position is unclear, if the asset
                introduces more complexity than expected, or if the structure is not thought through,
                momentum can become deceptive. The deal may feel active without being properly
                prepared.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                That is exactly why a platform like Waaza becomes more useful at the upper end. It
                helps create earlier clarity around strength, complexity and next-step discipline.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                Why calculators still matter — but only as the beginning
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginBottom: 14 }}>
                Even in superyacht financing, calculators still matter. People still want a first
                read on what the numbers may look like. But at this level, the calculator becomes
                meaningful only when it leads into better context. The repayment estimate is useful,
                but it is not the real work. The real work is understanding the quality and shape of
                the case behind it.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                That is why the best next step is usually not to stay inside a static number tool but
                to move into a readiness-led conversation.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                Continue with the strongest supporting pages
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
    </>
  );
}
