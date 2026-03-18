
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { ReactNode } from "react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.waaza.co";

const title = "Yacht Insurance vs Financing Requirements: What Lenders Need | Waaza";
const description =
  "Understand the difference between normal yacht insurance choices and lender-required insurance, including loss payee wording, liability limits, deductibles and continuous cover.";

const C = {
  bg: "#f4f3ef",
  white: "#ffffff",
  accent: "#FFF86C",
  accentHover: "#f0ec5a",
  accentPale: "#fffde0",
  black: "#0a0a0a",
  gray2: "#4b5563",
  gray3: "#6b7280",
  gray4: "#9ca3af",
  gray5: "#d1d5db",
  gray6: "#eae9e4",
  tint: "#f7f6f1",
  softBtn: "#f1f1f1",
};

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "yacht insurance vs financing requirements",
    "lender required yacht insurance",
    "loss payee yacht insurance",
    "additional insured yacht lender",
    "yacht loan insurance requirements",
    "financed yacht insurance rules",
  ],
  authors: [{ name: "Waaza" }],
  alternates: {
    canonical: "/insurance/yacht-insurance-vs-financing-requirements",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title,
    description,
    url: "/insurance/yacht-insurance-vs-financing-requirements",
    siteName: "Waaza",
    locale: "en_GB",
    type: "article",
    publishedTime: "2026-03-17T00:00:00.000Z",
    modifiedTime: "2026-03-17T00:00:00.000Z",
    images: [
      {
        url: "/home/waaza-yacht-financing-tool--8.jpg",
        width: 1200,
        height: 630,
        alt: "Yacht insurance versus financing requirements guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/home/waaza-yacht-financing-tool--8.jpg"],
  },
};

const toc = [
  { id: "overview", label: "What lenders care about" },
  { id: "non-negotiables", label: "The non-negotiables" },
  { id: "hull", label: "Hull cover requirements" },
  { id: "liability", label: "Liability and P&I requirements" },
  { id: "loss-payee", label: "Loss payee and additional insured" },
  { id: "proof", label: "Proof of insurance for closing" },
  { id: "cash-vs-financed", label: "Cash buyer vs financed buyer" },
  { id: "timing-and-lapses", label: "Timing, renewals and lapses" },
  { id: "storm-survey-switching", label: "Storms, surveys and switching insurers" },
  { id: "faq", label: "Frequently asked questions" },
];

const faqs = [
  {
    question: "Can I use my existing yacht insurance when financing?",
    answer:
      "Sometimes, but existing cover often needs changes. Common gaps are lower liability limits, the wrong deductible, missing loss payee wording, or an insured value that does not satisfy the lender.",
  },
  {
    question: "Does lender-required insurance usually cost more?",
    answer:
      "Yes, often meaningfully more. Lender-required cover is usually broader, carries higher liability limits, uses lower deductibles and includes specific wording that many cash buyers would not have chosen on their own.",
  },
  {
    question: "What happens if I cannot get insurance that meets lender requirements?",
    answer:
      "The lender normally will not fund the loan. Insurance that satisfies the lender is a closing condition, not an optional extra to sort out later.",
  },
  {
    question: "Do all lenders ask for the same insurance setup?",
    answer:
      "No. The broad logic is similar, but liability minimums, deductible caps, extra cover requirements and process detail vary by lender and by yacht size or value.",
  },
  {
    question: "Can I reduce coverage after a few years of making loan payments?",
    answer:
      "Normally no. The loan agreement usually requires you to maintain the required insurance throughout the full term, not just at the beginning.",
  },
  {
    question: "Does the lender check my insurance every year?",
    answer:
      "Usually yes. Renewal confirmations and insurer notices are commonly used to monitor whether the required cover remains in place throughout the loan.",
  },
  {
    question: "What happens if my insurance lapses after closing?",
    answer:
      "That can trigger default under the loan. A lender may arrange force-placed cover, which is often much more expensive and usually protects the lender's interest more than yours.",
  },
  {
    question: "Can I get quotes before my offer is accepted?",
    answer:
      "Yes, and it is wise to do so. Early quotes help you understand whether the ongoing cost and lender-level requirements still fit the purchase realistically.",
  },
];

const relatedPages = [
  {
    href: "/insurance",
    title: "Insurance hub",
    blurb: "The broader Waaza insurance pillar.",
  },
  {
    href: "/insurance/yacht-insurance-basics",
    title: "Yacht insurance basics",
    blurb: "Start with the core insurance structure before lender wording enters the picture.",
  },
  {
    href: "/financing/how-yacht-financing-works",
    title: "How yacht financing works",
    blurb: "See why lenders view insurance as part of collateral protection.",
  },
  {
    href: "/financing/how-to-finance-a-yacht-purchase",
    title: "How to finance a yacht purchase",
    blurb: "See where insurance becomes critical during the deal timeline.",
  },
  {
    href: "/assessment/how-much-yacht-can-i-afford",
    title: "How much yacht can I afford?",
    blurb: "Check whether lender-level cover still fits the ownership picture.",
  },
  {
    href: "/yacht-finance-calculator",
    title: "Yacht finance calculator",
    blurb: "Model the monthly side alongside deposit and insurance costs.",
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

function ShieldIcon({ size = 16 }: { size?: number }) {
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
      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3Z" />
      <path d="m9.5 12 1.7 1.7 3.8-4" />
    </svg>
  );
}

function LockIcon({ size = 16 }: { size?: number }) {
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
      <rect x="4" y="11" width="16" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 1 1 8 0v3" />
    </svg>
  );
}

function Section({
  id,
  title: sectionTitle,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      data-reveal
      style={{
        padding: "56px 0",
        borderTop: `1px solid ${C.gray6}`,
        scrollMarginTop: 110,
      }}
    >
      <h2
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "clamp(34px,3vw,48px)",
          lineHeight: 1.06,
          fontWeight: 400,
          letterSpacing: -1.1,
          marginBottom: 14,
          color: C.black,
        }}
      >
        {sectionTitle}
      </h2>

      <p
        style={{
          fontSize: 17,
          lineHeight: 1.82,
          color: C.gray2,
          marginBottom: 24,
          maxWidth: 920,
          fontWeight: 400,
        }}
      >
        {intro}
      </p>

      <div className="rich" style={{ fontSize: 16, lineHeight: 1.92, color: C.gray2 }}>
        {children}
      </div>
    </section>
  );
}

function VisualSplit({
  imageSrc,
  imageAlt,
  label,
  title: boxTitle,
  body,
  reverse = false,
}: {
  imageSrc: string;
  imageAlt: string;
  label: string;
  title: string;
  body: string;
  reverse?: boolean;
}) {
  return (
    <section
      data-reveal
      className={`visual-split ${reverse ? "reverse" : ""}`}
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(320px,.92fr) minmax(0,1.08fr)",
        gap: 18,
        margin: "18px 0 8px",
      }}
    >
      <div
        style={{
          background: C.accent,
          borderRadius: 30,
          padding: "34px 34px 30px",
          color: C.black,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: 360,
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 12px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.38)",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 1.1,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            <LockIcon size={14} />
            {label}
          </div>

          <h3
            style={{
              fontSize: "clamp(30px,3vw,46px)",
              lineHeight: 1.04,
              fontWeight: 600,
              margin: "0 0 18px",
              letterSpacing: -1,
            }}
          >
            {boxTitle}
          </h3>

          <p
            style={{
              fontSize: 16,
              lineHeight: 1.82,
              margin: 0,
              maxWidth: 520,
            }}
          >
            {body}
          </p>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          borderRadius: 30,
          overflow: "hidden",
          minHeight: 360,
        }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 1180px) 100vw, 60vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
}

function InfoCard({
  title: cardTitle,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div
      style={{
        background: C.white,
        border: `1px solid ${C.gray6}`,
        borderRadius: 24,
        padding: "22px 22px 20px",
      }}
    >
      <div
        style={{
          fontSize: 20,
          lineHeight: 1.2,
          color: C.black,
          fontWeight: 500,
          letterSpacing: -0.3,
          marginBottom: 10,
        }}
      >
        {cardTitle}
      </div>
      <p
        style={{
          margin: 0,
          fontSize: 15,
          lineHeight: 1.8,
          color: C.gray2,
        }}
      >
        {body}
      </p>
    </div>
  );
}

function SimpleList({ items }: { items: string[] }) {
  return (
    <ul
      style={{
        margin: "8px 0 0",
        paddingLeft: 18,
        display: "grid",
        gap: 10,
      }}
    >
      {items.map((item) => (
        <li key={item} style={{ color: C.gray2 }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: absoluteUrl("/home/waaza-yacht-financing-tool--8.jpg"),
    datePublished: "2026-03-17T00:00:00.000Z",
    dateModified: "2026-03-17T00:00:00.000Z",
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
      "@id": absoluteUrl("/insurance/yacht-insurance-vs-financing-requirements"),
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
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Insurance", item: absoluteUrl("/insurance") },
      {
        "@type": "ListItem",
        position: 3,
        name: "Yacht insurance vs financing requirements",
        item: absoluteUrl("/insurance/yacht-insurance-vs-financing-requirements"),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <style>{`
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; background: ${C.bg}; }
        a { text-decoration: none; color: inherit; }

        .rich p { margin: 0 0 18px; }
        .rich h3 {
          margin: 28px 0 10px;
          font-family: 'Inter Tight', sans-serif;
          font-size: 22px;
          line-height: 1.2;
          font-weight: 500;
          color: ${C.black};
        }
        .rich strong { font-weight: 600; color: ${C.black}; }
        .rich a {
          color: ${C.black};
          font-weight: 600;
          box-shadow: inset 0 -1px 0 rgba(10,10,10,.18);
          transition: box-shadow .24s ease;
        }
        .rich a:hover {
          box-shadow: inset 0 -2px 0 ${C.accent};
        }

        .hero-shell {
          position: relative;
          min-height: 86vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: ${C.black};
        }
        .hero-media {
          position: absolute;
          inset: 0;
        }
        .hero-media::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.40);
        }
        .hero-copy {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          padding: 56px 24px 60px;
          text-align: center;
          color: #fff;
          animation: heroRise 1s cubic-bezier(0.16,1,0.3,1) .06s both;
        }
        .hero-copy a { color: #fff; }
        .hero-breadcrumbs {
          display: flex;
          gap: 8px;
          justify-content: center;
          flex-wrap: wrap;
          font-size: 13px;
          color: rgba(255,255,255,0.72);
          margin-bottom: 18px;
        }
        .hero-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 999px;
          background: ${C.accent};
          color: ${C.black};
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          margin-bottom: 22px;
        }
        .hero-sub {
          max-width: 860px;
          margin: 0 auto 30px;
          font-size: 18px;
          line-height: 1.85;
          color: rgba(255,255,255,0.88);
          font-weight: 400;
        }
        .hero-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 34px;
        }
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 14px;
          max-width: 980px;
          margin: 0 auto;
        }
        .hero-stat {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 22px;
          padding: 18px 20px;
          backdrop-filter: blur(6px);
          text-align: left;
        }

        .layout-grid {
          display: grid;
          grid-template-columns: 280px minmax(0,1fr);
          gap: 42px;
          align-items: start;
        }
        .toc-shell {
          position: sticky;
          top: 104px;
          align-self: start;
          padding-top: 6px;
        }
        .toc-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: ${C.gray4};
          margin-bottom: 18px;
        }
        .toc-list {
          position: relative;
          display: grid;
          gap: 0;
          padding-left: 18px;
        }
        .toc-list::before {
          content: "";
          position: absolute;
          left: 4px;
          top: 0;
          bottom: 0;
          width: 1px;
          background: ${C.gray6};
        }
        .toc-link {
          position: relative;
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 12px;
          align-items: start;
          padding: 12px 0;
          color: ${C.gray3};
          transition: color .24s ease, transform .24s ease;
        }
        .toc-link::before {
          content: "";
          position: absolute;
          left: -18px;
          top: 18px;
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: ${C.bg};
          border: 1px solid ${C.gray5};
          transition: background .24s ease, border-color .24s ease, transform .24s ease;
        }
        .toc-link:hover,
        .toc-link[data-active="true"] {
          color: ${C.black};
          transform: translateX(2px);
        }
        .toc-link:hover::before,
        .toc-link[data-active="true"]::before {
          background: ${C.accent};
          border-color: ${C.accent};
        }
        .toc-number {
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: ${C.gray4};
          padding-top: 2px;
        }

        .visual-split.reverse > :first-child { order: 2; }
        .visual-split.reverse > :last-child { order: 1; }

        .mid-cta {
          background: ${C.accent};
          border-radius: 32px;
          padding: 40px clamp(24px,4vw,42px);
          color: ${C.black};
          margin: 22px 0 10px;
        }
        .end-cta {
          background: ${C.tint};
          border: 1px solid ${C.gray6};
          border-radius: 30px;
          padding: 34px clamp(24px,4vw,40px);
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 16px;
          margin-top: 22px;
        }

        .faq-grid { display: grid; gap: 12px; }
        .faq-item {
          border-top: 1px solid ${C.gray6};
          border-bottom: 1px solid ${C.gray6};
          background: transparent;
          transition: border-color .25s ease;
        }
        .faq-item:hover { border-color: ${C.gray5}; }
        .faq-summary {
          list-style: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 18px 0;
          font-size: 17px;
          line-height: 1.45;
          font-weight: 500;
          color: ${C.black};
        }
        .faq-summary::-webkit-details-marker { display: none; }
        .faq-plus {
          flex: 0 0 auto;
          width: 32px;
          height: 32px;
          border-radius: 999px;
          border: 1px solid ${C.gray6};
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform .28s ease, background .28s ease, border-color .28s ease;
        }
        .faq-item[open] .faq-plus {
          transform: rotate(45deg);
          background: ${C.accentPale};
          border-color: ${C.accent};
        }

        .readmore-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 16px;
        }
        .readmore-card {
          display: block;
          padding: 22px 0;
          border-top: 1px solid ${C.gray6};
          border-bottom: 1px solid ${C.gray6};
          transition: transform .24s ease, border-color .24s ease;
        }
        .readmore-card:hover {
          transform: translateY(-1px);
          border-color: ${C.gray5};
        }

        .pill-yellow:hover { background: ${C.accentHover}; transform: translateY(-1px); }
        .pill-soft:hover { background: #e7e7e7; transform: translateY(-1px); }
        .pill-outline:hover { border-color: rgba(255,255,255,.56) !important; background: rgba(255,255,255,.1); }

        [data-reveal] {
          opacity: 1;
          transform: none;
          transition: opacity .85s cubic-bezier(0.16,1,0.3,1), transform .85s cubic-bezier(0.16,1,0.3,1);
          will-change: opacity, transform;
        }
        [data-reveal].will-reveal {
          opacity: 0;
          transform: translateY(18px);
        }
        [data-reveal].will-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes heroRise {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1180px) {
          .layout-grid,
          .hero-stats,
          .readmore-grid,
          .visual-split,
          .card-grid { grid-template-columns: 1fr !important; }
          .toc-shell { position: relative !important; top: auto !important; }
        }

        @media (max-width: 820px) {
          .page-h1 { font-size: 48px !important; letter-spacing: -1.1px !important; }
          .hero-shell { min-height: 72vh; }
          .hero-sub { font-size: 17px; }
        }
      `}</style>

      <Script id="page-reveal" strategy="afterInteractive">
        {`
          (() => {
            const revealEls = Array.from(document.querySelectorAll("[data-reveal]"));
            const sectionEls = Array.from(document.querySelectorAll("section[id]"));
            const tocLinks = Array.from(document.querySelectorAll(".toc-link"));

            revealEls.forEach((el) => el.classList.add("will-reveal"));

            const linkMap = new Map(
              tocLinks.map((link) => [link.getAttribute("href")?.replace("#", ""), link])
            );

            const revealObserver = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                  }
                });
              },
              { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
            );

            revealEls.forEach((el) => revealObserver.observe(el));

            const tocObserver = new IntersectionObserver(
              (entries) => {
                const visible = entries
                  .filter((entry) => entry.isIntersecting)
                  .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (!visible) return;

                tocLinks.forEach((link) => link.removeAttribute("data-active"));
                const active = linkMap.get(visible.target.id);
                if (active) active.setAttribute("data-active", "true");
              },
              { rootMargin: "-18% 0px -58% 0px", threshold: [0.15, 0.35, 0.6] }
            );

            sectionEls.forEach((section) => tocObserver.observe(section));
          })();
        `}
      </Script>

      <main
        style={{
          background: C.bg,
          color: C.black,
          fontFamily: "'Inter Tight', sans-serif",
          padding: "0 0 32px",
        }}
      >
        <section className="hero-shell">
          <div className="hero-media">
            <Image
              src="/home/waaza-yacht-financing-tool--8.jpg"
              alt="Yacht financing and insurance paperwork before closing"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="hero-copy">
            <div className="hero-breadcrumbs">
              <span>
                <Link href="/">Home</Link>
              </span>
              <span style={{ opacity: 0.5 }}>›</span>
              <span>
                <Link href="/insurance">Insurance</Link>
              </span>
              <span style={{ opacity: 0.5 }}>›</span>
              <span style={{ color: "#fff" }}>Insurance vs financing requirements</span>
            </div>

            <div className="hero-kicker">
              <LockIcon size={14} />
              Lender requirements
            </div>

            <h1
              className="page-h1"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(58px,7vw,94px)",
                lineHeight: 0.96,
                fontWeight: 400,
                letterSpacing: -2.1,
                margin: "0 auto 18px",
                maxWidth: 980,
              }}
            >
              Yacht insurance versus financing requirements, and where lender logic takes over
            </h1>

            <p className="hero-sub">
              Once a lender enters the transaction, insurance stops being purely your preference.
              Coverage has to protect the yacht, protect the lender's security interest, and stay in
              place for the full life of the loan.
            </p>

            <div className="hero-actions">
              <Link
                href="/insurance/yacht-insurance-basics"
                className="pill-yellow"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  padding: "17px 24px",
                  borderRadius: 12,
                  background: C.accent,
                  color: C.black,
                  fontWeight: 600,
                  transition: "all .24s ease",
                }}
              >
                Start with insurance basics
                <ArrowRightIcon size={16} />
              </Link>

              <Link
                href="/financing/how-to-finance-a-yacht-purchase"
                className="pill-outline"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  padding: "17px 24px",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,.26)",
                  color: "#fff",
                  fontWeight: 600,
                  transition: "all .24s ease",
                }}
              >
                See where it hits the deal
                <ArrowRightIcon size={16} />
              </Link>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: 1.1,
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.66)",
                    marginBottom: 8,
                  }}
                >
                  Common minimum
                </div>
                <div style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>
                  Often £1m to £2m liability
                </div>
              </div>

              <div className="hero-stat">
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: 1.1,
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.66)",
                    marginBottom: 8,
                  }}
                >
                  Key wording
                </div>
                <div style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>
                  Loss payee + additional insured
                </div>
              </div>

              <div className="hero-stat">
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: 1.1,
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.66)",
                    marginBottom: 8,
                  }}
                >
                  Ongoing obligation
                </div>
                <div style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>
                  Cover must stay live
                </div>
              </div>
            </div>
          </div>
        </section>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "34px 24px 0" }}>
          <div className="layout-grid" style={{ paddingBottom: 90 }}>
            <aside className="toc-shell">
              <div className="toc-label">
                <ShieldIcon size={14} />
                On this page
              </div>

              <div className="toc-list">
                {toc.map((item, index) => (
                  <a key={item.id} href={`#${item.id}`} className="toc-link">
                    <span className="toc-number">{String(index + 1).padStart(2, "0")}</span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </aside>

            <div>
              <Section
                id="overview"
                title="What changes once a lender is involved?"
                intro="The biggest shift is simple: the policy is no longer just there to reflect your own comfort with risk."
              >
                <p>
                  As a cash owner, you can shape a policy around your own preferences. You can raise
                  deductibles, carry lower liability, narrow the cruising area or choose cover that
                  feels acceptable to you personally. Once you finance the yacht, that flexibility
                  narrows quickly. The lender wants the collateral fully protected and wants its own
                  position protected if the yacht is damaged, lost or caught up in a claim.
                </p>
                <p>
                  That means insurance becomes part of the loan structure itself. It is not a late
                  admin line item. It sits alongside the purchase agreement, the survey, the proof of
                  funds and the closing file. If you want the wider context first, this page sits
                  naturally beside <Link href="/insurance/yacht-insurance-basics">yacht insurance basics</Link>,{" "}
                  <Link href="/financing/how-yacht-financing-works">how yacht financing works</Link> and{" "}
                  <Link href="/financing/how-to-finance-a-yacht-purchase">the full purchase process</Link>.
                </p>
                <p>
                  The practical consequence is that your personal insurance preferences become
                  secondary. The lender dictates the minimum standard. If your preferred policy falls
                  short, the answer is not usually negotiation. The answer is that you need a policy
                  that meets the lender's conditions or the deal does not fund.
                </p>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--9.jpg"
                imageAlt="Lender review of yacht insurance paperwork before closing"
                label="The lender view"
                title="To the lender, insurance is not just about your peace of mind. It is part of how the collateral stays protected."
                body="That is why the policy wording, the insured value, the deductible and the liability limits all become part of the closing conversation once finance is involved."
              />

              <Section
                id="non-negotiables"
                title="What do lenders normally treat as non-negotiable?"
                intro="Different lenders phrase things differently, but the core requirements are usually recognisable very quickly."
              >
                <p>
                  First, the yacht normally needs hull and machinery cover at a level that protects
                  the lender's exposure properly. Second, the policy usually needs stronger liability
                  protection than many cash buyers would choose on their own. Third, the lender needs
                  to be named correctly in the policy so that its rights are clear if something goes
                  wrong.
                </p>
                <p>
                  In practice, that usually means hull cover for at least the loan amount and often
                  the full yacht value if that is higher. It also usually means liability cover in the
                  £1 million to £2 million range at minimum, sometimes more on larger or more exposed
                  cases. It usually means the lender appearing as loss payee on the hull side and as
                  additional insured on the liability side. And it usually means a broad form of
                  cover, not something thin or overly restricted.
                </p>
                <p>
                  This is why buyers should not rely on assumptions when budgeting. If the base deal
                  already feels tight, the added cost of lender-level insurance can matter. That is
                  exactly where the <Link href="/assessment/how-much-yacht-can-i-afford">affordability
                  assessment</Link> and <Link href="/yacht-finance-calculator">calculator</Link> help,
                  because the premium has to make sense inside the whole ownership picture, not just
                  as a closing-day surprise.
                </p>

                <div className="card-grid">
                  <InfoCard
                    title="Usually required"
                    body="Full hull cover, stronger liability limits, lender wording, suitable deductible levels and a policy structure the lender considers broad enough."
                  />
                  <InfoCard
                    title="Usually not negotiable"
                    body="Trying to keep a thinner cash-buyer policy when the lender has already made clear it wants something broader and cleaner."
                  />
                </div>
              </Section>

              <Section
                id="hull"
                title="What does the lender usually expect from hull cover?"
                intro="The lender cares about the yacht as collateral, so the hull side of the policy is central."
              >
                <p>
                  The insured value generally needs to protect the lender properly. If the yacht is
                  worth more than the loan balance, the lender may still expect the hull cover to
                  reflect the yacht's supportable value rather than just the smaller outstanding loan.
                  Under-insuring the yacht to save on premium usually does not survive lender review.
                </p>
                <p>
                  Agreed value is commonly preferred because it gives clarity around what the policy is
                  built on. That matters to the lender for the same reason it matters to the owner:
                  it reduces ambiguity if the yacht becomes a total loss. Deductibles matter too.
                  Many cash owners would accept a higher deductible to trim premium, but lenders often
                  cap the deductible because they do not want repair decisions or collateral condition
                  compromised by a deductible the owner cannot comfortably absorb.
                </p>
                <p>
                  Coverage territory matters as well. If the loan file says the yacht is going to be
                  based in one place and used across certain cruising grounds, the insurance needs to
                  reflect that honestly. A mismatch between intended use and insured area is exactly
                  the kind of thing that creates closing friction or later claim trouble.
                </p>

                <div className="card-grid">
                  <InfoCard
                    title="Agreed value"
                    body="Lenders usually prefer cover that is clear and supportable rather than a later argument over what the yacht was worth after the loss."
                  />
                  <InfoCard
                    title="Deductible discipline"
                    body="A deductible that feels clever for a cash owner may feel too aggressive for a lender trying to protect the ongoing condition of the collateral."
                  />
                </div>
              </Section>

              <Section
                id="liability"
                title="What about liability and P&I requirements?"
                intro="This is where many owners discover that lender requirements are not built around the minimum they personally would have chosen."
              >
                <p>
                  Liability minimums commonly sit around £1 million to £2 million and can rise on
                  larger or more exposed yachts. The lender is not choosing those numbers at random.
                  If an incident turns into a major injury claim, property damage claim, pollution
                  event or wider legal dispute, the lender does not want its name or its collateral
                  position sitting alongside thin insurance.
                </p>
                <p>
                  That is also why lenders often care about the P&amp;I side being properly rounded
                  out rather than narrow. Pollution exposure, wreck removal, collision liability and
                  other practical claim areas matter because real-life marine incidents are rarely
                  neat. The lender wants the policy to feel robust enough that a claim does not leave
                  the yacht or the loan position exposed.
                </p>
                <p>
                  If you are comparing this against a cash-buyer approach, remember that many cash
                  buyers might carry lower liability because they are comfortable with the trade-off.
                  Financing changes that. The lender is effectively saying that your personal risk
                  tolerance is no longer the only thing that matters.
                </p>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--10.jpg"
                imageAlt="Insurance policy wording showing lender clause and liability requirements"
                label="Why the wording matters"
                title="The lender does not just want a certificate saying you are insured. It wants the right protection attached to the right parties."
                body="That is why loss payee wording, additional insured wording and mortgagee clauses matter so much during closing."
                reverse
              />

              <Section
                id="loss-payee"
                title="What do loss payee and additional insured actually mean here?"
                intro="These are some of the most important pieces of lender wording, and they are often poorly understood until the closing pack is being assembled."
              >
                <p>
                  When the lender is listed as loss payee on the hull side, it means the insurer knows
                  the lender has first claim on the proceeds up to the outstanding loan balance if the
                  yacht suffers a covered major loss. That protects the lender from the yacht being
                  destroyed while the debt remains unpaid.
                </p>
                <p>
                  When the lender is listed as additional insured on the liability side, it means the
                  policy is also recognising the lender's interest if it ends up named in a claim that
                  arises from the yacht. That is different from loss payee logic. It is about who is
                  protected in the liability context, not who gets hull proceeds first.
                </p>
                <p>
                  Buyers do not need to become policy-law experts, but they do need to understand that
                  this wording is not decorative. It is one of the core reasons the lender is willing
                  to close with comfort in the first place.
                </p>

                <div className="card-grid">
                  <InfoCard
                    title="Loss payee"
                    body="Mainly about who gets paid first on the hull side if there is a major covered loss and the loan still needs to be satisfied."
                  />
                  <InfoCard
                    title="Additional insured"
                    body="Mainly about extending the liability-side protection so the lender is not left exposed if it is brought into a claim."
                  />
                </div>
              </Section>

              <section data-reveal className="mid-cta">
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 12px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.42)",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: 1.1,
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  <LockIcon size={14} />
                  Budget this early
                </div>

                <h2
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "clamp(40px,5vw,74px)",
                    lineHeight: 1.02,
                    fontWeight: 400,
                    letterSpacing: -1.6,
                    marginBottom: 14,
                    maxWidth: 980,
                    color: C.black,
                  }}
                >
                  Financing often makes insurance more expensive than buyers first assume.
                </h2>

                <p
                  style={{
                    fontSize: 18,
                    lineHeight: 1.82,
                    color: C.black,
                    maxWidth: 980,
                    marginBottom: 24,
                  }}
                >
                  Higher limits, broader cover and tighter deductible rules can change the ownership
                  picture more than expected.
                </p>

                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <Link
                    href="/assessment/how-much-yacht-can-i-afford"
                    className="pill-soft"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      padding: "18px 24px",
                      borderRadius: 14,
                      background: C.softBtn,
                      color: C.black,
                      fontWeight: 600,
                      transition: "all .24s ease",
                    }}
                  >
                    Check affordability
                    <ArrowRightIcon size={16} />
                  </Link>

                  <Link
                    href="/yacht-finance-calculator"
                    className="pill-soft"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      padding: "18px 24px",
                      borderRadius: 14,
                      background: "rgba(255,255,255,0.5)",
                      color: C.black,
                      fontWeight: 600,
                      transition: "all .24s ease",
                    }}
                  >
                    Run the numbers
                    <ArrowRightIcon size={16} />
                  </Link>
                </div>
              </section>

              <Section
                id="proof"
                title="What proof of insurance does the lender usually want before closing?"
                intro="A vague promise that insurance will be sorted is not enough. The lender usually wants formal evidence that the policy is live and properly structured."
              >
                <p>
                  This normally means a binder or policy documentation showing the effective date, the
                  key coverage levels, the deductible structure and the insured area. The lender will
                  also want to see that its exact legal name appears correctly where it needs to
                  appear. Loose references are rarely enough if the closing team is doing its job
                  properly.
                </p>
                <p>
                  In many cases the lender also wants formal confirmation from the insurer or broker
                  that the policy is in place and meets the required conditions. That is why leaving
                  insurance until the last moment is such a common way to make a clean deal feel
                  messy. The closer you get to funding, the less patience anyone has for half-ready
                  documents.
                </p>
                <p>
                  The cleanest approach is to get the quoting process moving early and make sure the
                  insurer understands from the start that a lender will need specific wording and
                  specific timing. That keeps the closing process much calmer.
                </p>
              </Section>

              <Section
                id="cash-vs-financed"
                title="How different is this from what a cash buyer might choose?"
                intro="Sometimes very different. Financing removes a lot of the flexibility a cash owner still has."
              >
                <p>
                  A cash buyer can often accept higher deductibles, lower liability limits, narrower
                  cruising boundaries or thinner additional cover if they are comfortable with those
                  trade-offs. They may decide the savings are worth the extra retained risk. A lender
                  does not usually think that way.
                </p>
                <p>
                  With financing, the lender usually wants a more conservative policy structure. That
                  often means lower deductibles, broader liability, clearer insured values and less
                  tolerance for exclusions or mismatches. In other words, the financed policy is not
                  just a more expensive version of the cash policy. It is often a structurally
                  different product because it is serving a different purpose.
                </p>
                <p>
                  This is why it is useful to compare the insurance question against the wider loan
                  decision. If a financed purchase only works with a very thin view of insurance cost,
                  that may be telling you something important about the overall stretch of the deal.
                </p>

                <div className="card-grid">
                  <InfoCard
                    title="Cash buyer freedom"
                    body="More room to carry higher deductibles, lighter limits or narrower cover if the owner actively wants that trade-off."
                  />
                  <InfoCard
                    title="Financed buyer reality"
                    body="The lender's minimum standard replaces much of that freedom because the policy now has to protect the loan structure too."
                  />
                </div>
              </Section>

              <Section
                id="timing-and-lapses"
                title="Why do timing, renewals and lapses matter so much?"
                intro="Because lender-level insurance is not just a closing condition. It is an ongoing covenant throughout the life of the loan."
              >
                <p>
                  At the front end, insurance needs to be ready in time for closing. That is reason
                  enough to start the conversation early. But the more important point is what happens
                  afterward. The lender generally expects the required cover to stay in force for the
                  full term. If the cover lapses or drops below the required standard, that can become
                  a loan problem, not just an insurance problem.
                </p>
                <p>
                  This is where force-placed insurance enters the conversation. If the lender believes
                  its interest is no longer protected, it may arrange insurance itself and charge the
                  cost back to the borrower. That cover is often more expensive and usually far less
                  designed around your interests than a properly chosen normal policy. In more serious
                  cases, a lapse in required cover can also become an event of default.
                </p>
                <p>
                  The practical lesson is simple. Do not treat renewal as background admin. For a
                  financed yacht, renewal discipline is part of staying compliant with the loan.
                </p>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--6.jpg"
                imageAlt="Storm planning, survey reports and insurance renewal paperwork for a financed yacht"
                label="Ongoing compliance"
                title="Lender-required insurance is not something you satisfy once and forget. It stays attached to the loan the whole way through."
                body="That is why renewal monitoring, storm-area rules and insurer changes all matter more once the yacht is financed."
              />

              <Section
                id="storm-survey-switching"
                title="What about hurricane zones, surveys and switching insurers later?"
                intro="These are the areas where owners often assume flexibility and then discover the lender still wants a say."
              >
                <p>
                  In higher-risk storm areas, the lender may care about named-storm treatment,
                  seasonal movement plans or where the yacht is kept during the riskiest periods. The
                  point is not to overcomplicate the file. The point is that predictable environmental
                  risk matters more when a lender's collateral is involved.
                </p>
                <p>
                  Surveys matter for similar reasons. The insurer may need them, and the lender relies
                  on the same broad logic because the survey helps support condition and value. Older
                  yachts, higher-value yachts and insurer changes all make survey recency more
                  important. That is why surveys often sit inside both the financing process and the
                  insurance process at the same time, rather than as two separate tasks.
                </p>
                <p>
                  Switching insurers after closing is usually possible, but the replacement policy
                  still has to meet the original lender standard. The clean way to do it is to make
                  sure the new cover is approved and documented before the old cover ends, rather than
                  leaving a gap and hoping the lender never notices.
                </p>
              </Section>

              <section data-reveal className="end-cta" style={{ marginTop: 10 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 1.1,
                    textTransform: "uppercase",
                    color: C.gray4,
                    marginBottom: 10,
                  }}
                >
                  Next step
                </div>

                <h2
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "clamp(34px,4vw,52px)",
                    lineHeight: 1.02,
                    letterSpacing: -1.2,
                    fontWeight: 400,
                    margin: "0 0 14px",
                    maxWidth: 760,
                  }}
                >
                  Price the lender's insurance standard before you commit emotionally to the deal.
                </h2>

                <p
                  style={{
                    maxWidth: 760,
                    fontSize: 16,
                    lineHeight: 1.82,
                    color: C.gray2,
                    margin: "0 0 24px",
                  }}
                >
                  That is when you find out whether the financed version of the ownership picture
                  still feels right.
                </p>

                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <Link
                    href="/assessment/how-much-yacht-can-i-afford"
                    className="pill-yellow"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      padding: "17px 24px",
                      borderRadius: 12,
                      background: C.accent,
                      color: C.black,
                      fontWeight: 600,
                      transition: "all .24s ease",
                    }}
                  >
                    Check affordability
                    <ArrowRightIcon size={16} />
                  </Link>

                  <Link
                    href="/insurance"
                    className="pill-soft"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      padding: "17px 24px",
                      borderRadius: 12,
                      background: C.softBtn,
                      color: C.black,
                      fontWeight: 600,
                      transition: "all .24s ease",
                    }}
                  >
                    Back to insurance hub
                    <ArrowRightIcon size={16} />
                  </Link>
                </div>
              </section>

              <Section
                id="faq"
                title="Frequently asked questions"
                intro="The practical questions usually matter more than the policy jargon."
              >
                <div className="faq-grid">
                  {faqs.map((faq) => (
                    <details key={faq.question} className="faq-item">
                      <summary className="faq-summary">
                        <span>{faq.question}</span>
                        <span className="faq-plus">+</span>
                      </summary>
                      <div
                        style={{
                          padding: "0 0 18px",
                          color: C.gray2,
                          fontSize: 16,
                          lineHeight: 1.85,
                          maxWidth: 980,
                        }}
                      >
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </Section>

              <section
                data-reveal
                style={{
                  padding: "22px 0 12px",
                  borderTop: `1px solid ${C.gray6}`,
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 1.1,
                    textTransform: "uppercase",
                    color: C.gray4,
                    marginBottom: 14,
                  }}
                >
                  Read next
                </div>

                <div className="readmore-grid">
                  {relatedPages.map((item) => (
                    <Link key={item.href} href={item.href} className="readmore-card">
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          letterSpacing: 1.1,
                          textTransform: "uppercase",
                          color: C.gray4,
                          marginBottom: 10,
                        }}
                      >
                        Related page
                      </div>
                      <div
                        style={{
                          fontSize: 23,
                          lineHeight: 1.14,
                          letterSpacing: -0.5,
                          fontWeight: 500,
                          color: C.black,
                          marginBottom: 10,
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontSize: 15,
                          lineHeight: 1.75,
                          color: C.gray2,
                        }}
                      >
                        {item.blurb}
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
