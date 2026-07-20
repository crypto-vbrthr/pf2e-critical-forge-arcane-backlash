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
const de = await readJson("lang/de.json");
const en = await readJson("lang/en.json");
const { buildArcaneBacklashPacks, ARCANE_PACK_CONFIGS } = await import(
  pathToFileURL(path.join(root, "scripts/packs/arcane-backlash.js"))
);
const { ARCANE_PACK_IDS } = await import(
  pathToFileURL(path.join(root, "scripts/packs/arcane/card-factory.js"))
);

assert.equal(manifest.id, "pf2e-critical-forge-arcane-backlash");
assert.equal(manifest.version, "0.1.2");
assert.equal(manifest.compatibility.minimum, "14");
assert.ok(manifest.esmodules.includes("scripts/main.js"));
assert.ok(manifest.relationships?.requires?.some((entry) => entry.id === "pf2e-critical-forge"));
assert.ok(manifest.relationships?.systems?.some((entry) => entry.id === "pf2e"));

assert.equal(ARCANE_PACK_CONFIGS.length, 1);
const disabled = buildArcaneBacklashPacks(() => false);
const enabled = buildArcaneBacklashPacks(() => true);
assert.equal(disabled.length, 1);
assert.equal(disabled[0].id, ARCANE_PACK_IDS.miscastRepercussions);
assert.equal(disabled[0].enabled, false);
assert.equal(enabled[0].enabled, true);
assert.equal(disabled[0].cards.length, 30);
assert.equal(disabled[0].version, "0.1.2");
assert.equal(disabled[0].metadata.scope, "spell-attacks-all-traditions");

for (const dictionary of [de, en]) {
  assert.ok(getLocalization(dictionary, disabled[0].titleKey), disabled[0].titleKey);
  assert.ok(getLocalization(dictionary, disabled[0].descriptionKey), disabled[0].descriptionKey);
}

const ids = new Set();
const slugs = [];
for (const card of disabled[0].cards) {
  assert.equal(card.schemaVersion, 1);
  assert.equal(card.packId, ARCANE_PACK_IDS.miscastRepercussions);
  assert.equal(card.category, "spellCriticalFumble");
  assert.equal(card.metadata.collection, "miscast-repercussions");
  assert.equal(card.effect, null);
  assert.ok(card.tags.includes("spell"));
  assert.ok(card.tags.includes("critical-fumble"));
  assert.ok(card.tags.includes("backlash"));
  assert.ok(card.tags.includes("manual"));
  assert.deepEqual(card.filters.spellTraditions, []);
  assert.deepEqual(card.filters.spellTraits, []);
  assert.ok(!ids.has(card.id), `Duplicate card id: ${card.id}`);
  ids.add(card.id);
  slugs.push(card.id.split(".").at(-1));
  for (const dictionary of [de, en]) {
    assert.ok(getLocalization(dictionary, card.titleKey), card.titleKey);
    assert.ok(getLocalization(dictionary, card.descriptionKey), card.descriptionKey);
  }
}

assert.equal(ids.size, 30);
assert.deepEqual(slugs, [
  "mr-001-arcane-recoil",
  "mr-002-resonant-hands",
  "mr-003-feedback-pulse",
  "mr-004-spellshock",
  "mr-005-energy-grounding",
  "mr-006-broken-cadence",
  "mr-007-lingering-syllable",
  "mr-008-crossed-intent",
  "mr-009-forced-recalculation",
  "mr-010-empty-follow-through",
  "mr-011-reality-pushes-back",
  "mr-012-unstable-casting-ground",
  "mr-013-collapsed-angle",
  "mr-014-targeted-by-the-echo",
  "mr-015-folded-distance",
  "mr-016-afterimage",
  "mr-017-luminous-outline",
  "mr-018-echoing-presence",
  "mr-019-colors-out-of-order",
  "mr-020-magical-tell",
  "mr-021-frayed-pattern",
  "mr-022-wrong-shape",
  "mr-023-delayed-spark",
  "mr-024-spell-snag",
  "mr-025-unfinished-ending",
  "mr-026-shadow-arrives-late",
  "mr-027-voice-of-the-wrong-element",
  "mr-028-familiar-geometry",
  "mr-029-applause-from-nowhere",
  "mr-030-reality-takes-notes"
]);

const bySlug = new Map(disabled[0].cards.map((card) => [card.id.split(".").at(-1), card]));
assert.equal(bySlug.get("mr-003-feedback-pulse").weight, 2);
assert.equal(bySlug.get("mr-007-lingering-syllable").weight, 2);
assert.equal(bySlug.get("mr-010-empty-follow-through").weight, 2);
assert.equal(bySlug.get("mr-010-empty-follow-through").tone, "humorous");
assert.ok(bySlug.get("mr-001-arcane-recoil").tags.includes("forced-movement"));
assert.ok(bySlug.get("mr-002-resonant-hands").tags.includes("manipulate"));
assert.ok(bySlug.get("mr-004-spellshock").tags.includes("reaction-restriction"));
assert.ok(bySlug.get("mr-005-energy-grounding").tags.includes("difficult-terrain"));
assert.ok(bySlug.get("mr-006-broken-cadence").tags.includes("action-sequencing"));
assert.ok(bySlug.get("mr-009-forced-recalculation").tags.includes("action-tax"));

assert.equal(bySlug.get("mr-013-collapsed-angle").weight, 2);
assert.equal(bySlug.get("mr-017-luminous-outline").weight, 2);
assert.equal(bySlug.get("mr-020-magical-tell").weight, 2);
assert.equal(bySlug.get("mr-019-colors-out-of-order").impact, "strong");
assert.ok(bySlug.get("mr-011-reality-pushes-back").tags.includes("lateral-movement"));
assert.ok(bySlug.get("mr-012-unstable-casting-ground").tags.includes("cast-a-spell"));
assert.ok(bySlug.get("mr-014-targeted-by-the-echo").tags.includes("seek"));
assert.ok(bySlug.get("mr-015-folded-distance").tags.includes("range"));
assert.ok(bySlug.get("mr-016-afterimage").tags.includes("flat-check"));
assert.ok(bySlug.get("mr-018-echoing-presence").tags.includes("circumstance-bonus"));
assert.ok(bySlug.get("mr-019-colors-out-of-order").tags.includes("concealment"));
assert.ok(bySlug.get("mr-020-magical-tell").tags.includes("saving-throw"));

assert.equal(bySlug.get("mr-022-wrong-shape").weight, 2);
assert.equal(bySlug.get("mr-027-voice-of-the-wrong-element").weight, 2);
assert.equal(bySlug.get("mr-029-applause-from-nowhere").weight, 2);
assert.equal(bySlug.get("mr-028-familiar-geometry").impact, "strong");
assert.equal(bySlug.get("mr-027-voice-of-the-wrong-element").tone, "humorous");
assert.equal(bySlug.get("mr-029-applause-from-nowhere").tone, "humorous");
assert.ok(bySlug.get("mr-021-frayed-pattern").tags.includes("step-restriction"));
assert.ok(bySlug.get("mr-023-delayed-spark").tags.includes("delayed"));
assert.ok(bySlug.get("mr-024-spell-snag").tags.includes("magical-link"));
assert.ok(bySlug.get("mr-025-unfinished-ending").tags.includes("action-sequencing"));
assert.ok(bySlug.get("mr-026-shadow-arrives-late").tags.includes("retarget"));
assert.ok(bySlug.get("mr-028-familiar-geometry").tags.includes("firing-line"));
assert.ok(bySlug.get("mr-030-reality-takes-notes").tags.includes("repeat-spell"));

console.log("PF2E Critical Forge: Arcane Backlash 0.1.2 validation passed.");
