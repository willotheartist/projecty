// app/components/LayoutShell.tsx
"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import WaazaAssistant from "./WaazaAssistant";

const HIDDEN_PREFIXES = ["/dashboard", "/login", "/widget"];

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hide = HIDDEN_PREFIXES.some((p) => pathname.startsWith(p));

  return (
    <>
      {!hide && <Header />}
      {children}
      {!hide && <WaazaAssistant startHref="/wizard" />}
    </>
  );
}