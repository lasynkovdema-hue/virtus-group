import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Услуги', href: '#services' },
    { label: 'Калькулятор', href: '#calculator' },
    { label: 'Портфолио', href: '#portfolio' },
    { label: 'Отзывы', href: '#trust' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Логотип */}
          <a href="#" className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="Virtus Group"
              className={`h-9 w-auto transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
            />
          </a>

          {/* Навигация */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}
                className={`text-sm tracking-wide transition-colors duration-200 ${
                  scrolled ? 'text-stone-mid hover:text-stone' : 'text-white/80 hover:text-white'
                }`}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Телефон + CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+79779885555"
              className={`text-sm font-medium transition-colors ${scrolled ? 'text-stone' : 'text-white'}`}>
              +7 (977) 988-55-55
            </a>
            <a href="#contact"
              className={`text-sm font-medium px-5 py-2.5 border transition-all duration-200 ${
                scrolled
                  ? 'border-stone text-stone hover:bg-stone hover:text-white'
                  : 'border-white/60 text-white hover:bg-white hover:text-stone'
              }`}>
              Получить расчёт
            </a>
          </div>

          {/* Бургер */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 flex flex-col gap-1.5 ${scrolled ? '' : 'text-white'}`}>
            <span className={`block w-6 h-px transition-all ${scrolled ? 'bg-stone' : 'bg-white'}`} />
            <span className={`block w-6 h-px transition-all ${scrolled ? 'bg-stone' : 'bg-white'}`} />
            <span className={`block w-4 h-px transition-all ${scrolled ? 'bg-stone' : 'bg-white'}`} />
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-cream-dark px-6 pb-6">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className="block py-3 text-stone-mid border-b border-cream-dark text-sm tracking-wide">
              {link.label}
            </a>
          ))}
          <a href="tel:+79779885555" className="block py-3 text-stone font-medium text-sm">
            +7 (977) 988-55-55
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}
            className="block mt-3 text-center bg-stone text-white text-sm font-medium py-3">
            Получить расчёт
          </a>
        </div>
      )}
    </header>
  )
}
