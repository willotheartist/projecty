
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { ReactNode } from "react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.waaza.co";

const title = "How Much Yacht Can I Afford? Budget Guide | Waaza";
const description =
  "How much yacht can I afford? Model deposit, finance, berth costs, maintenance, insurance and annual ownership so you can set a realistic yacht budget before shopping.";

const C = {
  bg: "#f4f3ef",
  white: "#ffffff",
  accent: "#FFF86C",
  accentHover: "#f2ee69",
  accentPale: "#fffde3",
  black: "#0a0a0a",
  gray1: "#191919",
  gray2: "#4b5563",
  gray3: "#6b7280",
  gray4: "#9ca3af",
  gray5: "#d1d5db",
  gray6: "#e7e5df",
  gray7: "#f7f6f1",
  line: "#dfddd6",
};

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "how much yacht can i afford",
    "yacht affordability",
    "yacht budget calculator",
    "yacht ownership costs",
    "how much boat can i afford",
    "yacht finance affordability",
    "yacht payment calculator",
    "yacht deposit budget",
  ],
  authors: [{ name: "Waaza" }],
  alternates: {
    canonical: "/assessment/how-much-yacht-can-i-afford",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: "/assessment/how-much-yacht-can-i-afford",
    siteName: "Waaza",
    locale: "en_GB",
    type: "article",
    images: [
      {
        url: "/home/waaza-yacht-financing-tool--3.jpg",
        width: 1200,
        height: 630,
        alt: "How much yacht can I afford guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/home/waaza-yacht-financing-tool--3.jpg"],
  },
};

const toc = [
  { id: "how-to-calculate", label: "How do you calculate how much yacht you can afford?" },
  { id: "income-net-worth", label: "What percentage of income or net worth should go into a yacht?" },
  { id: "ownership-costs", label: "What does yacht ownership actually cost each year?" },
  { id: "sample-budgets", label: "How much yacht can different budgets realistically support?" },
  { id: "hidden-costs", label: "What hidden costs make yachts less affordable than they look?" },
  { id: "cash-vs-finance", label: "Should you buy a yacht with cash or finance it?" },
  { id: "what-changes", label: "What changes what yacht you can afford?" },
  { id: "questions", label: "What questions should you ask before setting your budget?" },
  { id: "faq", label: "Frequently asked questions" },
  { id: "bottom-line", label: "The bottom line" },
];

const faqs = [
  {
    question: "What percentage of my income should I spend on a yacht?",
    answer:
      "Total annual yacht costs—loan payments, insurance, dockage, maintenance, fuel and repairs—should usually stay under 10-15% of gross annual income for comfortable ownership. If you already carry major debt or are behind on retirement saving, 5-10% is a safer ceiling.",
  },
  {
    question: "How much does it really cost to own a yacht annually?",
    answer:
      "Expect total annual ownership costs of roughly 15-25% of purchase price for actively used yachts. A £300,000 yacht can easily cost £45,000-75,000 a year once finance, insurance, dockage, maintenance, fuel and repairs are counted together.",
  },
  {
    question: "Can I afford a yacht making £150,000 a year?",
    answer:
      "Possibly, but usually only a modest and simpler yacht. At £150,000 annual income, a comfortable all-in ownership budget is often around £15,000-22,500 a year. That may support a smaller outright purchase or a conservative financed entry point, not a larger newer yacht.",
  },
  {
    question: "Should I use the 10% of net worth rule?",
    answer:
      "It is a useful starting point, especially for cash buyers, but it is not enough on its own. Income still determines whether you can carry annual ownership costs comfortably. Net worth helps frame the asset decision; income helps test the ownership decision.",
  },
  {
    question: "How much should I budget for yacht maintenance?",
    answer:
      "Budget at least 10% of yacht value annually for routine maintenance and repairs. Older yachts, more complex systems and deferred-maintenance boats often require 12-15% or more. Keep a separate reserve for heavier periodic costs like engines, generators or major electronics upgrades.",
  },
  {
    question: "Is it cheaper to charter than own?",
    answer:
      "For many buyers using a yacht 30 days a year or less, yes. Ownership carries heavy fixed costs even when usage is low. Chartering often makes more financial sense until usage is high enough, or until availability and control become more valuable than pure cost efficiency.",
  },
  {
    question: "Can I afford a yacht if I’m still paying my mortgage?",
    answer:
      "Yes, but your mortgage has to be in the same affordability model. Total debt service across mortgage, yacht finance and any other commitments should usually stay below about 40-45% of gross income if you want the structure to remain comfortable.",
  },
  {
    question: "How does yacht age affect what I can afford?",
    answer:
      "Older yachts may cost less to buy but often more to own. They can need larger deposits, shorter loan terms, higher rates, heavier maintenance and more repair reserve. A cheaper purchase price does not automatically mean a cheaper ownership picture.",
  },
  {
    question: "Should I buy less yacht now and upgrade later?",
    answer:
      "Usually yes. A yacht that fits your budget comfortably is generally used more, maintained better and enjoyed more than a larger yacht that constantly feels expensive to operate.",
  },
];

const budgetCards = [
  {
    title: "£150,000 yacht",
    meta: "15-20 years old, roughly 35-40 feet",
    bullets: [
      "Loan payment (20% down, 6.5%, 12 years): £1,200/month = £14,400/year",
      "Insurance: £2,000-3,000/year",
      "Dockage: £4,000-8,000/year",
      "Maintenance: £15,000/year",
      "Fuel: £3,000-6,000/year",
    ],
    total: "£38,400-46,400",
    income: "£250,000-300,000+",
  },
  {
    title: "£300,000 yacht",
    meta: "8-12 years old, roughly 45-50 feet",
    bullets: [
      "Loan payment (20% down, 6.5%, 15 years): £2,200/month = £26,400/year",
      "Insurance: £4,000-8,000/year",
      "Dockage: £6,000-12,000/year",
      "Maintenance: £30,000/year",
      "Fuel: £5,000-10,000/year",
    ],
    total: "£71,400-86,400",
    income: "£475,000-575,000+",
  },
  {
    title: "£600,000 yacht",
    meta: "5-8 years old, roughly 55-60 feet",
    bullets: [
      "Loan payment (20% down, 6%, 18 years): £3,900/month = £46,800/year",
      "Insurance: £8,000-15,000/year",
      "Dockage: £10,000-20,000/year",
      "Maintenance: £60,000/year",
      "Fuel: £8,000-15,000/year",
    ],
    total: "£132,800-156,800",
    income: "£885,000-1,000,000+",
  },
];

const relatedPages = [
  {
    href: "/assessment/yacht-loan-calculator",
    title: "Yacht loan calculator",
    body: "Model deposit, term and monthly payment scenarios before you start shopping.",
  },
  {
    href: "/assessment/monthly-yacht-payment-calculator",
    title: "Monthly yacht payment calculator",
    body: "Translate a purchase into the recurring commitment you would actually carry.",
  },
  {
    href: "/assessment/yacht-deposit-calculator",
    title: "Yacht deposit calculator",
    body: "See how more cash down changes risk, payment size and lender comfort.",
  },
  {
    href: "/financing/how-vessel-age-affects-financing",
    title: "How yacht age affects financing",
    body: "Understand why older yachts can look cheaper upfront but cost more to own.",
  },
  {
    href: "/costs/true-cost-of-owning-a-yacht",
    title: "True cost of owning a yacht",
    body: "Go deeper on insurance, berthing, maintenance, fuel and recurring ownership spend.",
  },
];

function absoluteUrl(path: string) {
  if (!path) return SITE_URL;
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function ArrowRightIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function CompassIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m16.2 7.8-2.1 6.3-6.3 2.1 2.1-6.3z" />
    </svg>
  );
}

function WalletIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h14" />
      <path d="M3 7h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
      <path d="M16 14h.01" />
    </svg>
  );
}

function PulseIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 12h-4l-3 7-4-14-3 7H2" />
    </svg>
  );
}

function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="page-section reveal" data-section>
      <h2>{title}</h2>
      <p className="section-intro">{intro}</p>
      <div className="rich">{children}</div>
    </section>
  );
}

function VisualSplit({
  imageSrc,
  imageAlt,
  title,
  label,
  reverse = false,
  imagePosition = "center center",
  children,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  label: string;
  reverse?: boolean;
  imagePosition?: string;
  children: ReactNode;
}) {
  return (
    <section className={`visual-split reveal ${reverse ? "reverse" : ""}`}>
      <div className="visual-copy">
        <div className="visual-pill">
          <WalletIcon size={14} />
          {label}
        </div>
        <h3>{title}</h3>
        <div className="visual-body">{children}</div>
      </div>

      <div className="visual-media">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 1180px) 100vw, 42vw"
          style={{ objectFit: "cover", objectPosition: imagePosition }}
        />
      </div>
    </section>
  );
}

const observerScript = `
(function () {
  function init() {
    var revealed = document.querySelectorAll('.reveal');
    var sections = Array.prototype.slice.call(document.querySelectorAll('[data-section]'));
    var links = Array.prototype.slice.call(document.querySelectorAll('[data-toc-link]'));

    if ('IntersectionObserver' in window) {
      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) entry.target.classList.add('in');
        });
      }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });

      revealed.forEach(function (node) { revealObserver.observe(node); });

      var sectionObserver = new IntersectionObserver(function (entries) {
        var visible = entries
          .filter(function (entry) { return entry.isIntersecting; })
          .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; })[0];

        if (!visible) return;
        var id = visible.target.getAttribute('id');

        links.forEach(function (link) {
          var active = link.getAttribute('href') === '#' + id;
          link.classList.toggle('is-active', active);
        });
      }, { threshold: [0.2, 0.35, 0.5], rootMargin: '-20% 0px -55% 0px' });

      sections.forEach(function (section) { sectionObserver.observe(section); });
    } else {
      revealed.forEach(function (node) { node.classList.add('in'); });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
`;

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: absoluteUrl("/home/waaza-yacht-financing-tool--3.jpg"),
    author: {
      "@type": "Organization",
      name: "Waaza",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Waaza",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/iconpng.png"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl("/assessment/how-much-yacht-can-i-afford"),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Assessment",
        item: absoluteUrl("/assessment"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "How much yacht can I afford",
        item: absoluteUrl("/assessment/how-much-yacht-can-i-afford"),
      },
    ],
  };

  return (
    <>
      <Script
        id="waaza-how-much-yacht-can-i-afford-article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(articleSchema)}
      </Script>

      <Script
        id="waaza-how-much-yacht-can-i-afford-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(faqSchema)}
      </Script>

      <Script
        id="waaza-how-much-yacht-can-i-afford-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(breadcrumbSchema)}
      </Script>

      <Script id="waaza-how-much-yacht-can-i-afford-motion" strategy="afterInteractive">
        {observerScript}
      </Script>

      <style>{`
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; background: ${C.bg}; }
        main, .rich, .section-intro, .hero-sub, .hero-breadcrumbs, .toc-shell, .budget-card, .faq-summary, .faq-answer, .visual-body, .readmore-card, .mid-cta, .end-cta {
          font-family: 'Inter Tight', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        a { color: inherit; text-decoration: none; }

        .inline-link {
          color: ${C.black};
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 3px;
          font-weight: 500;
        }
        .inline-link:hover { color: ${C.gray2}; }

        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1);
          will-change: opacity, transform;
        }
        .reveal.in {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-shell {
          position: relative;
          min-height: 68vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: ${C.black};
          border-bottom: 1px solid rgba(255,255,255,.08);
        }
        .hero-media {
          position: absolute;
          inset: 0;
          opacity: .72;
        }
        .hero-media::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(8,12,15,.28) 0%, rgba(12,17,20,.58) 55%, rgba(12,17,20,.7) 100%);
        }
        .hero-copy {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 980px;
          padding: 98px 24px 64px;
          text-align: center;
          color: #fff;
        }
        .hero-breadcrumbs {
          display: flex;
          gap: 8px;
          justify-content: center;
          flex-wrap: wrap;
          font-size: 12px;
          line-height: 1.5;
          color: rgba(255,255,255,.72);
          margin-bottom: 16px;
        }
        .hero-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 999px;
          padding: 10px 14px;
          background: ${C.accent};
          color: ${C.black};
          font-size: 11px;
          line-height: 1;
          letter-spacing: .14em;
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 18px;
        }
        .page-h1 {
          margin: 0 0 16px;
          font-family: 'Instrument Serif', serif;
          font-weight: 400;
          font-size: clamp(44px, 5.5vw, 68px);
          line-height: .98;
          letter-spacing: -1.2px;
          color: #fff;
        }
        .hero-sub {
          max-width: 780px;
          margin: 0 auto;
          font-size: 16px;
          line-height: 1.82;
          color: rgba(255,255,255,.88);
          font-weight: 400;
        }
        .hero-sub + .hero-sub { margin-top: 12px; }
        .hero-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 26px;
        }
        .hero-stat-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin: 26px auto 0;
          max-width: 860px;
        }
        .hero-stat {
          padding: 16px 16px 14px;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,.16);
          background: rgba(255,255,255,.08);
          backdrop-filter: blur(6px);
          text-align: left;
        }
        .hero-stat strong {
          display: block;
          font-size: 24px;
          line-height: 1;
          margin-bottom: 7px;
          color: #fff;
        }
        .hero-stat span {
          display: block;
          font-size: 12.5px;
          line-height: 1.6;
          color: rgba(255,255,255,.78);
        }

        .pill-yellow,
        .pill-outline,
        .pill-soft {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border-radius: 999px;
          padding: 14px 18px;
          font-size: 14px;
          line-height: 1;
          font-weight: 650;
          transition: transform .22s ease, background .22s ease, border-color .22s ease, color .22s ease;
        }
        .pill-yellow {
          background: ${C.accent};
          color: ${C.black};
        }
        .pill-yellow:hover {
          background: ${C.accentHover};
          transform: translateY(-1px);
        }
        .pill-outline {
          border: 1px solid rgba(255,255,255,.26);
          color: #fff;
          background: rgba(255,255,255,.04);
        }
        .pill-outline:hover {
          border-color: rgba(255,255,255,.44);
          background: rgba(255,255,255,.08);
          transform: translateY(-1px);
        }
        .pill-soft {
          background: ${C.white};
          color: ${C.black};
          border: 1px solid ${C.line};
        }
        .pill-soft:hover {
          transform: translateY(-1px);
          background: ${C.gray7};
        }

        .content-shell {
          max-width: 1180px;
          margin: 0 auto;
          padding: 46px 24px 96px;
        }
        .layout-grid {
          display: grid;
          grid-template-columns: 220px minmax(0, 1fr);
          gap: 42px;
          align-items: start;
        }

        .toc-shell {
          position: sticky;
          top: 96px;
          min-height: calc(100vh - 120px);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .toc-inner {
          width: 100%;
          max-width: 176px;
        }
        .toc-label {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 14px;
          font-size: 10px;
          line-height: 1.2;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: ${C.gray4};
          font-weight: 700;
        }
        .toc-list {
          position: relative;
          display: grid;
          gap: 2px;
          padding-left: 12px;
        }
        .toc-list::before {
          content: "";
          position: absolute;
          left: 0;
          top: 2px;
          bottom: 2px;
          width: 1px;
          background: ${C.gray6};
        }
        .toc-link {
          position: relative;
          display: block;
          padding: 8px 0 8px 14px;
          font-size: 11.5px;
          line-height: 1.5;
          color: ${C.gray3};
          transition: color .22s ease, transform .22s ease;
        }
        .toc-link::before {
          content: "";
          position: absolute;
          left: -4px;
          top: 13px;
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: ${C.bg};
          border: 1px solid ${C.gray5};
          transition: background .22s ease, border-color .22s ease, transform .22s ease;
        }
        .toc-link:hover {
          color: ${C.black};
          transform: translateX(2px);
        }
        .toc-link.is-active {
          color: ${C.black};
          font-weight: 600;
        }
        .toc-link.is-active::before {
          background: ${C.accent};
          border-color: ${C.accent};
          transform: scale(1.06);
        }

        .page-section {
          padding: 56px 0;
          border-top: 1px solid ${C.gray6};
          scroll-margin-top: 110px;
        }
        .page-section h2 {
          margin: 0 0 14px;
          font-family: 'Instrument Serif', serif;
          font-weight: 400;
          font-size: clamp(30px, 3vw, 42px);
          line-height: 1.08;
          letter-spacing: -.8px;
          color: ${C.black};
        }
        .section-intro {
          margin: 0 0 24px;
          max-width: 900px;
          color: ${C.gray2};
          font-size: 16px;
          line-height: 1.82;
        }
        .rich {
          color: ${C.gray2};
          font-size: 16px;
          line-height: 1.9;
        }
        .rich p {
          margin: 0 0 18px;
        }
        .rich h3 {
          margin: 28px 0 10px;
          font-family: 'Inter Tight', system-ui, sans-serif;
          font-size: 22px;
          line-height: 1.2;
          font-weight: 650;
          color: ${C.black};
          letter-spacing: -.02em;
        }
        .rich ul {
          margin: 0 0 18px 20px;
          display: grid;
          gap: 10px;
          padding: 0;
        }

        .framework-table {
          margin-top: 18px;
          overflow: hidden;
          border-radius: 26px;
          border: 1px solid ${C.gray6};
          background: ${C.white};
          box-shadow: 0 20px 50px rgba(0,0,0,.035);
        }
        .framework-row {
          display: grid;
          grid-template-columns: 180px 1fr 1fr;
          border-top: 1px solid ${C.gray6};
        }
        .framework-row:first-child { border-top: none; }
        .framework-row > div {
          padding: 18px 20px;
          min-height: 74px;
        }
        .framework-head {
          background: ${C.gray7};
          color: ${C.black};
          font-weight: 650;
          font-size: 13px;
          line-height: 1.55;
        }
        .framework-row strong {
          color: ${C.black};
          display: block;
          margin-bottom: 4px;
        }

        .budget-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-top: 20px;
        }
        .budget-card {
          background: ${C.white};
          border: 1px solid ${C.gray6};
          border-radius: 28px;
          padding: 24px;
          box-shadow: 0 20px 52px rgba(0,0,0,.04);
        }
        .budget-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 999px;
          background: ${C.accentPale};
          color: ${C.black};
          font-size: 11px;
          line-height: 1;
          text-transform: uppercase;
          letter-spacing: .14em;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .budget-card h3 {
          margin: 0 0 4px;
          color: ${C.black};
          font-size: 28px;
          line-height: 1.04;
          letter-spacing: -.04em;
        }
        .budget-meta {
          color: ${C.gray3};
          font-size: 14px;
          line-height: 1.65;
          margin: 0 0 15px;
        }
        .budget-card ul {
          margin: 0 0 18px 18px;
          padding: 0;
          display: grid;
          gap: 10px;
        }
        .budget-footer {
          display: grid;
          gap: 10px;
          padding-top: 16px;
          border-top: 1px solid ${C.gray6};
          color: ${C.gray2};
          font-size: 14px;
          line-height: 1.7;
        }
        .budget-footer strong {
          color: ${C.black};
          display: block;
          margin-bottom: 3px;
        }

        .visual-split {
          display: grid;
          grid-template-columns: minmax(0, .96fr) minmax(340px, 1.04fr);
          gap: 18px;
          margin: 26px 0 8px;
        }
        .visual-split.reverse .visual-copy { order: 2; }
        .visual-split.reverse .visual-media { order: 1; }
        .visual-copy {
          background: ${C.accent};
          border-radius: 30px;
          padding: 30px 30px 28px;
          color: ${C.black};
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 360px;
        }
        .visual-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,.42);
          font-size: 11px;
          line-height: 1;
          text-transform: uppercase;
          letter-spacing: .14em;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .visual-copy h3 {
          margin: 0 0 14px;
          font-size: clamp(28px, 2.8vw, 40px);
          line-height: 1.04;
          letter-spacing: -.04em;
          color: ${C.black};
          font-weight: 650;
          font-family: 'Inter Tight', system-ui, sans-serif;
        }
        .visual-body {
          font-size: 15.5px;
          line-height: 1.85;
          color: ${C.gray1};
        }
        .visual-body p:last-child,
        .visual-body ul:last-child { margin-bottom: 0; }
        .visual-body ul {
          margin: 0;
          padding-left: 18px;
          display: grid;
          gap: 8px;
        }
        .visual-media {
          position: relative;
          min-height: 360px;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 22px 56px rgba(0,0,0,.08);
          background: #ddd;
        }

        .mid-cta,
        .end-cta {
          border-radius: 32px;
          padding: 36px clamp(24px, 4vw, 42px);
        }
        .mid-cta {
          background: ${C.accent};
          color: ${C.black};
          margin-top: 26px;
        }
        .end-cta {
          background: ${C.gray7};
          border: 1px solid ${C.gray6};
          margin-top: 24px;
        }
        .cta-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,.42);
          font-size: 11px;
          line-height: 1;
          letter-spacing: .14em;
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .mid-cta h3,
        .end-cta h3 {
          margin: 0 0 10px;
          color: ${C.black};
          font-size: clamp(28px, 3vw, 42px);
          line-height: 1.06;
          letter-spacing: -.05em;
          font-weight: 650;
        }
        .mid-cta p,
        .end-cta p {
          margin: 0 0 16px;
          max-width: 760px;
          font-size: 16px;
          line-height: 1.82;
          color: ${C.gray1};
        }

        .faq-grid { display: grid; gap: 12px; }
        .faq-item {
          border-top: 1px solid ${C.gray6};
          border-bottom: 1px solid ${C.gray6};
        }
        .faq-summary {
          list-style: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 18px 0;
          color: ${C.black};
          font-size: 16px;
          line-height: 1.5;
          font-weight: 600;
        }
        .faq-summary::-webkit-details-marker { display: none; }
        .faq-plus {
          width: 32px;
          height: 32px;
          border-radius: 999px;
          border: 1px solid ${C.gray6};
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform .25s ease, background .25s ease, border-color .25s ease;
          flex: 0 0 auto;
        }
        .faq-item[open] .faq-plus {
          transform: rotate(45deg);
          background: ${C.accentPale};
          border-color: ${C.accent};
        }
        .faq-answer {
          padding-bottom: 18px;
          font-size: 15.5px;
          line-height: 1.82;
          color: ${C.gray2};
        }

        .readmore-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 14px;
          margin-top: 26px;
        }
        .readmore-card {
          display: block;
          padding: 18px 0 0;
          border-top: 1px solid ${C.gray6};
          transition: transform .22s ease, border-color .22s ease;
        }
        .readmore-card:hover {
          transform: translateY(-1px);
          border-color: ${C.gray5};
        }
        .readmore-card h3 {
          margin: 0 0 8px;
          color: ${C.black};
          font-size: 18px;
          line-height: 1.24;
          letter-spacing: -.02em;
          font-weight: 650;
          font-family: 'Inter Tight', system-ui, sans-serif;
        }
        .readmore-card p {
          margin: 0;
          color: ${C.gray2};
          font-size: 14px;
          line-height: 1.75;
        }

        @media (max-width: 1180px) {
          .layout-grid,
          .budget-grid,
          .visual-split,
          .hero-stat-grid,
          .readmore-grid {
            grid-template-columns: 1fr !important;
          }
          .toc-shell {
            position: relative;
            top: auto;
            min-height: auto;
            display: block;
            margin-bottom: 18px;
          }
          .toc-inner {
            max-width: none;
          }
          .framework-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 820px) {
          .hero-copy {
            padding: 92px 20px 56px;
          }
          .page-h1 {
            font-size: 42px;
            letter-spacing: -1px;
          }
          .hero-sub {
            font-size: 15px;
            line-height: 1.76;
          }
          .content-shell {
            padding: 34px 20px 84px;
          }
          .visual-copy,
          .visual-media {
            min-height: 300px;
          }
          .page-section {
            padding: 46px 0;
          }
        }
      `}</style>

      <main style={{ background: C.bg, color: C.black }}>
        <section className="hero-shell">
          <div className="hero-media">
            <Image
              src="/home/waaza-yacht-financing-tool--3.jpg"
              alt="How much yacht can I afford"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "72% center" }}
            />
          </div>

          <div className="hero-copy reveal in">
            <div className="hero-breadcrumbs">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/assessment">Assessment</Link>
              <span>/</span>
              <span>How much yacht can I afford</span>
            </div>

            <div className="hero-kicker">
              <CompassIcon size={14} />
              Assessment / Budget planning
            </div>

            <h1 className="page-h1">How Much Yacht Can I Afford?</h1>

            <p className="hero-sub">
              Most buyers budget backwards. They find a yacht they love, then try to see if the
              purchase can somehow fit. The stronger approach is to set the ownership budget first,
              then shop within the range that actually works.
            </p>

            <p className="hero-sub">
              A yacht budget is not just the price tag. It is the deposit, monthly finance,
              insurance, berth, maintenance, fuel and repairs. A £300,000 yacht can still cost
              £50,000-70,000 annually to own and operate.
            </p>

            <div className="hero-actions">
              <Link href="/start/assessment" className="pill-yellow">
                Start your yacht finance assessment
                <ArrowRightIcon />
              </Link>
              <Link href="/assessment/sample-buyer-report" className="pill-outline">
                View sample buyer report
              </Link>
            </div>

            <div className="hero-stat-grid">
              <div className="hero-stat">
                <strong>10-15%</strong>
                <span>Comfortable ceiling for total annual yacht costs as a share of gross income.</span>
              </div>
              <div className="hero-stat">
                <strong>15-25%</strong>
                <span>Typical annual ownership cost range as a share of purchase price for active use.</span>
              </div>
              <div className="hero-stat">
                <strong>10-30%</strong>
                <span>Typical deposit range depending on yacht age, lender appetite and file quality.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="content-shell">
          <div className="layout-grid">
            <aside className="toc-shell">
              <div className="toc-inner">
                <div className="toc-label">
                  <CompassIcon size={13} />
                  On this page
                </div>
                <div className="toc-list">
                  {toc.map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="toc-link" data-toc-link>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            <div>
              <Section
                id="how-to-calculate"
                title="How do you calculate how much yacht you can afford?"
                intro="The right way to budget for a yacht is to start with what ownership can cost comfortably each year, then work backwards into the purchase range that fits."
              >
                <p>
                  Most people shop for the yacht first and figure out the budget later. That is
                  usually backwards. A better starting point is the wider{" "}
                  <Link href="/assessment" className="inline-link">
                    assessment
                  </Link>{" "}
                  process: establish what you can realistically put down, what recurring costs fit
                  your cash flow, how much reserve you want to keep after closing, and only then
                  work backwards into the range of yachts that suits that reality.
                </p>
                <p>
                  That matters because affordability is not about whether a lender will finance a
                  purchase in the abstract. It is about whether you can own the yacht comfortably
                  for years without creating pressure elsewhere in your finances. Buyers often focus
                  too much on the headline purchase price and not enough on the total ownership
                  picture.
                </p>
                <p>
                  The simplest way to calculate affordability is to work from four layers. First,
                  set the maximum upfront cash you are genuinely comfortable deploying. That is not
                  just the deposit. It is also survey, legal, haul-out, delivery, immediate
                  improvements, and the liquidity you still want once the deal closes. Second,
                  define the annual ownership number you can carry without stress. Third, translate
                  that into a monthly finance number using a{" "}
                  <Link href="/assessment/yacht-loan-calculator" className="inline-link">
                    yacht loan calculator
                  </Link>{" "}
                  or{" "}
                  <Link href="/assessment/monthly-yacht-payment-calculator" className="inline-link">
                    monthly payment calculator
                  </Link>
                  . Fourth, pressure-test the result with a realistic deposit assumption using the{" "}
                  <Link href="/assessment/yacht-deposit-calculator" className="inline-link">
                    yacht deposit calculator
                  </Link>{" "}
                  and{" "}
                  <Link href="/assessment/ltv-calculator" className="inline-link">
                    LTV calculator
                  </Link>
                  .
                </p>
                <p>
                  Once those four layers are clear, the search becomes cleaner. Instead of browsing
                  every yacht that feels emotionally attractive, you can filter quickly toward the
                  ones that fit your actual financial profile.
                </p>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--3.jpg"
                imageAlt="Yacht affordability framework"
                title="Affordability starts with ownership, not the asking price"
                label="Framework visual"
                imagePosition="60% center"
              >
                <p>
                  The most reliable budgeting sequence is simple: decide what annual ownership cost
                  fits, translate that into a monthly finance threshold, set a deposit range, then
                  shop inside those numbers.
                </p>
                <ul>
                  <li>Upfront cash: deposit, survey, legal, delivery, immediate works.</li>
                  <li>Recurring cost: loan, berth, insurance, maintenance, fuel, repairs.</li>
                  <li>Buffer: reserve for mistakes, deferred maintenance and softer income years.</li>
                </ul>
              </VisualSplit>

              <Section
                id="income-net-worth"
                title="What percentage of income or net worth should go into a yacht?"
                intro="Most buyers begin with either a net-worth rule or an income rule. Both help. Neither should be used in isolation."
              >
                <h3>The 10% rule: a starting point</h3>
                <p>
                  A common rule suggests spending no more than 10% of your net worth on a yacht.
                  Someone with £2 million net worth would target yachts around £200,000 maximum.
                  That offers a rough starting point because it stops the yacht from becoming too
                  large a share of your balance sheet. For some buyers, especially those paying
                  cash, that is a useful discipline.
                </p>
                <p>
                  The problem is that the 10% rule tells you almost nothing about whether you can
                  comfortably carry the ongoing ownership burden. Someone with substantial net worth
                  but modest annual income can still buy an asset that becomes annoying to operate.
                </p>

                <h3>Income-based affordability</h3>
                <p>
                  Your annual income is often the more practical anchor because yacht ownership is
                  an ongoing cash-flow decision. A useful guideline is that total annual yacht
                  costs—loan payments, insurance, dockage, maintenance, fuel and repairs—should not
                  exceed about 10-15% of gross annual income if you want ownership to feel
                  comfortable.
                </p>
                <p>
                  Another useful filter is leverage. If you are trying to estimate how aggressive a
                  lender may be, compare your assumptions with{" "}
                  <Link href="/financing/typical-deposit-for-yacht-financing" className="inline-link">
                    typical deposit for yacht financing
                  </Link>{" "}
                  and{" "}
                  <Link href="/financing/loan-tenors-for-yacht-financing" className="inline-link">
                    loan tenors for yacht financing
                  </Link>
                  . Deposit size and loan duration materially change what purchase price your budget
                  really supports.
                </p>

                <div className="framework-table">
                  <div className="framework-row framework-head">
                    <div>Method</div>
                    <div>What it tells you</div>
                    <div>Where it falls short</div>
                  </div>
                  <div className="framework-row">
                    <div>
                      <strong>Net worth rule</strong>
                      5-10% conservative
                    </div>
                    <div>Stops the yacht becoming too large a share of your overall balance sheet.</div>
                    <div>Does not tell you whether annual ownership cost fits your income.</div>
                  </div>
                  <div className="framework-row">
                    <div>
                      <strong>Income rule</strong>
                      10-15% comfortable
                    </div>
                    <div>Shows what recurring ownership cost is likely to feel sustainable.</div>
                    <div>Can still miss the upfront strain if the deposit is too large.</div>
                  </div>
                  <div className="framework-row">
                    <div>
                      <strong>Best use</strong>
                      Apply both
                    </div>
                    <div>Use the tighter result to shape the budget you actually shop against.</div>
                    <div>Still needs scenario testing for age, usage, charter and debt profile.</div>
                  </div>
                </div>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--3.jpg"
                imageAlt="Income and net worth yacht budget comparison"
                title="Use both the income rule and the net-worth rule"
                label="Decision rule"
                reverse
                imagePosition="70% center"
              >
                <p>
                  Net worth protects the balance sheet. Income protects the lifestyle. Buyers make
                  mistakes when they use only one.
                </p>
                <p>
                  A yacht that is only “affordable” because your balance sheet is strong can still
                  become irritating if annual running cost sits too high relative to income.
                </p>
              </VisualSplit>

              <Section
                id="ownership-costs"
                title="What does yacht ownership actually cost each year?"
                intro="This is where affordability usually breaks down. Buyers underestimate the annual burden because they stop at the purchase price."
              >
                <p>
                  Total annual costs typically run 15-25% of the yacht’s purchase price for
                  actively used vessels. The exact number moves with size, age, complexity, how
                  often you use the yacht, and where you keep it. The important point is that the
                  purchase is only the start.
                </p>

                <h3>Purchase price and financing</h3>
                <p>
                  If financing, you will usually need 10-30% down, and older yachts often sit
                  toward the heavier end of that range. Monthly loan payments depend on financed
                  amount, interest rate, and loan term. A £300,000 yacht with 20% down means a
                  £60,000 deposit and a £240,000 loan. At 6.5% over 15 years, that is roughly
                  £2,200 a month, or about £26,400 a year, in loan payments alone.
                </p>

                <h3>Insurance costs</h3>
                <p>
                  Marine insurance typically runs around 1-3% of yacht value annually. A £400,000
                  yacht might therefore cost £4,000-12,000 a year for comprehensive cover. The
                  number moves with yacht type, age, claims history, cruising area, operating
                  profile and owner experience. Compare the operating assumptions with{" "}
                  <Link href="/insurance/yacht-insurance-vs-financing-requirements" className="inline-link">
                    yacht insurance versus financing requirements
                  </Link>{" "}
                  and{" "}
                  <Link href="/insurance/what-buyers-should-have-ready-for-insurers" className="inline-link">
                    what buyers should have ready for insurers
                  </Link>
                  .
                </p>

                <h3>Dockage and storage</h3>
                <p>
                  Marina fees vary wildly by location. Mediterranean berths for a 50-foot yacht can
                  run £15,000-30,000+ annually in prime locations. UK marinas may range from about
                  £3,000-15,000+ depending on region, services and demand. Once location is fixed,
                  a separate review of{" "}
                  <Link href="/costs/mooring-and-berthing-costs" className="inline-link">
                    mooring and berthing costs
                  </Link>{" "}
                  becomes essential.
                </p>

                <h3>Maintenance and repairs</h3>
                <p>
                  Budget at least 10% of yacht value annually for routine maintenance and repairs. A
                  £300,000 yacht needs around £30,000 a year for service, bottom paint, zincs, oil
                  changes, detailing, system checks and inevitable fixes. This is exactly why a
                  lower asking price can still produce a heavier ownership burden than a newer yacht
                  with a stronger maintenance history. The longer view becomes clearer on{" "}
                  <Link href="/costs/maintenance-costs-and-finance-readiness" className="inline-link">
                    maintenance costs and finance readiness
                  </Link>{" "}
                  and the broader{" "}
                  <Link href="/costs/true-cost-of-owning-a-yacht" className="inline-link">
                    true cost of owning a yacht
                  </Link>
                  .
                </p>

                <h3>Fuel and operating costs</h3>
                <p>
                  Fuel varies enormously by yacht type and usage. A typical 50-foot powerboat can
                  consume £200-400 in fuel for a weekend cruise. Active owners can easily spend
                  £5,000-15,000 or more annually on fuel alone. Sailboats use less, but they still
                  burn diesel for motoring, generators and heating.
                </p>

                <h3>Crew costs, if applicable</h3>
                <p>
                  Professional crew changes the economics fast. A captain alone can mean
                  £40,000-80,000+ annually before benefits and travel are added. If that threshold
                  is even remotely part of your medium-term thinking, it should influence the size
                  you call “affordable” today.
                </p>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--3.jpg"
                imageAlt="Yacht ownership cost stack"
                title="The asking price is only one layer of the cost stack"
                label="Cost visual"
                imagePosition="50% center"
              >
                <p>
                  Buyers often treat the loan payment as the cost of ownership. It is not. The real
                  stack includes finance, insurance, berth, maintenance, fuel, storage, survey work
                  and repairs.
                </p>
                <ul>
                  <li>Fixed costs stay high even when usage is low.</li>
                  <li>Older yachts shift spend from purchase price into maintenance risk.</li>
                  <li>Location can change berth cost more than buyers expect.</li>
                </ul>
              </VisualSplit>

              <Section
                id="sample-budgets"
                title="How much yacht can different budgets realistically support?"
                intro="Looking at example ownership bands is the fastest way to make affordability feel real."
              >
                <p>
                  These examples assume active ownership, perhaps 50-100 days aboard annually. They
                  are not perfect formulas, but they show how quickly the annual number rises once
                  the full ownership picture is included.
                </p>

                <div className="budget-grid">
                  {budgetCards.map((card) => (
                    <div key={card.title} className="budget-card reveal">
                      <div className="budget-pill">
                        <PulseIcon size={14} />
                        Sample budget
                      </div>
                      <h3>{card.title}</h3>
                      <p className="budget-meta">{card.meta}</p>
                      <ul>
                        {card.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                      <div className="budget-footer">
                        <div>
                          <strong>Total annual cost</strong>
                          <span>{card.total}</span>
                        </div>
                        <div>
                          <strong>Comfortable income usually needed</strong>
                          <span>{card.income}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p style={{ marginTop: 18 }}>
                  These numbers also explain why buyers should compare use case, not just purchase
                  price. A well-kept newer yacht may look more expensive upfront but can still be a
                  better ownership decision than an older vessel with shorter loan terms, larger
                  deposit requirements and higher maintenance volatility. That becomes especially
                  relevant when you compare{" "}
                  <Link href="/assessment/new-vs-used-yacht-financing" className="inline-link">
                    new versus used yacht financing
                  </Link>{" "}
                  and{" "}
                  <Link href="/compare/new-vs-used-yacht-financing" className="inline-link">
                    the new versus used financing comparison
                  </Link>
                  .
                </p>

                <div className="mid-cta reveal">
                  <div className="cta-eyebrow">
                    <CompassIcon size={14} />
                    Mid-page check
                  </div>
                  <h3>See what your budget really supports before you start shopping</h3>
                  <p>
                    Model deposit, payment and annual ownership together so your target range is
                    based on real numbers rather than the asking price alone.
                  </p>
                  <Link href="/assessment/yacht-loan-calculator" className="pill-yellow">
                    Run the affordability calculator
                    <ArrowRightIcon />
                  </Link>
                </div>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--3.jpg"
                imageAlt="Three yacht budget bands"
                title="A bigger yacht budget changes more than the monthly payment"
                label="Scenario visual"
                reverse
                imagePosition="74% center"
              >
                <p>
                  As the purchase price rises, the annual operating burden often rises faster than
                  buyers expect because maintenance, insurance, dockage and fuel all move with the
                  vessel profile too.
                </p>
                <p>
                  That is why a buyer who can technically finance more yacht may still be better
                  served by a smaller platform that leaves room to use it more often and maintain it
                  properly.
                </p>
              </VisualSplit>

              <Section
                id="hidden-costs"
                title="What hidden costs make yachts less affordable than they look?"
                intro="A yacht can seem affordable until the less visible ownership costs start showing up in the first year."
              >
                <p>
                  Several costs surprise buyers because they do not appear obvious during the early
                  purchase conversation. These are the expenses that make an apparently sensible
                  purchase turn into a frustrating one.
                </p>

                <h3>Upgrades and improvements</h3>
                <p>
                  Most buyers do not leave the yacht exactly as they found it. Better electronics,
                  new canvas, updated safety gear, refreshed soft goods, improved audio, cosmetic
                  work and system upgrades can easily consume £10,000-30,000+ during the first year
                  or two.
                </p>

                <h3>Survey and haul-out</h3>
                <p>
                  Pre-purchase survey costs often land around £1,500-4,000, and haul-out can add
                  meaningfully on top. Insurance may also require repeat surveys, especially on
                  older boats. Each haul-out for survey or bottom work can cost £2,000-5,000+.
                  Buyers should treat those as part of the process and not as outliers. They sit
                  naturally alongside{" "}
                  <Link href="/documents/survey-valuation-and-sea-trial-documents" className="inline-link">
                    survey, valuation and sea-trial documents
                  </Link>{" "}
                  and the{" "}
                  <Link href="/documents/yacht-finance-document-checklist" className="inline-link">
                    yacht finance document checklist
                  </Link>
                  .
                </p>

                <h3>Delivery and commissioning</h3>
                <p>
                  If the yacht is bought far from home, delivery costs can reach £5,000-20,000+
                  depending on distance, crew, route and timing. A delivery captain, fuel,
                  provisions and commissioning work add up quickly.
                </p>

                <h3>Learning-curve mistakes</h3>
                <p>
                  First-time owners make expensive mistakes. Minor collisions, grounding, system
                  misuse and avoidable equipment damage are part of the reality of learning.
                </p>

                <h3>Winter lay-up or seasonal storage</h3>
                <p>
                  If you cannot use the yacht year-round, winterization, storage and spring
                  recommissioning become their own annual budget category. Buyers who want a cleaner
                  process into closing should also work through a{" "}
                  <Link href="/documents/pre-closing-readiness-checklist" className="inline-link">
                    pre-closing readiness checklist
                  </Link>
                  .
                </p>
                <p>
                  Hidden costs are one of the biggest reasons buyers should compare ownership
                  against alternatives like{" "}
                  <Link href="/compare/yacht-financing-vs-cash" className="inline-link">
                    yacht financing versus cash
                  </Link>{" "}
                  with a realistic view of what the first year and ongoing years really look like.
                </p>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--3.jpg"
                imageAlt="Hidden yacht ownership costs"
                title="The first year is usually more expensive than buyers expect"
                label="Ownership friction"
                imagePosition="64% center"
              >
                <p>
                  Closing a yacht purchase is not the end of the spending. Survey, delivery,
                  early-year upgrades, seasonal yard work and inevitable learning-curve errors are
                  exactly where the clean spreadsheet often breaks.
                </p>
                <p>
                  The right budget leaves room for the first-year messiness instead of assuming
                  ideal conditions.
                </p>
              </VisualSplit>

              <Section
                id="cash-vs-finance"
                title="Should you buy a yacht with cash or finance it?"
                intro="Cash and finance change yacht affordability in different ways. One lowers recurring pressure. The other preserves liquidity."
              >
                <p>
                  Paying cash versus financing affects how much yacht you can afford in different
                  ways, and neither route is automatically superior. The correct answer depends on
                  how you value liquidity, flexibility, investment opportunity and the psychological
                  comfort of lower recurring obligations.
                </p>

                <h3>Cash purchase advantages</h3>
                <p>
                  Paying cash means no monthly loan payment and no interest burden over time. That
                  can dramatically reduce annual ownership pressure and leave more room in the
                  budget for berth, maintenance and real usage.
                </p>

                <h3>Cash purchase disadvantages</h3>
                <p>
                  The trade-off is capital concentration. A £400,000 cash purchase removes capital
                  from other uses: investment returns, emergency reserves, family liquidity or
                  business flexibility.
                </p>

                <h3>Financing advantages</h3>
                <p>
                  Financing preserves capital and spreads cost across time. It can bring ownership
                  forward, keep reserves healthier and make it easier to compare scenarios.
                </p>

                <h3>Financing disadvantages</h3>
                <p>
                  Interest cost raises the total price meaningfully over the life of the loan.
                  Financing also creates a recurring obligation that does not disappear simply
                  because business or income has a weaker year.
                </p>
                <p>
                  Compare the same scenario through{" "}
                  <Link href="/compare/yacht-financing-vs-cash" className="inline-link">
                    yacht financing versus cash
                  </Link>
                  , test timing through{" "}
                  <Link href="/compare/pre-approval-vs-post-offer-financing" className="inline-link">
                    pre-approval versus post-offer financing
                  </Link>
                  , and decide which version leaves the overall ownership picture healthier. In
                  practice, many buyers also benefit from{" "}
                  <Link href="/financing/pre-qualifying-before-making-an-offer" className="inline-link">
                    pre-qualifying before making an offer
                  </Link>{" "}
                  and{" "}
                  <Link href="/financing/how-to-finance-a-yacht-purchase" className="inline-link">
                    how to finance a yacht purchase
                  </Link>
                  .
                </p>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--3.jpg"
                imageAlt="Cash versus finance for yacht ownership"
                title="Cash lowers pressure. Finance preserves flexibility."
                label="Comparison visual"
                reverse
                imagePosition="58% center"
              >
                <p>
                  A cash purchase can make the yearly ownership profile feel lighter. A financed
                  purchase can leave more capital available for investment, reserve and opportunity.
                </p>
                <ul>
                  <li>Cash is simpler and usually cheaper over the full term.</li>
                  <li>Finance can be the healthier choice when preserving liquidity matters.</li>
                  <li>The right answer depends on total balance-sheet context, not just rate level.</li>
                </ul>
              </VisualSplit>

              <Section
                id="what-changes"
                title="What changes what yacht you can afford?"
                intro="Two buyers with the same income can still have very different yacht budgets because affordability is shaped by context."
              >
                <h3>If you plan to charter the yacht</h3>
                <p>
                  Charter income can offset costs, but it should be treated conservatively. The
                  bigger the charter assumption, the more important it becomes to understand{" "}
                  <Link href="/financing/how-charter-use-affects-financing" className="inline-link">
                    how charter use affects financing
                  </Link>{" "}
                  and{" "}
                  <Link href="/structuring/private-use-vs-commercial-use-vat" className="inline-link">
                    private versus commercial use VAT
                  </Link>
                  .
                </p>

                <h3>If you have other major debt</h3>
                <p>
                  Mortgage commitments, school fees, vehicle finance and business obligations all
                  reduce the breathing room available for yacht ownership.
                </p>

                <h3>If you are close to retirement</h3>
                <p>
                  Budget against retirement income, not only against current earnings.
                </p>

                <h3>If you are buying through a company</h3>
                <p>
                  Ownership structure can change both financing and affordability. That is why pages
                  like{" "}
                  <Link href="/structuring/buying-a-yacht-through-a-company" className="inline-link">
                    buying a yacht through a company
                  </Link>{" "}
                  and{" "}
                  <Link href="/structuring/cross-border-yacht-purchase-tax-considerations" className="inline-link">
                    cross-border yacht purchase tax considerations
                  </Link>{" "}
                  matter before you settle on the budget.
                </p>

                <h3>If you are self-employed or have variable income</h3>
                <p>
                  Build in more safety. Budget off average or softer years, not the best year in
                  the recent cycle.
                </p>

                <h3>When you can afford less than you think</h3>
                <p>
                  Expensive parallel hobbies, high living costs, future income that has not arrived
                  yet, dependent obligations and old-vessel maintenance risk all argue for buying
                  less yacht than the spreadsheet first suggests. One of the biggest modifiers is
                  age, which is why buyers should read{" "}
                  <Link href="/financing/how-vessel-age-affects-financing" className="inline-link">
                    how vessel age affects financing
                  </Link>
                  .
                </p>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--3.jpg"
                imageAlt="Affordability changes with use case"
                title="The same income can support very different yachts"
                label="Use-case visual"
                imagePosition="68% center"
              >
                <p>
                  Usage pattern, age, ownership structure, location, debt profile and charter
                  intentions all change what “affordable” really means.
                </p>
                <p>
                  That is why scenario comparison matters more than generic rules.
                </p>
              </VisualSplit>

              <Section
                id="questions"
                title="What questions should you ask before setting your budget?"
                intro="The most expensive affordability mistakes usually happen because buyers avoid one or two uncomfortable questions."
              >
                <h3>Can I afford this if my income drops 20-30%?</h3>
                <p>
                  If a modest drop would make the yacht feel stressful, the budget is too
                  ambitious.
                </p>

                <h3>Can I still save properly for retirement while owning this yacht?</h3>
                <p>
                  Yacht ownership should not crowd out longer-term planning.
                </p>

                <h3>Will I actually use it enough to justify ownership?</h3>
                <p>
                  A yacht used 20 days a year can become astonishingly expensive on a per-day basis
                  once annual ownership cost is divided by actual use.
                </p>

                <h3>Am I comfortable with the maintenance burden, not just the cost?</h3>
                <p>
                  A bigger yacht needs more coordination, more yard time and more active oversight.
                </p>

                <h3>Does this leave adequate emergency reserves?</h3>
                <p>
                  Do not drain liquidity just to get the deal done. Maintain healthy reserves
                  outside the yacht. That matters for both personal resilience and lender comfort,
                  and it is usually visible in the final{" "}
                  <Link href="/assessment/sample-buyer-report" className="inline-link">
                    sample buyer report
                  </Link>
                  .
                </p>

                <h3>The brutally honest reality check</h3>
                <p>
                  Many people buy more yacht than they can comfortably afford, then use it less
                  because fuel, maintenance and small problems all feel expensive. Others stretch to
                  complete the purchase, then sell at a loss later because ownership became
                  financially irritating.
                </p>
                <p>
                  That is why the best decision is usually to set the budget before you shop, then
                  pressure-test it through a proper{" "}
                  <Link href="/start/assessment" className="inline-link">
                    yacht finance assessment
                  </Link>{" "}
                  or a human review through{" "}
                  <Link href="/book-a-review" className="inline-link">
                    a buyer review
                  </Link>
                  .
                </p>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--3.jpg"
                imageAlt="Questions to ask before setting a yacht budget"
                title="A yacht is affordable when there is no debate"
                label="Decision checkpoint"
                reverse
                imagePosition="62% center"
              >
                <p>
                  The clearest signal that a budget is healthy is usually emotional as much as
                  numerical: the ownership profile feels sustainable with room to spare, not fragile
                  and argument-driven.
                </p>
                <ul>
                  <li>Income can soften without the yacht becoming stressful.</li>
                  <li>Repairs do not threaten your reserves.</li>
                  <li>You can still use the yacht properly once you own it.</li>
                </ul>
              </VisualSplit>

              <Section
                id="faq"
                title="Frequently asked questions"
                intro="These are the questions buyers usually ask once the conversation moves from aspiration into real budgeting."
              >
                <div className="faq-grid">
                  {faqs.map((faq) => (
                    <details key={faq.question} className="faq-item reveal">
                      <summary className="faq-summary">
                        <span>{faq.question}</span>
                        <span className="faq-plus">+</span>
                      </summary>
                      <div className="faq-answer">{faq.answer}</div>
                    </details>
                  ))}
                </div>
              </Section>

              <section id="bottom-line" className="page-section reveal" data-section>
                <h2>The bottom line</h2>
                <p className="section-intro">
                  The right yacht budget is the one that still feels comfortable after the purchase
                  is complete.
                </p>

                <div className="rich">
                  <p>
                    How much yacht you can afford depends on income, net worth, other financial
                    obligations and risk tolerance. A conservative starting point is to keep total
                    annual yacht costs under 10-15% of gross income, or keep the purchase price
                    under about 10% of net worth—whichever is more restrictive.
                  </p>
                  <p>
                    Run the whole ownership picture, not just the loan payment. Include deposit,
                    finance, insurance, berth costs, maintenance, fuel, survey, repairs and the
                    first-year friction that always arrives around upgrades, delivery and seasonal
                    storage. In many cases, the full cost reaches 15-25% of purchase price each
                    year.
                  </p>
                  <p>
                    Start conservatively. You can always upgrade later. A yacht you actually use
                    because the costs fit comfortably is far better than a larger yacht that sits
                    idle because ownership feels expensive every time you think about using it.
                  </p>
                </div>

                <div className="end-cta reveal">
                  <div className="cta-eyebrow">
                    <CompassIcon size={14} />
                    Final step
                  </div>
                  <h3>Pressure-test your yacht budget with real ownership numbers</h3>
                  <p>
                    Compare deposit, payment, annual running costs and overall affordability so you
                    can shop within a range that actually fits before you make an offer.
                  </p>
                  <Link href="/start/assessment" className="pill-yellow">
                    Start your yacht finance assessment
                    <ArrowRightIcon />
                  </Link>
                </div>

                <div className="readmore-grid">
                  {relatedPages.map((page) => (
                    <Link key={page.href} href={page.href} className="readmore-card">
                      <h3>{page.title}</h3>
                      <p>{page.body}</p>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}