import type { Metadata } from "next";
import MarketingRichPage from "../../components/MarketingRichPage";

export const metadata: Metadata = {
  title: "Yacht Brokers | Waaza",
  description:
    "See how Waaza helps yacht brokers qualify financing conversations earlier, frame buyer readiness more clearly and reduce wasted outreach.",
  alternates: {
    canonical: "/solutions/yacht-brokers",
  },
};

export default function Page() {
  return (
    <MarketingRichPage
      eyebrow="Solutions"
      title="Built for yacht brokers who want better financing conversations, not more noise."
      intro="Brokers are often the first people forced to deal with financing ambiguity. A buyer is interested, but not fully prepared. The vessel looks right, but the financing story is still vague. Everyone wants momentum, but nobody wants to waste time. Waaza is especially useful for yacht brokers because it helps create a more structured financing conversation before things drift too far into assumption, overconfidence or unnecessary lender outreach."
      primaryCta={{ href: "/wizard", label: "Open readiness intake" }}
      secondaryCta={{ href: "/platform/broker-dashboard", label: "See broker dashboard" }}
      sections={[
        {
          title: "Why brokers need this kind of layer",
          paragraphs: [
            "Brokers already do informal qualification every day. They listen for seriousness, observe financial signals, assess credibility and try to judge whether a conversation is worth advancing. The problem is that this often happens without a consistent framework. That makes it harder to explain, harder to scale across a team and harder to use as a repeatable commercial process.",
            "Waaza gives brokers a more structured layer for handling this part of the journey. Instead of relying entirely on instinct and scattered notes, they can use readiness signals, scenario exploration and report generation to make the conversation more coherent.",
          ],
        },
        {
          title: "What improves when a broker uses Waaza properly",
          paragraphs: [
            "The biggest improvement is not just efficiency. It is conversation quality. A broker who can guide a buyer through a more structured financing discussion becomes more credible. They can explain not just that something might be possible, but what makes the case look stronger or weaker and what may need to change before it becomes more financeable.",
            "That improves trust. It also helps avoid one of the most common problems in this space: acting as though financing is straightforward before the case has actually been framed well enough to justify that confidence.",
          ],
          bullets: [
            "Cleaner buyer qualification before lender outreach",
            "Better expectation-setting around strength and complexity",
            "More disciplined use of calculators and scenario tools",
            "Shareable report output for more serious conversations",
            "A stronger internal workflow for financing-related cases",
          ],
        },
        {
          title: "Why this matters commercially",
          paragraphs: [
            "Every weak financing conversation costs time. Some cost more than time: they reduce confidence, create friction and make a broker look less in control of the process. A product like Waaza helps reduce that risk by improving the structure of the conversation earlier.",
            "That is commercially meaningful because it helps brokers protect focus. Better qualification means better use of attention. Over time, that can improve deal quality, reduce wasted effort and make financing conversations feel like part of a disciplined sales process rather than a vague detour.",
          ],
        },
        {
          title: "What makes the solution credible for brokers",
          paragraphs: [
            "Waaza is stronger for brokers because it does not position itself as a replacement for judgement. It supports judgement. It helps clarify buyer strength, likely complexity and possible next steps, while still leaving room for human interpretation and later specialist work. That balance is important. Brokers need support that feels serious, not support that insults their experience.",
          ],
        },
      ]}
      related={[
        { href: "/solutions/pre-qualification", label: "Pre-Qualification" },
        { href: "/platform/readiness-scoring", label: "Readiness Scoring" },
        { href: "/platform/report-generator", label: "Report Generator" },
        { href: "/case-studies", label: "Case Studies" },
      ]}
    />
  );
}
