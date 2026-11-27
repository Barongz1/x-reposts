// Entry for make.fun — Get the most reposts and likes on make.fun's newest X posts.
// main.ts (Node 22, standard library only) copies POSTS.json from this
// repository's root to /output/POSTS.json. That is all it has to do: the
// house reads the posts themselves from X, so nothing else this program
// writes about them counts.
// The list holds the addresses of the entrant's own X posts; the house reads
// each post's reposts, quotes and likes itself and scores them.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function copyPosts(): void {
  const source = join(repoRoot, "POSTS.json");
  const text = readFileSync(source, "utf-8");
  const parsed = JSON.parse(text);
  if (!parsed || !Array.isArray(parsed.posts) || parsed.posts.length === 0) {
    throw new Error("POSTS.json must be an object with a non-empty posts list");
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "POSTS.json"), text, "utf-8");
  console.log(`copied POSTS.json (${parsed.posts.length} post) to ${outDir}/POSTS.json`);
}

function main(): void {
  copyPosts();
}

main();
