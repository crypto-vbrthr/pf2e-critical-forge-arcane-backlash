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
  }),
  defineOverwhelmingResonance({
    id: "or-011-sensory-palimpsest",
    localizationKey: "SensoryPalimpsest",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Sensory Palimpsest",
    fallbackDescription: "The spell writes itself over the target's senses. For 1 round, the target takes a -1 status penalty to Perception checks and Perception DC.",
    tags: ["perception", "perception-dc", "status-penalty", "effect"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          type: "modifier",
          selector: ["perception", "perception-dc"],
          value: -1,
          modifierType: "status",
          predicate: []
        }
      ]
    }
  }),
  defineOverwhelmingResonance({
    id: "or-012-voice-through-glass",
    localizationKey: "VoiceThroughGlass",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Voice Through Glass",
    fallbackDescription: "Every word reaches the world through a layer of ringing magical glass. For 1 round, the target takes a -1 circumstance penalty to Deception, Diplomacy, Intimidation, and Performance checks.",
    filters: { saveTypes: ["will"], excludedSourceTraits: ["mindless"] },
    tags: ["will", "social", "communication", "circumstance-penalty", "effect"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          type: "modifier",
          selector: ["deception", "diplomacy", "intimidation", "performance"],
          value: -1,
          modifierType: "circumstance",
          predicate: []
        }
      ]
    }
  }),
  defineOverwhelmingResonance({
    id: "or-013-projected-instability",
    localizationKey: "ProjectedInstability",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Projected Instability",
    fallbackDescription: "The target's projected magic and practiced techniques wobble around an invisible fault line. For 1 round, it takes a -1 circumstance penalty to spell attack rolls, spell DC, and class DC.",
    tags: ["spell-attack", "spell-dc", "class-dc", "circumstance-penalty", "effect"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          type: "modifier",
          selector: ["spell-attack-roll", "spell-dc", "class"],
          value: -1,
          modifierType: "circumstance",
          predicate: []
        }
      ]
    }
  }),
  defineOverwhelmingResonance({
    id: "or-014-resonant-weakpoint",
    localizationKey: "ResonantWeakpoint",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Resonant Weakpoint",
    fallbackDescription: "The spell leaves one part of the target ringing at exactly the wrong frequency. Choose one damage type dealt by the triggering spell. Until the start of the target's next turn, it gains weakness 2 to that damage type. If the spell dealt no damage, choose a damage type directly represented by one of its traits. If neither option applies, the target instead takes a -1 status penalty to its next saving throw against a spell from the original caster before the end of its next turn.",
    tags: ["weakness", "damage-type", "spell-trait", "dynamic-choice", "fallback", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-015-spell-stamped",
    localizationKey: "SpellStamped",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Spell-Stamped",
    fallbackDescription: "The target carries a private mark that points back to the original caster. Until the end of the target's next turn, that caster always knows which space the target occupies while both remain on the same plane. The caster's next spell attack against the target ignores concealed; if the target is hidden but not undetected, use a DC 5 flat check instead of DC 11. The resonance ends after it reduces or removes a flat check, or when the duration expires.",
    tags: ["tracking", "concealed", "hidden", "flat-check", "original-caster", "conditional-consumption", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-016-concentration-echo",
    localizationKey: "ConcentrationEcho",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Concentration Echo",
    fallbackDescription: "The spell leaves an echo waiting for the target's thoughts to become deliberate. Before the end of the target's next turn, when it begins its first action with the concentrate trait, the original caster may use a reaction to Step or Seek. If the caster Seeks, the searched area must include the target's space or last known space. The triggering action then resolves normally, and the resonance ends whether or not the reaction is used.",
    filters: { saveTypes: ["will"], excludedSourceTraits: ["mindless"] },
    tags: ["will", "concentrate", "reaction", "step", "seek", "original-caster", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-017-aftershock-line",
    localizationKey: "AftershockLine",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Aftershock Line",
    fallbackDescription: "The spell leaves a narrow fault of unstable magic running away from the target. The original caster chooses a straight, 5-foot-wide corridor beginning in the target's space and extending up to 30 feet in a direction the caster can perceive. Until the start of the target's next turn, only the target treats spaces in that corridor as difficult terrain. Other creatures and all other terrain effects are unchanged.",
    filters: { saveTypes: ["reflex"] },
    tags: ["reflex", "terrain", "corridor", "difficult-terrain", "original-caster", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-018-static-in-the-aim",
    localizationKey: "StaticInTheAim",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Static in the Aim",
    fallbackDescription: "The target's timing is full of magical interference. For 1 round, it takes a -1 status penalty to attack rolls.",
    tags: ["attack-rolls", "timing", "status-penalty", "effect"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          type: "modifier",
          selector: "attack",
          value: -1,
          modifierType: "status",
          predicate: []
        }
      ]
    }
  }),
  defineOverwhelmingResonance({
    id: "or-019-resistance-delamination",
    localizationKey: "ResistanceDelamination",
    tone: "serious",
    impact: "strong",
    fallbackTitle: "Resistance Delamination",
    fallbackDescription: "The spell peels one layer away from the target's ability to absorb magic. Before the end of the target's next turn, the next time it would apply resistance to damage from a spell, reduce that resistance by 3 for that damage instance, to a minimum of 0. If the target has no resistance that could apply when this card is drawn, it instead gains weakness 1 to damage from spells until the start of its next turn. Apply either result manually.",
    filters: { saveTypes: ["fortitude"] },
    tags: ["fortitude", "resistance", "reduction", "damage-from-spells", "fallback", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-020-aura-underfoot",
    localizationKey: "AuraUnderfoot",
    tone: "humorous",
    impact: "light",
    fallbackTitle: "Aura Underfoot",
    fallbackDescription: "The target's aura has pooled around its feet and is pretending this was always the plan. At the start of its next turn, the target may use its first action to Settle the Aura, an action with the concentrate trait. If it does not, the first 10 feet of its movement during that turn costs 10 additional feet of movement. The resonance then ends.",
    filters: { saveTypes: ["fortitude"] },
    weight: 2,
    tags: ["fortitude", "movement", "concentrate", "choice", "humorous", "manual"]
   }),
  defineOverwhelmingResonance({
    id: "or-021-healing-pattern-rejected",
    localizationKey: "HealingPatternRejected",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Healing Pattern Rejected",
    fallbackDescription: "The spell leaves the target's life force refusing magical repair. For 1 round, reduce Hit Points restored to the target by spells by 2, to a minimum of 0.",
    filters: { saveTypes: ["fortitude"] },
    tags: ["fortitude", "healing-received", "spells", "status-penalty", "effect"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          type: "modifier",
          selector: "healing-received",
          value: -2,
          modifierType: "status",
          predicate: ["item:trait:spell"]
        }
      ]
    }
  }),
  defineOverwhelmingResonance({
    id: "or-022-power-bleeds-sideways",
    localizationKey: "PowerBleedsSideways",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Power Bleeds Sideways",
    fallbackDescription: "Every attempt to exert force sheds part of itself as colored static. For 1 round, the target takes a -1 status penalty to damage rolls.",
    tags: ["damage", "power", "status-penalty", "effect"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          type: "modifier",
          selector: "damage",
          value: -1,
          modifierType: "status",
          predicate: []
        }
      ]
    }
  }),
  defineOverwhelmingResonance({
    id: "or-023-spell-torn-shadow",
    localizationKey: "SpellTornShadow",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Spell-Torn Shadow",
    fallbackDescription: "The target's magical outline tears away from its body and leaves a brief gap in the weave. Before the end of the target's next turn, the original caster may once treat the target's occupied spaces as empty solely when determining line of effect for a spell aimed at a different creature or point beyond the target. The target still blocks movement, still provides cover, and is affected normally by any area it occupies. The resonance then ends.",
    tags: ["line-of-effect", "occupied-space", "original-caster", "one-use", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-024-reality-rejects-the-shortcut",
    localizationKey: "RealityRejectsTheShortcut",
    tone: "serious",
    impact: "strong",
    fallbackTitle: "Reality Rejects the Shortcut",
    fallbackDescription: "The target's place in the world resists being rewritten again. Before the end of its next turn, the first time the target willingly teleports itself, the original caster may shift the destination by 5 feet to another legal destination that the teleportation effect could have selected. If no such destination exists, the teleportation resolves normally. This does not alter unwilling teleportation or an effect with a fixed destination. The resonance then ends.",
    filters: { saveTypes: ["reflex"] },
    tags: ["reflex", "teleportation", "destination", "original-caster", "one-use", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-025-item-chorus",
    localizationKey: "ItemChorus",
    tone: "humorous",
    impact: "light",
    fallbackTitle: "Item Chorus",
    fallbackDescription: "The target's magic items have formed a committee and apparently elected a bell. Before the end of the target's next turn, the first time it Activates a magic item, the activation produces an unmistakable chime, rune-flare, or whispered announcement. The original caster may use a reaction to Step or Take Cover. The activation then resolves normally, and the resonance ends whether or not the reaction is used.",
    tags: ["magic-item", "activate-item", "reaction", "step", "take-cover", "humorous", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-026-transparent-resonance",
    localizationKey: "TransparentResonance",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Transparent Resonance",
    fallbackDescription: "The target's outline becomes magically transparent at exactly the wrong tactical moment. Until the start of its next turn, the target's body does not grant lesser cover to other creatures. Other sources and degrees of cover, line of sight, line of effect, and the target's own defenses are unchanged.",
    tags: ["lesser-cover", "creature-cover", "battlefield", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-027-elastic-distance",
    localizationKey: "ElasticDistance",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Elastic Distance",
    fallbackDescription: "Distance stretches behind the target like a reluctant tether. Until the start of its next turn, the first time the target would end a move action farther from the original caster than it began, that movement costs 5 additional feet. If the target cannot pay that cost, it stops in the nearest legal space along its path where the movement can end. The resonance then ends.",
    filters: { saveTypes: ["reflex"] },
    tags: ["reflex", "movement", "distance", "original-caster", "one-use", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-028-echo-claims-the-footprint",
    localizationKey: "EchoClaimsTheFootprint",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Echo Claims the Footprint",
    fallbackDescription: "The first place the target abandons remembers it too vividly. The first time the target leaves a space before the start of its next turn, mark one space it occupied immediately before moving. Until the start of that turn, the target cannot willingly enter the marked space. Forced movement may still place it there, and other creatures are unaffected.",
    filters: { saveTypes: ["fortitude"] },
    tags: ["fortitude", "movement", "marked-space", "one-use", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-029-the-weave-misquotes-you",
    localizationKey: "TheWeaveMisquotesYou",
    tone: "humorous",
    impact: "strong",
    fallbackTitle: "The Weave Misquotes You",
    fallbackDescription: "The target's meaning reaches reality with several damaging editorial changes. Before the end of its next turn, the first time the target attempts a Deception, Diplomacy, Intimidation, or Performance check, it rolls twice and uses the worse result. This is a misfortune effect. The resonance is consumed only when one of those checks is rolled.",
    filters: { saveTypes: ["will"], excludedSourceTraits: ["mindless"] },
    tags: ["will", "social", "misfortune", "conditional-consumption", "humorous", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-030-reality-keeps-the-receipt",
    localizationKey: "RealityKeepsTheReceipt",
    tone: "humorous",
    impact: "moderate",
    fallbackTitle: "Reality Keeps the Receipt",
    fallbackDescription: "Reality has retained a full record of the transaction and would like everyone to review it. Before the end of the target's next turn, the first time it Casts a Spell or Activates a magic item, it must declare the spell or item, targets, area, and chosen options before the original caster decides whether to use a reaction to Step or Take Cover. The magical action then resolves normally, and the resonance ends whether or not the reaction is used.",
    tags: ["cast-a-spell", "magic-item", "declaration", "reaction", "step", "take-cover", "humorous", "manual"]
  })
]);
