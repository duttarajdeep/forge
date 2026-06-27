// Gamification layer — pure derivations from window.TRACKS + window.PROGRESS + PENDING overlay.
// No persistent state of its own. Edit XP weights or badge rules freely.

window.GAME = (() => {

  // ─── XP per session ──────────────────────────────────────────────
  // Base XP varies by track to reflect density / effort.
  const TRACK_BASE_XP = {
    A: 10,  // DSA — high volume, short sessions
    B: 15,  // System Design — deeper sessions
    C: 12,  // Concurrency
    D: 12,  // Infrastructure
    E: 8,   // Behavioral
    F: 15,  // Cloud Computing — project-heavy
    G: 15   // AI/MCP — project-heavy
  };

  // Bonus XP keywords inside session titles.
  const KEYWORD_BONUS = [
    { match: /\bdrill\b/i,                         bonus: 5  },
    { match: /\bpractice\b/i,                      bonus: 5  },
    { match: /\bproject\b/i,                       bonus: 15 },
    { match: /\bbuild\b/i,                         bonus: 15 },
    { match: /\bimplement\b/i,                     bonus: 10 },
    { match: /\bcapstone|synthesis\b/i,            bonus: 20 },
    { match: /\bmock\b/i,                          bonus: 25 },
    { match: /\breview\b/i,                        bonus: 5  }
  ];

  const MODULE_BONUS = 30;
  const TRACK_BONUS  = 150;

  function xpForSession(letter, sess) {
    let xp = TRACK_BASE_XP[letter] || 10;
    for (const k of KEYWORD_BONUS) if (k.match.test(sess.title)) xp += k.bonus;
    return xp;
  }

  function xpForModuleComplete()  { return MODULE_BONUS; }
  function xpForTrackComplete()   { return TRACK_BONUS;  }

  // ─── Total XP earned ─────────────────────────────────────────────
  function completedKeys() {
    const out = new Set();
    const P = window.PROGRESS;
    for (const t of window.TRACKS) {
      const cur = P.currentSession[t.letter] || 1;
      for (const m of t.modules)
        for (const s of m.sessions)
          if (s.n < cur) out.add(`${t.letter}-${s.n}`);
    }
    // include pending (UI-marked, not yet synced)
    if (window.GAME_INCLUDE_PENDING !== false) {
      for (const key of Object.keys(window.PENDING || {})) out.add(key);
    }
    return out;
  }

  function totalXp() {
    const done = completedKeys();
    let xp = 0;
    for (const t of window.TRACKS) {
      let trackDone = 0;
      for (const m of t.modules) {
        let moduleDone = 0;
        for (const s of m.sessions) {
          if (done.has(`${t.letter}-${s.n}`)) {
            xp += xpForSession(t.letter, s);
            moduleDone++;
            trackDone++;
          }
        }
        if (moduleDone === m.sessions.length && m.sessions.length > 0) xp += MODULE_BONUS;
      }
      if (trackDone === t.totalSessions && t.totalSessions > 0) xp += TRACK_BONUS;
    }
    return xp;
  }

  // ─── Levels ──────────────────────────────────────────────────────
  // Thresholds tuned so completing the whole curriculum lands you ~L8.
  const LEVELS = [
    { level: 1, name: "Novice",            xp: 0    },
    { level: 2, name: "Apprentice",        xp: 250  },
    { level: 3, name: "Practitioner",      xp: 600  },
    { level: 4, name: "Engineer",          xp: 1100 },
    { level: 5, name: "Senior Candidate",  xp: 1800 },
    { level: 6, name: "Interview Ready",   xp: 2700 },
    { level: 7, name: "Polished",          xp: 3600 },
    { level: 8, name: "Mastery",           xp: 4500 }
  ];

  function rank(xp) {
    let i = 0;
    while (i + 1 < LEVELS.length && xp >= LEVELS[i + 1].xp) i++;
    const cur  = LEVELS[i];
    const next = LEVELS[i + 1] || null;
    const span = next ? next.xp - cur.xp : 1;
    const into = xp - cur.xp;
    return {
      level: cur.level,
      name:  cur.name,
      xp,
      currentLevelXp: cur.xp,
      nextLevelXp: next?.xp ?? null,
      xpIntoLevel: into,
      xpToNext: next ? next.xp - xp : 0,
      progress: next ? Math.min(1, into / span) : 1,
      isMax: !next
    };
  }

  // ─── Streak stats ────────────────────────────────────────────────
  // Source: PROGRESS.sessionLog only (pending doesn't count for streaks
  // until synced — keeps streaks honest).
  function streakStats() {
    const log = window.PROGRESS.sessionLog || [];
    if (!log.length) return { current: 0, longest: 0, daysActive: 0 };

    const days = Array.from(new Set(log.map(s => s.date))).sort();
    const daysActive = days.length;
    const today = window.PROGRESS.generatedAt;

    // current
    let current = 0;
    let cursor = new Date(today + "T00:00:00");
    const daySet = new Set(days);
    while (true) {
      const iso = cursor.toISOString().slice(0, 10);
      if (daySet.has(iso)) { current++; cursor.setDate(cursor.getDate() - 1); }
      else if (current === 0 && iso === today) { cursor.setDate(cursor.getDate() - 1); }
      else break;
    }

    // longest
    let longest = 0, run = 0, prev = null;
    for (const d of days) {
      if (!prev) { run = 1; }
      else {
        const diff = (new Date(d) - new Date(prev)) / 86400000;
        run = (diff === 1) ? run + 1 : 1;
      }
      if (run > longest) longest = run;
      prev = d;
    }

    return { current, longest, daysActive };
  }

  // ─── Badges ──────────────────────────────────────────────────────
  // Each badge is a pure function over state. Returns { earned, progress (0..1), label }.
  function badges() {
    const P = window.PROGRESS;
    const done = completedKeys();
    const streak = streakStats();
    const log = P.sessionLog || [];

    // helpers
    const sessionsInTrack = letter => {
      const t = window.TRACKS.find(x => x.letter === letter);
      if (!t) return 0;
      return t.modules.flatMap(m => m.sessions).filter(s => done.has(`${letter}-${s.n}`)).length;
    };
    const trackComplete = letter => {
      const t = window.TRACKS.find(x => x.letter === letter);
      return t && sessionsInTrack(letter) === t.totalSessions;
    };
    const sessionsOnDay = date => log.filter(s => s.date === date).length;
    const tracksTouchedInLast7Days = () => {
      const cutoff = new Date(P.generatedAt + "T00:00:00");
      cutoff.setDate(cutoff.getDate() - 7);
      const cutoffStr = cutoff.toISOString().slice(0, 10);
      return new Set(log.filter(s => s.date >= cutoffStr).map(s => s.track)).size;
    };

    const total = done.size;

    const defs = [
      // ── Starter ──────────────────────────────────────────────────
      { id: "first-step", group: "Starter", icon: "👣", name: "First Step",
        desc: "Complete your first session",
        target: 1, progress: total },
      { id: "habit-3", group: "Starter", icon: "🌱", name: "Habit Forming",
        desc: "Maintain a 3-day streak",
        target: 3, progress: Math.max(streak.current, streak.longest) },
      { id: "habit-7", group: "Starter", icon: "🔥", name: "Week One",
        desc: "Maintain a 7-day streak",
        target: 7, progress: Math.max(streak.current, streak.longest) },

      // ── Progression ──────────────────────────────────────────────
      { id: "module-1", group: "Progression", icon: "📦", name: "Module Closer",
        desc: "Finish your first module",
        target: 1, progress: countCompletedModules() },
      { id: "track-1", group: "Progression", icon: "🛤️", name: "Track Trailblazer",
        desc: "Finish your first track end-to-end",
        target: 1, progress: ["A","B","C","D","E","F","G"].filter(trackComplete).length },
      { id: "centurion", group: "Progression", icon: "💯", name: "Centurion",
        desc: "Complete 100 sessions total",
        target: 100, progress: total },
      { id: "halfway", group: "Progression", icon: "🎯", name: "Halfway There",
        desc: "Complete 50% of the entire curriculum",
        target: Math.ceil(totalSessionsAll() / 2), progress: total },
      { id: "completionist", group: "Progression", icon: "🏆", name: "Completionist",
        desc: "Complete every session in the curriculum",
        target: totalSessionsAll(), progress: total },

      // ── Track-specific ───────────────────────────────────────────
      { id: "track-A", group: "Mastery", icon: "🧮", name: "Pattern Master",
        desc: "Complete Track A — DSA",
        target: getTrackTotal("A"), progress: sessionsInTrack("A") },
      { id: "track-B", group: "Mastery", icon: "🏛️", name: "System Architect",
        desc: "Complete Track B — System Design",
        target: getTrackTotal("B"), progress: sessionsInTrack("B") },
      { id: "track-C", group: "Mastery", icon: "🧵", name: "Concurrency Wizard",
        desc: "Complete Track C — Concurrency",
        target: getTrackTotal("C"), progress: sessionsInTrack("C") },
      { id: "track-D", group: "Mastery", icon: "⚙️", name: "Infrastructure Operator",
        desc: "Complete Track D — Infrastructure",
        target: getTrackTotal("D"), progress: sessionsInTrack("D") },
      { id: "track-E", group: "Mastery", icon: "🗣️", name: "Storyteller",
        desc: "Complete Track E — Behavioral",
        target: getTrackTotal("E"), progress: sessionsInTrack("E") },
      { id: "track-F", group: "Mastery", icon: "☁️", name: "Cloud Builder",
        desc: "Complete Track F — Cloud Computing",
        target: getTrackTotal("F"), progress: sessionsInTrack("F") },
      { id: "track-G", group: "Mastery", icon: "🤖", name: "AI Whisperer",
        desc: "Complete Track G — AI / MCP / Agents",
        target: getTrackTotal("G"), progress: sessionsInTrack("G") },

      // ── Cadence ──────────────────────────────────────────────────
      { id: "marathon", group: "Cadence", icon: "🏃", name: "Marathon Day",
        desc: "Complete 5+ sessions in a single day",
        target: 5, progress: maxSessionsInOneDay() },
      { id: "steady-14", group: "Cadence", icon: "🪨", name: "Steady",
        desc: "Maintain a 14-day streak",
        target: 14, progress: Math.max(streak.current, streak.longest) },
      { id: "devoted-30", group: "Cadence", icon: "💎", name: "Devoted",
        desc: "Maintain a 30-day streak",
        target: 30, progress: Math.max(streak.current, streak.longest) },
      { id: "diverse-week", group: "Cadence", icon: "🌈", name: "Diversified",
        desc: "Touch 5+ different tracks in one week",
        target: 5, progress: tracksTouchedInLast7Days() },

      // ── Special ──────────────────────────────────────────────────
      { id: "comeback", group: "Special", icon: "↩️", name: "Comeback Kid",
        desc: "Resume after a 7-day gap",
        target: 1, progress: hasComebackEvent(log) ? 1 : 0 },
      { id: "polyglot", group: "Special", icon: "🌐", name: "Polyglot",
        desc: "Log sessions in both the algorithms track and an applied/project track",
        target: 2, progress: (sessionsInTrack("A") > 0 ? 1 : 0) + ((sessionsInTrack("F") > 0 || sessionsInTrack("G") > 0) ? 1 : 0) },
      { id: "gate-2", group: "Special", icon: "🎓", name: "L5 Ready",
        desc: "Reach Gate 2 — Interview Ready milestone",
        target: 1, progress: (P.milestones || []).find(m => /Gate 2/.test(m.label))?.done ? 1 : 0 }
    ];

    return defs.map(b => ({
      ...b,
      earned: b.progress >= b.target,
      progressPct: Math.min(1, b.progress / Math.max(1, b.target))
    }));
  }

  // ─── helpers ─────────────────────────────────────────────────────
  function getTrackTotal(letter) {
    const t = window.TRACKS.find(x => x.letter === letter);
    return t?.totalSessions || 0;
  }
  function totalSessionsAll() {
    return window.TRACKS.reduce((acc, t) => acc + t.totalSessions, 0);
  }
  function countCompletedModules() {
    const done = completedKeys();
    let n = 0;
    for (const t of window.TRACKS) {
      for (const m of t.modules) {
        if (m.sessions.length > 0 && m.sessions.every(s => done.has(`${t.letter}-${s.n}`))) n++;
      }
    }
    return n;
  }
  function maxSessionsInOneDay() {
    const log = window.PROGRESS.sessionLog || [];
    const counts = {};
    for (const s of log) counts[s.date] = (counts[s.date] || 0) + 1;
    return Object.values(counts).reduce((a, b) => Math.max(a, b), 0);
  }
  function hasComebackEvent(log) {
    if (log.length < 2) return false;
    const days = Array.from(new Set(log.map(s => s.date))).sort();
    for (let i = 1; i < days.length; i++) {
      const gap = (new Date(days[i]) - new Date(days[i - 1])) / 86400000;
      if (gap >= 7) return true;
    }
    return false;
  }

  return {
    xpForSession,
    totalXp,
    rank,
    streakStats,
    badges,
    LEVELS,
    helpers: { completedKeys, countCompletedModules, maxSessionsInOneDay, totalSessionsAll }
  };
})();
