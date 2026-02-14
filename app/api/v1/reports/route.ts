// app/api/v1/reports/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { validateApiKey } from "@/lib/apiAuth";
import { buildReport } from "@/lib/report/buildReport";

export const dynamic = "force-dynamic";

function json(data: unknown, status = 200) {
  return NextResponse.json(data, { status });
}

/**
 * POST /api/v1/reports
 *
 * Generate a structured report for an assessment.
 *
 * Headers:
 *   Authorization: Bearer wza_...
 *
 * Body:
 *   { "assessmentId": "..." }
 *
 * Returns the report as structured JSON.
 */
export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return json({ error: "Missing or invalid Authorization header. Use: Bearer wza_..." }, 401);
  }

  const apiKey = authHeader.slice(7);
  const authResult = await validateApiKey(apiKey);

  if (!authResult || authResult.error === "rate_limit_exceeded") {
    return json(
      { error: authResult?.error === "rate_limit_exceeded" ? "Rate limit exceeded. Try again later." : "Invalid API key" },
      authResult?.error === "rate_limit_exceeded" ? 429 : 401
    );
  }

  if (!authResult.user) {
    return json({ error: "Invalid API key" }, 401);
  }

  try {
    const { assessmentId } = await req.json();

    if (!assessmentId) {
      return json({ error: "assessmentId is required" }, 400);
    }

    const assessment = await prisma.assessment.findFirst({
      where: { id: assessmentId, createdById: authResult.user.id },
      include: {
        client: true,
        vessel: true,
        runs: {
          orderBy: { createdAt: "desc" },
          take: 1,
        },
      },
    });

    if (!assessment) {
      return json({ error: "Assessment not found" }, 404);
    }

    const latestRun = assessment.runs[0];

    const report = buildReport({
      assessmentId: assessment.id,
      ruleSetVersion: assessment.ruleSetVersion,
      readinessScore: assessment.readinessScore ?? 0,
      tier: assessment.tier ?? "UNKNOWN",
      ltvBand: {
        min: assessment.ltvEstimateMin ?? 0,
        max: assessment.ltvEstimateMax ?? 0,
      },
      riskFlags: (assessment.riskFlags as Array<{ code: string; severity: string }>) ?? [],
      recommendedPath: assessment.recommendedPath ?? "",
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
      hits: ((latestRun?.hits as Array<Record<string, unknown>>) ?? []).map((h) => ({
        ruleId: String(h.ruleId ?? ""),
        matched: Boolean(h.matched),
        delta: Number(h.weightedDelta ?? h.delta ?? 0),
        flagCode: h.flagCode as string | undefined,
        severity: h.severity as string | undefined,
      })),
    });

    return json({
      assessmentId: assessment.id,
      report,
      generatedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error("API v1 report error:", err);
    return json({ error: "Internal server error" }, 500);
  }
}