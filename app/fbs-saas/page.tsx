import Image from 'next/image';

export default function FBSSaaSLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
          Антикризисное решение для селлеров 2026
        </div>
        
        <h1 className="max-w-4xl text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-400 leading-tight">
          Управляй гибридным складом за 1 клик
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          Единый хаб (SaaS) для FBS. Автоматический перенос карточек, 100% защита от оверселлинга и прямая интеграция с Яндекс.Маркет, Ozon и ТК КИТ. Развертываем за 3 дня.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)]">
            Оставить заявку на внедрение
          </button>
          <button className="px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold transition-all">
            Посмотреть демо кабинета
          </button>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="px-6 lg:px-8 pb-32">
        <div className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl shadow-indigo-900/20 ring-1 ring-white/10">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 pointer-events-none"></div>
          <div className="aspect-[16/9] w-full bg-slate-900 relative">
            <Image 
              src="/b2b-saas-dashboard.jpg" 
              alt="B2B SaaS Dashboard for Fulfillment"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Всё необходимое для миграции с FBO на FBS
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Мигратор Карточек (1-Click)",
              desc: "Моментальный перенос ваших топ-товаров с упавшей площадки на Ozon и Яндекс.Маркет. Не теряйте продажи при сбоях инфраструктуры.",
              icon: "🚀"
            },
            {
              title: "Real-Time Синхронизатор",
              desc: "100% защита от оверселлинга и огромных штрафов маркетплейсов. Единое окно для управления складом и автосписание остатков на всех витринах.",
              icon: "🔄"
            },
            {
              title: "Единый коннектор ТК",
              desc: "Автоматизация отправки FBS через Яндекс Доставку и ТК КИТ. Умная печать штрихкодов поставок прямо из кабинета без путаницы.",
              icon: "📦"
            }
          ].map((feat, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:bg-slate-800/60 hover:border-indigo-500/30 transition-all group">
              <div className="text-4xl mb-6 bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
