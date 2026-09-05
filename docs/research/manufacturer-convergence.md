# Manufacturer convergence — initial evidence audit

Reviewed 2026-09-05. Status: **preliminary support; formal M0 gate open**. No executable Rule Packs exist.

## Supplied evidence versus new observations

The supplied handoff section 10 reports a preliminary PASS and twelve canonical domains. It does not supply the underlying matrix or official manufacturer citations. The technical spec's Dyness example explicitly has placeholder sources. Consequently every manufacturer requirement inferred only from that example is unsupported.

The following primary sources were independently retrieved during this audit. Availability today does not establish that a document is the latest applicable policy for every product/customer. Paths below are proposed mappings, not implemented schema keys.

## Source register

| ID | Official source | Scope/version | Date knowledge |
| --- | --- | --- | --- |
| G1 | [Growatt Products Service Commitment](https://en.growatt.com/support/warranty) | Multiple products; excludes mainland China; contract/OEM qualifications | Effective date/version not stated in retrieved page; reviewed 2026-09-05 |
| Y1 | [Dyness DL5.0C Pro warranty](https://za.dyness.com/Public/Uploads/uploadfile/files/20251022/DynessWarrantyTermsDL5.0CPro10nianfeizhou2025071.pdf) | DL5.0C Pro; Africa; cover V2-202502 versus running label 202410 | Conflicting labels and filename date; effective date unresolved; reviewed 2026-09-05 |
| D1 | [Deye inverter warranty v1.7](https://www.deyeinverter.com/deyeinverter/2023/08/04/warranty-deye-v1.7.pdf) | Broad geographic language but Australian models/importer; applicability unresolved | v1.7, 2023; exact effective date unknown; reviewed 2026-09-05 |

## Field-level observations

R = explicitly requested in the identified context, C = conditional, X = contextual/exclusion. These classifications do not establish legal eligibility. Scope/date metadata is inherited from each source-register row.

| Manufacturer/source locator | Evidence observation | Class | Proposed canonical mapping |
| --- | --- | --- | --- |
| Growatt G1, Other important notice (1) | Model and serial | R, claim | Asset.model, Asset.serial_number |
| Growatt G1, same | PV/string/grid configuration | R, claim | SystemConfiguration |
| Growatt G1, same | Fault details, error/photos | R, claim; modality alternatives | Fault.description, Fault.evidence |
| Growatt G1, Service terms (3) | Purchase/installation documents when requested | C | Purchase.proof_of_purchase, Installation.evidence |
| Growatt G1, Service terms (4) | Installation certificate timing | X | Installation.installation_date, Evidence |
| Growatt G1, Other notice (2) | Unauthorized repairs excluded | X | ServiceEvent.authorization |
| Dyness Y1, p5 Responsibility (1) | Serial and fault phenomena | R, failure investigation | Asset.serial_number, Fault.description |
| Dyness Y1, same | Paired inverter identity/specifications | R, failure investigation | SystemConfiguration.components |
| Dyness Y1, same | Temperature, operating mode, logs, PV/load data | R, failure investigation | Diagnostics, SystemConfiguration |
| Dyness Y1, p5 Responsibility (2) | Failed/replacement serials and written confirmation | C, replacement | ReplacementEvent, Authorization.evidence |
| Dyness Y1, p2 §2.1 | First installation timing | X | Installation.installation_date |
| Dyness Y1, p5 claim list | Proof item is incomplete in retrieved text | Unknown | Purchase/Evidence unresolved |
| Deye D1, p5 §5(1) | Model, serial, configuration and fault details | R, claim | Asset, SystemConfiguration, Fault/Evidence |
| Deye D1, p1 §1(4) | Invoice/receipt on request | C | Purchase.proof_of_purchase |
| Deye D1, p1 §1(3) | Installation timing | X | Installation.installation_date |
| Deye D1, p6 §5(2) | Unauthorized repairs excluded | X | ServiceEvent.authorization |

Y1 also contains 48-hour and two-week notification wording (p4); do not choose a deadline automatically. Its visual screenshot retrieval failed, so the incomplete proof phrase remains unresolved. G1's purchase alternatives must not become a universal mandatory invoice. D1 is evidence of representation feasibility, not a Nigeria policy selection. These are constraints on this research's conclusions.

## Unsupported requirements from the supplied material

Until independently sourced at the right scope, do not encode:

- Dyness unconditional invoice/proof-of-purchase requirement implied by the conceptual YAML.
- Dyness mandatory installer identity and installation date as universal claim-submission fields; timing relevance is not the same assertion.
- The invented trigger `selected_fault_requires_operational_logs` in the spec example.
- Any required compatibility list, firmware threshold, measurement threshold, registration deadline, evidence file format or authorization credential not documented in a selected source.
- Requirements applying to all models because a single product document mentions them.
- Universal African or Nigerian applicability inferred from a directory name or an Australian policy.
- Claim approval, legal exclusion conclusions, automatic trust scores, or automatic verification from evidence presence.

The handoff's wider recurring domains (purchase provenance, installer, photos/logs/readings, authorization and lineage) are design hypotheses unless the rows above or later matrix additions source them. Not finding a requirement in this bounded audit does not prove it absent from other official documents.

## M0 gate assessment

| Master-prompt criterion | Assessment |
| --- | --- |
| Shared identity/purchase/installation/system/fault/evidence mapping | Positive identity/system/fault examples; purchase mapping and source applicability incomplete. |
| Specific requirements external to core | Plausible typed paired-component constraint; executable demonstration still absent. |
| Authorization, jurisdiction/version, replacement lineage representable | Strong design direction; source observations support scoped representation, but no schema test yet. |
| No fatal source conflict | No observed contradiction disproves the common model; unresolved source ambiguities prevent an unconditional policy-level conclusion. |

The selected requirements appear representable without manufacturer branches. That is an architectural inference, not proof that all three manufacturers' requirements converge. Formal PASS awaits a reproducible bounded corpus and explicit coverage of the source gate. No production policy pack should be generated from this table alone.

## Next research action

Recheck current official indexes for applicable product/region versions; obtain readable primary snapshots or equivalent official text for unresolved passages. Expand the matrix within a stated bounded scope, retaining required/conditional/contextual/unknown distinctions, source locators and date knowledge. Verify incorporated manuals where load-bearing. Store provenance and hashes for obtained artifacts; preserve external document rights. If ambiguity persists, mark the affected rules non-executable and explain whether that blocks M0 rather than silently relaxing the gate.
