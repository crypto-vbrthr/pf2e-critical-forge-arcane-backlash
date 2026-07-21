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
    impact: "moderate",
    fallbackTitle: "Power Still Singing",
    fallbackDescription: "The spell's rhythm continues looking for somewhere to land. Before the end of your next turn, when you make a spell attack against a creature other than the original target, you may treat your multiple attack penalty as one step lower for that roll: -5 becomes 0, -4 becomes 0, -10 becomes -5, and -8 becomes -4. This does not change your multiple attack penalty for later attacks. The surge is consumed only when it reduces a penalty.",
    tags: ["spell-attack", "multiple-attack-penalty", "different-target", "conditional-consumption", "manual"]
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
    fallbackDescription: "The perfect hit proves that your will can shape the impossible. For 1 round, you gain a +2 circumstance bonus to Will saves against mental effects.",
    tags: ["will", "mental", "circumstance-bonus", "effect"],
    effect: {
      duration: ONE_ROUND,
      components: [
        { type: "modifier", selector: "will", value: 2, modifierType: "circumstance", predicate: ["item:trait:mental"] }
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
    fallbackDescription: "The target's aura answers the spell in several magical languages at once. For 1 round, you gain a +2 circumstance bonus to Arcana, Nature, Occultism, and Religion checks made to Recall Knowledge about the original target or to Identify Magic concerning the triggering spell or an active magical effect on that target. The GM determines whether a check qualifies.",
    tags: ["aura", "recall-knowledge", "identify-magic", "circumstance-bonus", "effect"],
    effect: {
      duration: ONE_ROUND,
      components: [
        {
          type: "modifier",
          selector: ["arcana", "nature", "occultism", "religion"],
          value: 2,
          modifierType: "circumstance",
          predicate: [{ or: ["action:recall-knowledge", "action:identify-magic"] }]
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
    fallbackDescription: "For a moment, every useful angle appears perfectly obvious. Before the end of your next turn, when you make your next spell attack, choose any corner of your space. For that attack only, the chosen corner replaces your normal origin when determining cover and line of effect. One allied creature whose space the line passes through does not grant cover. Solid barriers and other creatures still function normally. The surge then ends.",
    tags: ["geometry", "cover", "line-of-effect", "ally", "one-use", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-013-widened-aperture",
    localizationKey: "WidenedAperture",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Widened Aperture",
    fallbackDescription: "The impact leaves a small aperture hanging beside the target. Before the end of your next turn, when you make your next spell attack against the original target, choose one unoccupied space adjacent to it that is within the spell's range and has line of effect to it. For this attack only, determine range, cover, and line of effect along two segments: from you to the chosen space, then from that space to the target. Solid barriers block either segment, and the target does not move. The surge is consumed only if the aperture makes the attack legal or improves its cover.",
    tags: ["aperture", "spell-placement", "cover", "line-of-effect", "target-specific", "conditional-consumption", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-014-effortless-transition",
    localizationKey: "EffortlessTransition",
    tone: "neutral",
    impact: "moderate",
    fallbackTitle: "Effortless Transition",
    fallbackDescription: "The completed spell leaves one precise motion behind. Before the end of your next turn, you may Interact with one unattended object of light Bulk or less in the original target's space or an adjacent space as though you were adjacent to that object. You must perceive the object and have line of effect to it. You cannot use this to manipulate a held, worn, locked, or otherwise secured object. The Interact action has the manipulate trait and triggers reactions from creatures near your actual space normally; the original target cannot react merely because it is near the object. The surge then ends.",
    tags: ["interact", "remote-manipulation", "original-target", "line-of-effect", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-015-trait-in-harmony",
    localizationKey: "TraitInHarmony",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Trait in Harmony",
    fallbackDescription: "One descriptive trait of the successful spell keeps resonating. Choose one damage, energy, elemental, mental, emotion, sensory, curse, illusion, light, darkness, teleportation, vitality, void, or similarly descriptive trait approved by the GM. You cannot choose attack, cantrip, composition, concentrate, focus, incapacitation, manipulate, ritual, spellshape, summon, a rarity trait, or a tradition trait. Before the end of your next turn, the next spell you cast with the chosen trait gains a +1 circumstance bonus to its spell attack roll or counteract check. A spell without either roll does not consume the surge.",
    tags: ["spell-trait", "counteract", "spell-attack", "circumstance-bonus", "conditional-consumption", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-016-backwash-barrier",
    localizationKey: "BackwashBarrier",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Backwash Barrier",
    fallbackDescription: "Returning magical pressure hardens between you and the original target. Until the start of your next turn, the first attack that target makes against you treats your cover as one degree better: none becomes lesser cover, lesser becomes standard, and standard becomes greater. Greater cover cannot improve further. The barrier collapses after that attack roll and is not consumed if the attack ignores cover or your cover would not improve.",
    tags: ["barrier", "cover", "target-specific", "one-attack", "conditional-consumption", "manual"]
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
    fallbackDescription: "The successful spell tunes your aura to its own damage. Choose one damage type dealt by the triggering spell; for 1 round, you gain resistance 3 to that type. If the spell dealt no damage, you may instead choose a damage type directly represented by one of its traits. If neither option applies, you gain resistance 2 to damage from spells for 1 round. Apply the chosen resistance manually.",
    tags: ["resistance", "damage-type", "spell-trait", "dynamic-choice", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-020-magic-knows-its-way-back",
    localizationKey: "MagicKnowsItsWayBack",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Magic Knows Its Way Back",
    fallbackDescription: "The resonance teaches your defenses the route back to the original target. Before the end of your next turn, you gain a +2 circumstance bonus to the next saving throw you attempt against a spell or magical effect created by that target. If the target instead causes you to attempt a saving throw against a nonmagical effect first, you may apply a +1 circumstance bonus to that save and end the surge. The surge is consumed only when one of these bonuses is used.",
    tags: ["saving-throw", "magic", "target-specific", "fallback", "circumstance-bonus", "conditional-consumption", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-021-shared-frequency",
    localizationKey: "SharedFrequency",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Shared Frequency",
    fallbackDescription: "The target's aura remains tuned to the frequency of hostile spellwork. For 1 round, the target gains weakness 2 to damage from spells.",
    tags: ["target", "weakness", "damage-from-spells", "shared-resonance", "effect"],
    effect: {
      target: "target",
      duration: ONE_ROUND,
      components: [
        { type: "weakness", weaknessType: "damage-from-spells", value: 2 }
      ]
    }
  }),
  defineSpellAttackSurge({
    id: "sas-022-follow-the-glow",
    localizationKey: "FollowTheGlow",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Follow the Glow",
    fallbackDescription: "The residual glow pools around the target's least stable defense. Choose one ally within 30 feet who can perceive the original target. The GM tells that ally which of the target's Fortitude, Reflex, or Will modifiers is currently lowest, naming every tied save but not revealing numerical values. This is a snapshot of the target's current defenses and does not update if they later change.",
    tags: ["ally", "saving-throw", "defense-reading", "magical-glow", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-023-borrowed-insight",
    localizationKey: "BorrowedInsight",
    tone: "neutral",
    impact: "moderate",
    fallbackTitle: "Borrowed Insight",
    fallbackDescription: "The impact writes one useful annotation around the target. Choose one ally within 30 feet who can perceive the target and hear or otherwise understand you. The GM reveals one useful fact about the original target that a successful Recall Knowledge check could reveal and that neither of you already knows; both of you learn it without a check. The GM chooses the fact. If no useful unrevealed fact remains, the ally instead gains a +2 circumstance bonus to its next Recall Knowledge check about that target before the end of your next turn.",
    tags: ["ally", "shared-knowledge", "recall-knowledge", "revealed-fact", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-024-arc-between-allies",
    localizationKey: "ArcBetweenAllies",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Arc Between Allies",
    fallbackDescription: "A harmless arc links your composure to one ally within 30 feet who can perceive you. Until the start of your next turn, when that ally would gain frightened or stupefied from a spell or magical effect, you may use your reaction to reduce the gained condition value by 1 and gain the same condition at value 1 yourself. You cannot use this reaction if you are immune to that condition or already have it at value 1 or higher. The arc ends after the transfer.",
    tags: ["ally", "condition-transfer", "frightened", "stupefied", "reaction", "manual"]
  }),
  defineSpellAttackSurge({
    id: "sas-025-conduit-open",
    localizationKey: "ConduitOpen",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Conduit Open",
    fallbackDescription: "The resonance turns a willing ally into a temporary magical waypoint. Choose one ally within 30 feet who can perceive you. Before the end of your next turn, when you Cast a Spell with a listed range other than touch or self, you may determine that spell's range, cover, line of effect, and eligible area origin from the ally's space. You must have line of effect to the ally, and you must perceive every required target or chosen point as the spell normally requires. The ally must have line of effect to every target or space affected. Emanations, self-centered areas, and spells whose text fixes their origin to you are not eligible. A cone or line begins in the ally's space and is oriented in a direction you choose. You remain the caster, and reactions triggered by your Cast a Spell action originate from your actual space. The surge is consumed only when it creates a legal spell placement you use.",
    tags: ["ally", "conduit", "range", "area-origin", "line-of-effect", "perception", "conditional-consumption", "manual"]
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
    fallbackDescription: "A cooperative afterimage folds over your outline and keeps moving a fraction of a second late. For 1 round, you are concealed. This does not make you hidden or undetected, and creatures using precise senses that are not fooled by the afterimage, or effects that ignore concealment, function normally.",
    tags: ["afterimage", "concealed", "defense", "condition", "effect"],
    effect: {
      duration: ONE_ROUND,
      components: [
        { type: "condition", slug: "concealed" }
      ]
    }
  }),
  defineSpellAttackSurge({
    id: "sas-030-the-weave-takes-interest",
    localizationKey: "TheWeaveTakesInterest",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "The Weave Takes Interest",
    fallbackDescription: "The surrounding magic offers three quiet corrections. Choose one when this card is drawn. Hush: before the end of your next turn, the audible casting manifestations of your next spell cannot be heard more than 30 feet away; this does not remove the auditory trait or suppress sound created by the spell itself. Sheathe: your next spell before the end of your next turn may leave one unattended object of light Bulk or less in its area unaffected; it cannot protect a creature or a held or worn object. Knot: before the end of your next turn, increase the counteract DC by 2 against the original target's first attempt to counteract one spell or magical effect you created. The chosen correction is consumed only when used and cannot be changed later.",
    tags: ["choice", "audible", "object-protection", "counteract-dc", "conditional-consumption", "manual"]
  })
]);
