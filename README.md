# proofgrid-registry

Source-backed claim-intake evidence packs for ProofGrid. Four manufacturers use the same canonical schemas and core runtime: Growatt, Dyness, Deye and Victron. Each pack names a narrow product/context, cites sources and keeps uncertain clauses unresolved.

**Status: functional developer preview with 39 tests.** This is evidence preparation, not warranty eligibility or approval. All current source dates need applicability review, so complete examples return review_required.

## Run the examples

Node 24+ and npm; use npm.cmd in PowerShell.

```sh
npm ci
npm test
npm run demo
npm run check:contract -- --package node_modules/@proofgrid/core
```

The demo selects each example from the complete catalog and asserts its expected review_required result. For a detailed CLI report:

```sh
node node_modules/@proofgrid/core/dist/src/cli.js assess --record examples/dyness-claim.json --catalog catalog.json --jurisdiction africa --date 2026-09-05 --format text
```

That command intentionally exits 2 for review_required. Exit 0 means scoped_checks_met, 1 incomplete and 3 invalid input. Unknown effective dates are never replaced by source review dates; ambiguous catalogs never choose a guessed latest version.

## Catalog

| Manufacturer | Example/model | Executable scope |
| --- | --- | --- |
| Growatt | MIN 5000TL-X | Identity, PV/grid configuration and fault description |
| Dyness | DL5.0C Pro | Serial, paired inverter/specification, operating/PV/load data, fault and log references |
| Deye | SUN-5K-SG04LP1-AU | Identity, PV/grid data, installation and fault/date |
| Victron | BAT512110610 | Battery-usage proof presence |

See [catalog.json](catalog.json), examples/, [intake source review](docs/research/claim-intake-review.md), [fourth-manufacturer result](docs/research/fourth-manufacturer.md) and [source register](sources/index.json). The original M1 Dyness pack remains for regression coverage and is excluded from catalog selection.

These are scoped field checks, not complete manufacturer policies. Pointer presence cannot establish correct use, authorized repairs or document contents. Deye AU/NZ is not Nigeria; the Victron unspecified label does not mean worldwide applicability. No automatic region expansion occurs.

## Standalone artifact boundary

The complete private @proofgrid/core@0.2.0-draft.0 artifact is pinned under vendor/ with npm lockfile integrity and [source/hash provenance](contracts/core-0.1/provenance.json). No sibling checkout or publication is required. npm ci fetches transitive dependencies normally. The older M1 archive is retained as a historical capture; only the new artifact is installed.

npm test verifies archive/schema hashes and every rule's citations, then tests fields, uncertainty, catalog selection and broken links through the installed runtime. --package checks installed metadata/exports/schema bytes. Optional --core ../proofgrid-core compares schema source bytes only. Do not hand-edit contract snapshots.

## Contribute

Read [CONTRIBUTING.md](CONTRIBUTING.md), [real backlog](docs/backlog.md) and [SECURITY.md](SECURITY.md). Pack changes need source review and targeted fixtures. Manufacturer documents remain linked and retain their rights; only actually obtained bytes receive hashes. No customer evidence belongs in fixtures.

## License

New ProofGrid source uses MPL-2.0. [LICENSING.md](LICENSING.md) preserves earlier Apache grants. The vendored core carries its own notices. Archive hashes identify captures, not reproducible-build or manufacturer-approval guarantees.
