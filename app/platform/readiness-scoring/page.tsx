const SITE_URL = "https://www.waaza.co";
const OG_IMAGE = "https://www.waaza.co/hero.png";


import type { Metadata } from "next";
import MarketingRichPage from "../../components/MarketingRichPage";

export const metadata: Metadata = {
  title: "Readiness Scoring | Waaza",
  description:
    "Understand how Waaza uses readiness scoring to improve yacht financing conversations before formal lender outreach begins.",
  alternates: {
    canonical: "/platform/readiness-scoring",
  },
  keywords: ["yacht financing readiness scoring", "yacht buyer readiness", "marine finance readiness", "yacht financing score", "broker readiness tool"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    title: "Readiness Scoring | Waaza",
    description: "Understand how Waaza uses readiness scoring to improve yacht financing conversations before formal lender outreach begins.",
    url: `${SITE_URL}/platform/readiness-scoring`,
    siteName: "Waaza",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Waaza readiness scoring" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Readiness Scoring | Waaza",
    description: "How readiness scoring improves yacht financing conversations before formal lender outreach.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return (
    <MarketingRichPage
      eyebrow="Platform"
      title="Readiness scoring that helps yacht financing conversations start from a stronger place."
      intro="Readiness scoring sits at the core of Waaza because most financing discussions suffer from the same early-stage problem: people are talking before the case has been framed properly. A buyer may be enthusiastic, a broker may be optimistic, and an advisor may already sense complexity, but there is still no shared structure for deciding whether the case looks strong, conditional or materially difficult. Readiness scoring gives everyone a better starting point."
      primaryCta={{ href: "/wizard", label: "Run readiness intake" }}
      secondaryCta={{ href: "/platform/rule-engine", label: "View rule engine" }}
      sections={[
        {
          title: "Why readiness scoring matters in practice",
          paragraphs: [
            "In real yacht transactions, early signals matter. Liquidity matters. Deposit appetite matters. Vessel age matters. Intended usage matters. Ownership structure matters. None of these variables are trivial, yet many conversations still begin as if financing is mostly about a rough budget and a desired monthly number. That is too thin. A readiness layer improves the quality of the conversation before it reaches a lender.",
            "The value of scoring is not that it magically predicts a formal decision. Its value is that it helps turn fragmented information into a more intelligible early-stage picture. That alone can change how a broker qualifies a lead, how a buyer thinks about next steps and how an advisor prioritises attention.",
          ],
        },
        {
          title: "What the score is designed to capture",
          paragraphs: [
            "The score is intended to reflect financing readiness, not personal worth. It is a commercial and structural signal. It helps answer whether the case appears relatively straightforward, conditionally financeable, or likely to require more careful work before productive lender outreach can begin.",
            "That means the score is shaped by the specific financing context. A profile with strong liquidity and a conservative deposit strategy may look robust. A profile involving older assets, higher leverage or more complex usage and ownership may still be viable, but the degree of complexity will change the interpretation of the result.",
          ],
          bullets: [
            "Liquidity strength versus intended purchase",
            "Deposit size and leverage appetite",
            "Asset profile, including vessel age and condition",
            "Private use versus charter-related complexity",
            "Ownership path and tax or jurisdiction sensitivity",
            "Overall clarity and quality of the financing story",
          ],
        },
        {
          title: "Why a score is useful for brokers",
          paragraphs: [
            "Brokers often absorb the messiest part of the financing conversation. They are close enough to the buyer to feel urgency, but too early in the process to rely on a formal lender opinion. A readiness score helps them qualify more intelligently. It creates a way to communicate risk and strength without pretending that a final answer already exists.",
            "That reduces wasted time. It also improves credibility. Buyers generally respond better when a broker can explain not just that financing may be possible, but why the case currently looks stronger or weaker and what would improve it.",
          ],
        },
        {
          title: "Why a score is useful for buyers and advisors",
          paragraphs: [
            "Buyers benefit because they get a more realistic starting point. That can help them think more clearly about deposit strategy, vessel selection and timing. Advisors benefit because they receive a better-framed case. Instead of beginning from total ambiguity, they can begin from a more disciplined set of assumptions and signals.",
            "That is the real job of readiness scoring inside Waaza. It is not meant to impress for its own sake. It is meant to improve commercial judgement before expensive external conversations begin.",
          ],
        },
      ]}
      related={[
        { href: "/platform/rule-engine", label: "Rule Engine" },
        { href: "/platform/scenario-modelling", label: "Scenario Modelling" },
        { href: "/documentation", label: "Documentation" },
        { href: "/faq", label: "FAQ" },
      ]}
    />
  );
}
