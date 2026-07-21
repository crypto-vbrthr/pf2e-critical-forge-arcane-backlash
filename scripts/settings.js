import { ARCANE_PACK_CONFIGS } from "./packs/arcane-backlash.js";

export const MODULE_ID = "pf2e-critical-forge-arcane-backlash";

const SETTING_LOCALIZATION = Object.freeze({
  enableMiscastRepercussions: "MiscastRepercussions",
  enableDefiantReversals: "DefiantReversals",
  enableSpellAttackSurges: "SpellAttackSurges",
  enableOverwhelmingResonance: "OverwhelmingResonance"
});

export function registerArcaneBacklashSettings(onPackSettingChanged) {
  for (const config of ARCANE_PACK_CONFIGS) {
    const localizationKey = SETTING_LOCALIZATION[config.settingKey];
    game.settings.register(MODULE_ID, config.settingKey, {
      name: `PF2ECFAB.Settings.${localizationKey}.Name`,
      hint: `PF2ECFAB.Settings.${localizationKey}.Hint`,
      scope: "world",
      config: true,
      type: Boolean,
      default: false,
      onChange: () => onPackSettingChanged?.()
    });
  }
}

export function isArcanePackEnabled(settingKey) {
  return Boolean(game.settings.get(MODULE_ID, settingKey));
}
