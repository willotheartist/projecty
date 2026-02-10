// lib/engine/rules.ts
export type Operator = "==" | "!=" | ">=" | "<=" | ">" | "<" | "in" | "contains";

export type RuleCondition = {
  field: string; // e.g. "client.liquidityAvailable" or "vessel.yearBuilt"
  op: Operator;
  value: any;
};

export type RuleEffect = {
  type: "score_add";
  value: number;
  flag?: string | null;
};

export type RuleRow = {
  id: string;
  condition: RuleCondition;
  weight: number; // can be redundant, but we keep it
  effect: RuleEffect;
};

export type EvalHit = {
  ruleId: string;
  matched: boolean;
  delta: number;
  flag?: string;
};

function getByPath(obj: any, path: string) {
  const parts = path.split(".");
  let cur = obj;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  return cur;
}

function opCompare(left: any, op: Operator, right: any): boolean {
  if (op === "==") return left === right;
  if (op === "!=") return left !== right;

  // numeric comparisons if possible
  if (op === ">=") return Number(left) >= Number(right);
  if (op === "<=") return Number(left) <= Number(right);
  if (op === ">") return Number(left) > Number(right);
  if (op === "<") return Number(left) < Number(right);

  if (op === "in") {
    if (!Array.isArray(right)) return false;
    return right.includes(left);
  }

  if (op === "contains") {
    // string contains OR array contains
    if (typeof left === "string") return left.includes(String(right));
    if (Array.isArray(left)) return left.includes(right);
    return false;
  }

  return false;
}

export function evaluateRule(rule: RuleRow, context: any): EvalHit {
  const left = getByPath(context, rule.condition.field);
  const matched = opCompare(left, rule.condition.op, rule.condition.value);

  if (!matched) {
    return { ruleId: rule.id, matched: false, delta: 0 };
  }

  const effect = rule.effect;
  const delta = effect.type === "score_add" ? Number(effect.value) : 0;

  return {
    ruleId: rule.id,
    matched: true,
    delta,
    flag: effect.flag ?? undefined,
  };
}

export function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}
