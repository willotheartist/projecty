import type { Metadata } from "next";
import MarketingRichPage from "../components/MarketingRichPage";

export const metadata: Metadata = {
  title: "FAQ | Waaza",
  description:
    "Frequently asked questions about yacht financing, simulations, readiness scoring, reports and how Waaza supports broker workflows.",
  alternates: {
    canonical: "/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Waaza a lender?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Waaza is not a lender. It is a financing intelligence layer that helps buyers, brokers and advisors understand readiness, repayment context and likely deal complexity before formal lender outreach.",
      },
    },
    {
      "@type": "Question",
      name: "Is the simulator a formal offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The simulator is indicative. It is designed to help users think through possible repayments, borrowing range and financing context, but actual terms depend on underwriting, structure, vessel profile and documentation quality.",
      },
    },
    {
      "@type": "Question",
      name: "Why use readiness scoring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Readiness scoring helps create a clearer early-stage view of whether a case looks strong, conditional or complex. It improves expectations and can reduce wasted lender outreach.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MarketingRichPage
        eyebrow="FAQ"
        title="Questions people actually ask before a yacht financing conversation gets serious."
        intro="A good FAQ page should do more than clear up small objections. It should help users understand the role of the product, the limits of simulations, and why a more structured pre-lender workflow is useful. In Waaza’s case, that means being clear about what the platform is, what it is not, and why readiness scoring and scenario-based thinking matter commercially."
        primaryCta={{ href: "/documentation", label: "Read documentation" }}
        secondaryCta={{ href: "/about", label: "About Waaza" }}
        sections={[
          {
            title: "Is Waaza a lender?",
            paragraphs: [
              "No. Waaza is not a lender and should not be presented as one. It exists to support better financing conversations before a formal lender process begins. That distinction is important because the value of the product lies in preparation, clarity and structure rather than pretending to short-circuit underwriting.",
            ],
          },
          {
            title: "Is the simulator a formal finance offer?",
            paragraphs: [
              "No. The simulator is indicative. It helps buyers and brokers think through likely repayment ranges, borrowing range and financing context. Actual lender outcomes will always depend on the full picture, including the buyer profile, the vessel itself, intended use, structure and the quality of supporting documentation.",
            ],
          },
          {
            title: "Why does readiness scoring matter?",
            paragraphs: [
              "Because too many financing conversations start with weak framing. A readiness score is useful because it turns a messy set of inputs into a more intelligible early-stage view. It helps answer whether a case looks strong, conditional or likely to require more careful structuring before outside conversations begin.",
            ],
          },
          {
            title: "Who is Waaza for?",
            paragraphs: [
              "Waaza is relevant to buyers who want a more realistic starting point, to brokers who want fewer vague or low-quality financing conversations, and to advisors who benefit when a case arrives with more structure already in place.",
            ],
          },
          {
            title: "What makes Waaza different from a generic calculator widget?",
            paragraphs: [
              "A generic widget gives a number and stops there. Waaza is more useful because it treats the number as the beginning of a financing story, not the end of one. It connects repayment logic with readiness, structure and report-led communication, which is far more relevant in real transactions.",
            ],
          },
        ]}
        related={[
          { href: "/documentation", label: "Documentation" },
          { href: "/integrations", label: "Integrations" },
          { href: "/blog", label: "Blog" },
        ]}
      />
    </>
  );
}
