import type { Metadata } from "next";
import MarketingRichPage from "../../components/MarketingRichPage";

export const metadata: Metadata = {
  title: "Report Generator | Waaza",
  description:
    "Learn how the Waaza report generator turns financing logic into structured, shareable output for buyers, brokers and advisors.",
  alternates: {
    canonical: "/platform/report-generator",
  },
};

export default function Page() {
  return (
    <MarketingRichPage
      eyebrow="Platform"
      title="A report generator that makes the financing conversation easier to share, explain and move forward."
      intro="The report generator is one of the strongest parts of the Waaza story because it turns inputs and logic into something visible, structured and commercially useful. Many financing conversations stall because the case exists only in fragments: a few assumptions in someone’s head, a repayment number on a screen, a loose sense of whether the buyer feels strong or weak. Reports help turn those fragments into a more coherent object."
      primaryCta={{ href: "/wizard", label: "Generate from intake flow" }}
      secondaryCta={{ href: "/platform/readiness-scoring", label: "See readiness scoring" }}
      sections={[
        {
          title: "Why reports matter more than people think",
          paragraphs: [
            "A report does more than summarise. It creates structure. It helps a buyer understand where they stand, helps a broker communicate more credibly, and helps an advisor start from a cleaner base. In other words, it reduces ambiguity. That is especially valuable in financing conversations, where unclear framing often leads to wasted time and weaker downstream interactions.",
            "A good report is also a trust tool. It makes the product feel more serious because it shows that the platform can convert raw inputs into a disciplined, legible narrative rather than just display scattered outputs.",
          ],
        },
        {
          title: "What a strong report should include",
          paragraphs: [
            "The report should make it easy to understand the current financing picture, not overwhelm the user with noise. It should show readiness direction, financing context, potential complexity and sensible next steps in a way that feels usable rather than decorative.",
          ],
          bullets: [
            "A clear readiness summary",
            "Indicative financing context and range signals",
            "Complexity or risk considerations worth noting",
            "A digestible explanation of what the current result means",
            "Actionable next-step framing for the user or team",
          ],
        },
        {
          title: "Why report generation strengthens the product",
          paragraphs: [
            "Without reports, the platform risks feeling like a momentary tool. With reports, it becomes part of a broader workflow. It creates an artefact that can be referenced, discussed and built upon. That helps Waaza move from a one-click curiosity into something more operationally relevant.",
            "This is part of what makes the platform more commercially compelling. If it can support not just discovery, but communication and continuity, it becomes much harder to dismiss as a simple calculator layer.",
          ],
        },
        {
          title: "Why brokers and advisors benefit from report output",
          paragraphs: [
            "Brokers benefit because a report improves the quality of explanation. Advisors benefit because a report helps frame the case more efficiently. Both benefit because the conversation becomes less dependent on improvised memory and more grounded in structured output.",
          ],
        },
      ]}
      related={[
        { href: "/platform/broker-dashboard", label: "Broker Dashboard" },
        { href: "/platform/case-tracking", label: "Case Tracking" },
        { href: "/documentation", label: "Documentation" },
      ]}
    />
  );
}
