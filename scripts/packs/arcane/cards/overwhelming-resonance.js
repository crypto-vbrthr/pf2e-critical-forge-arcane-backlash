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
    fallbackDescription: "Invisible threads catch on the target's path. Before the end of its next turn, the first time the target completes a move action that uses one of its Speeds, the original caster may pull it 5 feet back along the path it just traveled to the nearest legal space. This is forced movement and does not trigger reactions. If no legal space exists along that path, the movement is unchanged and the resonance remains available. The resonance ends after it moves the target or when the duration expires.",
    tags: ["movement", "forced-movement", "path", "original-caster", "conditional-consumption", "manual"]
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
    impact: "moderate",
    fallbackTitle: "Unmoored from Place",
    fallbackDescription: "The target's position becomes a suggestion rather than a fact. Before the end of its next turn, the first time a spell cast by the original caster forcibly moves it, that caster may increase the movement by 5 feet along the same legal path. If no additional legal 5 feet exists, the resonance is not consumed. If such a spell instead teleports or precisely relocates the target, the original caster may shift the legal destination by 5 feet to another space that spell could have selected. The resonance ends only after it changes one of these movements or relocations.",
    tags: ["forced-movement", "teleportation", "relocation", "original-caster", "conditional-consumption", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-009-ground-it-or-glow",
    localizationKey: "GroundItOrGlow",
    tone: "humorous",
    impact: "moderate",
    fallbackTitle: "Ground It or Glow",
    fallbackDescription: "The spell has left the target carrying far too much visible magic. At the start of its next turn, the target may use its first action to Ground the Resonance, an action with the concentrate trait. If it does not, until the end of that turn it sheds obvious light, sound, symbols, or similar signs: it cannot Hide, cannot become hidden or undetected from the original caster through Stealth alone, and takes a -1 circumstance penalty to Stealth checks. The resonance then ends.",
    tags: ["concentrate", "hide", "stealth", "original-caster", "choice", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-010-wardline-fracture",
    localizationKey: "WardlineFracture",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Wardline Fracture",
    fallbackDescription: "The critical failure leaves a visible seam in the target's next magical defense. Before the end of the target's next turn, when its AC or saving throw against a spell is calculated, the original caster may choose one applicable status or circumstance bonus and reduce that bonus by 1, to a minimum of 0. The resonance is consumed only if the reduction changes the final defense.",
    tags: ["spell-defense", "ac", "saving-throw", "bonus-reduction", "original-caster", "conditional-consumption", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-011-sensory-palimpsest",
    localizationKey: "SensoryPalimpsest",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Sensory Palimpsest",
    fallbackDescription: "The spell writes a false layer over the target's senses. Before the end of its next turn, the first time the target Seeks, the original caster chooses one creature or object in the searched area that the target could detect. The target's degree of success against that subject alone is one degree worse. All other subjects are resolved normally, and the resonance then ends.",
    tags: ["perception", "seek", "false-senses", "original-caster", "one-use", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-012-voice-through-glass",
    localizationKey: "VoiceThroughGlass",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Voice Through Glass",
    fallbackDescription: "Every word reaches the world through a layer of ringing magical glass. Before the end of the target's next turn, the first auditory or linguistic action it uses with a range greater than 15 feet can affect only creatures within 15 feet. A shorter normal range remains unchanged. The resonance is consumed only if this limit excludes an intended creature. It does not hinder spellcasting unless the spell itself has the auditory or linguistic trait.",
    filters: { saveTypes: ["will"], excludedSourceTraits: ["mindless"] },
    tags: ["will", "auditory", "linguistic", "range", "communication", "conditional-consumption", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-013-projected-instability",
    localizationKey: "ProjectedInstability",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Projected Instability",
    fallbackDescription: "The target's next projected attack or effect wobbles around an invisible fault line. Before the end of its next turn, the first time it uses an action or activity that makes an attack roll or forces one or more creatures to attempt a saving throw, the original caster chooses one affected creature it can perceive. That creature gains a +1 circumstance bonus to its AC or saving throw against that action. The resonance is consumed only if the bonus changes that defense.",
    tags: ["attack", "saving-throw", "defense", "original-caster", "conditional-consumption", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-014-resonant-weakpoint",
    localizationKey: "ResonantWeakpoint",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Resonant Weakpoint",
    fallbackDescription: "The spell leaves one part of the target ringing at exactly the wrong frequency. The original caster chooses one damage type dealt by the triggering spell. Until the start of the target's next turn, it gains weakness 2 to that damage type. If the spell dealt no damage, the caster may instead choose a damage type directly named by one of the spell's damage or energy traits. If neither option applies, the target cannot apply one circumstance bonus to its next saving throw against a spell from the original caster before the end of its next turn; the caster chooses the bonus when the save is calculated. Apply the result manually.",
    tags: ["weakness", "damage-type", "spell-trait", "original-caster", "dynamic-choice", "fallback", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-015-spell-stamped",
    localizationKey: "SpellStamped",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Spell-Stamped",
    fallbackDescription: "The target carries a private stamp that exposes borrowed magic. The original caster chooses one spell effect currently affecting the target that was created by another creature. If no such effect exists, the stamp attaches to the first such spell effect the target gains before the end of its next turn. The first counteract check against the marked effect before then gains a +2 circumstance bonus, and the creature attempting it learns the effect's rank and tradition before rolling. The resonance ends after that check or when the duration expires.",
    tags: ["spell-effect", "counteract", "rank", "tradition", "original-caster", "conditional-consumption", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-016-concentration-echo",
    localizationKey: "ConcentrationEcho",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Concentration Echo",
    fallbackDescription: "The spell leaves an echo waiting for deliberate thought. Before the end of the target's next turn, the first action it begins with the concentrate trait also gains the manipulate trait solely for determining whether it triggers reactions. Its other traits and resolution are unchanged. The resonance is consumed only if adding manipulate creates at least one reaction trigger that the action did not already have.",
    filters: { saveTypes: ["will"], excludedSourceTraits: ["mindless"] },
    tags: ["will", "concentrate", "manipulate", "reaction-trigger", "conditional-consumption", "manual"]
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
    fallbackDescription: "Magical static keeps dragging the target's aim back toward the spell's source. Before the end of the target's next turn, the first time it makes an attack against a creature other than the original caster while that caster is a legal target for the attack, it must attempt a DC 5 flat check. On a failure, the attack is lost as though the chosen creature were concealed. If the original caster is not a legal target, the resonance waits. It ends after the flat check.",
    tags: ["attack", "target-switching", "flat-check", "original-caster", "conditional-consumption", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-019-resistance-delamination",
    localizationKey: "ResistanceDelamination",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Resistance Delamination",
    fallbackDescription: "The spell peels one layer away from the target's ability to absorb magic. Before the end of the target's next turn, the first time it would apply one or more resistances to damage from a spell, the original caster chooses one applicable resistance and reduces it by 3 for that damage instance, to a minimum of 0. If no resistance could apply when this card is drawn, the first resistance the target gains before the end of its next turn is reduced by 3, to a minimum of 0, until the end of the target's next turn. The resonance is consumed only when a resistance value is actually reduced.",
    filters: { saveTypes: ["fortitude"] },
    tags: ["fortitude", "resistance", "reduction", "damage-from-spells", "original-caster", "conditional-consumption", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-020-aura-underfoot",
    localizationKey: "AuraUnderfoot",
    tone: "humorous",
    impact: "light",
    fallbackTitle: "Aura Underfoot",
    fallbackDescription: "The target's aura has pooled around its feet and is pretending this was always the plan. Until the end of its next turn, creatures adjacent to the target have lesser cover from the target, even if no physical obstacle lies between them. This does not stack with other cover, and the pooled aura moves with the target.",
    filters: { saveTypes: ["fortitude"] },
    tags: ["fortitude", "adjacent", "lesser-cover", "aura", "humorous", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-021-healing-pattern-rejected",
    localizationKey: "HealingPatternRejected",
    tone: "serious",
    impact: "light",
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
    fallbackDescription: "The target's magical outline tears away and makes the next area around it unstable. Before the end of the target's next turn, when the original caster casts a spell with an area that includes the target, the caster may shift the entire area 5 feet to another legal placement after placing it but before resolving it. The shifted area must still include the target and obey the spell's normal origin, range, and line of effect. This cannot alter an emanation or an area fixed to a creature, object, or point by the spell's text. The resonance ends only if the area is shifted.",
    tags: ["area", "area-shift", "original-caster", "range", "line-of-effect", "conditional-consumption", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-024-reality-rejects-the-shortcut",
    localizationKey: "RealityRejectsTheShortcut",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Reality Rejects the Shortcut",
    fallbackDescription: "Reality leaves a bright correction between where the target vanished and where it arrived. Before the end of its next turn, the first time the target teleports, the original caster immediately learns the exact destination if it is within 60 feet on the same plane; if it is farther away on the same plane, the caster learns only its direction; if it leaves the plane, the caster learns that fact. This knowledge does not bypass cover, concealment, or line of sight. The caster gains a +2 circumstance bonus to its next Seek or Track check against the target before the end of the target's next turn, after which the trace ends.",
    filters: { saveTypes: ["reflex"] },
    tags: ["reflex", "teleportation", "trace", "seek", "track", "original-caster", "one-use", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-025-item-chorus",
    localizationKey: "ItemChorus",
    tone: "humorous",
    impact: "moderate",
    fallbackTitle: "Item Chorus",
    fallbackDescription: "The target's magic items have formed a committee and apparently elected a bell. Before the end of the target's next turn, the first time it Activates a magic item, it chooses another magic item it carries. That second item joins the chorus and cannot be Activated until the end of the target's next turn. If the target carries no other magic item, the activated item announces itself with unmistakable sound and light, and the target cannot Hide until the end of its next turn. The triggering activation resolves normally, and the resonance then ends.",
    tags: ["magic-item", "activate-item", "item-lock", "hide", "humorous", "one-use", "manual"]
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
    fallbackDescription: "Distance stretches behind the target like a reluctant tether. Before the end of its next turn, when the target declares the first move action that uses one of its Speeds and would end farther from the original caster than it began, reveal that the movement costs 5 additional feet before the path is resolved. Step, teleportation, and movement that does not use a Speed are excluded. If the target cannot pay the added cost, it stops in the nearest legal space along its path where the movement can end. The resonance then ends.",
    filters: { saveTypes: ["reflex"] },
    tags: ["reflex", "movement", "speed", "distance", "original-caster", "one-use", "manual"]
  }),
  defineOverwhelmingResonance({
    id: "or-028-echo-claims-the-footprint",
    localizationKey: "EchoClaimsTheFootprint",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Echo Claims the Footprint",
    fallbackDescription: "The first place the target abandons remembers it too vividly. The first time the target moves before the end of its next turn, the original caster chooses one space vacated by that movement. Until the end of the target's next turn, the target cannot willingly enter the marked space. Forced movement may still place it there, and other creatures are unaffected.",
    filters: { saveTypes: ["fortitude"] },
    tags: ["fortitude", "movement", "marked-space", "original-caster", "one-use", "manual"]
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
    fallbackDescription: "Reality has retained a full record of the transaction and would like everyone to review it. Before the end of the target's next turn, the first time it Casts a Spell or Activates a magic item that the original caster can perceive, it must declare the spell or item, targets, area, and chosen options. The original caster then decides whether to use a reaction to Step or Take Cover, satisfying that action's normal requirements. After the reaction is resolved or declined, the magical action resolves normally, and the resonance ends.",
    tags: ["cast-a-spell", "magic-item", "perception", "declaration", "reaction", "step", "take-cover", "humorous", "manual"]
  })
]);
