// SPDX-License-Identifier: MPL-2.0
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {validateEvidence,validateRulePack,evaluateSelectedPack} from '@proofgrid/core';
const read=url=>JSON.parse(readFileSync(url));
for(const maker of ['growatt','dyness','deye']) {
 const base=new URL('./fixtures/'+maker+'-intake.json',import.meta.url);
 const fixture=read(base), pack=read(new URL(fixture.pack,base)), record=read(new URL(fixture.record,base));
 test(maker+' reviewed intake and non-mutation',()=>{const before=structuredClone({record,pack});const result=evaluateSelectedPack(record,pack,{jurisdiction:pack.jurisdiction,date:'2026-09-05'});assert.equal(result.pack.valid,true,JSON.stringify(result.pack));assert.equal(result.evidence.valid,true);assert.equal(result.applicability,'unknown');assert.ok(result.rules.filter(r=>r.status!=='unresolved').every(r=>r.status==='satisfied'));assert.ok(result.rules.some(r=>r.status==='unresolved'));assert.deepEqual({record,pack},before);});
 for(const omission of fixture.omissions) test(maker+' missing '+omission.path,()=>{const data=structuredClone(record);const keys=omission.path.split('.');const last=keys.pop();let parent=data;for(const key of keys) parent=parent[key];delete parent[last];assert.equal(validateEvidence(data).valid,true);const result=evaluateSelectedPack(data,pack);assert.equal(result.rules.find(r=>r.rule_id===omission.rule_id).status,'unsatisfied');});
 test(maker+' excludes wrong model',()=>{const data=structuredClone(record);data.asset.model='unlisted';assert.equal(evaluateSelectedPack(data,pack).applicability,'not_matched');});
}
