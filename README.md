# PF2E Critical Forge: Arcane Backlash

*Expand Critical Forge with unstable magic, resonant reversals, and consequences that refuse to end when the spell does.*

Arcane Backlash is an extension module for **PF2E Critical Forge**. It adds card packs for exceptional magical successes and failures across the arcane, divine, occult, and primal traditions.

The word **Arcane** in the module title describes magical strangeness in general. It does not limit the module to the arcane spell tradition.

## Version 0.4.2

The current release contains four optional packs:

- **Miscast Repercussions** - 30 mechanically reviewed cards for critical failures on spell attacks.
- **Defiant Reversals** - 30 mechanically reviewed cards for critical successes on saving throws against spells.
- **Spell Attack Surges** - 30 mechanically reviewed cards for critical successes on spell attacks.
- **Overwhelming Resonance** - 30 cards for critical failures on saving throws against spells.

Spell Attack Surges turns an exceptionally accurate spell into beneficial resonance. Its complete 30-card draft includes protected casting, warped range and line geometry, brief magical defenses, reaction suppression, harmonic resistance, allied resonance, conduit casting, immediate Sustain opportunities, helpful afterimages, improved magical analysis, reactive tracking, and spellshadows that cling to the target.

## Installation

Install and enable both modules:

1. PF2E Critical Forge 0.9.3-dev or newer
2. PF2E Critical Forge: Arcane Backlash

Then enable any desired Arcane Backlash packs in the module settings.

## Pack Boundaries

### Miscast Repercussions

Applies to `spellCriticalFumble` and reacts only to critical failures on spell attack rolls. It explores recoil, disrupted casting sequences, warped space, unstable residue, revealed magical signatures, and strange tactical aftermaths.

### Defiant Reversals

Applies to `savingThrowCriticalSuccess` and additionally requires the context trait `spell`. It therefore reacts only when a creature critically succeeds at a saving throw against a recognized spell. Beneficial consequences belong to the creature that made the saving throw, not to the caster.

### Spell Attack Surges

Applies to `spellCriticalHit` and supports all four spell traditions. It rewards the caster with short-lived magical resonance or exposes a readable pattern on the original target.

The pack includes:

- directly applicable saving-throw, mental-defense, magical-analysis, target-weakness, perception, social, and concealment effects
- target effects that hinder Stealth and Deception
- protection against reaction-based disruption
- temporary relief from concealment and cover
- immediate spellcasting-tool interaction
- reactive tracking when the original target tries to vanish
- dynamic resistance tied to the triggering spell, extended spell range, magical apertures, and cleaner line geometry
- shared magical frequency, revealed saving-throw defenses, concrete shared insight, and condition-transfer circuits
- tightly bounded ally conduits, concealed afterimages, and immediate Sustain opportunities
- short-lived Perception, Deception, and Intimidation resonance

The pack does not include:

- additional direct damage as its default reward
- restored spell slots or focus points
- automatic critical successes on later spells
- permanent weakness, resistance, or immunity
- outcomes for saving throws against spells

### Overwhelming Resonance

Applies to `savingThrowCriticalFailure` and requires the context trait `spell`. It therefore reacts only when a creature critically fails a saving throw against a recognized spell. The affected creature is the saving creature (`source`), never the original caster.

The complete thirty-card draft focuses on brief magical saturation rather than additional damage. It includes direct penalties to spell defenses, movement, perception, attacks, damage, magical healing, social actions, magical attack and class projections, Athletics, Acrobatics, Deception, and defensive DCs. Manual consequences add reaction static, unstable relocation, visible resonance, fractured wards, dynamic weaknesses, spell-stamps, concentration echoes, aftershock corridors, resistance delamination, item choruses, transparent outlines, elastic distance, stubborn footprints, and reality's regrettably thorough paperwork.

The pack does not include:

- additional direct damage as its default consequence
- permanent reductions to defenses or movement
- lost spell slots, focus points, or equipment
- critical failures against nonmagical hazards
- effects applied to the original caster by mistake

## Automation

Miscast Repercussions and Defiant Reversals remain intentionally manual because they depend on the original caster, immediate actions, battlefield geometry, ongoing spell identity, or conditional consumption.

Spell Attack Surges uses the Effect Engine directly. Nine of its thirty cards create applicable effects, while twenty-one remain manual where ally selection, target identity, one-use timing, range, area origins, line of effect, spell traits, cover, concealment, reactions, immediate actions, Sustain, or conditional consumption matter.

Overwhelming Resonance contains twelve direct Effect Engine cards and eighteen manual cards. The direct effects are intentionally brief and apply to the creature that critically failed the saving throw. The manual cards handle reaction timing, original-caster identity, forced movement, teleportation, deliberate grounding, line of effect, creature cover, magical item activation, misfortune, and conditional consumption.

## Planned Packs

- Miscast Repercussions - 30/30 (mechanical review passed)
- Defiant Reversals - 30/30 (mechanical review passed)
- Spell Attack Surges - 30/30 (mechanical review passed)
- Overwhelming Resonance - 30/30 (ready for mechanical review)

Each pack grows in blocks of ten cards. At 30 cards, it receives a full mechanical review for redundancy, rules clarity, balance, and pack identity.

See [docs/PACKS.md](docs/PACKS.md), [docs/CARD_BIBLE.md](docs/CARD_BIBLE.md), [docs/MECHANICAL_REVIEW_MISCAST_REPERCUSSIONS.md](docs/MECHANICAL_REVIEW_MISCAST_REPERCUSSIONS.md), [docs/MECHANICAL_REVIEW_DEFIANT_REVERSALS.md](docs/MECHANICAL_REVIEW_DEFIANT_REVERSALS.md), and [docs/MECHANICAL_REVIEW_SPELL_ATTACK_SURGES.md](docs/MECHANICAL_REVIEW_SPELL_ATTACK_SURGES.md).
