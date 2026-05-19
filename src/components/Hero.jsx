export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Фоновое фото реального интерьера */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=85"
          alt="Ремонт интерьера"
          className="w-full h-full object-cover"
        />
        {/* Тёмный оверлей */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Контент — по центру */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Лого */}
        <div className="mb-10">
          <img
            src="/logo.png"
            alt="Virtus Group"
            className="h-28 w-auto mx-auto brightness-0 invert"
          />
        </div>

        {/* Заголовок */}
        <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight mb-5">
          Ремонт под ключ<br />
          <span className="italic text-white/80">в Ростове-на-Дону</span>
        </h1>

        <p className="text-white/60 text-base sm:text-lg mb-10 font-light tracking-wide">
          Фиксированная цена · Гарантия результата · Договор на каждый объект
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact"
            className="w-full sm:w-auto bg-white text-stone text-sm font-medium tracking-widest uppercase px-10 py-4 hover:bg-cream transition-colors duration-300">
            Рассчитать стоимость
          </a>
          <a href="tel:+79258097717"
            className="w-full sm:w-auto border border-white/50 text-white text-sm font-medium tracking-widest uppercase px-10 py-4 hover:bg-white/10 transition-colors duration-300">
            +7 (925) 809-77-17
          </a>
        </div>
      </div>

      {/* Скролл-индикатор */}
      <button
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 group flex flex-col items-center cursor-pointer"
        aria-label="Перейти к услугам"
      >
        <svg
          width="40" height="40" viewBox="0 0 40 40" fill="none"
          className="text-white/40 group-hover:text-white/80 transition-colors duration-300 group-hover:translate-y-1 transform transition-transform"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 15 L20 27 L30 15"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </button>
    </section>
  )
}
