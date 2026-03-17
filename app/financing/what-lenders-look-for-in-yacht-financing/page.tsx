import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Calculator,
  CheckCircle2,
  FileText,
  Globe,
  Landmark,
  Shield,
  Wallet,
} from "lucide-react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.waaza.co";

const title = "What Lenders Look for in Yacht Financing | Waaza";
const description =
  "Understand what lenders actually care about when approving yacht financing, from credit and income to deposit size, survey results, reserves and the yacht itself.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "what lenders look for in yacht financing",
    "yacht financing approval",
    "yacht finance requirements",
    "marine lender criteria",
    "yacht loan approval",
    "yacht finance calculator",
  ],
  authors: [{ name: "Waaza" }],
  alternates: {
    canonical: "/financing/what-lenders-look-for-in-yacht-financing",
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
    url: "/financing/what-lenders-look-for-in-yacht-financing",
    siteName: "Waaza",
    locale: "en_GB",
    type: "article",
    publishedTime: "2026-03-16T00:00:00.000Z",
    modifiedTime: "2026-03-16T00:00:00.000Z",
    images: [
      {
        url: "/home/waaza-yacht-financing-tool--4.jpg",
        width: 1200,
        height: 630,
        alt: "Yacht financing approval guide by Waaza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/home/waaza-yacht-financing-tool--4.jpg"],
  },
};

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
};

const toc = [
  {
    id: "what-lenders-look-at-first",
    label: "What lenders look at first",
    icon: Shield,
  },
  {
    id: "credit-income-dti",
    label: "Credit, income and debt",
    icon: Wallet,
  },
  {
    id: "deposit-ltv",
    label: "Deposit and loan-to-value",
    icon: Landmark,
  },
  {
    id: "the-yacht-itself",
    label: "The yacht itself",
    icon: CheckCircle2,
  },
  {
    id: "survey-insurance-documents",
    label: "Survey, insurance and documents",
    icon: FileText,
  },
  {
    id: "red-flags",
    label: "Red flags that kill deals",
    icon: AlertTriangle,
  },
  {
    id: "improve-the-application",
    label: "How to strengthen the case",
    icon: ArrowRight,
  },
  {
    id: "faq",
    label: "FAQ",
    icon: Calculator,
  },
];

const faqs = [
  {
    question: "What credit score do most yacht lenders want?",
    answer:
      "For genuinely competitive terms, most lenders prefer scores above 680, and the strongest pricing usually starts above 740. You can still get approved below that, but expect a larger deposit, more scrutiny and less flexibility on rate or structure.",
  },
  {
    question: "How much deposit makes a yacht finance application stronger?",
    answer:
      "Most applications become easier to place once the deposit gets into the 20% to 30% range. A 10% deposit can work on the right boat with the right borrower, but older vessels and more marginal credit usually need more equity from the start.",
  },
  {
    question: "Do lenders care more about me or the yacht?",
    answer:
      "Both. They care about your ability to pay, but the yacht is also their collateral. A strong borrower can still have a difficult case if the boat is old, overpriced, poorly maintained or hard to value cleanly.",
  },
  {
    question: "Can cash reserves help get a yacht loan approved?",
    answer:
      "Yes. Lenders like seeing reserves beyond the deposit because it proves you are not emptying the account just to close the purchase. A buyer with six to twelve months of payment cushion looks safer than one who arrives with no margin at all.",
  },
  {
    question: "Will a survey really change the loan terms?",
    answer:
      "Absolutely. A clean survey supports the valuation and the lender's confidence. A poor one can force repairs, change the loan amount, increase the deposit, or kill the deal outright.",
  },
  {
    question: "Can charter income help me qualify?",
    answer:
      "Sometimes, but lenders usually haircut projected charter income hard. They will consider it, but they do not want the loan resting on aggressive occupancy assumptions or best-case seasonal rates.",
  },
  {
    question: "How does Waaza help before I speak to lenders?",
    answer:
      "Waaza helps you avoid walking into that conversation blind. The calculator shows what the repayment looks like under different deposits, rates and terms, and the readiness flow gives you a clearer first pass on how the case may read before you send paperwork out.",
  },
];

function absoluteUrl(path: string) {
  if (!path) return SITE_URL;
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function Section({
  id,
  title,
  intro,
  imageSrc,
  imageAlt,
  imageCaption,
  reverse = false,
  children,
}: {
  id: string;
  title: string;
  intro: string;
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
  reverse?: boolean;
  children: React.ReactNode;
}) {
  const hasImage = !!imageSrc && !!imageAlt;

  return (
    <section
      id={id}
      data-reveal
      style={{
        padding: "44px 0",
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
          marginBottom: 26,
          maxWidth: 920,
          fontWeight: 400,
        }}
      >
        {intro}
      </p>

      {hasImage ? (
        <div
          className={`section-grid ${reverse ? "reverse" : ""}`}
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.08fr) minmax(320px,.92fr)",
            gap: 32,
            alignItems: "start",
          }}
        >
          <div className="rich" style={{ fontSize: 16, lineHeight: 1.92, color: C.gray2 }}>
            {children}
          </div>

          <figure style={{ position: "relative", margin: 0 }}>
            <div
              style={{
                position: "absolute",
                top: -12,
                left: -12,
                width: "68%",
                height: "58%",
                background: C.accent,
                borderRadius: 24,
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                borderRadius: 24,
                overflow: "hidden",
                boxShadow: "0 16px 48px rgba(0,0,0,0.09)",
              }}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1400}
                height={1000}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            {imageCaption && (
              <figcaption style={{ fontSize: 12, color: C.gray4, lineHeight: 1.5, marginTop: 10 }}>
                {imageCaption}
              </figcaption>
            )}
          </figure>
        </div>
      ) : (
        <div className="rich" style={{ fontSize: 16, lineHeight: 1.92, color: C.gray2 }}>
          {children}
        </div>
      )}
    </section>
  );
}

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: absoluteUrl("/home/waaza-yacht-financing-tool--4.jpg"),
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
      "@id": absoluteUrl("/financing/what-lenders-look-for-in-yacht-financing"),
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
        name: "What lenders look for in yacht financing",
        item: absoluteUrl("/financing/what-lenders-look-for-in-yacht-financing"),
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
          font-weight:600;
          color:${C.black};
        }
        .rich ul{padding-left:22px;margin:0 0 18px}
        .rich li{margin-bottom:10px}
        .rich strong{font-weight:600;color:${C.black}}
        .rich a{color:${C.black};font-weight:500;text-decoration:underline;text-underline-offset:3px}
        .hero-wrap{padding:18px 24px 56px}
        .hero-shell{
          position:relative;
          overflow:hidden;
          border:1px solid ${C.gray6};
          border-radius:36px;
          background:
            radial-gradient(circle at top left, rgba(255,248,108,.34), transparent 34%),
            linear-gradient(180deg, rgba(255,255,255,.52), rgba(255,255,255,.28));
          backdrop-filter:blur(10px);
        }
        .hero-grid{display:grid;grid-template-columns:minmax(0,1.02fr) minmax(380px,.98fr);gap:42px;align-items:stretch}
        .hero-media{
          position:relative;
          min-height:720px;
          border-left:1px solid ${C.gray6};
          background:${C.tint};
        }
        .hero-image-main{
          position:absolute;
          inset:24px 24px 120px 24px;
          border-radius:28px;
          overflow:hidden;
          box-shadow:0 22px 70px rgba(0,0,0,.10);
        }
        .hero-image-card{
          position:absolute;
          left:24px;
          right:72px;
          bottom:24px;
          border-radius:24px;
          overflow:hidden;
          border:8px solid rgba(244,243,239,.9);
          box-shadow:0 14px 48px rgba(0,0,0,.12);
        }
        .intro-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
        .facts-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
        .layout-grid{display:grid;grid-template-columns:290px minmax(0,1fr);gap:38px;align-items:start}
        .section-grid.reverse > :first-child{order:2}
        .section-grid.reverse > :last-child{order:1}
        .faq-grid{display:grid;gap:12px}
        .faq-item{
          border:1px solid ${C.gray6};
          border-radius:22px;
          background:rgba(255,255,255,.42);
          backdrop-filter:blur(10px);
          padding:0 18px;
          transition:all .25s ease;
        }
        .faq-item:hover{border-color:${C.gray5}}
        .faq-item[open]{
          background:${C.white};
          box-shadow:0 12px 32px rgba(0,0,0,.04);
        }
        .faq-summary{
          list-style:none;
          cursor:pointer;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:16px;
          padding:18px 0;
          font-size:17px;
          line-height:1.45;
          font-weight:500;
          color:${C.black};
        }
        .faq-summary::-webkit-details-marker{display:none}
        .faq-icon{
          flex:0 0 auto;
          width:34px;
          height:34px;
          border-radius:999px;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          background:${C.tint};
          border:1px solid ${C.gray6};
          transition:transform .25s ease, background .25s ease, border-color .25s ease;
        }
        .faq-item[open] .faq-icon{
          transform:rotate(45deg);
          background:${C.accentPale};
          border-color:${C.accent};
        }
        .readmore-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
        .readmore-card{
          display:block;
          padding:22px;
          border-radius:24px;
          background:rgba(255,255,255,.48);
          border:1px solid ${C.gray6};
          backdrop-filter:blur(10px);
          transition:transform .24s ease,border-color .24s ease,box-shadow .24s ease;
        }
        .readmore-card:hover{
          transform:translateY(-2px);
          border-color:${C.gray5};
          box-shadow:0 14px 34px rgba(0,0,0,.05);
        }
        .toc-shell{
          position:sticky;
          top:104px;
          align-self:start;
        }
        .toc-card{
          background:rgba(255,255,255,.42);
          border:1px solid ${C.gray6};
          border-radius:24px;
          backdrop-filter:blur(10px);
          overflow:hidden;
        }
        .toc-head{
          padding:18px 18px 14px;
          border-bottom:1px solid ${C.gray6};
        }
        .toc-link{
          display:grid;
          grid-template-columns:18px 1fr auto;
          gap:12px;
          align-items:center;
          padding:14px 18px;
          font-size:14px;
          color:${C.gray3};
          border-top:1px solid rgba(234,233,228,.7);
          transition:background .22s ease,color .22s ease;
        }
        .toc-link:hover{
          color:${C.black};
          background:rgba(255,248,108,.18);
        }
        .toc-number{
          font-size:11px;
          letter-spacing:1px;
          text-transform:uppercase;
          color:${C.gray4};
        }
        .pill-yellow:hover{background:${C.accentHover};transform:translateY(-1px);box-shadow:0 8px 24px rgba(232,227,72,.24)}
        .pill-outline:hover{border-color:${C.gray2}!important;background:rgba(255,255,255,.4)}
        [data-reveal]{opacity:1;transform:none}
        @supports (animation-timeline: view()) {
          [data-reveal]{
            opacity:0;
            animation-name:fadeUp;
            animation-fill-mode:both;
            animation-timing-function:cubic-bezier(0.22,1,0.36,1);
            animation-timeline:view();
            animation-range:entry 12% cover 34%;
          }
          .hero-motion{
            opacity:0;
            animation-name:heroRise;
            animation-fill-mode:both;
            animation-timing-function:cubic-bezier(0.22,1,0.36,1);
            animation-timeline:view();
            animation-range:entry 0% cover 40%;
          }
        }
        @keyframes fadeUp{
          from{opacity:0;transform:translateY(26px)}
          to{opacity:1;transform:translateY(0)}
        }
        @keyframes heroRise{
          from{opacity:0;transform:translateY(22px) scale(.985)}
          to{opacity:1;transform:translateY(0) scale(1)}
        }
        @media(max-width:1180px){
          .hero-grid,.layout-grid,.section-grid,.facts-grid,.readmore-grid{grid-template-columns:1fr!important}
          .toc-shell{position:relative!important;top:auto!important}
          .hero-media{border-left:none;border-top:1px solid ${C.gray6};min-height:540px}
        }
        @media(max-width:820px){
          .intro-grid{grid-template-columns:1fr!important}
          .page-h1{font-size:44px!important;letter-spacing:-1px!important}
          .hero-image-main{inset:20px 20px 132px 20px}
          .hero-image-card{left:20px;right:20px}
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
        <section className="hero-wrap">
          <div className="hero-shell hero-motion">
            <div className="hero-grid">
              <div style={{ padding: "34px 34px 32px" }}>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    fontSize: 13,
                    color: C.gray3,
                    marginBottom: 22,
                  }}
                >
                  <span>
                    <Link href="/">Home</Link>
                  </span>
                  <span style={{ opacity: 0.5 }}>›</span>
                  <span>
                    <Link href="/financing">Financing</Link>
                  </span>
                  <span style={{ opacity: 0.5 }}>›</span>
                  <span style={{ color: C.black }}>What lenders look for</span>
                </div>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 12px",
                    borderRadius: 999,
                    background: C.accentPale,
                    border: `1px solid ${C.accent}`,
                    fontSize: 12,
                    fontWeight: 500,
                    marginBottom: 18,
                  }}
                >
                  <Shield size={14} />
                  Approval guide
                </div>

                <h1
                  className="page-h1"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "clamp(54px,6.2vw,92px)",
                    lineHeight: 1.01,
                    fontWeight: 400,
                    letterSpacing: -2,
                    marginBottom: 18,
                    maxWidth: 840,
                  }}
                >
                  What lenders look for in yacht financing
                </h1>

                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.86,
                    color: C.gray2,
                    maxWidth: 820,
                    marginBottom: 28,
                    fontWeight: 400,
                  }}
                >
                  Most rejections happen long before anyone says the word no. They happen when the
                  buyer assumes the lender only cares about the monthly payment, when the deposit is
                  too thin for the boat, when the survey tells a worse story than the listing, or
                  when the file arrives with just enough information to create questions rather than
                  answer them. Lenders are trying to judge two things at once: whether you can repay
                  the loan and whether the yacht gives them acceptable collateral if something goes
                  wrong. That means credit, income, debt levels, reserves, deposit size, yacht age,
                  builder reputation, survey results, insurance and documentation all get looked at
                  together, not one by one in isolation. If you already understand the basics from{" "}
                  <Link href="/financing/what-is-yacht-financing">what yacht financing is</Link> and
                  the mechanics from <Link href="/financing/how-yacht-financing-works">how the process works</Link>,
                  this is the page that shows what the lender is actually reading underneath all of it.
                </p>

                <div className="intro-grid" style={{ marginBottom: 28 }}>
                  <div
                    style={{
                      background: C.tint,
                      border: `1px solid ${C.gray6}`,
                      borderRadius: 22,
                      padding: 18,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: 1.1,
                        textTransform: "uppercase",
                        color: C.gray4,
                        marginBottom: 10,
                      }}
                    >
                      What matters most
                    </div>
                    <div style={{ fontSize: 15, lineHeight: 1.74, color: C.gray2 }}>
                      Credit quality, stable income, sensible debt, real reserves, a credible deposit
                      and a yacht that surveys and values cleanly.
                    </div>
                  </div>

                  <div
                    style={{
                      background: "rgba(255,255,255,0.46)",
                      border: `1px solid ${C.gray6}`,
                      borderRadius: 22,
                      padding: 18,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: 1.1,
                        textTransform: "uppercase",
                        color: C.gray4,
                        marginBottom: 10,
                      }}
                    >
                      What gets deals into trouble
                    </div>
                    <div style={{ fontSize: 15, lineHeight: 1.74, color: C.gray2 }}>
                      Thin deposits, stretched debt-to-income, poor surveys, weak cash buffers,
                      vague paperwork and assuming the boat itself will not be judged hard.
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 26 }}>
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
                      transition: "all .2s",
                    }}
                  >
                    Check financing readiness
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="facts-grid">
                  <div style={{ padding: "14px 0 0", borderTop: `1px solid ${C.gray6}` }}>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: 1.1,
                        textTransform: "uppercase",
                        color: C.gray4,
                        marginBottom: 8,
                      }}
                    >
                      Competitive credit
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 500 }}>Usually 680+</div>
                  </div>

                  <div style={{ padding: "14px 0 0", borderTop: `1px solid ${C.gray6}` }}>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: 1.1,
                        textTransform: "uppercase",
                        color: C.gray4,
                        marginBottom: 8,
                      }}
                    >
                      Comfortable deposit
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 500 }}>Often 20% to 30%</div>
                  </div>

                  <div style={{ padding: "14px 0 0", borderTop: `1px solid ${C.gray6}` }}>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: 1.1,
                        textTransform: "uppercase",
                        color: C.gray4,
                        marginBottom: 8,
                      }}
                    >
                      What gets checked
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 500 }}>You and the boat</div>
                  </div>
                </div>
              </div>

              <div className="hero-media">
                <div className="hero-image-main">
                  <Image
                    src="/home/waaza-yacht-financing-tool--4.jpg"
                    alt="Transaction team analysing lender-facing yacht finance case details and signals"
                    width={1600}
                    height={1200}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>

                <div className="hero-image-card">
                  <Image
                    src="/home/waaza-yacht-financing-tool--5.jpg"
                    alt="Modern yacht financing workspace with layered approval notes and decision points"
                    width={1100}
                    height={760}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div className="layout-grid" style={{ paddingBottom: 90 }}>
            <aside className="toc-shell">
              <div className="toc-card">
                <div className="toc-head">
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: 1.1,
                      textTransform: "uppercase",
                      color: C.gray4,
                    }}
                  >
                    <FileText size={14} />
                    On this page
                  </div>
                </div>

                <div>
                  {toc.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <a key={item.id} href={`#${item.id}`} className="toc-link">
                        <span className="toc-number">{String(index + 1).padStart(2, "0")}</span>
                        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <Icon size={15} />
                          <span>{item.label}</span>
                        </span>
                        <ArrowRight size={14} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </aside>

            <div>
              <Section
                id="what-lenders-look-at-first"
                title="What lenders look at first"
                intro="The first read is usually broader than buyers expect. A lender is not just checking whether you earn enough. It is checking whether the whole deal feels coherent once the borrower, the deposit and the yacht are all looked at together."
                imageSrc="/home/waaza-yacht-financing-tool--6.jpg"
                imageAlt="Structured approval review of a yacht finance file with borrower and vessel information"
                imageCaption="The strongest files feel coherent quickly. The weaker ones start raising questions immediately."
              >
                <p>
                  That means the lender is reading for overall risk before getting lost in detail.
                  Can this person really afford the payment? Does the deposit look sensible or
                  stretched? Is the yacht acceptable collateral? Does the age, builder and maintenance
                  history support the price being paid? Are there enough liquid reserves left after
                  the purchase, or is the buyer emptying every available account just to get over the
                  line? Those questions sit underneath the whole approval decision.
                </p>
                <p>
                  This is why a surprisingly large number of deals wobble even when the buyer feels
                  wealthy on paper. A lender does not approve a yacht because the buyer seems rich in
                  the abstract. It approves a file because the borrowing request, the deposit, the
                  boat and the wider financial picture all fit together well enough to look defensible.
                  The closer the file feels to “clean, normal and understandable,” the easier the
                  conversation tends to become.
                </p>
                <p>
                  If you are still one step earlier and want the broad process first, go back to{" "}
                  <Link href="/financing/how-yacht-financing-works">how yacht financing works</Link>.
                  If you already want to see whether the numbers even belong in the same room, the{" "}
                  <Link href="/yacht-finance-calculator">calculator</Link> is the quicker reality check.
                </p>
              </Section>

              <Section
                id="credit-income-dti"
                title="Credit, income and debt"
                intro="Credit score gets looked at first because it is fast. Income and debt matter more because they explain whether the monthly payment is actually believable."
              >
                <h3>Credit score and payment history</h3>
                <p>
                  Most lenders want to see a score above 680 for terms that are actually attractive,
                  and the strongest pricing usually sits north of 740. That does not mean lower scores
                  are impossible. It means the file has to work harder elsewhere, often through a
                  larger deposit or stronger reserves. They also look past the score itself. A solid
                  score built over years of sensible borrowing is more persuasive than a superficially
                  good score sitting on a thin file or recent volatility.
                </p>

                <h3>Stable income matters more than flashy income</h3>
                <p>
                  A steady salary or business income that has held up over time is easier to lend
                  against than a bigger number that feels fragile. The lender wants to know that the
                  payment still gets made if the market has a bad year, if bonuses dip or if something
                  expensive goes wrong after closing. Self-employed buyers can absolutely get approved,
                  but they should expect more documentation and less patience for vague numbers.
                </p>

                <h3>Debt-to-income is where deals quietly break</h3>
                <p>
                  Once the proposed yacht payment is added to your existing obligations, the lender
                  wants to see that the ratio still looks reasonable. Many want the total debt burden
                  below roughly 43%, and cleaner files often sit lower than that. A buyer moving from
                  15% to 30% debt-to-income looks very different from one moving from 32% to 47%, even
                  if both can technically make the payment today.
                </p>
              </Section>

              <Section
                id="deposit-ltv"
                title="Deposit and loan-to-value"
                intro="The deposit does more than reduce the loan. It tells the lender how much of your own balance sheet is standing behind the decision and how much pain there would be if the yacht had to be sold later."
                imageSrc="/home/waaza-yacht-financing-tool--7.jpg"
                imageAlt="Deposit and loan-to-value comparison for a yacht finance approval case"
                imageCaption="A bigger deposit does not guarantee approval, but it often changes the tone of the discussion."
                reverse
              >
                <p>
                  On cleaner deals, 10% down can sometimes work. On older yachts, more unusual assets
                  or marginaler borrower profiles, 20% to 30% is much more realistic. The reason is
                  simple. Lower loan-to-value gives the lender more cushion if the boat has to be sold
                  after a default, and it gives the file more credibility from day one.
                </p>
                <p>
                  It also changes pricing. Lower LTV often means better interest rates because the
                  lender is taking less risk. Over a long term, that small improvement compounds into
                  substantial savings. Buyers sometimes obsess over rate while resisting a bigger
                  deposit, when in practice the deposit is one of the cleanest ways to improve the
                  rate in the first place.
                </p>
                <p>
                  If you want to pull the deposit and term around in real numbers, the stronger next
                  step is the <Link href="/yacht-finance-calculator">yacht finance calculator</Link>.
                  If you want the standalone piece on deposits, that belongs naturally beside this page
                  as the next article in the section.
                </p>
              </Section>

              <section
                data-reveal
                style={{
                  margin: "14px 0 8px",
                  background: C.tint,
                  border: `1px solid ${C.gray6}`,
                  borderRadius: 28,
                  padding: "30px clamp(24px,3vw,36px)",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "6px 10px",
                    borderRadius: 999,
                    background: C.accentPale,
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: 1.1,
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  <Calculator size={14} />
                  Reality check
                </div>

                <h2
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "clamp(30px,4vw,48px)",
                    lineHeight: 1.08,
                    fontWeight: 400,
                    letterSpacing: -1,
                    marginBottom: 12,
                    maxWidth: 760,
                  }}
                >
                  Better to find the weak point in the numbers now than in underwriting
                </h2>

                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.78,
                    color: C.gray2,
                    marginBottom: 18,
                    maxWidth: 760,
                  }}
                >
                  Adjust the deposit, rate and term first. It is a much cheaper place to discover
                  the problem.
                </p>

                <Link
                  href="/yacht-finance-calculator"
                  className="pill-yellow"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    padding: "15px 22px",
                    borderRadius: 12,
                    background: C.accent,
                    color: C.black,
                    fontWeight: 600,
                    transition: "all .2s",
                  }}
                >
                  Open yacht finance calculator
                  <ArrowRight size={16} />
                </Link>
              </section>

              <Section
                id="the-yacht-itself"
                title="The yacht itself"
                intro="A lender does not only lend against the borrower. It also lends against the boat. That means age, condition, value, brand strength and resale confidence all influence the outcome."
              >
                <h3>Age and builder reputation</h3>
                <p>
                  Most lenders are happier inside the 20-year window, although good maintenance and a
                  respected builder can stretch that. A strong name does not guarantee approval, but
                  certain brands are easier to underwrite because resale behaviour is better
                  understood. A boat from an obscure builder with patchy market data is a different
                  proposition, even if the buyer is solid.
                </p>

                <h3>Condition and maintenance history</h3>
                <p>
                  A shiny listing does not matter nearly as much as a believable maintenance record.
                  Lenders know cosmetic presentation can hide expensive issues. They want comfort that
                  the vessel is seaworthy, properly maintained and not heading into a repair bill that
                  could swamp the economics of the purchase. This is one reason the survey matters so
                  much: it turns impressions into evidence.
                </p>

                <h3>Valuation discipline</h3>
                <p>
                  If the purchase price sits above what the survey and appraisal support, the lender
                  usually lends off the lower figure, not the higher one. That is where buyers suddenly
                  discover they need a larger deposit than expected. If vessel age is the variable
                  causing concern, the next logical internal jump is the page on{" "}
                  <Link href="/financing/how-vessel-age-affects-financing">how vessel age affects financing</Link>.
                </p>
              </Section>

              <Section
                id="survey-insurance-documents"
                title="Survey, insurance and documents"
                intro="This is where even willing lenders start slowing down. A file can feel promising in principle and still become hard work once the evidence arrives."
                imageSrc="/home/waaza-yacht-financing-tool--8.jpg"
                imageAlt="Marine survey findings, insurance paperwork and bank documents laid out for lender review"
                imageCaption="The paperwork is not there to irritate you. It is there because the lender is trying not to get surprised later."
              >
                <p>
                  The survey has to confirm fair market value, document condition properly and reveal
                  no major defects that turn the loan into a rescue operation. A weak survey can force
                  repairs, renegotiation or a bigger deposit. The same goes for insurance. The lender
                  wants comprehensive cover in place before closing and wants to be named as loss
                  payee. That way, if the yacht is totaled, the lender's position is protected first.
                </p>
                <p>
                  Then there is the file itself: tax returns, bank statements, payslips or business
                  accounts, asset and liability schedules, title or registration papers, purchase
                  agreement, survey, insurance binder and any maintenance history that helps the boat
                  read better. Clean, complete files move faster. Piecemeal files create friction,
                  because every missing document raises another question.
                </p>
                <p>
                  This is also where reserves matter. Lenders like seeing liquid cash left over after
                  the down payment, often enough to cover six to twelve months of payments. That tells
                  them the buyer is not spending every available pound just to get into the yacht.
                </p>
              </Section>

              <Section
                id="red-flags"
                title="Red flags that kill deals"
                intro="Most rejected applications are not mysterious. The warning signs are usually visible before the lender sees them — the borrower just hoped they would not matter."
              >
                <h3>Recent credit damage</h3>
                <p>
                  A single old late payment is one thing. A recent pattern of missed payments,
                  defaults, charge-offs, repossessions or a fresh bankruptcy is another. Those marks
                  make it hard for a lender to believe that this is the right moment for a secured
                  luxury-asset loan.
                </p>

                <h3>Thin reserves and stretched debt</h3>
                <p>
                  Buyers who can technically squeeze the payment into the month often look weaker than
                  they realise. If the yacht payment pushes debt-to-income too high and the reserves
                  disappear at closing, the file starts looking fragile even if the borrower feels
                  confident personally.
                </p>

                <h3>Poor survey or inflated price</h3>
                <p>
                  Nothing kills momentum faster than a boat that does not survey well or appraise near
                  the agreed number. Buyers sometimes think the lender will “work around it” because
                  the yacht is beautiful or desirable. Lenders care more about recoverable value than
                  romance.
                </p>

                <h3>Vague or incomplete paperwork</h3>
                <p>
                  If a lender has to keep chasing for core documents, the file starts to feel messy.
                  Messy usually gets interpreted as risk, even when the underlying borrower is decent.
                </p>
              </Section>

              <Section
                id="improve-the-application"
                title="How to strengthen the case before you apply"
                intro="If the file does not look clean today, that does not mean it never will. It usually means there is preparation work to do before you send it out."
                imageSrc="/home/waaza-yacht-financing-tool--9.jpg"
                imageAlt="Refined yacht financing case file showing stronger deposit reserves and lender-ready documents"
                imageCaption="A stronger file is rarely magic. It is usually just better prepared."
                reverse
              >
                <p>
                  Start with the easy wins: pay down revolving debt, clean up credit report errors,
                  avoid new borrowing before application, and build the deposit if it is currently too
                  thin. Then focus on reserves. A buyer who still has breathing room after closing
                  reads very differently from one who arrives empty.
                </p>
                <p>
                  Next, tighten the boat side of the case. Choose a vessel that surveys well, values
                  cleanly and sits in a part of the market lenders understand. A more financeable boat
                  can save as much pain as a better credit score. After that, make the file look
                  organised. When the documents are complete and the story makes sense, the lender can
                  spend more time approving and less time interpreting.
                </p>
                <p>
                  If you want to stress-test the case before it lands on a lender's desk, the best
                  move from here is the <Link href="/wizard">readiness intake</Link>. It is the
                  simplest way to stop guessing whether the file feels clean enough.
                </p>
              </Section>

              <section
                id="faq"
                data-reveal
                style={{
                  padding: "44px 0",
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
                        <span className="faq-icon">
                          <ArrowRight size={16} />
                        </span>
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
                  padding: "44px 0",
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
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 40,
                        height: 40,
                        borderRadius: 999,
                        background: C.accentPale,
                        border: `1px solid ${C.accent}`,
                        marginBottom: 16,
                      }}
                    >
                      <FileText size={18} />
                    </div>
                    <div style={{ fontSize: 21, lineHeight: 1.15, fontWeight: 500, marginBottom: 10 }}>
                      How yacht financing works
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.7, color: C.gray3, marginBottom: 16 }}>
                      The full process from application and underwriting through survey, insurance and closing.
                    </div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500 }}>
                      Read page <ArrowRight size={15} />
                    </div>
                  </Link>

                  <Link href="/financing/typical-deposit-for-yacht-financing" className="readmore-card">
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 40,
                        height: 40,
                        borderRadius: 999,
                        background: C.accentPale,
                        border: `1px solid ${C.accent}`,
                        marginBottom: 16,
                      }}
                    >
                      <Wallet size={18} />
                    </div>
                    <div style={{ fontSize: 21, lineHeight: 1.15, fontWeight: 500, marginBottom: 10 }}>
                      Typical deposit for yacht financing
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.7, color: C.gray3, marginBottom: 16 }}>
                      A closer look at what changes the upfront cash requirement and how it affects the deal.
                    </div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500 }}>
                      Read page <ArrowRight size={15} />
                    </div>
                  </Link>

                  <Link href="/financing/how-vessel-age-affects-financing" className="readmore-card">
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 40,
                        height: 40,
                        borderRadius: 999,
                        background: C.accentPale,
                        border: `1px solid ${C.accent}`,
                        marginBottom: 16,
                      }}
                    >
                      <Globe size={18} />
                    </div>
                    <div style={{ fontSize: 21, lineHeight: 1.15, fontWeight: 500, marginBottom: 10 }}>
                      How vessel age affects financing
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.7, color: C.gray3, marginBottom: 16 }}>
                      Why older boats change lender appetite, term length, survey sensitivity and deposit size.
                    </div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500 }}>
                      Read page <ArrowRight size={15} />
                    </div>
                  </Link>
                </div>
              </section>

              <section
                data-reveal
                style={{
                  margin: "20px 0 0",
                  padding: "32px clamp(24px,4vw,44px)",
                  background: "rgba(255,255,255,0.45)",
                  border: `1px solid ${C.gray6}`,
                  borderRadius: 28,
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "6px 10px",
                    borderRadius: 999,
                    background: C.accentPale,
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: 1.1,
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  <Shield size={14} />
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
                    maxWidth: 760,
                  }}
                >
                  The strongest applications look well prepared before the lender ever sees them
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
                  If the boat is real and the deal matters, do the work before the paperwork starts
                  bouncing back. You will save time, friction and usually money.
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
                    transition: "all .2s",
                  }}
                >
                  Start readiness intake
                  <ArrowRight size={16} />
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
