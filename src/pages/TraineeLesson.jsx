import { useNavigate, useParams } from 'react-router-dom'
import { getLessonById } from '../data/lessons'
import { completeLesson, loadProgress, BADGES } from '../store/progress'
import { useState, useEffect } from 'react'
import WGTKLogo from '../components/WGTKLogo'

const PHASE = { LEARN: 'learn', QUIZ: 'quiz', RESULT: 'result' }

export default function TraineeLesson() {
  const { id } = useParams()
  const navigate = useNavigate()
  const lesson = getLessonById(id)

  const [phase, setPhase] = useState(PHASE.LEARN)
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [confirmed, setConfirmed] = useState(false)
  const [answers, setAnswers] = useState([])
  const [xpBump, setXpBump] = useState(false)
  const [newBadges, setNewBadges] = useState([])

  const alreadyDone = loadProgress().completedLessons.includes(lesson?.id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [phase, current])

  if (!lesson) return <div className="min-h-screen bg-surface-1 flex items-center justify-center text-white">Lesson not found</div>

  const q = lesson.quiz[current]
  const score = answers.filter(Boolean).length

  function confirmAnswer() {
    if (selected === null) return
    const correct = selected === q.answer
    setConfirmed(true)
    setAnswers(prev => [...prev, correct])
  }

  function nextQuestion() {
    if (current + 1 < lesson.quiz.length) {
      setCurrent(c => c + 1)
      setSelected(null)
      setConfirmed(false)
    } else {
      const prevProgress = loadProgress()
      const finalScore = [...answers, selected === q.answer].filter(Boolean).length
      const newState = completeLesson(lesson.id, lesson.xp, finalScore)
      const addedBadges = newState.badges.filter(b => !prevProgress.badges.includes(b))
      setNewBadges(addedBadges)
      setXpBump(true)
      setTimeout(() => setXpBump(false), 400)
      setPhase(PHASE.RESULT)
    }
  }

  const finalScore = answers.filter(Boolean).length + (confirmed && selected === q.answer ? 1 : 0)

  return (
    <div className="min-h-screen bg-surface-1">
      {/* Header */}
      <div className="border-b border-surface-4 px-6 py-4 flex items-center justify-between">
        <button onClick={() => navigate('/trainee')} className="hover:opacity-70 transition-opacity">
          <WGTKLogo />
        </button>
        {phase === PHASE.QUIZ && (
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="text-brand font-display font-bold">{current + 1}</span>
            <span>/ {lesson.quiz.length}</span>
          </div>
        )}
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10">

        {/* LEARN PHASE */}
        {phase === PHASE.LEARN && (
          <div className="slide-up">
            <button onClick={() => navigate('/trainee')} className="text-gray-500 hover:text-brand text-sm mb-6 flex items-center gap-2 transition-colors">
              ← Back to Dashboard
            </button>

            <div className="flex items-start gap-3 mb-6">
              <span className="text-4xl">{lesson.icon}</span>
              <div>
                <p className="text-brand font-display text-xs tracking-widest uppercase">{lesson.category}</p>
                <h1 className="font-display text-4xl font-black uppercase text-white leading-tight">{lesson.title}</h1>
                <p className="text-gray-400 text-sm mt-1">{lesson.subtitle} · {lesson.duration} · ⚡{lesson.xp} XP</p>
              </div>
            </div>

            {alreadyDone && (
              <div className="mb-6 bg-brand/10 border border-brand/30 rounded-xl px-4 py-3 text-brand text-sm font-display uppercase tracking-wider">
                ✓ Already completed — quiz again to improve your score
              </div>
            )}

            {/* Content */}
            <div className="space-y-5 mb-10">
              {lesson.content.map((block, i) => (
                <div key={i}>
                  {block.type === 'intro' && (
                    <div className="bg-surface-3 border border-surface-5 rounded-2xl p-6">
                      <p className="text-white text-lg leading-relaxed">{block.text}</p>
                    </div>
                  )}
                  {block.type === 'keypoints' && (
                    <div className="bg-surface-3 border border-surface-5 rounded-2xl p-6">
                      <h3 className="font-display text-lg font-black uppercase text-brand mb-4">{block.heading}</h3>
                      <ul className="space-y-3">
                        {block.points.map((pt, j) => (
                          <li key={j} className="flex gap-3 text-gray-300">
                            <span className="text-brand mt-1 flex-shrink-0">▸</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {block.type === 'stat-row' && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {block.stats.map((s, j) => (
                        <div key={j} className="bg-surface-3 border border-surface-5 rounded-xl p-4 text-center">
                          <div className="font-display text-3xl font-black text-brand">{s.value}</div>
                          <div className="text-gray-400 text-xs mt-1 uppercase tracking-wider">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={() => { setPhase(PHASE.QUIZ); setCurrent(0); setSelected(null); setConfirmed(false); setAnswers([]) }}
              className="w-full bg-brand hover:bg-brand-dark text-white font-display text-2xl font-black uppercase tracking-wider rounded-2xl py-5 transition-colors"
            >
              START QUIZ — {lesson.quiz.length} QUESTIONS →
            </button>
          </div>
        )}

        {/* QUIZ PHASE */}
        {phase === PHASE.QUIZ && (
          <div className="slide-up">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="h-2 bg-surface-5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand rounded-full transition-all duration-500"
                  style={{ width: `${((current) / lesson.quiz.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="mb-2">
              <span className="text-brand font-display text-xs tracking-widest uppercase">QUESTION {current + 1} OF {lesson.quiz.length}</span>
            </div>
            <h2 className="font-display text-3xl font-black uppercase text-white leading-tight mb-8">
              {q.question}
            </h2>

            <div className="space-y-3 mb-8">
              {q.options.map((opt, j) => {
                let cls = 'quiz-option bg-surface-3 border border-surface-5 text-white'
                if (confirmed) {
                  if (j === q.answer) cls = 'quiz-option correct bg-surface-3 border border-green-500 text-white'
                  else if (j === selected) cls = 'quiz-option wrong bg-surface-3 border border-red-500 text-white'
                  else cls = 'quiz-option bg-surface-3 border border-surface-5 text-gray-500'
                } else if (j === selected) {
                  cls = 'quiz-option bg-surface-3 border-2 border-brand text-white'
                }
                return (
                  <button
                    key={j}
                    onClick={() => !confirmed && setSelected(j)}
                    disabled={confirmed}
                    className={`${cls} w-full text-left px-5 py-4 rounded-xl font-medium transition-all`}
                  >
                    <span className="text-brand font-display font-black mr-3 text-sm">
                      {String.fromCharCode(65 + j)}.
                    </span>
                    {opt}
                    {confirmed && j === q.answer && <span className="ml-2 text-green-400">✓</span>}
                    {confirmed && j === selected && j !== q.answer && <span className="ml-2 text-red-400">✗</span>}
                  </button>
                )
              })}
            </div>

            {!confirmed ? (
              <button
                onClick={confirmAnswer}
                disabled={selected === null}
                className="w-full bg-brand hover:bg-brand-dark disabled:opacity-30 disabled:cursor-not-allowed text-white font-display text-xl font-black uppercase tracking-wider rounded-2xl py-4 transition-colors"
              >
                CONFIRM ANSWER
              </button>
            ) : (
              <div>
                <div className={`mb-4 rounded-xl px-5 py-4 font-display text-lg font-black uppercase ${
                  selected === q.answer ? 'bg-green-500/10 border border-green-500/40 text-green-400' : 'bg-red-500/10 border border-red-500/40 text-red-400'
                }`}>
                  {selected === q.answer ? '✓ CORRECT!' : `✗ NOT QUITE — The answer was: ${q.options[q.answer]}`}
                </div>
                <button
                  onClick={nextQuestion}
                  className="w-full bg-brand hover:bg-brand-dark text-white font-display text-xl font-black uppercase tracking-wider rounded-2xl py-4 transition-colors"
                >
                  {current + 1 < lesson.quiz.length ? 'NEXT QUESTION →' : 'SEE RESULTS →'}
                </button>
              </div>
            )}
          </div>
        )}

        {/* RESULT PHASE */}
        {phase === PHASE.RESULT && (
          <div className="slide-up text-center">
            {(() => {
              const pct = Math.round((finalScore / lesson.quiz.length) * 100)
              const perfect = finalScore === lesson.quiz.length
              const passed = pct >= 60
              return (
                <>
                  <div className="text-7xl mb-4">{perfect ? '🏆' : passed ? '⭐' : '💪'}</div>
                  <p className="text-brand font-display text-xs tracking-widest uppercase mb-2">QUIZ COMPLETE</p>
                  <h1 className="font-display text-5xl font-black uppercase text-white mb-2">
                    {perfect ? 'PERFECT SCORE!' : passed ? 'WELL DONE!' : 'KEEP GOING!'}
                  </h1>
                  <div className="font-display text-6xl font-black text-brand mb-2">
                    {finalScore}/{lesson.quiz.length}
                  </div>
                  <p className="text-gray-400 mb-8">{pct}% — {perfect ? 'Flawless.' : passed ? 'Solid result.' : 'Review the lesson and try again.'}</p>

                  {/* XP earned */}
                  <div className={`bg-brand/10 border border-brand/30 rounded-2xl p-5 mb-6 inline-block ${xpBump ? 'xp-pop' : ''}`}>
                    <p className="text-gray-400 text-sm mb-1">XP EARNED</p>
                    <div className="font-display text-4xl font-black text-brand">+{lesson.xp} XP ⚡</div>
                  </div>

                  {/* New Badges */}
                  {newBadges.length > 0 && (
                    <div className="mb-6">
                      <p className="text-brand font-display text-xs tracking-widest uppercase mb-3">NEW BADGE{newBadges.length > 1 ? 'S' : ''} UNLOCKED!</p>
                      <div className="flex flex-wrap justify-center gap-3">
                        {newBadges.map(key => {
                          const b = BADGES[key]
                          return b ? (
                            <div key={key} className="bg-surface-3 border border-brand/40 rounded-full px-4 py-2 flex items-center gap-2">
                              <span className="text-2xl">{b.icon}</span>
                              <span className="text-white font-bold">{b.label}</span>
                            </div>
                          ) : null
                        })}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => navigate('/trainee')}
                      className="flex-1 bg-surface-3 border border-surface-5 hover:border-gray-500 text-white font-display text-lg font-black uppercase tracking-wider rounded-2xl py-4 transition-colors"
                    >
                      ← DASHBOARD
                    </button>
                    <button
                      onClick={() => { setPhase(PHASE.LEARN); setCurrent(0); setSelected(null); setConfirmed(false); setAnswers([]) }}
                      className="flex-1 bg-brand hover:bg-brand-dark text-white font-display text-lg font-black uppercase tracking-wider rounded-2xl py-4 transition-colors"
                    >
                      TRY AGAIN
                    </button>
                  </div>
                </>
              )
            })()}
          </div>
        )}
      </div>
    </div>
  )
}
