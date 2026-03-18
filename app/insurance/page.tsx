
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { ReactNode } from "react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.waaza.co";

const title = "Yacht Insurance: Cover, Costs & What Matters | Waaza";
const description =
  "Understand yacht insurance clearly: hull cover, liability, agreed value, navigation limits, survey requirements, lender expectations and the mistakes to avoid.";

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
    "yacht insurance",
    "yacht insurance basics",
    "yacht liability insurance",
    "hull and machinery insurance",
    "yacht insurance cost",
    "marine insurance for yachts",
  ],
  authors: [{ name: "Waaza" }],
  alternates: {
    canonical: "/insurance",
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
    url: "/insurance",
    siteName: "Waaza",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/home/waaza-yacht-financing-tool--6.jpg",
        width: 1200,
        height: 630,
        alt: "Yacht insurance hub page for owners and buyers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/home/waaza-yacht-financing-tool--6.jpg"],
  },
};

const toc = [
  { id: "what-yacht-insurance-does", label: "What yacht insurance really does" },
  { id: "two-core-layers", label: "The two core layers" },
  { id: "what-changes-cost", label: "What changes the cost" },
  { id: "when-it-becomes-essential", label: "When it becomes essential" },
  { id: "what-to-check", label: "What to check before buying a policy" },
  { id: "mistakes", label: "Mistakes that get expensive fast" },
  { id: "faq", label: "Frequently asked questions" },
];

const faqs = [
  {
    question: "Do I need yacht insurance if I am paying cash?",
    answer:
      "Legally, not always. Practically, almost always. A yacht is too large an asset and too large a liability risk to leave exposed just because there is no lender involved.",
  },
  {
    question: "What is the difference between hull insurance and liability cover?",
    answer:
      "Hull and machinery cover protects the yacht itself. Liability cover protects you if your yacht injures someone, damages another vessel or creates a claim against you.",
  },
  {
    question: "How much does yacht insurance usually cost?",
    answer:
      "A rough working range is often around 1% to 3% of insured value per year, though yacht age, cruising area, use, experience and deductibles can move that sharply.",
  },
  {
    question: "Why does agreed value matter so much?",
    answer:
      "Because it gives you clarity upfront. If the yacht is a total loss, you already know the number the policy is built around instead of arguing over depreciated value later.",
  },
  {
    question: "Can navigation limits actually void a claim?",
    answer:
      "Yes. If the policy says the yacht is insured for one cruising area and you operate outside it without approval, the insurer may decline the claim.",
  },
  {
    question: "Do insurers usually require a survey?",
    answer:
      "Often yes, especially on older or more valuable yachts. A recent survey helps the insurer understand condition, risk and supportable value before offering terms.",
  },
];

const relatedPages = [
  {
    href: "/financing/how-to-finance-a-yacht-purchase",
    title: "How to finance a yacht purchase",
    blurb: "See where insurance sits inside the wider buying process.",
  },
  {
    href: "/financing/how-yacht-financing-works",
    title: "How yacht financing works",
    blurb: "Understand why lenders care about insurance before closing.",
  },
  {
    href: "/financing/what-lenders-look-for-in-yacht-financing",
    title: "What lenders look for",
    blurb: "A cleaner file often means fewer surprises later on.",
  },
  {
    href: "/assessment/how-much-yacht-can-i-afford",
    title: "How much yacht can I afford?",
    blurb: "Pressure-test whether insurance still fits the ownership picture.",
  },
  {
    href: "/yacht-finance-calculator",
    title: "Yacht finance calculator",
    blurb: "Model the monthly side alongside deposit and ownership costs.",
  },
];

const upcomingPages = [
  {
    title: "Yacht insurance basics",
    blurb: "The clean starting point for owners who want the essentials first.",
  },
  {
    title: "Hull and machinery insurance",
    blurb: "A closer look at what protects the yacht itself and what does not.",
  },
  {
    title: "P&I and liability cover",
    blurb: "What protects you when the problem is not the boat, but the claim.",
  },
  {
    title: "Insurance vs financing requirements",
    blurb: "Where lender demands stop and sensible owner protection begins.",
  },
  {
    title: "What buyers should have ready for insurers",
    blurb: "The practical checklist that makes quoting and binding smoother.",
  },
  {
    title: "Common insurance mistakes before closing",
    blurb: "The errors that usually appear late and cost the most.",
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

function WaveIcon({ size = 16 }: { size?: number }) {
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
      <path d="M2 13c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />
      <path d="M2 18c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />
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
        {title}
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
  title,
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
            <ShieldIcon size={14} />
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
            {title}
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
  title,
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
        {title}
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

export default function Page() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: absoluteUrl("/insurance"),
    about: "Yacht insurance, liability, hull and machinery cover, policy setup and lender expectations",
    publisher: {
      "@type": "Organization",
      name: "Waaza",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/iconpng.png"),
      },
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
        name: "Insurance",
        item: absoluteUrl("/insurance"),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
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
        .mini-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 16px;
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
          .card-grid,
          .mini-grid { grid-template-columns: 1fr !important; }
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
              src="/home/waaza-yacht-financing-tool--6.jpg"
              alt="Yacht moored at sunset with insurance and ownership risk context"
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
              <span style={{ color: "#fff" }}>Insurance</span>
            </div>

            <div className="hero-kicker">
              <ShieldIcon size={14} />
              Insurance hub
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
              Yacht insurance, explained in a way that actually helps you make decisions
            </h1>

            <p className="hero-sub">
              Insurance is not just paperwork for lenders or marinas. It is the layer that protects
              the yacht, protects you from claims, and keeps one mistake from turning into a much
              bigger financial problem than the boat itself.
            </p>

            <div className="hero-actions">
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
                Check the wider ownership picture
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
                See where insurance fits in the deal
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
                  Core layers
                </div>
                <div style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>
                  Yacht cover + liability cover
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
                  Typical annual range
                </div>
                <div style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>
                  Often around 1% to 3%
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
                  Often required by
                </div>
                <div style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>
                  Lenders, marinas, common sense
                </div>
              </div>
            </div>
          </div>
        </section>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "34px 24px 0" }}>
          <div className="layout-grid" style={{ paddingBottom: 90 }}>
            <aside className="toc-shell">
              <div className="toc-label">
                <WaveIcon size={14} />
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
                id="what-yacht-insurance-does"
                title="What is yacht insurance really doing for you?"
                intro="At the simplest level, yacht insurance protects the boat and protects you. The useful version is understanding how those two things break apart once a real incident happens."
              >
                <p>
                  Yacht insurance sits in an awkward place for a lot of buyers. They know they
                  should have it, but they often only pay real attention once a lender, broker or
                  marina asks for proof. That is too late. Insurance changes the ownership picture
                  early, because it affects the running cost, the risk profile and the practical
                  ease of getting from offer to closing.
                </p>
                <p>
                  If you are coming at this from the buying side first, it helps to place insurance
                  in the wider sequence. The broader financing hub at{" "}
                  <Link href="/financing">/financing</Link> and the step-by-step page on{" "}
                  <Link href="/financing/how-to-finance-a-yacht-purchase">how to finance a yacht
                  purchase</Link> show exactly where insurers, lenders and surveys start interacting.
                  Insurance is not a separate world. It is part of the same transaction logic that
                  decides whether the whole deal feels solid.
                </p>
                <p>
                  In practical terms, most owners want the policy to do three things well. First,
                  protect the yacht itself if it is damaged, stolen or lost. Second, protect them
                  financially if their yacht injures someone or damages other property. Third, avoid
                  grey areas that only show up after a claim, such as weak liability limits,
                  confusing navigation boundaries or a value basis that turns out to be less generous
                  than expected.
                </p>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--3.jpg"
                imageAlt="Insurance paperwork, purchase documents and ownership planning beside a yacht"
                label="Why it matters early"
                title="Insurance is easy to underestimate when everything is calm. It becomes obvious the moment something expensive goes wrong."
                body="That is why sensible owners do not treat cover as a late-stage add-on. They treat it as part of the same planning process as survey, financing, dockage and ongoing cost."
              />

              <Section
                id="two-core-layers"
                title="What are the two core layers of yacht insurance?"
                intro="Almost every policy conversation becomes clearer once you separate protection for the yacht from protection for claims against you."
              >
                <p>
                  The first layer is hull and machinery cover. That is the part that protects the
                  yacht itself: hull, structure, deck, engines, systems, electronics and the wider
                  physical asset. Fire, sinking, collision, theft, storm damage and similar events
                  usually sit here. When owners say they want the boat covered, this is usually what
                  they mean.
                </p>
                <p>
                  The second layer is liability cover, sometimes discussed alongside P&amp;I wording
                  depending on the context. This is the side that protects you when the problem is no
                  longer just damage to your own boat. If your yacht injures someone, damages another
                  vessel, causes property loss or creates legal costs, liability cover is the layer
                  that matters. A lot of owners obsess over the hull value and underthink the size of
                  the claim that can arise from one serious incident.
                </p>
                <p>
                  Both layers matter. One protects the asset you bought. The other protects your
                  balance sheet if the incident expands beyond the asset itself. If you are still
                  working out how all of this sits beside deposit, loan size and monthly cost, it is
                  worth checking <Link href="/assessment/how-much-yacht-can-i-afford">how much yacht
                  you can really afford</Link> rather than viewing insurance in isolation.
                </p>

                <div className="card-grid">
                  <InfoCard
                    title="Hull and machinery"
                    body="This is the policy layer for physical damage to the yacht itself. It is where agreed value, survey quality, yacht age and navigation limits start to matter fast."
                  />
                  <InfoCard
                    title="Liability and P&I"
                    body="This is the layer that responds when other people, other vessels or other property are affected. It is also the part many owners carry too little of."
                  />
                </div>
              </Section>

              <Section
                id="what-changes-cost"
                title="What usually changes the cost of yacht insurance?"
                intro="The headline percentage is easy to quote. The real premium is shaped by what the insurer sees when it reads the boat, the owner and the intended use together."
              >
                <p>
                  Yacht age changes pricing quickly. Newer boats with cleaner systems and more
                  predictable maintenance history usually present a calmer risk profile than older
                  vessels. That same age story also matters on the lending side, which is why{" "}
                  <Link href="/financing/how-vessel-age-affects-financing">how vessel age affects
                  financing</Link> is a useful companion read. The insurer and the lender are not
                  asking the same question, but both are reacting to uncertainty around condition,
                  resale confidence and the chance of trouble later.
                </p>
                <p>
                  Location matters too. Where the yacht is kept, where it will cruise and whether the
                  operating area brings named-storm exposure or other elevated risks all affect the
                  quote. So does experience. A more seasoned owner with a cleaner record and a stable
                  operating pattern usually presents better than a first-time owner planning wide
                  cruising with little documented experience.
                </p>
                <p>
                  Then there is the policy structure itself. Higher deductibles can reduce premium.
                  Agreed value often costs more than actual cash value but removes uncertainty.
                  Charter use, liveaboard use, crewed use and unusual itineraries can all make a
                  quote harder or simply more expensive. That is why insurance should be viewed as
                  part of the total ownership picture, not as a line item to look at in isolation
                  after everything else has already been decided.
                </p>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--8.jpg"
                imageAlt="Marine survey, insurer notes and risk pricing factors laid across a yacht purchase desk"
                label="What insurers are reading"
                title="The premium is not just a number attached to the boat. It is a view on the boat, the owner, the cruising plan and the likelihood of a clean claim story."
                body="That is why two similar yachts can still produce very different quotes once experience, geography, use and policy structure enter the conversation."
                reverse
              />

              <Section
                id="when-it-becomes-essential"
                title="When does yacht insurance stop feeling optional?"
                intro="Sometimes the answer is legal or contractual. More often, it is simply that the downside of going without it is too large to treat casually."
              >
                <p>
                  If you are financing, insurance is rarely optional in any meaningful sense. The
                  lender will normally want proof of cover before closing and will care about both the
                  amount and the structure. That fits naturally with the broader process explained in{" "}
                  <Link href="/financing/how-yacht-financing-works">how yacht financing works</Link> and
                  the lender mindset explained on{" "}
                  <Link href="/financing/what-lenders-look-for-in-yacht-financing">what lenders look
                  for</Link>. The lender is not just asking for a certificate because it likes
                  paperwork. It wants to know the collateral and the wider risk are not sitting
                  exposed.
                </p>
                <p>
                  Even without financing, marinas often care. Liability cover can be required as a
                  condition of dockage, and once you start speaking to managers or service providers,
                  you quickly realise that being uninsured is not treated as a sophisticated choice.
                  It is treated as a risk transfer to everyone around you.
                </p>
                <p>
                  Cash buyers sometimes ask whether they can skip insurance entirely. In a narrow
                  legal sense, sometimes yes. In a practical financial sense, that is much harder to
                  justify once the yacht reaches meaningful value. One loss, one collision or one bad
                  claim can undo years of otherwise careful planning.
                </p>
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
                  <ShieldIcon size={14} />
                  Useful before you buy
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
                  It is better to budget the insurance now than discover later that the ownership picture was tighter than it looked.
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
                  Run the wider affordability view first, then decide what still feels sensible once
                  finance, insurance and ongoing costs all sit in the same frame.
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
                    Model the payment side
                    <ArrowRightIcon size={16} />
                  </Link>
                </div>
              </section>

              <Section
                id="what-to-check"
                title="What should you check before you buy a yacht insurance policy?"
                intro="Most of the nasty surprises in insurance come from assumptions that felt harmless before the claim happened."
              >
                <p>
                  Start with the value basis. Agreed value usually gives far more clarity than actual
                  cash value because the number is settled upfront rather than argued after a total
                  loss. Then check the navigation area. A policy that looks fine in one cruising area
                  can become a problem if the yacht is operated outside the stated zone without
                  approval.
                </p>
                <p>
                  Next comes operator wording and practical use. Who can run the yacht? Does the
                  insurer expect named operators? Does occasional charter use, crew use or seasonal
                  relocation change the terms? Then look at the survey position. Older or more
                  valuable yachts often need a recent survey, and that survey can influence both the
                  willingness to insure and the supportable value.
                </p>
                <p>
                  Finally, pay attention to the parts that feel boring while nothing is wrong:
                  deductibles, exclusions, towing limits, pollution liability and the document set
                  you may need before closing. That last point sits naturally beside the purchase
                  process in <Link href="/financing/how-to-finance-a-yacht-purchase">the financing
                  sequence</Link>, because insurance tends to become urgent at exactly the moment the
                  rest of the transaction is already moving quickly.
                </p>

                <div className="card-grid">
                  <InfoCard
                    title="Check the value basis"
                    body="Know whether the policy is built on agreed value or a depreciating market-value logic before you assume what a total-loss payout looks like."
                  />
                  <InfoCard
                    title="Check the map"
                    body="Navigation limits are not decorative. If the yacht cruises outside the agreed area, the claim story can get messy fast."
                  />
                  <InfoCard
                    title="Check who can operate"
                    body="Do not assume every experienced friend or family member automatically fits the policy wording just because they know boats."
                  />
                  <InfoCard
                    title="Check the survey position"
                    body="On older or higher-value boats, a recent survey often does much of the heavy lifting in getting the policy placed properly."
                  />
                </div>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--10.jpg"
                imageAlt="Owner reviewing navigation limits, agreed value wording and operator restrictions in a yacht insurance policy"
                label="Read the policy properly"
                title="A policy usually looks strongest before the first real claim. The job is to spot the soft edges before they matter."
                body="Value basis, cruising limits, exclusions, deductibles and operator wording are the parts that decide whether the cover still feels generous once a real loss happens."
              />

              <Section
                id="mistakes"
                title="Which yacht insurance mistakes usually hurt the most?"
                intro="The biggest mistakes are rarely dramatic. They are ordinary decisions that look harmless at the quote stage and become painful later."
              >
                <h3>Under-insuring the yacht to save money now</h3>
                <p>
                  A lower insured amount may make the premium feel tidier, but it also means the
                  protection is thinner at exactly the point you would want certainty. Saving a little
                  on premium does not feel clever if the loss is large and the payout does not bring
                  you back to where you thought you were.
                </p>

                <h3>Carrying liability limits that are too light</h3>
                <p>
                  Owners often focus on the yacht value and not enough on the size of a serious claim.
                  Injuries, property damage, clean-up costs and legal fees can all build faster than
                  expected. The more meaningful risk is often not the scratch on your boat. It is the
                  claim that reaches beyond the boat.
                </p>

                <h3>Ignoring the policy after upgrades or changes in use</h3>
                <p>
                  New electronics, a different cruising plan, regular crew, liveaboard use or a shift
                  toward charter all change the shape of the risk. If the policy stays frozen while
                  the yacht and its use evolve, the cover can quietly fall out of step with reality.
                </p>

                <h3>Treating the insurer like an afterthought during the deal</h3>
                <p>
                  Late insurance work can slow closing, frustrate the lender and create last-minute
                  stress around surveys, value confirmation or bindable terms. It is cleaner to start
                  the conversation early and keep the insurer inside the transaction timeline rather
                  than outside it.
                </p>
              </Section>

              <Section
                id="faq"
                title="Frequently asked questions"
                intro="A few clear answers help more than a long policy glossary."
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
                  padding: "22px 0 10px",
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
                  This silo will cover
                </div>

                <div className="mini-grid">
                  {upcomingPages.map((item) => (
                    <div
                      key={item.title}
                      style={{
                        background: C.white,
                        border: `1px solid ${C.gray6}`,
                        borderRadius: 24,
                        padding: "22px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 19,
                          lineHeight: 1.2,
                          fontWeight: 500,
                          color: C.black,
                          letterSpacing: -0.3,
                          marginBottom: 10,
                        }}
                      >
                        {item.title}
                      </div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: 15,
                          lineHeight: 1.78,
                          color: C.gray2,
                        }}
                      >
                        {item.blurb}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section data-reveal className="end-cta" style={{ marginTop: 18 }}>
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
                  Put insurance inside the ownership math, not outside it.
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
                  That is when the policy becomes useful rather than just necessary. Check the budget,
                  check the payment, then decide what level of cover still feels sensible.
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
                    href="/yacht-finance-calculator"
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
                    Open the calculator
                    <ArrowRightIcon size={16} />
                  </Link>
                </div>
              </section>

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
