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
  }),
  defineSpellAttackSurge({
    id: "sas-011-extended-thread",
    localizationKey: "ExtendedThread",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Extended Thread",
    fallbackDescription: "A stable thread of power remains stretched between you and the battlefield. Before the end of your next turn, the next spell attack you make has its maximum range increased by 30 feet. A spell with a range of touch, self, or no listed range does not consume the surge. The surge ends after a qualifying spell attack.",
    tags: ["range", "spell-attack", "one-use", "conditional-consumption", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-012-clean-geometry",
    localizationKey: "CleanGeometry",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Clean Geometry",
    fallbackDescription: "For a moment, every useful angle appears perfectly obvious. Before the end of your next turn, when you make your next spell attack, you may choose any corner of your space when determining cover and line of effect. One allied creature whose space the line passes through does not grant cover for that attack. Solid barriers and other creatures still function normally. The surge then ends.",
    tags: ["geometry", "cover", "line-of-effect", "ally", "one-use", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-013-widened-aperture",
    localizationKey: "WidenedAperture",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Widened Aperture",
    fallbackDescription: "The opening left by the spell remains wide enough to carry you with it. Before the end of your next turn, immediately before making your next spell attack, you may Step as a free action. This Step does not trigger reactions from the original target. The surge ends after the spell attack, whether or not you Step.",
    tags: ["step", "positioning", "spell-attack", "free-action", "reaction-protection", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-014-effortless-transition",
    localizationKey: "EffortlessTransition",
    tone: "neutral",
    impact: "moderate",
    fallbackTitle: "Effortless Transition",
    fallbackDescription: "The completed pattern releases you into the next motion without resistance. Before the end of your next turn, the first action you use that is not Cast a Spell does not trigger reactions from the original target. An activity containing Cast a Spell does not qualify. The surge is consumed only when it prevents at least one reaction from that target.",
    tags: ["action-transition", "reaction-protection", "target-specific", "conditional-consumption", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-015-trait-in-harmony",
    localizationKey: "TraitInHarmony",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Trait in Harmony",
    fallbackDescription: "One meaningful trait of the successful spell keeps resonating. Choose one of its traits other than attack, concentrate, manipulate, or a tradition trait. Before the end of your next turn, the next spell you cast with that trait gains a +1 circumstance bonus to its spell attack roll or counteract check. A spell without either roll does not consume the surge.",
    tags: ["spell-trait", "counteract", "spell-attack", "circumstance-bonus", "conditional-consumption", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-016-backwash-barrier",
    localizationKey: "BackwashBarrier",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Backwash Barrier",
    fallbackDescription: "Returning magical pressure hardens into a brief barrier around you. For 1 round, you gain a +1 circumstance bonus to AC.",
    tags: ["defense", "armor-class", "circumstance-bonus", "effect"],
    effect: {
      duration: ONE_ROUND,
      components: [
        { type: "modifier", selector: "ac", value: 1, modifierType: "circumstance", predicate: [] }
      ]
    }
  }),
  defineSpellAttackSurge({
    id: "sas-017-reactions-drowned-out",
    localizationKey: "ReactionsDrownedOut",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Reactions Drowned Out",
    fallbackDescription: "The resonance floods the instant in which the target would answer your magic. Before the end of your next turn, the next Cast a Spell action you use does not trigger reactions from the original target. Other creatures can react normally, and reactions triggered after the spell resolves are unaffected. The surge then ends.",
    tags: ["cast-a-spell", "reaction-suppression", "target-specific", "one-use", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-018-stable-center",
    localizationKey: "StableCenter",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Stable Center",
    fallbackDescription: "Your magic settles around you like a perfectly balanced gyroscope. For 1 round, you gain a +1 circumstance bonus to your Fortitude DC and Reflex DC.",
    weight: 2,
    tags: ["fortitude-dc", "reflex-dc", "forced-movement", "circumstance-bonus", "effect"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          type: "modifier",
          selector: ["fortitude-dc", "reflex-dc"],
          value: 1,
          modifierType: "circumstance",
          predicate: []
        }
      ]
    }
  }),
  defineSpellAttackSurge({
    id: "sas-019-harmonic-resistance",
    localizationKey: "HarmonicResistance",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Harmonic Resistance",
    fallbackDescription: "The successful spell tunes your aura against raw magical energy. For 1 round, you gain resistance 3 to energy damage.",
    tags: ["resistance", "energy", "effect"],
    effect: {
      duration: ONE_ROUND,
      components: [
        { type: "resistance", resistanceType: "energy", value: 3 }
      ]
    }
  }),
  defineSpellAttackSurge({
    id: "sas-020-magic-knows-its-way-back",
    localizationKey: "MagicKnowsItsWayBack",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Magic Knows Its Way Back",
    fallbackDescription: "The resonance teaches your defenses the route back to the original target. Before the end of your next turn, you gain a +2 circumstance bonus to the next saving throw you attempt against a spell or magical effect created by that target. The surge is consumed only when that saving throw occurs.",
    tags: ["saving-throw", "magic", "target-specific", "circumstance-bonus", "conditional-consumption", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-021-shared-frequency",
    localizationKey: "SharedFrequency",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Shared Frequency",
    fallbackDescription: "The spell's rhythm leaps to a nearby ally. Choose one ally within 30 feet who can perceive you. Before the end of your next turn, that ally gains a +1 circumstance bonus to its next attack roll against the original target. The surge is consumed only when the ally makes that attack.",
    tags: ["ally", "attack-roll", "circumstance-bonus", "target-specific", "one-use", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-022-follow-the-glow",
    localizationKey: "FollowTheGlow",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Follow the Glow",
    fallbackDescription: "The residual glow sketches a clean route to the target. Choose one ally within 30 feet who can perceive the original target. Before the end of your next turn, that ally's next attack against the target either ignores the concealed condition or treats the target's cover as one degree lower. The ally chooses when making the attack. The surge is consumed only if it removes a flat check or reduces cover.",
    tags: ["ally", "cover", "concealed", "flat-check", "target-specific", "conditional-consumption", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-023-borrowed-insight",
    localizationKey: "BorrowedInsight",
    tone: "neutral",
    impact: "moderate",
    fallbackTitle: "Borrowed Insight",
    fallbackDescription: "The impact writes a brief annotation around the target. Choose one ally within 30 feet who can perceive it. That ally may immediately Recall Knowledge about the original target as a free action and gains a +1 circumstance bonus to the check. Use the ally's own skill modifier and apply the normal adjustment for repeated Recall Knowledge attempts.",
    tags: ["ally", "recall-knowledge", "free-action", "circumstance-bonus", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-024-arc-between-allies",
    localizationKey: "ArcBetweenAllies",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Arc Between Allies",
    fallbackDescription: "A harmless arc of resonance links you to one ally within 30 feet who can perceive you. Until the start of your next turn, that ally gains a +1 circumstance bonus to saving throws against spells and magical effects created by the original target. If the original target cannot create such an effect during that time, the ally instead gains the bonus to the next saving throw it attempts against any spell before the end of your next turn. The arc then fades.",
    tags: ["ally", "saving-throw", "magic", "circumstance-bonus", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-025-conduit-open",
    localizationKey: "ConduitOpen",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Conduit Open",
    fallbackDescription: "The resonance turns a willing ally into a temporary magical waypoint. Choose one ally within 30 feet who can perceive you. Before the end of your next turn, when you Cast a Spell with a listed range other than touch or self, you may determine that spell's range, area origin, cover, and line of effect from the ally's space. You must have line of effect to the ally, and the ally must have line of effect to every target or space affected. You remain the caster, and reactions triggered by your Cast a Spell action originate from your actual space. The surge is consumed only when it creates a legal spell placement you use.",
    tags: ["ally", "conduit", "range", "area-origin", "line-of-effect", "conditional-consumption", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-026-reality-nods-once",
    localizationKey: "RealityNodsOnce",
    tone: "humorous",
    impact: "light",
    fallbackTitle: "Reality Nods Once",
    fallbackDescription: "The surrounding world gives one tiny, unmistakably approving gesture. For 1 round, you gain a +1 status bonus to Deception and Intimidation checks.",
    weight: 2,
    tags: ["deception", "intimidation", "status-bonus", "effect"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          type: "modifier",
          selector: ["deception", "intimidation"],
          value: 1,
          modifierType: "status",
          predicate: []
        }
      ]
    }
  }),
  defineSpellAttackSurge({
    id: "sas-027-colors-remember",
    localizationKey: "ColorsRemember",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Colors Remember",
    fallbackDescription: "The spell's colors remain in the air and quietly redraw every movement around you. For 1 round, you gain a +1 status bonus to Perception checks and Perception DC.",
    tags: ["perception", "tracking", "status-bonus", "effect"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          type: "modifier",
          selector: ["perception", "perception-dc"],
          value: 1,
          modifierType: "status",
          predicate: []
        }
      ]
    }
  }),
  defineSpellAttackSurge({
    id: "sas-028-the-spell-wants-another-word",
    localizationKey: "TheSpellWantsAnotherWord",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "The Spell Wants Another Word",
    fallbackDescription: "The completed spell refuses to end the conversation. You may immediately Sustain one spell or other effect you control as a free action. If you currently control nothing you can Sustain, the next Sustain action you use before the end of your next turn is instead a free action. This does not let you Sustain an effect more often than its rules allow and does not bypass any frequency, trigger, or other requirement.",
    tags: ["sustain", "free-action", "action-economy", "frequency-protection", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-029-helpful-afterimage",
    localizationKey: "HelpfulAfterimage",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Helpful Afterimage",
    fallbackDescription: "A cooperative afterimage remains in the space from which you made the critical spell attack. Before the end of your next turn, your next spell attack against a creature other than the original target may determine range, cover, and line of effect from the afterimage's space. You must have line of effect to the afterimage, and the afterimage must have line of effect to the new target. You remain the caster, and reactions to Cast a Spell are triggered from your actual space. The surge is consumed only when you use the afterimage to make a legal attack.",
    tags: ["afterimage", "spell-attack", "range", "cover", "line-of-effect", "different-target", "conditional-consumption", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-030-the-weave-takes-interest",
    localizationKey: "TheWeaveTakesInterest",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "The Weave Takes Interest",
    fallbackDescription: "The surrounding magic offers three quiet corrections. Choose one when this card is drawn. Anchor: before the end of your next turn, reduce the first forced movement caused by a spell or magical effect by 10 feet. Trace: until the end of your next turn, you always know the direction to the original target while it is within 120 feet and on the same plane, though not its distance or exact space. Clarify: before the end of your next turn, gain a +2 circumstance bonus to one counteract check or one Recall Knowledge check about a spell or magical effect. The chosen correction is consumed only when used and cannot be changed later.",
    tags: ["choice", "forced-movement", "direction", "counteract", "recall-knowledge", "conditional-consumption", "manual"]
  })
]);
