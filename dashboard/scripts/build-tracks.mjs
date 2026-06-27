#!/usr/bin/env node
// Parses tracks/*.md → dashboard/tracks.js
// Run: node dashboard/scripts/build-tracks.mjs

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "..");
const TRACKS_DIR = join(ROOT, "tracks");
const OUT = join(ROOT, "dashboard", "tracks.js");

const TRACK_FILES = [
  { letter: "A", file: "A-dsa.md",             slug: "dsa" },
  { letter: "B", file: "B-system-design.md",   slug: "system-design" },
  { letter: "C", file: "C-concurrency.md",     slug: "concurrency" },
  { letter: "D", file: "D-infrastructure.md",  slug: "infrastructure" },
  { letter: "E", file: "E-behavioral.md",      slug: "behavioral" },
  { letter: "F", file: "F-cloud-computing.md", slug: "cloud-computing" },
  { letter: "G", file: "G-ai-mcp.md",          slug: "ai-mcp" }
];

function parseTrack(letter, slug, md) {
  const lines = md.split("\n");
  const track = {
    letter,
    slug,
    title: "",
    intro: "",
    modules: [],
    totalSessions: 0
  };

  let i = 0;

  // Title (# Track X — ...)
  while (i < lines.length && !lines[i].startsWith("# ")) i++;
  if (i < lines.length) {
    track.title = lines[i].replace(/^#\s+/, "").trim();
    i++;
  }

  // Intro (everything up to first ##)
  const introLines = [];
  while (i < lines.length && !lines[i].startsWith("## ")) {
    introLines.push(lines[i]);
    i++;
  }
  track.intro = introLines.join("\n").trim();

  // Modules: ## Module N: ...  (also ## How Each Session Works, ## Prerequisites - skip these from modules but keep as preamble blocks)
  let currentModule = null;
  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      const heading = line.replace(/^##\s+/, "").trim();
      if (/^Module\s+\d+/i.test(heading)) {
        currentModule = {
          title: heading,
          intro: "",
          sessions: []
        };
        track.modules.push(currentModule);
        i++;
        // capture module intro until next ### or ##
        const modIntro = [];
        while (i < lines.length && !lines[i].startsWith("### ") && !lines[i].startsWith("## ")) {
          modIntro.push(lines[i]);
          i++;
        }
        currentModule.intro = modIntro.join("\n").trim();
        continue;
      } else {
        // non-module H2 (How Each Session Works, Prerequisites, End-State Deliverables, etc.)
        // attach to track-level extras
        const sectionLines = [line];
        i++;
        while (i < lines.length && !lines[i].startsWith("## ")) {
          sectionLines.push(lines[i]);
          i++;
        }
        if (!track.extras) track.extras = [];
        track.extras.push({
          heading,
          body: sectionLines.slice(1).join("\n").trim()
        });
        continue;
      }
    }

    if (line.startsWith("### ")) {
      const sessHeading = line.replace(/^###\s+/, "").trim();
      // expected: "Session N — Title" or "Session N: Title"
      const m = sessHeading.match(/^Session\s+(\d+)\s*[—–:-]\s*(.+)$/);
      if (m && currentModule) {
        const sessionNum = parseInt(m[1], 10);
        const sessionTitle = m[2].trim();
        i++;
        const bodyLines = [];
        while (i < lines.length && !lines[i].startsWith("### ") && !lines[i].startsWith("## ")) {
          bodyLines.push(lines[i]);
          i++;
        }
        currentModule.sessions.push({
          n: sessionNum,
          title: sessionTitle,
          body: bodyLines.join("\n").trim()
        });
        track.totalSessions = Math.max(track.totalSessions, sessionNum);
        continue;
      }
    }

    i++;
  }

  return track;
}

function main() {
  const tracks = [];
  for (const { letter, file, slug } of TRACK_FILES) {
    const path = join(TRACKS_DIR, file);
    let md;
    try {
      md = readFileSync(path, "utf8");
    } catch (e) {
      console.warn(`skipping ${file}: ${e.message}`);
      continue;
    }
    const t = parseTrack(letter, slug, md);
    tracks.push(t);
    console.log(`${letter}: ${t.modules.length} modules, ${t.totalSessions} sessions`);
  }

  const out = `// Auto-generated from tracks/*.md by dashboard/scripts/build-tracks.mjs
// Do not edit by hand. Re-run the build script after editing track markdown.
window.TRACKS = ${JSON.stringify(tracks, null, 2)};
`;
  writeFileSync(OUT, out);
  console.log(`\nwrote ${OUT} (${out.length} bytes)`);
}

main();
