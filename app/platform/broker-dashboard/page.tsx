import type { Metadata } from "next";
import MarketingRichPage from "../../components/MarketingRichPage";

export const metadata: Metadata = {
  title: "Broker Dashboard | Waaza",
  description:
    "See how the Waaza broker dashboard supports qualification, scenario exploration, reporting and better financing workflow management.",
  alternates: {
    canonical: "/platform/broker-dashboard",
  },
};

export default function Page() {
  return (
    <MarketingRichPage
      eyebrow="Platform"
      title="A broker dashboard designed to support real financing workflow, not just display data."
      intro="A broker dashboard only matters if it improves the moments where brokers actually lose time or credibility. In yacht financing, those moments tend to appear early. A buyer is interested, but not properly framed. The financing conversation starts, but nobody is aligned on strength or complexity. A case drifts into lender outreach before the story is coherent. Waaza’s broker dashboard should exist to improve exactly those moments."
      primaryCta={{ href: "/wizard", label: "Open readiness flow" }}
      secondaryCta={{ href: "/platform/report-generator", label: "See report generator" }}
      sections={[
        {
          title: "What a broker dashboard should help a team do",
          paragraphs: [
            "The dashboard should not just be a place where information goes to sit still. It should help a broker or team evaluate buyer readiness, compare assumptions, generate useful outputs and maintain continuity in how financing-related conversations are handled.",
            "That means the dashboard is valuable not because it contains everything, but because it supports the right decisions at the right stage. It should help teams qualify better, communicate more clearly and avoid losing momentum through ambiguity.",
          ],
          bullets: [
            "View readiness and complexity more clearly",
            "Use repayment and scenario tools in context",
            "Generate and revisit report outputs",
            "Keep continuity across evolving conversations",
            "Support a cleaner handoff into later-stage finance work",
          ],
        },
        {
          title: "Why brokers need this more than they admit",
          paragraphs: [
            "Many brokers already qualify buyers informally. They rely on instinct, pattern recognition and experience. The issue is not that this instinct is useless. The issue is that it is difficult to scale, explain and standardise. A better dashboard gives that instinct a more structured home.",
            "It also helps with communication. When a buyer can see a more coherent picture of the financing context, the broker does not have to carry the whole burden through improvised explanation. The platform becomes part of the conversation instead of just an internal note-taking surface.",
          ],
        },
        {
          title: "Why the dashboard matters commercially",
          paragraphs: [
            "If Waaza wants to become part of real broker workflow, the dashboard has to feel operationally useful. That means it must reduce wasted time, improve the quality of qualification and support better-prepared conversations. If it does that, it becomes sticky. If it does not, it becomes wallpaper.",
          ],
        },
      ]}
      related={[
        { href: "/platform/report-generator", label: "Report Generator" },
        { href: "/platform/case-tracking", label: "Case Tracking" },
        { href: "/case-studies", label: "Case Studies" },
      ]}
    />
  );
}
