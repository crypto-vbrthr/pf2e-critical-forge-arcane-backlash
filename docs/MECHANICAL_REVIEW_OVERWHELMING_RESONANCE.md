# Arcane Backlash Mechanical Review

## Pack 4 of 4: Overwhelming Resonance

| Field | Value |
|---|---|
| Module | PF2E Critical Forge: Arcane Backlash |
| Reviewed Version | 0.4.2 → revised in 0.4.3 |
| Pack | Overwhelming Resonance |
| Cards Reviewed | 30 |
| Status | Completed |
| Review Result | Passed After Revision |
| Review Date | 2026-07-21 |

## Scope

This review evaluates mechanics only:

- schema, registration, startup, and Effect Engine validity
- PF2e rules clarity
- mechanical uniqueness within the pack
- overlap with Core, Arsenal, Martial Consequences, and the first three Arcane Backlash packs
- correct ownership of detrimental effects after a critically failed saving throw
- save-type eligibility and mindless exclusions
- action economy, reactions, movement costs, teleportation, cover, concealment, and line of effect
- conditional consumption and cards that can expire without producing an effect
- balance after an already severe critical failure against a spell
- automated-effect variety and practical Foundry use

Identity, final prose polish, translation review, final statistics, and module-wide certification remain separate review phases.

## Executive Summary

Overwhelming Resonance has a strong premise and several excellent signature cards. Its best designs make a critically failed save leave the target magically saturated in a way that changes what happens next: defenses leak, movement creates a fault line, resistance peels away, reality remembers a vacated space, or the target's words return with hostile editorial notes.

The pack is technically valid, correctly applies automated penalties to the creature that rolled the saving throw, and uses save-type filters sensibly. Fortitude, Reflex, and Will each retain a comparable eligible pool.

The principal review risks are:

1. three automated cards reproduce generic effects already used repeatedly in Core, Arsenal, or Martial Consequences;
2. several cards repeat mechanics from other Arcane Backlash packs, including the same concealment procedure, the same Step-or-Seek response to a concentrate action, and the same teleport-destination shift;
3. two pairs inside this pack compete for the same identity: OR-009 versus OR-020, and OR-012 versus OR-029;
4. OR-023 changes line of effect through a creature even though creatures normally provide cover rather than blocking line of effect, so the card has little or no normal rules effect;
5. one automated card can be completely blank on non-casters, and several manual cards are highly conditional despite Moderate or Strong classification;
6. eleven of the twelve Effect Engine cards are modifier effects, making the automation mechanically narrower than the stories suggest;
7. several movement, resistance, multi-space-creature, and reaction timings need more precise wording.

A focused redesign of eleven cards is recommended. Nine additional cards need targeted adjustment. Ten cards pass without required mechanical changes.

## Validation

- Structural validation: passed
- Startup-order validation: passed
- ZIP integrity: passed
- JavaScript syntax and JSON validation: passed
- Core card and Effect Schema validation: passed
- Overwhelming Resonance cards registered: 30
- Total module cards registered: 120
- Trigger category: `savingThrowCriticalFailure`
- Required attack trait: `spell`
- Tradition restrictions: none; all four traditions supported
- Automated effects: 12
- Manual cards: 18
- Automated effect target: saving creature (`source`) on all 12 cards
- Localization and unique-ID validation: passed

## Findings Summary

| Classification | Count |
|---|---:|
| Required redesign | 11 |
| Targeted adjustment | 9 |
| Passed without required change | 10 |

## Required Redesigns

### R-01: OR-003 `Dragged Through the Weave`

The card is another one-round, 5-foot penalty to all Speeds. The same mechanical result already appears repeatedly in Core and Arsenal, including `Wrong-Footed`, `Frozen Gesture`, `Primal Surge`, `Severed Strap`, `Buckled Knees`, and several reviewed expansion cards. Its weight of 2 makes this familiar result appear more often than most cards in the pack.

Recommendation: retain the image of invisible threads, but make them react to a specific movement choice, direction, magical area, or escape attempt rather than applying the ecosystem's standard all-Speed penalty again.

### R-02: OR-011 `Sensory Palimpsest`

This is mechanically the same one-round penalty to Perception and Perception DC as Martial Attack Fumbles' `Eyes on the Weapon`; only the modifier type and narrative source differ. It also continues the broad `-1 to a check and its DC` pattern already used by OR-004 through OR-006.

Recommendation: redesign the overwritten senses around false sensory information, selective detection, an altered Seek area, or a one-use misidentification rather than another universal Perception modifier.

### R-03: OR-012 `Voice Through Glass`

OR-012 and OR-029 affect the exact same four skills: Deception, Diplomacy, Intimidation, and Performance. OR-029's one-use misfortune effect is more memorable and more mechanically distinct. OR-012 also overlaps OR-006 on Deception and provides little combat value outside Deception, Intimidation, and a few specialized abilities.

Recommendation: keep OR-029 as the social-resonance signature card and redesign OR-012 around communication range, audible components, linguistic effects, command actions, or another consequence of a magically fractured voice.

### R-04: OR-013 `Projected Instability`

The automated penalty affects spell attacks, spell DC, and class DC. It can be entirely blank on many martial creatures and monsters, despite being Moderate. Against a caster it also overlaps OR-018 on spell attacks while adding two broad DC penalties that are not connected to any specific feature of the triggering spell.

Recommendation: redesign it into a result that remains relevant for every target, or provide a genuinely equivalent martial fallback. Avoid turning it into another general attack penalty.

### R-05: OR-015 `Spell-Stamped`

The next spell attack ignores concealed and reduces hidden from DC 11 to DC 5. This is almost exactly the procedure already used by Spell Attack Surges' `Resonance Mark`. The additional knowledge of the target's occupied space also overlaps Miscast Repercussions' `Luminous Outline`.

Recommendation: use the stamp for a new magical purpose, such as tracing a later teleport, exposing an active spell on the target, interacting with counteract checks, or triggering when the target crosses a ward or area boundary.

### R-06: OR-016 `Concentration Echo`

This mirrors Defiant Reversals' `Broken Concentration`: the first concentrate action triggers a reaction to Step or Seek, with the searched area tied to the other creature's location. Reversing which side receives the reaction does not create a substantially different table event.

Recommendation: make deliberate thought interact with the lingering resonance in a different way, such as repeating a harmless magical sign, briefly exposing the target's next intended action, or creating a one-use penalty tied to a concentrate check or DC.

### R-07: OR-018 `Static in the Aim`

A one-round `-1` to all attack rolls is a highly generic consequence and is already common throughout Arsenal. It does not express why this is overwhelming magical resonance rather than an ordinary injury, poor grip, or loss of balance.

Recommendation: redesign the static around a magical targeting failure, a target-switching restriction, interference with attacks through magical areas, or a one-use flat check that has a clear arcane cause.

### R-08: OR-020 `Aura Underfoot`

OR-020 repeats OR-009's exact choice structure: at the start of the next turn, spend the first action with concentrate or suffer a penalty for that turn. It also joins an already crowded movement cluster containing OR-003, OR-017, OR-027, and multiple other ecosystem cards. Weight 2 makes the overlap especially visible.

Recommendation: preserve the pooled-aura joke but replace the first-action tax and movement surcharge with a different tactical interaction involving the space, adjacent creatures, magical terrain, or the first action taken from that space.

### R-09: OR-023 `Spell-Torn Shadow`

The card treats the target's occupied spaces as empty only for line of effect while explicitly preserving cover. Under normal PF2e rules, creatures can provide lesser cover, but line of effect is generally blocked by solid physical barriers, not by an intervening creature. Since the card leaves cover unchanged, its special procedure usually changes nothing.

Recommendation: redesign the torn shadow around creature-provided cover, line of sight, an area's point of origin, or the target becoming a temporary conduit. Do not retain a line-of-effect exception that has no normal obstacle to remove.

### R-10: OR-024 `Reality Rejects the Shortcut`

OR-008 already lets a spell's caster shift a legal teleportation or precise-relocation destination by 5 feet. OR-024 repeats that same destination-shift procedure for willing self-teleportation, but is narrower and more likely to expire unused.

Recommendation: keep only one destination-shift card. Redesign OR-024 around the space left behind, delayed arrival, an exposed teleport trace, or another consequence that does not duplicate OR-008.

### R-11: OR-025 `Item Chorus`

OR-025 is largely a subset of OR-030. Both wait for an Activate-an-Item event and grant the original caster a reaction to Step or Take Cover. OR-030 also covers spellcasting and adds the declaration mechanic, making OR-025 the narrower version of the same reward.

Recommendation: keep the committee of magic items, but let the chorus reveal an item trait, interfere with invested-item secrecy, create a temporary resonance between items, or produce a different reaction from the caster.

## Targeted Adjustments

### A-01: OR-008 `Unmoored from Place`

The measured forced-movement branch should state what happens when another legal 5 feet along the path does not exist. The teleportation branch is correctly limited to another legal destination the spell could have selected, but the card should also state whether it applies to spells from any caster or only the original caster.

The card is Strong but can expire completely unused. Either add a modest fallback, broaden the trigger carefully, or reduce its impact classification.

### A-02: OR-009 `Ground It or Glow`

Spending a full first action is usually much more expensive than accepting `cannot Hide` and a `-1` Stealth penalty for one turn. The choice is therefore often illusory, while weight 2 makes the card unusually frequent.

Recommendation: reduce the weight to 1, make grounding provide an actual benefit, or make the ungrounded consequence relevant enough that both choices can matter. Retain the explicit start-of-turn timing.

### A-03: OR-010 `Wardline Fracture`

If multiple status or circumstance bonuses apply to the same defense, the card does not say which bonus is reduced or who chooses it. It should also trigger when the qualifying defense is actually calculated, rather than ambiguously when the target first “gains” a conditional bonus.

Recommendation: specify that the original caster chooses one applicable status or circumstance bonus when the AC or save against the spell is determined, and that the card is consumed only if the reduction changes that defense.

### A-04: OR-014 `Resonant Weakpoint`

The card should identify who chooses among multiple damage types; the original caster is the natural choice. The trait fallback should be limited to a trait that directly denotes a damage type or damaging energy, rather than any evocative spell trait.

The final fallback repeats OR-001's later-save penalty. Replace it with a different low-power result or make the card ineligible when no damage type can be established.

### A-05: OR-019 `Resistance Delamination`

The primary resistance-peeling effect is distinctive, but the common fallback is weakness 1 to damage from spells. Core's `Magical Saturation` already grants weakness 2 to damage from spells after a critical save failure, so most creatures without resistance receive a weaker copy of an existing Core card.

Recommendation: replace the fallback. Also specify how to choose the affected resistance when a spell deals multiple damage types or more than one resistance could apply to the same damage instance.

### A-06: OR-021 `Healing Pattern Rejected`

A reduction of 2 points of spell healing for one round is narrow, often expires unused, and is modest when it does trigger. `Moderate` overstates its average impact.

Recommendation: classify it as Light, add a small non-healing fallback, or broaden it without affecting mundane Medicine and non-spell healing. The new `healing-received` predicate should receive a direct Foundry runtime test with an actual healing spell, not only schema validation.

### A-07: OR-027 `Elastic Distance`

“Move action” includes actions that do not spend a pool of Speed in the same way as Stride, and creates ambiguity with Step, teleportation, and special movement. Step also cannot enter difficult terrain, so treating this surcharge as terrain-like movement needs explicit boundaries.

Recommendation: limit the trigger to a move action that uses one of the target's Speeds, exclude Step and teleportation explicitly, and reveal the extra cost before the target commits its path. Retain the nearest-legal-space fallback for insufficient movement.

### A-08: OR-028 `Echo Claims the Footprint`

For a Large or larger creature, several spaces can be vacated at once. The card does not state who chooses the marked space. “Until the start of that turn” is understandable but less precise than repeating “the target's next turn.”

Recommendation: state that the original caster chooses one space vacated by the movement and that the restriction lasts until the start of the target's next turn.

### A-09: OR-030 `Reality Keeps the Receipt`

The custom reaction should require the original caster to perceive the Cast a Spell or Activate an Item action. Step and Take Cover must still satisfy their normal requirements. The sequence should explicitly be: declaration, reaction decision and resolution, then the magical action resolves.

Recommendation: add those requirements without changing the card's distinctive information-timing identity.

## Passed Without Required Change

The following cards are mechanically distinct, sufficiently clear, and appropriately limited for the draft:

- OR-001 `Resonance Leak`
- OR-002 `Spellglass Fracture`
- OR-004 `Somatic Desynchronization`
- OR-005 `Geometry Out of Step`
- OR-006 `Thoughts Leak Sideways`
- OR-007 `Static Between Moments`
- OR-017 `Aftershock Line`
- OR-022 `Power Bleeds Sideways`
- OR-026 `Transparent Resonance`
- OR-029 `The Weave Misquotes You`

## Particularly Strong Pack-Identity Cards

The following cards best express Overwhelming Resonance:

- `Resonance Leak`
- `Static Between Moments`
- `Unmoored from Place`
- `Wardline Fracture`
- `Resonant Weakpoint`
- `Aftershock Line`
- `Resistance Delamination`
- `Healing Pattern Rejected`
- `Echo Claims the Footprint`
- `The Weave Misquotes You`
- `Reality Keeps the Receipt`

These cards make the target feel saturated by a spell rather than merely injured or generically penalized.

## Automated Effect Review

| Automated pattern | Count |
|---|---:|
| Modifier component | 11 |
| Movement component | 1 |
| Condition component | 0 |
| Weakness component | 0 |
| Resistance component | 0 |
| Other component | 0 |
| **Total automated cards** | **12** |

The pack successfully uses the Effect Engine more often than the first two Arcane Backlash packs, but the automation is extremely concentrated: eleven of twelve cards are FlatModifier variants. The stories cover fractured defenses, desynchronized bodies, sensory overwrites, healing rejection, unstable power, and aim static, yet most compile into `-1` or `-2` for one round.

Revision should preserve a useful number of automated cards, but diversify the actual components or use narrower predicates and one-use manual effects where the Effect Engine cannot express the concept cleanly. The goal is not maximum automation; it is for automated cards to remain as mechanically distinctive as their titles.

## Impact, Weight, and Save Distribution

### Impact

| Impact | Cards |
|---|---:|
| Light | 4 |
| Moderate | 20 |
| Strong | 6 |

The overall severity is reasonable for a pack triggered by a critical failure against a spell. The principal concern is not raw strength but conditional cards that carry a Moderate or Strong label while frequently doing nothing.

### Weight

Only three cards have weight 2:

- OR-003 `Dragged Through the Weave`
- OR-009 `Ground It or Glow`
- OR-020 `Aura Underfoot`

All three require redesign or adjustment. No elevated weight should remain merely because a card is simple to resolve.

### Eligible cards by save type

| Save type | Eligible cards |
|---|---:|
| Fortitude | 22 |
| Reflex | 21 |
| Will | 21 |
| Unrestricted by save type | 17 |

The save-type distribution is healthy and does not require rebalancing.

## Rules Notes

- Creatures can provide lesser cover, but line of effect is normally concerned with solid physical barriers and the effect's origin. This is why OR-023's current exception does not reliably alter normal spell resolution.
- Difficult terrain adds movement cost, while Step has its own restrictions and cannot enter difficult terrain. Cards that impose a custom movement surcharge should distinguish actions that spend a Speed from Step and teleportation.
- Triggered reactions and free actions remain limited by their stated triggers and normal requirements. A card-granted Step or Take Cover should say when it occurs and preserve the action's requirements.
- OR-029 correctly labels rolling twice and using the worse result as misfortune. It should continue to state that it does not combine with another misfortune effect on the same roll.
- OR-001 and OR-002 use spell predicates, which is enough to distinguish them from generic save and AC penalties even though the broad numerical pattern exists elsewhere.

## Final Assessment

Overwhelming Resonance has the right overall tone and contains several of Arcane Backlash's strongest ideas. Its problems come mainly from the size of the existing Critical Forge ecosystem: straightforward Speed, Perception, and attack penalties have already been used many times, and several later cards accidentally reproduce procedures from the module's own earlier packs.

The review should not remove the pack's directly applicable effects. It should replace generic modifier cards with more specific magical consequences, preserve the strongest dynamic cards, and tighten movement and reaction language. After eleven redesigns and nine targeted adjustments, the pack should remain balanced despite its severe trigger while feeling far more singular.

## Revision Applied in 0.4.3

All eleven required redesigns and nine targeted adjustments were implemented.

Key outcomes:

- generic Speed, Perception, social, and attack penalties were replaced with path recoil, selective false senses, communication limits, one-use defensive instability, and target-locking static;
- duplicate concealment, concentration-reaction, teleport-destination, line-of-effect, and magic-item reaction procedures were replaced;
- forced movement, defense-bonus reduction, dynamic damage types, resistance selection, Speed-based movement, large-creature footprints, and reaction timing were made explicit;
- the pack now contains 7 Effect Engine cards and 23 manual cards;
- the final impact distribution is 4 Light, 23 Moderate, and 3 Strong cards;
- all structural, startup, syntax, localization, ZIP, and Core schema validations pass.

**Mechanical Review Result: Passed After Revision**
