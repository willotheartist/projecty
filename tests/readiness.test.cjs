const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
const vm = require('node:vm');
const exported = {};
vm.runInNewContext(ts.transpileModule(fs.readFileSync('lib/engine/readiness.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText, { exports: exported });
const { assessReadiness, monthlyPayment, validateReadiness } = exported;
const base = {purchasePrice:500000,liquidityAvailable:400000,requestedLoan:250000,financeTermYears:10,planningRatePct:8,monthlySurplus:6000,closingCosts:20000,monthlyOwnershipCosts:2000,documentsReadiness:'ready',vesselReadiness:'verified'};
test('amortization matches an independently known loan payment and handles zero interest', () => {
  assert.ok(Math.abs(monthlyPayment(100000, 6, 10) - 1110.205) < .01);
  assert.equal(monthlyPayment(120000, 0, 10), 1000);
});
test('a funded, affordable and prepared profile can earn 100', () => {
  const r = assessReadiness(base);
  assert.equal(r.readinessScore,100);
  assert.equal(r.readiness.capReasons.length,0);
  assert.equal(r.readiness.requestedLtv,50);
});
test('same financial proportions produce the same score regardless of wealth or currency scale', () => {
  const scaled = {...base};
  for (const k of ['purchasePrice','liquidityAvailable','requestedLoan','monthlySurplus','closingCosts','monthlyOwnershipCosts']) scaled[k] *= 10;
  assert.equal(assessReadiness(base).readinessScore,assessReadiness(scaled).readinessScore);
});
test('cash shortfall cannot be offset by completed documents', () => {
  const r=assessReadiness({...base,liquidityAvailable:200000});
  assert.ok(r.readinessScore<=49);
  assert.equal(r.readiness.cashGap,70000);
  assert.equal(r.readiness.remainingCash,0);
});
test('insufficient repayment surplus caps the score and zero is a valid input', () => {
  const r=assessReadiness({...base,monthlySurplus:0});
  assert.ok(r.readinessScore<=49);
  assert.equal(r.readiness.factors.find(f=>f.key==='repayment').points,0);
  assert.ok(r.readiness.capReasons.some(s=>s.includes('surplus')));
});
test('cash exactly sufficient for purchase has no gap but no reserve', () => {
  const r=assessReadiness({...base,liquidityAvailable:270000});
  assert.equal(r.readiness.cashGap,0);
  assert.equal(r.readiness.reserveMonths,0);
});
test('higher disposable surplus never reduces score', () => {
  let previous=-1;
  for (let monthlySurplus=0;monthlySurplus<=10000;monthlySurplus+=100) {
    const score=assessReadiness({...base,monthlySurplus}).readinessScore;
    assert.ok(score>=previous); previous=score;
  }
});
test('more liquidity never reduces score', () => {
  let previous=-1;
  for(let liquidityAvailable=0;liquidityAvailable<=500000;liquidityAvailable+=5000){
    const score=assessReadiness({...base,liquidityAvailable}).readinessScore;
    assert.ok(score>=previous);previous=score;
  }
});
test('higher rate does not improve repayment or reserves', () => {
  let previous=101;
  for(let planningRatePct=0;planningRatePct<=30;planningRatePct++) {
    const score=assessReadiness({...base,planningRatePct}).readinessScore;
    assert.ok(score<=previous);previous=score;
  }
});
test('evidence stages earn distinct bounded points', () => {
  const pending=assessReadiness({...base,documentsReadiness:'partial',vesselReadiness:'pending'});
  assert.equal(pending.readinessScore,88);
  assert.equal(assessReadiness({...base,documentsReadiness:'not_started',vesselReadiness:'not_started'}).readinessScore,75);
});
test('invalid or missing values are rejected, not silently scored zero', () => {
  for (const patch of [{monthlySurplus:null},{planningRatePct:NaN},{financeTermYears:Infinity},{requestedLoan:500001},{monthlyOwnershipCosts:0},{documentsReadiness:'bogus'},{purchasePrice:-1},{financeTermYears:1.5},{liquidityAvailable:-1}]) {
    assert.equal(validateReadiness({...base,...patch}),false);
    assert.throws(()=>assessReadiness({...base,...patch}));
  }
});
test('score equals components unless an explicit cap applies',()=>{
  const r=assessReadiness({...base,monthlySurplus:4000,liquidityAvailable:300000});
  const sum=r.readiness.factors.reduce((s,f)=>s+f.points,0);
  assert.equal(r.readinessScore,r.readiness.capReasons.length?Math.min(sum,49):sum);
  for(const f of r.readiness.factors)assert.ok(f.points>=0&&f.points<=f.max);
});
test('new wizard results persist the same score, breakdown and inputs without a ruleset seed', async()=>{
  const writes={};
  const prisma={
    client:{findUnique:async()=>({id:'buyer',liquidityAvailable:base.liquidityAvailable})},
    vessel:{findUnique:async()=>({id:'vessel',purchasePrice:base.purchasePrice})},
    user:{upsert:async()=>({id:'actor'})},
    assessment:{create:async({data})=>{writes.assessment=data;return{id:'assessment'}}},
    assessmentRun:{create:async({data})=>{writes.run=data;return{id:'run'}}},
    ruleSet:{findUnique:async()=>{throw Error('v3 must not load legacy rules')}}
  };
  const runExports={};
  const source=ts.transpileModule(fs.readFileSync('lib/engine/runAssessment.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
  vm.runInNewContext(source,{exports:runExports,require:(id)=>{
    if(id==='./readiness')return exported;
    if(id==='@/lib/prisma')return{prisma};
    if(id==='./rules')return{};
    throw Error('Unexpected import '+id);
  }});
  const result=await runExports.runAssessment({clientId:'buyer',vesselId:'vessel',readinessInputs:base,currency:'USD',wizardAnswers:{incomeType:'business_owner'}});
  assert.equal(result.readinessScore,writes.assessment.readinessScore);
  assert.equal(writes.assessment.ltvEstimateMin,null);
  assert.equal(writes.assessment.ltvEstimateMax,null);
  assert.equal(writes.run.inputSnapshot.currency,'USD');
  assert.equal(writes.run.inputSnapshot.readinessInputs.requestedLoan,250000);
  assert.equal(writes.run.inputSnapshot.wizardAnswers.incomeType,'business_owner');
  assert.equal(writes.run.outputSnapshot.readiness.rawScore,100);
  assert.equal(writes.run.engineVersion,'readiness_v3.0');
});
