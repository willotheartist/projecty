
// app/page.tsx
import type { Metadata } from "next";
import { HomePageClient } from "./components/HomePageClient";

const SITE_URL = "https://www.waaza.co";

export const metadata: Metadata = {
  title: "Waaza — Yacht Financing Intelligence",
  description:
    "Waaza analyses key financial and asset indicators to provide a structured readiness score, indicative financing range, and recommended structuring path for yacht transactions.",
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: "Waaza — Yacht Financing Intelligence",
    description:
      "The financing engine that supports your yacht transactions. Score every buyer, structure every deal, close with confidence.",
    url: SITE_URL,
    siteName: "Waaza",
    type: "website",
    images: [{ url: `${SITE_URL}/hero.png`, width: 1200, height: 630, alt: "Waaza" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waaza — Yacht Financing Intelligence",
    description: "The financing engine that supports your yacht transactions.",
    images: [`${SITE_URL}/hero.png`],
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Waaza",
  url: SITE_URL,
  description: "Yacht financing intelligence platform for yacht brokers, broker networks and finance advisors.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Waaza",
  url: SITE_URL,
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Waaza",
  applicationCategory: "FinanceApplication",
  description: "Yacht financing readiness scoring, deal structuring, and institutional report generation.",
  url: SITE_URL,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP",
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

      <div
        aria-hidden="true"
        style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap" }}
      >
        <h1>The financing engine that supports your yacht transactions.</h1>
        <p>Waaza analyses key financial and asset indicators to provide a structured readiness score, indicative financing range, and recommended structuring path.</p>
        <h2>Score every buyer</h2>
        <p>Replace guesswork with a structured 0-100 financing readiness index calibrated to real lender criteria.</p>
        <h2>Structure every deal</h2>
        <p>Get recommended financing paths — loan, leasing, or hybrid — with jurisdiction and ownership logic encoded.</p>
        <h2>Close with confidence</h2>
        <p>Generate institutional-grade reports that give lenders and buyers clarity before the first submission.</p>
        <h2>Readiness Engine</h2>
        <p>Know if a deal is financeable before you pick up the phone.</p>
        <h2>Report Generator</h2>
        <p>Generate institutional-grade buyer reports in one click.</p>
        <h2>Who it is for</h2>
        <p>Built for yacht brokers, broker networks, and finance advisors who close yacht deals.</p>
        <nav>
          <a href="/wizard">Simulate my financing</a>
          <a href="/yacht-finance-calculator">Yacht Finance Calculator</a>
          <a href="/boat-finance-calculator">Boat Finance Calculator</a>
          <a href="/yacht-financing">Yacht Financing</a>
          <a href="/superyacht-financing">Superyacht Financing</a>
          <a href="/financing">Financing Guide</a>
          <a href="/solutions/yacht-brokers">Solutions for Yacht Brokers</a>
          <a href="/solutions/broker-networks">Broker Networks</a>
          <a href="/solutions/finance-advisors">Finance Advisors</a>
          <a href="/platform/readiness-scoring">Readiness Scoring</a>
          <a href="/platform/report-generator">Report Generator</a>
          <a href="/platform/broker-dashboard">Broker Dashboard</a>
          <a href="/can-you-finance-a-yacht">Can You Finance a Yacht?</a>
          <a href="/how-long-can-you-finance-a-yacht">How Long Can You Finance a Yacht?</a>
          <a href="/about">About</a>
          <a href="/faq">FAQ</a>
          <a href="/blog">Blog</a>
        </nav>
      </div>

      <HomePageClient />
    </>
  );
}
