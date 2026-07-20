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
  }),
  defineMiscastRepercussion({
    id: "mr-011-reality-pushes-back",
    localizationKey: "RealityPushesBack",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Reality Pushes Back",
    fallbackDescription: "The spell distorts the space beside you instead of crossing it cleanly. The GM chooses an unoccupied space adjacent to you that is neither closer to nor farther from the target. You are pushed 5 feet into that space, if possible. If no such space exists, the target gains a +1 circumstance bonus to AC against your next spell attack before the end of your next turn.",
    tags: ["forced-movement", "lateral-movement", "spell-defense", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-012-unstable-casting-ground",
    localizationKey: "UnstableCastingGround",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Unstable Casting Ground",
    fallbackDescription: "The space beneath you continues to hum with the failed spell. Until the start of your next turn, the first time you Cast a Spell without first leaving that space, the original target may Step as a free action after the spell resolves. Moving to a different space ends the repercussion without triggering it.",
    tags: ["positioning", "target-movement", "cast-a-spell", "conditional", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-013-collapsed-angle",
    localizationKey: "CollapsedAngle",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Collapsed Angle",
    fallbackDescription: "The failed trajectory leaves a magical blind angle behind. The original target gains lesser cover against your next spell attack made from your current space before the end of your next turn. The repercussion is consumed only when that cover applies; moving to another space ends it harmlessly.",
    weight: 2,
    tags: ["cover", "positioning", "spell-attack", "conditional-consumption", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-014-targeted-by-the-echo",
    localizationKey: "TargetedByTheEcho",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Targeted by the Echo",
    fallbackDescription: "The returning resonance points straight back to you. The target may immediately Seek as a free action, and the area it searches must include your space. If the target already observes you, it may instead Step toward available cover.",
    tags: ["seek", "location", "target-action", "cover", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-015-folded-distance",
    localizationKey: "FoldedDistance",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Folded Distance",
    fallbackDescription: "For a moment, the distance to the target folds the wrong way. Until the end of your next turn, the original target counts as 10 feet farther away when determining the range of your next spell attack against it. The repercussion is consumed when that spell attack is declared, even if the altered distance places the target out of range.",
    tags: ["range", "spell-attack", "target-specific", "one-use", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-016-afterimage",
    localizationKey: "Afterimage",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Afterimage",
    fallbackDescription: "The spell leaves the target half a heartbeat away from its own image. Your next attack against the original target before the end of your next turn must pass a DC 5 flat check as though the target were concealed. If another effect already requires an equal or higher flat check, this repercussion does not add a second check and is not consumed.",
    tags: ["concealment", "flat-check", "target-specific", "conditional-consumption", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-017-luminous-outline",
    localizationKey: "LuminousOutline",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Luminous Outline",
    fallbackDescription: "Residual magic sketches your outline in light, ash, frost, shadow, or some equally unhelpful medium. Until the start of your next turn, the original target always knows which space you occupy, and you cannot become hidden or undetected from it. Concealment and invisibility still function normally.",
    weight: 2,
    tags: ["visibility", "location", "stealth", "target-specific", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-018-echoing-presence",
    localizationKey: "EchoingPresence",
    tone: "serious",
    impact: "light",
    fallbackTitle: "Echoing Presence",
    fallbackDescription: "Your magical presence echoes from several directions, but never quietly. Until the start of your next turn, creatures that can hear you gain a +2 circumstance bonus to Seek you. On a failed, but not critically failed, Seek attempt, they still learn the direction of your space.",
    tags: ["auditory", "seek", "stealth", "circumstance-bonus", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-019-colors-out-of-order",
    localizationKey: "ColorsOutOfOrder",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Colors Out of Order",
    fallbackDescription: "The world keeps the target in focus and rearranges everything else. Until the start of your next turn, every creature other than the original target is concealed from you. You may spend a single action with the concentrate trait to restore the proper order and end this repercussion early.",
    tags: ["perception", "concealment", "concentrate", "strong", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-020-magical-tell",
    localizationKey: "MagicalTell",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Magical Tell",
    fallbackDescription: "The failure exposes a repeatable flaw in your technique. Before the end of your next turn, the original target gains a +1 circumstance bonus to AC or to a saving throw against the next spell you cast that includes it. The benefit is consumed only when it modifies that spell's defense.",
    weight: 2,
    tags: ["spell-defense", "saving-throw", "armor-class", "target-specific", "conditional-consumption", "manual"]
  })
,
  defineMiscastRepercussion({
    id: "mr-021-frayed-pattern",
    localizationKey: "FrayedPattern",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Frayed Pattern",
    fallbackDescription: "The spell unravels into loose magical threads around your current space. Until the start of your next turn, the first 5 feet of movement you make from that space costs 5 additional feet, and you cannot Step from it. Leaving the space ends the repercussion.",
    tags: ["magical-residue", "movement-cost", "step-restriction", "positioning", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-022-wrong-shape",
    localizationKey: "WrongShape",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Wrong Shape",
    fallbackDescription: "The spell briefly forms a shield where an attack shape should have been. Until the start of your next turn, the original target provides lesser cover against your spell attacks to every creature adjacent to it, regardless of relative size. The target does not gain this cover itself.",
    weight: 2,
    tags: ["wrong-geometry", "lesser-cover", "adjacent-creatures", "spell-attack", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-023-delayed-spark",
    localizationKey: "DelayedSpark",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Delayed Spark",
    fallbackDescription: "A fragment of the failed spell remains behind, waiting for its cue. At the start of your next turn, before you take your first action, you must either Step, spend a single action with the concentrate trait to disperse it, or let it flare. If it flares, your first spell attack that turn takes a -1 circumstance penalty, and every creature that can see the flare knows your space.",
    tags: ["delayed", "choice", "concentrate", "spell-attack", "location", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-024-spell-snag",
    localizationKey: "SpellSnag",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Spell Snag",
    fallbackDescription: "A loose strand of the spell catches on the original target. Until the end of your next turn, the first time you Cast a Spell that does not include that target, the target may use its reaction to Step or Take Cover after the spell resolves. You may spend a single action with the concentrate trait before casting to sever the strand and end the repercussion.",
    tags: ["magical-link", "target-reaction", "step", "take-cover", "concentrate", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-025-unfinished-ending",
    localizationKey: "UnfinishedEnding",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Unfinished Ending",
    fallbackDescription: "The spell's final structure keeps asking to be completed. Until the end of your next turn, the first time you use an action with the concentrate trait, your immediately following action cannot also have the concentrate trait. You may instead spend a single action with the concentrate trait solely to finish the ending; doing so ends the repercussion without restricting the following action.",
    tags: ["concentrate", "action-sequencing", "stabilization", "one-use", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-026-shadow-arrives-late",
    localizationKey: "ShadowArrivesLate",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Shadow Arrives Late",
    fallbackDescription: "Your shadow repeats the failed spell a heartbeat after you do. Before the end of your next turn, when you next select the original target for a spell attack, it may use its reaction to Step before the attack roll. If that Step makes the target invalid, you may choose another eligible target for the same spell attack; otherwise the attack continues normally. The repercussion then ends.",
    tags: ["shadow", "target-reaction", "step", "spell-attack", "retarget", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-027-voice-of-the-wrong-element",
    localizationKey: "VoiceOfTheWrongElement",
    tone: "humorous",
    impact: "light",
    fallbackTitle: "Voice of the Wrong Element",
    fallbackDescription: "Your voice emerges as crackling flame, grinding stone, distant thunder, grave-cold whispering, or another sound that has never paid rent in a throat. Until the start of your next turn, your speech can be heard clearly out to 60 feet, you cannot whisper, and the original target gains a +1 circumstance bonus to saves against auditory or linguistic effects you create.",
    weight: 2,
    tags: ["auditory", "linguistic", "voice", "spell-defense", "humorous", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-028-familiar-geometry",
    localizationKey: "FamiliarGeometry",
    tone: "neutral",
    impact: "strong",
    fallbackTitle: "Familiar Geometry",
    fallbackDescription: "The surroundings snap into one impossibly perfect line. Draw a line from the center of your space through the center of the original target's space and extend it 30 feet in both directions. Until the start of your next turn, creatures making attacks entirely along that line ignore lesser cover. Standard and greater cover still apply. This benefit is available to allies and enemies alike.",
    tags: ["geometry", "firing-line", "lesser-cover", "all-creatures", "strong", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-029-applause-from-nowhere",
    localizationKey: "ApplauseFromNowhere",
    tone: "humorous",
    impact: "light",
    fallbackTitle: "Applause from Nowhere",
    fallbackDescription: "An unseen audience responds with one round of impeccably timed, deeply unhelpful applause. Until the start of your next turn, you cannot Hide or Create a Diversion from creatures that can hear the applause, and the first enemy to attempt to Demoralize you gains a +1 circumstance bonus to that check. The audience offers no further notes.",
    weight: 2,
    tags: ["auditory", "stealth", "demoralize", "circumstance-bonus", "humorous", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-030-reality-takes-notes",
    localizationKey: "RealityTakesNotes",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Reality Takes Notes",
    fallbackDescription: "Runes, sparks, or whispering marks record the failed spell's target, angle, and cadence. Before the end of your next turn, if you repeat the same spell attack against the original target, it may use its reaction after you select it but before the attack roll to Step. If the Step makes it an invalid target, you may choose another eligible target for the same spell attack. The record then vanishes whether or not the reaction was used.",
    tags: ["prediction", "repeat-spell", "target-reaction", "step", "retarget", "manual"]
  })
]);
