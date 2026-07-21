import { defineSpellAttackSurge } from "../card-factory.js";

const ONE_ROUND = Object.freeze({
  value: 1,
  unit: "rounds",
  expiry: "turn-start"
});

export const SPELL_ATTACK_SURGE_CARDS = Object.freeze([
  defineSpellAttackSurge({
    id: "sas-001-power-still-singing",
    localizationKey: "PowerStillSinging",
    tone: "dramatic",
    impact: "light",
    fallbackTitle: "Power Still Singing",
    fallbackDescription: "The spell's power keeps singing in your aura. For 1 round, you gain a +1 status bonus to spell attack rolls.",
    tags: ["spell-attack", "status-bonus", "effect"],
    effect: {
      duration: ONE_ROUND,
      components: [
        { type: "modifier", selector: "spell-attack-roll", value: 1, modifierType: "status", predicate: [] }
      ]
    }
  }),
  defineSpellAttackSurge({
    id: "sas-002-steady-casting-hand",
    localizationKey: "SteadyCastingHand",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Steady Casting Hand",
    fallbackDescription: "The flawless release steadies every following gesture. Before the end of your next turn, the next Cast a Spell action you use with the manipulate trait cannot be disrupted by reactions triggered by that action. Those reactions can still damage, move, or otherwise affect you, and disruption from other sources works normally. The surge then ends.",
    tags: ["manipulate", "cast-a-spell", "disruption-protection", "one-use", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-003-resonant-guard",
    localizationKey: "ResonantGuard",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Resonant Guard",
    fallbackDescription: "Residual harmonics weave a thin guard around you. For 1 round, you gain a +1 status bonus to saving throws.",
    tags: ["defense", "saving-throws", "status-bonus", "effect"],
    effect: {
      duration: ONE_ROUND,
      components: [
        { type: "modifier", selector: "saving-throw", value: 1, modifierType: "status", predicate: [] }
      ]
    }
  }),
  defineSpellAttackSurge({
    id: "sas-004-spellborne-confidence",
    localizationKey: "SpellborneConfidence",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Spellborne Confidence",
    fallbackDescription: "The perfect hit proves that your will can shape the impossible. For 1 round, you gain a +1 circumstance bonus to Will saves against mental effects.",
    weight: 2,
    tags: ["will", "mental", "circumstance-bonus", "effect"],
    effect: {
      duration: ONE_ROUND,
      components: [
        { type: "modifier", selector: "will", value: 1, modifierType: "circumstance", predicate: ["item:trait:mental"] }
      ]
    }
  }),
  defineSpellAttackSurge({
    id: "sas-005-perfect-release",
    localizationKey: "PerfectRelease",
    tone: "neutral",
    impact: "moderate",
    fallbackTitle: "Perfect Release",
    fallbackDescription: "The magic leaves your hands, focus, or casting posture in perfect order. You may immediately Interact as a free action to draw or stow a spellcasting focus, wand, staff, component pouch, or similar casting tool, or to change your grip on one held item. This free action does not trigger reactions from the original target.",
    tags: ["interact", "spellcasting-tool", "grip", "free-action", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-006-resonance-mark",
    localizationKey: "ResonanceMark",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Resonance Mark",
    fallbackDescription: "The hit leaves a luminous resonance mark that only your magic seems able to read. Before the end of your next turn, your next spell attack against the original target ignores the concealed condition. If the target is hidden from you but not undetected, use a DC 5 flat check instead of DC 11. The surge is consumed only when it removes or reduces a flat check.",
    tags: ["concealed", "hidden", "flat-check", "target-specific", "conditional-consumption", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-007-pattern-exposed",
    localizationKey: "PatternExposed",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Pattern Exposed",
    fallbackDescription: "The critical hit exposes how the target's defenses bend around incoming magic. Before the end of your next turn, your next spell attack against the original target treats its circumstance bonus to AC from cover as one degree lower: lesser cover grants no bonus, standard cover grants the bonus from lesser cover, and greater cover grants the bonus from standard cover. The surge is consumed only when it reduces cover.",
    tags: ["cover", "spell-attack", "target-specific", "conditional-consumption", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-008-echo-in-the-aura",
    localizationKey: "EchoInTheAura",
    tone: "neutral",
    impact: "moderate",
    fallbackTitle: "Echo in the Aura",
    fallbackDescription: "The target's aura answers the spell in several magical languages at once. For 1 round, you gain a +1 status bonus to Arcana, Nature, Occultism, and Religion checks.",
    tags: ["aura", "knowledge", "skills", "status-bonus", "effect"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          type: "modifier",
          selector: ["arcana", "nature", "occultism", "religion"],
          value: 1,
          modifierType: "status",
          predicate: []
        }
      ]
    }
  }),
  defineSpellAttackSurge({
    id: "sas-009-no-place-to-fade",
    localizationKey: "NoPlaceToFade",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "No Place to Fade",
    fallbackDescription: "The resonance keeps tugging toward the target even when it tries to vanish. Before the end of your next turn, if the original target Hides, Sneaks, or teleports, you may use your reaction immediately after that action to Seek. The area you Seek must include the target's last known space; if you can perceive its destination, it may include that space instead. Normal detection and sense limitations still apply. The surge then ends.",
    tags: ["seek", "hide", "sneak", "teleportation", "reaction", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-010-spellshadow",
    localizationKey: "Spellshadow",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Spellshadow",
    fallbackDescription: "A delayed shadow of the successful spell clings to the target and betrays every feint and attempt to disappear. For 1 round, the target takes a -1 circumstance penalty to Stealth and Deception checks.",
    tags: ["target", "stealth", "deception", "circumstance-penalty", "effect"],
    effect: {
      target: "target",
      duration: ONE_ROUND,
      components: [
        {
          type: "modifier",
          selector: ["stealth", "deception"],
          value: -1,
          modifierType: "circumstance",
          predicate: []
        }
      ]
    }
  })
]);
