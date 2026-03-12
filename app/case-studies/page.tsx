import type { Metadata } from "next";
import MarketingRichPage from "../components/MarketingRichPage";

export const metadata: Metadata = {
  title: "Case Studies | Waaza",
  description:
    "Explore how Waaza can support buyer qualification, broker workflows, financing readiness and better pre-lender conversations.",
  alternates: {
    canonical: "/case-studies",
  },
};

export default function Page() {
  return (
    <MarketingRichPage
      eyebrow="Case Studies"
      title="The kinds of commercial situations where Waaza becomes genuinely valuable."
      intro="Case studies should eventually become one of the strongest trust layers on the site, because they show how the platform helps in real workflows rather than abstract theory. This page acts as the hub for that story. It explains the types of moments where Waaza matters most: when buyer interest needs to become more concrete, when brokers want better qualification discipline, and when an advisor needs a cleaner starting point before deeper work begins."
      primaryCta={{ href: "/documentation", label: "Read documentation" }}
      secondaryCta={{ href: "/about", label: "About Waaza" }}
      sections={[
        {
          title: "A buyer is interested, but the financing story is weak",
          paragraphs: [
            "This is a classic early-stage problem. The buyer may have genuine intent, but the conversation is still vague. They know roughly what they want, but not whether the structure is realistic, how deposit size changes the picture or what kind of profile they are presenting. A product like Waaza is useful here because it creates a more disciplined beginning without pretending to finalise anything too early.",
          ],
        },
        {
          title: "A broker wants fewer dead-end conversations",
          paragraphs: [
            "Brokers often carry the cost of weak qualification. They spend time discussing financing with buyers who may not be properly prepared, or they begin lender conversations before a case is coherent enough to be productive. Waaza helps reduce that by creating earlier clarity around strength, complexity and next steps.",
            "That does not mean everything becomes automatic. It means the broker starts from a better place. And in a transaction-led business, that alone can be extremely valuable.",
          ],
        },
        {
          title: "An advisor needs a clearer foundation",
          paragraphs: [
            "Advisors add the most value when they are not forced to begin from total ambiguity. If a case arrives with some structure already in place, including a clearer readiness signal and better repayment context, advisory conversations become sharper and more productive. That is another strong use case for the platform.",
          ],
        },
      ]}
      related={[
        { href: "/about", label: "About Waaza" },
        { href: "/partners", label: "Partners" },
        { href: "/blog", label: "Blog" },
      ]}
    />
  );
}
