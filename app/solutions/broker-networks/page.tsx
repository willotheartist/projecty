import type { Metadata } from "next";
import MarketingRichPage from "../../components/MarketingRichPage";

export const metadata: Metadata = {
  title: "Broker Networks | Waaza",
  description:
    "Learn how Waaza supports broker networks with more consistent financing qualification, clearer internal workflows and stronger reporting.",
  alternates: {
    canonical: "/solutions/broker-networks",
  },
};

export default function Page() {
  return (
    <MarketingRichPage
      eyebrow="Solutions"
      title="A financing intelligence layer for broker networks that want more consistency across teams."
      intro="A broker network has a slightly different problem from an individual brokerage. It is not just trying to improve one conversation. It is trying to create better consistency across many conversations, people and offices. Financing quality can vary wildly across teams when every broker handles early qualification differently. Waaza becomes valuable at network level because it helps standardise how readiness, scenario thinking and report-led communication are handled across the organisation."
      primaryCta={{ href: "/partners", label: "Explore partnerships" }}
      secondaryCta={{ href: "/integrations", label: "View integrations" }}
      sections={[
        {
          title: "Why consistency matters more at network level",
          paragraphs: [
            "When a network grows, inconsistency becomes expensive. One office may qualify buyers thoughtfully while another moves too quickly. One broker may frame financing well while another relies on loose instinct. Over time, that creates uneven buyer experiences and inconsistent internal standards.",
            "A product like Waaza helps reduce that problem by introducing a more repeatable way to think about early financing conversations. It does not erase differences in experience or judgement, but it gives teams a shared framework they can work from.",
          ],
        },
        {
          title: "What a network gains from standardisation",
          paragraphs: [
            "Standardisation does not just mean using the same tool. It means aligning how financing conversations are approached. That includes how readiness is explained, how scenario shifts are discussed, how reports are generated and how a case moves from early interest into something more serious.",
            "This has two major benefits. Internally, it creates better process discipline and cleaner handoff between people. Externally, it creates a more coherent client experience. Buyers feel they are dealing with an organisation that knows how to handle financing conversations thoughtfully rather than improvising from broker to broker.",
          ],
          bullets: [
            "More consistent early-stage qualification",
            "A shared language for strength, complexity and next steps",
            "Improved internal workflow discipline",
            "Cleaner buyer experience across different teams or regions",
            "More scalable use of reports and structured outputs",
          ],
        },
        {
          title: "Why this matters strategically for a network",
          paragraphs: [
            "Broker networks win when they can combine strong relationships with repeatable process quality. Waaza helps with the second part. It creates a more coherent financing support layer that can strengthen network operations without flattening the human value of the brokers themselves.",
            "That is a strong strategic position, because it means the product is not competing with the network’s expertise. It is helping the network make that expertise more consistent and easier to operationalise.",
          ],
        },
        {
          title: "Where the solution becomes most visible",
          paragraphs: [
            "The value becomes especially obvious when a network wants to improve internal alignment, roll out a clearer financing qualification framework, or create stronger continuity between public lead capture, broker discussion and internal case handling. Those are the points where inconsistency is most likely to create friction and where Waaza has the most room to help.",
          ],
        },
      ]}
      related={[
        { href: "/solutions/yacht-brokers", label: "Yacht Brokers" },
        { href: "/platform/broker-dashboard", label: "Broker Dashboard" },
        { href: "/platform/case-tracking", label: "Case Tracking" },
        { href: "/partners", label: "Partners" },
      ]}
    />
  );
}
