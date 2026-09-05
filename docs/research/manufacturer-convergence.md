# Manufacturer convergence — initial evidence audit

Reviewed 2026-09-05. Status: **bounded M0 representation PASS; production policy readiness remains open**. No complete manufacturer Rule Packs exist. The initial audit below is preserved; the follow-up assessment at the end supersedes its preliminary verdict.

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

## Follow-up: bounded representation decision

The resumed roadmap distinguishes the M0 representation hypothesis from a complete, currently applicable policy implementation. The latter belongs to M2/M3 and is not established here. The bounded corpus is G1's claim-evidence section, Y1's failure-investigation/replacement and purchase-provenance sections, and D2's AU/NZ claim-evidence sections. No claim is made for all models, all jurisdictions, or every warranty exclusion.

The [Dyness ZA download index](https://za.dyness.com/download) still directly links Y1 as the DL5.0C Pro warranty. This verifies the source's current listing, not its effective date. Y1 p3 section 2.4.1 supplies purchase provenance through the seller relationship: map `Purchase.seller_ref` to an `Actor` and scoped `Authorization`. This closes the missing purchase-domain representation without reconstructing the incomplete claim-list phrase as an invoice requirement.

D2 is the [Deye SUN AU/NZ v2.9 document](https://www.deyeinverter.com/deyeinverter/2025/12/03/WarrantyDocument-DeyeSUNSeriesinverter10-YearLimitedWarrantyforInstallationinAustraliaandNewZealand-V2.91.pdf). Use its explicitly bounded AU-type SUN inverter / AU-NZ installation scope for this study. D1 remains historical evidence; do not infer that the higher-numbered regional document supersedes every global contract. The [newer general agreement](https://www.deyeinverter.com/deyeinverter/2025/04/16/generalwarrantyagreement-deye-v2.3-10.pdf) has regional exclusions and partially unreadable extracted model tables; it is excluded from executable scope.

| Additional source/locator | Observation/class | Canonical representation |
| --- | --- | --- |
| D2 p5 section 3 | Identity/configuration/fault data, R for claims | Asset, SystemConfiguration, Fault, Evidence |
| D2 p6 section 5 | Initial installation/failure dates, R for claims | Installation.installation_date, Fault.occurred_at |
| D2 p6 section 5 | Claimant contact/shipping information, R | Actor; private off-chain contact reference |
| D2 p6 section 5 versus p5 section 3 | Invoice wording differs, unresolved | Purchase.proof_of_purchase; non-executable ambiguity |
| D2 p6 section 5 | Logs and potentially requested analysis, R/C | Diagnostics.logs, Diagnostics.readings, Evidence |

D2's effective-date text is `01/11/2023`; preserve that raw form until its interpretation is verified. Its serial-era condition and capacity-log wording also remain outside the M1 slice. Review date is 2026-09-05. No production AU/NZ pack is asserted.

### Gate result and limits

1. Identity, purchase provenance, installation, system configuration, fault and evidence concepts have explicit mappings across the bounded corpus. Common domains do not imply identical mandatory fields.
2. Y1's paired-inverter data can be represented as typed canonical components and constrained externally. It requires no Dyness-specific property or core manufacturer branch.
3. Scoped actor authorization, source jurisdiction/version metadata and old/new component references represent the observed differences. Unresolved dates remain unknown data.
4. Source ambiguity affects which constraints are executable, not whether the shared representation can hold them. No observed source conflict forces a different core model. Do not count unresolved constraints as satisfied.

**Decision: M0 passes for this bounded schema experiment.** This replaces the earlier open *representation* verdict based on the added purchase-provenance mapping and explicit Deye regional scope. It does not close policy completeness, enforceable eligibility, full legal/operational review or fourth-manufacturer extensibility. M1 must still test the proposed representation, including a negative paired-inverter fixture; an opaque extension bag is not acceptable proof.

The future partial Dyness demonstration is limited to paired-inverter manufacturer/model/specification presence during failure investigation. It must expose unknown effective-date applicability and excluded rules, make no warranty-readiness claim, and never infer invoice requirements, compatibility, operating limits, approval or physical truth. Ambiguous Y1 deadlines/proof and D2 invoice wording stay quarantined for later source review.
