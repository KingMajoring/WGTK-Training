const KEY = 'wgtk_progress';

const defaultState = {
  traineeName: '',
  completedLessons: [],
  quizScores: {},
  xp: 0,
  badges: [],
  lastActive: null,
};

export function loadProgress() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...defaultState, ...JSON.parse(raw) } : { ...defaultState };
  } catch {
    return { ...defaultState };
  }
}

export function saveProgress(state) {
  localStorage.setItem(KEY, JSON.stringify({ ...state, lastActive: Date.now() }));
}

export function completeLesson(lessonId, xpEarned, quizScore) {
  const state = loadProgress();
  if (!state.completedLessons.includes(lessonId)) {
    state.completedLessons.push(lessonId);
    state.xp += xpEarned;
    checkBadges(state);
  }
  state.quizScores[lessonId] = quizScore;
  saveProgress(state);
  return state;
}

function checkBadges(state) {
  const count = state.completedLessons.length;
  if (count >= 1 && !state.badges.includes('first_key')) {
    state.badges.push('first_key');
  }
  if (count >= 3 && !state.badges.includes('getting_started')) {
    state.badges.push('getting_started');
  }
  if (count >= 5 && !state.badges.includes('halfway')) {
    state.badges.push('halfway');
  }
  if (count >= 8 && !state.badges.includes('certified')) {
    state.badges.push('certified');
  }
  if (state.xp >= 500 && !state.badges.includes('xp_500')) {
    state.badges.push('xp_500');
  }
}

export const BADGES = {
  first_key: { label: 'First Key', icon: '🔑', desc: 'Completed your first lesson' },
  getting_started: { label: 'Getting Started', icon: '🚀', desc: 'Completed 3 lessons' },
  halfway: { label: 'Halfway There', icon: '⭐', desc: 'Completed 5 lessons' },
  certified: { label: 'WGTK Certified', icon: '🏆', desc: 'Completed all 8 lessons' },
  xp_500: { label: 'XP Champion', icon: '⚡', desc: 'Earned 500 XP' },
};
