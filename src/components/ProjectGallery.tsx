/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useViewContext } from "../context/ContextContext";
import { ExternalLink, Clock, X, CheckCircle2, Send, Check, ChevronLeft, ChevronRight } from "lucide-react";

const techProjects = [
  {
    title: "Telegram Bot for alerting",
    tag: "Telegram Bot",
    image: "/alert-markets-bot-logo.jpg",
    link: "#",
    status: "Live",
  },
];

const techProjectCase = {
  eyebrow: "Telegram Bot project by Nikita",
  status: "Live",
  tag: "Telegram Bot",
  title: "Telegram Bot for alerting",
  subtitle: "Crypto Alert Bot",
  summary:
    "Мощная система мгновенных уведомлений для криптотрейдеров. Бот мониторит рынок в реальном времени и автоматизирует отслеживание цен по 2000+ торговым парам Binance.",
  features: [
    "Масштабируемый мониторинг: 2000+ монет на Spot и Futures рынках.",
    "Мгновенная реакция: фоновые воркеры проверяют API с интервалом в 1 секунду.",
    "Умные уведомления: моментальная отправка сигналов в Telegram при достижении уровней.",
    "Мультиязычность: полная поддержка русского и английского интерфейсов.",
    "Оптимизация ресурсов: Redis-кэш тикеров уменьшает количество API-запросов и ускоряет работу.",
  ],
  stack: [
    { component: "Backend", technology: "Python 3.12 + aiogram 3.x" },
    { component: "База данных", technology: "PostgreSQL 16" },
    { component: "Кэширование", technology: "Redis" },
    { component: "ORM", technology: "SQLAlchemy 2.0" },
    { component: "Инфраструктура", technology: "Docker & Docker Compose" },
  ],
  architecture: [
    "Handlers & FSM: обработка пользовательского ввода через конечные автоматы.",
    "Background Workers: сравнение рыночных цен с активными алертами в БД в реальном времени.",
    "Exchange Layer: изолированные клиенты для работы с API бирж (Binance SDK).",
    "Database Layer: оптимизированные запросы SQLAlchemy для работы под нагрузкой.",
  ],
};

export default function ProjectGallery() {
  const { t } = useLanguage();
  const { viewContext } = useViewContext();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedSolution, setSelectedSolution] = useState<any>(null);
  const [selectedTechProject, setSelectedTechProject] = useState<any>(null);

  const businessSolutions = t.solutions.items;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-32 px-6 md:px-8 bg-background overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto mb-12 flex justify-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {viewContext === 'business' ? t.solutions.title : t.solutions.techTitle}
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto"></div>
        </motion.div>
      </div>

      {viewContext === 'business' ? (
        <div className="max-w-7xl mx-auto">
          <div 
            className="grid md:grid-cols-3 gap-4 md:gap-8"
          >
            {businessSolutions.map((solution: any, idx: number) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedSolution(solution)}
                className="group bg-[#1a1a1a] rounded-sm overflow-hidden cursor-pointer flex flex-col h-full border border-white/5 hover:border-primary/20 transition-all duration-300 shadow-2xl"
              >
                <div className="aspect-video md:aspect-[4/5] relative overflow-hidden bg-[#2a2a2a]">
                  <img 
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-3 left-3 md:top-4 md:left-4">
                    <span className="px-2 py-0.5 md:py-1 bg-black/80 backdrop-blur-md text-primary text-xs md:text-sm font-bold uppercase tracking-widest rounded-sm border border-white/10">
                      {solution.tag}
                    </span>
                  </div>
                </div>
                
                <div className="p-4 md:p-6 flex flex-col flex-grow bg-[#1a1a1a]">
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-white leading-tight">
                    {solution.title}
                  </h3>
                  
                  <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    <div className="flex items-center gap-2 md:gap-3 text-gray-400 text-sm md:text-base">
                      <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary/60" />
                      <span>{solution.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 text-gray-400 text-sm md:text-base items-start">
                      <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary/60 shrink-0 mt-0.5" />
                      <span>{solution.feature}</span>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center gap-2 md:gap-3">
                    {solution.oldPrice && (
                      <span className="text-gray-600 line-through text-sm md:text-base">
                        {solution.oldPrice}
                      </span>
                    )}
                    <div className="text-primary font-bold text-xl md:text-2xl">
                      {solution.price}
                    </div>
                  </div>
                </div>
                
                <div className="py-3 md:py-4 bg-[#242e2a] border-t border-white/5 text-center text-xs md:text-sm font-bold uppercase tracking-widest text-gray-300 group-hover:bg-[#2d3a33] group-hover:text-primary transition-all">
                  {t.solutions.cta}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="max-w-7xl mx-auto relative">
            <div 
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8 px-4"
              style={{ cursor: 'grab' }}
            >
              {techProjects.map((project, idx) => (
                <motion.a
                  key={idx}
                  href={project.link}
                  onClick={(event) => {
                    event.preventDefault();
                    setSelectedTechProject(project);
                  }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative flex-none w-[300px] md:w-[400px] aspect-[4/3] bg-surface-container-low rounded-xl border border-outline-variant/20 overflow-hidden snap-center tech-card"
                >
                  {/* Image Layer */}
                  <div className="absolute inset-0">
                    <img 
                      src={project.image} 
                      alt={`${project.title} - ${project.tag} project by Nikita`}
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                      referrerPolicy="no-referrer"
                      width={400}
                      height={300}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  </div>

                  {/* Content Layer */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                    <div className="flex justify-between items-start">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-sm font-mono rounded border border-primary/20">
                        {project.status}
                      </span>
                      <ExternalLink className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-colors" />
                    </div>

                    <div>
                      <span className="text-sm font-mono text-primary uppercase tracking-widest mb-2 block">
                        {project.tag}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-on-surface group-hover:translate-x-1 transition-transform">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-primary/5" />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="hidden md:flex absolute inset-y-0 left-0 right-0 items-center justify-between pointer-events-none px-1">
              <button
                type="button"
                aria-label="Scroll projects left"
                onClick={() => scroll('left')}
                className="pointer-events-auto p-2 rounded-full bg-black/50 hover:bg-black/70 border border-white/10 text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                aria-label="Scroll projects right"
                onClick={() => scroll('right')}
                className="pointer-events-auto p-2 rounded-full bg-black/50 hover:bg-black/70 border border-white/10 text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile Swipe Hint */}
          <div className="md:hidden flex justify-center mt-4">
            <div className="w-12 h-1 bg-outline-variant/30 rounded-full overflow-hidden">
              <motion.div 
                animate={{ x: [-48, 48] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="w-1/2 h-full bg-primary"
              />
            </div>
          </div>
        </>
      )}

      {/* Solution Detail Modal */}
      <AnimatePresence>
        {selectedSolution && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSolution(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/30 shadow-2xl flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedSolution(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Content */}
              <div className="w-full p-6 md:p-8 overflow-y-auto bg-surface-container-low">
                <div className="mb-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest rounded border border-primary/20 mb-3 inline-block">
                    {selectedSolution.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                    {selectedSolution.popup.title}
                  </h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed">
                    {selectedSolution.popup.summary}
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Что входит в "коробку"</h4>
                    <ul className="space-y-2">
                      {selectedSolution.popup.box.map((item: string, i: number) => (
                        <li key={i} className="flex gap-3">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                          <span className="text-on-surface-variant text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-1">Главная выгода</h4>
                    <p className="text-on-surface-variant text-base font-medium">
                      {selectedSolution.popup.benefit}
                    </p>
                  </div>

                  <button className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-bold rounded-xl hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20 flex items-center justify-center gap-3 text-base">
                    <Send className="w-4 h-4" />
                    {selectedSolution.popup.btn}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Tech Project Detail Modal */}
      <AnimatePresence>
        {selectedTechProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTechProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/30 shadow-2xl flex flex-col max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedTechProject(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full p-6 md:p-8 overflow-y-auto bg-surface-container-low">
                <div className="mb-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-primary/80 mb-3">{techProjectCase.eyebrow}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded-md bg-primary text-on-primary text-xs font-bold uppercase tracking-widest">
                      {techProjectCase.status}
                    </span>
                    <span className="px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                      {techProjectCase.tag}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">{techProjectCase.title}</h3>
                  <p className="text-xl md:text-2xl font-semibold text-primary mb-3">Crypto Alert Bot</p>
                  <p className="text-on-surface-variant text-base md:text-lg leading-relaxed max-w-4xl">
                    {techProjectCase.summary}
                  </p>
                </div>

                <a
                  href="https://t.me/AlertMarketsBot"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-bold rounded-xl hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20 mb-8"
                >
                  <Send className="w-4 h-4" />
                  Запустить бота: @AlertMarketsBot
                </a>

                <div className="grid md:grid-cols-2 gap-4 mb-10">
                  <div className="rounded-xl overflow-hidden border border-outline-variant/30 bg-black/20">
                    <img
                      src="/alert-create.png"
                      alt="Создание алерта в Telegram боте"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-outline-variant/30 bg-black/20">
                    <img
                      src="/my-alerts.png"
                      alt="Список алертов в Telegram боте"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="mb-10">
                  <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Ключевые возможности</h4>
                  <ul className="space-y-3">
                    {techProjectCase.features.map((feature, index) => (
                      <li key={index} className="flex gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span className="text-on-surface-variant text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-10">
                  <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Технологический стек</h4>
                  <div className="rounded-xl border border-outline-variant/30 overflow-hidden">
                    <div className="grid grid-cols-2 bg-primary/10 text-primary font-semibold text-sm uppercase tracking-widest">
                      <div className="p-3 border-r border-outline-variant/30">Компонент</div>
                      <div className="p-3">Технология</div>
                    </div>
                    {techProjectCase.stack.map((item, index) => (
                      <div key={item.component} className="grid grid-cols-2 text-sm md:text-base">
                        <div className={`p-3 border-r border-outline-variant/30 ${index !== techProjectCase.stack.length - 1 ? "border-b border-outline-variant/30" : ""}`}>
                          <span className="font-semibold">{item.component}</span>
                        </div>
                        <div className={`p-3 ${index !== techProjectCase.stack.length - 1 ? "border-b border-outline-variant/30" : ""}`}>
                          <span className="text-on-surface-variant">{item.technology}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-10">
                  <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Архитектура системы</h4>
                  <ol className="space-y-3">
                    {techProjectCase.architecture.map((item, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-on-surface-variant text-base">{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mb-10">
                  <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Структура репозитория</h4>
                  <pre className="p-4 rounded-xl bg-black/30 border border-outline-variant/30 text-sm text-gray-200 overflow-x-auto">
{`app/
├── bot/              # Логика бота, клавиатуры и FSM
├── workers/          # Фоновые задачи по мониторингу цен
├── exchanges/        # Клиенты API криптобирж
├── models/           # SQLAlchemy модели и схемы данных
└── core/             # Конфиг, окружение и Redis`
                    }
                  </pre>
                </div>

                <div className="rounded-xl border border-outline-variant/30 p-5 bg-primary/5">
                  <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Автор</h4>
                  <p className="text-lg font-semibold mb-3">Никита Ещенко</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <a href="https://t.me/nikitayech" target="_blank" rel="noreferrer" className="text-primary hover:underline">
                      Telegram: @nikitayech
                    </a>
                    <a href="https://github.com/NikitaYechshenko" target="_blank" rel="noreferrer" className="text-primary hover:underline">
                      GitHub: NikitaYechshenko
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
