import { useNavigate, useParams } from 'react-router-dom'
import { getLessonById } from '../data/lessons'
import { useState } from 'react'
import WGTKLogo from '../components/WGTKLogo'

export default function TrainerLesson() {
  const { id } = useParams()
  const navigate = useNavigate()
  const lesson = getLessonById(id)
  const [activeTab, setActiveTab] = useState('cheat')

  if (!lesson) return <div className="min-h-screen bg-surface-1 flex items-center justify-center text-white">Lesson not found</div>

  return (
    <div className="min-h-screen bg-surface-1">
      {/* Header */}
      <div className="border-b border-surface-4 px-6 py-4 flex items-center justify-between">
        <button onClick={() => navigate('/trainer')} className="hover:opacity-70 transition-opacity">
          <WGTKLogo />
        </button>
        <span className="text-brand font-display text-xs tracking-widest uppercase border border-brand/30 bg-brand/10 rounded-full px-3 py-1">
          TRAINER MODE
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <button onClick={() => navigate('/trainer')} className="text-gray-500 hover:text-brand text-sm mb-6 flex items-center gap-2 transition-colors">
          ← Back to Library
        </button>

        {/* Lesson Header */}
        <div className="mb-8 slide-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{lesson.icon}</span>
            <div>
              <p className="text-brand font-display text-xs tracking-widest uppercase">{lesson.category}</p>
              <h1 className="font-display text-4xl md:text-5xl font-black uppercase text-white leading-tight">
                {lesson.title}
              </h1>
            </div>
          </div>
          <p className="text-gray-400">{lesson.subtitle}</p>
          <div className="flex gap-4 mt-3 text-sm text-gray-500">
            <span>⏱ {lesson.duration}</span>
            <span>⚡ {lesson.xp} XP for trainee</span>
            <span>❓ {lesson.quiz.length} quiz questions</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 bg-surface-3 p-1 rounded-xl border border-surface-5 w-fit">
          {[
            { key: 'cheat', label: '📋 Cheat Sheet' },
            { key: 'notes', label: '🗒 Trainer Notes' },
            { key: 'quiz', label: '❓ Quiz Preview' },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2.5 rounded-lg font-display text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === tab.key
                  ? 'bg-brand text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cheat Sheet */}
        {activeTab === 'cheat' && (
          <div className="slide-up">
            <div className="bg-surface-3 border border-surface-5 rounded-2xl overflow-hidden">
              <div className="bg-brand px-6 py-4">
                <h2 className="font-display text-2xl font-black uppercase text-white">QUICK REFERENCE</h2>
                <p className="text-white/70 text-sm">Keep this visible while delivering the session</p>
              </div>
              <div className="divide-y divide-surface-5">
                {lesson.cheatSheet.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 px-6 py-4">
                    <span className="text-brand font-display text-xs uppercase tracking-wider min-w-32 pt-0.5">{item.label}</span>
                    <span className="text-white font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Content blocks */}
            {lesson.content.map((block, i) => (
              <div key={i} className="mt-6">
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
                          <span className="text-brand mt-1">▸</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {block.type === 'stat-row' && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {block.stats.map((s, j) => (
                      <div key={j} className="bg-surface-3 border border-surface-5 rounded-xl p-5 text-center">
                        <div className="font-display text-3xl font-black text-brand">{s.value}</div>
                        <div className="text-gray-400 text-xs mt-1 uppercase tracking-wider">{s.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Trainer Notes */}
        {activeTab === 'notes' && (
          <div className="slide-up space-y-4">
            <div className="bg-surface-3 border border-surface-5 rounded-2xl p-6">
              <h2 className="font-display text-xl font-black uppercase text-white mb-4">
                🗒 DELIVERY NOTES
              </h2>
              <p className="text-gray-400 text-sm mb-6">Tips for delivering this session effectively.</p>
              <div className="space-y-4">
                {lesson.trainerNotes.map((note, i) => (
                  <div key={i} className="flex gap-4 bg-surface-4 rounded-xl p-4">
                    <span className="text-brand font-display font-black text-lg min-w-8">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-white leading-relaxed">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Quiz Preview */}
        {activeTab === 'quiz' && (
          <div className="slide-up space-y-5">
            <div className="bg-surface-3 border border-surface-5 rounded-2xl p-5">
              <p className="text-gray-400 text-sm">These are the questions trainees will answer at the end of this lesson.</p>
            </div>
            {lesson.quiz.map((q, i) => (
              <div key={i} className="bg-surface-3 border border-surface-5 rounded-2xl p-6">
                <div className="text-brand font-display text-sm uppercase tracking-wider mb-2">Q{i + 1}</div>
                <div className="text-white font-bold text-lg mb-4">{q.question}</div>
                <div className="space-y-2">
                  {q.options.map((opt, j) => (
                    <div
                      key={j}
                      className={`px-4 py-3 rounded-xl border text-sm ${
                        j === q.answer
                          ? 'border-green-500/50 bg-green-500/10 text-green-400'
                          : 'border-surface-5 text-gray-400'
                      }`}
                    >
                      {j === q.answer && <span className="mr-2">✓</span>}
                      {opt}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
