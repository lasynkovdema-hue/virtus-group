import { useState, useRef, useCallback } from 'react'

const projects = [
  {
    label: 'Гостиная · 42 м²',
    before: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80',
    after:  '/IMG_7839.jpg',
  },
  {
    label: 'Кухня · 18 м²',
    before: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
    after:  'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1200&q=80',
  },
  {
    label: 'Спальня · 22 м²',
    before: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80',
    after:  'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80',
  },
]

function Slider({ before, after }) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  const updatePos = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPos((x / rect.width) * 100)
  }, [])

  const onMouseDown = (e) => {
    dragging.current = true
    updatePos(e.clientX)
    const onMove = (e) => dragging.current && updatePos(e.clientX)
    const onUp   = () => { dragging.current = false; window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp) }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }

  const onTouchStart = (e) => {
    dragging.current = true
    updatePos(e.touches[0].clientX)
    const onMove = (e) => updatePos(e.touches[0].clientX)
    const onEnd  = () => { dragging.current = false; window.removeEventListener('touchmove', onMove); window.removeEventListener('touchend', onEnd) }
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('touchend', onEnd)
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden select-none cursor-col-resize"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* BEFORE */}
      <img src={before} alt="До" className="absolute inset-0 w-full h-full object-cover" draggable={false} />

      {/* AFTER — обрезается справа */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={after} alt="После" className="absolute inset-0 h-full object-cover" style={{ width: containerRef.current?.offsetWidth || '100%' }} draggable={false} />
      </div>

      {/* Разделитель */}
      <div className="absolute top-0 bottom-0 w-px bg-white/80" style={{ left: `${pos}%` }}>
        {/* Ручка */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center gap-1">
          <svg className="w-3 h-3 text-stone rotate-180" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
          <svg className="w-3 h-3 text-stone" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </div>
      </div>

      {/* Лейблы */}
      <span className="absolute top-4 left-4 text-xs text-white/80 tracking-widest uppercase bg-black/30 px-2 py-1">До</span>
      <span className="absolute top-4 right-4 text-xs text-white/80 tracking-widest uppercase bg-black/30 px-2 py-1">После</span>
    </div>
  )
}

export default function BeforeAfter() {
  const [active, setActive] = useState(0)

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="label mb-3">Результат работы</p>
            <h2 className="font-playfair text-3xl sm:text-4xl font-normal text-stone">
              До и после
            </h2>
          </div>

          {/* Табы выбора проекта */}
          <div className="flex gap-2">
            {projects.map((p, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`text-xs tracking-wide px-4 py-2 border transition-all duration-200 ${
                  active === i
                    ? 'bg-stone text-white border-stone'
                    : 'bg-white text-stone-light border-cream-dark hover:border-stone-light'
                }`}>
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Слайдер */}
        <div className="max-w-4xl mx-auto">
          <Slider key={active} before={projects[active].before} after={projects[active].after} />
          <p className="text-center text-xs text-stone-light tracking-wide mt-4">
            Двигайте разделитель чтобы сравнить
          </p>
        </div>

      </div>
    </section>
  )
}
