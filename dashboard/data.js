// Public Forge — static progress data.
// Edit currentSession / sessionLog / weeklyTally by hand to track your progress.
window.PROGRESS = {
  generatedAt: "2026-06-27",
  weekStarting: "2026-06-22",
  weeklyTargets: { A: 5, B: 3, C: 2, D: 2, E: 1, F: 2, G: 2 },

  // current session per track (1 = haven't started, value = next session to do)
  currentSession: { A: 1, B: 1, C: 1, D: 1, E: 1, F: 1, G: 1 },

  // sessions completed this week, by track
  weeklyTally: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0 },

  // full session log — append-only
  // each entry: { date: "YYYY-MM-DD", track: "A", session: 1, durationMin: 45, notes: "..." }
  sessionLog: [],

  // per-session annotations: revision notes + artifact links
  // key: "A-1" → { notes: "...", artifacts: [{title, url}], reviewedAt: "YYYY-MM-DD" }
  annotations: {},

  // cross-cutting library entries — your artifact repository
  // each: { title, kind: "diagram"|"doc"|"code"|"link", path, tags: [], addedAt }
  library: [],

  weakSpots: {
    dsa: [],
    systemDesign: []
  },

  milestones: [
    { label: "Gate 1: Foundation Solid",    done: false },
    { label: "Gate 2: Interview Ready",     done: false },
    { label: "Gate 3: Mastery",             done: false },
    { label: "First mock interview",        done: false },
    { label: "First project on GitHub",     done: false },
    { label: "All 6 STAR stories polished", done: false }
  ]
};
