# Arcane Backlash Card Packs

## Module Identity

Arcane Backlash explores moments when magic behaves exceptionally well or exceptionally badly. It supports arcane, divine, occult, and primal spellcasting. The module title uses *Arcane* as a broad label for magical strangeness rather than as a tradition filter.

## Miscast Repercussions

**Status:** 30/30 cards, mechanical review passed

**Trigger:** Critical failure on a spell attack

**Purpose:** The spell misses so badly that magical energy recoils, lingers, distorts space, reveals the caster, or interferes with later casting.

**Typical consequences:**

- forced movement or unstable casting positions
- disrupted action sequences
- warped range, cover, or line of effect
- visible and audible magical signatures
- environmental residue
- strange but brief magical side effects

**Not included:**

- physical injury by damage type
- destroyed equipment or spellcasting tools
- permanently lost spell slots or focus points
- saving-throw outcomes
- critical spell successes

## Defiant Reversals

**Status:** 30/30 cards, mechanical review passed

**Trigger:** Critical success on a saving throw against a spell

**Technical filter:** `category: "savingThrowCriticalSuccess"` with `attackTraits: ["spell"]`

**Purpose:** The defender resists so decisively that the spell reveals its weakness, loses control of space, strengthens the defender, or creates a brief opportunity for an ally.

**Effect direction:** Any beneficial effect belongs to the creature that made the saving throw. In Critical Forge terms, that creature is the `source` of a saving-throw context. The original caster is the opposing `target`.

**Typical consequences:**

- anchored defense, reclaimed movement, and reality anchors
- shared resistance to fear and repeated spells
- recognition of magical signatures and decoys
- limited defense against later forced movement
- information about the spell or caster
- a one-use benefit granted to an ally
- returned resonance that traces connections or exposes maintained magic
- safe movement through spell-created terrain, wards, and collapsing effects
- borrowed saving defenses, spell-defense seams, and tactical reversals against stealth or deception

**Not included:**

- full reflection of the original spell
- permanent immunity
- resource recovery or healing
- ordinary successful saving throws
- critical saves against nonmagical hazards

## Spell Attack Surges

**Status:** 20/30 cards

**Trigger:** Critical success on a spell attack

**Technical category:** `spellCriticalHit`

**Purpose:** The spell hits so perfectly that beneficial resonance remains with the caster, exposes a readable magical pattern on the target, or makes the next magical decision easier.

**Effect direction:** Most benefits apply to the caster (`source`). Cards that leave a trace on the struck creature explicitly apply to the original target.

**Typical consequences:**

- short-lived bonuses to spell attacks, saving throws, mental defense, magical skills, AC, Fortitude DC, or Reflex DC
- protection against disruption from reactions
- immediate handling of casting tools or held items
- concealment and cover bypass against the original target
- reactive Seek opportunities when the target tries to vanish
- visible spellshadows that penalize the target's Stealth and Deception
- extended range, cleaner casting geometry, and reaction-safe transitions
- temporary resistance to energy damage

**Automation:** Eight of the first twenty cards create direct Effect Engine effects. The remaining cards are manual because they depend on a specific original target, immediate free actions, one-use timing, reactions, range changes, line of effect, spell traits, cover degrees, concealment flat checks, or conditional consumption.

**Not included:**

- automatic extra damage
- restored spell slots or focus points
- guaranteed later critical successes
- permanent defenses or weaknesses
- critical failures on saving throws

## Overwhelming Resonance

**Status:** Planned

**Trigger:** Critical failure on a saving throw against a spell

**Purpose:** The spell leaves a thematic magical aftermath beyond its normal critical-failure result, without merely adding another packet of damage.

## Review Process

Each pack follows the same development sequence:

1. 10-card playable block
2. 20-card intermediate block
3. 30-card complete draft
4. full mechanical review
5. redesign of redundant or unreliable cards

Cross-pack identity, narrative consistency, translation quality, and statistics are reviewed after all planned packs are complete.
