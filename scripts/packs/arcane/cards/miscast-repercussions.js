import { defineMiscastRepercussion } from "../card-factory.js";

export const MISCAST_REPERCUSSION_CARDS = Object.freeze([
  defineMiscastRepercussion({
    id: "mr-001-arcane-recoil",
    localizationKey: "ArcaneRecoil",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Arcane Recoil",
    fallbackDescription: "The failed spell snaps backward along its own path. You are pushed 5 feet directly away from the target, if possible. This is forced movement. If you cannot be moved, the first 5 feet of your next voluntary movement before the start of your next turn costs 5 additional feet of movement.",
    tags: ["forced-movement", "positioning", "movement-cost", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-002-resonant-hands",
    localizationKey: "ResonantHands",
    tone: "neutral",
    impact: "moderate",
    fallbackTitle: "Resonant Hands",
    fallbackDescription: "Residual magic clings to every precise motion. Until the start of your next turn, the first time you use an action with the manipulate trait, the target may Step as a free action after that action resolves. If it cannot or chooses not to Step, it instead gains a +1 circumstance bonus to AC against your next spell attack before the end of your next turn. The repercussion then ends.",
    tags: ["manipulate", "target-movement", "spell-defense", "conditional", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-003-feedback-pulse",
    localizationKey: "FeedbackPulse",
    tone: "serious",
    impact: "light",
    fallbackTitle: "Feedback Pulse",
    fallbackDescription: "The target feels the spell's return path and learns its rhythm. It gains a +1 circumstance bonus to AC against your next spell attack before the end of your next turn. The benefit is consumed when that attack resolves.",
    weight: 2,
    tags: ["target-defense", "spell-attack", "one-use", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-004-spellshock",
    localizationKey: "Spellshock",
    tone: "serious",
    impact: "light",
    fallbackTitle: "Spellshock",
    fallbackDescription: "The backlash numbs your instinctive grasp of magic. Until the start of your next turn, you cannot use reactions that Cast a Spell or have the spell trait.",
    tags: ["reaction-restriction", "spell-reaction", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-005-energy-grounding",
    localizationKey: "EnergyGrounding",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Energy Grounding",
    fallbackDescription: "The escaped power digs into the surroundings instead of fading. The GM chooses one suitable 5-foot space adjacent to you and roughly along the line toward the target. That space becomes difficult terrain until the start of your next turn. If no suitable space exists, the first time you Step or Stride before then, the first 5 feet of that movement costs 5 additional feet.",
    tags: ["environment", "difficult-terrain", "movement-cost", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-006-broken-cadence",
    localizationKey: "BrokenCadence",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Broken Cadence",
    fallbackDescription: "Your casting rhythm has acquired an unwanted extra beat. Until the end of your next turn, whenever you Cast a Spell, your immediately following action cannot also be Cast a Spell. The repercussion ends after it changes your action sequence once.",
    tags: ["action-sequencing", "cast-a-spell", "one-use", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-007-lingering-syllable",
    localizationKey: "LingeringSyllable",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Lingering Syllable",
    fallbackDescription: "One fragment of the incantation refuses to stop repeating. Until the start of your next turn, every creature that can hear you knows which space you occupy. This does not remove concealment or invisibility, but it prevents your location from being acoustically uncertain.",
    weight: 2,
    tags: ["auditory", "location", "stealth", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-008-crossed-intent",
    localizationKey: "CrossedIntent",
    tone: "dramatic",
    impact: "light",
    fallbackTitle: "Crossed Intent",
    fallbackDescription: "The spell still expects the target to be somewhere else. Your next spell attack against the same target before the end of your next turn takes a -1 circumstance penalty unless you have moved to a different space since the miscast. The repercussion is consumed only when it applies to an attack.",
    tags: ["spell-attack", "positioning", "circumstance-penalty", "conditional-consumption", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-009-forced-recalculation",
    localizationKey: "ForcedRecalculation",
    tone: "neutral",
    impact: "moderate",
    fallbackTitle: "Forced Recalculation",
    fallbackDescription: "Distance, angle, and magical focus all disagree. Before your next spell attack before the end of your next turn, you may spend a single action with the concentrate trait to recalculate. If you do not, that spell attack takes a -2 circumstance penalty. The repercussion is then consumed.",
    tags: ["action-tax", "concentrate", "spell-attack", "circumstance-penalty", "one-use", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-010-empty-follow-through",
    localizationKey: "EmptyFollowThrough",
    tone: "humorous",
    impact: "light",
    fallbackTitle: "Empty Follow-Through",
    fallbackDescription: "Your body completes a magnificent casting motion for a spell that has already left the building. Your next action cannot include a spell attack. If you have no actions remaining this turn, this restriction applies to your first action on your next turn.",
    weight: 2,
    tags: ["action-sequencing", "spell-attack", "manual"]
  })
]);
