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
assert.equal(manifest.version, "0.3.1");
assert.equal(packageJson.version, "0.3.1");
assert.equal(manifest.compatibility.minimum, "14");
assert.ok(manifest.esmodules.includes("scripts/main.js"));
assert.ok(manifest.relationships?.requires?.some((entry) =>
  entry.id === "pf2e-critical-forge" && entry.compatibility?.minimum === "0.9.3-dev"
));
assert.ok(manifest.relationships?.systems?.some((entry) => entry.id === "pf2e"));

assert.equal(ARCANE_PACK_CONFIGS.length, 3);
const disabled = buildArcaneBacklashPacks(() => false);
const enabled = buildArcaneBacklashPacks(() => true);
assert.equal(disabled.length, 3);
assert.equal(enabled.length, 3);
assert.deepEqual(disabled.map((pack) => pack.id), [
  ARCANE_PACK_IDS.miscastRepercussions,
  ARCANE_PACK_IDS.defiantReversals,
  ARCANE_PACK_IDS.spellAttackSurges
]);
assert.ok(disabled.every((pack) => pack.enabled === false));
assert.ok(enabled.every((pack) => pack.enabled === true));
assert.ok(disabled.every((pack) => pack.version === "0.3.1"));
assert.equal(disabled[0].cards.length, 30);
assert.equal(disabled[1].cards.length, 30);
assert.equal(disabled[2].cards.length, 20);
assert.equal(disabled[0].metadata.scope, "spell-attacks-all-traditions");
assert.equal(disabled[1].metadata.scope, "spell-saves-all-traditions");
assert.equal(disabled[2].metadata.scope, "spell-attacks-all-traditions");

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
assert.equal(allIds.size, 80);

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
  "sas-020-magic-knows-its-way-back"
]);

const surgeBySlug = new Map(surges.map((card) => [card.id.split(".").at(-1), card]));
const automatedSurges = surges.filter((card) => card.effect !== null);
const manualSurges = surges.filter((card) => card.effect === null);
assert.equal(automatedSurges.length, 8);
assert.equal(manualSurges.length, 12);
assert.ok(automatedSurges.every((card) => card.tags.includes("effect")));
assert.ok(manualSurges.every((card) => card.tags.includes("manual")));
assert.equal(surges.filter((card) => card.impact === "light").length, 3);
assert.equal(surges.filter((card) => card.impact === "moderate").length, 16);
assert.equal(surges.filter((card) => card.impact === "strong").length, 1);

for (const card of automatedSurges) {
  assert.equal(card.effect.definition.schemaVersion, 2);
  assert.equal(card.effect.definition.duration.value, 1);
  assert.equal(card.effect.definition.duration.unit, "rounds");
  assert.equal(card.effect.definition.duration.expiry, "turn-start");
  assert.ok(card.effect.definition.components.length > 0);
}

assert.equal(surgeBySlug.get("sas-001-power-still-singing").effect.target, "source");
assert.equal(surgeBySlug.get("sas-003-resonant-guard").effect.target, "source");
assert.equal(surgeBySlug.get("sas-004-spellborne-confidence").effect.target, "source");
assert.equal(surgeBySlug.get("sas-008-echo-in-the-aura").effect.target, "source");
assert.equal(surgeBySlug.get("sas-010-spellshadow").effect.target, "target");
assert.deepEqual(
  surgeBySlug.get("sas-001-power-still-singing").effect.definition.components[0],
  { type: "modifier", selector: "spell-attack-roll", value: 1, modifierType: "status", predicate: [] }
);
assert.deepEqual(
  surgeBySlug.get("sas-003-resonant-guard").effect.definition.components[0],
  { type: "modifier", selector: "saving-throw", value: 1, modifierType: "status", predicate: [] }
);
assert.deepEqual(
  surgeBySlug.get("sas-004-spellborne-confidence").effect.definition.components[0].predicate,
  ["item:trait:mental"]
);
assert.deepEqual(
  surgeBySlug.get("sas-008-echo-in-the-aura").effect.definition.components[0].selector,
  ["arcana", "nature", "occultism", "religion"]
);
assert.deepEqual(
  surgeBySlug.get("sas-010-spellshadow").effect.definition.components[0].selector,
  ["stealth", "deception"]
);
assert.ok(surgeBySlug.get("sas-006-resonance-mark").tags.includes("conditional-consumption"));
assert.ok(surgeBySlug.get("sas-007-pattern-exposed").tags.includes("cover"));
assert.ok(surgeBySlug.get("sas-009-no-place-to-fade").tags.includes("teleportation"));

assert.equal(surgeBySlug.get("sas-016-backwash-barrier").effect.target, "source");
assert.equal(surgeBySlug.get("sas-018-stable-center").effect.target, "source");
assert.equal(surgeBySlug.get("sas-019-harmonic-resistance").effect.target, "source");
assert.deepEqual(
  surgeBySlug.get("sas-016-backwash-barrier").effect.definition.components[0],
  { type: "modifier", selector: "ac", value: 1, modifierType: "circumstance", predicate: [] }
);
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
assert.deepEqual(
  surgeBySlug.get("sas-019-harmonic-resistance").effect.definition.components[0],
  { type: "resistance", resistanceType: "energy", value: 3 }
);
assert.ok(surgeBySlug.get("sas-011-extended-thread").tags.includes("range"));
assert.ok(surgeBySlug.get("sas-012-clean-geometry").tags.includes("line-of-effect"));
assert.ok(surgeBySlug.get("sas-013-widened-aperture").tags.includes("free-action"));
assert.ok(surgeBySlug.get("sas-014-effortless-transition").tags.includes("conditional-consumption"));
assert.ok(surgeBySlug.get("sas-015-trait-in-harmony").tags.includes("counteract"));
assert.equal(surgeBySlug.get("sas-017-reactions-drowned-out").impact, "strong");
assert.equal(surgeBySlug.get("sas-018-stable-center").weight, 2);
assert.ok(surgeBySlug.get("sas-020-magic-knows-its-way-back").tags.includes("saving-throw"));

console.log("PF2E Critical Forge: Arcane Backlash 0.3.1 validation passed.");
