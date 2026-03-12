import type { Metadata } from "next";
import MarketingRichPage from "../../components/MarketingRichPage";

export const metadata: Metadata = {
  title: "Buyer Reports | Waaza",
  description:
    "Discover how Waaza buyer reports help communicate financing readiness, complexity and next steps more clearly.",
  alternates: {
    canonical: "/solutions/buyer-reports",
  },
};

export default function Page() {
  return (
    <MarketingRichPage
      eyebrow="Solutions"
      title="Buyer reports that make the financing conversation clearer, more credible and easier to move forward."
      intro="Buyer reports are one of the clearest ways Waaza adds value beyond a basic calculator. A number on its own is easy to dismiss or misunderstand. A structured report is different. It helps explain the financing picture, shows how readiness is currently being interpreted and gives the conversation a more serious commercial form. That benefits buyers, brokers and advisors alike."
      primaryCta={{ href: "/platform/report-generator", label: "See report generator" }}
      secondaryCta={{ href: "/wizard", label: "Generate from intake flow" }}
      sections={[
        {
          title: "Why reports matter to buyers",
          paragraphs: [
            "Many buyers are not struggling with a lack of interest. They are struggling with a lack of clarity. They may know the kind of vessel they want and the kind of lifestyle or use case they are aiming for, but the financing story is still too abstract. A buyer report helps bridge that gap. It creates a clearer, more digestible explanation of where the case currently stands and what may shape the path forward.",
            "That can make the financing conversation feel more grounded and more serious. It also helps reduce the emotional distortion that often appears when people anchor too heavily on a single desired outcome without understanding the broader picture.",
          ],
        },
        {
          title: "Why reports matter to brokers and advisors",
          paragraphs: [
            "Brokers benefit because a report gives them something more structured to work with in conversation. Advisors benefit because a report helps establish a better-informed starting point. In both cases, the output becomes a communication tool as much as a product feature.",
            "This matters because financing conversations often suffer from fragmentation. Some detail is in a broker’s head. Some is in a repayment estimate. Some is implied but never clearly stated. A report helps consolidate that into something more coherent.",
          ],
          bullets: [
            "Turns scattered inputs into clearer communication",
            "Helps explain readiness and complexity in a more credible way",
            "Creates stronger continuity across conversations",
            "Improves the seriousness of buyer-facing discussion",
            "Supports cleaner handoff into later-stage work",
          ],
        },
        {
          title: "What makes a buyer report genuinely useful",
          paragraphs: [
            "A good report should not feel like decorative output. It should help a person understand the financing picture better. That means the report needs to communicate clearly, prioritise the most important signals and make the next step easier to understand.",
            "If the report does that well, it becomes one of the strongest proof points in the product. It shows that Waaza can do more than calculate. It can interpret, organise and communicate financing context in a more useful way.",
          ],
        },
        {
          title: "Why this strengthens the site’s SEO and product story",
          paragraphs: [
            "From an SEO perspective, buyer reports also strengthen the thematic depth of the site. They support related topics like readiness scoring, broker workflow, pre-qualification and financing explanation. From a product perspective, they show that the platform is oriented toward real decision support rather than one-off front-end interactions.",
          ],
        },
      ]}
      related={[
        { href: "/platform/report-generator", label: "Report Generator" },
        { href: "/solutions/yacht-brokers", label: "Yacht Brokers" },
        { href: "/platform/case-tracking", label: "Case Tracking" },
        { href: "/case-studies", label: "Case Studies" },
      ]}
    />
  );
}
