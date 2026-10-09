# Wave engineering backlog

Drafted October 8, 2026 against current implementation. These are proposed contributor tasks, not Wave enrollment or earned points. Complexity requires maintainer review in the app.

## 1. Independently review one manufacturer pack against its source

## Context

Record exact source/version/locator, corrections and unresolved clauses; preserve scope and add positive/negative applicability fixtures.

## Acceptance criteria

- Implement and document the specific behavior above.
- Cover positive, negative and unavailable-input cases appropriate to the change.
- Pass the repository documented build/test checks and required CI.
- Preserve exact identities/amounts and uncertain evidence outcomes.

## Relevant files

rules/, docs/

## Proposed complexity

medium; planning only. Actual Wave complexity and enrollment are set by maintainers in the Drips app.

## Contribution

Open a focused feat/fix/test/docs branch. PRs explain behavior and actual validation and include Closes #<issue_id>. Follow CONTRIBUTING.md and SECURITY.md.

## 2. Resolve a country-specific applicability boundary

## Context

Use authoritative sale/service/installation scope; do not infer Nigeria coverage from a generic Africa label.

## Acceptance criteria

- Implement and document the specific behavior above.
- Cover positive, negative and unavailable-input cases appropriate to the change.
- Pass the repository documented build/test checks and required CI.
- Preserve exact identities/amounts and uncertain evidence outcomes.

## Relevant files

rules/, test/

## Proposed complexity

medium; planning only. Actual Wave complexity and enrollment are set by maintainers in the Drips app.

## Contribution

Open a focused feat/fix/test/docs branch. PRs explain behavior and actual validation and include Closes #<issue_id>. Follow CONTRIBUTING.md and SECURITY.md.

## 3. Add source capture digest and license metadata checks

## Context

Check every source locator, capture digest and redistribution note; preserve earlier provenance rather than silently replacing it.

## Acceptance criteria

- Implement and document the specific behavior above.
- Cover positive, negative and unavailable-input cases appropriate to the change.
- Pass the repository documented build/test checks and required CI.
- Preserve exact identities/amounts and uncertain evidence outcomes.

## Relevant files

scripts/, catalog.json, sources/

## Proposed complexity

medium; planning only. Actual Wave complexity and enrollment are set by maintainers in the Drips app.

## Contribution

Open a focused feat/fix/test/docs branch. PRs explain behavior and actual validation and include Closes #<issue_id>. Follow CONTRIBUTING.md and SECURITY.md.

## 4. Test registry portability from an isolated checkout

## Context

Verify all packs use installed pinned core schemas without sibling paths; reject altered vendored artifacts.

## Acceptance criteria

- Implement and document the specific behavior above.
- Cover positive, negative and unavailable-input cases appropriate to the change.
- Pass the repository documented build/test checks and required CI.
- Preserve exact identities/amounts and uncertain evidence outcomes.

## Relevant files

scripts/check-contract.mjs, test/

## Proposed complexity

medium; planning only. Actual Wave complexity and enrollment are set by maintainers in the Drips app.

## Contribution

Open a focused feat/fix/test/docs branch. PRs explain behavior and actual validation and include Closes #<issue_id>. Follow CONTRIBUTING.md and SECURITY.md.

## 5. Document registry-to-Stellar attestation composition

## Context

Show the same synthetic intake assessed against a pack then committed through proofgrid-stellar with explicit unresolved/authority limits.

## Acceptance criteria

- Implement and document the specific behavior above.
- Cover positive, negative and unavailable-input cases appropriate to the change.
- Pass the repository documented build/test checks and required CI.
- Preserve exact identities/amounts and uncertain evidence outcomes.

## Relevant files

README.md, docs/

## Proposed complexity

trivial; planning only. Actual Wave complexity and enrollment are set by maintainers in the Drips app.

## Contribution

Open a focused feat/fix/test/docs branch. PRs explain behavior and actual validation and include Closes #<issue_id>. Follow CONTRIBUTING.md and SECURITY.md.

## 6. Add reviewed rule-pack version change history

## Context

Track changed applicability/interpretation, fixture updates and retained prior versions so old assessments remain explainable.

## Acceptance criteria

- Implement and document the specific behavior above.
- Cover positive, negative and unavailable-input cases appropriate to the change.
- Pass the repository documented build/test checks and required CI.
- Preserve exact identities/amounts and uncertain evidence outcomes.

## Relevant files

rules/, docs/

## Proposed complexity

medium; planning only. Actual Wave complexity and enrollment are set by maintainers in the Drips app.

## Contribution

Open a focused feat/fix/test/docs branch. PRs explain behavior and actual validation and include Closes #<issue_id>. Follow CONTRIBUTING.md and SECURITY.md.

## Published contributor issues

- [Independently review one manufacturer pack against its source](https://github.com/proofgrid-energy/proofgrid-registry/issues/1) — proposed medium.
- [Resolve a country-specific applicability boundary](https://github.com/proofgrid-energy/proofgrid-registry/issues/2) — proposed medium.
- [Add source capture digest and license metadata checks](https://github.com/proofgrid-energy/proofgrid-registry/issues/3) — proposed medium.
- [Test registry portability from an isolated checkout](https://github.com/proofgrid-energy/proofgrid-registry/issues/4) — proposed medium.
- [Document registry-to-Stellar attestation composition](https://github.com/proofgrid-energy/proofgrid-registry/issues/5) — proposed trivial.
- [Add reviewed rule-pack version change history](https://github.com/proofgrid-energy/proofgrid-registry/issues/6) — proposed medium.
