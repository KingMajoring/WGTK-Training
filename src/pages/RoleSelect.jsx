import { useNavigate } from 'react-router-dom'
import { loadProgress, saveProgress } from '../store/progress'
import { useState } from 'react'
import WGTKLogo from '../components/WGTKLogo'

export default function RoleSelect() {
  const navigate = useNavigate()
  const [showNameInput, setShowNameInput] = useState(false)
  const [name, setName] = useState('')

  function goTrainer() {
    navigate('/trainer/briefing')
  }

  function goTrainee() {
    const progress = loadProgress()
    if (progress.traineeName) {
      navigate('/trainee')
    } else {
      setShowNameInput(true)
    }
  }

  function submitName(e) {
    e.preventDefault()
    if (!name.trim()) return
    const progress = loadProgress()
    progress.traineeName = name.trim()
    saveProgress(progress)
    navigate('/trainee')
  }

  return (
    <div className="min-h-screen bg-surface-1 flex flex-col">
      {/* Header */}
      <div className="border-b border-surface-4 px-6 py-4">
        <WGTKLogo />
      </div>

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="text-center mb-12 slide-up">
          <p className="text-brand font-display text-sm tracking-widest uppercase mb-3">Auto Locksmiths</p>
          <h1 className="font-display text-5xl md:text-7xl font-black uppercase text-white leading-none mb-4">
            TRAINING<br />
            <span className="text-brand">HUB</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            Fast, engaging training for the WGTK team. Pick your role to get started.
          </p>
        </div>

        {!showNameInput ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl slide-up">
            {/* Trainer Card */}
            <button
              onClick={goTrainer}
              className="group relative bg-surface-3 border border-surface-5 hover:border-brand rounded-2xl p-8 text-left transition-all duration-200 hover:bg-surface-4"
            >
              <div className="text-5xl mb-4">🎓</div>
              <div className="text-brand font-display text-xs tracking-widest uppercase mb-2">I am a</div>
              <div className="font-display text-4xl font-black uppercase text-white mb-3">TRAINER</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Access cheat sheets, delivery notes, and session guides for every lesson.
              </p>
              <div className="mt-6 flex items-center gap-2 text-brand font-display text-sm font-bold uppercase tracking-wider">
                Enter Trainer Mode
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>

            {/* Trainee Card */}
            <button
              disabled
              className="group relative bg-surface-3 border border-surface-5 rounded-2xl p-8 text-left opacity-40 cursor-not-allowed"
            >
              <div className="text-5xl mb-4">🔑</div>
              <div className="text-brand font-display text-xs tracking-widest uppercase mb-2">I am a</div>
              <div className="font-display text-4xl font-black uppercase text-white mb-3">TRAINEE</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Work through lessons, answer quizzes, earn XP and track your progress.
              </p>
              <div className="mt-6 flex items-center gap-2 text-gray-500 font-display text-sm font-bold uppercase tracking-wider">
                Coming Soon
              </div>
            </button>
          </div>
        ) : (
          <div className="w-full max-w-md slide-up">
            <div className="bg-surface-3 border border-surface-5 rounded-2xl p-8">
              <div className="text-4xl mb-4 text-center">👋</div>
              <h2 className="font-display text-3xl font-black uppercase text-white text-center mb-2">WHAT'S YOUR NAME?</h2>
              <p className="text-gray-400 text-center text-sm mb-6">We'll track your progress and XP.</p>
              <form onSubmit={submitName} className="flex flex-col gap-4">
                <input
                  autoFocus
                  type="text"
                  placeholder="Your first name..."
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="bg-surface-4 border border-surface-5 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand text-lg"
                />
                <button
                  type="submit"
                  disabled={!name.trim()}
                  className="bg-brand hover:bg-brand-dark disabled:opacity-40 disabled:cursor-not-allowed text-white font-display text-xl font-black uppercase tracking-wider rounded-xl px-6 py-3 transition-colors"
                >
                  LET'S GO →
                </button>
                <button type="button" onClick={() => setShowNameInput(false)} className="text-gray-500 text-sm hover:text-gray-300 transition-colors">
                  ← Back
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      <div className="text-center pb-8 text-gray-500 text-xs">
        WE'VE GOT THE KEY — AUTO LOCKSMITHS &nbsp;·&nbsp; <span className="text-brand font-bold">v4.21</span>
      </div>
    </div>
  )
}
