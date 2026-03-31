// app/components/LayoutShell.tsx
"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import WaazaAssistant from "./WaazaAssistant";

const HIDDEN_PREFIXES = ["/dashboard", "/login", "/widget", "/tip", "/homev2"];

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hide = HIDDEN_PREFIXES.some((p) => pathname.startsWith(p));

  return (
    <>
      {!hide && <Header />}
      {children}
      {!hide && <Footer />}
      {!hide && <WaazaAssistant startHref="/wizard" />}
    </>
  );
}