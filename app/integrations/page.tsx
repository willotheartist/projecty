const SITE_URL = "https://www.waaza.co";
const OG_IMAGE = "https://www.waaza.co/hero.png";


import type { Metadata } from "next";
import MarketingRichPage from "../components/MarketingRichPage";

export const metadata: Metadata = {
  title: "Integrations | Waaza",
  description:
    "Learn how Waaza fits into broker workflows, website lead capture, financing qualification and report-led deal processes.",
  alternates: {
    canonical: "/integrations",
  },
  keywords: ["waaza integrations", "yacht broker integration", "marine finance API", "yacht financing widget", "broker workflow integration"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    title: "Integrations | Waaza",
    description: "Learn how Waaza fits into broker workflows, website lead capture, financing qualification and report-led deal processes.",
    url: `${SITE_URL}/integrations`,
    siteName: "Waaza",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Waaza integrations" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrations | Waaza",
    description: "How Waaza fits into broker workflows, lead capture and financing qualification.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return (
    <MarketingRichPage
      eyebrow="Integrations"
      title="Integrations that make Waaza feel like part of the workflow, not another isolated tool."
      intro="The strongest product integrations do not force teams to create entirely new habits. They sit inside the moments that already matter. For Waaza, those moments usually appear when buyer interest starts to become commercially meaningful: someone wants to understand whether a purchase is realistic, a broker wants to qualify a lead more seriously, or an advisor wants a cleaner starting point before structuring work begins. The role of integrations is to make Waaza useful exactly there."
      primaryCta={{ href: "/documentation", label: "Read documentation" }}
      secondaryCta={{ href: "/widget", label: "View widget" }}
      sections={[
        {
          title: "Where Waaza integrations create the most value",
          paragraphs: [
            "A yacht financing product is most valuable when it appears at the point of decision, not hidden in a disconnected back office. On public-facing websites, Waaza can help turn vague buyer curiosity into a more structured financing conversation. Inside broker workflows, it can help qualify cases before they move too far into the pipeline. In report-driven processes, it can help transform loose assumptions into something more coherent and easier to share.",
            "This means the integration story should focus on commercially relevant surfaces. A website widget matters because it captures real buyer intent. A broker-facing workflow matters because it improves the quality of qualification. A report export matters because it helps make a case easier to present, explain and advance.",
          ],
          bullets: [
            "Website and widget-led qualification journeys",
            "Internal broker workflow integration",
            "Scenario and repayment exploration touchpoints",
            "Report generation and sharing flows",
            "Embedded financing intelligence in lead handling",
          ],
        },
        {
          title: "Why integration quality matters so much here",
          paragraphs: [
            "Poor integration turns a useful product into an extra chore. That is especially dangerous in a sales-led category where teams already have too many moving parts. If Waaza feels like one more dashboard that has to be manually checked, it will lose momentum. If it feels like a natural layer inside buyer and broker conversations, it becomes far more valuable.",
            "That is why the best integration philosophy is not just about APIs or technical flexibility. It is about product placement. Waaza should appear where it strengthens judgement, reduces wasted outreach and improves the handoff from curiosity to real financing discussion.",
          ],
        },
        {
          title: "What good implementation should achieve",
          paragraphs: [
            "A good implementation should create faster clarity, better internal consistency and stronger external conversations. It should help users understand not just a number, but a financing story. That includes how deposit size changes the picture, how vessel age affects appetite, why intended use matters, and whether a case feels straightforward or meaningfully complex.",
            "In practice, that means implementation should always serve a commercial objective: qualifying better, advising better, or communicating better. Anything less becomes decorative technology instead of useful infrastructure.",
          ],
        },
      ]}
      related={[
        { href: "/documentation", label: "Documentation" },
        { href: "/faq", label: "FAQ" },
        { href: "/case-studies", label: "Case Studies" },
      ]}
    />
  );
}
