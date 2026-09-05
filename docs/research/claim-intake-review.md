# Claim-intake source review

Reviewed 2026-09-05. Catalog v0.1 selects three deliberately bounded intake packs. All remain partial and require manual applicability review. Every executable rule has a positive example and a targeted negative fixture; unresolved clauses are visible in results. The historical M1 Dyness pack remains for regression tests and is not selected by the catalog.

| Scope | Executable fields | Manual review |
| --- | --- | --- |
| Growatt service commitment, Other important notice (1), MIN 5000TL-X | Identity, PV/grid configuration, fault description | Conditional purchase documents, country alignment, OEM/sales contract, dates/exclusions |
| Dyness DL5.0C Pro, p5 Responsibility (1) | Serial, paired inverter/specification reference, mode/load/PV fields, fault, logs | Temperature context, operating procedures, non-exhaustive source list, purchase wording, notification and repair/replacement approval |
| Deye AU/NZ v2.9, p5 section 3 and p6 section 5, SUN-5K-SG04LP1-AU | Identity, PV/grid fields, initial installation date, fault/date | Contact/shipping contents, invoice conflict, capacity logs, serial-era condition, date interpretation and contracts |

Coverage is complete for the executable field checks named above; it is not complete warranty-policy coverage. Referenced data contents, measurements and physical compliance cannot be established from pointer presence. Manuals are incorporated by policy but their installation/safety instructions are outside these intake scopes and are not converted into warranty verdicts.

Sources: URLs, versions, review dates and obtained capture hashes are in sources/index.json. Growatt HTML and Dyness PDF bytes were obtained into the ignored workspace research directory; no manufacturer document is redistributed. Deye's official PDF text was read through the web tool, but direct download failed, so its hash remains null. Effective-date uncertainty is preserved for all three packs.

Model corroboration: [Growatt residential PV page](https://en.growatt.com/solutions/residential-pv-system) lists MIN 5000TL-X. [Deye AU datasheet](https://www.deyeinverter.com/deyeinverter/2024/02/03/datasheet_sun-3-6k-sg04lp1-au_240203_au.pdf) lists SUN-5K-SG04LP1-AU. Neither establishes a customer's contract applicability.

Reviewer: local source review and adversarial self-review, not manufacturer approval or independent legal review. The ambiguous invoice/deadline/date wording remains a real backlog item. No purchase-proof rule is inferred for Dyness.
