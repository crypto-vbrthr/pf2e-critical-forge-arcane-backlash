import { defineOverwhelmingResonance } from "../card-factory.js";

const ONE_ROUND = Object.freeze({
  value: 1,
  unit: "rounds",
  expiry: "turn-start"
});

export const OVERWHELMING_RESONANCE_CARDS = Object.freeze([
  defineOverwhelmingResonance({
    id: "or-001-resonance-leak",
    localizationKey: "ResonanceLeak",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Resonance Leak",
    fallbackDescription: "The spell leaves the target's defenses leaking into the surrounding weave. For 1 round, the target takes a -1 status penalty to saving throws against spells.",
    tags: ["saving-throws", "spells", "status-penalty", "effect"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          type: "modifier",
          selector: "saving-throw",
          value: -1,
          modifierType: "status",
          predicate: ["item:trait:spell"]
        }
      ]
    }
  }),
  defineOverwhelmingResonance({
    id: "or-002-spellglass-fracture",
    localizationKey: "SpellglassFracture",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Spellglass Fracture",
    fallbackDescription: "A hairline fracture appears in the target's magical defenses. For 1 round, the target takes a -1 circumstance penalty to AC against spell attacks.",
    tags: ["ac", "spell-attacks", "circumstance-penalty", "effect"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          type: "modifier",
          selector: "ac",
          value: -1,
          modifierType: "circumstance",
          predicate: ["item:trait:spell"]
        }
      ]
    }
  }),
  defineOverwhelmingResonance({
    id: "or-003-dragged-through-the-weave",
    localizationKey: "DraggedThroughTheWeave",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Dragged Through the Weave",
    fallbackDescription: "The spell leaves invisible threads trailing from every movement. For 1 round, the target takes a -5-foot status penalty to all its Speeds.",
    weight: 2,
    tags: ["movement", "speed", "status-penalty", "effect"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          type: "movement",
          movementType: "all",
          value: -5,
          modifierType: "status"
        }
      ]
    }
  }),
  defineOverwhelmingResonance({
    id: "or-004-somatic-desynchronization",
    localizationKey: "SomaticDesynchronization",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Somatic Desynchronization",
    fallbackDescription: "Body and magical echo move a fraction of a heartbeat apart. For 1 round, the target takes a -1 circumstance penalty to Athletics checks and Fortitude DC.",
    filters: { saveTypes: ["fortitude"] },
    tags: ["fortitude", "athletics", "fortitude-dc", "circumstance-penalty", "effect"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          type: "modifier",
          selector: ["athletics", "fortitude-dc"],
          value: -1,
          modifierType: "circumstance",
          predicate: []
        }
      ]
    }
  }),
  defineOverwhelmingResonance({
    id: "or-005-geometry-out-of-step",
    localizationKey: "GeometryOutOfStep",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Geometry Out of Step",
    fallbackDescription: "The target no longer agrees with the angles around it. For 1 round, it takes a -1 circumstance penalty to Acrobatics checks and Reflex DC.",
    filters: { saveTypes: ["reflex"] },
    tags: ["reflex", "acrobatics", "reflex-dc", "circumstance-penalty", "effect"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          type: "modifier",
          selector: ["acrobatics", "reflex-dc"],
          value: -1,
          modifierType: "circumstance",
          predicate: []
        }
      ]
    }
  }),
  defineOverwhelmingResonance({
    id: "or-006-thoughts-leak-sideways",
    localizationKey: "ThoughtsLeakSideways",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Thoughts Leak Sideways",
    fallbackDescription: "Intent reaches the room before words or movement can hide it. For 1 round, the target takes a -1 circumstance penalty to Deception checks and Will DC.",
    filters: { saveTypes: ["will"], excludedSourceTraits: ["mindless"] },
    tags: ["will", "deception", "will-dc", "mental", "circumstance-penalty", "effect"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          type: "modifier",
          selector: ["deception", "will-dc"],
          value: -1,
          modifierType: "circumstance",
          predicate: []
        }
      ]
    }
  }),
  defineOverwhelmingResonance({
    id: "or-007-static-between-moments",
    localizationKey: "StaticBetweenMoments",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Static Between Moments",
    fallbackDescription: "Magical static wedges itself into the instant when instinct becomes action. Before the start of the target's next turn, when it would use its first reaction, it must attempt a DC 5 flat check. On a failure, the reaction is not spent, but the trigger passes and that reaction cannot be used for it. The resonance then ends.",
    tags: ["reaction", "flat-check", "timing", "one-use", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-008-unmoored-from-place",
    localizationKey: "UnmooredFromPlace",
    tone: "serious",
    impact: "strong",
    fallbackTitle: "Unmoored from Place",
    fallbackDescription: "The target's position becomes a suggestion rather than a fact. Until the start of its next turn, the first time a spell forcibly moves it, increase that movement by 5 feet along the same legal path. If a spell instead teleports or precisely relocates it, the spell's caster may shift the legal destination by 5 feet to another space the spell could have selected. The resonance then ends.",
    tags: ["forced-movement", "teleportation", "relocation", "spell", "one-use", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-009-ground-it-or-glow",
    localizationKey: "GroundItOrGlow",
    tone: "humorous",
    impact: "moderate",
    fallbackTitle: "Ground It or Glow",
    fallbackDescription: "The spell has left the target carrying far too much visible magic. At the start of its next turn, the target may use its first action to Ground the Resonance, an action with the concentrate trait. If it does not, until the end of that turn it sheds obvious light, sound, symbols, or similar signs: it cannot Hide, and it takes a -1 circumstance penalty to Stealth checks. The resonance then ends.",
    weight: 2,
    tags: ["concentrate", "hide", "stealth", "choice", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-010-wardline-fracture",
    localizationKey: "WardlineFracture",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Wardline Fracture",
    fallbackDescription: "The critical failure leaves a visible seam in the target's next magical defense. Before the end of the target's next turn, the next time it would gain a status or circumstance bonus to AC or a saving throw against a spell, reduce that single bonus by 1, to a minimum of 0. The resonance is consumed only when it reduces a bonus.",
    tags: ["spell-defense", "ac", "saving-throw", "bonus-reduction", "conditional-consumption", "manual"]
  })
]);
