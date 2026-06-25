import { useNavigate } from 'react-router-dom'
import WGTKLogo from '../components/WGTKLogo'

export default function CallObservationSheet() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      {/* Screen-only nav bar */}
      <div className="print:hidden border-b border-gray-200 px-8 py-4 flex items-center justify-between bg-gray-50">
        <button
          onClick={() => navigate('/docs')}
          className="text-gray-500 hover:text-gray-800 font-display text-sm uppercase tracking-wider transition-colors"
        >
          ← Back to Resources
        </button>
        <button
          onClick={() => window.print()}
          className="bg-orange-500 hover:bg-orange-600 text-white font-display text-sm font-black uppercase tracking-wider px-6 py-2.5 rounded-xl transition-colors"
        >
          🖨 Print Sheet
        </button>
      </div>

      {/* Printable sheet */}
      <div className="max-w-2xl mx-auto px-8 py-10 print:py-6 print:px-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-6 pb-4 border-b-2 border-gray-900">
          <div>
            <div className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-1">Lesson 5 — Call Shadowing</div>
            <h1 className="text-2xl font-black uppercase tracking-tight text-gray-900">Call Observation Sheet</h1>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-400 mb-1">WGTK Training</div>
            <div className="font-black text-gray-900 text-sm">WE'VE GOT THE KEY</div>
          </div>
        </div>

        {/* Details row */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {['Trainee Name', 'Date', 'Call Handler'].map(label => (
            <div key={label}>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">{label}</div>
              <div className="border-b-2 border-gray-300 h-7" />
            </div>
          ))}
        </div>

        {/* Section 1 */}
        <Section title="1. The Opening">
          <p className="text-xs text-gray-500 mb-3">Tick what you heard</p>
          <div className="space-y-2">
            {[
              'Handler introduced themselves by name',
              'WGTK was mentioned clearly',
              'Customer name and contact number were taken',
              'Handler confirmed postcode / location of vehicle',
            ].map(item => (
              <CheckRow key={item} label={item} />
            ))}
          </div>
        </Section>

        {/* Section 2 */}
        <Section title="2. Information Gathered">
          <p className="text-xs text-gray-500 mb-3">Tick each category that was confirmed during the call</p>
          <div className="grid grid-cols-2 gap-2">
            {[
              'Customer name & number',
              'Full postcode / location',
              'Vehicle make, model & year',
              'Key situation (lost / locked in / spare)',
              'Vehicle accessibility',
              'Urgency / timescale',
            ].map(item => (
              <CheckRow key={item} label={item} />
            ))}
          </div>
        </Section>

        {/* Section 3 */}
        <Section title="3. Handling the Call">
          <Lines label="What did the handler do well?" lines={3} />
          <Lines label="Was anything unclear or missing?" lines={2} />
          <Lines label="What would you have asked differently?" lines={2} />
        </Section>

        {/* Section 4 */}
        <Section title="4. The Customer">
          <p className="text-xs text-gray-500 mb-3">How would you describe the customer on this call?</p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {['Calm', 'Stressed', 'Confused', 'Impatient', 'Upset', 'Unclear'].map(word => (
              <CheckRow key={word} label={word} />
            ))}
          </div>
          <Lines label="How did the handler manage the customer's mood?" lines={2} />
        </Section>

        {/* Section 5 */}
        <Section title="5. Your Takeaway" last>
          <Lines label="One thing I'll take into my own calls from this:" lines={3} />
        </Section>
      </div>
    </div>
  )
}

function Section({ title, children, last }) {
  return (
    <div className={`mb-6 ${!last ? 'pb-6 border-b border-gray-200' : ''}`}>
      <h2 className="font-black uppercase text-sm tracking-wider text-gray-900 mb-3">{title}</h2>
      {children}
    </div>
  )
}

function CheckRow({ label }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-4 h-4 border-2 border-gray-400 rounded flex-shrink-0" />
      <span className="text-sm text-gray-700">{label}</span>
    </div>
  )
}

function Lines({ label, lines }) {
  return (
    <div className="mb-4">
      <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">{label}</div>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="border-b border-gray-300 h-7 mb-1" />
      ))}
    </div>
  )
}
