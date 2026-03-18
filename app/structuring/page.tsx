// app/structuring/page.tsx
// ─────────────────────────────────────────────────────────────
// /structuring/ — Structuring silo hub
// Pillar page anchoring all 17 structuring child pages.
// ─────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import { StructuringSiloShell } from "./_components/StructuringSiloShell";
import type { StructuringPageData } from "@/lib/structuring/types";

export const dynamic = "force-static";
export const revalidate = 86400;

const pageData: StructuringPageData = {
  slug: "structuring",
  tier: 1,
  intent: "informational",

  meta: {
    title: "Yacht Ownership Structuring, VAT & Leasing: Complete Guide | Waaza",
    description:
      "How to structure a yacht purchase — ownership vehicles, VAT implications, Malta and French leasing, flag jurisdiction, and how each decision affects your financing options.",
    canonical: "https://www.waaza.co/structuring/",
    datePublished: "2026-03-18",
    dateModified: "2026-03-18",
  },

  heading: {
    h1: "Yacht Structuring, VAT and Leasing: The Decisions That Shape Every Transaction",
    intro:
      "How you own a yacht matters as much as whether you can afford one. The ownership vehicle, VAT treatment, leasing structure, and flag jurisdiction are not administrative afterthoughts — they determine the total cost of the transaction, the financing options available to you, and the tax exposure you carry for years after the purchase. This hub covers every major structuring decision relevant to yacht buyers, brokers, and their advisers.",
    lastUpdated: "March 2026",
    author: { name: "Waaza Editorial", role: "Yacht Financing Intelligence" },
  },

  toc: [
    { id: "why-structuring-matters", label: "Why structuring decisions matter", level: 2 },
    { id: "ownership-vehicles", label: "Ownership vehicles", level: 2 },
    { id: "vat", label: "VAT and tax considerations", level: 2 },
    { id: "leasing", label: "Leasing structures", level: 2 },
    { id: "flag-jurisdiction", label: "Flag and jurisdiction", level: 2 },
    { id: "financing-implications", label: "How structuring affects financing", level: 2 },
    { id: "faqs", label: "Frequently asked questions", level: 2 },
  ],

  faqs: [
    {
      question: "What does yacht ownership structuring mean?",
      answer:
        "Yacht ownership structuring refers to the decisions made about how a yacht is owned — personally, through a company, an SPV, or an offshore entity — and the related choices around VAT treatment, leasing structures, and flag jurisdiction. These decisions affect the total cost of ownership, the financing options available, and the tax exposure of the owner.",
    },
    {
      question: "Should I buy a yacht personally or through a company?",
      answer:
        "Personal ownership is the simplest structure and preferred by most lenders. Company or SPV ownership can offer tax advantages — particularly around VAT recovery on charter use — but adds complexity to the financing process. Most lenders will finance through an SPV but require additional documentation and may apply different LTV limits. The right structure depends on your tax residency, intended use, and financing requirements.",
    },
    {
      question: "What is Malta yacht leasing and how does it work?",
      answer:
        "Malta yacht leasing is a VAT-efficient structure where a Maltese company leases the yacht to its beneficial owner. The lessee pays VAT only on the portion of the lease attributable to use in EU waters, which can significantly reduce the effective VAT rate compared to outright purchase. The structure must be set up correctly and comply with Maltese tax authority requirements.",
    },
    {
      question: "Do I pay VAT when buying a yacht in Europe?",
      answer:
        "VAT on yacht purchases in the EU depends on where the transaction takes place, the vessel's VAT status, and the buyer's residency and intended use. Yachts in EU waters must have VAT paid or accounted for. Private imports from outside the EU trigger VAT on entry. Leasing structures and charter use can affect the VAT liability significantly.",
    },
    {
      question: "How does ownership structure affect yacht financing?",
      answer:
        "Most marine lenders prefer to lend against personally owned vessels or clean SPV structures. Offshore entities and complex multi-layer ownership structures can limit lender appetite or require specialist private bank financing. The structuring decision should be made before approaching lenders, not after, to avoid having to restructure the ownership mid-transaction.",
    },
    {
      question: "What flag should I register my yacht under?",
      answer:
        "Flag choice affects safety regulations, crew requirements, commercial operations permissions, and how lenders view the asset. Popular flags for private yachts include the UK, Malta, Cayman Islands, and British Virgin Islands. Some lenders have accepted flag lists and will not lend against vessels registered under certain jurisdictions. The flag decision should align with intended cruising area, crew nationality, and financing requirements.",
    },
    {
      question: "When should I make structuring decisions in the buying process?",
      answer:
        "Structuring decisions should be made before the purchase agreement is signed — ideally before serious negotiations begin. Changing the ownership structure mid-transaction is possible but creates complications with the purchase agreement, financing, and VAT treatment. Getting tax and legal advice early is significantly cheaper than unwinding a poorly structured transaction.",
    },
  ],

  relatedPages: [
    { title: "Yacht VAT Explained", href: "/structuring/yacht-vat-explained/", description: "VAT on yacht purchases in full" },
    { title: "Personal vs SPV Ownership", href: "/structuring/personal-vs-spv-yacht-ownership/", description: "Ownership vehicle comparison" },
    { title: "Buying Through a Company", href: "/structuring/buying-a-yacht-through-a-company/", description: "Tax and financing implications" },
    { title: "Malta Yacht Leasing", href: "/structuring/malta-yacht-leasing/", description: "How the Malta structure works" },
    { title: "VAT on Yacht Purchases in Europe", href: "/structuring/vat-on-yacht-purchases-in-europe/", description: "EU VAT rules explained" },
    { title: "How Yacht Financing Works", href: "/financing/how-yacht-financing-works/", description: "Financing alongside structuring" },
    { title: "What Lenders Look For", href: "/financing/what-lenders-look-for-in-yacht-financing/", description: "Lender view on ownership structure" },
    { title: "LTV in Yacht Financing", href: "/financing/ltv-in-yacht-financing/", description: "How structure affects LTV" },
  ],

  breadcrumbs: [
    { name: "Home", href: "/" },
    { name: "Structuring", href: "/structuring/" },
  ],

  cta: {
    heading: "See how your ownership structure affects your financing readiness",
    body: "Waaza's assessment models the financing implications of different ownership structures before you approach a lender.",
    buttonText: "Run a free assessment →",
    buttonHref: "/wizard",
  },

  keywords: {
    primary: "yacht ownership structuring",
    secondary: ["yacht vat", "yacht leasing", "spv yacht ownership", "malta yacht leasing", "yacht flag registration"],
    lsi: ["yacht ownership vehicle", "yacht tax structuring", "marine finance structuring", "yacht purchase structure"],
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
    images: [{ url: "https://www.waaza.co/og/structuring-og.jpg", width: 1200, height: 630, alt: "Yacht structuring, VAT and leasing guide — Waaza" }],
  },
  twitter: { card: "summary_large_image", site: "@waaza", title: pageData.meta.title, description: pageData.meta.description, images: ["https://www.waaza.co/og/structuring-og.jpg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

function ArticleContent() {
  return (
    <>
      <h2 id="why-structuring-matters">Why structuring decisions matter</h2>
      <p>
        The structuring conversation in yacht transactions is frequently left too late. Buyers focus on the
        purchase price, the survey, and the financing — and treat VAT, ownership vehicles, and leasing as
        administrative details to handle at the end. This approach is expensive.
      </p>
      <p>
        A poorly structured transaction can result in an unexpected VAT liability at the point of import,
        a lender declining to finance because the ownership vehicle is unacceptable, or a tax exposure
        that persists for years after the purchase. Conversely, a well-structured transaction can
        legitimately reduce the effective VAT rate, optimise the financing terms, and provide a clean,
        defensible ownership position from day one.
      </p>
      <p>
        The decisions covered in this silo — ownership vehicle, VAT treatment, leasing structure, and
        flag jurisdiction — are interconnected. A choice in one area constrains or enables choices in
        the others. Understanding how they fit together is the foundation of intelligent yacht ownership
        planning.
      </p>

      <h2 id="ownership-vehicles">Ownership vehicles</h2>
      <p>
        The most fundamental structuring question is who — or what — legally owns the yacht. The main
        options are personal ownership, ownership through a special purpose vehicle (SPV), ownership
        through an operating company, and ownership through an offshore entity.
      </p>
      <p>
        <strong>Personal ownership</strong> is the default and the most lender-friendly structure. The
        yacht is owned directly by the individual, financing is straightforward, and the documentation
        requirements are minimal. For buyers with simple tax positions and private use only, personal
        ownership is usually optimal.
      </p>
      <p>
        <strong>SPV ownership</strong> — typically a Maltese or other EU company created solely to own
        the yacht — is common where VAT recovery on charter use is a consideration, or where the buyer
        prefers to keep the asset off their personal balance sheet. Most lenders will finance through an
        SPV, but require additional corporate documentation and may apply slightly different terms.
        See the full guide to{" "}
        <a href="/structuring/personal-vs-spv-yacht-ownership/">personal vs SPV yacht ownership</a>.
      </p>
      <p>
        <strong>Company ownership</strong> — through an existing trading or holding company — is less
        common for purely private yachts and can create complications with personal use benefit-in-kind
        tax treatment. For yachts used genuinely commercially, company ownership may be appropriate.
        See the guide to{" "}
        <a href="/structuring/buying-a-yacht-through-a-company/">buying a yacht through a company</a>.
      </p>

      <h2 id="vat">VAT and tax considerations</h2>
      <p>
        VAT is one of the most significant and most misunderstood cost elements in European yacht
        transactions. The basic principle is that yachts in EU waters must have VAT paid or accounted
        for — but the rate, the timing, and the mechanism by which VAT is applied vary significantly
        depending on where the transaction takes place, the vessel's history, and the buyer's residency.
      </p>
      <p>
        The standard VAT rate on yacht purchases varies by country — 20% in France, 22% in Italy, 18%
        in Malta. On a €2 million yacht, the difference between paying full VAT and structuring through
        a leasing vehicle that reduces the effective rate can be €200,000 or more.
      </p>
      <p>
        For the full picture of how VAT applies to yacht purchases in Europe, see{" "}
        <a href="/structuring/yacht-vat-explained/">yacht VAT explained</a> and the more detailed{" "}
        <a href="/structuring/vat-on-yacht-purchases-in-europe/">guide to VAT on yacht purchases in Europe</a>.
      </p>

      <h2 id="leasing">Leasing structures</h2>
      <p>
        Malta and France both offer VAT leasing structures that allow yacht buyers to reduce the
        effective VAT rate by applying VAT only to the portion of the lease attributable to use in
        EU waters. These structures are legitimate, widely used, and approved by the relevant tax
        authorities — but they require correct setup and ongoing compliance.
      </p>
      <p>
        The <a href="/structuring/malta-yacht-leasing/">Malta yacht leasing structure</a> is currently
        the most widely used in the Mediterranean market, offering effective VAT rates significantly
        below the standard rate. The French equivalent operates on similar principles but through French
        tax authority rules and tends to suit buyers planning extended periods in French waters.
      </p>
      <p>
        Leasing structures interact with financing in important ways. Most lenders are comfortable
        with Malta leasing arrangements, but the financing documentation and security structure differ
        from a straightforward purchase. The structuring decision should be confirmed with both the
        tax adviser and the lender before the structure is established.
      </p>

      <h2 id="flag-jurisdiction">Flag and jurisdiction</h2>
      <p>
        The flag under which a yacht is registered determines the regulatory framework it operates under:
        safety standards, crew certification requirements, the right to commercial operation, and how
        the vessel is perceived by lenders and insurers. Flag choice is not purely administrative —
        it has practical consequences throughout the ownership period.
      </p>
      <p>
        Popular flags for private yachts include the UK (post-Brexit with limitations for EU waters),
        Malta (EU flag, strong for Mediterranean operations), Cayman Islands (respected offshore registry,
        widely accepted by lenders and insurers), and the British Virgin Islands. Each has different
        cost structures, renewal requirements, and implications for charter operations.
      </p>
      <p>
        Some lenders maintain accepted flag lists and will decline to finance vessels registered under
        certain jurisdictions. Confirming lender flag requirements before finalising the registration
        is an important step in the pre-closing checklist.
      </p>

      <h2 id="financing-implications">How structuring affects financing</h2>
      <p>
        Every structuring decision has financing implications. Lenders assess not just the buyer's
        financial profile but the ownership structure, the jurisdiction, and the VAT position of the
        vessel. A transaction that looks financially strong can encounter financing difficulty if the
        ownership structure is unfamiliar to the lender or the VAT position is unclear.
      </p>
      <p>
        The key principle is to align the structuring decision with the financing plan before either
        is finalised. Waaza's readiness assessment models the financing implications of different
        ownership structures — surfacing lender preferences and likely LTV constraints based on the
        proposed structure before the first lender conversation takes place.
      </p>

      <blockquote>
        The structuring conversation should happen before the offer, not after the survey. Every
        decision made at the purchase stage has a cost or a saving that compounds across the
        ownership period.
      </blockquote>
    </>
  );
}

export default function StructuringHubPage() {
  return (
    <StructuringSiloShell data={pageData}>
      <ArticleContent />
    </StructuringSiloShell>
  );
}