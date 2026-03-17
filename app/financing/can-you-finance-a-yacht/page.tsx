import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.waaza.co";

const title = "Can You Finance a Yacht? Everything You Need to Know | Waaza";
const description =
  "Yes, you can finance a yacht. Learn how yacht loans work, who qualifies, what yachts lenders will finance, typical rates, terms, costs and common mistakes.";

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
    "can you finance a yacht",
    "yacht loans",
    "yacht financing",
    "marine loans",
    "how yacht financing works",
    "yacht finance requirements",
    "yacht finance calculator",
  ],
  authors: [{ name: "Waaza" }],
  alternates: {
    canonical: "/financing/can-you-finance-a-yacht",
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
    url: "/financing/can-you-finance-a-yacht",
    siteName: "Waaza",
    locale: "en_GB",
    type: "article",
    publishedTime: "2026-03-16T00:00:00.000Z",
    modifiedTime: "2026-03-16T00:00:00.000Z",
    images: [
      {
        url: "/home/waaza-yacht-financing-tool--2.jpg",
        width: 1200,
        height: 630,
        alt: "Can you finance a yacht guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/home/waaza-yacht-financing-tool--2.jpg"],
  },
};

const toc = [
  { id: "can-you-finance-a-yacht", label: "Can you finance a yacht?" },
  { id: "how-yacht-financing-works", label: "How yacht financing actually works" },
  { id: "who-qualifies", label: "Who qualifies for yacht financing?" },
  { id: "what-yachts-qualify", label: "What yachts qualify for financing?" },
  { id: "application-process", label: "The yacht financing application process" },
  { id: "loan-terms-and-structures", label: "Loan terms and structures" },
  { id: "what-it-actually-costs", label: "What yacht financing actually costs" },
  { id: "alternatives", label: "Alternatives to traditional yacht financing" },
  { id: "financing-vs-cash", label: "When financing makes sense vs cash" },
  { id: "international-refinancing", label: "International financing and refinancing" },
  { id: "common-mistakes", label: "Common yacht financing mistakes" },
  { id: "faq", label: "Frequently asked questions" },
];

const faqs = [
  {
    question: "Can you finance a yacht with bad credit?",
    answer:
      "Yacht financing with credit scores below 620 is very difficult. A few specialty lenders work with marginal credit, but expect rates 2% to 3% higher than prime borrowers and down payments of 25% to 30% or more. Scores in the 620 to 680 range can still qualify, but the pricing and deposit requirements will usually be worse than for stronger borrowers.",
  },
  {
    question: "What's the minimum down payment for yacht financing?",
    answer:
      "Ten per cent is generally the floor and usually only appears on newer yachts for buyers with excellent credit. In normal cases, many buyers land closer to 15% to 20%. Older vessels, thinner files or weaker credit often push the deposit toward 25% to 30% or more.",
  },
  {
    question: "Can you finance a yacht that's 15 to 20 years old?",
    answer:
      "Sometimes, but it becomes much harder. Many lenders either restrict terms heavily or refuse altogether once a yacht moves into that age band. Where financing is available, expect larger deposits, shorter terms and higher rates than for newer vessels.",
  },
  {
    question: "Do you need insurance to finance a yacht?",
    answer:
      "Yes. Comprehensive marine insurance is mandatory for financed yacht purchases. The lender will usually require hull and machinery cover plus liability cover, and it must be in place before closing.",
  },
  {
    question: "Can self-employed people get yacht financing?",
    answer:
      "Yes. Self-employed buyers can qualify, but lenders usually want more documentation, including 2 to 3 years of tax returns, business financials and proof of stable profitability rather than one unusually strong year.",
  },
  {
    question: "How long can you finance a yacht?",
    answer:
      "Up to 20 years is possible on the right deal, typically for newer and higher-value yachts. Smaller vessels often get shorter terms, and older yachts are restricted further because lenders do not want the boat to be too old at loan maturity.",
  },
  {
    question: "Can you finance a yacht and pay it off early?",
    answer:
      "Often yes, but not always without cost. Some loans allow early repayment freely, while others include prepayment penalties. That matters if you expect to refinance, sell or overpay principal in the first few years.",
  },
  {
    question: "What interest rates should you expect for yacht financing?",
    answer:
      "Many deals sit in the 5% to 8% range, depending on credit quality, deposit size, yacht age and market conditions. Excellent borrowers on newer yachts tend to land toward the low end, while older collateral or softer files push pricing up.",
  },
  {
    question: "Can you use a yacht loan for a boat under £50,000?",
    answer:
      "Sometimes, but many specialist marine lenders have minimum loan sizes. On lower-value boats, buyers often end up using a credit union, general-purpose lender or personal loan instead of a dedicated yacht finance product.",
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
    image: absoluteUrl("/home/waaza-yacht-financing-tool--2.jpg"),
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
      "@id": absoluteUrl("/financing/can-you-finance-a-yacht"),
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
        name: "Can you finance a yacht?",
        item: absoluteUrl("/financing/can-you-finance-a-yacht"),
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
          background:rgba(0,0,0,0.36);
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
          max-width:900px;
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
              src="/home/waaza-yacht-financing-tool--2.jpg"
              alt="Buyer and advisor reviewing yacht loan options before financing a purchase"
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
              <span style={{ color: "#fff" }}>Can you finance a yacht?</span>
            </div>

            <div className="hero-kicker">
              <WalletIcon size={14} />
              Yacht loan guide
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
                maxWidth: 1020,
              }}
            >
              Yes, you can finance a yacht. The real question is what the lender says after it sees you and the boat together.
            </h1>

            <p className="hero-sub">
              Most yacht buyers use specialized marine loans that work much like a secured long-term
              asset loan: you put down around 10% to 30%, borrow the balance, and repay over roughly
              10 to 20 years with the yacht as collateral. What matters is whether you qualify, what
              the deal will cost, and whether financing still makes sense once insurance, dockage,
              maintenance and total ownership costs are included.
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
                Run yacht finance scenarios
                <ArrowRightIcon size={16} />
              </Link>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.1, textTransform: "uppercase", color: "rgba(255,255,255,0.66)", marginBottom: 8 }}>
                  Typical deposit
                </div>
                <div style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>Usually 10% to 30%</div>
              </div>

              <div className="hero-stat">
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.1, textTransform: "uppercase", color: "rgba(255,255,255,0.66)", marginBottom: 8 }}>
                  Typical rate range
                </div>
                <div style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>Often 5% to 8%</div>
              </div>

              <div className="hero-stat">
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.1, textTransform: "uppercase", color: "rgba(255,255,255,0.66)", marginBottom: 8 }}>
                  Usual term range
                </div>
                <div style={{ fontSize: 18, fontWeight: 500, color: "#fff" }}>Roughly 10 to 20 years</div>
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
                id="can-you-finance-a-yacht"
                title="Can you finance a yacht?"
                intro="Yes. Yacht financing exists, it is widely used, and for qualified buyers it is the standard route into ownership rather than some niche exception."
              >
                <p>
                  Yes, you can finance a yacht. Most yacht buyers use specialized marine loans that
                  work similarly to mortgages: you put down around 10% to 30%, borrow the rest, and
                  repay over 10 to 20 years with the yacht as collateral. Marine lenders exist
                  specifically to finance boats and yachts for qualified buyers who meet credit,
                  income and down payment requirements.
                </p>
                <p>
                  The real question is not whether yacht financing exists. It does. The real question
                  is whether you will qualify, what it will cost, and whether financing makes sense
                  for your situation compared with paying cash or using another source of funds.
                </p>
                <p>
                  That distinction matters because many buyers approach the market backwards. They ask
                  whether loans are available in the abstract, when the useful question is how their
                  file will read once the lender looks at the borrower and the vessel together. If you
                  want the broader primer first, start with{" "}
                  <Link href="/financing/what-is-yacht-financing">what yacht financing is</Link>. If
                  you want the mechanics of underwriting, survey, insurance and closing, the natural
                  next page is{" "}
                  <Link href="/financing/how-yacht-financing-works">how yacht financing works</Link>.
                </p>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--6.jpg"
                imageAlt="Structured review of a yacht finance case showing borrower strength and vessel profile"
                label="What the lender is judging"
                title="The lender is not only asking whether you can pay. It is asking whether the yacht is collateral it still trusts years from now."
                body="That is why financing can be available in principle and still become much tighter once age, survey findings, builder reputation, reserves and resale confidence all get layered into the same file."
              />

              <Section
                id="how-yacht-financing-works"
                title="How yacht financing actually works"
                intro="Marine loans behave like a hybrid between a mortgage and an asset-backed consumer loan because the yacht secures the borrowing and the lender underwrites both the buyer and the vessel."
              >
                <p>
                  Marine loans function like a hybrid between car loans and mortgages. The yacht
                  serves as collateral, which means the lender can repossess it if you default. You
                  will work with specialized marine lenders who understand vessel values, depreciation
                  patterns and the practical realities of yacht ownership in a way many general banks
                  do not.
                </p>
                <p>
                  The process starts with an application. You provide financial documentation such as
                  tax returns, bank statements, pay slips or business financials, together with the
                  details of the yacht you want to buy. The lender evaluates both you and the vessel.
                  If the borrower looks creditworthy and the yacht passes a professional survey, the
                  lender approves a structure with a rate, term, monthly payment and deposit
                  requirement.
                </p>
                <p>
                  Interest rates typically run around 5% to 8% depending on your credit score, the
                  yacht's age and value, and market conditions. Terms generally range from 10 to 20
                  years, with longer terms more common on larger, newer yachts. You then make monthly
                  payments covering principal and interest until the loan is repaid and the yacht is
                  owned outright.
                </p>
              </Section>

              <Section
                id="who-qualifies"
                title="Who qualifies for yacht financing?"
                intro="Lenders are looking for the same broad pillars you see in other credit decisions, but in marine lending those pillars sit next to a collateral test that can tighten the deal very quickly."
              >
                <h3>Credit requirements</h3>
                <p>
                  Most lenders want credit scores above 680 for competitive rates. Excellent credit,
                  roughly 740 and above, unlocks the best terms: lower rates, smaller deposit
                  requirements and the longest available terms. Scores between 620 and 680 may still
                  qualify, but expect higher interest costs and larger deposits. Before applying,{" "}
                  <a
                    href="https://www.experian.co.uk/consumer/free-credit-score.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    check your credit score
                  </a>{" "}
                  so you know whether the file begins from a position of strength or friction.
                </p>
                <p>
                  Below 620, yacht financing becomes materially harder. A few specialist lenders may
                  still consider the deal, but pricing tends to rise sharply and required deposits
                  often move to 25% to 30% or more. Recent bankruptcies, foreclosures or loan
                  defaults make approval harder again because lenders want to see some clean distance
                  from those events before they get comfortable.
                </p>

                <h3>Income and employment</h3>
                <p>
                  There is no universal income minimum, but lenders do run debt-to-income analysis to
                  decide whether the payment is truly supportable. Many want your total monthly debts,
                  including the proposed yacht payment, to remain below roughly 43% of gross monthly
                  income. Some cleaner-credit lenders prefer files closer to 36% or less.
                </p>
                <p>
                  Stability matters at least as much as raw income. Two years with the same employer
                  or in the same industry usually reads better than frequent job changes, even at a
                  higher salary. Self-employed buyers can absolutely qualify, but they normally need
                  two to three years of business tax returns showing consistent profitability.
                  Retired buyers can also qualify using pension, social security and investment income.
                </p>

                <h3>Down payment capacity</h3>
                <p>
                  You will usually need 10% to 30% down depending on the yacht and the borrower
                  profile. Newer yachts from established builders may qualify near the low end for
                  strong borrowers. Older vessels, weaker credit or more cautious collateral stories
                  tend to push the deposit higher. The larger point is that the deposit is not only a
                  threshold. It is one of the lender's main tools for balancing risk. If you want the
                  fuller lender view beyond just eligibility, the best companion page is{" "}
                  <Link href="/financing/what-lenders-look-for-in-yacht-financing">
                    what lenders look for in yacht financing
                  </Link>
                  .
                </p>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--8.jpg"
                imageAlt="Survey paperwork insurance documents and lender file materials laid out for marine finance review"
                label="Why some files tighten"
                title="A softer borrower can sometimes still get approved. A difficult boat is harder to rescue."
                body="Great credit helps, but it does not fully override an aging vessel, weak resale confidence, a difficult survey story or a collateral type the lender already dislikes."
                reverse
              />

              <Section
                id="what-yachts-qualify"
                title="What yachts qualify for financing?"
                intro="Not all yachts qualify equally. Age is usually the single biggest lever because it changes how the lender thinks about condition, depreciation and resale value at loan maturity."
              >
                <h3>New and nearly-new yachts</h3>
                <p>
                  Brand-new yachts usually receive the best treatment. Lenders know what they are
                  worth, trust their condition more easily and are more comfortable with long-term
                  resale assumptions. New builds from strong manufacturers can sometimes qualify with
                  around 10% down, long terms and the best available pricing.
                </p>
                <p>
                  Yachts in the one to five year range often sit in the practical sweet spot. They
                  have already absorbed some of the initial depreciation but are still new enough to
                  qualify for strong terms. In many cases, that is where buyers find the best balance
                  between value and lendability.
                </p>

                <h3>Older vessels</h3>
                <p>
                  Once yachts move into the five to ten year band, restrictions usually begin to
                  tighten. Deposits may rise, pricing may worsen slightly, and terms can shorten. By
                  the time a vessel reaches ten to fifteen years old, lenders often want materially
                  more protection through larger deposits and shorter amortization. Beyond that point,
                  financing becomes much less predictable.
                </p>
                <p>
                  The reason is not arbitrary policy. Older yachts depreciate faster, require more
                  maintenance, and can be harder to value or resell cleanly if the lender ever has to
                  enforce. That is also why lender appetite is shaped heavily by the builder and the
                  market segment. Prestigious brands usually hold value better and therefore suffer
                  less severe age penalties than weaker or more obscure builders. For the dedicated
                  version of this issue, go next to{" "}
                  <Link href="/financing/how-vessel-age-affects-financing">
                    how vessel age affects financing
                  </Link>
                  .
                </p>

                <h3>Builder and vessel type considerations</h3>
                <p>
                  Sailboats, motor yachts, catamarans, trawlers and sportfishers can all qualify for
                  financing. Vessel type generally matters less than age, value and builder
                  reputation. Custom-built yachts are harder because the lender has fewer comparable
                  sales to anchor valuation. Established luxury brands tend to hold their position in
                  lender models better than one-off or less proven assets.
                </p>
              </Section>

              <Section
                id="application-process"
                title="The yacht financing application process"
                intro="The process is slower than getting a car loan but usually faster than a mortgage. A clean file often takes around two to four weeks from application to closing."
              >
                <p>
                  Start by gathering the borrower side of the file properly: two to three years of
                  tax returns, recent pay slips or business financials if you are self-employed, bank
                  statements showing reserves beyond the deposit, and a clear list of assets and
                  liabilities. You also need the details of the yacht itself: make, model, year,
                  asking price and location.
                </p>
                <p>
                  It is sensible to compare multiple lenders rather than accept the first offer.
                  Specialized marine finance firms, banks with marine lending divisions, and some
                  credit unions all play in this space. Pricing, deposit requirements and fees can
                  vary more than many buyers expect.
                </p>
                <p>
                  After the lender reviews the file, it orders or requires a professional survey. This
                  part is non-negotiable. A{" "}
                  <a
                    href="https://www.ybdsa.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    certified marine surveyor
                  </a>{" "}
                  examines the hull, engines, electrical systems, plumbing and general condition,
                  then produces a valuation-backed report that protects both the buyer and the lender.
                </p>
                <p>
                  If the survey passes and the financials check out, the lender issues a commitment
                  outlining the terms. From there, you sign the loan documents, provide proof of
                  insurance naming the lender appropriately, transfer the deposit, and close. The
                  lender files its lien and ownership transfers to you.
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
                  Model the payment and deposit before you start negotiating the boat
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
                  It is much cheaper to learn now whether 15%, 20% or 25% down still feels
                  comfortable than to discover late that the full ownership picture is tighter than
                  the monthly payment first suggested.
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
                id="loan-terms-and-structures"
                title="Loan terms and structures"
                intro="Most yacht financing uses a traditional amortizing loan, but the exact structure changes with the yacht's age, value and the strength of the borrower file."
              >
                <h3>Standard amortizing loans</h3>
                <p>
                  The most common structure is a fixed monthly repayment covering both principal and
                  interest. Over time you build equity in the yacht and own it outright at the end of
                  the term. Terms usually range from 10 to 20 years. Smaller boats often get the
                  shorter end. Larger, newer yachts have the best chance of receiving the full term.
                </p>

                <h3>Balloon structures</h3>
                <p>
                  Some lenders offer balloon payment structures where the monthly payment is lower but
                  a large final balance remains at maturity. That can work if the buyer expects future
                  liquidity or plans to upgrade before the balloon date arrives, but it is a riskier
                  structure than straightforward amortization because it leaves more to solve later.
                </p>

                <h3>Rates and market conditions</h3>
                <p>
                  Rates often sit around 5% to 8% depending on credit, yacht age, deposit size and
                  broader interest-rate conditions. Excellent credit on a newer vessel can move the
                  pricing toward the bottom of that range, while weaker credit or older collateral
                  pushes it upward. Those numbers also move with{" "}
                  <a
                    href="https://www.bankofengland.co.uk/monetary-policy/the-interest-rate-bank-rate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    current base rates
                  </a>
                  . If term length is the question you need to pressure-test next, the companion page
                  is{" "}
                  <Link href="/how-long-can-you-finance-a-yacht">
                    how long you can finance a yacht
                  </Link>
                  .
                </p>
              </Section>

              <VisualSplit
                imageSrc="/home/waaza-yacht-financing-tool--9.jpg"
                imageAlt="Refined yacht finance case showing cleaner payment structure and lender-ready documentation"
                label="What the loan really changes"
                title="A better structure does not only alter the payment. It changes the tone of the whole application."
                body="Longer terms, stronger deposits and cleaner borrower profiles can improve affordability on paper, but the real win is often that the file stops feeling stretched from the lender's point of view."
              />

              <Section
                id="what-it-actually-costs"
                title="What yacht financing actually costs"
                intro="The loan payment is only one layer of the ownership burden. In many cases it is not even the dominant one over the full year."
              >
                <p>
                  Insurance, dockage, maintenance, fuel and repairs sit beside the loan and often
                  exceed it in annual economic reality. On a financed yacht,{" "}
                  <a
                    href="https://www.pantaenius.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    comprehensive marine insurance
                  </a>{" "}
                  is mandatory and can easily cost 1% to 3% of the yacht's value each year,
                  depending on the vessel and use profile.
                </p>
                <p>
                  Marina costs vary sharply by location and yacht size, but they are rarely trivial.
                  Maintenance is the line many buyers underestimate most. Routine servicing, wear
                  items and surprise repairs mean{" "}
                  <a
                    href="https://www.rya.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    annual maintenance costs
                  </a>{" "}
                  can easily approach around 10% of the yacht's value in a busy ownership year.
                </p>
                <p>
                  Put differently, a £300,000 yacht financed at 6% over 15 years may look manageable
                  when viewed only through the monthly payment. But once insurance, dockage,
                  maintenance and other running costs are added, total annual ownership cost can move
                  dramatically higher. That is why it is dangerous to decide affordability from the
                  lender's approval alone.
                </p>
              </Section>

              <Section
                id="alternatives"
                title="Alternatives to traditional yacht financing"
                intro="If the yacht does not fit normal lender appetite, or the borrower does not yet fit the credit box, there are still other routes. They just involve very different tradeoffs."
              >
                <h3>Personal loans</h3>
                <p>
                  Unsecured personal loans do not care about the yacht's age or condition because the
                  yacht is not the collateral. That makes them useful for smaller or older boats that
                  marine lenders refuse. The downside is clear: lower borrowing limits, higher rates
                  and shorter terms.
                </p>

                <h3>Home equity</h3>
                <p>
                  Home equity borrowing bypasses yacht-specific restrictions entirely because you are
                  borrowing against your property rather than the vessel. The rate may be attractive,
                  but the risk profile changes completely because you are putting your home behind a
                  depreciating leisure asset.
                </p>

                <h3>Seller financing</h3>
                <p>
                  Some sellers will finance part of a purchase, particularly in slower markets or on
                  older yachts that bank lenders dislike. Terms vary wildly and the documentation
                  quality is inconsistent, but it can solve a problem where a perfectly rational deal
                  sits outside mainstream bank appetite.
                </p>

                <h3>Cash purchase</h3>
                <p>
                  Cash is the cleanest route when the yacht is too old to finance conventionally, when
                  the buyer wants simplicity, or when avoiding debt matters more than preserving
                  liquidity.
                </p>
              </Section>

              <Section
                id="financing-vs-cash"
                title="When financing makes sense vs cash"
                intro="Financing is not automatically better than paying cash. Paying cash is not automatically more sensible than borrowing. The right decision depends on opportunity cost, liquidity and personal risk tolerance."
              >
                <p>
                  Financing makes sense when you want to preserve capital for other investments, keep
                  reserves available for uncertainty, or avoid putting a large amount of cash into the
                  yacht at the start. If the capital you preserve has a better use elsewhere than the
                  effective borrowing cost, financing can be a rational choice even for wealthy buyers.
                </p>
                <p>
                  Cash can make more sense when you want to avoid interest completely, when the yacht
                  is too old or unusual for normal lender appetite, or when simplicity matters more
                  than financial leverage. Some buyers simply sleep better without debt attached to a
                  discretionary asset.
                </p>
                <p>
                  Tax also matters in some cases, especially around charter use or business use, but
                  the answer is jurisdiction-specific and fact-specific. If there may be a tax angle,{" "}
                  <a
                    href="https://www.gov.uk/government/organisations/hm-revenue-customs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    consult HMRC guidance
                  </a>{" "}
                  and a specialist adviser rather than assuming a yacht loan will produce a deduction
                  in your situation.
                </p>
              </Section>

              <Section
                id="international-refinancing"
                title="International financing and refinancing"
                intro="Cross-border purchases and later refinancing are both possible, but each adds its own set of constraints that buyers should understand early."
              >
                <h3>International yacht financing</h3>
                <p>
                  Buying or registering a yacht internationally does not prevent financing, but it can
                  narrow the lender pool. Non-citizens and non-residents often face stricter
                  conditions because enforcement becomes more complicated for the lender. Flag state
                  matters too. Widely used registries such as Malta, Cayman and BVI are generally more
                  familiar to lenders than obscure registries. For some domestic files,{" "}
                  <a
                    href="https://www.gov.uk/register-a-boat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    UK boat registration
                  </a>{" "}
                  can make the financing story cleaner.
                </p>

                <h3>Currency risk</h3>
                <p>
                  Currency mismatch can materially alter the practical cost of ownership. If you earn
                  in pounds but borrow in euros or dollars, exchange rate movements can change your
                  real monthly burden even when the nominal payment never moves. Matching borrowing
                  currency to income currency is usually cleaner where possible.
                </p>

                <h3>Refinancing yacht loans</h3>
                <p>
                  Refinancing can help lower the payment if rates fall or if your own credit profile
                  has improved materially. It can also be used to restructure the term. The issue is
                  that the yacht is older by the time you refinance, and older collateral is harder to
                  place. A boat that looked easy to finance at five years old may be materially more
                  restricted at ten or twelve years old.
                </p>
              </Section>

              <Section
                id="common-mistakes"
                title="Common yacht financing mistakes"
                intro="The biggest errors usually happen before closing. They are planning mistakes rather than technical lender surprises."
              >
                <h3>Buying to the approval limit</h3>
                <p>
                  Lenders approve what works mathematically, not what feels comfortable once the whole
                  ownership burden appears. A buyer who stretches to the maximum approved amount can
                  quickly discover that insurance, dockage and maintenance make the yacht more
                  burdensome than the loan payment first suggested.
                </p>

                <h3>Underestimating the importance of the survey</h3>
                <p>
                  Some buyers try to save money or time by softening the survey process. That is a bad
                  trade. The survey is one of the best protections in the entire transaction and can
                  save multiples of its own cost if it catches serious issues early.
                </p>

                <h3>Taking the first loan offer</h3>
                <p>
                  Rates, fees and terms vary. Even a modest difference in pricing can become
                  significant over a long repayment period. Shopping the structure is often worth real
                  money.
                </p>

                <h3>Ignoring prepayment rules</h3>
                <p>
                  Some loans allow early repayment freely and others do not. If you think you might
                  refinance, sell or pay the loan down early, prepayment terms matter far more than
                  many buyers realize at the start.
                </p>

                <h3>Anchoring on the smallest possible deposit</h3>
                <p>
                  Hearing that 10% is possible does not mean 10% is realistic on your yacht, your
                  credit profile or your lender. The smarter question is what deposit still leaves the
                  wider ownership picture comfortable after closing.
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
                      The process from application and underwriting through survey, insurance and closing.
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
                      See how lenders judge the borrower, the vessel and the overall bankability of the file.
                    </div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500 }}>
                      Read page <ArrowRightIcon size={15} />
                    </div>
                  </Link>

                  <Link href="/financing/typical-deposit-for-yacht-financing" className="readmore-card">
                    <div style={{ fontSize: 21, lineHeight: 1.15, fontWeight: 500, marginBottom: 10 }}>
                      Typical deposit for yacht financing
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.7, color: C.gray3, marginBottom: 16 }}>
                      Understand how deposit expectations shift with yacht age, credit quality and lender appetite.
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
                    maxWidth: 820,
                  }}
                >
                  Yacht financing works best when the loan still looks sensible after the survey, insurance and real running costs arrive
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
                  Use the calculator to compare structures first, then run the readiness flow so you
                  can see whether the wider case still looks bankable before you start moving paper
                  around.
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
