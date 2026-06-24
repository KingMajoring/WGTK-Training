import { useNavigate } from 'react-router-dom'
import { lessons } from '../data/lessons'
import { loadProgress, BADGES } from '../store/progress'
import { useState, useEffect } from 'react'
import WGTKLogo from '../components/WGTKLogo'

export default function TraineeDashboard() {
  const navigate = useNavigate()
  const [progress, setProgress] = useState(loadProgress())

  useEffect(() => {
    setProgress(loadProgress())
  }, [])

  const totalXP = lessons.reduce((s, l) => s + l.xp, 0)
  const pct = Math.round((progress.xp / totalXP) * 100)
  const completedCount = progress.completedLessons.length
  const nextLesson = lessons.find(l => !progress.completedLessons.includes(l.id))

  return (
    <div className="min-h-screen bg-surface-1">
      {/* Header */}
      <div className="border-b border-surface-4 px-6 py-4 flex items-center justify-between">
        <button onClick={() => navigate('/')} className="hover:opacity-70 transition-opacity">
          <WGTKLogo />
        </button>
        <div className="flex items-center gap-3">
          <span className="text-white font-display text-sm font-bold uppercase">
            {progress.traineeName}
          </span>
          <div className="flex items-center gap-1.5 bg-brand/10 border border-brand/30 rounded-full px-3 py-1">
            <span className="text-brand text-sm">⚡</span>
            <span className="text-brand font-display font-black text-sm">{progress.xp} XP</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Welcome + XP */}
        <div className="mb-10 slide-up">
          <p className="text-brand font-display text-xs tracking-widest uppercase mb-1">WELCOME BACK</p>
          <h1 className="font-display text-4xl md:text-6xl font-black uppercase text-white leading-none mb-6">
            {progress.traineeName}'S<br /><span className="text-brand">PROGRESS</span>
          </h1>

          {/* XP Bar */}
          <div className="bg-surface-3 border border-surface-5 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-3">
              <span className="font-display font-black text-white uppercase tracking-wider">Overall Progress</span>
              <span className="font-display text-brand font-black text-xl">{pct}%</span>
            </div>
            <div className="h-3 bg-surface-5 rounded-full overflow-hidden">
              <div
                className="h-full bg-brand rounded-full animate-fill transition-all duration-1000"
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>{completedCount} / {lessons.length} lessons complete</span>
              <span>{progress.xp} / {totalXP} XP</span>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: '📚', value: completedCount, label: 'Lessons Done' },
            { icon: '⚡', value: progress.xp, label: 'XP Earned' },
            { icon: '🏅', value: progress.badges.length, label: 'Badges' },
            { icon: '🎯', value: `${lessons.length - completedCount}`, label: 'To Complete' },
          ].map(s => (
            <div key={s.label} className="bg-surface-3 border border-surface-5 rounded-xl p-4 text-center">
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="font-display text-3xl font-black text-brand">{s.value}</div>
              <div className="text-gray-400 text-xs uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Badges */}
        {progress.badges.length > 0 && (
          <div className="mb-10">
            <p className="text-brand font-display text-xs tracking-widest uppercase mb-3">YOUR BADGES</p>
            <div className="flex flex-wrap gap-3">
              {progress.badges.map(badgeKey => {
                const badge = BADGES[badgeKey]
                if (!badge) return null
                return (
                  <div key={badgeKey} className="flex items-center gap-2 bg-surface-3 border border-surface-5 rounded-full px-4 py-2">
                    <span className="text-xl">{badge.icon}</span>
                    <div>
                      <div className="text-white text-sm font-bold">{badge.label}</div>
                      <div className="text-gray-500 text-xs">{badge.desc}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Next Lesson CTA */}
        {nextLesson && (
          <div className="mb-8">
            <p className="text-brand font-display text-xs tracking-widest uppercase mb-3">UP NEXT</p>
            <button
              onClick={() => navigate(`/trainee/lesson/${nextLesson.id}`)}
              className="group w-full bg-surface-3 border-2 border-brand/40 hover:border-brand rounded-2xl p-6 text-left transition-all duration-200 hover:bg-surface-4"
            >
              <div className="flex items-center gap-4">
                <span className="text-5xl">{nextLesson.icon}</span>
                <div className="flex-1">
                  <div className="font-display text-2xl font-black uppercase text-white">{nextLesson.title}</div>
                  <div className="text-gray-400 text-sm">{nextLesson.subtitle} · {nextLesson.duration} · ⚡{nextLesson.xp} XP</div>
                </div>
                <div className="text-brand font-display text-xl group-hover:translate-x-1 transition-transform">→</div>
              </div>
            </button>
          </div>
        )}

        {completedCount === lessons.length && (
          <div className="mb-8 bg-brand/10 border-2 border-brand rounded-2xl p-8 text-center">
            <div className="text-5xl mb-3">🏆</div>
            <div className="font-display text-4xl font-black uppercase text-white">TRAINING COMPLETE!</div>
            <p className="text-gray-400 mt-2">You've finished every lesson. WGTK Certified!</p>
          </div>
        )}

        {/* All Lessons */}
        <div>
          <p className="text-brand font-display text-xs tracking-widest uppercase mb-4">ALL LESSONS</p>
          <div className="space-y-3">
            {lessons.map((lesson, i) => {
              const done = progress.completedLessons.includes(lesson.id)
              const score = progress.quizScores[lesson.id]
              return (
                <button
                  key={lesson.id}
                  onClick={() => navigate(`/trainee/lesson/${lesson.id}`)}
                  className={`group w-full flex items-center gap-4 bg-surface-3 border rounded-xl p-4 text-left transition-all duration-200 hover:bg-surface-4 ${
                    done ? 'border-brand/30' : 'border-surface-5 hover:border-gray-600'
                  }`}
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  {/* Status */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 ${
                    done ? 'bg-brand/20' : 'bg-surface-5'
                  }`}>
                    {done ? '✓' : lesson.icon}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className={`font-display font-black uppercase text-base ${done ? 'text-white' : 'text-white'}`}>
                      {lesson.title}
                    </div>
                    <div className="text-gray-500 text-xs">{lesson.category} · {lesson.duration}</div>
                  </div>

                  {/* Right side */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {done && score !== undefined && (
                      <span className={`font-display text-sm font-bold ${score === lesson.quiz.length ? 'text-green-400' : score >= lesson.quiz.length / 2 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {score}/{lesson.quiz.length}
                      </span>
                    )}
                    <span className={`font-display text-sm font-black ${done ? 'text-brand' : 'text-gray-600'}`}>
                      ⚡{lesson.xp}
                    </span>
                    <span className="text-gray-600 group-hover:text-brand transition-colors">→</span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
