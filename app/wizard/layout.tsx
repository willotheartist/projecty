import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Readiness Intake",
  description: "Structured intake flow for financing readiness.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function WizardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
