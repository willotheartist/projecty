import type { Metadata } from "next";
import MarketingRichPage from "../../components/MarketingRichPage";

export const metadata: Metadata = {
  title: "Structuring | Waaza",
  description:
    "Learn why structuring matters in yacht financing and how Waaza helps surface complexity earlier in the process.",
  alternates: {
    canonical: "/solutions/structuring",
  },
};

export default function Page() {
  return (
    <MarketingRichPage
      eyebrow="Solutions"
      title="Structuring starts earlier than most financing conversations admit."
      intro="Many people speak about structuring as if it only becomes relevant once a deal is already well underway. In reality, structural questions often shape the financing picture much earlier. Ownership path, intended use, jurisdictional sensitivity, leverage expectations and asset profile all influence what is likely to be realistic. Waaza helps surface that earlier so the conversation can begin from a more informed place."
      primaryCta={{ href: "/platform/scenario-modelling", label: "See scenario modelling" }}
      secondaryCta={{ href: "/platform/rule-engine", label: "See rule engine" }}
      sections={[
        {
          title: "Why structuring matters so early",
          paragraphs: [
            "A financing conversation can look straightforward on the surface while hiding meaningful structural tension underneath. A buyer may have liquidity, but the intended ownership route could complicate the picture. The vessel may look attractive, but the intended usage could change how the case needs to be framed. These are not details to be discovered too late. They are part of the core financing story.",
            "That is why a more serious product needs to help users think about structure earlier. It reduces the risk of overconfidence and makes later conversations more coherent.",
          ],
        },
        {
          title: "How Waaza helps with structuring conversations",
          paragraphs: [
            "Waaza is not trying to finalise a bespoke structure for every case. What it does well is create earlier visibility into the variables that make structuring more or less complex. It helps signal when a case is likely to remain relatively straightforward and when it is likely to require more careful work.",
            "This is especially useful because many early-stage conversations fail to distinguish between financeable and straightforward. A case may be viable and still structurally demanding. Helping users understand that difference is one of the strongest things Waaza can do.",
          ],
          bullets: [
            "Surfaces complexity before it becomes an expensive surprise",
            "Helps frame conversations around ownership and usage",
            "Supports more realistic expectations around financing paths",
            "Creates a stronger bridge into specialist advisory work",
            "Improves the quality of report-led communication",
          ],
        },
        {
          title: "Why this matters for the broader workflow",
          paragraphs: [
            "When structural complexity is recognised early, everyone benefits. Brokers communicate more carefully. Buyers become more realistic. Advisors receive better-framed cases. That kind of workflow improvement is hard to create if the product only focuses on repayments and ignores the deeper forces shaping the deal.",
          ],
        },
        {
          title: "Why structuring strengthens Waaza as a product",
          paragraphs: [
            "The more Waaza can help clarify not just whether a case looks interesting but why it may be simple or complex, the more credible the platform becomes. It moves the product away from being a front-end curiosity and toward being a more serious layer in transaction preparation.",
          ],
        },
      ]}
      related={[
        { href: "/solutions/finance-advisors", label: "Finance Advisors" },
        { href: "/platform/scenario-modelling", label: "Scenario Modelling" },
        { href: "/platform/readiness-scoring", label: "Readiness Scoring" },
        { href: "/documentation", label: "Documentation" },
      ]}
    />
  );
}
