// app/api/v1/assessments/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { validateApiKey } from "@/lib/apiAuth";
import { runAssessment } from "@/lib/engine/runAssessment";

export const dynamic = "force-dynamic";

function json(data: unknown, status = 200) {
  return NextResponse.json(data, { status });
}

function mapIncomeType(v: string) {
  const x = v.toLowerCase();
  if (x === "salary") return "SALARY" as const;
  if (x === "business") return "BUSINESS" as const;
  if (x === "passive") return "PASSIVE" as const;
  return "MIXED" as const;
}

function mapUsageType(v: string) {
  const x = v.toLowerCase();
  if (x === "private") return "PRIVATE" as const;
  return "CHARTER" as const;
}

function mapOwnershipIntent(v: string) {
  const x = v.toLowerCase();
  if (x === "personal") return "PERSONAL" as const;
  if (x === "spv") return "SPV" as const;
  return "UNSURE" as const;
}

/**
 * POST /api/v1/assessments
 *
 * Create a new financing readiness assessment.
 *
 * Headers:
 *   Authorization: Bearer wza_...
 *
 * Body:
 * {
 *   "buyer": {
 *     "name": "John Smith",
 *     "residency": "United Kingdom",
 *     "liquidityAvailable": 1500000,
 *     "netWorthBand": "3_10m",
 *     "incomeType": "business",
 *     "ownershipIntent": "spv"
 *   },
 *   "vessel": {
 *     "purchasePrice": 4500000,
 *     "yearBuilt": 2019,
 *     "usageType": "private",
 *     "intendedFlag": "Malta"
 *   }
 * }
 *
 * Response:
 * {
 *   "assessmentId": "...",
 *   "readinessScore": 74,
 *   "tier": "CONDITIONAL",
 *   "ltvEstimate": { "min": 45, "max": 55 },
 *   "riskFlags": [...],
 *   "recommendedPath": "...",
 *   "createdAt": "..."
 * }
 */
export async function POST(req: NextRequest) {
  // ── Auth ──
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

  const user = authResult.user;

  // ── Parse body ──
  try {
    const body = await req.json();

    const buyer = body?.buyer;
    const vessel = body?.vessel;

    if (!buyer || !vessel) {
      return json({ error: "Request body must include 'buyer' and 'vessel' objects" }, 400);
    }

    // Validate required fields
    const errors: string[] = [];
    if (!buyer.residency) errors.push("buyer.residency is required");
    if (!buyer.liquidityAvailable || buyer.liquidityAvailable <= 0) errors.push("buyer.liquidityAvailable must be > 0");
    if (!buyer.netWorthBand) errors.push("buyer.netWorthBand is required");
    if (!buyer.incomeType) errors.push("buyer.incomeType is required");
    if (!vessel.purchasePrice || vessel.purchasePrice <= 0) errors.push("vessel.purchasePrice must be > 0");
    if (!vessel.yearBuilt || vessel.yearBuilt < 1950) errors.push("vessel.yearBuilt must be >= 1950");

    if (errors.length > 0) {
      return json({ error: "Validation failed", details: errors }, 400);
    }

    // ── Create records ──
    const client = await prisma.client.create({
      data: {
        name: buyer.name || "API Buyer",
        residency: String(buyer.residency),
        liquidityAvailable: Number(buyer.liquidityAvailable),
        netWorthBand: String(buyer.netWorthBand),
        incomeType: mapIncomeType(String(buyer.incomeType)),
        ownershipIntent: mapOwnershipIntent(String(buyer.ownershipIntent || "unsure")),
        createdById: user.id,
      },
    });

    const vesselRecord = await prisma.vessel.create({
      data: {
        clientId: client.id,
        purchasePrice: Number(vessel.purchasePrice),
        yearBuilt: Number(vessel.yearBuilt),
        usageType: mapUsageType(String(vessel.usageType || "private")),
        intendedFlag: vessel.intendedFlag ? String(vessel.intendedFlag) : null,
      },
    });

    // ── Run engine ──
    const result = await runAssessment({
      clientId: client.id,
      vesselId: vesselRecord.id,
      actorEmail: user.email,
    });

    return json({
      assessmentId: result.assessmentId,
      readinessScore: result.readinessScore,
      tier: result.tier,
      ltvEstimate: result.ltv,
      riskFlags: result.riskFlags,
      recommendedPath: result.recommendedPath,
      ruleSetVersion: result.ruleSetVersion,
      createdAt: new Date().toISOString(),
    }, 201);

  } catch (err) {
    console.error("API v1 assessment error:", err);
    return json({ error: "Internal server error" }, 500);
  }
}

/**
 * GET /api/v1/assessments
 *
 * List assessments for the authenticated API user.
 *
 * Query params:
 *   limit (default 20, max 100)
 *   offset (default 0)
 */
export async function GET(req: NextRequest) {
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

  const url = new URL(req.url);
  const limit = Math.min(Number(url.searchParams.get("limit") || 20), 100);
  const offset = Math.max(Number(url.searchParams.get("offset") || 0), 0);

  const [assessments, total] = await Promise.all([
    prisma.assessment.findMany({
      where: { createdById: authResult.user.id },
      include: {
        client: { select: { name: true, residency: true } },
        vessel: { select: { purchasePrice: true, yearBuilt: true, usageType: true } },
      },
      orderBy: { createdAt: "desc" },
      take: limit,
      skip: offset,
    }),
    prisma.assessment.count({ where: { createdById: authResult.user.id } }),
  ]);

  return json({
    data: assessments.map((a) => ({
      id: a.id,
      clientName: a.client.name,
      clientResidency: a.client.residency,
      vesselPrice: a.vessel.purchasePrice,
      vesselYear: a.vessel.yearBuilt,
      readinessScore: a.readinessScore,
      tier: a.tier,
      ltvEstimate: a.ltvEstimateMin && a.ltvEstimateMax
        ? { min: a.ltvEstimateMin, max: a.ltvEstimateMax }
        : null,
      riskFlags: a.riskFlags,
      recommendedPath: a.recommendedPath,
      createdAt: a.createdAt.toISOString(),
    })),
    pagination: { total, limit, offset },
  });
}