// SPDX-License-Identifier: MPL-2.0
import {test} from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';import {assessEvidence} from '@proofgrid/core';
const root=new URL('../',import.meta.url),read=p=>JSON.parse(readFileSync(new URL(p,root))),catalog=read('catalog.json'),packs=catalog.packs.map(p=>read(p.pack));
test('catalog has four distinct manufacturers and stable identities',()=>{assert.equal(new Set(packs.map(p=>p.manufacturer)).size,4);assert.equal(new Set(packs.map(p=>p.pack_id+'@'+p.pack_version)).size,packs.length);});
for(const entry of catalog.packs)test(entry.example+' selects exactly its own pack',()=>{const record=read(entry.example),pack=read(entry.pack),r=assessEvidence(record,packs,{jurisdiction:pack.jurisdiction,date:'2026-09-05'});assert.equal(r.selection,'selected');assert.equal(r.selected_pack.pack_id,pack.pack_id);assert.equal(r.outcome,'review_required');});
test('dangling operation-log reference is invalid rather than complete',()=>{const record=read('examples/dyness-claim.json');record.diagnostics.logs=['absent'];assert.equal(assessEvidence(record,packs,{jurisdiction:'africa'}).outcome,'invalid');});
