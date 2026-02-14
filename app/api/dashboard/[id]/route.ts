// app/api/dashboard/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  const assessment = await prisma.assessment.findUnique({
    where: { id },
    include: {
      client: true,
      vessel: true,
      runs: {
        orderBy: { createdAt: "desc" },
        take: 1,
        select: {
          id: true,
          ruleSetVersion: true,
          engineVersion: true,
          inputSnapshot: true,
          hits: true,
          outputSnapshot: true,
          createdAt: true,
        },
      },
    },
  });

  if (!assessment) {
    return NextResponse.json({ error: "Assessment not found" }, { status: 404 });
  }

  if (assessment.createdById !== user.id && user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  return NextResponse.json({ assessment });
}