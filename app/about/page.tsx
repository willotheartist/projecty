
const SITE_URL = "https://www.waaza.co";
const OG_IMAGE = "https://www.waaza.co/hero.png";

import type { Metadata } from "next";
import MarketingRichPage from "../components/MarketingRichPage";

export const metadata: Metadata = {
  title: "About | Waaza",
  description:
    "Learn about Waaza, its thesis and why structured yacht financing conversations matter before lender outreach begins.",
  alternates: {
    canonical: "/about",
  },
  keywords: ["about Waaza", "yacht financing intelligence", "yacht finance platform", "marine finance tool"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    title: "About | Waaza",
    description: "Learn about Waaza, its thesis and why structured yacht financing conversations matter before lender outreach begins.",
    url: `${SITE_URL}/about`,
    siteName: "Waaza",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "About Waaza" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Waaza",
    description: "Why structured yacht financing conversations matter before lender outreach begins.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return (
    <MarketingRichPage
      eyebrow="About"
      title="Waaza exists to make yacht financing conversations more structured, more realistic and more useful."
      intro="Too many yacht financing conversations begin too late and with too little discipline. Buyers may have enthusiasm but not a realistic understanding of structure. Brokers may have instinct but not a consistent framework. Advisors may get dragged into work before the case is properly framed. Waaza exists to improve that early-stage layer. It is built around readiness, scenario thinking and communication quality, because better conversations upstream create better outcomes downstream."
      primaryCta={{ href: "/documentation", label: "Read documentation" }}
      secondaryCta={{ href: "/case-studies", label: "View case studies" }}
      sections={[
        {
          title: "The core thesis behind Waaza",
          paragraphs: [
            "Before a case ever reaches a lender, there is already enough information to improve the quality of the conversation. Liquidity, deposit appetite, asset characteristics, intended use and ownership complexity all shape what is likely to be realistic. Yet those signals are often handled informally, inconsistently or too late. Waaza brings them together earlier.",
            "That is not just a product decision. It is a commercial one. The more ambiguous the first financing conversation is, the more likely everyone wastes time. The clearer the case is at the beginning, the more productive the process becomes. Waaza is designed to create that clarity without pretending to replace the expertise of brokers, advisors or lenders.",
          ],
        },
        {
          title: "Why the product is built this way",
          paragraphs: [
            "The platform brings together a simulator, a readiness layer and structured outputs because those are the pieces that help users move from vague interest to meaningful conversation. A repayment number alone is too thin. A readiness label alone is too abstract. A report without context is too static. Together, however, those pieces become much more useful.",
            "This is why Waaza should feel serious, informed and operationally helpful. The goal is not novelty for its own sake. The goal is to improve how people understand and frame yacht financing in the earliest and messiest part of the process.",
          ],
        },
        {
          title: "Who benefits most from the approach",
          paragraphs: [
            "Buyers benefit because they gain a more grounded understanding of what might be realistic before the process becomes formal. Brokers benefit because they can qualify conversations earlier and reduce wasted lender outreach. Advisors benefit because they receive better-framed cases. Over time, that combination creates a stronger commercial flywheel than a shallow finance widget ever could.",
          ],
        },
      ]}
      related={[
        { href: "/faq", label: "FAQ" },
        { href: "/blog", label: "Blog" },
        { href: "/partners", label: "Partners" },
      ]}
    />
  );
}
