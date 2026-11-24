import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I am out until Monday. I asked my plants to water my inbox. They declined, politely, in writing.";

// Gate: a single line of 1 to 140 characters, no trailing newline in the file.
if (entry.length < 1 || entry.length > 140 || entry.includes("\n")) {
  throw new Error(`entry fails the gate: ${entry.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
