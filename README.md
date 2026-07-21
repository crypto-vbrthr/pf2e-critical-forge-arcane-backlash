# PF2E Critical Forge: Arcane Backlash

*Expand Critical Forge with unstable magic, resonant reversals, and consequences that refuse to end when the spell does.*

Arcane Backlash is an extension module for **PF2E Critical Forge**. It adds card packs for exceptional magical successes and failures across the arcane, divine, occult, and primal traditions.

The word **Arcane** in the module title describes magical strangeness in general. It does not limit the module to the arcane spell tradition.

## Version 0.2.1

The current release contains two optional packs:

- **Miscast Repercussions** - 30 mechanically reviewed cards for critical failures on spell attacks.
- **Defiant Reversals** - 20 cards for critical successes on saving throws against spells.

Defiant Reversals turns exceptional resistance into movement, insight, returned resonance, reclaimed magical terrain, protection against repeated magic, and opportunities shared with allies. Positive consequences belong to the creature that made the saving throw, not to the caster.

## Installation

Install and enable both modules:

1. PF2E Critical Forge 0.9.3-dev or newer
2. PF2E Critical Forge: Arcane Backlash

Then enable either or both Arcane Backlash packs in the module settings.

## Pack Boundaries

### Miscast Repercussions

Applies to `spellCriticalFumble` and reacts only to critical failures on spell attack rolls. It explores recoil, disrupted casting sequences, warped space, unstable residue, revealed magical signatures, and strange tactical aftermaths.

### Defiant Reversals

Applies to `savingThrowCriticalSuccess` and additionally requires the context trait `spell`. It therefore reacts only when a creature critically succeeds at a saving throw against a recognized spell.

The pack includes:

- immediate movement and reclaimed positioning
- resistance to fear and repeated magical patterns
- insight into spells and magical signatures
- limited protection against forced movement
- brief tactical benefits shared with allies
- exposed casting lines, weakened cover, and safe paths through spell-created terrain

The pack does not include:

- full reflection of the original spell
- permanent immunity to a spell or caster
- restored spell slots, focus points, or hit points
- additional damage as a default reward
- benefits applied to the caster instead of the saving creature

## Automation

All current cards are resolved manually. Their consequences depend on immediate free actions, one-use bonuses, a specific original caster, ongoing spell durations, target recognition, or conditional consumption that the current Effect Engine does not model precisely.

Manual resolution is intentional. Each card is written to be applied in one or two quick rulings without additional bookkeeping.

## Planned Packs

- Miscast Repercussions - 30/30 (mechanical review passed)
- Defiant Reversals - 20/30
- Spell Attack Surges - planned
- Overwhelming Resonance - planned

Each pack grows in blocks of ten cards. At 30 cards, it receives a full mechanical review for redundancy, rules clarity, balance, and pack identity.

See [docs/PACKS.md](docs/PACKS.md), [docs/CARD_BIBLE.md](docs/CARD_BIBLE.md), and [docs/MECHANICAL_REVIEW_MISCAST_REPERCUSSIONS.md](docs/MECHANICAL_REVIEW_MISCAST_REPERCUSSIONS.md).
