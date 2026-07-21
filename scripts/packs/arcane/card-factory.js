export const ARCANE_CARD_ID_PREFIX = "pf2e-critical-forge-arcane-backlash";
export const ARCANE_PACK_IDS = Object.freeze({
  miscastRepercussions: `${ARCANE_CARD_ID_PREFIX}.miscast-repercussions`,
  defiantReversals: `${ARCANE_CARD_ID_PREFIX}.defiant-reversals`,
  spellAttackSurges: `${ARCANE_CARD_ID_PREFIX}.spell-attack-surges`
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

function defineArcaneCard({
  id,
  packId,
  category,
  collection,
  localizationKey,
  tone,
  impact,
  fallbackTitle,
  fallbackDescription,
  weight = 1,
  baseTags = [],
  tags = [],
  filters = {},
  effect = null,
  defaultEffectTarget = "source"
}) {
  return Object.freeze({
    schemaVersion: 1,
    id: `${ARCANE_CARD_ID_PREFIX}.${id}`,
    packId,
    category,
    tone,
    impact,
    titleKey: `PF2ECFAB.Cards.${localizationKey}.Title`,
    descriptionKey: `PF2ECFAB.Cards.${localizationKey}.Description`,
    fallbackTitle,
    fallbackDescription,
    weight,
    tags: Object.freeze([...baseTags, ...tags]),
    filters: freezeFilters(filters),
    effect: freezeEffect(effect, localizationKey, fallbackTitle, defaultEffectTarget),
    metadata: Object.freeze({ collection })
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
  return defineArcaneCard({
    id,
    packId: ARCANE_PACK_IDS.miscastRepercussions,
    category: "spellCriticalFumble",
    collection: "miscast-repercussions",
    localizationKey,
    tone,
    impact,
    fallbackTitle,
    fallbackDescription,
    weight,
    baseTags: ["spell", "critical-fumble", "backlash"],
    tags,
    filters,
    effect,
    defaultEffectTarget: "source"
  });
}

export function defineDefiantReversal({
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
  return defineArcaneCard({
    id,
    packId: ARCANE_PACK_IDS.defiantReversals,
    category: "savingThrowCriticalSuccess",
    collection: "defiant-reversals",
    localizationKey,
    tone,
    impact,
    fallbackTitle,
    fallbackDescription,
    weight,
    baseTags: ["spell", "saving-throw", "critical-success", "defiance"],
    tags,
    filters: {
      ...filters,
      attackTraits: unique(["spell", ...(filters.attackTraits ?? [])])
    },
    effect,
    defaultEffectTarget: "source"
  });
}

export function defineSpellAttackSurge({
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
  return defineArcaneCard({
    id,
    packId: ARCANE_PACK_IDS.spellAttackSurges,
    category: "spellCriticalHit",
    collection: "spell-attack-surges",
    localizationKey,
    tone,
    impact,
    fallbackTitle,
    fallbackDescription,
    weight,
    baseTags: ["spell", "critical-hit", "surge"],
    tags,
    filters,
    effect,
    defaultEffectTarget: "source"
  });
}
