// app/compare/_components/CompareSiloShell.tsx
// ─────────────────────────────────────────────────────────────
// Server component shell for all compare silo pages.
// Adds a verdict box between the H1 and article — unique to
// compare pages, surfaces the conclusion immediately.
// Design: Inter Tight, Instrument Serif large, Waaza yellow.
// ─────────────────────────────────────────────────────────────

import type { ComparePageData, FAQItem, BreadcrumbItem, ToCItem, RelatedPage } from "@/lib/compare/types";

const SITE_URL = "https://www.waaza.co";

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
  accent: "#FFF86C",
  accentDark: "#0a0a0a",
  accentLight: "#fffde0",
  accentBorder: "#f0ec5a",
};

// ── Schema ────────────────────────────────────────────────────

function buildArticleSchema(data: ComparePageData) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.heading.h1,
    description: data.meta.description,
    url: data.meta.canonical,
    datePublished: data.meta.datePublished,
    dateModified: data.meta.dateModified,
    author: { "@type": "Organization", name: "Waaza", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Waaza",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/waaza.png` },
    },
    image: {
      "@type": "ImageObject",
      url: data.meta.ogImage ?? `${SITE_URL}/og/${data.slug}-og.jpg`,
      width: 1200,
      height: 630,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": data.meta.canonical },
  };
}

function buildFaqSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
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

// ── Sub-components ────────────────────────────────────────────

function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="breadcrumb" style={{ marginBottom: 32 }}>
      <ol style={{
        display: "flex", flexWrap: "wrap", alignItems: "center",
        gap: "6px 0", listStyle: "none", padding: 0, margin: 0,
        fontSize: 13, color: C.gray3, fontFamily: "'Inter Tight', sans-serif",
      }}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href} style={{ display: "flex", alignItems: "center" }}>
              {i > 0 && <span aria-hidden="true" style={{ margin: "0 6px", color: C.gray5, fontSize: 12 }}>/</span>}
              {isLast ? (
                <span style={{ color: C.gray2, fontWeight: 500 }} aria-current="page">{item.name}</span>
              ) : (
                <a href={item.href} className="cmp-breadcrumb-link">{item.name}</a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function VerdictBox({ verdict, optionA, optionB }: { verdict: ComparePageData["verdict"]; optionA: string; optionB: string }) {
  return (
    <div style={{
      background: C.accent,
      borderRadius: 16,
      padding: "28px 28px 24px",
      marginBottom: 40,
    }}>
      <p style={{
        fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
        textTransform: "uppercase", color: C.accentDark,
        marginBottom: 12, fontFamily: "'Inter Tight', sans-serif",
        opacity: 0.6,
      }}>
        The verdict
      </p>
      <p style={{
        fontFamily: "'Instrument Serif', serif",
        fontSize: "clamp(18px, 2.5vw, 24px)",
        fontWeight: 400, color: C.accentDark,
        lineHeight: 1.3, marginBottom: 20,
      }}>
        {verdict.summary}
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{
          background: "rgba(0,0,0,0.08)", borderRadius: 10, padding: "14px 16px",
        }}>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
            textTransform: "uppercase", color: C.accentDark,
            marginBottom: 6, fontFamily: "'Inter Tight', sans-serif", opacity: 0.6,
          }}>
            Choose {optionA} if
          </p>
          <p style={{ fontSize: 13, color: C.accentDark, lineHeight: 1.55, fontFamily: "'Inter Tight', sans-serif" }}>
            {verdict.chooseA}
          </p>
        </div>
        <div style={{
          background: "rgba(0,0,0,0.08)", borderRadius: 10, padding: "14px 16px",
        }}>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
            textTransform: "uppercase", color: C.accentDark,
            marginBottom: 6, fontFamily: "'Inter Tight', sans-serif", opacity: 0.6,
          }}>
            Choose {optionB} if
          </p>
          <p style={{ fontSize: 13, color: C.accentDark, lineHeight: 1.55, fontFamily: "'Inter Tight', sans-serif" }}>
            {verdict.chooseB}
          </p>
        </div>
      </div>
    </div>
  );
}

function AuthorBar({ author, lastUpdated }: { author?: { name: string; role: string }; lastUpdated: string }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 12,
      padding: "12px 0",
      borderTop: `1px solid ${C.gray6}`, borderBottom: `1px solid ${C.gray6}`,
      marginBottom: 40, fontSize: 13, color: C.gray3,
      fontFamily: "'Inter Tight', sans-serif",
    }}>
      <div style={{
        width: 32, height: 32, borderRadius: "50%",
        background: C.accent, border: `1.5px solid ${C.accentBorder}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0, fontSize: 13, color: C.accentDark, fontWeight: 700,
        fontFamily: "'Inter Tight', sans-serif",
      }}>W</div>
      <div>
        <span style={{ color: C.gray1, fontWeight: 500 }}>{author?.name ?? "Waaza Editorial"}</span>
        {author?.role && <span style={{ color: C.gray4 }}> · {author.role}</span>}
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
      <p style={{
        fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
        textTransform: "uppercase", color: C.gray4, marginBottom: 14,
        fontFamily: "'Inter Tight', sans-serif",
      }}>On this page</p>
      <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: 6 }}>
            <a href={`#${item.id}`} className={`cmp-toc-link${item.level === 3 ? " cmp-toc-h3" : ""}`}>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

function SidebarDivider() {
  return <div style={{ height: 1, background: C.gray6, margin: "28px 0" }} />;
}

function RelatedPages({ pages }: { pages: RelatedPage[] }) {
  if (!pages.length) return null;
  return (
    <div>
      <p style={{
        fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
        textTransform: "uppercase", color: C.gray4, marginBottom: 14,
        fontFamily: "'Inter Tight', sans-serif",
      }}>Related guides</p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {pages.map((page) => (
          <li key={page.href} style={{ marginBottom: 14 }}>
            <a href={page.href} className="cmp-related-link">{page.title}</a>
            {page.description && (
              <span style={{ fontSize: 12, color: C.gray4, lineHeight: 1.4, display: "block", fontFamily: "'Inter Tight', sans-serif" }}>
                {page.description}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SidebarCTABlock({ cta }: { cta: ComparePageData["cta"] }) {
  return (
    <div style={{ background: C.black, borderRadius: 16, padding: "24px 20px", marginTop: 8 }}>
      <p style={{
        fontFamily: "'Instrument Serif', serif",
        fontSize: 20, fontWeight: 400, color: C.white,
        lineHeight: 1.25, marginBottom: 10,
      }}>{cta.heading}</p>
      <p style={{ fontSize: 13, color: C.gray4, lineHeight: 1.6, marginBottom: 20, fontFamily: "'Inter Tight', sans-serif" }}>
        {cta.body}
      </p>
      <a href={cta.buttonHref} className="cmp-cta-btn" style={{
        display: "block", textAlign: "center", padding: "12px 20px",
        background: C.accent, color: C.accentDark, fontSize: 14, fontWeight: 700,
        borderRadius: 10, textDecoration: "none", fontFamily: "'Inter Tight', sans-serif",
      }}>{cta.buttonText}</a>
    </div>
  );
}

function FAQSection({ faqs }: { faqs: FAQItem[] }) {
  if (!faqs.length) return null;
  return (
    <section aria-labelledby="faq-heading" style={{ marginTop: 64, paddingTop: 48, borderTop: `1px solid ${C.gray6}` }}>
      <h2 id="faq-heading" style={{
        fontFamily: "'Instrument Serif', serif",
        fontSize: "clamp(32px, 4vw, 48px)",
        fontWeight: 400, letterSpacing: -0.5, color: C.black, marginBottom: 36,
      }}>Frequently asked questions</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {faqs.map((faq, i) => (
          <details key={i} style={{ borderTop: `1px solid ${C.gray6}`, padding: "20px 0" }}>
            <summary style={{
              fontSize: 16, fontWeight: 600, color: C.gray1,
              cursor: "pointer", listStyle: "none",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              gap: 16, userSelect: "none", fontFamily: "'Inter Tight', sans-serif",
            }}>
              {faq.question}
              <span aria-hidden="true" style={{
                flexShrink: 0, width: 20, height: 20, borderRadius: "50%",
                background: C.accentLight, display: "inline-flex",
                alignItems: "center", justifyContent: "center",
                fontSize: 14, color: C.accentDark, fontWeight: 700,
              }}>+</span>
            </summary>
            <p style={{
              fontSize: 15, color: C.gray2, lineHeight: 1.75,
              marginTop: 14, maxWidth: 680, fontFamily: "'Inter Tight', sans-serif",
            }}>{faq.answer}</p>
          </details>
        ))}
        <div style={{ borderTop: `1px solid ${C.gray6}` }} />
      </div>
    </section>
  );
}

// ── Main shell ────────────────────────────────────────────────

export function CompareSiloShell({
  data,
  children,
}: {
  data: ComparePageData;
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildArticleSchema(data)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(data.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema(data.breadcrumbs)) }} />

      <div style={{ background: C.bg, minHeight: "100vh", fontFamily: "'Inter Tight', sans-serif" }}>
        <div style={{ height: 3, background: C.accent, width: "100%" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px clamp(20px, 4vw, 60px) 100px" }}>
          <Breadcrumb items={data.breadcrumbs} />

          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 300px", gap: "0 60px", alignItems: "start" }}>

            {/* ── MAIN ── */}
            <main id="main-content">
              {/* Silo label */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "4px 12px", background: C.accentLight,
                borderRadius: 6, marginBottom: 20,
                border: `1px solid ${C.accentBorder}40`,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.accentDark, flexShrink: 0 }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: C.accentDark, letterSpacing: "0.05em", fontFamily: "'Inter Tight', sans-serif" }}>
                  Comparison Guide
                </span>
              </div>

              {/* H1 */}
              <h1 style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(38px, 5vw, 64px)",
                fontWeight: 400, lineHeight: 1.05,
                letterSpacing: -1.5, color: C.black,
                marginBottom: 24, maxWidth: 760,
              }}>{data.heading.h1}</h1>

              {/* Intro */}
              <p style={{
                fontSize: 18, color: C.gray2, lineHeight: 1.75,
                marginBottom: 32, maxWidth: 680,
                fontFamily: "'Inter Tight', sans-serif",
              }}>{data.heading.intro}</p>

              {/* Verdict box — unique to compare pages */}
              <VerdictBox verdict={data.verdict} optionA={data.optionA} optionB={data.optionB} />

              <AuthorBar author={data.heading.author} lastUpdated={data.heading.lastUpdated} />

              {/* Article */}
              <article style={{ fontSize: 16, color: C.gray2, lineHeight: 1.8, maxWidth: 720, fontFamily: "'Inter Tight', sans-serif" }}>
                {children}
              </article>

              <FAQSection faqs={data.faqs} />

              {/* Bottom CTA */}
              <div style={{ marginTop: 60, padding: "40px", background: C.black, borderRadius: 20 }}>
                <p style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontWeight: 400, color: C.white, lineHeight: 1.2,
                  maxWidth: 500, marginBottom: 16,
                }}>{data.cta.heading}</p>
                <p style={{ fontSize: 15, color: C.gray4, maxWidth: 480, lineHeight: 1.65, marginBottom: 24, fontFamily: "'Inter Tight', sans-serif" }}>
                  {data.cta.body}
                </p>
                <a href={data.cta.buttonHref} className="cmp-cta-btn" style={{
                  display: "inline-block", padding: "14px 32px",
                  background: C.accent, color: C.accentDark,
                  fontSize: 15, fontWeight: 700, borderRadius: 10,
                  textDecoration: "none", fontFamily: "'Inter Tight', sans-serif",
                }}>{data.cta.buttonText}</a>
              </div>
            </main>

            {/* ── SIDEBAR ── */}
            <aside style={{ position: "sticky", top: 100, alignSelf: "start" }}>
              {data.toc.length > 0 && <><TableOfContents items={data.toc} /><SidebarDivider /></>}
              <SidebarCTABlock cta={data.cta} />
              <SidebarDivider />
              <RelatedPages pages={data.relatedPages} />
            </aside>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { aside { display: none !important; } }

        .cmp-breadcrumb-link { color: #6b7280; text-decoration: none; font-family: 'Inter Tight', sans-serif; transition: color 0.15s; }
        .cmp-breadcrumb-link:hover { color: #0a0a0a; }

        .cmp-toc-link { font-size: 14px; color: #4b5563; text-decoration: none; line-height: 1.5; display: block; font-family: 'Inter Tight', sans-serif; transition: color 0.15s, padding-left 0.15s; }
        .cmp-toc-link.cmp-toc-h3 { font-size: 13px; color: #6b7280; padding-left: 14px; }
        .cmp-toc-link:hover { color: #0a0a0a; padding-left: 3px; }

        .cmp-related-link { font-size: 13px; color: #1a1a1a; font-weight: 500; text-decoration: none; display: block; line-height: 1.4; margin-bottom: 3px; font-family: 'Inter Tight', sans-serif; transition: color 0.15s; }
        .cmp-related-link:hover { text-decoration: underline; }

        .cmp-cta-btn { transition: opacity 0.15s; }
        .cmp-cta-btn:hover { opacity: 0.88; }

        details summary::-webkit-details-marker { display: none; }
        details[open] summary span[aria-hidden] { transform: rotate(45deg); }
        details summary span[aria-hidden] { transition: transform 0.2s; display: inline-flex; }

        article h2 { font-family: 'Instrument Serif', serif; font-size: clamp(26px, 3vw, 36px); font-weight: 400; letter-spacing: -0.5px; color: #0a0a0a; margin: 52px 0 18px; line-height: 1.15; }
        article h3 { font-family: 'Inter Tight', sans-serif; font-size: 18px; font-weight: 600; color: #1a1a1a; margin: 36px 0 12px; line-height: 1.3; }
        article p { margin-bottom: 20px; font-family: 'Inter Tight', sans-serif; }
        article ul, article ol { padding-left: 24px; margin-bottom: 20px; font-family: 'Inter Tight', sans-serif; }
        article li { margin-bottom: 8px; line-height: 1.75; }
        article strong { color: #1a1a1a; font-weight: 600; }
        article a { color: #0a0a0a; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; font-weight: 500; }
        article a:hover { opacity: 0.7; }
        article blockquote { border-left: 3px solid #FFF86C; padding: 4px 0 4px 20px; margin: 32px 0; font-style: italic; color: #4b5563; font-family: 'Inter Tight', sans-serif; }
        article table { width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px; font-family: 'Inter Tight', sans-serif; }
        article th { background: #f0efea; padding: 10px 14px; text-align: left; font-weight: 600; color: #1a1a1a; border-bottom: 1px solid #eae9e4; }
        article td { padding: 10px 14px; border-bottom: 1px solid #eae9e4; color: #4b5563; vertical-align: top; }
        article tr:last-child td { border-bottom: none; }

        /* Comparison table — A vs B styling */
        .compare-table th:nth-child(2) { background: #fffde0; color: #0a0a0a; }
        .compare-table th:nth-child(3) { background: #f0efea; color: #1a1a1a; }
        .compare-table td:nth-child(2) { background: #fffef5; }
      `}</style>
    </>
  );
}