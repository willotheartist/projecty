"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";

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
};

type CTA = {
  href: string;
  label: string;
};

type Section = {
  id: string;
  title: string;
  content: ReactNode;
};

type FAQ = {
  question: string;
  answer: string;
};

type Related = {
  href: string;
  title: string;
  description: string;
};

type Breadcrumb = {
  href: string;
  label: string;
};

function useFadeUp(options?: { threshold?: number; delay?: number; rootMargin?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: options?.threshold ?? 0.12,
        rootMargin: options?.rootMargin ?? "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.threshold, options?.rootMargin]);

  const style: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(26px)",
    transition: `opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${options?.delay ?? 0}ms, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${options?.delay ?? 0}ms`,
  };

  return { ref, style };
}

function FadeUp({
  children,
  delay = 0,
  style: extraStyle,
}: {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
}) {
  const { ref, style } = useFadeUp({ delay });
  return (
    <div ref={ref} style={{ ...style, ...extraStyle }}>
      {children}
    </div>
  );
}

function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-120px 0px -55% 0px",
        threshold: [0.1, 0.3, 0.6],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 96;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function SeoClusterPage({
  breadcrumbs,
  eyebrow,
  title,
  intro,
  primaryCta,
  secondaryCta,
  sections,
  faqs,
  related,
}: {
  breadcrumbs: Breadcrumb[];
  eyebrow: string;
  title: string;
  intro: ReactNode;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  sections: Section[];
  faqs: FAQ[];
  related: Related[];
}) {
  const sectionIds = useMemo(() => sections.map((section) => section.id), [sections]);
  const activeId = useActiveSection(sectionIds);

  return (
    <>
      <style>{`
        html{scroll-behavior:smooth}
        .seo-grid{display:grid;grid-template-columns:280px minmax(0,1fr);gap:24px;align-items:start}
        .related-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
        .pill-yellow:hover{background:${C.accentHover};transform:translateY(-1px);box-shadow:0 6px 20px rgba(232,227,72,.24)}
        .pill-outline:hover{border-color:${C.gray2}!important;background:${C.white}}
        .toc-btn:hover{color:${C.black}}
        .card-hover:hover{transform:translateY(-2px);box-shadow:0 10px 30px rgba(0,0,0,.05)}
        details[open] summary{margin-bottom:10px}
        summary::-webkit-details-marker{display:none}
        @media(max-width:1080px){
          .seo-grid,.related-grid{grid-template-columns:1fr!important}
          .toc-shell{position:relative!important;top:auto!important}
        }
        @media(max-width:720px){
          .page-h1{font-size:44px!important;letter-spacing:-1px!important}
          .page-h2{font-size:28px!important}
        }
      `}</style>

      <main style={{ background: C.bg, color: C.black, padding: "88px 24px 120px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <FadeUp>
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
              {breadcrumbs.map((crumb, index) => (
                <span key={crumb.href} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  {index > 0 && <span style={{ opacity: 0.5 }}>›</span>}
                  <Link href={crumb.href} style={{ color: index === breadcrumbs.length - 1 ? C.black : C.gray3 }}>
                    {crumb.label}
                  </Link>
                </span>
              ))}
            </div>
          </FadeUp>

          <div
            style={{
              background: C.white,
              border: `1px solid ${C.gray6}`,
              borderRadius: 28,
              padding: "clamp(28px,4vw,52px)",
              marginBottom: 24,
            }}
          >
            <div style={{ maxWidth: 940 }}>
              <FadeUp delay={50}>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: 1.8,
                    textTransform: "uppercase",
                    color: C.gray3,
                    marginBottom: 18,
                  }}
                >
                  {eyebrow}
                </p>
              </FadeUp>

              <FadeUp delay={120}>
                <h1
                  className="page-h1"
                  style={{
                    fontFamily: "var(--font-serif), serif",
                    fontSize: "clamp(48px,6vw,82px)",
                    lineHeight: 1.03,
                    fontWeight: 400,
                    letterSpacing: -1.8,
                    marginBottom: 22,
                    maxWidth: 980,
                  }}
                >
                  {title}
                </h1>
              </FadeUp>

              <FadeUp delay={180}>
                <div
                  style={{
                    fontSize: 18,
                    lineHeight: 1.84,
                    color: C.gray2,
                    maxWidth: 980,
                    marginBottom: 30,
                  }}
                >
                  {intro}
                </div>
              </FadeUp>

              {(primaryCta || secondaryCta) && (
                <FadeUp delay={240}>
                  <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                    {primaryCta && (
                      <Link
                        href={primaryCta.href}
                        className="pill-yellow"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "15px 24px",
                          borderRadius: 12,
                          background: C.accent,
                          color: C.black,
                          fontWeight: 700,
                          transition: "all .2s",
                        }}
                      >
                        {primaryCta.label}
                      </Link>
                    )}

                    {secondaryCta && (
                      <Link
                        href={secondaryCta.href}
                        className="pill-outline"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "15px 24px",
                          borderRadius: 12,
                          background: C.white,
                          border: `1px solid ${C.gray6}`,
                          color: C.black,
                          fontWeight: 700,
                          transition: "all .2s",
                        }}
                      >
                        {secondaryCta.label}
                      </Link>
                    )}
                  </div>
                </FadeUp>
              )}
            </div>
          </div>

          <div className="seo-grid">
            <FadeUp delay={80}>
              <aside
                className="toc-shell"
                style={{
                  position: "sticky",
                  top: 94,
                }}
              >
                <div
                  style={{
                    background: C.white,
                    border: `1px solid ${C.gray6}`,
                    borderRadius: 22,
                    padding: 22,
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: 1.4,
                      textTransform: "uppercase",
                      color: C.gray4,
                      marginBottom: 14,
                    }}
                  >
                    On this page
                  </div>

                  <div style={{ display: "grid", gap: 8 }}>
                    {sections.map((section) => {
                      const active = activeId === section.id;
                      return (
                        <button
                          key={section.id}
                          type="button"
                          onClick={() => scrollToId(section.id)}
                          className="toc-btn"
                          style={{
                            textAlign: "left",
                            background: active ? C.accentPale : "transparent",
                            border: `1px solid ${active ? C.accent : "transparent"}`,
                            color: active ? C.black : C.gray3,
                            borderRadius: 12,
                            padding: "10px 12px",
                            fontSize: 14,
                            cursor: "pointer",
                            transition: "all .2s",
                          }}
                        >
                          {section.title}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </aside>
            </FadeUp>

            <div style={{ display: "grid", gap: 18 }}>
              {sections.map((section, index) => (
                <FadeUp key={section.id} delay={index * 70}>
                  <section
                    id={section.id}
                    style={{
                      background: C.white,
                      border: `1px solid ${C.gray6}`,
                      borderRadius: 24,
                      padding: 32,
                    }}
                  >
                    <h2
                      className="page-h2"
                      style={{
                        fontSize: 32,
                        fontWeight: 800,
                        lineHeight: 1.15,
                        marginBottom: 18,
                      }}
                    >
                      {section.title}
                    </h2>

                    <div
                      style={{
                        fontSize: 16,
                        lineHeight: 1.88,
                        color: C.gray2,
                      }}
                    >
                      {section.content}
                    </div>
                  </section>
                </FadeUp>
              ))}

              <FadeUp delay={180}>
                <section
                  style={{
                    background: C.white,
                    border: `1px solid ${C.gray6}`,
                    borderRadius: 24,
                    padding: 32,
                  }}
                >
                  <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                    Frequently asked questions
                  </h2>

                  <div style={{ display: "grid", gap: 10 }}>
                    {faqs.map((faq) => (
                      <details
                        key={faq.question}
                        style={{
                          border: `1px solid ${C.gray6}`,
                          borderRadius: 18,
                          padding: "18px 18px 14px",
                          background: "#faf9f5",
                        }}
                      >
                        <summary
                          style={{
                            listStyle: "none",
                            cursor: "pointer",
                            fontSize: 17,
                            fontWeight: 700,
                            color: C.black,
                          }}
                        >
                          {faq.question}
                        </summary>
                        <p style={{ fontSize: 15, lineHeight: 1.8, color: C.gray2, margin: 0 }}>
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>
              </FadeUp>

              <FadeUp delay={220}>
                <section
                  style={{
                    background: C.white,
                    border: `1px solid ${C.gray6}`,
                    borderRadius: 24,
                    padding: 32,
                  }}
                >
                  <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                    Related pages
                  </h2>

                  <div className="related-grid">
                    {related.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="card-hover"
                        style={{
                          display: "block",
                          background: "#faf9f5",
                          border: `1px solid ${C.gray6}`,
                          borderRadius: 20,
                          padding: 22,
                          transition: "all .2s",
                        }}
                      >
                        <div
                          style={{
                            display: "inline-flex",
                            padding: "6px 10px",
                            borderRadius: 999,
                            background: C.accentPale,
                            fontSize: 11,
                            fontWeight: 800,
                            textTransform: "uppercase",
                            letterSpacing: 1,
                            marginBottom: 14,
                          }}
                        >
                          Next step
                        </div>
                        <div style={{ fontSize: 18, fontWeight: 700, color: C.black, marginBottom: 8 }}>
                          {item.title}
                        </div>
                        <div style={{ fontSize: 14, color: C.gray3, lineHeight: 1.65 }}>
                          {item.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              </FadeUp>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
