const SITE_URL = "https://www.waaza.co";
const OG_IMAGE = "https://www.waaza.co/hero.png";

import type { Metadata } from "next";
import MarketingRichPage from "../components/MarketingRichPage";

export const metadata: Metadata = {
  title: "Yacht Financing Insights & Product Guides | Waaza",
  description:
    "Waaza articles on yacht financing, readiness scoring, deal structure, broker workflows and the technology behind the platform.",
  alternates: {
    canonical: "/blog",
  },
  keywords: [
    "yacht financing blog",
    "marine finance insights",
    "yacht readiness scoring",
    "yacht broker software",
    "yacht finance technology",
    "waaza blog",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Yacht Financing Insights & Product Guides | Waaza",
    description:
      "Research and product thinking on yacht financing, readiness scoring, deal structure and better broker-side qualification.",
    url: `${SITE_URL}/blog`,
    siteName: "Waaza",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Waaza yacht financing insights" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yacht Financing Insights & Product Guides | Waaza",
    description: "Research and product thinking on yacht financing, readiness, structuring and broker workflows.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return (
    <MarketingRichPage
      eyebrow="Waaza insights"
      title="Yacht financing, structuring and the technology behind better qualification."
      intro="Waaza publishes first-party guides on yacht financing, lender expectations, readiness scoring, structuring and the software workflows that sit behind better financing decisions. The aim is simple: make a complex category easier to understand for buyers, brokers and advisors."
      primaryCta={{ href: "/blog/how-waaza-was-built-wall-and-fifth", label: "How Waaza was built" }}
      secondaryCta={{ href: "/financing", label: "Explore financing guides" }}
      sections={[
        {
          title: "Featured: how Waaza was built",
          paragraphs: [
            "Waaza is a custom yacht financing intelligence platform designed and built by Wall & Fifth. The build case study explains the product architecture, readiness model, current technology stack, database structure, public search architecture and why the platform was built as custom software rather than a generic calculator.",
            "It is a first-party account of the product and technical decisions behind Waaza, with clear detail on the current Next.js, React, TypeScript, Prisma and PostgreSQL implementation.",
          ],
          bullets: [
            "Product and UX architecture",
            "Readiness scoring and assessment logic",
            "Scenario modelling and calculator workflows",
            "Current application technology stack",
            "Search architecture and structured data",
            "Wall & Fifth's role as build partner",
          ],
        },
        {
          title: "Financing and lender research",
          paragraphs: [
            "The financing library focuses on questions that buyers and brokers actually need to answer: how yacht financing works, what lenders assess, how deposits and vessel age affect a case, and how different financing routes compare.",
          ],
        },
        {
          title: "Structuring, ownership and transaction context",
          paragraphs: [
            "Financing rarely exists in isolation. Waaza also publishes explainers on ownership structures, VAT considerations, leasing approaches and the practical differences between personal and company ownership so financing decisions can be understood in context.",
          ],
        },
      ]}
      related={[
        { href: "/blog/how-waaza-was-built-wall-and-fifth", label: "How Waaza was built by Wall & Fifth" },
        { href: "/financing/what-is-yacht-financing", label: "What is yacht financing?" },
        { href: "/platform/readiness-scoring", label: "Readiness scoring" },
        { href: "/yacht-finance-calculator", label: "Yacht finance calculator" },
        { href: "/faq", label: "FAQ" },
        { href: "/about", label: "About Waaza" },
      ]}
    />
  );
}
