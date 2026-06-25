import { useNavigate } from 'react-router-dom'
import WGTKLogo from '../components/WGTKLogo'

const items = [
  {
    icon: '🗺️',
    title: 'Office Tour',
    desc: 'Start with a walk around the building — fire exits, facilities, who sits where.',
    note: 'Physical tour — take the group around the office before continuing.',
  },
  {
    icon: '📋',
    title: 'What Training Looks Like',
    desc: 'A mix of classroom sessions, real scenarios and quizzes. We\'ll go through each module together — no rushing.',
  },
  {
    icon: '⭐',
    title: 'What We Expect From You',
    desc: 'Be present, ask questions, and be honest about what you don\'t know. There are no silly questions here — we\'d rather you ask than guess.',
  },
]

export default function TrainerBriefing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-surface-1 flex flex-col">
      <div className="border-b border-surface-4 px-8 py-5 flex items-center justify-between">
        <WGTKLogo size="lg" />
        <div className="text-right">
          <div className="text-brand font-display text-xs tracking-widest uppercase mb-1">Trainer Mode</div>
          <div className="text-gray-500 text-sm">Day 1 Briefing</div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
        <div className="max-w-3xl w-full">
          <div className="text-brand font-display text-sm tracking-widest uppercase mb-3">Before We Start</div>
          <h1 className="font-display text-6xl font-black uppercase text-white leading-none mb-10">
            TODAY'S <span className="text-brand">TRAINING</span>
          </h1>

          <div className="space-y-4 mb-12">
            {items.map((item, i) => (
              <div key={i} className="flex items-start gap-6 bg-surface-3 border border-surface-5 rounded-2xl px-6 py-5 slide-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="text-4xl flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="font-display text-2xl font-black uppercase text-white leading-tight">{item.title}</div>
                  <p className="text-gray-300 text-lg mt-1">{item.desc}</p>
                  {item.note && (
                    <div className="mt-2 text-brand text-sm font-display uppercase tracking-wider">⚠ {item.note}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate('/trainer')}
            className="w-full bg-brand hover:bg-brand-dark text-white font-display text-2xl font-black uppercase tracking-wider rounded-2xl py-5 transition-colors"
          >
            Pick a Lesson →
          </button>
        </div>
      </div>
    </div>
  )
}
