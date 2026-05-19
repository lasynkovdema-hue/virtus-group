const reviews = [
  { name: 'Алексей К.', district: 'Советский район', text: 'Заказали ремонт в трёшке. Всё строго по смете, никаких доплат. Мастера убрали за собой. Очень доволен, рекомендую.', type: 'Под ключ, 86 м²' },
  { name: 'Марина П.', district: 'Октябрьский район', text: 'Косметика в однушке перед сдачей. Быстро, аккуратно, недорого. Съёмщики заехали сразу. Буду обращаться ещё.', type: 'Косметический, 38 м²' },
  { name: 'Игорь С.', district: 'Ленинский район', text: 'Капитальный ремонт кухни и двух санузлов. Результат превзошёл ожидания. Особенно укладка плитки — ровно, без зазоров.', type: 'Капитальный, 22 м²' },
  { name: 'Наталья В.', district: 'Первомайский район', text: 'Под ключ в новостройке 64 м². Сдали строго в срок, цена совпала с договором — ни рубля сверху. Живём и радуемся.', type: 'Под ключ, 64 м²' },
  { name: 'Роман Д.', district: 'Кировский район', text: 'Второй раз обращаюсь, теперь офис. Работа чёткая, никаких эксцессов, всё по договорённости. Рекомендую без сомнений.', type: 'Капитальный, 55 м²' },
  { name: 'Светлана Ж.', district: 'Железнодорожный район', text: 'Штукатурка, шпаклёвка, покраска в новостройке. Всё ровно, красиво, в срок. Цена адекватная по Ростову.', type: 'Отделочные, 70 м²' },
]

export default function Trust() {
  return (
    <section id="trust" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Шапка с рейтингом */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div>
            <p className="label mb-3">Нам доверяют</p>
            <h2 className="font-playfair text-3xl sm:text-4xl font-normal text-stone">Отзывы клиентов</h2>
          </div>

          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="font-playfair text-5xl text-stone">4.9</div>
              <div className="flex gap-0.5 justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-stone-light mt-1">Яндекс.Карты</p>
            </div>
            <div className="w-px h-12 bg-cream-dark" />
            <div>
              <div className="text-2xl font-playfair text-stone">10+</div>
              <div className="text-xs text-stone-light mt-1">отзывов</div>
            </div>
            <div className="w-px h-12 bg-cream-dark" />
            <div>
              <div className="text-2xl font-playfair text-stone">с 2015</div>
              <div className="text-xs text-stone-light mt-1">в Ростове</div>
            </div>
          </div>
        </div>

        {/* Сетка отзывов */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-cream-dark">
          {reviews.map(r => (
            <div key={r.name} className="bg-white p-8 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-stone">{r.name}</p>
                  <p className="text-xs text-stone-light mt-0.5">{r.district}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <p className="text-sm text-stone-mid leading-relaxed flex-grow">«{r.text}»</p>

              <p className="text-xs text-stone-light tracking-wide">{r.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
