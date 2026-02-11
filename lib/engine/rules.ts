// lib/engine/rules.ts

export type Operator =
  | "=="
  | "!="
  | ">="
  | "<="
  | ">"
  | "<"
  | "in"
  | "contains";

export type RiskSeverity = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

export type RuleCondition = {
  field: string;
  op: Operator;
  value: any;
};

export type RuleEffect = {
  scoreDelta?: number;
  flagCode?: string | null;
  severity?: RiskSeverity;
};

export type RuleRow = {
  id: string;
  condition: RuleCondition;
  weight: number;
  effect: RuleEffect;
};

export type EvalHit = {
  ruleId: string;
  matched: boolean;
  weightedDelta: number;
  flagCode?: string;
  severity?: RiskSeverity;
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

  if (op === ">=") return Number(left) >= Number(right);
  if (op === "<=") return Number(left) <= Number(right);
  if (op === ">") return Number(left) > Number(right);
  if (op === "<") return Number(left) < Number(right);

  if (op === "in") {
    if (!Array.isArray(right)) return false;
    return right.includes(left);
  }

  if (op === "contains") {
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
    return {
      ruleId: rule.id,
      matched: false,
      weightedDelta: 0,
    };
  }

  const baseDelta = Number(rule.effect.scoreDelta ?? 0);
  const weightedDelta = baseDelta * rule.weight;

  return {
    ruleId: rule.id,
    matched: true,
    weightedDelta,
    flagCode: rule.effect.flagCode ?? undefined,
    severity: rule.effect.severity,
  };
}

export function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}
