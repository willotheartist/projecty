const SITE_URL = "https://www.waaza.co";
const OG_IMAGE = "https://www.waaza.co/hero.png";


import type { Metadata } from "next";
import MarketingRichPage from "../components/MarketingRichPage";

export const metadata: Metadata = {
  title: "Documentation | Waaza",
  description:
    "Waaza documentation covering financing readiness scoring, simulator logic, reports, workflow usage and implementation guidance for brokers and advisors.",
  alternates: {
    canonical: "/documentation",
  },
  keywords: ["waaza documentation", "yacht financing platform docs", "readiness scoring documentation", "marine finance API docs"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    title: "Documentation | Waaza",
    description: "Waaza documentation covering financing readiness scoring, simulator logic, reports, workflow usage and implementation guidance for brokers and advisors.",
    url: `${SITE_URL}/documentation`,
    siteName: "Waaza",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Waaza documentation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Documentation | Waaza",
    description: "Readiness scoring, simulator logic, reports and implementation guidance for brokers and advisors.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return (
    <MarketingRichPage
      eyebrow="Documentation"
      title="Documentation for a yacht financing platform built around readiness, structure and better conversations."
      intro="Waaza is most useful when people understand exactly where it fits. It is not a lender and it is not pretending to be a final credit decisioning engine. It is a financing intelligence layer that helps buyers, brokers and advisors understand readiness, indicative structure direction, repayment context and likely complexity before formal lender outreach begins. Good documentation should reduce confusion, strengthen trust and make the product easier to adopt commercially."
      primaryCta={{ href: "/wizard", label: "Open readiness intake" }}
      secondaryCta={{ href: "/integrations", label: "View integrations" }}
      sections={[
        {
          title: "What the Waaza platform actually does",
          paragraphs: [
            "Waaza combines several useful layers that normally sit in disconnected parts of the financing journey. At the front, it gives users a practical way to explore payments and borrowing range through calculator-style flows. Behind that, it introduces readiness scoring based on meaningful inputs like liquidity, deposit appetite, vessel characteristics, intended usage and structuring complexity. From there, the platform can generate more structured outputs, including report-style summaries that make a case easier to understand and discuss.",
            "That combination matters because the earliest stages of yacht financing are often weakly framed. Buyers may know the vessel they want, but not what kind of structure is realistic. Brokers may sense whether a case feels strong or fragile, but not have a disciplined framework for explaining it. Advisors may end up doing expensive thinking too early because the case arrived without enough structure. Waaza improves those moments.",
          ],
          bullets: [
            "Calculator-led entry points for real search and real user intent",
            "Readiness scoring for stronger early qualification",
            "Indicative LTV and complexity framing",
            "Scenario-led thinking rather than one flat number",
            "Report generation for cleaner buyer and broker conversations",
          ],
        },
        {
          title: "Why documentation matters commercially",
          paragraphs: [
            "Documentation is not just for technical teams. On a product like Waaza, it is part of sales enablement, product clarity and trust-building. A broker evaluating the product needs to understand whether it helps them qualify buyer interest earlier. A finance advisor needs to understand whether the product supports, rather than trivialises, the structuring conversation. Internal operators need to understand where the simulator ends and where human judgement begins.",
            "Well-written documentation makes the platform feel serious. Thin documentation does the opposite. In this category, seriousness matters. Users are not looking for a toy widget. They are looking for a clearer path through a financing conversation that can otherwise become expensive, vague and frustrating.",
          ],
        },
        {
          title: "How teams should use Waaza",
          paragraphs: [
            "A broker team should typically use Waaza before broad lender outreach. That is where the product has the highest leverage. Instead of taking a half-formed case to market and hoping it works, the team can use the platform to understand whether the profile looks strong, conditional or meaningfully complex.",
            "Advisors can use Waaza to start a more coherent conversation around structure, ownership path and asset fit. Buyers can use it to become more informed and realistic before the process becomes formal. Implementation or operations teams can use documentation and integration guidance to decide where the product should sit within a wider workflow.",
          ],
        },
      ]}
      related={[
        { href: "/faq", label: "FAQ" },
        { href: "/about", label: "About Waaza" },
        { href: "/blog", label: "Blog" },
      ]}
    />
  );
}
