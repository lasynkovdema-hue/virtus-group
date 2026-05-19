import { useState } from 'react'

const repairTypes = [
  { id: 'cosmetic',  label: 'Косметический',      minPrice: 3000,  maxPrice: 5500,  desc: 'Обои, покраска, полы' },
  { id: 'capital',   label: 'Капитальный',         minPrice: 6000,  maxPrice: 10000, desc: 'Коммуникации, выравнивание' },
  { id: 'turnkey',   label: 'Под ключ',            minPrice: 10000, maxPrice: 18000, desc: 'Полный цикл с материалами' },
  { id: 'finishing', label: 'Отделочные работы',   minPrice: 2500,  maxPrice: 4000,  desc: 'Штукатурка, плитка, малярка' },
]

const materialOptions = [
  { id: 'client',   label: 'Материалы заказчика', sub: 'Вы закупаете сами', multiplier: 1 },
  { id: 'company',  label: 'Материалы компании',  sub: 'Мы закупаем за вас', multiplier: 1.2 },
]

const fmt = n => n.toLocaleString('ru-RU')

export default function Calculator() {
  const [selectedType, setSelectedType] = useState('turnkey')
  const [area, setArea] = useState(50)
  const [materials, setMaterials] = useState('client')

  const type = repairTypes.find(t => t.id === selectedType)
  const mat = materialOptions.find(m => m.id === materials)
  const minTotal = Math.round(type.minPrice * area * mat.multiplier)
  const maxTotal = Math.round(type.maxPrice * area * mat.multiplier)

  return (
    <section id="calculator" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Левая колонка — заголовок */}
          <div>
            <p className="label mb-3">Быстрый расчёт</p>
            <h2 className="font-playfair text-3xl sm:text-4xl font-normal text-stone mb-6">
              Калькулятор сметы
            </h2>
            <p className="text-stone-light text-sm leading-relaxed mb-10">
              Выберите тип ремонта и укажите площадь — получите ориентировочную стоимость.
              Точный расчёт после бесплатного выезда замерщика.
            </p>

            {/* Результат */}
            <div className="border-l-2 border-gold pl-6">
              <p className="text-xs text-stone-light tracking-wide mb-2">Ориентировочная стоимость</p>
              <div className="font-playfair text-3xl sm:text-4xl text-stone mb-1">
                {fmt(minTotal)} — {fmt(maxTotal)} ₽
              </div>
              <p className="text-xs text-stone-light mt-2">
                {type.label} · {area} м² · {mat.label.toLowerCase()}
              </p>
            </div>

            <a href="#contact"
              className="inline-block mt-8 bg-stone text-white text-sm tracking-widest uppercase px-8 py-4 hover:bg-stone/80 transition-colors">
              Получить точный расчёт
            </a>
          </div>

          {/* Правая колонка — контролы */}
          <div className="space-y-8">
            {/* Тип ремонта */}
            <div>
              <p className="text-xs text-stone-light tracking-widest uppercase mb-4">Тип ремонта</p>
              <div className="grid grid-cols-2 gap-2">
                {repairTypes.map(t => (
                  <button key={t.id} onClick={() => setSelectedType(t.id)}
                    className={`text-left p-4 border transition-all duration-200 ${
                      selectedType === t.id
                        ? 'border-stone bg-stone text-white'
                        : 'border-cream-dark bg-white text-stone-mid hover:border-stone-light'
                    }`}>
                    <div className={`text-sm font-medium mb-0.5 ${selectedType === t.id ? 'text-white' : 'text-stone'}`}>
                      {t.label}
                    </div>
                    <div className={`text-xs ${selectedType === t.id ? 'text-white/60' : 'text-stone-light'}`}>
                      {t.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Материалы */}
            <div>
              <p className="text-xs text-stone-light tracking-widest uppercase mb-4">Материалы</p>
              <div className="grid grid-cols-2 gap-2">
                {materialOptions.map(m => (
                  <button key={m.id} onClick={() => setMaterials(m.id)}
                    className={`text-left p-4 border transition-all duration-200 ${
                      materials === m.id
                        ? 'border-stone bg-stone text-white'
                        : 'border-cream-dark bg-white text-stone-mid hover:border-stone-light'
                    }`}>
                    <div className={`text-sm font-medium mb-0.5 ${materials === m.id ? 'text-white' : 'text-stone'}`}>
                      {m.label}
                    </div>
                    <div className={`text-xs ${materials === m.id ? 'text-white/60' : 'text-stone-light'}`}>
                      {m.sub}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Площадь */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <p className="text-xs text-stone-light tracking-widest uppercase">Площадь</p>
                <div className="flex items-center gap-2">
                  <input type="number" value={area}
                    onChange={e => setArea(Math.max(10, Math.min(500, Number(e.target.value))))}
                    className="w-16 text-center bg-white border border-cream-dark text-stone text-sm py-1.5 focus:outline-none focus:border-stone"
                  />
                  <span className="text-stone-light text-sm">м²</span>
                </div>
              </div>

              <input type="range" min={10} max={300} value={area}
                onChange={e => setArea(Number(e.target.value))}
                className="w-full h-px appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #1C1A18 0%, #1C1A18 ${((area - 10) / 290) * 100}%, #EDE7DF ${((area - 10) / 290) * 100}%, #EDE7DF 100%)`,
                }}
              />
              <div className="flex justify-between text-xs text-stone-light mt-2">
                <span>10 м²</span>
                <span>300 м²</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
