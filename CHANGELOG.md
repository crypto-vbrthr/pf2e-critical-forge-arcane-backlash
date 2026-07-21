# Changelog

## 0.2.3

- Applied the full mechanical review of **Defiant Reversals**.
- Redesigned DR-001, DR-002, DR-007, DR-011, DR-014, DR-019, DR-024, DR-025, and DR-029 to remove repeated Step rewards, duplicate fear recovery, cover-ladder overlap, location tracing already used elsewhere, terrain-rule overload, and mechanics duplicated from Martial Consequences.
- Added anchored defensive cover, a short anti-fear ally aura, reactive Raise a Shield or Take Cover against a repeated spell, magical direction tracing, visible Sustain feedback, a shared reality anchor, spell-defense seams, a borrowed saving-throw modifier, and a choice between recomposing or publicly telegraphing the next spell.
- Clarified DR-005, DR-008, DR-009, DR-013, DR-018, DR-020, DR-021, DR-022, and DR-030 for duration reduction, counteract targets, illusion procedures, trigger timing, dangerous terrain, qualifying wards, fortune strength, ally defense, and perceptible secret-action triggers.
- Reclassified **Proof of Safety** and the redesigned **Your Turn** as Strong. Removed the post-spell Step from **Hold the Line**.
- Added `docs/MECHANICAL_REVIEW_DEFIANT_REVERSALS.md`.
- Updated English and German localization, README, pack documentation, Card Bible, and validation tests.
- Marked Defiant Reversals as mechanically reviewed and passed.

## 0.2.2

- Added DR-021 through DR-030 to **Defiant Reversals**.
- Completed the first 30-card draft of the pack.
- Added shared fortune against repeated spells, adjacent-ally protection, renewed resistance to ongoing mental magic, reaction suppression, immediate allied utility actions, reactive escape from repeated casting positions, returned dramatic flourishes, borrowed spell echoes, defiant Demoralize attempts, and misfortune against the caster's stealth or deception.
- Added two new strong-impact reversals, **Shared Defiance** and **The Spell Blinks First**.
- Kept all new cards manual because they depend on the original caster, allied choices, reactions, repeated spell identity, fortune and misfortune effects, or conditional consumption.
- Updated English and German localization, README, pack documentation, Card Bible, and tests.
- Marked Defiant Reversals as ready for its full mechanical review.

## 0.2.1

- Added DR-011 through DR-020 to **Defiant Reversals**.
- Expanded the pack to 20 cards.
- Added returned magical feedback, concentrate-triggered reactions, repeat-spell defenses, shared caster tracking, exposed casting lines, movement-reaction protection, pursuit through collapsing magic, reclaimed spell terrain, and ward-crossing consequences.
- Added Reflex-, Fortitude-, and Will-specific cards while retaining general cards for every spell saving throw.
- Added the second strong-impact reversal, **Follow the Collapse**, which permits an immediate half-Speed advance toward the original caster.
- Kept all new cards manual because they depend on the original caster, cover degrees, action triggers, immediate movement, spell-created terrain, magical barriers, or conditional consumption.
- Updated English and German localization, README, pack documentation, Card Bible, and tests.

## 0.2.0

- Added the optional **Defiant Reversals** pack.
- Added DR-001 through DR-010 for critical successes on saving throws against spells.
- Added explicit `attackTraits: ["spell"]` filtering so nonmagical saving throws cannot enter the pack.
- Added Reflex-, Fortitude-, and Will-specific cards alongside tradition-neutral general cards.
- Added resistance rewards involving immediate movement, fear recovery, repeated-spell adaptation, forced-movement defense, duration reduction, magical insight, signature recognition, and ally support.
- Kept all new cards manual because they depend on the original caster, immediate actions, repeated spell identity, ongoing effects, or conditional consumption.
- Documented that beneficial saving-throw consequences apply to the saving creature (`source`), not the caster.
- Raised the required PF2E Critical Forge version to `0.9.3-dev`, which includes corrected positive-effect targeting for critically successful saving throws.
- Updated English and German localization, README, pack documentation, Card Bible, and tests.

## 0.1.3

- Applied the full mechanical review of Miscast Repercussions.
- Redesigned MR-003, MR-007, MR-008, MR-018, MR-025, MR-029, and MR-030 to remove redundant defense bonuses, location-only auditory effects, duplicate action sequencing, repeated applause, and duplicate reactive Steps.
- Renamed the displayed title of MR-029 from **Applause from Nowhere** to **Unsolicited Footnotes** while retaining its stable card ID.
- Corrected MR-012 timing, MR-015 legal-target handling, MR-017 invisibility wording, MR-023 first-action timing, and MR-028 grid geometry.
- Added `docs/MECHANICAL_REVIEW_MISCAST_REPERCUSSIONS.md`.
- Updated English and German localization, pack documentation, the Card Bible, and validation tests.
- Marked Miscast Repercussions as mechanically reviewed and passed.

## 0.1.2

- Added MR-021 through MR-030 to Miscast Repercussions.
- Completed the first 30-card draft of the pack.
- Added frayed spell patterns, malformed magical geometry, delayed residue, persistent magical links, unfinished casting structures, delayed shadows, impossible voices, symmetrical firing lines, unseen applause, and predictive reality marks.
- Added the second strong-impact card, Familiar Geometry, whose cover interaction can benefit allies and enemies alike.
- Kept all new consequences manual because they depend on immediate choices, action sequencing, reactions, retargeting, battlefield geometry, or conditional consumption.
- Updated German and English localization, pack documentation, the Card Bible, and validation tests.
- Marked Miscast Repercussions as ready for its full mechanical review.

## 0.1.1

- Added MR-011 through MR-020 to Miscast Repercussions.
- Expanded the pack to 20 cards.
- Added warped-space consequences, unstable casting ground, collapsed spell angles, immediate Seek opportunities, folded range, magical afterimages, visible and audible signatures, selective concealment, and repeatable magical tells.
- Added the first strong-impact card, Colors Out of Order, with a one-action concentrate option to end it early.
- Kept all new consequences manual because they depend on target-specific positioning, one-use defenses, perception states, or conditional consumption.
- Updated German and English localization, pack documentation, the Card Bible, and validation tests.

## 0.1.0

- Added the Arcane Backlash extension module framework.
- Added the optional Miscast Repercussions pack.
- Added the first 10 cards, MR-001 through MR-010.
- Added support for critical failures on spell attacks through the `spellCriticalFumble` category.
- Supported arcane, divine, occult, and primal spell traditions without restricting the initial cards to a single tradition.
- Added manual tactical consequences involving magical recoil, manipulate actions, target-specific spell defense, spellcasting reactions, unstable terrain, action sequencing, revealed position, repositioning, recalculation, and interrupted spell-attack follow-through.
- Added German and English localization.
- Added pack documentation and the initial Card Bible.
- Added structural and startup-order validation tests.
