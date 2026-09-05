# proofgrid-registry

Source-backed manufacturer evidence rules for ProofGrid. Canonical schemas and the validation library belong to proofgrid-core; this repository owns source interpretation and manufacturer fixtures.

**Status: three reviewed claim-intake packs with 26 passing tests.** See [catalog](catalog.json), runnable JSON records under examples/, and [scope review](docs/research/claim-intake-review.md). These packs cover the named intake fields and retain manual-review clauses. The historical M1 example remains below for context.

 The [partial Dyness DL5.0C Pro draft](rules/dyness/africa/dl5.0c-pro/0.1.0-draft.json) checks paired-inverter manufacturer/model presence during failure investigation. Specifications, compatibility, complete policies and warranty approval are outside its coverage. The effective date is unknown and the purchase-proof wording remains unresolved.

## Standalone checks

Requires Node 24+ and npm; use npm.cmd in PowerShell.

```sh
npm ci
npm test
npm run check:contract -- --package node_modules/@proofgrid/core
```

The private package pins the complete local core runtime tarball under vendor/ with a real npm lockfile. No sibling checkout or npm publication is required. Transitive dependencies are fetched normally by npm ci. [Provenance](contracts/core-0.1/provenance.json) records the source commit, package version and exact tarball SHA-256. The archive is a captured artifact, not a cross-platform reproducibility claim. The snapshot schemas are verified copies of its public exports; do not hand-edit them.

npm test checks archive/snapshot hashes and source citations, then runs eight assertions through the installed runtime: two canonical fixtures, pack metadata, four paired-inverter cases and exact jurisdiction handling. Constraint outcomes stay separate from unknown applicability. Unresolved source clauses never become satisfied. CI runs these same standalone checks; remote CI execution must be confirmed separately.

Optional explicit source comparison: node scripts/check-contract.mjs --core ../proofgrid-core. This compares source schema bytes; it does not pack or validate sibling runtime code. --package checks installed package metadata, versioned exports and schema bytes. The original language-server fixture helpers remain available but are not needed for npm test.

## Source and review boundaries

See [manufacturer convergence research](docs/research/manufacturer-convergence.md) and [source metadata](sources/index.json). Manufacturer documents are linked, not redistributed. No unavailable PDF checksum is invented. Every new rule needs a source locator, product/jurisdiction/version scope, date knowledge and positive/negative fixtures. Preserve ambiguity as unresolved. No automatic country-to-region or policy selection is implemented; NG is not silently expanded to africa.

The bounded three-manufacturer representation finding is not a complete policy or Nigeria applicability verdict. M2 must review full scoped rule coverage. No customer evidence belongs in these fixtures.

## License

New ProofGrid source is MPL-2.0; third-party documents retain their rights. See [LICENSE](LICENSE) and [LICENSING.md](LICENSING.md). The vendored core artifact includes its own license notices and preserved Apache grants.
