// app/widget/layout.tsx
export default function WidgetLayout({ children }: { children: React.ReactNode }) {
  // Minimal layout — no header, no footer, no shell
  return <>{children}</>;
}