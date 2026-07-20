export const ARCANE_CARD_ID_PREFIX = "pf2e-critical-forge-arcane-backlash";
export const ARCANE_PACK_IDS = Object.freeze({
  miscastRepercussions: `${ARCANE_CARD_ID_PREFIX}.miscast-repercussions`
});

const FILTER_KEYS = Object.freeze([
  "damageTypes", "weaponGroups", "attackTraits", "excludedAttackTraits",
  "saveTypes", "spellTraditions", "spellTraits", "sourceTraits", "targetTraits",
  "excludedSourceTraits", "excludedTargetTraits"
]);

function unique(values = []) {
  return [...new Set(values)];
}

function freezeFilters(filters = {}) {
  const result = {};
  for (const key of FILTER_KEYS) result[key] = Object.freeze(unique(filters[key] ?? []));
  return Object.freeze(result);
}

function freezeEffect(effect, localizationKey, fallbackTitle, defaultTarget) {
  if (!effect) return null;
  return Object.freeze({
    target: effect.target ?? defaultTarget,
    nameKey: `PF2ECFAB.Effects.${localizationKey}.Name`,
    fallbackName: effect.fallbackName ?? fallbackTitle,
    definition: Object.freeze({
      schemaVersion: 2,
      duration: effect.duration,
      components: Object.freeze((effect.components ?? []).map((component) => Object.freeze({ ...component })))
    })
  });
}

export function defineMiscastRepercussion({
  id,
  localizationKey,
  tone,
  impact,
  fallbackTitle,
  fallbackDescription,
  weight = 1,
  tags = [],
  filters = {},
  effect = null
}) {
  return Object.freeze({
    schemaVersion: 1,
    id: `${ARCANE_CARD_ID_PREFIX}.${id}`,
    packId: ARCANE_PACK_IDS.miscastRepercussions,
    category: "spellCriticalFumble",
    tone,
    impact,
    titleKey: `PF2ECFAB.Cards.${localizationKey}.Title`,
    descriptionKey: `PF2ECFAB.Cards.${localizationKey}.Description`,
    fallbackTitle,
    fallbackDescription,
    weight,
    tags: Object.freeze(["spell", "critical-fumble", "backlash", ...tags]),
    filters: freezeFilters(filters),
    effect: freezeEffect(effect, localizationKey, fallbackTitle, "source"),
    metadata: Object.freeze({ collection: "miscast-repercussions" })
  });
}
