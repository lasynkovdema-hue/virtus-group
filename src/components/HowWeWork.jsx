const steps = [
  {
    num: '01',
    title: 'Заявка',
    desc: 'Оставляете заявку на сайте или звоните. Отвечаем в течение 30 минут в рабочее время.',
  },
  {
    num: '02',
    title: 'Бесплатный замер',
    desc: 'Замерщик приезжает в удобное для вас время, обмеряет объект и фиксирует все пожелания.',
  },
  {
    num: '03',
    title: 'Смета и договор',
    desc: 'Готовим детальную смету за 24 часа. Цена фиксируется в договоре — никаких доплат.',
  },
  {
    num: '04',
    title: 'Ремонт',
    desc: 'Работаем строго по плану. Раз в неделю отправляем фотоотчёт о ходе работ.',
  },
  {
    num: '05',
    title: 'Сдача объекта',
    desc: 'Принимаете работу по чек-листу. Убираем за собой. Выдаём гарантию на все виды работ.',
  },
]

export default function HowWeWork() {
  return (
    <section className="section-padding bg-stone">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs text-white/30 tracking-widest uppercase mb-3">Прозрачный процесс</p>
            <h2 className="font-playfair text-3xl sm:text-4xl font-normal text-white">
              Как мы работаем
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed">
            От первого звонка до сдачи ключей — без сюрпризов и скрытых платежей
          </p>
        </div>

        {/* Шаги */}
        <div className="relative">
          {/* Вертикальная линия на десктопе */}
          <div className="hidden lg:block absolute left-[2.75rem] top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step.num}
                className="relative flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12 py-8 border-b border-white/10 last:border-0 group">

                {/* Номер + точка на линии */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:w-22 flex-shrink-0">
                  <div className="relative z-10 w-11 h-11 rounded-full border border-white/20 bg-stone flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                    <span className="font-playfair text-sm text-white/50 group-hover:text-gold transition-colors duration-300">
                      {i + 1}
                    </span>
                  </div>
                </div>

                {/* Контент */}
                <div className="flex-1 lg:pb-2">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-xs text-white/20 tracking-widest">{step.num}</span>
                    <h3 className="text-lg font-medium text-white group-hover:text-white transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed max-w-lg">
                    {step.desc}
                  </p>
                </div>

                {/* Стрелка вправо на последнем — нет, на остальных */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex items-center self-center">
                    <div className="w-6 h-px bg-white/10" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-white/40 text-sm">
            Весь процесс занимает от <span className="text-white">3 дней</span> после подписания договора
          </p>
          <a href="#contact"
            className="bg-white text-stone text-sm tracking-widest uppercase px-8 py-4 hover:bg-cream transition-colors duration-300 flex-shrink-0">
            Начать сейчас
          </a>
        </div>

      </div>
    </section>
  )
}
