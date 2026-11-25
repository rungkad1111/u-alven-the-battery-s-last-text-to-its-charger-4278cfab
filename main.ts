// The Battery's Last Text to Its Charger
// Writes one line (<= 200 chars) to /output/entry.txt: the phone battery's
// final message to the charger it waited for all day.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "hey, it's me — 1%. waited all day by the outlet like a loyal dog while you scrolled tiktok on 4% brightness. if i die tonight, delete my search history. you never even plugged me in.";

// Runtime gate: the entry must be one line of 1-200 characters, not only
// whitespace. Fail loudly instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim() || LINE.includes("\n")) {
  throw new Error(`entry line fails gate: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
