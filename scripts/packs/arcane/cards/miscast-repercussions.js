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
    fallbackDescription: "The failed spell rebounds as a visible pulse in the air around you. The original target chooses one unoccupied 5-foot space adjacent to you that it can perceive. Until the start of your next turn, that space is difficult terrain for you, and creatures gain standard cover against your spell attacks when the attack's line passes through it. If no such space can be chosen, you cannot Step until the start of your next turn.",
    tags: ["feedback-zone", "target-choice", "difficult-terrain", "standard-cover", "step-restriction", "manual"]
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
    impact: "moderate",
    fallbackTitle: "Lingering Syllable",
    fallbackDescription: "One fragment of the incantation refuses to stop repeating. Until the start of your next turn, creatures that can hear the syllable may use reactions triggered by your movement, manipulate actions, or Cast a Spell actions even if they cannot see you. They still need line of effect and must succeed at any flat check normally required to affect a hidden or concealed creature. The syllable does not make you observed.",
    tags: ["auditory", "reaction-trigger", "movement", "manipulate", "cast-a-spell", "stealth", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-008-crossed-intent",
    localizationKey: "CrossedIntent",
    tone: "dramatic",
    impact: "light",
    fallbackTitle: "Crossed Intent",
    fallbackDescription: "The spell's purpose remains crossed with its target. The next spell you Cast before the end of your next turn must either be a different spell from the failed spell or exclude the original target from its targets and area. If it would repeat both the spell and the target, you must first spend a single action with the concentrate trait to realign your intent. The repercussion ends when you Cast that next spell or realign it.",
    tags: ["spell-choice", "target-selection", "concentrate", "action-tax", "one-use", "manual"]
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
    fallbackDescription: "The space beneath you continues to hum with the failed spell. Until the end of your next turn, the first time you Cast a Spell without first leaving that space, the original target may Step as a free action after the spell resolves. Moving to a different space ends the repercussion without triggering it.",
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
    fallbackDescription: "For a moment, the distance to the target folds the wrong way. Until the end of your next turn, the original target counts as 10 feet farther away when determining whether it is within range for your next spell attack against it. Check the altered distance before you commit the action or expend resources. If the target is out of range, you may choose another eligible target or another action, and the repercussion remains. It is consumed only when you make a legal spell attack against the original target using the altered distance.",
    tags: ["range", "spell-attack", "target-specific", "legal-target", "conditional-consumption", "manual"]
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
    fallbackDescription: "Residual magic sketches your outline in light, ash, frost, shadow, or some equally unhelpful medium. Until the start of your next turn, the original target always knows which space you occupy, and you cannot become undetected from it. Concealment or invisibility can still make you concealed or hidden and impose their normal flat checks.",
    weight: 2,
    tags: ["visibility", "location", "stealth", "target-specific", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-018-echoing-presence",
    localizationKey: "EchoingPresence",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Echoing Presence",
    fallbackDescription: "An echo of you remains in the space where the spell failed. Until the end of your next turn, when you next make a spell attack, its target chooses whether range, cover, and line of effect are determined from your current space or the echo's space. It must choose an origin from which the attack is legal; if both are legal, it chooses either. If neither is legal, choose another eligible target or another action. You may spend a single action with the concentrate trait before the attack to collapse the echo. The repercussion ends after an origin is chosen or the echo is collapsed.",
    tags: ["echo", "false-origin", "range", "cover", "line-of-effect", "target-choice", "concentrate", "manual"]
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
    fallbackDescription: "A fragment of the failed spell remains behind, waiting for its cue. At the start of your next turn, your first action must be a Step or a single action with the concentrate trait used to disperse the spark. If you take any other first action, the spark flares before that action resolves. If it flares, your first spell attack that turn takes a -1 circumstance penalty, and every creature that can see the flare knows your space. The repercussion then ends.",
    tags: ["delayed", "first-action", "choice", "concentrate", "spell-attack", "location", "manual"]
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
    fallbackDescription: "The spell's final gesture freezes halfway complete. Until the end of your next turn, one hand or equivalent casting appendage of your choice is occupied maintaining the unfinished pattern. It may continue holding an item already in it, but it cannot manipulate that item, pick up or receive another item, satisfy a free-hand requirement, or be used for an action that requires two hands. You may spend a single action with the manipulate trait to complete the gesture and end the repercussion. If you have no relevant hand or appendage, the first action with the manipulate trait you use before then requires one additional action instead, after which the repercussion ends.",
    tags: ["unfinished-pattern", "occupied-hand", "free-hand", "manipulate", "action-cost", "manual"]
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
    fallbackDescription: "The surroundings snap into a 5-foot-wide corridor centered on a line from your space through the original target's space and extending 30 feet beyond both spaces. Until the start of your next turn, an attack ignores lesser cover if the attacker and target each occupy at least one square in the corridor and the attack's line of effect remains inside it. Standard and greater cover still apply. This benefit is available to allies and enemies alike.",
    tags: ["geometry", "corridor", "firing-line", "lesser-cover", "all-creatures", "strong", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-029-applause-from-nowhere",
    localizationKey: "ApplauseFromNowhere",
    tone: "humorous",
    impact: "light",
    fallbackTitle: "Unsolicited Footnotes",
    fallbackDescription: "Glowing runes orbit you, labeling every gesture and correcting your technique in aggressively tidy script. Until the start of your next turn, you cannot Hide or Create a Diversion from creatures that can see the annotations, and the first enemy to attempt to Demoralize you gains a +1 circumstance bonus to that check. The notes cite no sources.",
    tags: ["visual", "annotations", "stealth", "demoralize", "circumstance-bonus", "humorous", "manual"]
  }),
  defineMiscastRepercussion({
    id: "mr-030-reality-takes-notes",
    localizationKey: "RealityTakesNotes",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Reality Takes Notes",
    fallbackDescription: "Runes, sparks, or whispering marks record the failed spell's target, angle, and cadence. Before the end of your next turn, if you repeat the same spell attack against the original target, it may use its reaction after you select it but before the attack roll to Raise a Shield, Take Cover, or Drop Prone. If none of those options is available, the record grants it lesser cover against that attack. The record then vanishes whether or not the reaction was used.",
    tags: ["prediction", "repeat-spell", "target-reaction", "raise-shield", "take-cover", "drop-prone", "lesser-cover", "manual"]
  }),
]);
