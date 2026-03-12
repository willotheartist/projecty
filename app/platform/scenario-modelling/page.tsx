import type { Metadata } from "next";
import MarketingRichPage from "../../components/MarketingRichPage";

export const metadata: Metadata = {
  title: "Scenario Modelling | Waaza",
  description:
    "Explore how Waaza supports scenario modelling for yacht financing, including repayments, structure direction and changing deal assumptions.",
  alternates: {
    canonical: "/platform/scenario-modelling",
  },
};

export default function Page() {
  return (
    <MarketingRichPage
      eyebrow="Platform"
      title="Scenario modelling that reflects how financing decisions are actually made."
      intro="Real financing conversations rarely move in a straight line. Deposit size changes. Asset choice changes. Usage assumptions change. A buyer may begin with one expectation and end up needing a different structure altogether. Scenario modelling matters because it gives people room to explore those shifts before the process becomes formal, expensive or emotionally overcommitted."
      primaryCta={{ href: "/simulator", label: "Open simulator" }}
      secondaryCta={{ href: "/platform/readiness-scoring", label: "See readiness scoring" }}
      sections={[
        {
          title: "Why one flat number is rarely enough",
          paragraphs: [
            "A single repayment output can be useful, but it is not sufficient on its own. Financing decisions are shaped by trade-offs. A larger deposit may improve the picture significantly. A different vessel age may narrow lender appetite. A charter element may introduce complexity that changes the overall framing of the case. Scenario modelling is what helps users understand those trade-offs instead of clinging to one static figure.",
            "That makes the conversation more honest and more practical. Buyers can see how choices affect realism. Brokers can help guide expectations. Advisors can use the scenario layer as a better foundation for deeper discussion.",
          ],
        },
        {
          title: "What scenario modelling should help users explore",
          paragraphs: [
            "The core function is not just maths. It is comparative judgement. A useful modelling layer helps users understand what happens when the financing assumptions move. That can include different deposits, different term lengths, different vessel contexts or different directions around intended use and overall complexity.",
          ],
          bullets: [
            "How deposit size changes leverage and repayment context",
            "How term adjustments alter the overall financing picture",
            "How vessel age or usage can change the shape of the case",
            "How different structuring assumptions affect overall direction",
            "How a case moves from comfortable to conditional or complex",
          ],
        },
        {
          title: "Why this matters for brokers and buyers",
          paragraphs: [
            "Scenario modelling gives brokers a better way to guide a conversation without overpromising. Instead of pretending there is one clean answer immediately, they can show how the picture changes under different assumptions. That improves trust, because it feels more grounded and less salesy.",
            "For buyers, it provides a clearer mental model. Many people know what they want to buy before they understand how the financing picture behaves. Scenario modelling helps close that gap.",
          ],
        },
        {
          title: "Why this matters for the product itself",
          paragraphs: [
            "Scenario modelling also makes Waaza more strategically useful. It moves the platform beyond being a simple entry widget and toward being a real financing conversation tool. That matters because the deeper the product sits in the decision process, the more defensible it becomes.",
          ],
        },
      ]}
      related={[
        { href: "/platform/readiness-scoring", label: "Readiness Scoring" },
        { href: "/platform/rule-engine", label: "Rule Engine" },
        { href: "/documentation", label: "Documentation" },
        { href: "/integrations", label: "Integrations" },
      ]}
    />
  );
}
