import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simulator",
  description: "Interactive financing simulator.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function SimulatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
