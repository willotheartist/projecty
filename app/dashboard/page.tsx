// app/dashboard/page.tsx
import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth";
import DashboardClient from "./dashboard-client";

export const metadata = { title: "Dashboard" };

export default async function DashboardPage() {
  const user = await getSessionUser();
  if (!user) redirect("/login");

  return <DashboardClient userId={user.id} userName={user.name} userEmail={user.email} />;
}