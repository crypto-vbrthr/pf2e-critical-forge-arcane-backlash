import { defineDefiantReversal } from "../card-factory.js";

export const DEFIANT_REVERSAL_CARDS = Object.freeze([
  defineDefiantReversal({
    id: "dr-001-stand-through-it",
    localizationKey: "StandThroughIt",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Stand Through It",
    fallbackDescription: "The spell breaks around you and leaves a hard-edged wake in the air. Until the start of your next turn or until you leave your current space, you gain lesser cover against attacks and spell attacks from the original caster. If you already have lesser cover from another source, treat it as standard cover against that caster instead. This cannot increase your cover beyond standard cover.",
    tags: ["reflex", "cover", "anchored-defense", "original-caster", "manual"],
    filters: { saveTypes: ["reflex"] }
  }),
  defineDefiantReversal({
    id: "dr-002-not-today",
    localizationKey: "NotToday",
    tone: "humorous",
    impact: "light",
    fallbackTitle: "Not Today",
    fallbackDescription: "Your refusal leaves a pocket of ordinary courage around you. Until the start of your next turn, you and allies adjacent to you gain a +1 circumstance bonus to saving throws against fear or emotion effects created by the original caster. A creature gains this benefit only while adjacent to you. This does not reduce an existing frightened value.",
    weight: 2,
    tags: ["will", "fear", "emotion", "allies", "defiant-aura", "manual"],
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
    fallbackDescription: "Your resistance tears loose more magic than this spell alone. Choose one other ongoing spell effect created by the original caster that is affecting you and has a remaining duration measured in rounds. Reduce its remaining duration by 1 round. If it has 1 round or less remaining, it instead ends at the start of your next turn. This card can never make an effect end later than it otherwise would. If no effect qualifies, you instead gain a +1 circumstance bonus to your next saving throw against a spell from the original caster before the end of your next turn.",
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
    fallbackDescription: "The spell has shown you the trick once, and you are ready for the repeat performance. Before the end of your next turn, when the original caster begins casting the same spell and you can perceive the casting, you may use your reaction before the spell resolves to Raise a Shield or Take Cover, following the normal requirements for the chosen action. The reversal is consumed only if you use the reaction.",
    tags: ["repeat-spell", "reaction", "raise-a-shield", "take-cover", "manual"]
  }),
  defineDefiantReversal({
    id: "dr-008-name-the-weakness",
    localizationKey: "NameTheWeakness",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Name the Weakness",
    fallbackDescription: "You expose the flaw in the magic while it is still visible. Choose one ally within 30 feet who can perceive you. Before the end of your next turn, that ally gains a +1 circumstance bonus to their next counteract check against a spell or magical effect created by the original caster, or to their next Recall Knowledge check about that caster's magic. The benefit is consumed only when it modifies a check.",
    tags: ["ally", "counteract", "recall-knowledge", "teamwork", "manual"]
  }),
  defineDefiantReversal({
    id: "dr-009-familiar-signature",
    localizationKey: "FamiliarSignature",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Familiar Signature",
    fallbackDescription: "You recognize the caster's magical signature beneath every disguise. Until the end of your next turn, when the original caster and magical duplicates, disguises, projected images, or decoys created by that caster occupy different spaces, you always recognize which space contains the original caster. Such effects still impose their normal concealment, flat checks, random-target, or decoy-resolution procedures. This card does not override an effect's explicit method for determining which image or target is affected.",
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
    fallbackDescription: "The failed spell leaves a bright ache along its connection to the source. Until the end of your next turn, you know the direction to the original caster and whether they are within 30 feet, within 60 feet, or farther away. This does not reveal the caster's exact space or change the hidden or undetected condition. Your next Seek check to locate the original caster before then gains a +2 circumstance bonus, and the reversal ends after that check.",
    tags: ["magical-connection", "direction", "distance", "seek", "original-caster", "manual"]
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
    fallbackDescription: "The magic remembers being refused. Before the end of your next turn, if the original caster chooses the same spell, casts it from the same space, and includes you again, you gain a +1 circumstance bonus to AC or to your saving throw against that spell. Check these conditions after the caster has chosen the spell, casting space, targets, and area, but before any attack roll or saving throw is made. Changing either the spell or the casting space avoids the reversal. The benefit is consumed only when it modifies your defense.",
    weight: 2,
    tags: ["repeat-spell", "casting-space", "spell-defense", "conditional-consumption", "manual"]
  }),
  defineDefiantReversal({
    id: "dr-014-resonance-returned",
    localizationKey: "ResonanceReturned",
    tone: "dramatic",
    impact: "light",
    fallbackTitle: "Resonance Returned",
    fallbackDescription: "The rejected resonance clings to the caster's next attempt to maintain their magic. Until the end of your next turn, the first time the original caster Sustains a Spell, both the caster and the sustained spell effect flare visibly or audibly until that action resolves. You and allies within 30 feet who can perceive either endpoint know which effect was sustained and treat the caster as observed for reactions triggered by the Sustain action. Normal detection resumes after the action.",
    tags: ["will", "sustain-a-spell", "spell-effect", "allies", "reaction-visibility", "manual"],
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
    fallbackDescription: "The failed magic leaves a brief path through its own hazards. Before the end of your next turn, during one Step or Stride, you may ignore the additional movement cost of up to 10 feet of difficult terrain created by the triggering spell. You may also enter one square of dangerous terrain created by the triggering spell, or one square with an effect created by that spell that occurs only when the square is entered, without triggering that entry effect. Ongoing, whole-area, start-of-turn, and end-of-turn effects still apply.",
    weight: 2,
    tags: ["reflex", "difficult-terrain", "dangerous-terrain", "movement", "manual"],
    filters: { saveTypes: ["reflex"] }
  }),
  defineDefiantReversal({
    id: "dr-019-reclaim-the-ground",
    localizationKey: "ReclaimTheGround",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Reclaim the Ground",
    fallbackDescription: "Your resistance fixes one point of the battlefield in ordinary reality. Choose your space or one adjacent space affected by the triggering spell. Until the start of your next turn, the first ally to enter or begin their turn in that space may use their reaction when the original caster would forcibly move, teleport, or place them. Reduce measured forced movement by 5 feet. Against teleportation or placement, the ally may remain in the anchored space instead if it is legal. The anchor then ends. If no adjacent space was affected by the spell, choose your own space.",
    tags: ["fortitude", "ally", "anchor", "forced-movement", "teleportation", "reaction", "manual"],
    filters: { saveTypes: ["fortitude"] }
  }),
  defineDefiantReversal({
    id: "dr-020-wrong-side-of-the-ward",
    localizationKey: "WrongSideOfTheWard",
    tone: "humorous",
    impact: "moderate",
    fallbackTitle: "Wrong Side of the Ward",
    fallbackDescription: "The ward has made a small but consequential error about which side you are on. Choose one spell effect created by the original caster that you can perceive and that either grants cover or makes one or more spaces difficult terrain without blocking movement or line of effect. Until the end of your next turn, it does not grant cover to the caster against your attacks, and the first 5 feet of difficult terrain it creates costs you no additional movement. Other effects remain unchanged. If no effect qualifies when the card is drawn, the reversal waits and applies to the first qualifying effect the caster creates before the duration ends.",
    tags: ["reflex", "ward", "cover", "difficult-terrain", "conditional-consumption", "manual"],
    filters: { saveTypes: ["reflex"] }
  }),
  defineDefiantReversal({
    id: "dr-021-proof-of-safety",
    localizationKey: "ProofOfSafety",
    tone: "serious",
    impact: "strong",
    fallbackTitle: "Proof of Safety",
    fallbackDescription: "Your resistance reveals a repeatable path through the spell. Choose one ally within 30 feet who can perceive you. Before the end of your next turn, when that ally attempts a saving throw against the same spell cast by the original caster, they may roll twice and use the better result. This is a fortune effect and cannot be combined with another fortune effect on the roll. The reversal is consumed only when the ally uses it.",
    tags: ["ally", "same-spell", "fortune", "saving-throw", "teamwork", "strong", "manual"]
  }),
  defineDefiantReversal({
    id: "dr-022-hold-the-line",
    localizationKey: "HoldTheLine",
    tone: "serious",
    impact: "moderate",
    fallbackTitle: "Hold the Line",
    fallbackDescription: "Your refusal leaves enough certainty to shelter someone beside you. Before the end of your next turn, when the original caster casts a spell that targets or includes one ally adjacent to you, you may use your reaction before any attack roll or saving throw is made. That ally gains a +1 circumstance bonus to AC or to one saving throw against the triggering spell. The reversal ends after the spell resolves.",
    tags: ["fortitude", "ally", "reaction", "spell-defense", "teamwork", "manual"],
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
    fallbackDescription: "The failed spell exposes a seam in the caster's magical defenses. Choose one ally within 30 feet who can perceive you. Before the end of your next turn, when that ally targets the original caster with an attack or an effect that requires a saving throw, they may ignore one circumstance or status bonus to the caster's AC or saving throw that is granted by a spell effect. The reversal is consumed only when such a bonus is ignored.",
    tags: ["ally", "spell-defense", "ac", "saving-throw", "teamwork", "conditional-consumption", "manual"]
  }),
  defineDefiantReversal({
    id: "dr-025-your-turn",
    localizationKey: "YourTurn",
    tone: "neutral",
    impact: "strong",
    fallbackTitle: "Your Turn",
    fallbackDescription: "You pass the successful pattern to someone else before it fades. Choose one ally within 30 feet who can perceive you. Before the end of your next turn, when that ally attempts the same type of saving throw against a spell from the original caster, they may use your current modifier for that save type instead of their own if yours is higher. Exclude bonuses that applied only to the triggering spell or only to you. Decide before rolling. This is not a fortune effect, and the reversal is consumed when used.",
    tags: ["ally", "borrowed-save", "saving-throw", "same-save", "teamwork", "strong", "manual"]
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
    impact: "moderate",
    fallbackTitle: "Unimpressed by the Cosmos",
    fallbackDescription: "You identify the spell's flaw with the tone of someone correcting a badly labeled exhibit. Until the end of your next turn, before the original caster next Casts a Spell, they must choose: spend a single action with the concentrate trait to recompose their technique, or let the spell announce itself. If they do not recompose, creatures that perceive the casting learn the spell's tradition and traits before it resolves, and the caster's space is known to those creatures until the Cast a Spell activity ends. The reversal then ends.",
    tags: ["humorous", "concentrate", "spell-identification", "reveal", "choice", "manual"]
  }),
  defineDefiantReversal({
    id: "dr-030-return-to-sender-mostly",
    localizationKey: "ReturnToSenderMostly",
    tone: "dramatic",
    impact: "moderate",
    fallbackTitle: "Return to Sender, Mostly",
    fallbackDescription: "The spell does not return, but one embarrassing piece of its presentation does. Until the end of your next turn, the first time you can perceive the original caster beginning to Hide, Sneak, Create a Diversion, or Feint, you may use your reaction before the check is rolled to force the caster to roll the triggering check twice and use the worse result. This is a misfortune effect and cannot combine with another misfortune effect on that check. The visible or audible mark is harmless and fades after the reaction or when the reversal expires.",
    tags: ["reaction", "misfortune", "perception", "stealth", "deception", "hide", "sneak", "manual"]
  }),
]);
