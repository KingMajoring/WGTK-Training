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
      <div className="border-b border-surface-4 px-6 py-4 flex items-center justify-between">
        <button onClick={() => navigate('/')} className="hover:opacity-70 transition-opacity">
          <WGTKLogo />
        </button>
        <div className="flex items-center gap-3">
          <span className="text-brand font-display text-xs tracking-widest uppercase border border-brand/30 bg-brand/10 rounded-full px-3 py-1">
            TRAINER MODE
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Title */}
        <div className="mb-10">
          <p className="text-brand font-display text-xs tracking-widest uppercase mb-2">TRAINER CHEAT SHEETS</p>
          <h1 className="font-display text-5xl font-black uppercase text-white leading-none">
            LESSON <span className="text-brand">LIBRARY</span>
          </h1>
          <p className="text-gray-400 mt-3">Select a lesson to view your delivery notes and cheat sheet.</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['All', ...categories].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-display text-sm uppercase tracking-wider px-4 py-2 rounded-full border transition-all ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((lesson, i) => (
            <button
              key={lesson.id}
              onClick={() => navigate(`/trainer/lesson/${lesson.id}`)}
              className="group bg-surface-3 border border-surface-5 hover:border-brand rounded-2xl p-6 text-left transition-all duration-200 hover:bg-surface-4 slide-up"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{lesson.icon}</span>
                <span className={`text-xs font-display uppercase tracking-wider border rounded-full px-2 py-0.5 ${categoryColors[lesson.category] || 'text-gray-400 border-gray-700 bg-gray-800'}`}>
                  {lesson.category}
                </span>
              </div>
              <div className="font-display text-xl font-black uppercase text-white leading-tight mb-1">
                {lesson.title}
              </div>
              <div className="text-gray-400 text-sm mb-4">{lesson.subtitle}</div>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>⏱ {lesson.duration}</span>
                <span>⚡ {lesson.xp} XP</span>
                <span>❓ {lesson.quiz.length} questions</span>
              </div>
              <div className="mt-4 flex items-center gap-2 text-brand font-display text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                Open Cheat Sheet →
              </div>
            </button>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: lessons.length, label: 'Total Lessons' },
            { value: categories.length, label: 'Categories' },
            { value: lessons.reduce((s, l) => s + l.quiz.length, 0), label: 'Quiz Questions' },
            { value: lessons.reduce((s, l) => s + l.xp, 0), label: 'Total XP Available' },
          ].map(stat => (
            <div key={stat.label} className="bg-surface-3 border border-surface-5 rounded-xl p-5 text-center">
              <div className="font-display text-3xl font-black text-brand">{stat.value}</div>
              <div className="text-gray-400 text-xs mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
