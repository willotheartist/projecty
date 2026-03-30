// app/dashboard/layout.tsx
"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const C = {
  bg: "#f4f3ef",
  white: "#ffffff",
  black: "#0a0a0a",
  gray3: "#6b7280",
  gray6: "#eae9e4",
};

const NAV_LINKS = [
  { href: "/wizard", label: "New Assessment" },
  { href: "/simulator", label: "Simulator" },
  { href: "/dashboard/settings", label: "API Keys" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  return (
    <div style={{ minHeight: "100vh", background: C.bg }}>
      {/* Dashboard nav */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: C.white,
          borderBottom: `1px solid ${C.gray6}`,
          padding: "0 clamp(24px,5vw,80px)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 56,
          }}
        >
          <Link
            href="/dashboard"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/waaza.png" alt="Waaza" style={{ height: 22 }} />
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                color: C.gray3,
                borderLeft: `1px solid ${C.gray6}`,
                paddingLeft: 10,
              }}
            >
              Dashboard
            </span>
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 13,
                  fontWeight: pathname === link.href ? 600 : 500,
                  color: pathname === link.href ? C.black : C.gray3,
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={handleLogout}
              style={{
                background: "none",
                border: `1px solid ${C.gray6}`,
                borderRadius: 8,
                padding: "6px 14px",
                fontSize: 13,
                fontWeight: 500,
                color: C.gray3,
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              Sign out
            </button>
          </div>
        </div>
      </nav>

      {children}
    </div>
  );
}
