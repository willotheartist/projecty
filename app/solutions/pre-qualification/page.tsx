import type { Metadata } from "next";
import MarketingRichPage from "../../components/MarketingRichPage";

export const metadata: Metadata = {
  title: "Pre-Qualification | Waaza",
  description:
    "See how Waaza supports earlier and more structured pre-qualification for yacht financing conversations.",
  alternates: {
    canonical: "/solutions/pre-qualification",
  },
};

export default function Page() {
  return (
    <MarketingRichPage
      eyebrow="Solutions"
      title="Pre-qualification that is actually useful, rather than performative."
      intro="A lot of finance products talk about pre-qualification, but what they often mean is a superficial early-stage filter that tells the user very little. Waaza should mean something more useful. In this context, pre-qualification is about improving the quality of the initial financing conversation. It helps users understand whether a case looks strong, conditional or structurally complex before formal lender outreach starts consuming time and attention."
      primaryCta={{ href: "/platform/readiness-scoring", label: "See readiness scoring" }}
      secondaryCta={{ href: "/wizard", label: "Run intake flow" }}
      sections={[
        {
          title: "What good pre-qualification really does",
          paragraphs: [
            "Good pre-qualification does not pretend to deliver certainty too early. Instead, it clarifies the shape of the case. It helps the broker or buyer understand what currently looks supportive, what introduces complexity and what may need to change before the next stage becomes more productive.",
            "That makes it a communication tool as much as an internal process tool. If done properly, it can reduce false confidence, prevent weak lender outreach and improve how a buyer understands their own financing position.",
          ],
        },
        {
          title: "Why weak pre-qualification is a problem",
          paragraphs: [
            "Weak pre-qualification creates the illusion of progress without providing meaningful direction. It may give a number or a label, but it does not help anyone understand the real shape of the case. That can make conversations sloppier, not stronger.",
            "Waaza is more useful when it treats pre-qualification as a structured judgement layer. It should help users see the difference between a case that is simply promising and a case that is already well-positioned. That distinction is important and often commercially overlooked.",
          ],
          bullets: [
            "Clarifies whether a case looks strong, conditional or complex",
            "Helps brokers guide buyers more credibly",
            "Creates a cleaner bridge into later financing work",
            "Reduces avoidable ambiguity before lender outreach",
            "Improves internal discipline across a team or workflow",
          ],
        },
        {
          title: "Why this is valuable for buyers as well as teams",
          paragraphs: [
            "Buyers benefit because they get a more grounded view of what the financing conversation might involve. That helps them think more clearly about deposit strategy, timing, structure and overall realism. A better-informed buyer is easier to guide and more likely to make stronger decisions.",
          ],
        },
        {
          title: "Where Waaza fits in the pre-qualification journey",
          paragraphs: [
            "Waaza fits between vague curiosity and formal lender engagement. It helps organise the conversation in that messy middle space where the potential value is high but the framing is often weak. That is exactly where pre-qualification becomes most useful.",
          ],
        },
      ]}
      related={[
        { href: "/solutions/yacht-brokers", label: "Yacht Brokers" },
        { href: "/platform/readiness-scoring", label: "Readiness Scoring" },
        { href: "/faq", label: "FAQ" },
        { href: "/case-studies", label: "Case Studies" },
      ]}
    />
  );
}
