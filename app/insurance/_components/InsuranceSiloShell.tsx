// app/insurance/_components/InsuranceSiloShell.tsx
// ─────────────────────────────────────────────────────────────
// Server component. Renders the full page shell for every
// insurance silo page. Handles:
//   • Schema injection (Article + FAQPage + BreadcrumbList)
//   • Breadcrumb (visual + aria)
//   • Page header (H1, intro, author, last updated)
//   • Two-column layout (content 70% / sidebar 30%)
//   • Sticky sidebar: ToC, related pages, CTA
//   • FAQ section (rendered from data)
//   • Robots / Googlebot directives (via page metadata)
//
// Usage in each page.tsx:
//   <InsuranceSiloShell data={pageData}>
//     <ArticleContent />   ← your H2/H3 prose goes here
//   </InsuranceSiloShell>
// ─────────────────────────────────────────────────────────────

import type { InsurancePageData, FAQItem, BreadcrumbItem, ToCItem, RelatedPage } from "@/lib/insurance/types";

const SITE_URL = "https://www.waaza.co";

// ── Design tokens (matches Waaza brand) ──────────────────────
const C = {
  bg: "#f4f3ef",
  white: "#ffffff",
  black: "#0a0a0a",
  gray1: "#1a1a1a",
  gray2: "#4b5563",
  gray3: "#6b7280",
  gray4: "#9ca3af",
  gray5: "#d1d5db",
  gray6: "#eae9e4",
  tint: "#f0efea",

  // Insurance silo accent — warm terracotta (distinct from financing yellow)
  accent: "#c8523a",         // terracotta
  accentLight: "#fdf1ee",    // pale tint for backgrounds
  accentMid: "#e8856e",      // mid tone for hover states
  accentYellow: "#FFF86C",   // Waaza yellow — used for primary CTA only
};

// ── Schema builders ───────────────────────────────────────────

function buildArticleSchema(data: InsurancePageData) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.heading.h1,
    description: data.meta.description,
    url: data.meta.canonical,
    datePublished: data.meta.datePublished,
    dateModified: data.meta.dateModified,
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
        url: `${SITE_URL}/waaza.png`,
      },
    },
    image: {
      "@type": "ImageObject",
      url: data.meta.ogImage ?? `${SITE_URL}/og/${data.slug}-og.jpg`,
      width: 1200,
      height: 630,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": data.meta.canonical,
    },
  };
}

function buildFaqSchema(faqs: FAQItem[]) {
  return {
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
}

function buildBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.href.startsWith("http") ? crumb.href : `${SITE_URL}${crumb.href}`,
    })),
  };
}

// ── Sub-components (all server-rendered) ──────────────────────

function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="breadcrumb" style={{ marginBottom: 32 }}>
      <ol
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "6px 0",
          listStyle: "none",
          padding: 0,
          margin: 0,
          fontSize: 13,
          color: C.gray3,
        }}
      >
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href} style={{ display: "flex", alignItems: "center" }}>
              {i > 0 && (
                <span aria-hidden="true" style={{ margin: "0 6px", color: C.gray5, fontSize: 12 }}>
                  /
                </span>
              )}
              {isLast ? (
                <span style={{ color: C.gray2, fontWeight: 500 }} aria-current="page">
                  {item.name}
                </span>
              ) : (
                <a href={item.href} className="ins-breadcrumb-link">
                  {item.name}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function AuthorBar({
  author,
  lastUpdated,
}: {
  author?: { name: string; role: string };
  lastUpdated: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 0",
        borderTop: `1px solid ${C.gray6}`,
        borderBottom: `1px solid ${C.gray6}`,
        marginBottom: 40,
        fontSize: 13,
        color: C.gray3,
      }}
    >
      {/* Waaza avatar dot */}
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: C.accentLight,
          border: `1.5px solid ${C.accent}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          fontSize: 14,
          color: C.accent,
          fontWeight: 700,
        }}
      >
        W
      </div>
      <div>
        <span style={{ color: C.gray1, fontWeight: 500 }}>
          {author?.name ?? "Waaza Editorial"}
        </span>
        {author?.role && (
          <span style={{ color: C.gray4 }}> · {author.role}</span>
        )}
        <span style={{ color: C.gray5 }}> · </span>
        <span>Updated {lastUpdated}</span>
      </div>
    </div>
  );
}

function TableOfContents({ items }: { items: ToCItem[] }) {
  if (!items.length) return null;
  return (
    <div style={{ marginBottom: 32 }}>
      <p
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: C.gray4,
          marginBottom: 14,
        }}
      >
        On this page
      </p>
      <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: 6 }}>
            <a
              href={`#${item.id}`}
              className={`ins-toc-link${item.level === 3 ? " ins-toc-h3" : ""}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

function SidebarDivider() {
  return (
    <div
      style={{
        height: 1,
        background: C.gray6,
        margin: "28px 0",
      }}
    />
  );
}

function RelatedPages({ pages }: { pages: RelatedPage[] }) {
  if (!pages.length) return null;
  return (
    <div>
      <p
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: C.gray4,
          marginBottom: 14,
        }}
      >
        Related guides
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {pages.map((page) => (
          <li key={page.href} style={{ marginBottom: 14 }}>
            <a href={page.href} className="ins-related-link">
              {page.title}
            </a>
            {page.description && (
              <span style={{ fontSize: 12, color: C.gray4, lineHeight: 1.4, display: "block" }}>
                {page.description}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SidebarCTABlock({
  cta,
}: {
  cta: InsurancePageData["cta"];
}) {
  return (
    <div
      style={{
        background: C.black,
        borderRadius: 16,
        padding: "24px 20px",
        marginTop: 8,
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-serif), 'Instrument Serif', serif",
          fontSize: 18,
          fontWeight: 400,
          color: C.white,
          lineHeight: 1.3,
          marginBottom: 10,
        }}
      >
        {cta.heading}
      </p>
      <p
        style={{
          fontSize: 13,
          color: C.gray4,
          lineHeight: 1.6,
          marginBottom: 20,
        }}
      >
        {cta.body}
      </p>
      <a
        href={cta.buttonHref}
        style={{
          display: "block",
          textAlign: "center",
          padding: "12px 20px",
          background: C.accentYellow,
          color: C.black,
          fontSize: 14,
          fontWeight: 700,
          borderRadius: 10,
          textDecoration: "none",
          transition: "opacity 0.15s",
        }}
      >
        {cta.buttonText}
      </a>
    </div>
  );
}

function FAQSection({ faqs }: { faqs: FAQItem[] }) {
  if (!faqs.length) return null;
  return (
    <section
      aria-labelledby="faq-heading"
      style={{ marginTop: 64, paddingTop: 48, borderTop: `1px solid ${C.gray6}` }}
    >
      <h2
        id="faq-heading"
        style={{
          fontFamily: "var(--font-serif), 'Instrument Serif', serif",
          fontSize: "clamp(28px, 3.5vw, 40px)",
          fontWeight: 400,
          letterSpacing: -0.5,
          color: C.black,
          marginBottom: 36,
        }}
      >
        Frequently asked questions
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {faqs.map((faq, i) => (
          <details
            key={i}
            style={{
              borderTop: `1px solid ${C.gray6}`,
              padding: "20px 0",
            }}
          >
            <summary
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: C.gray1,
                cursor: "pointer",
                listStyle: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 16,
                userSelect: "none",
              }}
            >
              {faq.question}
              <span
                aria-hidden="true"
                style={{
                  flexShrink: 0,
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: C.accentLight,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  color: C.accent,
                  fontWeight: 700,
                }}
              >
                +
              </span>
            </summary>
            <p
              style={{
                fontSize: 15,
                color: C.gray2,
                lineHeight: 1.75,
                marginTop: 14,
                maxWidth: 680,
              }}
            >
              {faq.answer}
            </p>
          </details>
        ))}
        <div style={{ borderTop: `1px solid ${C.gray6}` }} />
      </div>
    </section>
  );
}

// ── Main shell ────────────────────────────────────────────────

interface InsuranceSiloShellProps {
  data: InsurancePageData;
  children: React.ReactNode; // article prose (H2/H3 sections)
}

export function InsuranceSiloShell({ data, children }: InsuranceSiloShellProps) {
  const articleSchema = buildArticleSchema(data);
  const faqSchema = buildFaqSchema(data.faqs);
  const breadcrumbSchema = buildBreadcrumbSchema(data.breadcrumbs);

  return (
    <>
      {/* ── Schema — server-side, in <head> via layout ── */}
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

      <div
        style={{
          background: C.bg,
          minHeight: "100vh",
          fontFamily: "var(--font-sans), 'DM Sans', sans-serif",
        }}
      >
        {/* ── Top accent bar — insurance silo identifier ── */}
        <div
          style={{
            height: 3,
            background: C.accent,
            width: "100%",
          }}
        />

        {/* ── Page wrapper ── */}
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "48px clamp(20px, 4vw, 60px) 100px",
          }}
        >
          {/* ── Breadcrumb ── */}
          <Breadcrumb items={data.breadcrumbs} />

          {/* ── Two-column layout ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) 300px",
              gap: "0 60px",
              alignItems: "start",
            }}
          >
            {/* ════════════════════════════════════
                MAIN CONTENT COLUMN (left, 70%)
                ════════════════════════════════════ */}
            <main id="main-content">
              {/* ── Insurance silo label ── */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "4px 12px",
                  background: C.accentLight,
                  borderRadius: 6,
                  marginBottom: 20,
                  border: `1px solid ${C.accentMid}20`,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: C.accent,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: C.accent,
                    letterSpacing: "0.05em",
                  }}
                >
                  Marine Insurance Guide
                </span>
              </div>

              {/* ── H1 ── */}
              <h1
                style={{
                  fontFamily: "var(--font-serif), 'Instrument Serif', serif",
                  fontSize: "clamp(32px, 4.5vw, 54px)",
                  fontWeight: 400,
                  lineHeight: 1.08,
                  letterSpacing: -1,
                  color: C.black,
                  marginBottom: 24,
                  maxWidth: 720,
                }}
              >
                {data.heading.h1}
              </h1>

              {/* ── Intro paragraph ── */}
              <p
                style={{
                  fontSize: 18,
                  color: C.gray2,
                  lineHeight: 1.75,
                  marginBottom: 32,
                  maxWidth: 680,
                }}
              >
                {data.heading.intro}
              </p>

              {/* ── Author / updated bar ── */}
              <AuthorBar
                author={data.heading.author}
                lastUpdated={data.heading.lastUpdated}
              />

              {/* ── Article prose (from page.tsx children) ── */}
              <article
                style={{
                  fontSize: 16,
                  color: C.gray2,
                  lineHeight: 1.8,
                  maxWidth: 720,
                }}
              >
                {children}
              </article>

              {/* ── FAQ section ── */}
              <FAQSection faqs={data.faqs} />

              {/* ── Bottom CTA (inline, after FAQ) ── */}
              <div
                style={{
                  marginTop: 60,
                  padding: "40px",
                  background: C.black,
                  borderRadius: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-serif), 'Instrument Serif', serif",
                    fontSize: "clamp(22px, 3vw, 32px)",
                    fontWeight: 400,
                    color: C.white,
                    lineHeight: 1.25,
                    maxWidth: 500,
                  }}
                >
                  {data.cta.heading}
                </p>
                <p style={{ fontSize: 15, color: C.gray4, maxWidth: 480, lineHeight: 1.65 }}>
                  {data.cta.body}
                </p>
                <div>
                  <a
                    href={data.cta.buttonHref}
                    style={{
                      display: "inline-block",
                      padding: "14px 32px",
                      background: C.accentYellow,
                      color: C.black,
                      fontSize: 15,
                      fontWeight: 700,
                      borderRadius: 10,
                      textDecoration: "none",
                    }}
                  >
                    {data.cta.buttonText}
                  </a>
                </div>
              </div>
            </main>

            {/* ════════════════════════════════════
                STICKY SIDEBAR (right, 300px)
                ════════════════════════════════════ */}
            <aside
              style={{
                position: "sticky",
                top: 100,
                alignSelf: "start",
              }}
            >
              {/* ── Table of contents ── */}
              {data.toc.length > 0 && (
                <>
                  <TableOfContents items={data.toc} />
                  <SidebarDivider />
                </>
              )}

              {/* ── CTA block ── */}
              <SidebarCTABlock cta={data.cta} />

              <SidebarDivider />

              {/* ── Related pages ── */}
              <RelatedPages pages={data.relatedPages} />
            </aside>
          </div>
        </div>
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (max-width: 900px) {
          /* Stack to single column on mobile */
          aside { display: none !important; }
          main { max-width: 100% !important; }
        }
        /* Breadcrumb link hover — replaces inline event handlers (server component safe) */
        .ins-breadcrumb-link {
          color: #6b7280;
          text-decoration: none;
          transition: color 0.15s;
        }
        .ins-breadcrumb-link:hover { color: #c8523a; }

        /* Sidebar ToC link hover */
        .ins-toc-link {
          font-size: 14px;
          color: #4b5563;
          text-decoration: none;
          line-height: 1.5;
          display: block;
          transition: color 0.15s, padding-left 0.15s;
        }
        .ins-toc-link.ins-toc-h3 { font-size: 13px; color: #6b7280; padding-left: 14px; }
        .ins-toc-link:hover { color: #c8523a; }

        /* Sidebar related page link hover */
        .ins-related-link {
          font-size: 13px;
          color: #1a1a1a;
          font-weight: 500;
          text-decoration: none;
          display: block;
          line-height: 1.4;
          margin-bottom: 3px;
          transition: color 0.15s;
        }
        .ins-related-link:hover { color: #c8523a; }

        /* CTA buttons */
        .ins-cta-btn { transition: opacity 0.15s; }
        .ins-cta-btn:hover { opacity: 0.85; }

        details summary::-webkit-details-marker { display: none; }
        details[open] summary span[aria-hidden] { transform: rotate(45deg); }
        details summary span[aria-hidden] { transition: transform 0.2s; }

        /* Article prose styles */
        article h2 {
          font-family: var(--font-serif), 'Instrument Serif', serif;
          font-size: clamp(22px, 2.5vw, 30px);
          font-weight: 400;
          letter-spacing: -0.3px;
          color: #0a0a0a;
          margin: 48px 0 18px;
          line-height: 1.2;
        }
        article h3 {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 32px 0 12px;
          line-height: 1.3;
        }
        article p {
          margin-bottom: 20px;
        }
        article ul, article ol {
          padding-left: 24px;
          margin-bottom: 20px;
        }
        article li {
          margin-bottom: 8px;
          line-height: 1.75;
        }
        article strong {
          color: #1a1a1a;
          font-weight: 600;
        }
        article a {
          color: #c8523a;
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 3px;
        }
        article a:hover {
          color: #a03d2a;
        }
        article blockquote {
          border-left: 3px solid #c8523a;
          padding: 4px 0 4px 20px;
          margin: 28px 0;
          font-style: italic;
          color: #4b5563;
        }
        article table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
          margin-bottom: 24px;
        }
        article th {
          background: #f0efea;
          padding: 10px 14px;
          text-align: left;
          font-weight: 600;
          color: #1a1a1a;
          border-bottom: 1px solid #eae9e4;
        }
        article td {
          padding: 10px 14px;
          border-bottom: 1px solid #eae9e4;
          color: #4b5563;
          vertical-align: top;
        }
        article tr:last-child td {
          border-bottom: none;
        }
      `}</style>
    </>
  );
}