import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.waaza.co";

const title = "Typical Deposit for Yacht Financing | Waaza";
const description =
  "Understand the typical deposit for yacht financing, what changes it, and how a larger down payment affects approval, monthly payments and total borrowing cost.";

const C = {
  bg: "#f4f3ef",
  white: "#ffffff",
  accent: "#FFF86C",
  accentHover: "#f0ec5a",
  accentPale: "#fffde0",
  black: "#0a0a0a",
  gray1: "#1a1a1a",
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
    "typical deposit for yacht financing",
    "yacht financing deposit",
    "yacht down payment",
    "boat finance deposit",
    "yacht loan deposit",
    "yacht finance calculator",
  ],
  authors: [{ name: "Waaza" }],
  alternates: {
    canonical: "/financing/typical-deposit-for-yacht-financing",
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
    url: "/financing/typical-deposit-for-yacht-financing",
    siteName: "Waaza",
    locale: "en_GB",
    type: "article",
    publishedTime: "2026-03-16T00:00:00.000Z",
    modifiedTime: "2026-03-16T00:00:00.000Z",
    images: [
      {
        url: "/home/waaza-yacht-financing-tool--3.jpg",
        width: 1200,
        height: 630,
        alt: "Typical deposit for yacht financing guide",
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
  { id: "what-is-typical", label: "What is a typical deposit for yacht financing?" },
  { id: "by-yacht-value", label: "How does yacht value change the deposit?" },
  { id: "by-yacht-age", label: "How does yacht age affect the deposit?" },
  { id: "by-credit-score", label: "How does credit score affect the deposit?" },
  { id: "how-deposit-changes-the-loan", label: "How does a bigger deposit change the loan?" },
  { id: "what-pushes-it-up-or-down", label: "What pushes the deposit up or down?" },
  { id: "common-mistakes", label: "Common mistakes when planning the deposit" },
  { id: "faq", label: "Frequently asked questions" },
];

const faqs = [
  {
    question: "What is the usual deposit for yacht financing?",
    answer:
      "Most straightforward deals land around 15% to 20%, although the wider working range is roughly 10% to 30%. Newer boats, stronger credit and cleaner files can move you toward the lower end. Older boats, weaker credit or more difficult collateral usually push the deposit higher.",
  },
  {
    question: "Can I finance a yacht with 10% down?",
    answer:
      "Sometimes, but only on the right deal. Ten per cent tends to show up where the yacht is newer, the builder is well understood, the survey risk is lower and the borrower looks strong across credit, income and reserves. It is possible, but it is not the number every buyer should assume.",
  },
  {
    question: "Why do older yachts need bigger deposits?",
    answer:
      "Because older vessels are riskier collateral. They are more sensitive to condition, harder to value cleanly and often less predictable on resale. A larger deposit gives the lender more protection if the yacht later has to be sold into a weaker market.",
  },
  {
    question: "Does a bigger deposit improve the interest rate?",
    answer:
      "Often yes. A bigger deposit lowers loan-to-value, which usually makes the deal safer for the lender. That can improve pricing, reduce approval friction and sometimes make the structure cleaner overall.",
  },
  {
    question: "Can a strong credit score reduce the deposit?",
    answer:
      "Yes, sometimes materially. Strong credit makes the borrower side of the file easier to trust, which can move the deal closer to the lower end of the deposit range. It helps most when combined with a newer yacht and a clean survey profile.",
  },
  {
    question: "Should I put down more than the minimum?",
    answer:
      "It depends on how much liquidity you want to preserve after closing. A bigger deposit lowers the payment and total interest, but it also ties up more capital on day one. The right answer is usually the one that still leaves the wider ownership picture comfortable.",
  },
  {
    question: "Can I use my current boat as part of the deposit?",
    answer:
      "Sometimes. If you are trading in a current boat, its equity can effectively form some or all of the deposit, depending on how the transaction is structured and how the lender is treating the deal.",
  },
  {
    question: "How does Waaza help with deposit planning?",
    answer:
      "Waaza helps you pressure-test the decision before the lender does. The calculator shows what different deposit levels do to the payment, while the readiness flow helps you see whether the wider case still looks sensible before you start sending paperwork around.",
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

function WalletIcon({ size = 16 }: { size?: number }) {
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
        padding: "54px 0",
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
        gridTemplateColumns: "minmax(320px,.9fr) minmax(0,1.1fr)",
        gap: 18,
        margin: "20px 0 8px",
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
            <WalletIcon size={14} />
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
          boxShadow: "0 18px 54px rgba(0,0,0,0.08)",
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

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: absoluteUrl("/home/waaza-yacht-financing-tool--3.jpg"),
    datePublished: "2026-03-16T00:00:00.000Z",
    dateModified: "2026-03-16T00:00:00.000Z",
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
      "@id": absoluteUrl("/financing/typical-deposit-for-yacht-financing"),
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
        name: "Financing",
        item: absoluteUrl("/financing"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Typical deposit for yacht financing",
        item: absoluteUrl("/financing/typical-deposit-for-yacht-financing"),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <style>{`
        html{scroll-behavior:smooth}
        body{overflow-x:hidden;background:${C.bg}}
        a{text-decoration:none;color:inherit}
        .rich p{margin:0 0 18px}
        .rich h3{
          margin:28px 0 10px;
          font-family:'Inter Tight',sans-serif;
          font-size:22px;
          line-height:1.2;
          font-weight:500;
          color:${C.black};
        }
        .rich strong{font-weight:600;color:${C.black}}
        .rich a{color:${C.black};font-weight:500;text-decoration:underline;text-underline-offset:3px}

        .hero-shell{
          position:relative;
          min-height:88vh;
          display:flex;
          align-items:center;
          justify-content:center;
          overflow:hidden;
          background:${C.black};
        }
        .hero-media{
          position:absolute;
          inset:0;
        }
        .hero-media::after{
          content:"";
          position:absolute;
          inset:0;
          background:rgba(0,0,0,0.34);
        }
        .hero-copy{
          position:relative;
          z-index:2;
          max-width:1180px;
          margin:0 auto;
          padding:48px 24px 58px;
          text-align:center;
          color:#fff;
        }
        .hero-copy a{color:#fff}
        .hero-breadcrumbs{
          display:flex;
          gap:8px;
          justify-content:center;
          flex-wrap:wrap;
          font-size:13px;
          color:rgba(255,255,255,0.72);
          margin-bottom:18px;
        }
        .hero-kicker{
          display:inline-flex;
          align-items:center;
          gap:8px;
          padding:10px 14px;
          border-radius:999px;
          background:${C.accent};
          color:${C.black};
          font-size:12px;
          font-weight:600;
          letter-spacing:1.2px;
          text-transform:uppercase;
          margin-bottom:22px;
        }
        .hero-sub{
          max-width:860px;
          margin:0 auto 30px;
          font-size:18px;
          line-height:1.85;
          color:rgba(255,255,255,0.88);
          font-weight:400;
        }
        .hero-actions{
          display:flex;
          justify-content:center;
          gap:14px;
          flex-wrap:wrap;
          margin-bottom:34px;
        }
        .hero-stats{
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:14px;
          max-width:980px;
          margin:0 auto;
        }
        .hero-stat{
          background:rgba(255,255,255,0.12);
          border:1px solid rgba(255,255,255,0.18);
          border-radius:22px;
          padding:18px 20px;
          backdrop-filter:blur(6px);
          text-align:left;
        }

        .layout-grid{
          display:grid;
          grid-template-columns:280px minmax(0,1fr);
          gap:42px;
          align-items:start;
        }
        .toc-shell{
          position:sticky;
          top:104px;
          alignSelf:start;
          padding-top:6px;
        }
        .toc-label{
          display:flex;
          align-items:center;
          gap:8px;
          font-size:12px;
          font-weight:600;
          letter-spacing:1.2px;
          text-transform:uppercase;
          color:${C.gray4};
          margin-bottom:18px;
        }
        .toc-list{
          position:relative;
          display:grid;
          gap:0;
          padding-left:18px;
        }
        .toc-list::before{
          content:"";
          position:absolute;
          left:4px;
          top:0;
          bottom:0;
          width:1px;
          background:${C.gray6};
        }
        .toc-link{
          position:relative;
          display:grid;
          grid-template-columns:28px 1fr;
          gap:12px;
          align-items:start;
          padding:12px 0;
          color:${C.gray3};
          transition:color .24s ease, transform .24s ease;
        }
        .toc-link::before{
          content:"";
          position:absolute;
          left:-18px;
          top:18px;
          width:9px;
          height:9px;
          border-radius:999px;
          background:${C.bg};
          border:1px solid ${C.gray5};
          transition:background .24s ease,border-color .24s ease,transform .24s ease;
        }
        .toc-link:hover{
          color:${C.black};
          transform:translateX(2px);
        }
        .toc-link:hover::before{
          background:${C.accent};
          border-color:${C.accent};
        }
        .toc-number{
          font-size:11px;
          letter-spacing:1px;
          text-transform:uppercase;
          color:${C.gray4};
          padding-top:2px;
        }

        .visual-split.reverse > :first-child{order:2}
        .visual-split.reverse > :last-child{order:1}

        .mid-cta{
          background:${C.accent};
          border-radius:32px;
          padding:38px clamp(24px,4vw,42px);
          color:${C.black};
        }
        .end-cta{
          background:${C.tint};
          border:1px solid ${C.gray6};
          border-radius:30px;
          padding:34px clamp(24px,4vw,40px);
        }

        .faq-grid{display:grid;gap:12px}
        .faq-item{
          border-top:1px solid ${C.gray6};
          border-bottom:1px solid ${C.gray6};
          background:transparent;
          transition:border-color .25s ease;
        }
        .faq-item:hover{border-color:${C.gray5}}
        .faq-summary{
          list-style:none;
          cursor:pointer;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:18px;
          padding:18px 0;
          font-size:17px;
          line-height:1.45;
          font-weight:500;
          color:${C.black};
        }
        .faq-summary::-webkit-details-marker{display:none}
        .faq-plus{
          flex:0 0 auto;
          width:32px;
          height:32px;
          border-radius:999px;
          border:1px solid ${C.gray6};
          display:inline-flex;
          align-items:center;
          justify-content:center;
          transition:transform .28s ease, background .28s ease, border-color .28s ease;
        }
        .faq-item[open] .faq-plus{
          transform:rotate(45deg);
          background:${C.accentPale};
          border-color:${C.accent};
        }

        .readmore-grid{
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:16px;
        }
        .readmore-card{
          display:block;
          padding:22px 0;
          border-top:1px solid ${C.gray6};
          border-bottom:1px solid ${C.gray6};
          transition:transform .24s ease,border-color .24s ease;
        }
        .readmore-card:hover{
          transform:translateY(-1px);
          border-color:${C.gray5};
        }

        .pill-yellow:hover{background:${C.accentHover};transform:translateY(-1px)}
        .pill-soft:hover{background:#e7e7e7;transform:translateY(-1px)}
        .pill-outline:hover{border-color:rgba(255,255,255,.56)!important;background:rgba(255,255,255,.1)}

        .hero-copy{
          animation:heroRise 1.15s cubic-bezier(0.16,1,0.3,1) .06s both;
        }

        [data-reveal]{
          opacity:0;
          transform:translateY(14px);
          animation:fadeUpSoft 1s cubic-bezier(0.16,1,0.3,1) both;
          animation-delay:var(--delay,0ms);
          will-change:opacity, transform;
        }
        section[data-reveal]:nth-of-type(1){--delay:40ms}
        section[data-reveal]:nth-of-type(2){--delay:80ms}
        section[data-reveal]:nth-of-type(3){--delay:120ms}
        section[data-reveal]:nth-of-type(4){--delay:160ms}
        section[data-reveal]:nth-of-type(5){--delay:200ms}
        section[data-reveal]:nth-of-type(6){--delay:240ms}
        section[data-reveal]:nth-of-type(7){--delay:280ms}
        section[data-reveal]:nth-of-type(8){--delay:320ms}
        section[data-reveal]:nth-of-type(9){--delay:360ms}

        @keyframes heroRise{
          from{opacity:0;transform:translateY(18px)}
          to{opacity:1;transform:translateY(0)}
        }
        @keyframes fadeUpSoft{
          from{opacity:0;transform:translateY(14px)}
          to{opacity:1;transform:translateY(0)}
        }

        @media(max-width:1180px){
          .layout-grid,.hero-stats,.readmore-grid,.visual-split{grid-template-columns:1fr!important}
          .toc-shell{position:relative!important;top:auto!important}
        }
        @media(max-width:820px){
          .page-h1{font-size:46px!important;letter-spacing:-1.1px!important}
          .hero-shell{min-height:72vh}
          .hero-sub{font-size:17px}
        }
      `}</style>

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
              src="/home/waaza-yacht-financing-tool--3.jpg"
              alt="Buyer and advisor reviewing yacht financing deposit scenarios and purchase numbers"
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
                <Link href="/financing">Financing</Link>
              </span>
              <span style={{ opacity: 0.5 }}>›</span>
              <span style={{ color: "#fff" }}>Typical deposit</span>
            </div>

            <div className="hero-kicker">
              <WalletIcon size={14} />
              Deposit guide
            </div>

            <h1
              className="page-h1"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(58px,7vw,108px)",
                lineHeight: 0.96,
                fontWeight: 400,
                letterSpacing: -2.2,
                margin: "0 auto 18px",
                maxWidth: 980,
              }}
            >
              The deposit shapes the deal before the lender does
            </h1>

            <p className="hero-sub">
              Most yacht finance deposits land somewhere between 10% and 30%, with 15% to 20% being
              the range many buyers actually end up living in. But that number changes fast once boat
              age, credit quality, survey risk and lender appetite enter the picture.
            </p>

            <div className="hero-actions">
              <Link
                href="/yacht-finance-calculator"
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
                See deposit scenarios
                <ArrowRightIcon size={16} />
              </Link>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.1, textTransform: "uppercase", color: "rgba(255,255,255,0.66)", marginBottom: 8 }}>
                  Lower end
                </div>
                <div style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>Around 10%</div>
              </div>

              <div className="hero-stat">
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.1, textTransform: "uppercase", color: "rgba(255,255,255,0.66)", marginBottom: 8 }}>
                  Common range
                </div>
                <div style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>Usually 15% to 20%</div>
              </div>

              <div className="hero-stat">
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.1, textTransform: "uppercase", color: "rgba(255,255,255,0.66)", marginBottom: 8 }}>
                  Older vessels
                </div>
                <div style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>Often 20% to 30%+</div>
              </div>
            </div>
          </div>
        </section>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "34px 24px 0" }}>
          <div className="layout-grid" style={{ paddingBottom: 90 }}>
            <aside className="toc-shell">
              <div className="toc-label">
                <WalletIcon size={14} />
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
                id="what-is-typical"
                title="What is a typical deposit for yacht financing?"
                intro="The broad range is easy to quote. The useful question is where most real deals actually land once the boat and the borrower are both being judged properly."
              >
                <p>
                  In theory, a yacht finance deposit can start around 10% and climb toward 30% or
                  more. In practice, a lot of clean mid-market cases end up somewhere closer to 15%
                  or 20%. That is the zone where the lender still has reasonable protection, the buyer
                  still preserves some liquidity, and the loan-to-value does not feel excessively
                  stretched from day one.
                </p>
                <p>
                  The mistake is treating that range like a fixed menu. Deposit is not just a standard
                  entry requirement. It is part of how the lender prices risk. When the boat is newer,
                  the builder is familiar, the survey is likely to be clean and the borrower looks
                  strong, the deposit can move lower. When the boat is older, the file is weaker or
                  the collateral feels harder to sell later, the lender often wants more of the
                  buyer's own capital in the deal.
                </p>
                <p>
                  That is why deposit should be planned early. It is one of the numbers that shapes
                  the whole transaction, not just the amount you wire at closing. If you are still
                  zoomed out, read <Link href="/financing/what-is-yacht-financing">what yacht financing is</Link>{" "}
                  first. If you want the mechanics around application, underwriting and closing, the
                  companion page on <Link href="/financing/how-yacht-financing-works">how yacht financing works</Link>{" "}
                  gives the fuller process around this number.
                </p>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--6.jpg"
                imageAlt="Structured approval review of a yacht finance file with borrower and vessel information"
                label="What changes the number"
                title="The deposit is never just a formality. It tells the lender how much of the risk you are carrying yourself."
                body="That is why two buyers looking at similarly priced boats can still get different deposit asks. The lender is not only looking at price. It is looking at how safe the whole case feels once the borrower, the boat and the likely resale story are all sitting together."
              />

              <Section
                id="by-yacht-value"
                title="How does yacht value change the deposit?"
                intro="The deposit percentage does not always rise neatly with price, but the absolute amount certainly does, and the lender's comfort can change depending on where the yacht sits in the market."
              >
                <h3>Below roughly £100,000</h3>
                <p>
                  Lower-value yachts can sometimes qualify closer to the lower end of the deposit
                  range if the boat is relatively young and the buyer is solid. But price alone does
                  not make a deal easy. In that sub-£100,000 bracket, age and condition can matter
                  more than the headline purchase price. A cheap older boat can still demand a higher
                  deposit than a more expensive, cleaner asset.
                </p>

                <h3>Between about £100,000 and £500,000</h3>
                <p>
                  This is where many buyers find the most predictable deposit expectations. A clean
                  deal in this range often sits around 15% to 20%, which means a £300,000 yacht may
                  translate into roughly £45,000 to £60,000 down. Lenders tend to understand this part
                  of the market well, so the deposit discussion can feel more standardised as long as
                  the boat and the borrower both look normal.
                </p>

                <h3>Above £500,000</h3>
                <p>
                  On higher-value yachts, the percentage can sometimes soften for very strong buyers,
                  but the absolute cash requirement becomes serious regardless. A 10% deposit on a £1
                  million yacht still means finding £100,000. This is one reason many higher-end
                  buyers finance by choice rather than because they must: they want to preserve capital
                  instead of dropping a very large amount into the deal at the outset.
                </p>
              </Section>

              <Section
                id="by-yacht-age"
                title="How does yacht age affect the deposit?"
                intro="Age is one of the biggest levers because it changes how the lender thinks about condition, valuation and what the boat may be worth later if it has to be sold."
              >
                <h3>New and nearly new boats</h3>
                <p>
                  This is where deposits can sit closest to the lower end of the range. The condition
                  is clearer, the survey risk is lower and the market typically understands the boat
                  better. Younger yachts from known builders often produce the cleanest financing
                  discussions, which is why 10% to 15% becomes more realistic here.
                </p>

                <h3>Boats in the 1 to 10 year range</h3>
                <p>
                  This is the broad middle where many financed purchases live. The yacht is no longer
                  new, but it is still young enough that the lender can usually model condition and
                  resale with some confidence. In this bracket, 15% to 20% often feels like the
                  practical centre of gravity for a straightforward case.
                </p>

                <h3>Older vessels</h3>
                <p>
                  Once the yacht moves deeper into the 10 to 20 year range, the deposit often starts
                  climbing. Survey sensitivity rises. Maintenance history matters more. Builder quality
                  matters more. Beyond 20 years, finance can become materially harder or require 25%
                  to 35% or more. That is why age deserves its own dedicated page, and why the most
                  natural next read from here is{" "}
                  <Link href="/financing/how-vessel-age-affects-financing">how vessel age affects financing</Link>.
                </p>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--8.jpg"
                imageAlt="Marine survey findings insurance paperwork and lender documents laid out for review"
                label="Why age matters"
                title="Older boats do not just change the survey. They change the lender's appetite for the whole deal."
                body="Once a vessel gets older, the deposit usually rises because more uncertainty enters the file at the same time: maintenance, valuation, resale confidence and the chance that survey findings force the lender to get more cautious."
                reverse
              />

              <Section
                id="by-credit-score"
                title="How does credit score affect the deposit?"
                intro="Credit quality changes the borrower side of the file, and lenders often use deposit as one of the ways to balance that risk."
              >
                <p>
                  Strong credit makes a lender more comfortable that the payment will be made
                  consistently, which can move the case toward the lower end of the deposit range.
                  Where the yacht is also clean and the rest of the file is stable, excellent credit
                  can be one of the factors that makes 10% to 15% achievable.
                </p>
                <p>
                  Good credit typically still lives in the more ordinary 15% to 20% territory,
                  especially when the lender is comfortable with the boat and the buyer's income
                  profile. Once credit weakens, however, the deposit becomes one of the easiest tools
                  the lender has to compensate for that added uncertainty. The same boat that might
                  have worked at 15% down for one borrower may need 20% or 25% from another simply
                  because the file feels less resilient.
                </p>
                <p>
                  It is also important not to overstate what credit can do. Great credit helps, but
                  it does not make a difficult boat easy. It cannot fully override an ageing vessel, a
                  poor survey or a price that looks too ambitious. If you want the full lender view
                  rather than just the deposit view, jump next to{" "}
                  <Link href="/financing/what-lenders-look-for-in-yacht-financing">what lenders look for in yacht financing</Link>.
                </p>
              </Section>

              <section data-reveal className="mid-cta" style={{ margin: "22px 0 10px" }}>
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
                  <WalletIcon size={14} />
                  Useful before you apply
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
                  Test the deposit before you start negotiating the boat
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
                  It is better to find out now whether 15%, 20% or 25% still feels comfortable than
                  after the survey, insurance quote and lender questions are already in motion.
                </p>

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
                    background: C.softBtn,
                    color: C.black,
                    fontWeight: 600,
                    transition: "all .24s ease",
                  }}
                >
                  Open yacht finance calculator
                  <ArrowRightIcon size={16} />
                </Link>
              </section>

              <Section
                id="how-deposit-changes-the-loan"
                title="How does a bigger deposit change the loan?"
                intro="A larger deposit does not just reduce the amount borrowed. It can change the monthly payment, the rate, the lender's confidence and the total cost over time."
              >
                <h3>Monthly payment pressure</h3>
                <p>
                  The clearest effect is that more cash down means less principal financed. That
                  reduces the monthly payment and can also help keep debt-to-income in a more
                  comfortable range. That matters not just for affordability, but for approval tone.
                  A deal that looks cleaner on paper is usually easier to place.
                </p>

                <h3>Total borrowing cost</h3>
                <p>
                  Once the loan balance falls, the interest cost falls with it. If the bigger deposit
                  also improves pricing because the lender likes the lower loan-to-value, the benefit
                  compounds. Over a longer term, that can create a meaningful saving rather than a
                  cosmetic one.
                </p>

                <h3>Approval quality</h3>
                <p>
                  Finally, a bigger deposit often makes the deal feel more serious and less stretched.
                  A buyer putting down 25% or 30% can look very different from a buyer pushing for the
                  lowest possible entry point, even if both technically qualify. The real question is
                  whether the extra deposit still leaves enough liquidity after closing. That is why
                  the best comparison is not just between two monthly payments, but between two whole
                  ownership pictures. If term length is now the bigger question, go next to{" "}
                  <Link href="/how-long-can-you-finance-a-yacht">how long you can finance a yacht</Link>.
                </p>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--9.jpg"
                imageAlt="Refined yacht financing case file showing stronger deposit reserves and lender-ready documents"
                label="What improves with more cash down"
                title="A bigger deposit can change the rate, the payment and the feel of the application all at once."
                body="That does not mean the biggest deposit is always right. It means you should compare the cleaner financing terms against the capital you are giving up on day one."
              />

              <Section
                id="what-pushes-it-up-or-down"
                title="What pushes the deposit up or down?"
                intro="The final number is usually the result of several things pressing on the same deal at once, not a single rule applied in isolation."
              >
                <p>
                  Deposits usually come down when the boat is newer, the builder is established, the
                  buyer has stronger credit, income is easy to verify and reserves still look healthy
                  after closing. Those are the files lenders like because the borrower looks
                  dependable, the collateral feels understandable and the deal reads cleanly.
                </p>
                <p>
                  Deposits usually move up when the opposite is true. Older boat. Patchier builder.
                  Weak survey history. Thin reserves. Higher existing leverage. More cautious lender.
                  Any of these can shift the number materially, especially when they start stacking on
                  top of each other. That is why anecdotes are dangerous here. The “my friend got 10%
                  down” story usually ignores the rest of the file that made it possible.
                </p>
                <p>
                  Practical alternatives sometimes help. Trade-in equity from a current boat can form
                  some or all of the deposit. Family gifts may work if documented properly. Some buyers
                  benefit from stronger existing relationships with a lender. But the logic remains the
                  same: the lender wants enough borrower equity and enough financial strength for the
                  deal to feel safe.
                </p>
              </Section>

              <Section
                id="common-mistakes"
                title="Common mistakes when planning the deposit"
                intro="Deposit mistakes usually happen before the application begins. They are planning errors more than lender surprises."
              >
                <h3>Anchoring on the lowest headline number</h3>
                <p>
                  Buyers hear 10% once and then treat it like a guarantee. By the time the real boat,
                  the real survey and the real underwriting conversation appear, the number often moves.
                </p>

                <h3>Using every available pound for the down payment</h3>
                <p>
                  A buyer can technically put down a large amount and still look weak if there is no
                  reserve left afterward. Lenders like equity, but they also like seeing cash still
                  available after closing.
                </p>

                <h3>Ignoring the wider cost of ownership</h3>
                <p>
                  A larger deposit can make the finance payment look cleaner, but the yacht still
                  comes with insurance, dockage, maintenance, fuel and repair costs. Deposit is not
                  the only cash drain in the story.
                </p>

                <h3>Failing to compare multiple deposit paths properly</h3>
                <p>
                  The difference between 15% and 25% down is not just a bigger upfront cheque. It can
                  change the rate, the approval tone and the total cost over time. It is worth
                  modelling the alternatives instead of relying on instinct alone.
                </p>
              </Section>

              <section
                id="faq"
                data-reveal
                style={{
                  padding: "54px 0",
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
                    marginBottom: 16,
                  }}
                >
                  Frequently asked questions
                </h2>

                <div className="faq-grid">
                  {faqs.map((faq) => (
                    <details key={faq.question} className="faq-item">
                      <summary className="faq-summary">
                        <span>{faq.question}</span>
                        <span className="faq-plus">+</span>
                      </summary>
                      <p
                        style={{
                          fontSize: 15,
                          lineHeight: 1.82,
                          color: C.gray2,
                          margin: "0 0 18px",
                          paddingRight: 10,
                        }}
                      >
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              <section
                data-reveal
                style={{
                  padding: "54px 0",
                  borderTop: `1px solid ${C.gray6}`,
                }}
              >
                <h2
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "clamp(34px,3vw,48px)",
                    lineHeight: 1.06,
                    fontWeight: 400,
                    letterSpacing: -1.1,
                    marginBottom: 16,
                  }}
                >
                  Read next
                </h2>

                <div className="readmore-grid">
                  <Link href="/financing/how-yacht-financing-works" className="readmore-card">
                    <div style={{ fontSize: 21, lineHeight: 1.15, fontWeight: 500, marginBottom: 10 }}>
                      How yacht financing works
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.7, color: C.gray3, marginBottom: 16 }}>
                      The full process from application and underwriting through survey, insurance and closing.
                    </div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500 }}>
                      Read page <ArrowRightIcon size={15} />
                    </div>
                  </Link>

                  <Link href="/financing/what-lenders-look-for-in-yacht-financing" className="readmore-card">
                    <div style={{ fontSize: 21, lineHeight: 1.15, fontWeight: 500, marginBottom: 10 }}>
                      What lenders look for
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.7, color: C.gray3, marginBottom: 16 }}>
                      See why deposit size matters so much once the lender is judging the whole file.
                    </div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500 }}>
                      Read page <ArrowRightIcon size={15} />
                    </div>
                  </Link>

                  <Link href="/financing/how-vessel-age-affects-financing" className="readmore-card">
                    <div style={{ fontSize: 21, lineHeight: 1.15, fontWeight: 500, marginBottom: 10 }}>
                      How vessel age affects financing
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.7, color: C.gray3, marginBottom: 16 }}>
                      Why age changes lender appetite, deposit size, term length and survey sensitivity.
                    </div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500 }}>
                      Read page <ArrowRightIcon size={15} />
                    </div>
                  </Link>
                </div>
              </section>

              <section data-reveal className="end-cta" style={{ marginTop: 22 }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 12px",
                    borderRadius: 999,
                    background: C.accentPale,
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: 1.1,
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  <WalletIcon size={14} />
                  Final step
                </div>

                <h2
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "clamp(34px,4.5vw,56px)",
                    lineHeight: 1.06,
                    fontWeight: 400,
                    letterSpacing: -1.2,
                    marginBottom: 14,
                    maxWidth: 780,
                  }}
                >
                  The right deposit is not the smallest number you can get away with
                </h2>

                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.8,
                    color: C.gray2,
                    maxWidth: 760,
                    marginBottom: 22,
                  }}
                >
                  It is the number that still leaves the whole ownership picture comfortable once the
                  survey, insurance, lender pricing and real running costs are all on the table.
                </p>

                <Link
                  href="/wizard"
                  className="pill-yellow"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    padding: "16px 24px",
                    borderRadius: 12,
                    background: C.accent,
                    color: C.black,
                    fontWeight: 600,
                    transition: "all .24s ease",
                  }}
                >
                  Check readiness
                  <ArrowRightIcon size={16} />
                </Link>
              </section>
            </div>
          </div>
        </div>

        <footer style={{ padding: "60px 24px 32px", borderTop: `1px solid ${C.gray6}` }}>
          <div
            style={{
              maxWidth: 1280,
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 40,
            }}
          >
            <div>
              <Image src="/waaza.png" alt="Waaza" width={120} height={28} style={{ height: 28, width: "auto", marginBottom: 8 }} />
              <p style={{ color: C.gray3, fontSize: 14, marginTop: 8, lineHeight: 1.6 }}>
                The financing intelligence layer
                <br />
                for yacht transactions.
              </p>
            </div>

            <div style={{ display: "flex", gap: 60, flexWrap: "wrap" }}>
              <div>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    marginBottom: 14,
                  }}
                >
                  Explore
                </p>
                <Link href="/financing" style={{ display: "block", fontSize: 14, color: C.gray3, marginBottom: 10 }}>
                  Financing
                </Link>
                <Link href="/yacht-finance-calculator" style={{ display: "block", fontSize: 14, color: C.gray3, marginBottom: 10 }}>
                  Calculator
                </Link>
                <Link href="/wizard" style={{ display: "block", fontSize: 14, color: C.gray3, marginBottom: 10 }}>
                  Readiness
                </Link>
              </div>

              <div>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    marginBottom: 14,
                  }}
                >
                  Company
                </p>
                <Link href="/about" style={{ display: "block", fontSize: 14, color: C.gray3, marginBottom: 10 }}>
                  About
                </Link>
                <Link href="/faq" style={{ display: "block", fontSize: 14, color: C.gray3, marginBottom: 10 }}>
                  FAQ
                </Link>
              </div>
            </div>
          </div>

          <div
            style={{
              maxWidth: 1280,
              margin: "40px auto 0",
              paddingTop: 24,
              borderTop: `1px solid ${C.gray6}`,
            }}
          >
            <p style={{ color: C.gray4, fontSize: 12 }}>
              © 2026 Waaza — Yacht Financing Intelligence. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
