"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Ship,
  Link2,
  QrCode,
  Heart,
  SplitSquareVertical,
  Calculator,
  Gauge,
  SlidersHorizontal,
  BookOpen,
  Shield,
  Landmark,
  Scale,
  Pencil,
  HelpCircle,
  X,
  Menu,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

// ─── NAV DATA ───
type DropdownItem = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href: string;
};

type NavItem =
  | { label: string; href: string; dropdown?: never }
  | { label: string; dropdown: DropdownItem[][]; href?: never };

const S = 18;
const W = 1.6;

const NAV: NavItem[] = [
  {
    label: "Tipping",
    dropdown: [
      [
        { icon: <Ship size={S} strokeWidth={W} />, title: "Crew tipping", desc: "Cashless tips for charter yachts", href: "/dashboard" },
        { icon: <Link2 size={S} strokeWidth={W} />, title: "Tip links", desc: "Unique payment link per charter", href: "/#how-it-works" },
        { icon: <QrCode size={S} strokeWidth={W} />, title: "QR codes", desc: "Physical cards for on-board tipping", href: "/#how-it-works" },
      ],
      [
        { icon: <Heart size={S} strokeWidth={W} />, title: "Cover the fee", desc: "Guests choose, crew get 100%", href: "/#how-it-works" },
        { icon: <SplitSquareVertical size={S} strokeWidth={W} />, title: "Auto-split", desc: "Equal or custom crew splits", href: "/#how-it-works" },
      ],
    ],
  },
  {
    label: "Tools",
    dropdown: [
      [
        { icon: <Calculator size={S} strokeWidth={W} />, title: "Loan calculator", desc: "Monthly payments, deposit, total interest", href: "/yacht-finance-calculator" },
        { icon: <Gauge size={S} strokeWidth={W} />, title: "Financing wizard", desc: "Score your financing readiness", href: "/wizard" },
        { icon: <SlidersHorizontal size={S} strokeWidth={W} />, title: "Simulator", desc: "Model different deal structures", href: "/simulator" },
      ],
    ],
  },
  {
    label: "Resources",
    dropdown: [
      [
        { icon: <BookOpen size={S} strokeWidth={W} />, title: "Financing guides", desc: "How yacht financing works", href: "/financing" },
        { icon: <Shield size={S} strokeWidth={W} />, title: "Insurance", desc: "Yacht insurance explained", href: "/insurance" },
        { icon: <Landmark size={S} strokeWidth={W} />, title: "Structuring", desc: "SPV, VAT, ownership structures", href: "/structuring" },
      ],
      [
        { icon: <Scale size={S} strokeWidth={W} />, title: "Compare", desc: "Loan vs lease, new vs used", href: "/compare" },
        { icon: <Pencil size={S} strokeWidth={W} />, title: "Blog", desc: "Industry insights and updates", href: "/blog" },
        { icon: <HelpCircle size={S} strokeWidth={W} />, title: "FAQ", desc: "Common questions answered", href: "/faq" },
      ],
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export default function HeaderV2() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExp, setMobileExp] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isDarkHero = pathname === "/" || pathname === "/homev2";
  const clear = isDarkHero && !scrolled;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMobileOpen(false); setMobileExp(null); setOpenDrop(null); }, [pathname]);
  useEffect(() => { document.body.style.overflow = mobileOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [mobileOpen]);

  const enter = (l: string) => { if (timer.current) clearTimeout(timer.current); setOpenDrop(l); };
  const leave = () => { timer.current = setTimeout(() => setOpenDrop(null), 100); };

  const txt = clear ? "rgba(255,255,255,0.75)" : "#4b5563";
  const txtA = clear ? "#fff" : "#0a0a0a";
  const pill = clear ? "rgba(255,248,108,0.15)" : "#FFF86C";
  const pillC = clear ? "#fff" : "#0a0a0a";

  return (
    <>
      <header style={{ position: "fixed", top: scrolled ? 10 : 8, left: scrolled ? 14 : 0, right: scrolled ? 14 : 0, zIndex: 200, transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)", background: scrolled ? "rgba(255,255,255,0.45)" : "transparent", backdropFilter: scrolled ? "blur(24px) saturate(1.8)" : "none", WebkitBackdropFilter: scrolled ? "blur(24px) saturate(1.8)" : "none", boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.5)" : "none", borderRadius: scrolled ? 16 : 0, border: scrolled ? "1px solid rgba(255,255,255,0.45)" : "1px solid transparent" }}>
        <div style={{ width: "100%", maxWidth: 1600, margin: "0 auto", padding: "0 clamp(24px, 3vw, 40px)", height: 72, display: "flex", alignItems: "center" }}>

          <Link href="/" style={{ flexShrink: 0, marginRight: 48 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/waaza.png" alt="Waaza" style={{ height: 24, filter: clear ? "brightness(0) invert(1)" : "none", transition: "filter 0.3s" }} />
          </Link>

          <nav className="hv2-d" style={{ display: "flex", alignItems: "center", gap: 2, flex: 1 }}>
            {NAV.map((item) => {
              const drop = !!item.dropdown;
              const open = openDrop === item.label;
              const active = !drop && pathname === item.href;
              return (
                <div key={item.label} onMouseEnter={() => drop && enter(item.label)} onMouseLeave={leave} style={{ position: "relative" }}>
                  {drop ? (
                    <button style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "7px 14px", fontSize: 13, fontWeight: 500, letterSpacing: -0.15, color: open ? pillC : txt, background: open ? pill : "transparent", border: "none", borderRadius: 8, cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s" }}>
                      {item.label}
                      <ChevronDown size={13} strokeWidth={2} style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s", opacity: 0.6 }} />
                    </button>
                  ) : (
                    <Link href={item.href!} style={{ display: "inline-flex", alignItems: "center", padding: "7px 14px", fontSize: 13, fontWeight: 500, letterSpacing: -0.15, color: active ? pillC : txt, background: active ? pill : "transparent", textDecoration: "none", borderRadius: 8, transition: "all 0.15s" }}>
                      {item.label}
                    </Link>
                  )}
                  {drop && open && (
                    <div onMouseEnter={() => enter(item.label)} onMouseLeave={leave} style={{ position: "absolute", top: "calc(100% + 10px)", left: -8, background: "#fff", borderRadius: 16, padding: 16, display: "flex", gap: 8, boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.05)", animation: "hv2drop 0.18s ease-out", minWidth: item.dropdown!.length > 1 ? 520 : 300 }}>
                      {item.dropdown!.map((col, ci) => (
                        <div key={ci} style={{ flex: 1, display: "grid", gap: 2 }}>
                          {col.map((d) => (
                            <Link key={d.title} href={d.href} onClick={() => setOpenDrop(null)} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "10px 12px", borderRadius: 10, textDecoration: "none", transition: "background 0.1s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "#f4f3ef"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}>
                              <div style={{ width: 32, height: 32, borderRadius: 8, background: "#fffde0", display: "flex", alignItems: "center", justifyContent: "center", color: "#c4b800", flexShrink: 0, marginTop: 1 }}>{d.icon}</div>
                              <div>
                                <div style={{ fontSize: 13, fontWeight: 600, color: "#0a0a0a", marginBottom: 1, letterSpacing: -0.1 }}>{d.title}</div>
                                <div style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.4 }}>{d.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hv2-d" style={{ display: "flex", alignItems: "center", gap: 6, marginLeft: "auto" }}>
            <Link href="/login" style={{ fontSize: 14, fontWeight: 500, color: txt, textDecoration: "none", padding: "7px 14px", transition: "color 0.15s" }}>Log in</Link>
            <span style={{ width: 1, height: 18, background: clear ? "rgba(255,255,255,0.15)" : "#d1d5db", transition: "background 0.3s" }} />
            <Link href="/login" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 20px", background: "#FFF86C", color: "#0a0a0a", fontSize: 14, fontWeight: 600, letterSpacing: -0.1, borderRadius: 9, textDecoration: "none", transition: "transform 0.12s, box-shadow 0.12s" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(255,248,108,0.4)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
              Get started <ArrowRight size={14} strokeWidth={2.2} />
            </Link>
          </div>

          <button className="hv2-m" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu" style={{ display: "none", marginLeft: "auto", background: "none", border: "none", padding: 4, cursor: "pointer", color: clear && !mobileOpen ? "#fff" : "#0a0a0a", transition: "color 0.3s" }}>
            {mobileOpen ? <X size={26} strokeWidth={1.8} /> : <Menu size={26} strokeWidth={1.8} />}
          </button>
        </div>
      </header>

      {/* ─── MOBILE FULL SCREEN ─── */}
      <div style={{ position: "fixed", inset: 0, zIndex: 199, background: "#fff", transform: mobileOpen ? "translateY(0)" : "translateY(-100%)", opacity: mobileOpen ? 1 : 0, transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.3s", overflowY: "auto", WebkitOverflowScrolling: "touch", paddingTop: 72, display: "flex", flexDirection: "column" }}>
        <nav style={{ padding: "8px 0", flex: 1 }}>
          {NAV.map((item) => {
            const drop = !!item.dropdown;
            const exp = mobileExp === item.label;
            return (
              <div key={item.label}>
                {drop ? (
                  <>
                    <button onClick={() => setMobileExp(exp ? null : item.label)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px clamp(24px, 6vw, 48px)", fontSize: 18, fontWeight: 600, letterSpacing: -0.2, color: "#0a0a0a", background: exp ? "#fffde0" : "transparent", border: "none", cursor: "pointer", fontFamily: "inherit", transition: "background 0.15s" }}>
                      {item.label}
                      <ChevronDown size={18} strokeWidth={1.8} style={{ color: "#9ca3af", transform: exp ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                    </button>
                    <div style={{ maxHeight: exp ? 600 : 0, overflow: "hidden", transition: "max-height 0.3s cubic-bezier(0.16,1,0.3,1)", background: "#fafaf8" }}>
                      {item.dropdown!.flat().map((d) => (
                        <Link key={d.title} href={d.href} onClick={() => setMobileOpen(false)} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px clamp(24px, 6vw, 48px) 14px clamp(40px, 8vw, 64px)", textDecoration: "none" }}>
                          <div style={{ width: 34, height: 34, borderRadius: 8, background: "#fffde0", display: "flex", alignItems: "center", justifyContent: "center", color: "#c4b800", flexShrink: 0 }}>{d.icon}</div>
                          <div>
                            <div style={{ fontSize: 15, fontWeight: 600, color: "#0a0a0a", letterSpacing: -0.1 }}>{d.title}</div>
                            <div style={{ fontSize: 12, color: "#9ca3af" }}>{d.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={item.href!} onClick={() => setMobileOpen(false)} style={{ display: "block", padding: "16px clamp(24px, 6vw, 48px)", fontSize: 18, fontWeight: 600, letterSpacing: -0.2, color: "#0a0a0a", textDecoration: "none" }}>
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
        <div style={{ padding: "24px clamp(24px, 6vw, 48px) 40px", borderTop: "1px solid #eae9e4" }}>
          <Link href="/login" onClick={() => setMobileOpen(false)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "16px 24px", background: "#FFF86C", color: "#0a0a0a", fontSize: 16, fontWeight: 600, borderRadius: 12, textDecoration: "none", marginBottom: 12 }}>
            Get started <ArrowRight size={16} strokeWidth={2.2} />
          </Link>
          <Link href="/login" onClick={() => setMobileOpen(false)} style={{ display: "block", textAlign: "center", padding: "14px 24px", color: "#6b7280", fontSize: 15, fontWeight: 500, textDecoration: "none" }}>
            Log in
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes hv2drop { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 880px) { .hv2-d { display: none !important; } .hv2-m { display: flex !important; } }
        @media (min-width: 881px) { .hv2-m { display: none !important; } }
      `}</style>
    </>
  );
}