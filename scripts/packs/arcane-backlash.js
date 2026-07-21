import { ARCANE_PACK_IDS } from "./arcane/card-factory.js";
import { DEFIANT_REVERSAL_CARDS } from "./arcane/cards/defiant-reversals.js";
import { MISCAST_REPERCUSSION_CARDS } from "./arcane/cards/miscast-repercussions.js";
import { SPELL_ATTACK_SURGE_CARDS } from "./arcane/cards/spell-attack-surges.js";

export const ARCANE_PACK_CONFIGS = Object.freeze([
  Object.freeze({
    settingKey: "enableMiscastRepercussions",
    id: ARCANE_PACK_IDS.miscastRepercussions,
    titleKey: "PF2ECFAB.Packs.MiscastRepercussions.Title",
    descriptionKey: "PF2ECFAB.Packs.MiscastRepercussions.Description",
    fallbackTitle: "Arcane Backlash: Miscast Repercussions",
    fallbackDescription: "Critical failures on spell attacks that leave unstable magical recoil, disrupted casting rhythm, and strange tactical aftermaths.",
    cards: MISCAST_REPERCUSSION_CARDS,
    metadata: Object.freeze({
      theme: "arcane-backlash",
      family: "arcane-backlash",
      category: "spell-critical-fumble",
      scope: "spell-attacks-all-traditions"
    })
  }),
  Object.freeze({
    settingKey: "enableDefiantReversals",
    id: ARCANE_PACK_IDS.defiantReversals,
    titleKey: "PF2ECFAB.Packs.DefiantReversals.Title",
    descriptionKey: "PF2ECFAB.Packs.DefiantReversals.Description",
    fallbackTitle: "Arcane Backlash: Defiant Reversals",
    fallbackDescription: "Critical successes on saving throws against spells that turn perfect resistance into insight, movement, and brief magical reversals.",
    cards: DEFIANT_REVERSAL_CARDS,
    metadata: Object.freeze({
      theme: "arcane-backlash",
      family: "arcane-backlash",
      category: "saving-throw-critical-success",
      scope: "spell-saves-all-traditions"
    })
  }),
  Object.freeze({
    settingKey: "enableSpellAttackSurges",
    id: ARCANE_PACK_IDS.spellAttackSurges,
    titleKey: "PF2ECFAB.Packs.SpellAttackSurges.Title",
    descriptionKey: "PF2ECFAB.Packs.SpellAttackSurges.Description",
    fallbackTitle: "Arcane Backlash: Spell Attack Surges",
    fallbackDescription: "Critical successes on spell attacks that leave beneficial resonance, exposed magical patterns, and controllable surges of power.",
    cards: SPELL_ATTACK_SURGE_CARDS,
    metadata: Object.freeze({
      theme: "arcane-backlash",
      family: "arcane-backlash",
      category: "spell-critical-hit",
      scope: "spell-attacks-all-traditions"
    })
  })
]);

export function buildArcaneBacklashPacks(isEnabled = () => false) {
  return ARCANE_PACK_CONFIGS.map((config) => Object.freeze({
    schemaVersion: 1,
    id: config.id,
    titleKey: config.titleKey,
    descriptionKey: config.descriptionKey,
    fallbackTitle: config.fallbackTitle,
    fallbackDescription: config.fallbackDescription,
    version: "0.3.0",
    priority: 10,
    enabled: Boolean(isEnabled(config.settingKey)),
    metadata: config.metadata,
    cards: config.cards
  }));
}
