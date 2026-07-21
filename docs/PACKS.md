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

**Status:** 30/30 cards, mechanical review passed

**Trigger:** Critical success on a spell attack

**Technical category:** `spellCriticalHit`

**Purpose:** The spell hits so perfectly that beneficial resonance remains with the caster, exposes a readable magical pattern on the target, or makes the next magical decision easier.

**Effect direction:** Most benefits apply to the caster (`source`). Cards that leave a trace on the struck creature explicitly apply to the original target.

**Typical consequences:**

- protected casting and immediate handling of casting tools
- target-specific concealment, cover, and tracking interactions
- cleaner geometry, extended range, and two-segment magical apertures
- shared spell frequency expressed as target weakness to damage from spells
- revealed saving-throw defenses and concrete knowledge shared with allies
- voluntary transfer of frightened or stupefied through a magical circuit
- dynamic resistance tied to a damage type of the triggering spell
- tightly bounded ally conduits for range, area origin, cover, and line of effect
- immediate Sustain opportunities and concealed magical afterimages
- short-lived mental defense, saving-throw defense, magical analysis, perception, and social resonance

**Automation:** Nine of the thirty cards create direct Effect Engine effects. The remaining twenty-one cards are manual because they depend on a specific original target, ally selection, immediate free actions, one-use timing, reactions, Sustain, range changes, area origins, line of effect, spell traits, cover degrees, concealment flat checks, or conditional consumption.

**Not included:**

- automatic extra damage
- restored spell slots or focus points
- guaranteed later critical successes
- permanent defenses or weaknesses
- critical failures on saving throws

## Overwhelming Resonance

**Status:** 10/30 cards

**Trigger:** Critical failure on a saving throw against a spell

**Technical filter:** `category: "savingThrowCriticalFailure"` with `attackTraits: ["spell"]`

**Purpose:** The spell leaves a brief magical aftermath beyond its normal critical-failure result. The pack emphasizes saturation, fractured defenses, unstable position, and resonance that remains tactically relevant without simply adding more damage.

**Effect direction:** Consequences apply to the creature that made the saving throw. In Critical Forge saving-throw contexts, that creature is the `source`; the original caster is the opposing `target`.

**Current consequences:**

- penalties to saving throws against spells and AC against spell attacks
- a short penalty to all Speeds
- Fortitude-, Reflex-, and Will-specific effects on skills and defensive DCs
- magical static that can delay a reaction
- increased forced movement or shifted magical relocation
- a choice between grounding visible resonance and remaining unable to Hide
- a one-use fracture in a later status or circumstance defense against a spell

**Automation:** Six of the first ten cards create direct Effect Engine effects. Four remain manual because they depend on reaction timing, the source of forced movement, legal teleport destinations, a first-action choice, or conditional consumption.

**Not included:**

- additional direct damage as the default consequence
- generic copies of prone, slowed, clumsy, enfeebled, stupefied, frightened, or off-guard from the Core pack
- permanent weakness, resistance loss, or defense penalties
- lost magical resources or damaged spellcasting equipment
- critical failures against nonmagical effects

## Review Process

Each pack follows the same development sequence:

1. 10-card playable block
2. 20-card intermediate block
3. 30-card complete draft
4. full mechanical review
5. redesign of redundant or unreliable cards

Cross-pack identity, narrative consistency, translation quality, and statistics are reviewed after all planned packs are complete.
