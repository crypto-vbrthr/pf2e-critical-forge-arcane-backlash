# Arcane Backlash Mechanical Review

## Pack 3 of 4: Spell Attack Surges

| Field | Value |
|---|---|
| Module | PF2E Critical Forge: Arcane Backlash |
| Reviewed Version | 0.3.2; revision applied in 0.3.3 |
| Pack | Spell Attack Surges |
| Cards Reviewed | 30 |
| Status | Completed |
| Review Result | Passed after revision |
| Review Date | 2026-07-21 |

## Scope

This review evaluates mechanics only:

- schema, registration, and startup validity
- PF2e rules clarity
- mechanical uniqueness within the pack
- overlap with Core, Martial Consequences, Miscast Repercussions, and Defiant Reversals
- source and target ownership of beneficial and detrimental effects
- action economy, free-action timing, reaction suppression, and conditional consumption
- spell range, cover, concealment, line of effect, alternate origins, and Sustain handling
- automated Effect Engine variety and table usability

Identity, prose style, translation quality, final statistics, and module-wide certification remain separate review phases.

## Executive Summary

Spell Attack Surges has a strong magical identity. Its best cards make a critical spell attack leave a usable magical structure behind: a resonance mark, a stable thread of range, a readable angle, a temporary resistance, a conduit through an ally, or an extra pulse that can Sustain an existing effect.

The pack is technically valid, applies caster benefits to the source and target penalties to the struck target, and contains the intended mix of automated and manual consequences.

The main review risks are:

1. two cards reproduce Core spell-critical-hit mechanics, including one exact AC-bonus duplicate;
2. several cards reproduce established Martial Consequences rewards with magical prose but the same table result;
3. two cards inside Spell Attack Surges use nearly the same alternate-origin mechanic;
4. the ally-support block repeats effects already assigned to Martial Openings and Defiant Reversals;
5. one card assumes the struck creature can create magical effects and can therefore be completely blank;
6. a trait-selection card uses the undefined phrase “meaningful trait” and allows broad structural traits to become generic bonus keys;
7. the automated cards are numerous enough, but nine of the ten are simple modifier effects, so their mechanical variety is narrower than their narrative variety;
8. several alternate-origin, line-of-effect, cover, and free-action effects need more exact PF2e wording.

A focused redesign of nine cards is recommended. Nine additional cards need targeted wording, weighting, eligibility, or scope adjustments. The remaining twelve cards pass the mechanical review without required changes.

## Validation

- Structural validation: passed
- Startup-order validation: passed
- ZIP integrity: passed
- JavaScript syntax validation: passed
- Spell Attack Surges cards registered: 30
- Total module cards registered: 90
- Trigger category: `spellCriticalHit`
- Tradition restrictions: none; all four traditions supported
- Automated effects: 10
- Manual cards: 20
- Source-side automated effects: 9
- Target-side automated effects: 1
- Localization and unique-ID validation: passed

## Findings Summary

| Classification | Count |
|---|---:|
| Required redesign | 9 |
| Targeted adjustment | 9 |
| Passed without required change | 12 |

## Required Redesigns

### R-01: SAS-001 `Power Still Singing`

The card grants a one-round bonus to spell attack rolls. Core already contains `Arcane Precision`, which grants the same gameplay reward after a critical spell attack. Changing the modifier type from circumstance to status and making the card tradition-neutral does not create a distinct table moment. For arcane casters, the two cards are functionally alternate paint on the same mechanism.

Recommendation: retain the idea of power continuing to resonate, but turn it into a non-generic benefit such as changing how the next spell attack interacts with multiple attack penalty, carrying a trait into a different spell, or creating a target-switching option.

### R-02: SAS-013 `Widened Aperture`

A free Step immediately before the next attack is already an established Martial Consequences pattern, particularly in Combat Momentum. The restriction to a spell attack and protection from the original target's reactions are useful, but the actual table event remains another pre-attack Step.

Recommendation: keep the aperture theme but make the opening affect spell placement, targeting, or the space left by the first spell rather than moving the caster through another free Step.

### R-03: SAS-014 `Effortless Transition`

This is effectively the spell-triggered version of Combat Momentum's `No Time to Answer`: declare a later action protected and prevent the original target from using reactions triggered by it. Excluding Cast a Spell changes which action receives the protection, but not the core gameplay.

Recommendation: redesign the transition around carrying spell structure into a non-spell action, such as extending magical reach to an Interact, Seek, or Recall Knowledge action, rather than another general reaction-denial token.

### R-04: SAS-016 `Backwash Barrier`

Core's `Protective Afterglow` already grants the caster a +1 circumstance bonus to AC for 1 round after a critical spell attack. `Backwash Barrier` is an exact mechanical duplicate with a different title.

Recommendation: preserve the returning barrier image but make it directional, target-specific, consumable against one attack, or capable of altering cover rather than applying the same universal AC modifier.

### R-05: SAS-021 `Shared Frequency`

Martial Openings' `Guard Drawn Wide` already grants an ally a +1 circumstance bonus to its next attack against the critically hit target. Allowing any attack roll instead of a Strike does not provide sufficient differentiation.

Recommendation: make the shared frequency magical, for example by letting the ally borrow one spell trait, identify the target's magical defenses, or contribute to a counteract or resonance effect.

### R-06: SAS-022 `Follow the Glow`

The card combines the ally-facing versions of SAS-006 and SAS-007 while also overlapping Martial Openings' cover-removal cards. The result is another ally attack that ignores concealment or reduces cover, a space already occupied several times across the ecosystem.

Recommendation: replace cover and concealment reduction with a different use of the glow, such as tracing teleportation, marking an area, enabling a special reaction, or revealing which defense the target will use against a spell.

### R-07: SAS-023 `Borrowed Insight`

Immediate Recall Knowledge has already appeared in Defiant Reversals and Martial Openings, and a previous review deliberately removed further generic Search, Interact, and Recall Knowledge bundles. Adding an ally and a +1 bonus does not create a new mechanical identity.

Recommendation: share a concrete fact learned from the successful spell instead of granting another free Recall Knowledge action. The ally might reuse the caster's result, identify one trait without rolling, or prepare a specific response to a revealed magical feature.

### R-08: SAS-024 `Arc Between Allies`

Defiant Reversals' `Counterexample` already grants an ally a +1 circumstance bonus to the next saving throw against a spell from the relevant creature. The fallback to any spell makes SAS-024 more reliable but also less tied to the triggering critical hit.

Recommendation: use the arc as a genuinely shared magical circuit, such as dividing forced movement, redirecting a short magical condition, or letting the ally use the caster's position for one defense.

### R-09: SAS-029 `Helpful Afterimage`

SAS-025 `Conduit Open` and SAS-029 both allow a later spell to determine range, cover, and line of effect from a space other than the caster's. One uses a willing ally and one uses the caster's former space, but the underlying rules procedure is nearly identical.

Recommendation: retain only one alternate-origin card. Redesign the afterimage around repeating a harmless aspect of the spell, preserving a target lock, creating a decoy, or reacting when a different target enters the original line.

## Targeted Adjustments

### A-01: SAS-004 `Spellborne Confidence`

A +1 circumstance bonus only to Will saves against mental effects is much narrower than SAS-003's +1 status bonus to all saving throws, yet SAS-004 has weight 2. The card is likely to appear more often while applying less often.

Recommendation: reduce the weight to 1, increase the narrow bonus, or add a tightly themed fallback that does not repeat frightened reduction from Combat Momentum.

### A-02: SAS-008 `Echo in the Aura`

The description is about reading the original target's aura, but the automated effect grants a status bonus to all Arcana, Nature, Occultism, and Religion checks for 1 round, including checks unrelated to the target or the spell. It is also likely to expire without a relevant action window.

Recommendation: limit the benefit to the original target, its active magic, or the triggering spell. A one-use +2 circumstance bonus to Recall Knowledge or Identify Magic would better match the fiction and avoid a broad four-skill buff.

### A-03: SAS-012 `Clean Geometry`

The card intentionally overrides normal cover geometry, but it should say so explicitly. Cover is normally measured center to center, while line of effect concerns an unobstructed path to a target, point of origin, or creation point. “Choose any corner” is usable on a grid, but the card should define that corner as the temporary origin for this attack's cover and line-of-effect checks.

Recommendation: state that the chosen corner replaces the caster's normal origin only for determining cover and line of effect for the qualifying spell attack.

### A-04: SAS-015 `Trait in Harmony`

“Choose one meaningful trait” is not a rules category. Excluding attack, concentrate, manipulate, and tradition traits still leaves broad structural traits such as cantrip or focus, which can turn the card into another generic next-spell-attack bonus.

Recommendation: define an explicit exclusion list for structural traits or restrict the choice to a damage, energy, elemental, mental, emotion, sensory, curse, illusion, light, darkness, teleportation, or similarly descriptive trait approved by the GM.

### A-05: SAS-018 `Stable Center`

The automated +1 circumstance bonus to Fortitude DC and Reflex DC is mechanically close to Combat Momentum's protection against Shove, Reposition, and Trip. It is also a narrow effect with weight 2 and little connection to the struck target.

Recommendation: reduce the weight or make the stability specifically magical, target-specific, or consumable against forced movement and control effects rather than applying a generic one-round DC modifier.

### A-06: SAS-019 `Harmonic Resistance`

Resistance 3 to all energy damage is valid within the Effect Engine, but the result is broader than the triggering resonance. A force, vitality, or purely physical spell attack can still tune the caster against every energy type, while a high-level elemental spell produces the same fixed value as a low-rank cantrip.

Recommendation: tie the resistance to one damage type or energy trait of the triggering spell, with a clear fallback for spells that have no qualifying type. If dynamic scaling is not available, the fixed value can remain modest.

### A-07: SAS-020 `Magic Knows Its Way Back`

The struck target might have no spells or magical abilities. In that common case the card is completely blank, despite being rated Moderate.

Recommendation: add a target-relevant fallback or redefine the benefit so it can apply to one effect created by the original target without assuming that target is a spellcaster.

### A-08: SAS-025 `Conduit Open`

The card is an excellent signature effect but needs tighter targeting language. The caster remains responsible for choosing legal targets and must still meet any perception requirements. The ally's space can supply range and line of effect, but should not silently override spell text that requires the effect to originate from the caster or use a self-centered area.

Recommendation: explicitly preserve the caster's target-perception requirements, exclude self-centered areas and effects whose text fixes the origin to the caster, and state how cones and lines are oriented if they remain eligible.

### A-09: SAS-030 `The Weave Takes Interest`

The three choices are individually usable, but they repeat existing clusters: Anchor overlaps Stable Center, Trace overlaps No Place to Fade and Colors Remember, and Clarify overlaps Echo in the Aura, Borrowed Insight, and Defiant Reversals. The card also asks the table to retain three miniature rules before choosing one.

Recommendation: keep the three-choice identity but replace at least two options with effects not already represented in the pack. Each option should have one short trigger and one short resolution.

## Passed Without Required Change

The following cards are mechanically distinct, sufficiently clear, and appropriately limited for the draft:

- SAS-002 `Steady Casting Hand`
- SAS-003 `Resonant Guard`
- SAS-005 `Perfect Release`
- SAS-006 `Resonance Mark`
- SAS-007 `Pattern Exposed`
- SAS-009 `No Place to Fade`
- SAS-010 `Spellshadow`
- SAS-011 `Extended Thread`
- SAS-017 `Reactions Drowned Out`
- SAS-026 `Reality Nods Once`
- SAS-027 `Colors Remember`
- SAS-028 `The Spell Wants Another Word`

## Particularly Strong Pack-Identity Cards

The following cards best express the intended identity of Spell Attack Surges:

- `Steady Casting Hand`
- `Resonance Mark`
- `Pattern Exposed`
- `No Place to Fade`
- `Extended Thread`
- `Clean Geometry`
- `Trait in Harmony`
- `Reactions Drowned Out`
- `Harmonic Resistance`
- `Conduit Open`
- `The Spell Wants Another Word`

These cards make the critical hit leave behind a usable magical structure rather than merely granting a generic combat bonus.

## Automated Effect Review

| Automated pattern | Count |
|---|---:|
| Positive status modifier | 5 |
| Positive circumstance modifier | 3 |
| Target-side circumstance penalty | 1 |
| Resistance | 1 |
| **Total automated cards** | **10** |

The pack meets the goal of visibly using the Effect Engine, but nine of the ten automated cards are modifier effects. During revision, at least some redesigned cards should remain automated while using a broader mix of supported components or more precise predicates. The goal is not to maximize automation, but to avoid ten different magical stories collapsing into variations of `+1 for 1 round`.

## Impact and Weight Distribution

| Impact | Cards |
|---|---:|
| Light | 4 |
| Moderate | 22 |
| Strong | 4 |

Three Light cards have weight 2: SAS-004, SAS-018, and SAS-026. SAS-026 is broad enough to justify the extra frequency. SAS-004 and SAS-018 are much narrower and should be reconsidered as noted above.

## Rules Notes

- SAS-006 correctly distinguishes concealed and hidden by reducing the normal flat-check burden rather than pretending the conditions are identical.
- SAS-007 and SAS-022 use the recognizable lesser, standard, and greater cover ladder, but should avoid duplicating the same gameplay across self and ally cards.
- SAS-028 appropriately states that a free Sustain does not bypass an effect's frequency or other requirements. Sustaining more than once in a turn does not extend a sustained duration beyond the normal endpoint, though a spell's special Sustain benefit can still matter.
- SAS-025 and SAS-029 are powerful because an area's point of origin controls line of effect to creatures inside that area. Any alternate-origin card therefore needs especially exact eligibility and perception language.
- Triggered free actions and reactions compete under the normal one-action-per-trigger limitation. Immediate card-granted actions should remain clearly tied to their triggering critical hit.

## Final Assessment

Spell Attack Surges is one of the most promising Arcane Backlash packs. It already contains several signature cards that could not be mistaken for weapon-critical effects. Its main weakness is not lack of imagination, but inherited ecosystem overlap: several early rewards recreate Core or Martial Consequences mechanics, while the ally block repeats Defiant Reversals.

After nine redesigns and nine targeted adjustments, the pack should retain approximately ten directly applicable effects while becoming considerably more varied and more recognizably magical.

**Mechanical Review Result: Passed after revision in 0.3.3**

## Revision Applied in 0.3.3

The nine required redesigns were completed:

- SAS-001 now modifies a qualifying multiple attack penalty against a different target instead of granting a generic spell-attack bonus.
- SAS-013 creates a two-segment magical aperture beside the original target instead of granting another free Step.
- SAS-014 carries the remaining spell structure into a remote Interact with a small unattended object.
- SAS-016 is now a one-attack, target-specific cover barrier rather than a duplicate universal AC bonus.
- SAS-021 now applies weakness 2 to damage from spells, creating true shared magical frequency and a non-modifier Effect Engine component.
- SAS-022 reveals the original target's lowest current saving-throw defense to one ally.
- SAS-023 shares one concrete Recall Knowledge fact instead of granting another immediate Recall Knowledge action.
- SAS-024 now forms a voluntary circuit that can transfer 1 point of frightened or stupefied from an ally to the caster.
- SAS-029 now creates an automated concealed afterimage rather than a second alternate spell origin.

The nine targeted adjustments were also applied:

- SAS-004 now has weight 1 and grants a narrow +2 circumstance bonus.
- SAS-008 is restricted to qualifying Recall Knowledge and Identify Magic checks with a +2 circumstance bonus.
- SAS-012 explicitly replaces the normal origin for cover and line-of-effect checks.
- SAS-015 defines eligible descriptive traits and excludes structural traits.
- SAS-018 now has weight 1.
- SAS-019 dynamically follows a damage type of the triggering spell and is applied manually.
- SAS-020 includes a nonmagical fallback saving throw.
- SAS-025 preserves perception requirements and excludes self-centered or fixed-origin spells.
- SAS-030 now offers Hush, Sheathe, or Knot, replacing the overlapping Anchor, Trace, and Clarify options.

Post-revision distribution:

- 30 cards
- 9 direct Effect Engine effects
- 21 manual tactical consequences
- 3 Light, 22 Moderate, and 5 Strong cards

**Mechanical Review Status: Passed**
