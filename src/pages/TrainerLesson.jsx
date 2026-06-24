import { useNavigate, useParams } from 'react-router-dom'
import { getLessonById, lessons } from '../data/lessons'
import { useState, useEffect, useCallback } from 'react'

// Build slides from lesson data
function buildSlides(lesson) {
  const slides = []

  // Slide 1: Title
  slides.push({ type: 'title', lesson })

  // Content slides
  lesson.content.forEach(block => {
    if (block.type === 'intro') {
      slides.push({ type: 'intro', text: block.text })
    }
    if (block.type === 'keypoints') {
      const chunks = []
      for (let i = 0; i < block.points.length; i += 3) {
        chunks.push(block.points.slice(i, i + 3))
      }
      chunks.forEach((chunk, i) => {
        slides.push({
          type: 'keypoints',
          heading: i === 0 ? block.heading : `${block.heading} (cont.)`,
          points: chunk,
        })
      })
    }
    if (block.type === 'services') {
      slides.push({ type: 'services', heading: block.heading, services: block.services })
    }
    if (block.type === 'stat-row') {
      slides.push({ type: 'stats', stats: block.stats })
    }
  })

  // Cheat sheet slide
  slides.push({ type: 'cheatsheet', items: lesson.cheatSheet })

  // Quiz slides (for class discussion)
  lesson.quiz.forEach((q, i) => {
    slides.push({ type: 'quiz', q, index: i, total: lesson.quiz.length, reveal: false })
  })

  // End slide
  slides.push({ type: 'end', lesson })

  return slides
}

export default function TrainerLesson() {
  const { id } = useParams()
  const navigate = useNavigate()
  const lesson = getLessonById(id)

  const slides = lesson ? buildSlides(lesson) : []
  const [current, setCurrent] = useState(0)
  const [subStep, setSubStep] = useState(0)
  const [revealed, setRevealed] = useState({}) // quiz answer reveals
  const [showNotes, setShowNotes] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  function getMaxSubSteps(slide) {
    if (slide?.type === 'services') return slide.services.length * 2 - 1
    return 0
  }

  const prev = useCallback(() => {
    if (subStep > 0) { setSubStep(0); return }
    setCurrent(c => Math.max(0, c - 1))
    setSubStep(0)
  }, [subStep])

  const next = useCallback(() => {
    const slide = slides[current]
    const maxSub = getMaxSubSteps(slide)
    if (subStep < maxSub) {
      setSubStep(s => s + 1)
      return
    }
    setCurrent(c => Math.min(slides.length - 1, c + 1))
    setSubStep(0)
    setShowNotes(false)
  }, [slides, current, subStep])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); next() }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); prev() }
      if (e.key === 'n' || e.key === 'N') setShowNotes(v => !v)
      if (e.key === 'f' || e.key === 'F') toggleFullscreen()
      if (e.key === 'Escape' && !document.fullscreenElement) navigate('/trainer')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  useEffect(() => {
    function onFsChange() {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', onFsChange)
    return () => document.removeEventListener('fullscreenchange', onFsChange)
  }, [])

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  function toggleReveal(idx) {
    setRevealed(r => ({ ...r, [idx]: !r[idx] }))
  }

  if (!lesson) return null

  const slide = slides[current]
  const prevLesson = lessons.find(l => l.id === lesson.id - 1)
  const nextLesson = lessons.find(l => l.id === lesson.id + 1)

  return (
    <div className="fixed inset-0 bg-surface-1 flex flex-col select-none overflow-hidden">

      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-surface-4 flex-shrink-0">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/trainer')}
            className="text-gray-500 hover:text-white transition-colors font-display text-sm uppercase tracking-wider"
          >
            ← Library
          </button>
          <span className="text-surface-5">|</span>
          <span className="font-display text-sm uppercase tracking-wider text-white">{lesson.icon} {lesson.title}</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowNotes(v => !v)}
            className={`font-display text-xs uppercase tracking-wider px-3 py-1.5 rounded-lg border transition-all ${showNotes ? 'bg-brand border-brand text-white' : 'border-surface-5 text-gray-400 hover:text-white'}`}
          >
            N · Notes
          </button>
          <button
            onClick={toggleFullscreen}
            className="font-display text-xs uppercase tracking-wider px-3 py-1.5 rounded-lg border border-surface-5 text-gray-400 hover:text-white transition-all"
          >
            {isFullscreen ? '⤓ Exit' : '⤢ F · Fullscreen'}
          </button>
          <span className="text-gray-500 font-display text-sm">
            {current + 1} <span className="text-surface-5">/</span> {slides.length}
          </span>
        </div>
      </div>

      {/* Slide area */}
      <div
        className="flex-1 flex items-center justify-center px-12 py-8 cursor-pointer relative"
        onClick={next}
      >
        <SlideContent
          slide={slide}
          subStep={subStep}
          revealed={revealed}
          toggleReveal={toggleReveal}
          lesson={lesson}
          onPrevLesson={prevLesson ? () => { navigate(`/trainer/lesson/${prevLesson.id}`); setCurrent(0); setSubStep(0) } : null}
          onNextLesson={nextLesson ? () => { navigate(`/trainer/lesson/${nextLesson.id}`); setCurrent(0); setSubStep(0) } : null}
          nextLesson={nextLesson}
        />

        {/* Trainer notes overlay */}
        {showNotes && (
          <div
            className="absolute bottom-4 left-4 right-4 bg-surface-2/95 border border-brand/40 rounded-2xl p-5 backdrop-blur"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-brand font-display text-xs uppercase tracking-widest font-black">Trainer Notes</span>
              <span className="text-gray-600 text-xs">(only visible on your screen)</span>
            </div>
            <ul className="space-y-2">
              {lesson.trainerNotes.map((note, i) => (
                <li key={i} className="flex gap-3 text-gray-300 text-sm">
                  <span className="text-brand font-bold flex-shrink-0">{i + 1}.</span>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Bottom nav */}
      <div className="flex items-center justify-between px-6 py-3 border-t border-surface-4 flex-shrink-0">
        {/* Progress dots */}
        <div className="flex gap-1.5 flex-wrap max-w-xs">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setShowNotes(false) }}
              className={`h-1.5 rounded-full transition-all ${
                i === current ? 'bg-brand w-6' : i < current ? 'bg-surface-5 w-1.5' : 'bg-surface-4 w-1.5'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={e => { e.stopPropagation(); prev() }}
            disabled={current === 0}
            className="px-5 py-2 bg-surface-3 border border-surface-5 text-white font-display text-sm uppercase tracking-wider rounded-xl disabled:opacity-30 hover:border-gray-500 transition-all"
          >
            ← Prev
          </button>
          <button
            onClick={e => { e.stopPropagation(); next() }}
            disabled={current === slides.length - 1}
            className="px-5 py-2 bg-brand hover:bg-brand-dark text-white font-display text-sm uppercase tracking-wider rounded-xl disabled:opacity-30 transition-all"
          >
            Next →
          </button>
        </div>
      </div>

      {/* Keyboard hint */}
      <div className="text-center pb-1 text-gray-700 text-xs">
        ← → arrow keys to navigate · N for notes · F for fullscreen
      </div>
    </div>
  )
}

function SlideContent({ slide, subStep, revealed, toggleReveal, lesson, onPrevLesson, onNextLesson, nextLesson }) {
  switch (slide.type) {

    case 'title':
      return (
        <div className="text-center max-w-4xl mx-auto slide-up">
          <div className="text-8xl mb-8">{slide.lesson.icon}</div>
          <div className="text-brand font-display text-lg tracking-widest uppercase mb-4">{slide.lesson.category}</div>
          <h1 className="font-display text-7xl md:text-8xl font-black uppercase text-white leading-none mb-6">
            {slide.lesson.title}
          </h1>
          <p className="text-gray-400 text-2xl mb-8">{slide.lesson.subtitle}</p>
          <div className="flex justify-center gap-8 text-gray-500 font-display text-sm uppercase tracking-wider">
            <span>⏱ {slide.lesson.duration}</span>
            <span>⚡ {slide.lesson.xp} XP</span>
            <span>❓ {slide.lesson.quiz.length} quiz questions</span>
          </div>
        </div>
      )

    case 'intro':
      return (
        <div className="max-w-4xl mx-auto slide-up">
          <div className="text-brand font-display text-lg tracking-widest uppercase mb-6">Overview</div>
          <p className="text-white text-4xl md:text-5xl font-display font-bold leading-tight">
            {slide.text}
          </p>
        </div>
      )

    case 'keypoints':
      return (
        <div className="max-w-5xl w-full mx-auto slide-up">
          <div className="text-brand font-display text-lg tracking-widest uppercase mb-6">{slide.heading}</div>
          <ul className="space-y-6">
            {slide.points.map((pt, i) => (
              <li key={i} className="flex items-start gap-5">
                <span className="text-brand font-display font-black text-3xl leading-tight flex-shrink-0 mt-1">▸</span>
                <span className="text-white text-3xl md:text-4xl font-display font-bold leading-tight">{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      )

    case 'stats':
      return (
        <div className="max-w-5xl w-full mx-auto slide-up">
          <div className="text-brand font-display text-lg tracking-widest uppercase mb-10">Key Numbers</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {slide.stats.map((s, i) => (
              <div key={i} className="bg-surface-3 border border-surface-5 rounded-2xl p-8 text-center">
                <div className="font-display text-6xl font-black text-brand mb-3">{s.value}</div>
                <div className="text-gray-300 text-xl uppercase tracking-wider font-display">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      )

    case 'services': {
      // subStep: 0 = first service name only, 1 = first + desc, 2 = second name, 3 = second + desc...
      const visibleCount = Math.floor(subStep / 2) + 1
      const descRevealed = (i) => subStep >= i * 2 + 1
      return (
        <div className="max-w-5xl w-full mx-auto slide-up" onClick={e => e.stopPropagation()}>
          <div className="text-brand font-display text-lg tracking-widest uppercase mb-8">{slide.heading}</div>
          <div className="space-y-5">
            {slide.services.slice(0, visibleCount).map((svc, i) => (
              <div key={i} className="border-l-4 border-brand pl-6">
                <div className="font-display text-4xl md:text-5xl font-black uppercase text-white leading-none">
                  {svc.name}
                </div>
                {descRevealed(i) && (
                  <p className="text-gray-300 text-xl mt-2 slide-up">{svc.desc}</p>
                )}
              </div>
            ))}
          </div>
          {/* Click hint */}
          <div className="mt-8 text-gray-600 text-sm font-display uppercase tracking-wider">
            {subStep < slide.services.length * 2 - 1 ? 'Click or → to continue' : ''}
          </div>
        </div>
      )
    }

    case 'cheatsheet':
      return (
        <div className="max-w-5xl w-full mx-auto slide-up">
          <div className="text-brand font-display text-lg tracking-widest uppercase mb-6">Quick Reference</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {slide.items.map((item, i) => (
              <div key={i} className="flex gap-4 bg-surface-3 border border-surface-5 rounded-xl px-6 py-4">
                <span className="text-brand font-display text-sm uppercase tracking-wider min-w-36 font-black">{item.label}</span>
                <span className="text-white text-lg font-bold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      )

    case 'quiz': {
      const isRevealed = revealed[slide.index]
      return (
        <div className="max-w-4xl w-full mx-auto slide-up" onClick={e => e.stopPropagation()}>
          <div className="text-brand font-display text-lg tracking-widest uppercase mb-4">
            Class Question {slide.index + 1} of {slide.total}
          </div>
          <h2 className="text-white font-display text-4xl md:text-5xl font-black uppercase leading-tight mb-10">
            {slide.q.question}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {slide.q.options.map((opt, j) => (
              <div
                key={j}
                className={`px-6 py-5 rounded-xl border text-xl font-display font-bold transition-all ${
                  isRevealed && j === slide.q.answer
                    ? 'border-green-500 bg-green-500/15 text-green-400'
                    : isRevealed && j !== slide.q.answer
                    ? 'border-surface-5 text-gray-600'
                    : 'border-surface-5 text-white bg-surface-3'
                }`}
              >
                <span className="text-brand mr-3">{String.fromCharCode(65 + j)}.</span>
                {opt}
                {isRevealed && j === slide.q.answer && <span className="ml-2">✓</span>}
              </div>
            ))}
          </div>
          <button
            onClick={() => toggleReveal(slide.index)}
            className={`font-display text-xl font-black uppercase tracking-wider px-8 py-4 rounded-xl transition-all ${
              isRevealed
                ? 'bg-surface-3 border border-surface-5 text-gray-400'
                : 'bg-brand hover:bg-brand-dark text-white'
            }`}
          >
            {isRevealed ? 'Hide Answer' : 'Reveal Answer'}
          </button>
        </div>
      )
    }

    case 'end':
      return (
        <div className="text-center max-w-3xl mx-auto slide-up">
          <div className="text-6xl mb-6">✅</div>
          <div className="text-brand font-display text-lg tracking-widest uppercase mb-4">Lesson Complete</div>
          <h1 className="font-display text-6xl font-black uppercase text-white leading-none mb-4">
            {slide.lesson.title}
          </h1>
          <p className="text-gray-400 text-xl mb-10">
            Trainees: complete the quiz in the Training Hub to earn ⚡{slide.lesson.xp} XP
          </p>
          <div className="flex justify-center gap-4">
            {onPrevLesson && (
              <button
                onClick={e => { e.stopPropagation(); onPrevLesson() }}
                className="px-6 py-3 bg-surface-3 border border-surface-5 text-white font-display text-lg font-black uppercase tracking-wider rounded-xl hover:border-gray-500 transition-all"
              >
                ← Previous Lesson
              </button>
            )}
            {onNextLesson && (
              <button
                onClick={e => { e.stopPropagation(); onNextLesson() }}
                className="px-8 py-3 bg-brand hover:bg-brand-dark text-white font-display text-lg font-black uppercase tracking-wider rounded-xl transition-all"
              >
                Next: {nextLesson?.title} →
              </button>
            )}
          </div>
        </div>
      )

    default:
      return null
  }
}
