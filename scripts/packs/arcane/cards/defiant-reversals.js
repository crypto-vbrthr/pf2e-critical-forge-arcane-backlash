import { defineDefiantReversal } from "../card-factory.js";

export const DEFIANT_REVERSAL_CARDS = Object.freeze([
  defineDefiantReversal({
    id: "dr-001-stand-through-it",
    localizationKey: "StandThroughIt",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Stand Through It",
    fallbackDescription: "The spell breaks around you instead of breaking your stride. You may immediately Step as a free action. If you cannot or choose not to Step, the first square of difficult terrain created by the original caster that you enter before the end of your next turn costs no additional movement.",
    tags: ["reflex", "step", "difficult-terrain", "movement", "manual"],
    filters: { saveTypes: ["reflex"] }
  }),
  defineDefiantReversal({
    id: "dr-002-not-today",
    localizationKey: "NotToday",
    tone: "humorous",
    impact: "light",
    fallbackTitle: "Not Today",
    fallbackDescription: "The magic presents its most intimidating argument. You decline to be persuaded. Reduce your frightened value by 1. If you are not frightened, you instead gain a +1 circumstance bonus to your next saving throw against a fear effect created by the original caster before the end of your next turn. The benefit is consumed only when it applies.",
    weight: 2,
    tags: ["will", "fear", "frightened", "saving-throw", "manual"],
    filters: { saveTypes: ["will"] }
  }),
  defineDefiantReversal({
    id: "dr-003-body-remembers",
    localizationKey: "BodyRemembers",
    tone: "serious",
    impact: "light",
    fallbackTitle: "Body Remembers",
    fallbackDescription: "Your body learns the shape of the assault before the last trace of it fades. Before the end of your next turn, your next saving throw against a spell from the original caster that uses the same save type gains a +1 circumstance bonus. The benefit is consumed only when it modifies the roll.",
    tags: ["adaptation", "same-save", "spell-defense", "conditional-consumption", "manual"]
  }),
  defineDefiantReversal({
    id: "dr-004-rooted-in-reality",
    localizationKey: "RootedInReality",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Rooted in Reality",
    fallbackDescription: "For a moment, reality agrees that you belong exactly where you are. Before the end of your next turn, when the original caster would move you against your will, you may use your reaction to reduce that movement by 10 feet, to a minimum of 0 feet. If the effect teleports or places you instead of moving you a measured distance, you may Step immediately after it resolves. The reversal then ends.",
    tags: ["fortitude", "forced-movement", "teleportation", "reaction", "positioning", "manual"],
    filters: { saveTypes: ["fortitude"] }
  }),
  defineDefiantReversal({
    id: "dr-005-shake-the-pattern",
    localizationKey: "ShakeThePattern",
    tone: "serious",
    impact: "strong",
    fallbackTitle: "Shake the Pattern",
    fallbackDescription: "Your resistance tears loose more magic than this spell alone. Choose one other ongoing spell effect created by the original caster that is affecting you and has a remaining duration measured in rounds. Reduce its remaining duration by 1 round, to a minimum of ending at the start of your next turn. If no effect qualifies, you instead gain a +1 circumstance bonus to your next saving throw against a spell from the original caster before the end of your next turn.",
    tags: ["ongoing-effect", "duration-reduction", "spell-defense", "strong", "manual"]
  }),
  defineDefiantReversal({
    id: "dr-006-read-the-weave",
    localizationKey: "ReadTheWeave",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Read the Weave",
    fallbackDescription: "The spell's structure becomes clear at the exact moment it fails. You may immediately attempt to Recall Knowledge as a free action using an appropriate skill to identify the spell, its tradition, or the original caster's magical methods. Use the normal DC. On a success, the GM provides one useful fact relevant to the spell or its caster.",
    weight: 2,
    tags: ["recall-knowledge", "identify", "free-action", "information", "manual"]
  }),
  defineDefiantReversal({
    id: "dr-007-seen-it-now",
    localizationKey: "SeenItNow",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Seen It Now",
    fallbackDescription: "The spell has shown you the trick once, and once was enough. Before the end of your next turn, the next time you attempt a saving throw against the same spell cast by the original caster, reduce any circumstance penalty to that save by 1, to a minimum of 0. If no circumstance penalty applies, you may instead Step after the saving throw resolves. The reversal then ends.",
    tags: ["repeat-spell", "circumstance-penalty", "step", "fallback", "manual"]
  }),
  defineDefiantReversal({
    id: "dr-008-name-the-weakness",
    localizationKey: "NameTheWeakness",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Name the Weakness",
    fallbackDescription: "You expose the flaw in the magic while it is still visible. Choose one ally within 30 feet who can perceive you. Before the end of your next turn, that ally gains a +1 circumstance bonus to their next counteract check against the original caster or their next Recall Knowledge check about that caster's magic. The benefit is consumed only when it modifies a check.",
    tags: ["ally", "counteract", "recall-knowledge", "teamwork", "manual"]
  }),
  defineDefiantReversal({
    id: "dr-009-familiar-signature",
    localizationKey: "FamiliarSignature",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Familiar Signature",
    fallbackDescription: "You recognize the caster's magical signature beneath every disguise. Until the end of your next turn, you can identify the original caster among magical duplicates, disguises, projected images, or decoys created by that caster's own magic. Such effects can still conceal the caster or impose their normal flat checks, but they cannot make you select the wrong duplicate or mistake another creature for the caster.",
    tags: ["will", "magical-signature", "illusion", "duplicates", "recognition", "manual"],
    filters: { saveTypes: ["will"] }
  }),
  defineDefiantReversal({
    id: "dr-010-counterexample",
    localizationKey: "Counterexample",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Counterexample",
    fallbackDescription: "Your resistance proves the spell is neither inevitable nor particularly impressive. Choose one ally within 30 feet who can see or hear you. Before the end of your next turn, that ally gains a +1 circumstance bonus to their next saving throw against a spell from the original caster. The benefit is consumed only when it modifies the roll.",
    tags: ["ally", "saving-throw", "spell-defense", "teamwork", "manual"]
  }),
  defineDefiantReversal({
    id: "dr-011-feedback-glare",
    localizationKey: "FeedbackGlare",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Feedback Glare",
    fallbackDescription: "The spell's failure flashes back along its path and exposes the caster's angle. Before the end of your next turn, your next attack against the original caster treats lesser cover as no cover and standard cover as lesser cover. Greater cover is unchanged. The reversal is consumed only when it changes the caster's cover.",
    tags: ["cover", "attack", "original-caster", "conditional-consumption", "manual"]
  }),
  defineDefiantReversal({
    id: "dr-012-broken-concentration",
    localizationKey: "BrokenConcentration",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Broken Concentration",
    fallbackDescription: "Your resistance leaves a crack in the caster's focus. Before the end of your next turn, the first time the original caster uses an action with the concentrate trait, you may use your reaction after that action resolves to Step or Seek. If you Seek, the area must include the caster's space or last known space. The reversal then ends.",
    tags: ["will", "concentrate", "reaction", "step", "seek", "manual"],
    filters: { saveTypes: ["will"] }
  }),
  defineDefiantReversal({
    id: "dr-013-spell-flinches",
    localizationKey: "SpellFlinches",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Spell Flinches",
    fallbackDescription: "The magic remembers being refused. Before the end of your next turn, if the original caster casts the same spell from the same space and includes you again, you gain a +1 circumstance bonus to AC or to your saving throw against that spell. Changing either the spell or the casting space avoids the reversal. The benefit is consumed only when it modifies your defense.",
    weight: 2,
    tags: ["repeat-spell", "casting-space", "spell-defense", "conditional-consumption", "manual"]
  }),
  defineDefiantReversal({
    id: "dr-014-resonance-returned",
    localizationKey: "ResonanceReturned",
    tone: "dramatic",
    impact: "light",
    fallbackTitle: "Resonance Returned",
    fallbackDescription: "A visible or audible thread of rejected magic leads back to its source. Until the start of your next turn, you and allies within 30 feet who can perceive you always know which space the original caster occupies, and the caster cannot become undetected from those creatures. Concealment, invisibility, and similar effects can still make the caster concealed or hidden and impose their normal flat checks.",
    tags: ["will", "location", "allies", "hidden", "undetected", "manual"],
    filters: { saveTypes: ["will"] }
  }),
  defineDefiantReversal({
    id: "dr-015-the-source-shows",
    localizationKey: "TheSourceShows",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "The Source Shows",
    fallbackDescription: "The collapsing spell draws a clean line back to its origin. Choose one ally within 30 feet who can perceive you. Before the end of your next turn, that ally's next attack against the original caster treats the caster's cover as one degree lower and ignores concealment created by a spell from that caster. Concealment from other sources remains. The benefit is consumed only when it applies.",
    tags: ["ally", "cover", "concealment", "attack", "teamwork", "manual"]
  }),
  defineDefiantReversal({
    id: "dr-016-step-between-sparks",
    localizationKey: "StepBetweenSparks",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Step Between Sparks",
    fallbackDescription: "You find the still point between fragments of the failed spell. You may immediately Step as a free action. After that Step, and until the end of your next turn, the original caster cannot use reactions triggered by your movement. This protection ends after your next action with the move trait.",
    tags: ["reflex", "step", "movement", "reaction-protection", "manual"],
    filters: { saveTypes: ["reflex"] }
  }),
  defineDefiantReversal({
    id: "dr-017-follow-the-collapse",
    localizationKey: "FollowTheCollapse",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Follow the Collapse",
    fallbackDescription: "You advance through the spell at the exact moment its structure gives way. You may immediately Stride up to half your Speed as a free action. You must end this movement closer to the original caster than you began, and the movement triggers reactions normally.",
    tags: ["fortitude", "stride", "approach", "free-action", "strong", "manual"],
    filters: { saveTypes: ["fortitude"] }
  }),
  defineDefiantReversal({
    id: "dr-018-exit-through-the-spell",
    localizationKey: "ExitThroughTheSpell",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Exit Through the Spell",
    fallbackDescription: "The failed magic leaves a brief path through its own hazards. Before the end of your next turn, during one Step or Stride, you may ignore the additional movement cost of up to 10 feet of difficult terrain created by the triggering spell or the original caster. You may also enter one such square without triggering an effect that occurs only when the square is entered. Ongoing, start-of-turn, and end-of-turn effects still apply.",
    weight: 2,
    tags: ["reflex", "difficult-terrain", "hazardous-terrain", "movement", "manual"],
    filters: { saveTypes: ["reflex"] }
  }),
  defineDefiantReversal({
    id: "dr-019-reclaim-the-ground",
    localizationKey: "ReclaimTheGround",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Reclaim the Ground",
    fallbackDescription: "Your resistance forces one patch of the spell to acknowledge ordinary reality. Choose your space or one adjacent 5-foot space within an area created by the triggering spell or the original caster. Until the start of your next turn, that space is not difficult terrain for you, does not trigger effects solely because you enter it, and does not grant the original caster cover or concealment against you. Damage or effects that apply to the whole area, or at the start or end of a turn, still function normally. If no qualifying space exists, you may immediately Step instead.",
    tags: ["fortitude", "area", "terrain", "cover", "concealment", "fallback", "manual"],
    filters: { saveTypes: ["fortitude"] }
  }),
  defineDefiantReversal({
    id: "dr-020-wrong-side-of-the-ward",
    localizationKey: "WrongSideOfTheWard",
    tone: "humorous",
    impact: "moderate",
    fallbackTitle: "Wrong Side of the Ward",
    fallbackDescription: "The ward has made a small but consequential error about which side you are on. Choose one non-solid spell effect, ward, or magical barrier created by the original caster that you can perceive. Until the end of your next turn, it does not provide cover to the caster against your attacks. The first time you move during that time, you may treat one square occupied by that effect as normal terrain for movement if the effect does not explicitly block movement. Other effects of the spell still apply. If no qualifying effect exists, you may immediately Step instead.",
    tags: ["reflex", "ward", "barrier", "cover", "movement", "fallback", "manual"],
    filters: { saveTypes: ["reflex"] }
  }),
  defineDefiantReversal({
    id: "dr-021-proof-of-safety",
    localizationKey: "ProofOfSafety",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Proof of Safety",
    fallbackDescription: "Your resistance reveals a repeatable path through the spell. Choose one ally within 30 feet who can perceive you. Before the end of your next turn, when that ally attempts a saving throw against the same spell cast by the original caster, they may roll twice and use the better result. This is a fortune effect and cannot be combined with another fortune effect on the roll. The reversal is consumed only when the ally uses it.",
    tags: ["ally", "same-spell", "fortune", "saving-throw", "teamwork", "manual"]
  }),
  defineDefiantReversal({
    id: "dr-022-hold-the-line",
    localizationKey: "HoldTheLine",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Hold the Line",
    fallbackDescription: "Your refusal leaves enough certainty to shelter someone beside you. Before the end of your next turn, when the original caster casts a spell that targets or includes one ally adjacent to you, you may use your reaction before any attack roll or saving throw is made. That ally gains a +1 circumstance bonus to AC or to one saving throw against the spell. After the spell resolves, either you or that ally may Step as a free action, but not both. The reversal then ends.",
    tags: ["fortitude", "ally", "reaction", "spell-defense", "step", "teamwork", "manual"],
    filters: { saveTypes: ["fortitude"] }
  }),
  defineDefiantReversal({
    id: "dr-023-shared-defiance",
    localizationKey: "SharedDefiance",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "Shared Defiance",
    fallbackDescription: "The break in the spell spreads from your mind to another. Choose one ally within 30 feet who can perceive you and is affected by an ongoing mental or emotion spell from the original caster that allowed a saving throw. That ally may immediately attempt a new saving throw against the effect at its original DC. On a success, the effect is suppressed until the start of the ally's next turn. On a critical success, apply the spell's normal critical-success result if it is more favorable. If no effect qualifies, the ally may instead reduce frightened by 1.",
    tags: ["will", "ally", "mental", "emotion", "new-save", "suppression", "strong", "manual"],
    filters: { saveTypes: ["will"] }
  }),
  defineDefiantReversal({
    id: "dr-024-opening-in-the-pattern",
    localizationKey: "OpeningInThePattern",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Opening in the Pattern",
    fallbackDescription: "The failed spell leaves one clean gap in the caster's defenses. Choose one ally within 30 feet who can perceive you. Before the end of your next turn, when that ally begins an action that targets the original caster or one of the caster's spell effects, the ally may declare the opening. The original caster cannot use reactions triggered by that action until the action has resolved. The reversal is then consumed.",
    tags: ["ally", "reaction-suppression", "spell-effect", "teamwork", "conditional-consumption", "manual"]
  }),
  defineDefiantReversal({
    id: "dr-025-your-turn",
    localizationKey: "YourTurn",
    tone: "neutral",
    impact: "light",
    fallbackTitle: "Your Turn",
    fallbackDescription: "The spell's collapse gives someone else exactly enough time to act. Choose one ally within 30 feet who can see or hear you. That ally may use their reaction to immediately Seek, Recall Knowledge about the triggering spell or original caster, or Interact to draw or stow one item. Any check uses its normal DC.",
    weight: 2,
    tags: ["ally", "reaction", "seek", "recall-knowledge", "interact", "teamwork", "manual"]
  }),
  defineDefiantReversal({
    id: "dr-026-the-spell-blinks-first",
    localizationKey: "TheSpellBlinksFirst",
    tone: "dramatic",
    impact: "strong",
    fallbackTitle: "The Spell Blinks First",
    fallbackDescription: "The magic hesitates when it tries to face you again. Before the end of your next turn, if the original caster casts a spell from the same space and you are chosen as a target or included in its area, you may use your reaction after its targets or area are chosen but before any attack roll or saving throw. Step. If that Step places you outside the spell's range, line of effect, or area, the spell does not affect you and the caster cannot redirect that part of the spell. The reversal then ends.",
    tags: ["reflex", "reaction", "step", "repeat-casting-space", "spell-avoidance", "strong", "manual"],
    filters: { saveTypes: ["reflex"] }
  }),
  defineDefiantReversal({
    id: "dr-027-refused-narrative",
    localizationKey: "RefusedNarrative",
    tone: "humorous",
    impact: "light",
    fallbackTitle: "Refused Narrative",
    fallbackDescription: "Reality rejects the caster's intended drama and returns it as a conspicuous caricature. Until the start of your next turn, the original caster cannot Feint or Create a Diversion against you, and you gain a +2 circumstance bonus to Perception checks and Perception DC against that caster's Deception actions. If none of those benefits could apply when the card is drawn, you may immediately Sense Motive against the caster instead.",
    tags: ["will", "deception", "feint", "create-a-diversion", "sense-motive", "fallback", "manual"],
    filters: { saveTypes: ["will"] }
  }),
  defineDefiantReversal({
    id: "dr-028-borrowed-echo",
    localizationKey: "BorrowedEcho",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Borrowed Echo",
    fallbackDescription: "A harmless fragment of the spell remains in your grasp. Choose one benefit that fits the spell's visible, audible, or spatial manifestation: immediately Step; gain lesser cover against the original caster until the start of your next turn; or ignore one flat check caused by concealment or the hidden condition when you next target the original caster before the end of your next turn. If more than one choice fits, you choose. The echo fades after granting its benefit.",
    tags: ["borrowed-magic", "choice", "step", "cover", "concealment", "manual"]
  }),
  defineDefiantReversal({
    id: "dr-029-unimpressed-by-the-cosmos",
    localizationKey: "UnimpressedByTheCosmos",
    tone: "humorous",
    impact: "light",
    fallbackTitle: "Unimpressed by the Cosmos",
    fallbackDescription: "You regard the failed magic with an expression usually reserved for disappointing street performances. You may immediately attempt to Demoralize the original caster as a free action with a +1 circumstance bonus. Apply the normal range, perception, language, and temporary-immunity rules. If you cannot attempt the check, reduce your frightened value by 1 instead.",
    weight: 2,
    tags: ["demoralize", "free-action", "frightened", "fallback", "humorous", "manual"]
  }),
  defineDefiantReversal({
    id: "dr-030-return-to-sender-mostly",
    localizationKey: "ReturnToSenderMostly",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Return to Sender, Mostly",
    fallbackDescription: "The spell does not return, but one embarrassing piece of its presentation does. Until the end of your next turn, the first time the original caster attempts to Hide, Sneak, Create a Diversion, or Feint, you may use your reaction to force the caster to roll the triggering check twice and use the worse result. This is a misfortune effect and cannot combine with another misfortune effect on that check. The visible or audible mark is harmless and fades after the reaction or when the reversal expires.",
    tags: ["reaction", "misfortune", "stealth", "deception", "hide", "sneak", "manual"]
  })
]);
