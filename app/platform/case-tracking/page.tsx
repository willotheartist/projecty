import type { Metadata } from "next";
import MarketingRichPage from "../../components/MarketingRichPage";

export const metadata: Metadata = {
  title: "Case Tracking | Waaza",
  description:
    "Understand how case tracking in Waaza supports continuity across buyer qualification, financing discussion and structured follow-up.",
  alternates: {
    canonical: "/platform/case-tracking",
  },
};

export default function Page() {
  return (
    <MarketingRichPage
      eyebrow="Platform"
      title="Case tracking that helps financing conversations keep their shape as they evolve."
      intro="Cases change. Buyers refine assumptions. Brokers gather more detail. Advisors see complexities that were not obvious at the start. That is normal. The problem is that continuity often breaks as the conversation evolves. Case tracking matters because it helps preserve structure across that change. Instead of each interaction starting from scratch, the platform can carry forward the financing narrative more coherently."
      primaryCta={{ href: "/platform/broker-dashboard", label: "See broker dashboard" }}
      secondaryCta={{ href: "/platform/report-generator", label: "See report generator" }}
      sections={[
        {
          title: "Why continuity matters in financing workflow",
          paragraphs: [
            "A financing conversation is not a single event. It is usually a series of stages, each shaped by better information, changing assumptions and growing seriousness. If that process has no continuity, quality drops quickly. People repeat themselves. Important nuance gets lost. Expectations drift. Case tracking helps avoid that by keeping the thread intact.",
            "For a product like Waaza, this matters because the platform should not just help at the first touchpoint. It should support the case as it becomes more developed and more useful to the people handling it.",
          ],
        },
        {
          title: "What case tracking should preserve",
          paragraphs: [
            "The goal is not endless data storage for its own sake. The goal is to preserve the parts of the financing story that keep the conversation coherent. That includes how readiness was interpreted, what scenarios were explored, what outputs were generated and what questions or concerns still remain unresolved.",
          ],
          bullets: [
            "A clearer record of how the case has been framed",
            "Continuity between readiness and later discussion",
            "Reference points for scenario comparisons",
            "Report visibility and follow-up context",
            "Better internal handoff across a team or workflow",
          ],
        },
        {
          title: "Why this matters commercially",
          paragraphs: [
            "Case tracking is easy to underestimate because it sounds operational rather than glamorous. In reality, it is one of the features that most clearly separates a serious workflow tool from a one-off front-end widget. If Waaza can preserve the shape of a financing conversation over time, it becomes much more useful to the teams handling real deals.",
          ],
        },
        {
          title: "What it says about the maturity of the product",
          paragraphs: [
            "The presence of case tracking signals that Waaza is not just concerned with acquisition. It suggests the platform wants to become part of the actual operating layer of financing conversations. That is strategically important, because the deeper the platform sits in process quality, the stronger the product becomes.",
          ],
        },
      ]}
      related={[
        { href: "/platform/broker-dashboard", label: "Broker Dashboard" },
        { href: "/platform/readiness-scoring", label: "Readiness Scoring" },
        { href: "/case-studies", label: "Case Studies" },
      ]}
    />
  );
}
