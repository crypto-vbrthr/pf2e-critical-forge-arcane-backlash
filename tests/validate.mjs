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
assert.equal(manifest.version, "0.2.2");
assert.equal(packageJson.version, "0.2.2");
assert.equal(manifest.compatibility.minimum, "14");
assert.ok(manifest.esmodules.includes("scripts/main.js"));
assert.ok(manifest.relationships?.requires?.some((entry) =>
  entry.id === "pf2e-critical-forge" && entry.compatibility?.minimum === "0.9.3-dev"
));
assert.ok(manifest.relationships?.systems?.some((entry) => entry.id === "pf2e"));

assert.equal(ARCANE_PACK_CONFIGS.length, 2);
const disabled = buildArcaneBacklashPacks(() => false);
const enabled = buildArcaneBacklashPacks(() => true);
assert.equal(disabled.length, 2);
assert.equal(enabled.length, 2);
assert.deepEqual(disabled.map((pack) => pack.id), [
  ARCANE_PACK_IDS.miscastRepercussions,
  ARCANE_PACK_IDS.defiantReversals
]);
assert.ok(disabled.every((pack) => pack.enabled === false));
assert.ok(enabled.every((pack) => pack.enabled === true));
assert.ok(disabled.every((pack) => pack.version === "0.2.2"));
assert.equal(disabled[0].cards.length, 30);
assert.equal(disabled[1].cards.length, 30);
assert.equal(disabled[0].metadata.scope, "spell-attacks-all-traditions");
assert.equal(disabled[1].metadata.scope, "spell-saves-all-traditions");

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
    assert.equal(card.effect, null);
    assert.ok(card.tags.includes("manual"));
    for (const dictionary of [de, en]) {
      assert.ok(getLocalization(dictionary, card.titleKey), card.titleKey);
      assert.ok(getLocalization(dictionary, card.descriptionKey), card.descriptionKey);
    }
  }
}
assert.equal(allIds.size, 60);

const miscast = disabled[0].cards;
assert.ok(miscast.every((card) => card.packId === ARCANE_PACK_IDS.miscastRepercussions));
assert.ok(miscast.every((card) => card.category === "spellCriticalFumble"));
assert.ok(miscast.every((card) => card.metadata.collection === "miscast-repercussions"));
assert.ok(miscast.every((card) => card.tags.includes("critical-fumble")));
assert.ok(miscast.every((card) => card.tags.includes("backlash")));
assert.equal(miscast.filter((card) => card.impact === "light").length, 10);
assert.equal(miscast.filter((card) => card.impact === "moderate").length, 18);
assert.equal(miscast.filter((card) => card.impact === "strong").length, 2);

const reversals = disabled[1].cards;
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
assert.ok(bySlug.get("dr-011-feedback-glare").tags.includes("cover"));
assert.ok(bySlug.get("dr-012-broken-concentration").tags.includes("concentrate"));
assert.ok(bySlug.get("dr-015-the-source-shows").tags.includes("teamwork"));
assert.ok(bySlug.get("dr-016-step-between-sparks").tags.includes("reaction-protection"));
assert.ok(bySlug.get("dr-017-follow-the-collapse").tags.includes("strong"));
assert.ok(bySlug.get("dr-020-wrong-side-of-the-ward").tags.includes("ward"));
assert.ok(bySlug.get("dr-021-proof-of-safety").tags.includes("fortune"));
assert.ok(bySlug.get("dr-023-shared-defiance").tags.includes("new-save"));
assert.ok(bySlug.get("dr-024-opening-in-the-pattern").tags.includes("reaction-suppression"));
assert.ok(bySlug.get("dr-026-the-spell-blinks-first").tags.includes("spell-avoidance"));
assert.ok(bySlug.get("dr-030-return-to-sender-mostly").tags.includes("misfortune"));

assert.equal(reversals.filter((card) => card.impact === "light").length, 10);
assert.equal(reversals.filter((card) => card.impact === "moderate").length, 16);
assert.equal(reversals.filter((card) => card.impact === "strong").length, 4);
assert.equal(reversals.filter((card) => card.filters.saveTypes.length === 0).length, 15);

function eligibleForSave(saveType) {
  return reversals.filter((card) => card.filters.saveTypes.length === 0 || card.filters.saveTypes.includes(saveType));
}
assert.equal(eligibleForSave("reflex").length, 20);
assert.equal(eligibleForSave("fortitude").length, 19);
assert.equal(eligibleForSave("will").length, 21);

console.log("PF2E Critical Forge: Arcane Backlash 0.2.2 validation passed.");
