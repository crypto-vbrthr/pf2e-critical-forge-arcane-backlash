import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const testDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(testDir, "..");

async function readJson(relativePath) {
  return JSON.parse(await readFile(path.join(root, relativePath), "utf8"));
}

function getLocalization(dictionary, dottedKey) {
  return dottedKey.split(".").reduce((value, key) => value?.[key], dictionary);
}

const manifest = await readJson("module.json");
const packageJson = await readJson("package.json");
const de = await readJson("lang/de.json");
const en = await readJson("lang/en.json");
const { buildArcaneBacklashPacks, ARCANE_PACK_CONFIGS } = await import(
  pathToFileURL(path.join(root, "scripts/packs/arcane-backlash.js"))
);
const { ARCANE_PACK_IDS } = await import(
  pathToFileURL(path.join(root, "scripts/packs/arcane/card-factory.js"))
);

assert.equal(manifest.id, "pf2e-critical-forge-arcane-backlash");
assert.equal(manifest.version, "0.4.3");
assert.equal(packageJson.version, "0.4.3");
assert.equal(manifest.compatibility.minimum, "14");
assert.ok(manifest.esmodules.includes("scripts/main.js"));
assert.ok(manifest.relationships?.requires?.some((entry) =>
  entry.id === "pf2e-critical-forge" && entry.compatibility?.minimum === "0.9.3-dev"
));
assert.ok(manifest.relationships?.systems?.some((entry) => entry.id === "pf2e"));

assert.equal(ARCANE_PACK_CONFIGS.length, 4);
const disabled = buildArcaneBacklashPacks(() => false);
const enabled = buildArcaneBacklashPacks(() => true);
assert.equal(disabled.length, 4);
assert.equal(enabled.length, 4);
assert.deepEqual(disabled.map((pack) => pack.id), [
  ARCANE_PACK_IDS.miscastRepercussions,
  ARCANE_PACK_IDS.defiantReversals,
  ARCANE_PACK_IDS.spellAttackSurges,
  ARCANE_PACK_IDS.overwhelmingResonance
]);
assert.ok(disabled.every((pack) => pack.enabled === false));
assert.ok(enabled.every((pack) => pack.enabled === true));
assert.ok(disabled.every((pack) => pack.version === "0.4.3"));
assert.equal(disabled[0].cards.length, 30);
assert.equal(disabled[1].cards.length, 30);
assert.equal(disabled[2].cards.length, 30);
assert.equal(disabled[3].cards.length, 30);
assert.equal(disabled[0].metadata.scope, "spell-attacks-all-traditions");
assert.equal(disabled[1].metadata.scope, "spell-saves-all-traditions");
assert.equal(disabled[2].metadata.scope, "spell-attacks-all-traditions");
assert.equal(disabled[3].metadata.scope, "spell-saves-all-traditions");

for (const pack of disabled) {
  for (const dictionary of [de, en]) {
    assert.ok(getLocalization(dictionary, pack.titleKey), pack.titleKey);
    assert.ok(getLocalization(dictionary, pack.descriptionKey), pack.descriptionKey);
  }
}

const allIds = new Set();
for (const pack of disabled) {
  for (const card of pack.cards) {
    assert.equal(card.schemaVersion, 1);
    assert.ok(!allIds.has(card.id), `Duplicate card id: ${card.id}`);
    allIds.add(card.id);
    for (const dictionary of [de, en]) {
      assert.ok(getLocalization(dictionary, card.titleKey), card.titleKey);
      assert.ok(getLocalization(dictionary, card.descriptionKey), card.descriptionKey);
      if (card.effect) assert.ok(getLocalization(dictionary, card.effect.nameKey), card.effect.nameKey);
    }
  }
}
assert.equal(allIds.size, 120);

const miscast = disabled[0].cards;
assert.ok(miscast.every((card) => card.effect === null));
assert.ok(miscast.every((card) => card.tags.includes("manual")));
assert.ok(miscast.every((card) => card.packId === ARCANE_PACK_IDS.miscastRepercussions));
assert.ok(miscast.every((card) => card.category === "spellCriticalFumble"));
assert.ok(miscast.every((card) => card.metadata.collection === "miscast-repercussions"));
assert.ok(miscast.every((card) => card.tags.includes("critical-fumble")));
assert.ok(miscast.every((card) => card.tags.includes("backlash")));
assert.equal(miscast.filter((card) => card.impact === "light").length, 10);
assert.equal(miscast.filter((card) => card.impact === "moderate").length, 18);
assert.equal(miscast.filter((card) => card.impact === "strong").length, 2);

const reversals = disabled[1].cards;
assert.ok(reversals.every((card) => card.effect === null));
assert.ok(reversals.every((card) => card.tags.includes("manual")));
assert.ok(reversals.every((card) => card.packId === ARCANE_PACK_IDS.defiantReversals));
assert.ok(reversals.every((card) => card.category === "savingThrowCriticalSuccess"));
assert.ok(reversals.every((card) => card.metadata.collection === "defiant-reversals"));
assert.ok(reversals.every((card) => card.tags.includes("saving-throw")));
assert.ok(reversals.every((card) => card.tags.includes("critical-success")));
assert.ok(reversals.every((card) => card.tags.includes("defiance")));
assert.ok(reversals.every((card) => card.filters.attackTraits.includes("spell")));
assert.ok(reversals.every((card) => card.filters.spellTraditions.length === 0));
assert.ok(reversals.every((card) => card.filters.spellTraits.length === 0));

const reversalSlugs = reversals.map((card) => card.id.split(".").at(-1));
assert.deepEqual(reversalSlugs, [
  "dr-001-stand-through-it",
  "dr-002-not-today",
  "dr-003-body-remembers",
  "dr-004-rooted-in-reality",
  "dr-005-shake-the-pattern",
  "dr-006-read-the-weave",
  "dr-007-seen-it-now",
  "dr-008-name-the-weakness",
  "dr-009-familiar-signature",
  "dr-010-counterexample",
  "dr-011-feedback-glare",
  "dr-012-broken-concentration",
  "dr-013-spell-flinches",
  "dr-014-resonance-returned",
  "dr-015-the-source-shows",
  "dr-016-step-between-sparks",
  "dr-017-follow-the-collapse",
  "dr-018-exit-through-the-spell",
  "dr-019-reclaim-the-ground",
  "dr-020-wrong-side-of-the-ward",
  "dr-021-proof-of-safety",
  "dr-022-hold-the-line",
  "dr-023-shared-defiance",
  "dr-024-opening-in-the-pattern",
  "dr-025-your-turn",
  "dr-026-the-spell-blinks-first",
  "dr-027-refused-narrative",
  "dr-028-borrowed-echo",
  "dr-029-unimpressed-by-the-cosmos",
  "dr-030-return-to-sender-mostly"
]);

const bySlug = new Map(reversals.map((card) => [card.id.split(".").at(-1), card]));
assert.deepEqual(bySlug.get("dr-001-stand-through-it").filters.saveTypes, ["reflex"]);
assert.deepEqual(bySlug.get("dr-002-not-today").filters.saveTypes, ["will"]);
assert.deepEqual(bySlug.get("dr-004-rooted-in-reality").filters.saveTypes, ["fortitude"]);
assert.deepEqual(bySlug.get("dr-009-familiar-signature").filters.saveTypes, ["will"]);
assert.deepEqual(bySlug.get("dr-012-broken-concentration").filters.saveTypes, ["will"]);
assert.deepEqual(bySlug.get("dr-014-resonance-returned").filters.saveTypes, ["will"]);
assert.deepEqual(bySlug.get("dr-016-step-between-sparks").filters.saveTypes, ["reflex"]);
assert.deepEqual(bySlug.get("dr-017-follow-the-collapse").filters.saveTypes, ["fortitude"]);
assert.deepEqual(bySlug.get("dr-018-exit-through-the-spell").filters.saveTypes, ["reflex"]);
assert.deepEqual(bySlug.get("dr-019-reclaim-the-ground").filters.saveTypes, ["fortitude"]);
assert.deepEqual(bySlug.get("dr-020-wrong-side-of-the-ward").filters.saveTypes, ["reflex"]);
assert.deepEqual(bySlug.get("dr-022-hold-the-line").filters.saveTypes, ["fortitude"]);
assert.deepEqual(bySlug.get("dr-023-shared-defiance").filters.saveTypes, ["will"]);
assert.deepEqual(bySlug.get("dr-026-the-spell-blinks-first").filters.saveTypes, ["reflex"]);
assert.deepEqual(bySlug.get("dr-027-refused-narrative").filters.saveTypes, ["will"]);
assert.equal(bySlug.get("dr-002-not-today").tone, "humorous");
assert.equal(bySlug.get("dr-002-not-today").weight, 2);
assert.equal(bySlug.get("dr-006-read-the-weave").weight, 2);
assert.equal(bySlug.get("dr-005-shake-the-pattern").impact, "strong");
assert.ok(bySlug.get("dr-004-rooted-in-reality").tags.includes("forced-movement"));
assert.ok(bySlug.get("dr-006-read-the-weave").tags.includes("recall-knowledge"));
assert.ok(bySlug.get("dr-008-name-the-weakness").tags.includes("counteract"));
assert.ok(bySlug.get("dr-009-familiar-signature").tags.includes("duplicates"));
assert.ok(bySlug.get("dr-010-counterexample").tags.includes("ally"));
assert.ok(bySlug.get("dr-011-feedback-glare").tags.includes("magical-connection"));
assert.ok(bySlug.get("dr-012-broken-concentration").tags.includes("concentrate"));
assert.ok(bySlug.get("dr-015-the-source-shows").tags.includes("teamwork"));
assert.ok(bySlug.get("dr-016-step-between-sparks").tags.includes("reaction-protection"));
assert.ok(bySlug.get("dr-017-follow-the-collapse").tags.includes("strong"));
assert.ok(bySlug.get("dr-020-wrong-side-of-the-ward").tags.includes("ward"));
assert.ok(bySlug.get("dr-020-wrong-side-of-the-ward").tags.includes("conditional-consumption"));
assert.ok(bySlug.get("dr-021-proof-of-safety").tags.includes("fortune"));
assert.ok(bySlug.get("dr-023-shared-defiance").tags.includes("new-save"));
assert.ok(bySlug.get("dr-024-opening-in-the-pattern").tags.includes("spell-defense"));
assert.ok(bySlug.get("dr-026-the-spell-blinks-first").tags.includes("spell-avoidance"));
assert.ok(bySlug.get("dr-030-return-to-sender-mostly").tags.includes("misfortune"));

assert.ok(bySlug.get("dr-001-stand-through-it").tags.includes("anchored-defense"));
assert.ok(bySlug.get("dr-002-not-today").tags.includes("defiant-aura"));
assert.ok(bySlug.get("dr-007-seen-it-now").tags.includes("raise-a-shield"));
assert.ok(bySlug.get("dr-014-resonance-returned").tags.includes("sustain-a-spell"));
assert.ok(bySlug.get("dr-019-reclaim-the-ground").tags.includes("anchor"));
assert.equal(bySlug.get("dr-021-proof-of-safety").impact, "strong");
assert.equal(bySlug.get("dr-025-your-turn").impact, "strong");
assert.ok(bySlug.get("dr-029-unimpressed-by-the-cosmos").tags.includes("spell-identification"));
assert.ok(bySlug.get("dr-030-return-to-sender-mostly").tags.includes("perception"));
assert.ok(!bySlug.get("dr-018-exit-through-the-spell").tags.includes("hazardous-terrain"));
assert.ok(bySlug.get("dr-018-exit-through-the-spell").tags.includes("dangerous-terrain"));

assert.equal(reversals.filter((card) => card.impact === "light").length, 8);
assert.equal(reversals.filter((card) => card.impact === "moderate").length, 16);
assert.equal(reversals.filter((card) => card.impact === "strong").length, 6);
assert.equal(reversals.filter((card) => card.filters.saveTypes.length === 0).length, 15);

function eligibleForSave(saveType) {
  return reversals.filter((card) => card.filters.saveTypes.length === 0 || card.filters.saveTypes.includes(saveType));
}
assert.equal(eligibleForSave("reflex").length, 20);
assert.equal(eligibleForSave("fortitude").length, 19);
assert.equal(eligibleForSave("will").length, 21);


const surges = disabled[2].cards;
assert.ok(surges.every((card) => card.packId === ARCANE_PACK_IDS.spellAttackSurges));
assert.ok(surges.every((card) => card.category === "spellCriticalHit"));
assert.ok(surges.every((card) => card.metadata.collection === "spell-attack-surges"));
assert.ok(surges.every((card) => card.tags.includes("critical-hit")));
assert.ok(surges.every((card) => card.tags.includes("surge")));
assert.ok(surges.every((card) => card.filters.spellTraditions.length === 0));
assert.ok(surges.every((card) => card.filters.spellTraits.length === 0));

const surgeSlugs = surges.map((card) => card.id.split(".").at(-1));
assert.deepEqual(surgeSlugs, [
  "sas-001-power-still-singing",
  "sas-002-steady-casting-hand",
  "sas-003-resonant-guard",
  "sas-004-spellborne-confidence",
  "sas-005-perfect-release",
  "sas-006-resonance-mark",
  "sas-007-pattern-exposed",
  "sas-008-echo-in-the-aura",
  "sas-009-no-place-to-fade",
  "sas-010-spellshadow",
  "sas-011-extended-thread",
  "sas-012-clean-geometry",
  "sas-013-widened-aperture",
  "sas-014-effortless-transition",
  "sas-015-trait-in-harmony",
  "sas-016-backwash-barrier",
  "sas-017-reactions-drowned-out",
  "sas-018-stable-center",
  "sas-019-harmonic-resistance",
  "sas-020-magic-knows-its-way-back",
  "sas-021-shared-frequency",
  "sas-022-follow-the-glow",
  "sas-023-borrowed-insight",
  "sas-024-arc-between-allies",
  "sas-025-conduit-open",
  "sas-026-reality-nods-once",
  "sas-027-colors-remember",
  "sas-028-the-spell-wants-another-word",
  "sas-029-helpful-afterimage",
  "sas-030-the-weave-takes-interest"
]);

const surgeBySlug = new Map(surges.map((card) => [card.id.split(".").at(-1), card]));
const automatedSurges = surges.filter((card) => card.effect !== null);
const manualSurges = surges.filter((card) => card.effect === null);
assert.equal(automatedSurges.length, 9);
assert.equal(manualSurges.length, 21);
assert.ok(automatedSurges.every((card) => card.tags.includes("effect")));
assert.ok(manualSurges.every((card) => card.tags.includes("manual")));
assert.equal(surges.filter((card) => card.impact === "light").length, 3);
assert.equal(surges.filter((card) => card.impact === "moderate").length, 22);
assert.equal(surges.filter((card) => card.impact === "strong").length, 5);

for (const card of automatedSurges) {
  assert.equal(card.effect.definition.schemaVersion, 2);
  assert.equal(card.effect.definition.duration.value, 1);
  assert.equal(card.effect.definition.duration.unit, "rounds");
  assert.equal(card.effect.definition.duration.expiry, "turn-start");
  assert.ok(card.effect.definition.components.length > 0);
}

assert.equal(surgeBySlug.get("sas-001-power-still-singing").effect, null);
assert.equal(surgeBySlug.get("sas-003-resonant-guard").effect.target, "source");
assert.equal(surgeBySlug.get("sas-004-spellborne-confidence").effect.target, "source");
assert.equal(surgeBySlug.get("sas-008-echo-in-the-aura").effect.target, "source");
assert.equal(surgeBySlug.get("sas-010-spellshadow").effect.target, "target");
assert.deepEqual(
  surgeBySlug.get("sas-003-resonant-guard").effect.definition.components[0],
  { type: "modifier", selector: "saving-throw", value: 1, modifierType: "status", predicate: [] }
);
assert.deepEqual(
  surgeBySlug.get("sas-004-spellborne-confidence").effect.definition.components[0],
  { type: "modifier", selector: "will", value: 2, modifierType: "circumstance", predicate: ["item:trait:mental"] }
);
assert.deepEqual(
  surgeBySlug.get("sas-008-echo-in-the-aura").effect.definition.components[0],
  {
    type: "modifier",
    selector: ["arcana", "nature", "occultism", "religion"],
    value: 2,
    modifierType: "circumstance",
    predicate: [{ or: ["action:recall-knowledge", "action:identify-magic"] }]
  }
);
assert.deepEqual(
  surgeBySlug.get("sas-010-spellshadow").effect.definition.components[0].selector,
  ["stealth", "deception"]
);
assert.ok(surgeBySlug.get("sas-001-power-still-singing").tags.includes("multiple-attack-penalty"));
assert.ok(surgeBySlug.get("sas-006-resonance-mark").tags.includes("conditional-consumption"));
assert.ok(surgeBySlug.get("sas-007-pattern-exposed").tags.includes("cover"));
assert.ok(surgeBySlug.get("sas-009-no-place-to-fade").tags.includes("teleportation"));

assert.equal(surgeBySlug.get("sas-016-backwash-barrier").effect, null);
assert.equal(surgeBySlug.get("sas-018-stable-center").effect.target, "source");
assert.equal(surgeBySlug.get("sas-019-harmonic-resistance").effect, null);
assert.deepEqual(
  surgeBySlug.get("sas-018-stable-center").effect.definition.components[0],
  {
    type: "modifier",
    selector: ["fortitude-dc", "reflex-dc"],
    value: 1,
    modifierType: "circumstance",
    predicate: []
  }
);
assert.equal(surgeBySlug.get("sas-004-spellborne-confidence").weight, 1);
assert.equal(surgeBySlug.get("sas-018-stable-center").weight, 1);
assert.ok(surgeBySlug.get("sas-011-extended-thread").tags.includes("range"));
assert.ok(surgeBySlug.get("sas-012-clean-geometry").tags.includes("line-of-effect"));
assert.ok(surgeBySlug.get("sas-013-widened-aperture").tags.includes("aperture"));
assert.ok(surgeBySlug.get("sas-014-effortless-transition").tags.includes("remote-manipulation"));
assert.ok(surgeBySlug.get("sas-015-trait-in-harmony").tags.includes("counteract"));
assert.ok(surgeBySlug.get("sas-016-backwash-barrier").tags.includes("one-attack"));
assert.equal(surgeBySlug.get("sas-017-reactions-drowned-out").impact, "strong");
assert.ok(surgeBySlug.get("sas-019-harmonic-resistance").tags.includes("dynamic-choice"));
assert.ok(surgeBySlug.get("sas-020-magic-knows-its-way-back").tags.includes("fallback"));

assert.equal(surgeBySlug.get("sas-021-shared-frequency").effect.target, "target");
assert.deepEqual(
  surgeBySlug.get("sas-021-shared-frequency").effect.definition.components[0],
  { type: "weakness", weaknessType: "damage-from-spells", value: 2 }
);
assert.equal(surgeBySlug.get("sas-021-shared-frequency").impact, "strong");
assert.ok(surgeBySlug.get("sas-022-follow-the-glow").tags.includes("defense-reading"));
assert.ok(surgeBySlug.get("sas-023-borrowed-insight").tags.includes("revealed-fact"));
assert.ok(surgeBySlug.get("sas-024-arc-between-allies").tags.includes("condition-transfer"));
assert.equal(surgeBySlug.get("sas-025-conduit-open").impact, "strong");
assert.ok(surgeBySlug.get("sas-025-conduit-open").tags.includes("perception"));
assert.equal(surgeBySlug.get("sas-026-reality-nods-once").effect.target, "source");
assert.equal(surgeBySlug.get("sas-027-colors-remember").effect.target, "source");
assert.deepEqual(
  surgeBySlug.get("sas-026-reality-nods-once").effect.definition.components[0],
  {
    type: "modifier",
    selector: ["deception", "intimidation"],
    value: 1,
    modifierType: "status",
    predicate: []
  }
);
assert.deepEqual(
  surgeBySlug.get("sas-027-colors-remember").effect.definition.components[0],
  {
    type: "modifier",
    selector: ["perception", "perception-dc"],
    value: 1,
    modifierType: "status",
    predicate: []
  }
);
assert.equal(surgeBySlug.get("sas-029-helpful-afterimage").effect.target, "source");
assert.deepEqual(
  surgeBySlug.get("sas-029-helpful-afterimage").effect.definition.components[0],
  { type: "condition", slug: "concealed" }
);
assert.ok(surgeBySlug.get("sas-028-the-spell-wants-another-word").tags.includes("sustain"));
assert.ok(surgeBySlug.get("sas-030-the-weave-takes-interest").tags.includes("object-protection"));


const overwhelming = disabled[3].cards;
assert.ok(overwhelming.every((card) => card.packId === ARCANE_PACK_IDS.overwhelmingResonance));
assert.ok(overwhelming.every((card) => card.category === "savingThrowCriticalFailure"));
assert.ok(overwhelming.every((card) => card.metadata.collection === "overwhelming-resonance"));
assert.ok(overwhelming.every((card) => card.tags.includes("saving-throw")));
assert.ok(overwhelming.every((card) => card.tags.includes("critical-failure")));
assert.ok(overwhelming.every((card) => card.tags.includes("resonance")));
assert.ok(overwhelming.every((card) => card.filters.attackTraits.includes("spell")));
assert.ok(overwhelming.every((card) => card.filters.spellTraditions.length === 0));
assert.ok(overwhelming.every((card) => card.filters.spellTraits.length === 0));

const overwhelmingSlugs = overwhelming.map((card) => card.id.split(".").at(-1));
assert.deepEqual(overwhelmingSlugs, [
  "or-001-resonance-leak",
  "or-002-spellglass-fracture",
  "or-003-dragged-through-the-weave",
  "or-004-somatic-desynchronization",
  "or-005-geometry-out-of-step",
  "or-006-thoughts-leak-sideways",
  "or-007-static-between-moments",
  "or-008-unmoored-from-place",
  "or-009-ground-it-or-glow",
  "or-010-wardline-fracture",
  "or-011-sensory-palimpsest",
  "or-012-voice-through-glass",
  "or-013-projected-instability",
  "or-014-resonant-weakpoint",
  "or-015-spell-stamped",
  "or-016-concentration-echo",
  "or-017-aftershock-line",
  "or-018-static-in-the-aim",
  "or-019-resistance-delamination",
  "or-020-aura-underfoot",
  "or-021-healing-pattern-rejected",
  "or-022-power-bleeds-sideways",
  "or-023-spell-torn-shadow",
  "or-024-reality-rejects-the-shortcut",
  "or-025-item-chorus",
  "or-026-transparent-resonance",
  "or-027-elastic-distance",
  "or-028-echo-claims-the-footprint",
  "or-029-the-weave-misquotes-you",
  "or-030-reality-keeps-the-receipt"
]);

const overwhelmingBySlug = new Map(overwhelming.map((card) => [card.id.split(".").at(-1), card]));
const automatedOverwhelming = overwhelming.filter((card) => card.effect !== null);
const manualOverwhelming = overwhelming.filter((card) => card.effect === null);
assert.equal(automatedOverwhelming.length, 7);
assert.equal(manualOverwhelming.length, 23);
assert.ok(automatedOverwhelming.every((card) => card.tags.includes("effect")));
assert.ok(manualOverwhelming.every((card) => card.tags.includes("manual")));
assert.equal(overwhelming.filter((card) => card.impact === "light").length, 4);
assert.equal(overwhelming.filter((card) => card.impact === "moderate").length, 23);
assert.equal(overwhelming.filter((card) => card.impact === "strong").length, 3);
assert.deepEqual(overwhelmingBySlug.get("or-004-somatic-desynchronization").filters.saveTypes, ["fortitude"]);
assert.deepEqual(overwhelmingBySlug.get("or-005-geometry-out-of-step").filters.saveTypes, ["reflex"]);
assert.deepEqual(overwhelmingBySlug.get("or-006-thoughts-leak-sideways").filters.saveTypes, ["will"]);
assert.deepEqual(overwhelmingBySlug.get("or-006-thoughts-leak-sideways").filters.excludedSourceTraits, ["mindless"]);
assert.deepEqual(overwhelmingBySlug.get("or-012-voice-through-glass").filters.saveTypes, ["will"]);
assert.deepEqual(overwhelmingBySlug.get("or-012-voice-through-glass").filters.excludedSourceTraits, ["mindless"]);
assert.deepEqual(overwhelmingBySlug.get("or-016-concentration-echo").filters.saveTypes, ["will"]);
assert.deepEqual(overwhelmingBySlug.get("or-017-aftershock-line").filters.saveTypes, ["reflex"]);
assert.deepEqual(overwhelmingBySlug.get("or-019-resistance-delamination").filters.saveTypes, ["fortitude"]);
assert.deepEqual(overwhelmingBySlug.get("or-020-aura-underfoot").filters.saveTypes, ["fortitude"]);

for (const card of automatedOverwhelming) {
  assert.equal(card.effect.target, "source");
  assert.equal(card.effect.definition.schemaVersion, 2);
  assert.equal(card.effect.definition.duration.value, 1);
  assert.equal(card.effect.definition.duration.unit, "rounds");
  assert.equal(card.effect.definition.duration.expiry, "turn-start");
  assert.ok(card.effect.definition.components.length > 0);
}

assert.deepEqual(
  overwhelmingBySlug.get("or-001-resonance-leak").effect.definition.components[0],
  {
    type: "modifier",
    selector: "saving-throw",
    value: -1,
    modifierType: "status",
    predicate: ["item:trait:spell"]
  }
);
assert.deepEqual(
  overwhelmingBySlug.get("or-002-spellglass-fracture").effect.definition.components[0],
  {
    type: "modifier",
    selector: "ac",
    value: -1,
    modifierType: "circumstance",
    predicate: ["item:trait:spell"]
  }
);
assert.equal(overwhelmingBySlug.get("or-003-dragged-through-the-weave").effect, null);
assert.ok(overwhelmingBySlug.get("or-003-dragged-through-the-weave").tags.includes("path"));
assert.deepEqual(
  overwhelmingBySlug.get("or-004-somatic-desynchronization").effect.definition.components[0].selector,
  ["athletics", "fortitude-dc"]
);
assert.deepEqual(
  overwhelmingBySlug.get("or-005-geometry-out-of-step").effect.definition.components[0].selector,
  ["acrobatics", "reflex-dc"]
);
assert.deepEqual(
  overwhelmingBySlug.get("or-006-thoughts-leak-sideways").effect.definition.components[0].selector,
  ["deception", "will-dc"]
);
assert.ok(overwhelmingBySlug.get("or-007-static-between-moments").tags.includes("flat-check"));
assert.ok(overwhelmingBySlug.get("or-008-unmoored-from-place").tags.includes("teleportation"));
assert.ok(overwhelmingBySlug.get("or-009-ground-it-or-glow").tags.includes("choice"));
assert.ok(overwhelmingBySlug.get("or-010-wardline-fracture").tags.includes("conditional-consumption"));

assert.equal(overwhelmingBySlug.get("or-011-sensory-palimpsest").effect, null);
assert.ok(overwhelmingBySlug.get("or-011-sensory-palimpsest").tags.includes("false-senses"));
assert.equal(overwhelmingBySlug.get("or-012-voice-through-glass").effect, null);
assert.ok(overwhelmingBySlug.get("or-012-voice-through-glass").tags.includes("linguistic"));
assert.equal(overwhelmingBySlug.get("or-013-projected-instability").effect, null);
assert.ok(overwhelmingBySlug.get("or-013-projected-instability").tags.includes("defense"));
assert.equal(overwhelmingBySlug.get("or-018-static-in-the-aim").effect, null);
assert.ok(overwhelmingBySlug.get("or-018-static-in-the-aim").tags.includes("target-switching"));
assert.ok(overwhelmingBySlug.get("or-014-resonant-weakpoint").tags.includes("dynamic-choice"));
assert.ok(overwhelmingBySlug.get("or-015-spell-stamped").tags.includes("conditional-consumption"));
assert.ok(overwhelmingBySlug.get("or-016-concentration-echo").tags.includes("concentrate"));
assert.ok(overwhelmingBySlug.get("or-017-aftershock-line").tags.includes("corridor"));
assert.ok(overwhelmingBySlug.get("or-019-resistance-delamination").tags.includes("resistance"));
assert.equal(overwhelmingBySlug.get("or-020-aura-underfoot").weight, 1);
assert.ok(overwhelmingBySlug.get("or-020-aura-underfoot").tags.includes("lesser-cover"));
assert.deepEqual(overwhelmingBySlug.get("or-021-healing-pattern-rejected").filters.saveTypes, ["fortitude"]);
assert.deepEqual(
  overwhelmingBySlug.get("or-021-healing-pattern-rejected").effect.definition.components[0],
  {
    type: "modifier",
    selector: "healing-received",
    value: -2,
    modifierType: "status",
    predicate: ["item:trait:spell"]
  }
);
assert.deepEqual(
  overwhelmingBySlug.get("or-022-power-bleeds-sideways").effect.definition.components[0],
  { type: "modifier", selector: "damage", value: -1, modifierType: "status", predicate: [] }
);
assert.ok(overwhelmingBySlug.get("or-023-spell-torn-shadow").tags.includes("area-shift"));
assert.deepEqual(overwhelmingBySlug.get("or-024-reality-rejects-the-shortcut").filters.saveTypes, ["reflex"]);
assert.ok(overwhelmingBySlug.get("or-025-item-chorus").tags.includes("item-lock"));
assert.ok(overwhelmingBySlug.get("or-026-transparent-resonance").tags.includes("lesser-cover"));
assert.deepEqual(overwhelmingBySlug.get("or-027-elastic-distance").filters.saveTypes, ["reflex"]);
assert.deepEqual(overwhelmingBySlug.get("or-028-echo-claims-the-footprint").filters.saveTypes, ["fortitude"]);
assert.deepEqual(overwhelmingBySlug.get("or-029-the-weave-misquotes-you").filters.saveTypes, ["will"]);
assert.deepEqual(overwhelmingBySlug.get("or-029-the-weave-misquotes-you").filters.excludedSourceTraits, ["mindless"]);
assert.ok(overwhelmingBySlug.get("or-030-reality-keeps-the-receipt").tags.includes("declaration"));
assert.ok(overwhelmingBySlug.get("or-030-reality-keeps-the-receipt").tags.includes("perception"));
assert.equal(overwhelmingBySlug.get("or-008-unmoored-from-place").impact, "moderate");
assert.equal(overwhelmingBySlug.get("or-019-resistance-delamination").impact, "moderate");
assert.equal(overwhelmingBySlug.get("or-021-healing-pattern-rejected").impact, "light");
assert.equal(overwhelmingBySlug.get("or-024-reality-rejects-the-shortcut").impact, "moderate");
assert.equal(overwhelmingBySlug.get("or-025-item-chorus").impact, "moderate");
assert.equal(overwhelming.filter((card) => card.weight === 2).length, 0);

console.log("PF2E Critical Forge: Arcane Backlash 0.4.3 validation passed.");
