// SPDX-License-Identifier: MPL-2.0
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { validateEvidence, validateRulePack, evaluateSelectedPack } from '@proofgrid/core';
const read = path => JSON.parse(readFileSync(new URL(path, import.meta.url)));
const pack = read('../rules/dyness/africa/dl5.0c-pro/0.1.0-draft.json');
for (const fixture of read('./fixtures/canonical-cases.json').cases) test(fixture.name, () => {
  const data=fixture.data ?? read('./fixtures/'+fixture.data_file);
  assert.equal(validateEvidence(data).valid, fixture.valid);
});
test('actual partial pack validates against packaged core', () => assert.equal(validateRulePack(pack).valid,true));
for (const fixture of read('./fixtures/paired-inverter-cases.json').cases) test(fixture.name, () => {
  const data=fixture.data ?? read('./fixtures/'+fixture.data_file);
  const before=structuredClone({data,pack});
  const result=evaluateSelectedPack(data,pack,{jurisdiction:'africa',date:'2026-09-05'});
  assert.equal(result.evidence.valid,true);
  assert.equal(result.pack.valid,true);
  assert.equal(result.applicability,'unknown');
  assert.equal(result.rules.find(r=>r.rule_id==='paired-inverter-identity').status,fixture.valid?'satisfied':'unsatisfied');
  assert.equal(result.rules.find(r=>r.rule_id==='purchase-proof-wording').status,'unresolved');
  assert.deepEqual({data,pack},before);
});
test('Nigeria label is not automatically resolved to Africa', () => {
  const data=read('./fixtures/dyness-paired-inverter-present.json');
  const result=evaluateSelectedPack(data,pack,{jurisdiction:'NG',date:'2026-09-05'});
  assert.equal(result.applicability,'not_matched');
  assert.deepEqual(result.rules,[]);
});
