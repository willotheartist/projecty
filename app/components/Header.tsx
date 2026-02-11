// components/Header.tsx
"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

/* --------------------------------- Colors --------------------------------- */

const C = {
  bg: "#ffffff",
  pageBg: "#f4f3ef",
  accent: "#FFF86C",
  accentHover: "#f0ec5a",
  accentPale: "#fffde0",
  accentSoft: "#fff9c4",
  black: "#0a0a0a",
  gray1: "#1a1a1a",
  gray2: "#4b5563",
  gray3: "#6b7280",
  gray4: "#9ca3af",
  gray5: "#d1d5db",
  gray6: "#f3f4f6",
  tint: "#f9f9f4",
} as const;

/* ---------------------------------- Icons --------------------------------- */

type IconNode = React.ReactNode;

const I: Record<string, IconNode> = {
  target: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  cog: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  layers: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m2 12 8.58 3.91a2 2 0 0 0 1.66 0L20.83 12" opacity=".5" />
      <path d="m2 17 8.58 3.91a2 2 0 0 0 1.66 0L20.83 17" opacity=".35" />
    </svg>
  ),
  grid: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
    </svg>
  ),
  file: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 13h4" opacity=".5" />
      <path d="M10 17h4" opacity=".5" />
    </svg>
  ),
  list: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" />
      <path d="M15 3v4a2 2 0 0 0 2 2h4" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  ),
  anchor: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
      <circle cx="12" cy="5" r="3" />
    </svg>
  ),
  building: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" />
      <path d="M12 10h.01" /><path d="M12 14h.01" />
      <path d="M16 10h.01" /><path d="M16 14h.01" />
      <path d="M8 10h.01" /><path d="M8 14h.01" />
    </svg>
  ),
  chart: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  ),
  check: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  ),
  scale: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" /><path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  ),
  filePen: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="m5.5 18.5 2-2" />
      <circle cx="4.5" cy="19.5" r="2.5" />
    </svg>
  ),
  book: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      <path d="M8 7h6" opacity=".5" />
    </svg>
  ),
  plug: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22v-5" /><path d="M9 8V2" /><path d="M15 8V2" />
      <path d="M18 8v5a6 6 0 0 1-12 0V8Z" />
    </svg>
  ),
  help: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  ),
  briefcase: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  ),
  pen: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
    </svg>
  ),
  handshake: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" /><path d="M3 3 2 14l2 0" /><path d="M3 3h18" />
    </svg>
  ),
};

const Arrow = () => <span style={{ opacity: 0.65, fontSize: 14 }}>›</span>;

/* ---------------------------------- Types --------------------------------- */

type MenuItem = { icon: IconNode; label: string; desc: string };
type MenuColumn = { title: string; items: MenuItem[] };
type MenuFeatured = { label: string; title: string; desc: string; cta: string };
type MenuDef = { columns: MenuColumn[]; featured: MenuFeatured };

const menus = {
  Platform: {
    columns: [
      {
        title: "Intelligence Engine",
        items: [
          { icon: I.target, label: "Readiness Scoring", desc: "0–100 financing readiness index" },
          { icon: I.cog, label: "Rule Engine", desc: "Versioned, deterministic logic" },
          { icon: I.layers, label: "Scenario Modelling", desc: "Loan vs leasing comparison" },
        ],
      },
      {
        title: "Broker Tools",
        items: [
          { icon: I.grid, label: "Dashboard", desc: "Embedded financing workflow" },
          { icon: I.file, label: "Report Generator", desc: "Institutional-grade buyer PDFs" },
          { icon: I.list, label: "Case Tracking", desc: "Submission to approval pipeline" },
        ],
      },
    ],
    featured: {
      label: "New in v1.1",
      title: "What-If Scenario Engine",
      desc: "Compare loan vs leasing structures side-by-side with jurisdiction-specific modelling.",
      cta: "Explore",
    },
  },
  Solutions: {
    columns: [
      {
        title: "By Role",
        items: [
          { icon: I.anchor, label: "Yacht Brokers", desc: "Score buyers, generate reports" },
          { icon: I.building, label: "Broker Networks", desc: "White-label intelligence module" },
          { icon: I.chart, label: "Finance Advisors", desc: "Encode structuring expertise" },
        ],
      },
      {
        title: "By Use Case",
        items: [
          { icon: I.check, label: "Pre-Qualification", desc: "Assess financing before lender outreach" },
          { icon: I.scale, label: "Structuring", desc: "Loan, leasing, and ownership paths" },
          { icon: I.filePen, label: "Buyer Reports", desc: "Private-bank grade documentation" },
        ],
      },
    ],
    featured: {
      label: "Coming Soon",
      title: "Lender Matching Engine",
      desc: "Encoded lender criteria with approval probability scoring and rate band estimation.",
      cta: "Learn More",
    },
  },
  Resources: {
    columns: [
      {
        title: "Learn",
        items: [
          { icon: I.book, label: "Documentation", desc: "API reference and guides" },
          { icon: I.plug, label: "Integrations", desc: "Connect to broker systems" },
          { icon: I.help, label: "FAQ", desc: "Common questions answered" },
        ],
      },
      {
        title: "Company",
        items: [
          { icon: I.briefcase, label: "About", desc: "Our thesis and approach" },
          { icon: I.pen, label: "Blog", desc: "Market insights and updates" },
          { icon: I.handshake, label: "Partners", desc: "Join the broker network" },
        ],
      },
    ],
    featured: {
      label: "Industry Report",
      title: "Yacht Financing Landscape 2026",
      desc: "How UHNW buyers are financing yacht acquisitions — lender trends, structuring shifts, and digital adoption.",
      cta: "Download Report",
    },
  },
} satisfies Record<string, MenuDef>;

type MenuKey = keyof typeof menus;

function flattenMenu(m: MenuDef) {
  return m.columns.map((c) => ({ title: c.title, items: c.items }));
}

export default function Header() {
  const menuKeys = useMemo(() => Object.keys(menus) as MenuKey[], []);
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  const clear = useCallback(() => {
    if (timeoutRef.current) { clearTimeout(timeoutRef.current); timeoutRef.current = null; }
  }, []);

  const openMenu = useCallback(
    (key: MenuKey) => {
      clear();
      if (activeMenu !== key) {
        setIsVisible(false);
        const delay = activeMenu ? 120 : 0;
        timeoutRef.current = setTimeout(() => {
          setActiveMenu(key);
          requestAnimationFrame(() => requestAnimationFrame(() => setIsVisible(true)));
        }, delay);
      }
    },
    [activeMenu, clear]
  );

  const closeMenu = useCallback(() => {
    clear();
    setIsVisible(false);
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 260);
  }, [clear]);

  const scheduleClose = useCallback(() => {
    clear();
    timeoutRef.current = setTimeout(() => closeMenu(), 140);
  }, [clear, closeMenu]);

  useEffect(() => () => clear(), [clear]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => { document.documentElement.style.overflow = prev; };
  }, [mobileOpen]);

  const data: MenuDef | null = activeMenu ? menus[activeMenu] : null;

  return (
    <>
      <style>{`
        @keyframes itemIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes featIn { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes titleIn { from { opacity: 0; } to { opacity: 1; } }

        .dd-item { animation: itemIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards; opacity: 0; }
        .dd-feat { animation: featIn 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards; opacity: 0; }
        .dd-title { animation: titleIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards; opacity: 0; }

        .nav-trigger {
          cursor: pointer;
          padding: 10px 14px;
          border-radius: 10px;
          transition: all 0.2s ease;
          font-size: 15px;
          font-weight: 500;
          color: ${C.gray2};
          display: inline-flex;
          align-items: center;
          gap: 7px;
          user-select: none;
          font-family: var(--font-sans), system-ui, sans-serif;
        }
        .nav-trigger:hover, .nav-trigger.active { background: ${C.gray6}; color: ${C.black}; }
        .nav-trigger .chev { transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1); font-size: 12px; margin-top: 1px; opacity: 0.8; }
        .nav-trigger.active .chev { transform: rotate(180deg); }

        .nav-plain {
          font-size: 15px;
          font-weight: 500;
          color: ${C.gray2};
          cursor: pointer;
          transition: color 0.2s;
          padding: 10px 8px;
          font-family: var(--font-sans), system-ui, sans-serif;
        }
        .nav-plain:hover { color: ${C.black}; }

        .pill-cta-yellow {
          padding: 12px 24px;
          background: ${C.accent};
          color: ${C.black};
          font-size: 15px;
          font-weight: 600;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
          font-family: var(--font-sans), system-ui, sans-serif;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .pill-cta-yellow:hover { background: ${C.accentHover}; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(232,227,72,0.3); }

        .ghost-cta {
          padding: 11px 16px;
          border-radius: 10px;
          border: 1px solid rgba(0,0,0,0.10);
          background: rgba(255,255,255,0.8);
          color: ${C.black};
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          font-family: var(--font-sans), system-ui, sans-serif;
        }

        .mi-row {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 18px 18px;
          border-radius: 16px;
          cursor: pointer;
          transition: background 0.16s ease, transform 0.16s ease;
        }
        .mi-row:hover { background: ${C.gray6}; transform: translateY(-1px); }
        .mi-icon {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: ${C.accentPale};
          color: ${C.black};
          transition: transform 0.2s ease;
        }
        .mi-row:hover .mi-icon { transform: scale(1.04); }

        .mi-label { font-size: 18px; font-weight: 650; color: ${C.black}; margin-bottom: 4px; letter-spacing: -0.2px; }
        .mi-desc  { font-size: 15px; color: ${C.gray3}; line-height: 1.55; }

        .feat-cta {
          display: inline-block;
          padding: 12px 22px;
          background: ${C.black};
          color: #fff;
          font-size: 15px;
          font-weight: 650;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: var(--font-sans), system-ui, sans-serif;
          white-space: nowrap;
        }
        .feat-cta:hover { background: #222; transform: translateY(-1px); }

        .desktopOnly { display: flex; }
        .mobileOnly { display: none; }

        @media (max-width: 980px) {
          .desktopOnly { display: none !important; }
          .mobileOnly { display: flex !important; }
        }

        .drawer-backdrop {
          position: fixed; inset: 0; z-index: 200;
          background: rgba(0,0,0,0.35);
          backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
        }
        .drawer {
          position: fixed; top: 0; right: 0; height: 100%;
          width: min(520px, 92vw); z-index: 210;
          background: ${C.bg};
          box-shadow: -30px 0 80px rgba(0,0,0,0.18);
          display: flex; flex-direction: column;
        }
        .drawer-head {
          padding: 18px 18px 14px;
          border-bottom: 1px solid ${C.gray6};
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
        }
        .drawer-actions { display: flex; align-items: center; gap: 10px; }
        .close-dot {
          width: 46px; height: 46px; border-radius: 999px; border: none;
          background: rgba(0,0,0,0.06); cursor: pointer;
          display: inline-flex; align-items: center; justify-content: center; font-size: 18px;
        }
        .drawer-body { padding: 8px 0 18px; overflow: auto; }

        .m-section { border-bottom: 1px solid rgba(0,0,0,0.08); }
        .m-section-btn {
          width: 100%; background: transparent; border: none;
          padding: 18px 18px; display: flex; align-items: center;
          justify-content: space-between; cursor: pointer;
          font-family: var(--font-sans), system-ui, sans-serif;
          font-size: 30px; font-weight: 600; color: ${C.black}; letter-spacing: -0.6px;
        }
        .m-section-btn .caret { font-size: 18px; opacity: 0.7; transition: transform 0.2s ease; }
        .m-items { padding: 6px 0 10px; }
        .m-item {
          display: flex; align-items: center; justify-content: space-between;
          gap: 12px; padding: 16px 18px; cursor: pointer;
          font-family: var(--font-sans), system-ui, sans-serif;
        }
        .m-item:hover { background: ${C.gray6}; }
        .m-item-left { display: flex; align-items: center; gap: 12px; min-width: 0; }
        .m-item-ic {
          width: 40px; height: 40px; border-radius: 14px;
          background: ${C.accentPale}; color: ${C.black};
          display: flex; align-items: center; justify-content: center; flex: 0 0 auto;
        }
        .m-item-title { font-size: 18px; font-weight: 650; color: ${C.black}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .m-item-sub { font-size: 14px; color: ${C.gray3}; margin-top: 2px; line-height: 1.35; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .m-item-text { min-width: 0; }
      `}</style>

      {/* Desktop dropdown backdrop */}
      <div
        onClick={closeMenu}
        style={{
          position: "fixed", inset: 0, zIndex: 90,
          background: "rgba(0, 0, 0, 0.25)",
          backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
          opacity: activeMenu && isVisible ? 1 : 0,
          transition: "opacity 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
          pointerEvents: activeMenu && isVisible ? "auto" : "none",
        }}
      />

      {/* MOBILE drawer */}
      {mobileOpen && (
        <>
          <div className="drawer-backdrop" onClick={() => { setMobileOpen(false); setMobileSection(null); }} />
          <div className="drawer" role="dialog" aria-modal="true" aria-label="Mobile navigation">
            <div className="drawer-head">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/waaza.png" alt="Waaza" style={{ height: 32 }} />
              <div className="drawer-actions">
                <button className="ghost-cta" type="button">Log in</button>
                <button className="pill-cta-yellow" type="button">Simulate my financing →</button>
                <button className="close-dot" type="button" aria-label="Close menu" onClick={() => { setMobileOpen(false); setMobileSection(null); }}>✕</button>
              </div>
            </div>
            <div className="drawer-body">
              {menuKeys.map((k) => {
                const open = mobileSection === k;
                const groups = flattenMenu(menus[k]);
                const flatItems = groups.flatMap((g) => g.items);
                return (
                  <div key={k} className="m-section">
                    <button type="button" className="m-section-btn" onClick={() => setMobileSection((prev) => (prev === k ? null : k))} aria-expanded={open}>
                      <span>{k}</span>
                      <span className="caret" style={{ transform: open ? "rotate(180deg)" : "none" }}>▾</span>
                    </button>
                    {open && (
                      <div className="m-items">
                        {flatItems.map((it, idx) => (
                          <div key={`${k}-${idx}`} className="m-item">
                            <div className="m-item-left">
                              <div className="m-item-ic">{it.icon}</div>
                              <div className="m-item-text">
                                <div className="m-item-title">{it.label}</div>
                                <div className="m-item-sub">{it.desc}</div>
                              </div>
                            </div>
                            <Arrow />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="m-section">
                <button type="button" className="m-section-btn" aria-expanded={false}>
                  <span>Case Studies</span>
                  <span className="caret" style={{ transform: "rotate(-90deg)" }}>▾</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Header / Nav */}
      <nav
        onMouseLeave={scheduleClose}
        style={{
          position: "sticky", top: 0, left: 0, right: 0, zIndex: 100,
          background: C.bg,
          transition: "box-shadow 0.35s ease",
          boxShadow: activeMenu ? "0 30px 80px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div style={{
          height: 72, padding: "0 clamp(18px, 4vw, 80px)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          maxWidth: 1400, margin: "0 auto",
          borderBottom: `1px solid ${C.gray6}`,
          fontFamily: "var(--font-sans), system-ui, sans-serif", gap: 16,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/waaza.png" alt="Waaza" style={{ height: 34, cursor: "pointer" }} />

          {/* Desktop center nav */}
          <div className="desktopOnly" style={{ alignItems: "center", gap: 6 }}>
            {menuKeys.map((key: MenuKey) => (
              <div key={key} className={`nav-trigger ${activeMenu === key ? "active" : ""}`} onMouseEnter={() => openMenu(key)}>
                {key}
                <span className="chev">▾</span>
              </div>
            ))}
            <span className="nav-plain" style={{ marginLeft: 8 }}>Case Studies</span>
          </div>

          {/* Desktop right */}
          <div className="desktopOnly" style={{ alignItems: "center", gap: 14 }}>
            <span className="nav-plain">Sign In</span>
            <button className="pill-cta-yellow" type="button">Simulate my financing →</button>
          </div>

          {/* Mobile right */}
          <div className="mobileOnly" style={{ alignItems: "center", gap: 10 }}>
            <button className="pill-cta-yellow" type="button" onClick={() => setMobileOpen(true)}>Menu</button>
          </div>
        </div>

        {/* Desktop mega dropdown */}
        <div
          onMouseEnter={() => clear()}
          onMouseLeave={scheduleClose}
          className="desktopOnly"
          style={{
            height: activeMenu ? "calc(80vh - 72px)" : 0,
            opacity: activeMenu ? 1 : 0,
            overflow: "hidden",
            transition: "height 0.32s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease",
            borderTop: activeMenu ? `1px solid ${C.gray6}` : "1px solid transparent",
            background: C.bg,
          }}
        >
          {data && (
            <div style={{
              maxWidth: 1400, margin: "0 auto",
              padding: "48px clamp(24px, 5vw, 80px) 60px",
              display: "grid", gridTemplateColumns: "1fr 1fr 380px", gap: 56,
              height: "100%",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(-6px)",
              transition: "opacity 0.22s cubic-bezier(0.22, 1, 0.36, 1), transform 0.22s cubic-bezier(0.22, 1, 0.36, 1)",
              fontFamily: "var(--font-sans), system-ui, sans-serif",
            }}>
              {data.columns.map((col: MenuColumn, ci: number) => (
                <div key={`${String(activeMenu)}-${ci}`}>
                  <div className="dd-title" style={{
                    fontSize: 12, fontWeight: 700, letterSpacing: 2,
                    textTransform: "uppercase", color: C.gray4,
                    marginBottom: 22, paddingLeft: 6, animationDelay: `${ci * 70}ms`,
                  }}>{col.title}</div>
                  {col.items.map((item: MenuItem, ii: number) => (
                    <div key={`${String(activeMenu)}-${ci}-${ii}`} className="mi-row dd-item" style={{ animationDelay: `${80 + ci * 60 + ii * 70}ms` }}>
                      <div className="mi-icon">{item.icon}</div>
                      <div style={{ minWidth: 0 }}>
                        <div className="mi-label">{item.label}</div>
                        <div className="mi-desc">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}

              <div key={`${String(activeMenu)}-f`} className="dd-feat" style={{
                background: C.tint, borderRadius: 24, padding: 34,
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                animationDelay: "160ms", minHeight: 0,
              }}>
                <div>
                  <span style={{
                    display: "inline-block", padding: "6px 12px",
                    background: C.accentSoft, color: C.black,
                    fontSize: 11, fontWeight: 800, borderRadius: 10,
                    letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 18,
                    fontFamily: "var(--font-sans), system-ui, sans-serif",
                  }}>{data.featured.label}</span>
                  <h3 style={{
                    fontFamily: "var(--font-serif), serif", fontSize: 28, fontWeight: 400,
                    lineHeight: 1.15, marginBottom: 12, letterSpacing: -0.3, color: C.black,
                  }}>{data.featured.title}</h3>
                  <p style={{ fontSize: 15, color: C.gray3, lineHeight: 1.65, marginBottom: 26 }}>{data.featured.desc}</p>
                </div>
                <div><span className="feat-cta">{data.featured.cta}</span></div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}