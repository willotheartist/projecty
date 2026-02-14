// app/api/v1/assessments/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { validateApiKey } from "@/lib/apiAuth";

export const dynamic = "force-dynamic";

function json(data: unknown, status = 200) {
  return NextResponse.json(data, { status });
}

/**
 * GET /api/v1/assessments/:id
 *
 * Retrieve a specific assessment with full details including score breakdown.
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return json({ error: "Missing or invalid Authorization header" }, 401);
  }

  const authResult = await validateApiKey(authHeader.slice(7));

  if (!authResult || authResult.error === "rate_limit_exceeded") {
    return json(
      { error: authResult?.error === "rate_limit_exceeded" ? "Rate limit exceeded" : "Invalid API key" },
      authResult?.error === "rate_limit_exceeded" ? 429 : 401
    );
  }

  if (!authResult.user) {
    return json({ error: "Invalid API key" }, 401);
  }

  const { id } = await params;

  const assessment = await prisma.assessment.findFirst({
    where: {
      id,
      createdById: authResult.user.id, // scoped to API key owner
    },
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
          hits: true,
          outputSnapshot: true,
          createdAt: true,
        },
      },
    },
  });

  if (!assessment) {
    return json({ error: "Assessment not found" }, 404);
  }

  const latestRun = assessment.runs[0] ?? null;

  return json({
    id: assessment.id,
    readinessScore: assessment.readinessScore,
    tier: assessment.tier,
    ltvEstimate: assessment.ltvEstimateMin && assessment.ltvEstimateMax
      ? { min: assessment.ltvEstimateMin, max: assessment.ltvEstimateMax }
      : null,
    riskFlags: assessment.riskFlags,
    recommendedPath: assessment.recommendedPath,
    ruleSetVersion: assessment.ruleSetVersion,
    buyer: {
      name: assessment.client.name,
      residency: assessment.client.residency,
      liquidityAvailable: assessment.client.liquidityAvailable,
      netWorthBand: assessment.client.netWorthBand,
      incomeType: assessment.client.incomeType,
      ownershipIntent: assessment.client.ownershipIntent,
    },
    vessel: {
      purchasePrice: assessment.vessel.purchasePrice,
      yearBuilt: assessment.vessel.yearBuilt,
      usageType: assessment.vessel.usageType,
      intendedFlag: assessment.vessel.intendedFlag,
    },
    scoreBreakdown: latestRun?.hits ?? [],
    createdAt: assessment.createdAt.toISOString(),
  });
}