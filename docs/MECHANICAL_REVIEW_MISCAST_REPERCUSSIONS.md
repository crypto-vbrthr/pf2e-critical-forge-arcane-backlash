# Arcane Backlash Mechanical Review

## Pack 1 of 4: Miscast Repercussions

| Field | Value |
|---|---|
| Module | PF2E Critical Forge: Arcane Backlash |
| Reviewed Version | 0.1.2 |
| Revision Applied | 0.1.3 |
| Pack | Miscast Repercussions |
| Cards Reviewed | 30 |
| Final Result | **Passed after revision** |
| Review Date | 2026-07-20 |

## Applied Revision Summary

- MR-003 now creates a target-chosen feedback zone instead of another later-spell defense bonus.
- MR-007 now enables sight-independent reaction triggers without making the caster observed.
- MR-008 now requires changing either the repeated spell or original target, with an optional realignment action.
- MR-018 now leaves a false casting origin that affects range, cover, and line of effect.
- MR-025 now occupies a hand or equivalent casting appendage instead of duplicating concentrate sequencing.
- MR-029 is now **Unsolicited Footnotes**, replacing the duplicated applause premise with visible argumentative annotations.
- MR-030 now grants predictive defensive options rather than another pre-roll Step.
- MR-012, MR-015, MR-017, MR-023, and MR-028 received the timing, legal-target, visibility, first-action, and grid-geometry corrections identified by the review.

All structural, startup-order, syntax, localization, and ZIP integrity checks pass in version 0.1.3.

---

## Original 0.1.2 Review Record

## Pack 1 of 4: Miscast Repercussions

| Field | Value |
|---|---|
| Module | PF2E Critical Forge: Arcane Backlash |
| Reviewed Version | 0.1.2 |
| Pack | Miscast Repercussions |
| Cards Reviewed | 30 |
| Status | Completed |
| Review Result | Revision Required |
| Review Date | 2026-07-20 |

## Scope

This review evaluates mechanics only:

- schema and startup validity
- PF2e rules clarity
- mechanical uniqueness within the pack
- overlap with current Core, Arsenal, and Martial Consequences cards
- relative power and card weights
- timing and action economy
- range, cover, concealment, sensory, and reaction handling
- compatibility with spell attacks from all four traditions
- table usability and manual resolution speed

Identity, prose style, translation quality, final statistics, and module-wide certification remain separate review phases.

## Executive Summary

Miscast Repercussions already has a strong identity. Its best cards do not merely penalize spell attack rolls; they make failed magic distort space, cling to the caster, reveal magical signatures, leave residue on the battlefield, or give the original target a strange tactical answer. The pack is clearly distinct from physical fumble decks and avoids destructive outcomes such as lost spell slots, damaged spellbooks, broken foci, or uncontrolled damage to allies.

The thirty cards are structurally valid and contain several excellent signature mechanics. The strongest examples include lateral magical recoil, a spell leaving difficult terrain behind, a target Seeking along the returning echo, folded distance, selective concealment, an unstable shield-shaped spell pattern, and a spell strand catching on the original target.

The main review risks are:

1. two later-spell-defense cards that are mechanically too close;
2. two position-dependent spell-attack penalties with effectively identical results;
3. two auditory cards whose effects are partly or entirely supplied by normal imprecise-hearing rules;
4. two action-sequencing cards that overlap because most spellcasting uses the concentrate trait;
5. two nearly identical reactive-Step cards;
6. one direct narrative duplicate of existing Core applause cards;
7. several timing or wording issues involving the caster's next turn, legal spell range, invisibility, and grid geometry.

A focused redesign of seven cards is recommended. Five additional cards need timing, wording, or geometry adjustments. The remaining eighteen cards pass the mechanical review without required changes.

## Validation

- Structural validation: passed
- Startup-order validation: passed
- ZIP integrity: passed
- JavaScript syntax validation: passed
- Miscast Repercussions cards registered: 30
- Total module cards registered: 30
- Trigger category: `spellCriticalFumble`
- Spell traditions restricted: none
- Arcane, divine, occult, and primal spell attacks supported
- Automated effects: 0
- Manual cards: 30
- Localization and unique-ID validation: passed

## Findings Summary

| Classification | Count |
|---|---:|
| Required redesign | 7 |
| Targeted adjustment | 5 |
| Passed without required change | 18 |

## Required Redesigns

### R-01: MR-003 `Feedback Pulse`

Current effect:

- the original target gains a +1 circumstance bonus to AC against the caster's next spell attack.

MR-020 `Magical Tell` already grants the same target a +1 circumstance bonus to AC or a saving throw against the caster's next spell. MR-020 covers the same gameplay and also supports save-based spells. Core's `Static in the Formula` additionally occupies the broader space of a short spell-attack penalty.

The card is therefore the least distinctive member of the later-spell-defense cluster.

Recommendation: redesign it around the returning pulse itself, such as a target-specific reaction, a brief disturbance of the caster's current space, or a consequence tied to the next spell's traits rather than another +1 defense bonus.

### R-02: MR-007 `Lingering Syllable`

Current effect:

- every creature that can hear the caster knows which space the caster occupies.

Under PF2e's sensory rules, hearing is an imprecise sense. A creature that can hear a noisy creature generally already knows its location, though the creature may remain hidden rather than observed. The repeating syllable creates the very noise needed for that normal rule, leaving the card with little or no additional gameplay.

Recommendation: replace the location-only result with a real magical-auditory consequence, such as interfering with auditory actions, making the caster's next spell easier to identify, or allowing one clearly defined reaction to the repeated syllable.

### R-03: MR-008 `Crossed Intent`

Current effect:

- the next spell attack against the same target takes a -1 circumstance penalty unless the caster moves to another space.

MR-013 `Collapsed Angle` gives the original target lesser cover against the caster's next spell attack from the same space. Lesser cover supplies the same +1 AC difference, and moving also ends that card. The two cards therefore present the same tactical choice and practically the same modifier.

Recommendation: keep the mental or intentional theme but replace the relocation-for-+1 structure. The spell might resist selecting the same target, distort target priority, or create a non-numeric consequence when the caster repeats the target.

### R-04: MR-018 `Echoing Presence`

Current effect:

- creatures that hear the caster gain +2 to Seek the caster;
- on a failed Seek, they learn the direction of the caster's space.

The +2 bonus can matter, but the failed-check rider is largely redundant. A creature that can hear the magical echo already has an imprecise auditory sense of the caster's location. The narrative also says the echo comes from several directions while the mechanics make the caster easier to locate, pulling in opposite directions.

Together with MR-007, MR-017, MR-027, and MR-029, this also overpopulates the audible-signature cluster.

Recommendation: redesign it into a different kind of magical echo, perhaps one that repeats a trait, creates a false origin, interferes with reactions, or leaves a temporary echo at the casting space.

### R-05: MR-025 `Unfinished Ending`

Current effect:

- after the caster first uses a concentrate action, the immediately following action cannot also have the concentrate trait;
- the caster can spend one concentrate action to end the repercussion.

MR-006 `Broken Cadence` already prevents consecutive Cast a Spell actions once. Since most spellcasting activities have the concentrate trait, MR-025 reproduces much of the same action-sequencing gameplay while applying to a broader set of actions. The optional concentrate action also resembles the stabilizing action used by several other cards.

Recommendation: redesign the unfinished structure around a different cost or choice, such as maintaining a harmless magical remnant, completing a specific gesture, or allowing the original target to exploit the incomplete ending.

### R-06: MR-029 `Applause from Nowhere`

Current effect:

- unseen applause prevents Hide and Create a Diversion from creatures that hear it;
- the first enemy to Demoralize the caster gains +1.

The added mechanics are usable, but the central image directly duplicates two existing Core concepts:

- Spell Fumble: `Applause Sign`
- Generic Fumble: `Polite Applause`

A third invisible-audience applause card under the same Critical Forge installation would feel repeated before its rules text is even read.

Recommendation: replace the applause premise entirely while retaining the dry magical humor. A heckling familiar voice, unsolicited magical annotation, argumentative runes, or an offended environmental response would preserve the tone without repeating the Core joke.

### R-07: MR-030 `Reality Takes Notes`

Current effect:

- if the caster repeats the same spell attack against the original target, that target may use its reaction to Step before the roll;
- the caster may retarget if the Step invalidates the target.

MR-026 `Shadow Arrives Late` already grants the original target the same reaction timing, the same Step, the same invalid-target check, and the same retargeting permission. MR-030 adds only the requirement that the same spell attack be repeated.

Recommendation: preserve the excellent “reality records the error” theme but use a different payoff. The recorded spell could become easier to identify, expose one of its traits, leave a visible trajectory, or give the target a defensive option other than another pre-roll Step.

## Targeted Adjustments

### A-01: MR-012 `Unstable Casting Ground`

The card expires at the start of the caster's next turn. A typical spell attack consumes two actions, leaving only one action after the triggering fumble. The caster will often have no practical opportunity to Cast another Spell before the card expires, making a Moderate result easy to ignore.

Recommendation: extend the window through the end of the caster's next turn. Moving to another space should still end the repercussion harmlessly.

### A-02: MR-015 `Folded Distance`

The card says the repercussion is consumed when the next spell attack is declared, even if the altered distance makes the target out of range. PF2e normally requires a legal target when an action is chosen. The current wording does not clearly say whether the spell is lost, whether the target choice is rejected before casting, or whether the caster can choose another target.

Recommendation: apply the altered distance while checking whether the target is legal, before the caster commits the spell. Clearly state whether an out-of-range result leaves the repercussion unconsumed or allows another eligible target.

### A-03: MR-017 `Luminous Outline`

The card says the caster cannot become hidden or undetected from the original target, while also saying concealment and invisibility function normally. Those statements conflict. Invisibility normally makes a creature hidden when its space is known, and potentially undetected when it is not.

Recommendation: state the intended result directly. A clean version would make the target always know the caster's space and prevent the caster from becoming undetected from that target, while still allowing concealment or invisibility to impose their normal flat check.

### A-04: MR-023 `Delayed Spark`

The card begins: “At the start of your next turn, before you take your first action, you must either Step, spend a single action ... or let it flare.” Spending an action before taking the first action is internally awkward.

Recommendation: phrase the choice as a requirement on the first action of the turn. For example, the first action must be Step, the first action must be a concentrate action used to disperse the spark, or the spark flares before the caster acts.

### A-05: MR-028 `Familiar Geometry`

The current effect draws a zero-width line through the centers of two spaces and applies to attacks made “entirely along that line.” On a grid, especially with large creatures or non-cardinal angles, this can be difficult to interpret and may produce almost no eligible attacks.

Recommendation: define a 5-foot-wide corridor or another grid-friendly area. State precisely when an attacker and target count as attacking through that corridor. The symmetrical benefit and lesser-cover limitation can remain.

## Passed Cards

The following cards are mechanically distinct enough and require no change in this review:

- MR-001 `Arcane Recoil`
- MR-002 `Resonant Hands`
- MR-004 `Spellshock`
- MR-005 `Energy Grounding`
- MR-006 `Broken Cadence`
- MR-009 `Forced Recalculation`
- MR-010 `Empty Follow-Through`
- MR-011 `Reality Pushes Back`
- MR-013 `Collapsed Angle`
- MR-014 `Targeted by the Echo`
- MR-016 `Afterimage`
- MR-019 `Colors Out of Order`
- MR-020 `Magical Tell`
- MR-021 `Frayed Pattern`
- MR-022 `Wrong Shape`
- MR-024 `Spell Snag`
- MR-026 `Shadow Arrives Late`
- MR-027 `Voice of the Wrong Element`

MR-001 and MR-011 both use forced movement, but their tactical outcomes remain different: one creates direct recoil away from the target, while the other creates lateral spatial displacement.

MR-005 and MR-021 both affect movement near the casting position, but one creates a battlefield terrain space and the other traps the caster in loose magical threads. They remain distinguishable at the table.

MR-006 and MR-010 both alter action order, but one prevents consecutive spellcasting once while the other immediately blocks only a spell attack in the next action. They are sufficiently different once MR-025 is redesigned.

## Balance and Distribution

### Impact

| Impact | Cards |
|---|---:|
| Light | 12 |
| Moderate | 16 |
| Strong | 2 |

The distribution is healthy. Most cards create short tactical complications rather than hard control. The two Strong cards are both broad but temporary perceptual or battlefield effects.

### Weight

| Weight | Cards |
|---|---:|
| 2 | 9 |
| 1 | 21 |

Three redesign candidates currently have weight 2: MR-003, MR-007, and MR-029. Their final weights should be reconsidered after redesign rather than inherited automatically.

### Resolution

| Resolution Type | Cards |
|---|---:|
| Automated effect | 0 |
| Manual tactical resolution | 30 |

The all-manual structure is acceptable for this pack. Most cards depend on geometry, original-target tracking, immediate choices, reaction timing, or conditional consumption that would become more cumbersome if forced into generic effect items.

### Repeated Mechanical Clusters

| Cluster | Cards | Review Result |
|---|---|---|
| Later spell defense | MR-003, MR-020 | MR-003 redesign |
| Relocate to avoid spell-attack modifier | MR-008, MR-013 | MR-008 redesign |
| Audible magical signature | MR-007, MR-017, MR-018, MR-027, MR-029 | MR-007, MR-018, MR-029 redesign; MR-017 wording adjustment |
| Action sequencing | MR-006, MR-010, MR-025 | MR-025 redesign |
| Reactive target movement | MR-012, MR-024, MR-026, MR-030 | MR-030 redesign; others remain distinct |
| Movement residue | MR-001, MR-005, MR-011, MR-021 | acceptable variety |
| Concealment and perception | MR-016, MR-019 | acceptable contrast |

The most overrepresented single tag is `spell-attack`, used by nine cards. This is understandable for a spell-attack-fumble pack, but the revisions should avoid creating further “next spell attack gets a modifier” results.

## Signature Cards

The following cards best express the current pack identity:

- MR-005 `Energy Grounding`
- MR-011 `Reality Pushes Back`
- MR-014 `Targeted by the Echo`
- MR-015 `Folded Distance`
- MR-019 `Colors Out of Order`
- MR-022 `Wrong Shape`
- MR-024 `Spell Snag`
- MR-027 `Voice of the Wrong Element`
- MR-028 `Familiar Geometry`, once its geometry is clarified

These cards feel specific to failed magic. They create effects that would be out of place in a weapon-fumble deck and therefore give Arcane Backlash a recognizable voice.

## Conclusion

Miscast Repercussions is mechanically promising and already more distinctive than a conventional list of spell-attack penalties. It passes structural and technical validation, but seven cards should be replaced and five should be clarified before the pack is certified.

Recommended next version: **0.1.3**

Required work for that version:

- redesign MR-003, MR-007, MR-008, MR-018, MR-025, MR-029, and MR-030;
- adjust MR-012, MR-015, MR-017, MR-023, and MR-028;
- update English and German localization;
- update the Card Bible, pack documentation, changelog, and tests;
- rerun structure, startup, syntax, localization, and ZIP validation.
