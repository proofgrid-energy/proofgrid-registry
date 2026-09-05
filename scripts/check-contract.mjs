// SPDX-License-Identifier: MPL-2.0
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const read = file => JSON.parse(readFileSync(resolve(root, file), 'utf8'));
const provenance = read('contracts/core-0.1/provenance.json');
assert.equal(provenance.schema_version, '0.1');
assert.equal(provenance.artifact_path, 'vendor/proofgrid-core-0.1.0-draft.1.tgz');
assert.equal(createHash('sha256').update(readFileSync(resolve(root, provenance.artifact_path))).digest('hex'), provenance.artifact_sha256, 'Vendored core artifact hash changed');
const args = process.argv.slice(2);
assert.ok(args.length === 0 || (args.length === 2 && ['--core', '--package'].includes(args[0])), 'Usage: node scripts/check-contract.mjs [--core PATH | --package EXTRACTED_PACKAGE]');
assert.deepEqual(Object.keys(provenance.sha256).sort(), ['evidence.schema.json', 'rule-pack.schema.json']);
if (args[0] === '--package') {
  const metadata = JSON.parse(readFileSync(resolve(args[1], 'package.json'), 'utf8'));
  assert.equal(metadata.name, provenance.package_name);
  assert.equal(metadata.version, provenance.package_version);
  for (const file of Object.keys(provenance.sha256)) {
    const subpath = `./schemas/0.1/${file}`;
    assert.equal(metadata.exports[subpath], subpath, 'Unexpected schema export');
  }
}
for (const [file, expected] of Object.entries(provenance.sha256)) {
  const bytes = readFileSync(resolve(root, 'contracts/core-0.1', file));
  assert.equal(createHash('sha256').update(bytes).digest('hex'), expected, file + ' snapshot hash changed');
  if (args.length) {
    const current = readFileSync(resolve(args[1], 'schemas/0.1', file));
    assert.ok(bytes.equals(current), file + ' differs from the explicitly supplied core source');
  }
}
const pack = read('rules/dyness/africa/dl5.0c-pro/0.1.0-draft.json');
assert.equal(pack.schema_version, provenance.schema_version);
const index = read('sources/index.json');
const sources = new Map(pack.sources.map(source => [source.source_id, source]));
assert.equal(sources.size, pack.sources.length, 'Duplicate source identifiers');
assert.equal(new Set(pack.rules.map(rule => rule.rule_id)).size, pack.rules.length, 'Duplicate rule identifiers');
for (const source of sources.values()) {
  const registered = index.sources.find(item => item.source_id === source.source_id);
  assert.ok(registered, 'Unregistered source');
  for (const key of ['url', 'document_version', 'reviewed_at']) assert.equal(source[key], registered[key], 'Source metadata drift: ' + key);
}
for (const rule of pack.rules) {
  assert.ok(rule.citations.length, 'Rule has no citation');
  for (const citation of rule.citations) {
    assert.ok(sources.has(citation.source_id), 'Rule cites an unknown source');
    assert.ok(citation.locator.trim(), 'Rule has no locator');
  }
  if (rule.status === 'unresolved') assert.ok(!('constraint' in rule), 'Unresolved rule must not execute');
}
console.log('Contract snapshot hashes, source links and rule citations passed' + (args.length ? '; supplied core schema bytes match.' : '.'));
console.log('Snapshot and vendored runtime artifact match recorded provenance; npm test exercises the installed runtime.');
