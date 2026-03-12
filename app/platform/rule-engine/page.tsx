import type { Metadata } from "next";
import MarketingRichPage from "../../components/MarketingRichPage";

export const metadata: Metadata = {
  title: "Rule Engine | Waaza",
  description:
    "Learn how the Waaza rule engine supports transparent yacht financing readiness logic and structured output generation.",
  alternates: {
    canonical: "/platform/rule-engine",
  },
};

export default function Page() {
  return (
    <MarketingRichPage
      eyebrow="Platform"
      title="A rule engine built for transparency, consistency and more credible financing logic."
      intro="The rule engine matters because financing-related products lose trust quickly when their logic feels vague, inconsistent or theatrical. Waaza is stronger when users can understand that there is disciplined reasoning underneath the output. A rule engine helps create that discipline. It makes the platform more explainable, more maintainable and more commercially serious."
      primaryCta={{ href: "/platform/readiness-scoring", label: "See readiness scoring" }}
      secondaryCta={{ href: "/documentation", label: "Read documentation" }}
      sections={[
        {
          title: "Why deterministic logic matters here",
          paragraphs: [
            "In a category like yacht financing, users do not just want outputs. They want outputs that feel earned. A deterministic rules foundation helps support that. It creates a system where inputs are evaluated consistently, where thresholds can be reasoned about, and where internal teams can evolve the platform without turning it into an opaque black box.",
            "That does not mean every financing decision can be reduced to a formula. It means the platform should be honest about the part it can structure well. The more clearly Waaza handles its part of the problem, the more useful it becomes to brokers, buyers and advisors.",
          ],
        },
        {
          title: "What the engine supports operationally",
          paragraphs: [
            "The rule engine provides the backbone for turning user inputs into more structured outputs. That includes readiness direction, flagging likely complexity, shaping indicative LTV thinking and supporting report generation. Without a rules layer, those outputs become harder to defend and harder to improve over time.",
            "It also helps with internal product quality. When teams can evolve thresholds, adjust scoring influence and manage logic more cleanly, they gain a better basis for iteration. That matters because the platform should become sharper as it learns where real-world friction occurs.",
          ],
          bullets: [
            "Consistent handling of buyer and vessel inputs",
            "Structured risk and complexity flagging",
            "Greater explainability in readiness output",
            "Cleaner iteration over thresholds and weighting",
            "Better foundations for reports and scenario flows",
          ],
        },
        {
          title: "Why this is useful commercially, not just technically",
          paragraphs: [
            "A good rule engine is not just a backend detail. It improves how the product can be sold, trusted and used. If a broker senses that the output is arbitrary, they will not rely on it. If an advisor thinks the platform is hand-wavy, they will treat it as a novelty. But if the logic feels disciplined and coherent, the product becomes more believable as a real workflow layer.",
            "That is why transparency is not a technical luxury here. It is part of the commercial value. The more credible the internal logic is, the easier it becomes for teams to use Waaza as a real decision-support layer.",
          ],
        },
        {
          title: "What the engine is not trying to be",
          paragraphs: [
            "The rule engine is not trying to replace lender underwriting or pretend it knows everything. Its job is to improve the earlier stage of the journey. It gives a more structured view of readiness and complexity, but it should always be framed as a support layer rather than a final authority.",
          ],
        },
      ]}
      related={[
        { href: "/platform/readiness-scoring", label: "Readiness Scoring" },
        { href: "/platform/report-generator", label: "Report Generator" },
        { href: "/faq", label: "FAQ" },
      ]}
    />
  );
}
