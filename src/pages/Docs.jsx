import { useNavigate } from 'react-router-dom'
import WGTKLogo from '../components/WGTKLogo'

const documents = [
  {
    id: 'call-observation',
    icon: '🎧',
    title: 'Call Observation Sheet',
    desc: 'Used during Lesson 5 — Call Shadowing. One per trainee per session.',
    lesson: 'Lesson 5',
    path: '/docs/call-observation',
  },
]

export default function Docs() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-surface-1">
      <div className="border-b border-surface-4 px-8 py-5 flex items-center justify-between">
        <button onClick={() => navigate('/trainer')} className="hover:opacity-70 transition-opacity">
          <WGTKLogo size="lg" />
        </button>
        <div className="text-right">
          <div className="text-brand font-display text-xs tracking-widest uppercase mb-1">Trainer Mode</div>
          <div className="text-gray-500 text-sm">Printable Resources</div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-10">
        <div className="mb-10">
          <h1 className="font-display text-6xl font-black uppercase text-white leading-none">
            RESOURCES &amp; <span className="text-brand">DOCUMENTS</span>
          </h1>
          <p className="text-gray-400 mt-3 text-lg">Printable sheets and handouts for training sessions.</p>
        </div>

        <div className="space-y-4">
          {documents.map(doc => (
            <button
              key={doc.id}
              onClick={() => navigate(doc.path)}
              className="group w-full flex items-center gap-6 bg-surface-3 border border-surface-5 hover:border-brand rounded-2xl px-6 py-5 text-left transition-all duration-200 hover:bg-surface-4"
            >
              <div className="text-4xl flex-shrink-0">{doc.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <div className="font-display text-2xl font-black uppercase text-white">{doc.title}</div>
                  <span className="text-brand font-display text-xs uppercase tracking-wider border border-brand/30 bg-brand/10 rounded-full px-2 py-0.5">{doc.lesson}</span>
                </div>
                <p className="text-gray-400 text-sm">{doc.desc}</p>
              </div>
              <div className="text-brand font-display text-sm font-bold uppercase tracking-wider flex items-center gap-2 flex-shrink-0">
                View &amp; Print
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
