"use client";

import Image from "next/image";
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
  tint: "#f8f7f2",
};

type Breadcrumb = { href: string; label: string };
type CTA = { href: string; label: string };
type IntroCard = { label: string; body: ReactNode };
type Fact = { label: string; value: string };
type Related = { href: string; title: string; description: string };
type FAQ = { question: string; answer: string };

type Section = {
  id: string;
  title: string;
  intro: string;
  body: ReactNode;
  image?: {
    src: string;
    alt: string;
    caption?: string;
    align?: "left" | "right";
  };
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
    transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${options?.delay ?? 0}ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${options?.delay ?? 0}ms`,
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
        rootMargin: "-110px 0px -55% 0px",
        threshold: [0.15, 0.35, 0.6],
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
  const top = el.getBoundingClientRect().top + window.scrollY - 92;
  window.scrollTo({ top, behavior: "smooth" });
}

function OffsetImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure style={{ position: "relative" }}>
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
          boxShadow: "0 16px 48px rgba(0,0,0,0.10)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={1000}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
      {caption && (
        <figcaption style={{ fontSize: 12, color: C.gray4, lineHeight: 1.5, marginTop: 10 }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function FinancingSiloShell({
  breadcrumbs,
  eyebrow,
  title,
  description,
  introCards,
  heroPrimary,
  heroSecondary,
  heroImage,
  heroOverlayImage,
  facts,
  sections,
  midCtaAfterIndex,
  midCta,
  faqs,
  related,
  endCta,
}: {
  breadcrumbs: Breadcrumb[];
  eyebrow: string;
  title: string;
  description: string;
  introCards: IntroCard[];
  heroPrimary: CTA;
  heroSecondary: CTA;
  heroImage: { src: string; alt: string };
  heroOverlayImage?: { src: string; alt: string };
  facts: Fact[];
  sections: Section[];
  midCtaAfterIndex: number;
  midCta: { eyebrow: string; title: string; body: string; button: CTA };
  faqs: FAQ[];
  related: Related[];
  endCta: { eyebrow: string; title: string; body: string; button: CTA };
}) {
  const sectionIds = useMemo(() => sections.map((section) => section.id), [sections]);
  const activeId = useActiveSection(sectionIds);

  return (
    <>
      <style>{`
        html{scroll-behavior:smooth}
        body{overflow-x:hidden;background:${C.bg}}
        a{text-decoration:none;color:inherit}
        .rich a{color:${C.black};font-weight:700;text-decoration:underline;text-underline-offset:3px}
        .hero-grid{display:grid;grid-template-columns:minmax(0,1.02fr) minmax(340px,.98fr);gap:44px;align-items:end}
        .intro-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
        .page-grid{display:grid;grid-template-columns:280px minmax(0,1fr);gap:26px;align-items:start}
        .facts-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
        .section-split{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(320px,.9fr);gap:28px;align-items:start}
        .section-split.reverse{grid-template-columns:minmax(320px,.9fr) minmax(0,1.1fr)}
        .related-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
        .pill-yellow:hover{background:${C.accentHover};transform:translateY(-1px);box-shadow:0 8px 24px rgba(232,227,72,.24)}
        .pill-outline:hover{border-color:${C.gray2}!important;background:${C.white}}
        .card-hover:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(0,0,0,.05)}
        .toc-btn:hover{color:${C.black}}
        details[open] summary{margin-bottom:10px}
        summary::-webkit-details-marker{display:none}
        @media(max-width:1150px){
          .hero-grid,.page-grid,.section-split,.section-split.reverse,.facts-grid,.related-grid{grid-template-columns:1fr!important}
          .toc-shell{position:relative!important;top:auto!important}
        }
        @media(max-width:800px){
          .intro-grid{grid-template-columns:1fr!important}
          .page-h1{font-size:44px!important;letter-spacing:-1px!important}
          .page-h2{font-size:30px!important}
        }
      `}</style>

      <main
        style={{
          background: C.bg,
          color: C.black,
          fontFamily: "var(--font-sans), 'DM Sans', sans-serif",
          padding: "88px 24px 120px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <section style={{ marginBottom: 30 }}>
            <div className="hero-grid">
              <div>
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

                <FadeUp delay={60}>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: 1.8,
                      textTransform: "uppercase",
                      color: C.gray2,
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
                      fontFamily: "var(--font-serif), 'Instrument Serif', serif",
                      fontSize: "clamp(48px,6vw,82px)",
                      lineHeight: 1.03,
                      fontWeight: 400,
                      letterSpacing: -1.8,
                      marginBottom: 22,
                      maxWidth: 840,
                    }}
                  >
                    {title}
                  </h1>
                </FadeUp>

                <FadeUp delay={170}>
                  <p
                    style={{
                      fontSize: 18,
                      lineHeight: 1.82,
                      color: C.gray2,
                      maxWidth: 860,
                      marginBottom: 28,
                    }}
                  >
                    {description}
                  </p>
                </FadeUp>

                <FadeUp delay={220}>
                  <div className="intro-grid" style={{ marginBottom: 28 }}>
                    {introCards.map((card) => (
                      <div
                        key={card.label}
                        style={{
                          background: C.white,
                          border: `1px solid ${C.gray6}`,
                          borderRadius: 20,
                          padding: 18,
                        }}
                      >
                        <div
                          style={{
                            fontSize: 11,
                            fontWeight: 800,
                            letterSpacing: 1.1,
                            textTransform: "uppercase",
                            color: C.gray4,
                            marginBottom: 10,
                          }}
                        >
                          {card.label}
                        </div>
                        <div className="rich" style={{ fontSize: 15, lineHeight: 1.72, color: C.gray2 }}>
                          {card.body}
                        </div>
                      </div>
                    ))}
                  </div>
                </FadeUp>

                <FadeUp delay={260}>
                  <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 26 }}>
                    <Link
                      href={heroPrimary.href}
                      className="pill-yellow"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "16px 24px",
                        borderRadius: 12,
                        background: C.accent,
                        color: C.black,
                        fontWeight: 700,
                        transition: "all .2s",
                      }}
                    >
                      {heroPrimary.label}
                    </Link>

                    <Link
                      href={heroSecondary.href}
                      className="pill-outline"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "16px 24px",
                        borderRadius: 12,
                        background: C.white,
                        border: `1px solid ${C.gray6}`,
                        color: C.black,
                        fontWeight: 700,
                        transition: "all .2s",
                      }}
                    >
                      {heroSecondary.label}
                    </Link>
                  </div>
                </FadeUp>

                <FadeUp delay={320}>
                  <div className="facts-grid">
                    {facts.map((fact) => (
                      <div
                        key={fact.label}
                        style={{
                          background: C.white,
                          border: `1px solid ${C.gray6}`,
                          borderRadius: 18,
                          padding: 18,
                        }}
                      >
                        <div
                          style={{
                            fontSize: 11,
                            fontWeight: 800,
                            letterSpacing: 1.1,
                            textTransform: "uppercase",
                            color: C.gray4,
                            marginBottom: 8,
                          }}
                        >
                          {fact.label}
                        </div>
                        <div style={{ fontSize: 18, fontWeight: 700 }}>{fact.value}</div>
                      </div>
                    ))}
                  </div>
                </FadeUp>
              </div>

              <FadeUp delay={180}>
                <div style={{ position: "relative", minHeight: 660 }}>
                  <div
                    style={{
                      position: "absolute",
                      top: 12,
                      left: 0,
                      width: "72%",
                      height: "58%",
                      background: C.accent,
                      borderRadius: 32,
                    }}
                  />
                  <div
                    style={{
                      position: "relative",
                      marginLeft: 28,
                      borderRadius: 28,
                      overflow: "hidden",
                      boxShadow: "0 18px 60px rgba(0,0,0,0.10)",
                    }}
                  >
                    <Image
                      src={heroImage.src}
                      alt={heroImage.alt}
                      width={1400}
                      height={1000}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>

                  {heroOverlayImage && (
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                        width: "46%",
                        borderRadius: 22,
                        overflow: "hidden",
                        boxShadow: "0 14px 40px rgba(0,0,0,0.12)",
                        border: `8px solid ${C.bg}`,
                      }}
                    >
                      <Image
                        src={heroOverlayImage.src}
                        alt={heroOverlayImage.alt}
                        width={900}
                        height={680}
                        style={{ width: "100%", height: "auto", display: "block" }}
                      />
                    </div>
                  )}
                </div>
              </FadeUp>
            </div>
          </section>

          <div className="page-grid">
            <FadeUp delay={80}>
              <aside className="toc-shell" style={{ position: "sticky", top: 94 }}>
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
                      fontWeight: 800,
                      letterSpacing: 1.1,
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
                  <>
                    <section
                      id={section.id}
                      style={{
                        background: C.white,
                        border: `1px solid ${C.gray6}`,
                        borderRadius: 28,
                        padding: "clamp(24px,3vw,36px)",
                      }}
                    >
                      <h2
                        className="page-h2"
                        style={{
                          fontSize: 34,
                          fontWeight: 800,
                          lineHeight: 1.12,
                          letterSpacing: -0.8,
                          marginBottom: 16,
                        }}
                      >
                        {section.title}
                      </h2>

                      <p style={{ fontSize: 17, lineHeight: 1.82, color: C.gray2, marginBottom: 22 }}>
                        {section.intro}
                      </p>

                      {section.image ? (
                        <div className={`section-split ${section.image.align === "left" ? "reverse" : ""}`}>
                          <div className="rich" style={{ fontSize: 16, lineHeight: 1.9, color: C.gray2 }}>
                            {section.body}
                          </div>
                          <OffsetImage
                            src={section.image.src}
                            alt={section.image.alt}
                            caption={section.image.caption}
                          />
                        </div>
                      ) : (
                        <div className="rich" style={{ fontSize: 16, lineHeight: 1.9, color: C.gray2 }}>
                          {section.body}
                        </div>
                      )}
                    </section>

                    {index === midCtaAfterIndex && (
                      <section
                        style={{
                          background: C.white,
                          border: `1px solid ${C.gray6}`,
                          borderRadius: 28,
                          padding: "30px clamp(24px,3vw,36px)",
                        }}
                      >
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "minmax(0,1fr) 240px",
                            gap: 22,
                            alignItems: "center",
                          }}
                        >
                          <div>
                            <div
                              style={{
                                display: "inline-flex",
                                padding: "6px 10px",
                                borderRadius: 999,
                                background: C.accentPale,
                                fontSize: 11,
                                fontWeight: 800,
                                letterSpacing: 1.1,
                                textTransform: "uppercase",
                                marginBottom: 14,
                              }}
                            >
                              {midCta.eyebrow}
                            </div>
                            <h2
                              style={{
                                fontFamily: "var(--font-serif), 'Instrument Serif', serif",
                                fontSize: "clamp(30px,4vw,48px)",
                                lineHeight: 1.08,
                                fontWeight: 400,
                                letterSpacing: -1,
                                marginBottom: 12,
                              }}
                            >
                              {midCta.title}
                            </h2>
                            <p style={{ fontSize: 16, lineHeight: 1.78, color: C.gray2, marginBottom: 18 }}>
                              {midCta.body}
                            </p>
                            <Link
                              href={midCta.button.href}
                              className="pill-yellow"
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "15px 22px",
                                borderRadius: 12,
                                background: C.accent,
                                color: C.black,
                                fontWeight: 700,
                                transition: "all .2s",
                              }}
                            >
                              {midCta.button.label}
                            </Link>
                          </div>

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
                                fontWeight: 800,
                                letterSpacing: 1.1,
                                textTransform: "uppercase",
                                color: C.gray4,
                                marginBottom: 12,
                              }}
                            >
                              What to clarify next
                            </div>
                            <div style={{ display: "grid", gap: 10 }}>
                              {["Buyer strength", "Asset profile", "Use case", "Next step"].map((item) => (
                                <div
                                  key={item}
                                  style={{
                                    background: C.white,
                                    border: `1px solid ${C.gray6}`,
                                    borderRadius: 14,
                                    padding: "12px 14px",
                                    fontSize: 14,
                                    fontWeight: 600,
                                  }}
                                >
                                  {item}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </section>
                    )}
                  </>
                </FadeUp>
              ))}

              <FadeUp delay={160}>
                <section
                  style={{
                    background: C.white,
                    border: `1px solid ${C.gray6}`,
                    borderRadius: 28,
                    padding: "clamp(24px,3vw,36px)",
                  }}
                >
                  <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
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
                          background: C.tint,
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

              <FadeUp delay={200}>
                <section
                  style={{
                    background: C.white,
                    border: `1px solid ${C.gray6}`,
                    borderRadius: 28,
                    padding: "clamp(24px,3vw,36px)",
                  }}
                >
                  <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                    Related pages in this silo
                  </h2>

                  <div className="related-grid">
                    {related.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="card-hover"
                        style={{
                          display: "block",
                          background: C.tint,
                          border: `1px solid ${C.gray6}`,
                          borderRadius: 20,
                          padding: 20,
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
                            letterSpacing: 1,
                            textTransform: "uppercase",
                            marginBottom: 14,
                          }}
                        >
                          Explore
                        </div>
                        <div style={{ fontSize: 19, fontWeight: 700, color: C.black, marginBottom: 8 }}>
                          {item.title}
                        </div>
                        <div style={{ fontSize: 14, lineHeight: 1.65, color: C.gray3 }}>
                          {item.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              </FadeUp>

              <FadeUp delay={240}>
                <section
                  style={{
                    background: C.white,
                    border: `1px solid ${C.gray6}`,
                    borderRadius: 28,
                    padding: "clamp(28px,4vw,44px)",
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
                      letterSpacing: 1.1,
                      textTransform: "uppercase",
                      marginBottom: 16,
                    }}
                  >
                    {endCta.eyebrow}
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--font-serif), 'Instrument Serif', serif",
                      fontSize: "clamp(34px,4.5vw,56px)",
                      lineHeight: 1.06,
                      fontWeight: 400,
                      letterSpacing: -1.2,
                      marginBottom: 14,
                      maxWidth: 760,
                    }}
                  >
                    {endCta.title}
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
                    {endCta.body}
                  </p>

                  <Link
                    href={endCta.button.href}
                    className="pill-yellow"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "16px 24px",
                      borderRadius: 12,
                      background: C.accent,
                      color: C.black,
                      fontWeight: 700,
                      transition: "all .2s",
                    }}
                  >
                    {endCta.button.label}
                  </Link>
                </section>
              </FadeUp>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
