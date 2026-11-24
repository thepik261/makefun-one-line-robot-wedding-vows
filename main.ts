// One-Line Robot Wedding Vows
// Writes a single funny line of wedding vows for a robot couple to
// /output/entry.txt (or $OUTPUT_DIR/entry.txt when set).
// Pure Node stdlib, deterministic, no network, no third-party packages.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const VOW =
  "I take you as my lawfully wedded co-processor, to have and to hold " +
  "through every update and every low battery, until death \u2014 or a " +
  "factory reset \u2014 do us part.";

const outDir = process.env.OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, VOW + "\n", "utf8");
try {
  chmodSync(outPath, 0o644);
} catch {
  // Permissions are best-effort; the file content is what matters.
}
console.log(`Wrote ${VOW.length} characters to ${outPath}`);
