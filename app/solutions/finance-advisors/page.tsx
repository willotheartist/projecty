import type { Metadata } from "next";
import MarketingRichPage from "../../components/MarketingRichPage";

export const metadata: Metadata = {
  title: "Finance Advisors | Waaza",
  description:
    "Discover how Waaza helps finance advisors start from better-framed yacht financing cases with more useful early-stage context.",
  alternates: {
    canonical: "/solutions/finance-advisors",
  },
};

export default function Page() {
  return (
    <MarketingRichPage
      eyebrow="Solutions"
      title="A useful front-end financing layer for advisors who want cleaner starting points."
      intro="Finance advisors usually add the most value once a case is coherent enough to work on seriously. The trouble is that many cases arrive too early, too vague or too emotionally anchored to assumptions that were never structured properly. Waaza is helpful for finance advisors because it creates a better pre-advisory layer. It helps shape the case before deeper structuring, lender positioning or documentation work begins."
      primaryCta={{ href: "/platform/scenario-modelling", label: "See scenario modelling" }}
      secondaryCta={{ href: "/platform/readiness-scoring", label: "See readiness scoring" }}
      sections={[
        {
          title: "Why advisors benefit from earlier structure",
          paragraphs: [
            "When a case reaches an advisor with some coherent logic already in place, everything becomes more efficient. The advisor can spend less time uncovering the basics and more time refining the structure, challenging assumptions and improving the path forward.",
            "That does not mean the advisor becomes less important. In many ways, it makes their role more valuable, because more of their energy can go toward higher-level judgement instead of untangling a weak starting point.",
          ],
        },
        {
          title: "What Waaza contributes before deeper advisory work",
          paragraphs: [
            "Waaza helps clarify how the case currently looks, where the likely tensions are and which variables are already shaping the financing picture. That could involve liquidity, deposit level, usage complexity, ownership direction, vessel characteristics or overall readiness.",
            "By surfacing these factors earlier, the platform helps create a financing conversation that is easier for an advisor to engage with seriously. It is not replacing structuring expertise. It is helping prepare the ground for it.",
          ],
          bullets: [
            "Better-framed inputs before advisory work begins",
            "Clearer signals around strength and complexity",
            "Scenario-led thinking rather than static assumptions",
            "Cleaner communication with buyers and brokers",
            "Stronger foundations for deeper structuring conversations",
          ],
        },
        {
          title: "Why advisors should care about product quality here",
          paragraphs: [
            "Advisors tend to be sceptical of finance-adjacent technology when it feels simplistic. That scepticism is often justified. A product that reduces everything to a shallow calculator or a vague score will not be credible. Waaza becomes much more useful when it is presented as a disciplined support layer rather than a replacement for expertise.",
            "That framing matters. If the platform is honest about what it structures well and what still requires specialist judgement, then advisors are much more likely to see it as a useful tool rather than noise.",
          ],
        },
        {
          title: "What a strong advisor use case looks like",
          paragraphs: [
            "A strong use case is one where a buyer or broker arrives with a more coherent financing story, an indicative understanding of readiness and some scenario exploration already done. The advisor can then step in at the right level: interpretation, refinement, structure and strategic next steps.",
          ],
        },
      ]}
      related={[
        { href: "/solutions/structuring", label: "Structuring" },
        { href: "/platform/rule-engine", label: "Rule Engine" },
        { href: "/platform/report-generator", label: "Report Generator" },
        { href: "/documentation", label: "Documentation" },
      ]}
    />
  );
}
