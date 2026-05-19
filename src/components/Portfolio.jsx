const projects = [
  { img: '/гостинная.jpg', title: 'Гостиная в современном стиле', type: 'Под ключ', area: '72 м²' },
  { img: '/кухня.jpg', title: 'Кухня-студия с островом', type: 'Капитальный', area: '28 м²' },
  { img: '/_.jpeg', title: 'Санузел в мраморном стиле', type: 'Отделочные', area: '8 м²' },
  { img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80', title: 'Спальня в скандинавском стиле', type: 'Косметический', area: '18 м²' },
  { img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80', title: 'Трёхкомнатная квартира', type: 'Под ключ', area: '94 м²' },
  { img: '/прих.jpg', title: 'Прихожая с гардеробной', type: 'Под ключ', area: '12 м²' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="label mb-3">Наши работы</p>
            <h2 className="font-playfair text-3xl sm:text-4xl font-normal text-stone">Портфолио</h2>
          </div>
          <a href="#contact"
            className="text-sm text-stone-light hover:text-stone transition-colors tracking-wide self-end">
            Хочу такой результат →
          </a>
        </div>

        {/* Асимметричная сетка */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {projects.map((p, i) => (
            <div key={p.title}
              className="group relative overflow-hidden"
              style={{ aspectRatio: '3/4' }}>
              <img src={p.img} alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Оверлей при ховере */}
              <div className="absolute inset-0 bg-stone/0 group-hover:bg-stone/50 transition-all duration-300 flex items-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-xs text-white/60 tracking-widest uppercase mb-1">{p.type} · {p.area}</p>
                  <p className="text-white font-playfair text-lg">{p.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
