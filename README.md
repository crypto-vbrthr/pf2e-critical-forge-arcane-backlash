# PF2E Critical Forge: Arcane Backlash

*Expand Critical Forge with unstable magic, resonant reversals, and consequences that refuse to end when the spell does.*

Arcane Backlash is an extension module for **PF2E Critical Forge**. It adds card packs for exceptional magical successes and failures across the arcane, divine, occult, and primal traditions.

The word **Arcane** in the module title describes magical strangeness in general. It does not limit the module to the arcane spell tradition.

## Version 0.3.0

The current release contains three optional packs:

- **Miscast Repercussions** - 30 mechanically reviewed cards for critical failures on spell attacks.
- **Defiant Reversals** - 30 mechanically reviewed cards for critical successes on saving throws against spells.
- **Spell Attack Surges** - the first 10 cards for critical successes on spell attacks.

Spell Attack Surges turns an exceptionally accurate spell into beneficial resonance. Its first block includes protected casting, brief magical defenses, exposed cover and concealment, improved magical analysis, reactive tracking, and spellshadows that cling to the target.

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

- directly applicable bonuses to spell attacks, saving throws, mental defense, and magical skills
- target effects that hinder Stealth and Deception
- protection against reaction-based disruption
- temporary relief from concealment and cover
- immediate spellcasting-tool interaction
- reactive tracking when the original target tries to vanish

The pack does not include:

- additional direct damage as its default reward
- restored spell slots or focus points
- automatic critical successes on later spells
- permanent weakness, resistance, or immunity
- outcomes for saving throws against spells

## Automation

Miscast Repercussions and Defiant Reversals remain intentionally manual because they depend on the original caster, immediate actions, battlefield geometry, ongoing spell identity, or conditional consumption.

Spell Attack Surges begins using the Effect Engine directly. Five of its first ten cards create applicable effects, while five remain manual where target identity, one-use timing, cover, concealment, reactions, or immediate actions matter.

## Planned Packs

- Miscast Repercussions - 30/30 (mechanical review passed)
- Defiant Reversals - 30/30 (mechanical review passed)
- Spell Attack Surges - 10/30
- Overwhelming Resonance - planned

Each pack grows in blocks of ten cards. At 30 cards, it receives a full mechanical review for redundancy, rules clarity, balance, and pack identity.

See [docs/PACKS.md](docs/PACKS.md), [docs/CARD_BIBLE.md](docs/CARD_BIBLE.md), [docs/MECHANICAL_REVIEW_MISCAST_REPERCUSSIONS.md](docs/MECHANICAL_REVIEW_MISCAST_REPERCUSSIONS.md), and [docs/MECHANICAL_REVIEW_DEFIANT_REVERSALS.md](docs/MECHANICAL_REVIEW_DEFIANT_REVERSALS.md).
