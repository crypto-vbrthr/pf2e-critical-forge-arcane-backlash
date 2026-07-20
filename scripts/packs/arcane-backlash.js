import { ARCANE_PACK_IDS } from "./arcane/card-factory.js";
import { MISCAST_REPERCUSSION_CARDS } from "./arcane/cards/miscast-repercussions.js";

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
    version: "0.1.0",
    priority: 10,
    enabled: Boolean(isEnabled(config.settingKey)),
    metadata: config.metadata,
    cards: config.cards
  }));
}
