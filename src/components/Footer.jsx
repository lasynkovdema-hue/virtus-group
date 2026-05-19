export default function Footer() {
  return (
    <footer className="bg-stone border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          <div>
            <img src="/logo.png" alt="Virtus Group"
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/30 text-xs leading-relaxed">
              Строительная компания в Ростове-на-Дону.<br />
              Ремонт под ключ с гарантией с 2015 года.
            </p>
          </div>

          <div>
            <p className="text-xs text-white/30 tracking-widest uppercase mb-4">Услуги</p>
            <ul className="space-y-2">
              {['Косметический ремонт', 'Капитальный ремонт', 'Ремонт под ключ', 'Отделочные работы'].map(s => (
                <li key={s}>
                  <a href="#services" className="text-white/40 hover:text-white/70 text-xs transition-colors tracking-wide">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs text-white/30 tracking-widest uppercase mb-4">Контакты</p>
            <div className="space-y-2">
              <a href="tel:+79258097717" className="block text-white/50 hover:text-white text-xs transition-colors">
                +7 (925) 809-77-17
              </a>
              <p className="text-white/30 text-xs">Ростов-на-Дону</p>
              <p className="text-white/30 text-xs">Пн–Сб: 8:00 – 20:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-white/20 text-xs">© {new Date().getFullYear()} Virtus Group</p>
          <p className="text-white/10 text-xs">Строительная компания · Ростов-на-Дону</p>
        </div>
      </div>
    </footer>
  )
}
