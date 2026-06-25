import { useNavigate } from 'react-router-dom'
import { lessons, categories } from '../data/lessons'
import { useState } from 'react'
import WGTKLogo from '../components/WGTKLogo'

const categoryColors = {
  Foundation: 'text-blue-400 border-blue-400/30 bg-blue-400/10',
  'Sales Skills': 'text-green-400 border-green-400/30 bg-green-400/10',
  Operations: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
  'Product Knowledge': 'text-purple-400 border-purple-400/30 bg-purple-400/10',
  Compliance: 'text-red-400 border-red-400/30 bg-red-400/10',
}

export default function TrainerDashboard() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? lessons
    : lessons.filter(l => l.category === activeCategory)

  return (
    <div className="min-h-screen bg-surface-1">
      {/* Header */}
      <div className="border-b border-surface-4 px-8 py-5 flex items-center justify-between">
        <button onClick={() => navigate('/')} className="hover:opacity-70 transition-opacity">
          <WGTKLogo size="lg" />
        </button>
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/docs')}
            className="font-display text-sm uppercase tracking-wider px-4 py-2 rounded-xl border border-surface-5 text-gray-400 hover:border-brand hover:text-white transition-all"
          >
            📄 Resources
          </button>
          <div className="text-right">
            <div className="text-brand font-display text-xs tracking-widest uppercase mb-1">Trainer Mode</div>
            <div className="text-gray-500 text-sm">Select a lesson to present</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-10">
        {/* Title */}
        <div className="mb-10">
          <h1 className="font-display text-6xl font-black uppercase text-white leading-none">
            LESSON <span className="text-brand">LIBRARY</span>
          </h1>
          <p className="text-gray-400 mt-3 text-lg">Click any lesson to launch the classroom presentation.</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {['All', ...categories].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-display text-sm uppercase tracking-wider px-5 py-2.5 rounded-full border transition-all ${
                activeCategory === cat
                  ? 'bg-brand border-brand text-white'
                  : 'border-surface-5 text-gray-400 hover:border-gray-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Lesson Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((lesson, i) => (
            <button
              key={lesson.id}
              onClick={() => navigate(`/trainer/lesson/${lesson.id}`)}
              className="group relative bg-surface-3 border border-surface-5 hover:border-brand rounded-2xl p-6 text-left transition-all duration-200 hover:bg-surface-4 slide-up"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {/* Lesson number */}
              <div className="text-brand/30 font-display text-5xl font-black absolute top-4 right-5 leading-none">
                {String(lesson.id).padStart(2, '0')}
              </div>

              <div className="text-4xl mb-4">{lesson.icon}</div>

              <span className={`text-xs font-display uppercase tracking-wider border rounded-full px-2 py-0.5 ${categoryColors[lesson.category] || 'text-gray-400 border-gray-700 bg-gray-800'}`}>
                {lesson.category}
              </span>

              <div className="font-display text-2xl font-black uppercase text-white leading-tight mt-3 mb-1 pr-8">
                {lesson.title}
              </div>
              <div className="text-gray-400 text-sm mb-5">{lesson.subtitle}</div>

              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span>⏱ {lesson.duration}</span>
                {lesson.quiz.length > 0 && <span>❓ {lesson.quiz.length} Qs</span>}
              </div>

              {/* Present button */}
              <div className="mt-5 w-full bg-brand/0 group-hover:bg-brand text-brand group-hover:text-white font-display text-sm font-black uppercase tracking-wider rounded-xl px-4 py-2.5 border border-brand/40 group-hover:border-brand transition-all text-center">
                ▶ Present
              </div>
            </button>
          ))}
        </div>

        {/* Presenter Tips */}
        <div className="mt-12 bg-surface-3 border border-surface-5 rounded-2xl p-6">
          <div className="text-brand font-display text-xs tracking-widest uppercase mb-4">Presenter Tips</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-400">
            <div><span className="text-white font-bold block mb-1">← → Arrow keys</span>Navigate slides</div>
            <div><span className="text-white font-bold block mb-1">N</span>Toggle trainer notes</div>
            <div><span className="text-white font-bold block mb-1">F</span>Enter fullscreen</div>
            <div><span className="text-white font-bold block mb-1">Click slide</span>Advance forward</div>
          </div>
        </div>
      </div>
    </div>
  )
}
