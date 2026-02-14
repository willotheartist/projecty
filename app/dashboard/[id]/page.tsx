// app/dashboard/[id]/page.tsx
import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth";
import AssessmentDetail from "./assessment-detail";

export const metadata = { title: "Assessment Detail" };

export default async function AssessmentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const user = await getSessionUser();
  if (!user) redirect("/login");

  const { id } = await params;
  return <AssessmentDetail assessmentId={id} />;
}