# proofgrid-registry

Source-backed manufacturer evidence rules for ProofGrid. Canonical schema ownership remains in [proofgrid-core](https://github.com/proofgrid-energy/proofgrid-core); this repository owns source interpretation, scoped rules and manufacturer fixtures.

**Status: one partial M1 schema experiment, not a warranty policy service.** The [Dyness DL5.0C Pro draft](rules/dyness/africa/dl5.0c-pro/0.1.0-draft.json) checks paired-inverter manufacturer/model presence during failure investigation. It does not check compatibility, specifications, full investigation evidence, actual country/date applicability or approval. Its effective date is explicitly unknown. The incomplete purchase-proof clause remains non-executable.

See [manufacturer convergence research](docs/research/manufacturer-convergence.md), [source metadata](sources/index.json), and [snapshot provenance](contracts/core-0.1/provenance.json). The manufacturer PDF is linked, not redistributed; no unavailable source-byte hash is invented.

## Validate locally

Node.js can check snapshot integrity and source-citation consistency without any sibling checkout:

```sh
node scripts/check-contract.mjs
```

An explicit integration check can additionally compare canonical schema bytes:

```sh
node scripts/check-contract.mjs --core ../proofgrid-core
```

The checked-in schemas match the exported bytes of the local private `@proofgrid/core@0.1.0-draft.0` schema-only npm artifact. Provenance records its source commit and captured archive SHA-256; no package has been published. Do not hand-edit these schemas. LF line endings are pinned for stable hashes. Core has no dependency on this registry.

After following core's local packing/extraction instructions, check the extracted package explicitly:

```sh
node scripts/check-contract.mjs --package ../proofgrid-core/.local-checks/consumer/node_modules/@proofgrid/core
```

This checks package name/version, both export mappings and schema bytes. The default command checks only the standalone snapshot and citations. The recorded archive hash identifies the reviewed capture, not a guarantee that rebuilding on another platform reproduces its hash. TypeScript runtime consumer verification remains pending.

Schema fixture checks require Node.js and an installed VS Code JSON language server. The repository carries only the test framing/verification code, derived from core's MPL-2.0 test helper; it does not vendor Microsoft's server. Verification used `vscode-json-languageserver` 1.3.4 and Node 24.19.0.

In PowerShell, set the path and use cmd for byte-preserving pipes:

```powershell
$env:PROOFGRID_JSON_SERVER = 'C:\path\to\jsonServerMain.js'
cmd /d /c 'node scripts\check-schema-fixtures.mjs emit test\fixtures\paired-inverter-cases.json | node "%PROOFGRID_JSON_SERVER%" --stdio | node scripts\check-schema-fixtures.mjs verify test\fixtures\paired-inverter-cases.json'
```

Repeat for `canonical-cases.json` and `pack-cases.json`. On POSIX shells use the same three commands joined with `|`, forward slashes and `"$PROOFGRID_JSON_SERVER"` for the server path. Require a zero exit from the final verifier and every expected assertion. Missing replies and schema-resolution failures fail the run. These checks are not substitutes for pending Ajv/metaschema/runtime/package/CI checks.

The negative fixture passes the canonical evidence schema but fails the separate paired-inverter constraint. A battery component or inverter without a model also fails that constraint. This proves one external typed constraint can coexist with canonical data; it does not prove complete manufacturer readiness. The test chooses the rule explicitly and makes no applicability claim.

## Contributing rule data

Every proposed rule needs official sources where available, an exact locator, product/jurisdiction scope, version/date knowledge and positive/negative fixtures. Preserve uncertainty instead of guessing requirements. Do not execute ambiguous rules. Review existing contracts before proposing a core extension. Do not add customer evidence or manufacture issues for contribution points.

## License

New ProofGrid-authored source is MPL-2.0; manufacturer documents retain their own rights. See [LICENSE](LICENSE) and [LICENSING.md](LICENSING.md). This README was expanded from the original title-only template on 2026-09-05; earlier Apache grants are preserved.
