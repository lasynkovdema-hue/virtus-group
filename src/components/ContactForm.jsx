import { useState } from 'react'

const repairOptions = ['Косметический ремонт', 'Капитальный ремонт', 'Ремонт под ключ', 'Отделочные работы']

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', area: '', type: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 900))
    setLoading(false)
    setSent(true)
  }

  return (
    <section id="contact" className="section-padding bg-stone">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Левая */}
          <div>
            <p className="text-xs text-white/40 tracking-widest uppercase mb-3">Бесплатный расчёт</p>
            <h2 className="font-playfair text-3xl sm:text-4xl font-normal text-white mb-6">
              Получите точную смету<br />
              <span className="italic text-white/60">за 24 часа</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-10">
              Оставьте заявку — замерщик приедет бесплатно, обмеряет объект
              и подготовит детальную смету с фиксированной ценой в договоре.
            </p>

            <div className="space-y-6">
              {[
                { label: 'Бесплатный выезд замерщика', sub: 'В удобное для вас время' },
                { label: 'Детальная смета', sub: 'Фиксированная цена в договоре' },
                { label: 'Старт работ от 3 дней', sub: 'После подписания договора' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-5 h-px bg-gold mt-2.5 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">{item.label}</p>
                    <p className="text-white/40 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <a href="tel:+79779885555"
                className="text-white/60 hover:text-white text-sm transition-colors tracking-wide">
                Или звоните: <span className="text-white font-medium">+7 (977) 988-55-55</span>
              </a>
            </div>
          </div>

          {/* Форма */}
          <div>
            {sent ? (
              <div className="text-center py-16">
                <div className="w-12 h-px bg-gold mx-auto mb-8" />
                <h3 className="font-playfair text-2xl text-white mb-3">Заявка отправлена</h3>
                <p className="text-white/50 text-sm">Свяжемся в течение 30 минут</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs text-white/40 tracking-widest uppercase block mb-2">Ваше имя *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required
                    placeholder="Александр"
                    className="w-full bg-transparent border border-white/20 text-white text-sm px-4 py-3.5 placeholder:text-white/20 focus:outline-none focus:border-white/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs text-white/40 tracking-widest uppercase block mb-2">Телефон *</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-transparent border border-white/20 text-white text-sm px-4 py-3.5 placeholder:text-white/20 focus:outline-none focus:border-white/50 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-white/40 tracking-widest uppercase block mb-2">Площадь, м²</label>
                    <input type="number" name="area" value={form.area} onChange={handleChange} min={1} placeholder="50"
                      className="w-full bg-transparent border border-white/20 text-white text-sm px-4 py-3.5 placeholder:text-white/20 focus:outline-none focus:border-white/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/40 tracking-widest uppercase block mb-2">Тип ремонта</label>
                    <select name="type" value={form.type} onChange={handleChange}
                      className="w-full bg-stone border border-white/20 text-white text-sm px-4 py-3.5 focus:outline-none focus:border-white/50 transition-colors appearance-none">
                      <option value="">Выберите</option>
                      {repairOptions.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                <button type="submit" disabled={loading}
                  className="w-full bg-white text-stone text-sm tracking-widest uppercase py-4 mt-2 hover:bg-cream transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
                  {loading ? (
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                  ) : 'Получить расчёт бесплатно'}
                </button>

                <p className="text-center text-xs text-white/20 mt-2">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
