// app/structuring/malta-yacht-leasing/page.tsx
// ─────────────────────────────────────────────────────────────
// /structuring/malta-yacht-leasing/
// Tier 1 · ~1,000/mo · Low competition — zero meaningful competition
// Primary KW: malta yacht leasing
// Waaza's sharpest content — nobody covers this with financing intelligence
// ─────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import Image from "next/image";
import { StructuringSiloShell } from "../_components/StructuringSiloShell";
import type { StructuringPageData } from "@/lib/structuring/types";

export const dynamic = "force-static";
export const revalidate = 86400;

const pageData: StructuringPageData = {
  slug: "malta-yacht-leasing",
  tier: 1,
  intent: "commercial",

  meta: {
    title: "Malta Yacht Leasing: How the VAT Structure Works in 2026 | Waaza",
    description:
      "A clear explanation of the Malta yacht leasing structure — how it reduces VAT, who it suits, how it interacts with financing, and what the setup process involves.",
    canonical: "https://www.waaza.co/structuring/malta-yacht-leasing/",
    datePublished: "2026-03-18",
    dateModified: "2026-03-18",
  },

  heading: {
    h1: "Malta Yacht Leasing: How the VAT Structure Works and When to Use It",
    intro:
      "The Malta yacht leasing structure is the most widely used mechanism for reducing VAT on yacht purchases in the European market. It is legitimate, published by Malta's tax authority, and accepted by mainstream marine lenders and insurers. On a €3 million yacht, it can reduce the VAT liability by €200,000 or more. This guide explains exactly how it works, who it suits, and what is required to set it up correctly.",
    lastUpdated: "March 2026",
    author: { name: "Waaza Editorial", role: "Yacht Financing Intelligence" },
  },

  toc: [
    { id: "how-it-works", label: "How the Malta leasing structure works", level: 2 },
    { id: "effective-rates", label: "Effective VAT rates by vessel length", level: 2 },
    { id: "who-it-suits", label: "Who the structure suits", level: 2 },
    { id: "setup-process", label: "The setup process", level: 2 },
    { id: "financing", label: "How it interacts with financing", level: 2 },
    { id: "compliance", label: "Ongoing compliance obligations", level: 2 },
    { id: "vs-personal", label: "Malta leasing vs standard purchase", level: 2 },
    { id: "faqs", label: "Frequently asked questions", level: 2 },
  ],

  faqs: [
    {
      question: "What is the Malta yacht leasing structure?",
      answer:
        "The Malta leasing structure is a VAT planning arrangement in which a Maltese company leases a yacht to the beneficial owner. VAT is charged only on the portion of the lease attributable to use in EU waters — not on the full vessel value. Because yachts spend time in international waters where EU VAT does not apply, the effective VAT base is significantly reduced. The arrangement is approved by Malta's Commissioner for Revenue.",
    },
    {
      question: "How much VAT does the Malta leasing structure save?",
      answer:
        "The saving depends on the vessel's length and value. Malta publishes tables setting the percentage of the lease attributable to EU water use. For yachts over 24 metres, the EU-attributable percentage is 30%, resulting in an effective VAT rate of 5.4% (30% × 18%). On a €3 million yacht, the standard VAT would be €540,000. The leasing rate of 5.4% produces a charge of approximately €162,000 — a saving of €378,000.",
    },
    {
      question: "Is Malta yacht leasing legal?",
      answer:
        "Yes. The Malta leasing structure is an approved arrangement published and regulated by Malta's Commissioner for Revenue. It is not a tax avoidance scheme — it is a legitimate recognition that yachts operate partly outside EU waters where EU VAT does not apply. The structure has been in place for many years and is accepted by the EU Commission as consistent with EU VAT law.",
    },
    {
      question: "Do I need a Maltese company to use the Malta leasing structure?",
      answer:
        "Yes. The structure requires a company incorporated in Malta — typically a single-asset SPV — to act as the lessor. This company is the legal owner of the yacht during the lease period. The beneficial owner leases the yacht from the Maltese company and pays a monthly lease fee on which VAT is charged. The setup of the Maltese company requires specialist legal advice.",
    },
    {
      question: "Can I finance a yacht through the Malta leasing structure?",
      answer:
        "Yes. Most specialist marine lenders and private banks are familiar with the Malta leasing structure and will finance purchases structured this way. The financing is typically provided to the Maltese SPV, which owns the vessel, with the beneficial owner providing a personal guarantee. The lender takes a charge over the vessel. The documentation requirements are more complex than for a straightforward personal purchase.",
    },
    {
      question: "How long does the Malta leasing structure last?",
      answer:
        "The lease is typically structured over a period of 36 to 60 months. At the end of the lease, the beneficial owner exercises an option to purchase the yacht from the Maltese company for a nominal sum — typically €1. The company is then dissolved, and the beneficial owner takes personal ownership of the vessel with its Malta VAT paid status.",
    },
    {
      question: "What happens to the Malta leasing structure if I sell the yacht?",
      answer:
        "If the yacht is sold during the lease period, the lease is terminated early and the VAT position must be settled. The sale can be structured either as a sale of the yacht itself or as a sale of the shares of the Maltese SPV — the latter can simplify the transaction for the buyer. Specialist advice is required to manage the VAT implications of an early termination.",
    },
  ],

  relatedPages: [
    { title: "Yacht VAT Explained", href: "/structuring/yacht-vat-explained/", description: "VAT fundamentals before the Malta structure" },
    { title: "VAT on Yacht Purchases in Europe", href: "/structuring/vat-on-yacht-purchases-in-europe/", description: "Country-by-country VAT rates" },
    { title: "Personal vs SPV Ownership", href: "/structuring/personal-vs-spv-yacht-ownership/", description: "The SPV that underpins Malta leasing" },
    { title: "Structuring Hub", href: "/structuring/", description: "All structuring topics" },
    { title: "What Lenders Look For", href: "/financing/what-lenders-look-for-in-yacht-financing/", description: "Lender view on leasing structures" },
    { title: "How Yacht Financing Works", href: "/financing/how-yacht-financing-works/", description: "Financing alongside the leasing structure" },
    { title: "LTV in Yacht Financing", href: "/financing/ltv-in-yacht-financing/", description: "How leasing affects LTV" },
  ],

  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Structuring", href: "/structuring/" },
    { name: "Malta Yacht Leasing", href: "/structuring/malta-yacht-leasing/" },
  ],

  cta: {
    heading: "See how Malta leasing affects your financing options",
    body: "Waaza models the financing implications of the Malta leasing structure — LTV, lender appetite, and documentation — before you approach a single bank.",
    buttonText: "Run a free assessment →",
    buttonHref: "/wizard",
  },

  keywords: {
    primary: "malta yacht leasing",
    secondary: ["malta yacht vat leasing", "malta leasing structure yacht", "yacht leasing malta vat", "malta boat leasing vat"],
    lsi: ["malta commissioner for revenue yacht", "malta spv yacht", "yacht vat reduction malta", "eu yacht leasing structure"],
  },
};

export const metadata: Metadata = {
  title: pageData.meta.title,
  description: pageData.meta.description,
  alternates: { canonical: pageData.meta.canonical },
  openGraph: {
    title: pageData.meta.title,
    description: pageData.meta.description,
    url: pageData.meta.canonical,
    siteName: "Waaza",
    locale: "en_GB",
    type: "article",
    images: [{ url: "https://www.waaza.co/og/malta-yacht-leasing-og.jpg", width: 1200, height: 630, alt: "Malta yacht leasing structure guide — Waaza" }],
  },
  twitter: { card: "summary_large_image", site: "@waaza", title: pageData.meta.title, description: pageData.meta.description, images: ["https://www.waaza.co/og/malta-yacht-leasing-og.jpg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

function ArticleContent() {
  return (
    <>
      <h2 id="how-it-works">How the Malta leasing structure works</h2>
      <p>
        The Malta yacht leasing structure operates on a straightforward principle: EU VAT applies only
        to the use of the yacht in EU waters, not to its use in international waters. Since most yachts
        of any significant size spend meaningful time outside EU territorial waters — on offshore passages,
        in the Atlantic, or in non-EU waters — the effective VAT base is lower than the vessel's full value.
      </p>
      <p>
        The mechanism works as follows. A Maltese company — typically an SPV created for this purpose —
        purchases the yacht and becomes its legal owner. The beneficial owner then enters into a lease
        agreement with the Maltese company, paying a monthly lease fee. VAT is charged on each lease
        payment, but only on the portion of the lease attributable to EU water use.
      </p>
      <p>
        Malta's Commissioner for Revenue publishes tables setting out what percentage of each lease
        payment is treated as attributable to EU waters, based on the vessel's length. The resulting
        effective VAT rate is significantly below the standard Maltese rate of 18%.
      </p>
      <p>
        At the end of the lease period — typically three to five years — the beneficial owner exercises
        a purchase option, acquiring the vessel from the Maltese SPV for a nominal sum. The vessel
        then has Malta VAT paid status and can be sold or operated freely within the EU.
      </p>

      <h2 id="effective-rates">Effective VAT rates by vessel length</h2>
      <p>
        Malta's Commissioner for Revenue publishes the following EU-water-use percentages, which
        determine the effective VAT rate under the leasing structure:
      </p>

      <table>
        <thead>
          <tr>
            <th>Vessel length</th>
            <th>EU use %</th>
            <th>Effective VAT rate</th>
            <th>VAT on €1m value</th>
            <th>Standard VAT (18%)</th>
            <th>Saving</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Up to 7.5m</td>
            <td>90%</td>
            <td>16.2%</td>
            <td>€162,000</td>
            <td>€180,000</td>
            <td>€18,000</td>
          </tr>
          <tr>
            <td>7.5m – 12m</td>
            <td>80%</td>
            <td>14.4%</td>
            <td>€144,000</td>
            <td>€180,000</td>
            <td>€36,000</td>
          </tr>
          <tr>
            <td>12m – 16m</td>
            <td>60%</td>
            <td>10.8%</td>
            <td>€108,000</td>
            <td>€180,000</td>
            <td>€72,000</td>
          </tr>
          <tr>
            <td>16m – 24m</td>
            <td>40%</td>
            <td>7.2%</td>
            <td>€72,000</td>
            <td>€180,000</td>
            <td>€108,000</td>
          </tr>
          <tr>
            <td>Over 24m</td>
            <td>30%</td>
            <td>5.4%</td>
            <td>€54,000</td>
            <td>€180,000</td>
            <td>€126,000</td>
          </tr>
        </tbody>
      </table>

      <p>
        The structure becomes increasingly compelling as vessel size increases. For the largest yachts,
        the saving is transformative — on a €5 million yacht over 24 metres, the Malta structure saves
        approximately €630,000 compared to a standard purchase at Malta's 18% rate, or significantly
        more compared to higher-rate jurisdictions like Italy or Greece.
      </p>

      <Image
        src="/structuring/waaza-insurance-6.png"
        alt="Illustration of the Malta yacht leasing structure showing how VAT is applied only to the EU water use portion of the lease payment"
        width={1080}
        height={720}
        style={{ width: "100%", height: "auto", display: "block", borderRadius: 16, margin: "32px 0" }}
      />

      <h2 id="who-it-suits">Who the Malta leasing structure suits</h2>
      <p>
        The Malta leasing structure is most compelling for:
      </p>
      <ul>
        <li>
          <strong>Vessels over 12 metres:</strong> Below this size, the saving relative to the setup
          cost and administrative complexity is less compelling. Above 12 metres — and especially above
          16 metres — the VAT saving becomes significant.
        </li>
        <li>
          <strong>EU-based buyers:</strong> The structure is designed for buyers who intend to keep
          the vessel in EU waters and need to manage EU VAT exposure. Non-EU residents with vessels
          primarily outside EU waters may have simpler alternatives.
        </li>
        <li>
          <strong>Buyers comfortable with the SPV structure:</strong> The Malta leasing structure
          requires a Maltese company, corporate administration, and a lease agreement. Buyers who
          want simplicity above all may prefer a straightforward purchase even at the higher VAT rate.
        </li>
        <li>
          <strong>Buyers whose lender accepts the structure:</strong> Most specialist marine lenders
          do, but this should be confirmed before the structure is established.
        </li>
      </ul>
      <p>
        It is less suited to buyers purchasing very small vessels where the saving is modest, non-EU
        residents with no EU VAT exposure, or buyers who want the simplest possible ownership structure.
      </p>

      <h2 id="setup-process">The setup process</h2>
      <p>
        Setting up a Malta leasing structure correctly requires specialist legal and tax advisers with
        specific experience in Maltese maritime law and the Commissioner for Revenue's guidelines.
        The typical process involves:
      </p>
      <ul>
        <li>Incorporating a Maltese SPV — typically a private limited company</li>
        <li>Registering the SPV for VAT in Malta</li>
        <li>Entering into a lease agreement between the SPV (as lessor) and the beneficial owner (as lessee)</li>
        <li>Registering the yacht under the Malta flag (or another accepted flag, depending on the financing)</li>
        <li>Making the first lease payment and beginning the VAT accounting process</li>
      </ul>
      <p>
        The total setup cost — legal fees, company formation, registration — typically runs to
        €5,000–€15,000 depending on the complexity of the structure and the adviser used. This is
        a one-time cost that is typically a small fraction of the VAT saving achieved.
      </p>
      <p>
        The process takes four to six weeks from instruction to completion in normal circumstances.
        For buyers working to a tight completion timeline, this needs to be factored into the
        purchase planning.
      </p>

      <h2 id="financing">How the Malta leasing structure interacts with financing</h2>
      <p>
        Most specialist marine lenders and private banks are familiar with and accept the Malta leasing
        structure. The financing is provided to the Maltese SPV — the legal owner of the vessel — with
        the beneficial owner providing a personal guarantee as the primary credit support.
      </p>
      <p>
        The lender takes a charge over the vessel, registered in Malta (or the vessel's flag jurisdiction).
        The documentation pack is more complex than for a straightforward personal purchase:
        the lender needs to review the lease agreement, the SPV's corporate documents, the beneficial
        ownership structure, and the VAT accounting position.
      </p>
      <p>
        LTV limits for leasing-structured purchases are generally consistent with personal ownership
        for lenders familiar with the structure. Some lenders apply a small additional margin for the
        complexity, but this is not universal. The key is to confirm the lender's appetite for the
        Malta structure before the structure is established — not after.
      </p>
      <p>
        For the full picture of what lenders require in this context, see{" "}
        <a href="/financing/what-lenders-look-for-in-yacht-financing/">what lenders look for</a> and
        the guide to <a href="/structuring/personal-vs-spv-yacht-ownership/">SPV ownership and financing</a>.
      </p>

      <h2 id="compliance">Ongoing compliance obligations</h2>
      <p>
        The Malta leasing structure is not a one-time arrangement — it carries ongoing obligations
        throughout the lease period:
      </p>
      <ul>
        <li>Monthly VAT returns filed with the Maltese Commissioner for Revenue</li>
        <li>Monthly lease payments made from the beneficial owner to the SPV</li>
        <li>Annual accounts filed for the Maltese SPV</li>
        <li>Registered office and agent maintained in Malta</li>
        <li>The yacht must not be used in ways inconsistent with the declared EU-water-use percentage</li>
      </ul>
      <p>
        The annual cost of maintaining the structure — VAT accounting, company administration —
        is typically €3,000–€8,000 per year, depending on the service provider. This is a recurring
        cost that must be factored into the ownership budget alongside the VAT saving.
      </p>

      <h2 id="vs-personal">Malta leasing vs standard purchase — the numbers</h2>
      <p>
        The decision between a Malta leasing structure and a straightforward purchase is ultimately
        a numbers question. The leasing structure has costs — setup, ongoing administration, and the
        complexity of the SPV — that must be set against the VAT saving it produces.
      </p>
      <p>
        For a €2 million yacht over 16 metres, the comparison looks approximately like this:
      </p>
      <table>
        <thead>
          <tr>
            <th>Cost item</th>
            <th>Standard purchase (Malta 18%)</th>
            <th>Malta leasing structure</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>VAT / lease VAT</td>
            <td>€360,000</td>
            <td>€144,000 (7.2%)</td>
          </tr>
          <tr>
            <td>Setup costs</td>
            <td>—</td>
            <td>€10,000</td>
          </tr>
          <tr>
            <td>Annual admin (5 years)</td>
            <td>—</td>
            <td>€25,000</td>
          </tr>
          <tr>
            <td>Total additional cost</td>
            <td>€360,000</td>
            <td>€179,000</td>
          </tr>
          <tr>
            <td>Net saving</td>
            <td>—</td>
            <td>€181,000</td>
          </tr>
        </tbody>
      </table>
      <p>
        At this vessel size and value, the Malta leasing structure saves approximately €181,000 over
        a five-year period. For larger vessels at higher values — and compared to higher-rate jurisdictions
        like Italy or Greece rather than Malta's base rate — the saving is considerably more compelling.
      </p>

      <blockquote>
        The Malta leasing structure is not complicated — but it is specific. It requires the right
        advisers, the right documentation, and lender confirmation before the structure is committed
        to. Done correctly, it is one of the most defensible VAT planning tools available to European
        yacht buyers.
      </blockquote>
    </>
  );
}

export default function MaltaYachtLeasingPage() {
  return (
    <StructuringSiloShell data={pageData}>
      <ArticleContent />
    </StructuringSiloShell>
  );
}