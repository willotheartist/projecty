// app/api/dashboard/route.ts
import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const assessments = await prisma.assessment.findMany({
    where: { createdById: user.id },
    include: {
      client: { select: { name: true, residency: true } },
      vessel: { select: { purchasePrice: true, yearBuilt: true, usageType: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  // Compute stats
  const total = assessments.length;
  const scored = assessments.filter((a) => a.readinessScore !== null);
  const avgScore =
    scored.length > 0
      ? Math.round(scored.reduce((s, a) => s + (a.readinessScore ?? 0), 0) / scored.length)
      : null;

  const tierCounts: Record<string, number> = {};
  for (const a of assessments) {
    const tier = a.tier ?? "Unscored";
    tierCounts[tier] = (tierCounts[tier] || 0) + 1;
  }

  return NextResponse.json({
    user,
    stats: { total, avgScore, tierCounts },
    assessments: assessments.map((a) => ({
      id: a.id,
      clientName: a.client.name,
      clientResidency: a.client.residency,
      vesselPrice: a.vessel.purchasePrice,
      vesselYear: a.vessel.yearBuilt,
      vesselUsage: a.vessel.usageType,
      readinessScore: a.readinessScore,
      tier: a.tier,
      ltvMin: a.ltvEstimateMin,
      ltvMax: a.ltvEstimateMax,
      riskFlags: a.riskFlags,
      recommendedPath: a.recommendedPath,
      createdAt: a.createdAt,
    })),
  });
}