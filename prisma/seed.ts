// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function ensureRuleSet(version: string, rules: any[]) {
  const existing = await prisma.ruleSet.findUnique({ where: { version } });

  if (existing) {
    console.log(`ℹ️ RuleSet ${version} already exists — skipping`);
    return;
  }

  await prisma.ruleSet.create({
    data: {
      version,
      rules: {
        create: rules,
      },
    },
  });

  console.log(`✅ Seeded RuleSet ${version}`);
}

async function main() {
  await ensureRuleSet("v1.0", [
    {
      condition: { field: "client.liquidityAvailable", op: ">=", value: 500000 },
      weight: 20,
      effect: { type: "score_add", value: 20, flag: null },
    },
    {
      condition: { field: "vessel.yearBuilt", op: "<=", value: 2005 },
      weight: -15,
      effect: { type: "score_add", value: -15, flag: "Older vessel increases lender constraints" },
    },
    {
      condition: { field: "vessel.usageType", op: "==", value: "CHARTER" },
      weight: -10,
      effect: { type: "score_add", value: -10, flag: "Charter usage adds compliance complexity" },
    },
  ]);

  await ensureRuleSet("v1.1", [
    {
      condition: { field: "client.liquidityAvailable", op: ">=", value: 1000000 },
      weight: 25,
      effect: { type: "score_add", value: 25, flag: null },
    },
    {
      condition: { field: "client.liquidityAvailable", op: "<", value: 250000 },
      weight: -25,
      effect: { type: "score_add", value: -25, flag: "Low liquidity buffer" },
    },
    {
      condition: { field: "client.netWorthBand", op: "contains", value: "10" },
      weight: 10,
      effect: { type: "score_add", value: 10, flag: null },
    },
    {
      condition: { field: "client.incomeType", op: "==", value: "SALARY" },
      weight: 5,
      effect: { type: "score_add", value: 5, flag: null },
    },
    {
      condition: { field: "client.incomeType", op: "==", value: "BUSINESS" },
      weight: -5,
      effect: { type: "score_add", value: -5, flag: "Business income may require deeper underwriting" },
    },
    {
      condition: { field: "vessel.yearBuilt", op: "<=", value: 2000 },
      weight: -20,
      effect: { type: "score_add", value: -20, flag: "Older vessel (<=2000) narrows lender set" },
    },
    {
      condition: { field: "vessel.yearBuilt", op: ">=", value: 2015 },
      weight: 5,
      effect: { type: "score_add", value: 5, flag: null },
    },
    {
      condition: { field: "vessel.usageType", op: "==", value: "CHARTER" },
      weight: -15,
      effect: { type: "score_add", value: -15, flag: "Charter usage adds compliance complexity" },
    },
    {
      condition: { field: "client.ownershipIntent", op: "==", value: "SPV" },
      weight: -5,
      effect: { type: "score_add", value: -5, flag: "SPV ownership may require structuring review" },
    },
  ]);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
