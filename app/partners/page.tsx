const SITE_URL = "https://www.waaza.co";
const OG_IMAGE = "https://www.waaza.co/hero.png";


import type { Metadata } from "next";
import MarketingRichPage from "../components/MarketingRichPage";

export const metadata: Metadata = {
  title: "Partners | Waaza",
  description:
    "Explore partnership opportunities with Waaza for brokers, networks, advisors and operators working around yacht financing conversations.",
  alternates: {
    canonical: "/partners",
  },
  keywords: ["waaza partners", "yacht financing partnership", "broker network partnership", "marine finance integration"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    title: "Partners | Waaza",
    description: "Explore partnership opportunities with Waaza for brokers, networks, advisors and operators working around yacht financing conversations.",
    url: `${SITE_URL}/partners`,
    siteName: "Waaza",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Waaza partners" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partners | Waaza",
    description: "Partnership opportunities with Waaza for brokers, networks and advisors.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return (
    <MarketingRichPage
      eyebrow="Partners"
      title="Partnerships for teams that want cleaner, earlier and more structured financing conversations."
      intro="Waaza is most useful when it sits inside real commercial workflows. That makes partnerships a meaningful part of the growth story. Brokerages, broker networks, advisors and other operators around the yacht transaction ecosystem can all benefit from a product that helps improve qualification quality before financing discussions become expensive, repetitive or unfocused."
      primaryCta={{ href: "/about", label: "About Waaza" }}
      secondaryCta={{ href: "/integrations", label: "View integrations" }}
      sections={[
        {
          title: "What a good Waaza partnership looks like",
          paragraphs: [
            "A strong partnership should improve something operationally important. It should not just add a badge, a superficial calculator or another marketing toy. The product is most valuable when it helps a partner qualify buyers better, structure conversations earlier or create clearer handoffs into advisory or lender processes.",
            "That means the best partners are usually the ones already living inside those problems. Brokers want fewer weak conversations. Networks want more consistency across teams. Advisors want cases that arrive with better framing. Those are the kinds of environments where Waaza becomes genuinely useful.",
          ],
        },
        {
          title: "Why partnerships matter strategically",
          paragraphs: [
            "Partnerships can accelerate both trust and distribution. In categories where deals are relationship-heavy, the right partner can do more than drive traffic. They can validate the product’s usefulness inside real workflows. Over time, that can create a stronger growth channel than content alone.",
            "At the same time, the partnership story should remain disciplined. Waaza should partner where it clearly improves process quality. It should avoid becoming a generic label attached to anything vaguely adjacent to finance.",
          ],
        },
        {
          title: "Who should be interested",
          paragraphs: [
            "Brokerages, broker groups, financing advisors and workflow operators who want stronger pre-lender conversations are the most obvious fit. Any team looking to turn raw buyer interest into something more structured is likely to understand the value quickly.",
          ],
        },
      ]}
      related={[
        { href: "/about", label: "About Waaza" },
        { href: "/documentation", label: "Documentation" },
        { href: "/case-studies", label: "Case Studies" },
      ]}
    />
  );
}
