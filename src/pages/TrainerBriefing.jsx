import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import WGTKLogo from '../components/WGTKLogo'

const items = [
  {
    icon: '📋',
    title: 'What Training Looks Like',
    desc: 'A mix of classroom sessions, group calls and hands-on time with a WGTK Partner.',
    detail: [
      {
        body: "Training is a mix of classroom sessions, group call listening, and hands-on time with a WGTK Partner. Don't worry — we keep it as enjoyable as we can.",
      },
      {
        body: "We encourage you to go at your own pace. We'd rather you feel confident and ready than rush through because you think speed is expected. There are no prizes for finishing first — only for doing it well.",
      },
    ],
  },
  {
    icon: '⭐',
    title: 'What We Expect From You',
    desc: 'Be present, ask questions, and be honest about what you don\'t know.',
    detail: [
      {
        heading: 'During Training',
        body: "Speak up — this isn't school, you don't need to raise your hand. Just be respectful to your trainers and the people around you. If something doesn't make sense, say so. We're happy to go over things as many times as it takes until you're comfortable.",
      },
      {
        heading: 'On the Job',
        body: "Smart casual is the dress code — but we're human about it. If it's roasting outside, don't turn up in a suit. Use your common sense and dress appropriately for the conditions.",
      },
      {
        heading: 'With Customers & Colleagues',
        body: "Treat people the way you'd want to be treated. It's that simple.",
      },
      {
        heading: 'Effort & Attitude',
        body: "Effort is all we ask. If it feels overwhelming at first, that's completely normal — this is brand new information and we don't expect you to have it all figured out straight away. Don't be too hard on yourself.",
      },
    ],
  },
  {
    icon: '🗺️',
    title: 'Office Tour',
    desc: 'A walk around the building — fire exits, facilities, who sits where.',
    note: 'Physical tour — take the group around the office before continuing.',
  },
]

export default function TrainerBriefing() {
  const navigate = useNavigate()
  const [active, setActive] = useState(null)

  return (
    <div className="min-h-screen bg-surface-1 flex flex-col">
      <div className="border-b border-surface-4 px-8 py-5 flex items-center justify-between">
        <button onClick={() => navigate('/')} className="hover:opacity-70 transition-opacity">
          <WGTKLogo size="lg" />
        </button>
        <div className="text-right">
          <div className="text-brand font-display text-xs tracking-widest uppercase mb-1">Trainer Mode</div>
          <div className="text-gray-500 text-sm">Training Overview</div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
        <div className="max-w-3xl w-full">
          <div className="text-brand font-display text-sm tracking-widest uppercase mb-3">Induction</div>
          <h1 className="font-display text-6xl font-black uppercase text-white leading-none mb-10">
            YOUR <span className="text-brand">TRAINING</span>
          </h1>

          <div className="space-y-4 mb-12">
            {items.map((item, i) => (
              <div key={i} className="slide-up" style={{ animationDelay: `${i * 80}ms` }}>
                <button
                  onClick={() => item.detail ? setActive(active === i ? null : i) : null}
                  className={`w-full flex items-start gap-6 bg-surface-3 border rounded-2xl px-6 py-5 text-left transition-all duration-200 ${
                    item.detail ? 'cursor-pointer hover:border-brand/50' : 'cursor-default'
                  } ${active === i ? 'border-brand' : 'border-surface-5'}`}
                >
                  <div className="text-4xl flex-shrink-0">{item.icon}</div>
                  <div className="flex-1">
                    <div className="font-display text-2xl font-black uppercase text-white leading-tight">{item.title}</div>
                    <p className="text-gray-300 text-lg mt-1">{item.desc}</p>
                    {item.note && (
                      <div className="mt-2 text-brand text-sm font-display uppercase tracking-wider">⚠ {item.note}</div>
                    )}
                  </div>
                  {item.detail && (
                    <div className={`text-brand font-display text-xl flex-shrink-0 transition-transform duration-200 ${active === i ? 'rotate-180' : ''}`}>
                      ▾
                    </div>
                  )}
                </button>

                {active === i && item.detail && (
                  <div className="mt-2 bg-surface-2 border border-brand/20 rounded-2xl px-8 py-6 space-y-5 slide-up">
                    {item.detail.map((section, j) => (
                      <div key={j}>
                        {section.heading && (
                          <div className="text-brand font-display text-sm uppercase tracking-widest font-black mb-1">{section.heading}</div>
                        )}
                        <p className="text-gray-200 text-lg leading-relaxed">{section.body}</p>
                      </div>
                    ))}
                  </div>
                )}
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
