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
  })
]);
