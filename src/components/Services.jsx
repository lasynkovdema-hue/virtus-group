const services = [
  {
    num: '01',
    title: 'Косметический ремонт',
    desc: 'Обои, покраска, замена напольных покрытий. Освежаем интерьер без глобального вмешательства.',
    price: 'от 3 000 ₽/м²',
    items: ['Поклейка обоев и покраска', 'Укладка ламината или плитки', 'Замена плинтусов, розеток'],
  },
  {
    num: '02',
    title: 'Капитальный ремонт',
    desc: 'Замена коммуникаций, выравнивание стен и потолков, сантехника, электрика.',
    price: 'от 6 000 ₽/м²',
    items: ['Демонтаж и вывоз мусора', 'Замена электрики и труб', 'Штукатурка и выравнивание'],
  },
  {
    num: '03',
    title: 'Ремонт под ключ',
    desc: 'Полный цикл от проекта до чистовой отделки. Заходите с вещами — всё готово.',
    price: 'от 10 000 ₽/м²',
    items: ['Дизайн-проект', 'Закупка материалов', 'Чистовая отделка'],
    featured: true,
  },
  {
    num: '04',
    title: 'Отделочные работы',
    desc: 'Штукатурка, шпаклёвка, укладка плитки, наливные полы — отдельные виды работ.',
    price: 'от 2 500 ₽/м²',
    items: ['Штукатурные работы', 'Укладка плитки', 'Малярные работы'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Шапка */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="label mb-3">Что мы делаем</p>
            <h2 className="font-playfair text-3xl sm:text-4xl font-normal text-stone">Наши услуги</h2>
          </div>
          <p className="text-stone-light text-sm max-w-xs leading-relaxed">
            Любой вид ремонта — от освежения до полного ремонта квартиры с нуля
          </p>
        </div>

        {/* Сетка */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream-dark">
          {services.map(s => (
            <div key={s.num}
              className={`p-8 flex flex-col gap-6 ${s.featured ? 'bg-stone text-white' : 'bg-white'}`}>
              <div className="flex items-start justify-between">
                <span className={`text-xs tracking-widest ${s.featured ? 'text-white/40' : 'text-stone-light'}`}>
                  {s.num}
                </span>
                {s.featured && (
                  <span className="text-xs tracking-widest text-gold uppercase">Популярное</span>
                )}
              </div>

              <div>
                <h3 className={`font-playfair text-xl font-normal mb-3 ${s.featured ? 'text-white' : 'text-stone'}`}>
                  {s.title}
                </h3>
                <p className={`text-sm leading-relaxed ${s.featured ? 'text-white/60' : 'text-stone-light'}`}>
                  {s.desc}
                </p>
              </div>

              <ul className="space-y-2 flex-grow">
                {s.items.map(item => (
                  <li key={item} className={`text-sm flex items-center gap-2 ${s.featured ? 'text-white/70' : 'text-stone-mid'}`}>
                    <span className={`w-3 h-px ${s.featured ? 'bg-gold' : 'bg-stone-light'}`} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-current/10 flex items-center justify-between">
                <span className={`text-sm font-medium ${s.featured ? 'text-gold' : 'text-stone'}`}>
                  {s.price}
                </span>
                <a href="#contact"
                  className={`text-xs tracking-widest uppercase transition-colors ${
                    s.featured ? 'text-white/60 hover:text-white' : 'text-stone-light hover:text-stone'
                  }`}>
                  Заказать →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
