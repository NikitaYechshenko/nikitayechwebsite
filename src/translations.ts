/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = "ru" | "en";

export const translations = {
  ru: {
    nav: {
      services: "Услуги",
      stack: "Стек",
      about: "Обо мне",
      contacts: "Контакты",
      status: "System: Online",
    },
    hero: {
      name: "Никита Ещенко",
      role: "Архитектор Backend-решений и DevOps-инженер",
      description: "Создаю высокопроизводительные системы: от быстрых лендингов с ИИ до отказоустойчивых микросервисных архитектур.",
      contactBtn: "связаться со мной",
      resumeBtn: "Посмотреть резюме",
    },
    services: {
      title: "Engineering Services",
      srv01: {
        title: "Web-разработка «под ключ»",
        subtitle: "Скоростной запуск и пожизненная поддержка",
        p1: "Сверхбыстрый Deploy: Дизайн и разработка сайта от пары часов до 1 дня.",
        p1Bold: "1 дня",
        p2: "Zero Cost Hosting: Пожизненный бесплатный хостинг и встроенная защита от атак (WAF/DDoS).",
        p2Bold: "бесплатный хостинг",
        p3: "Проверка гипотез: Предлагаю несколько вариантов дизайна и концепций сайта бесплатно до начала работ.",
        p4: "SEO-Ready: Фундаментальная подготовка под продвижение, CEO и сквозную аналитику.",
      },
      srv02: {
        title: "Анализ и сбор данных (Data Engineering)",
        subtitle: "Превращаю сырые данные в бизнес-аналитику",
        p1: "Smart Parsing: Разработка кастомных парсеров любой сложности для сбора данных из открытых источников.",
        p2: "AI-Driven Analytics: Обработка и глубокий анализ данных с применением нейросетевых моделей (ИИ).",
        p3: "Tracking & Metrics: Профессиональная установка и настройка систем аналитики для отслеживания пути пользователя.",
      },
      srv03: {
        title: "Backend & DevOps",
        subtitle: "Проектирование и масштабирование систем",
        p1: "Backend Ecosystem: Создание высоконагруженных серверных приложений и микросервисов (Python/FastAPI/Django).",
        p2: "Full Lifecycle DevOps: Автоматизированный деплой, непрерывная поддержка и проактивный мониторинг 24/7.",
        p3: "Deep Integration: Бесшовная интеграция со сторонними сервисами, API и разработка интеллектуальных Telegram-ботов.",
      },
    },
    stack: {
      title: "Technical Stack",
      subtitle: "Инструментарий для высоконагруженных систем",
    },
    about: {
      title: "Мой подход",
      p1: "Я создаю IT-решения, где бизнес-логика управляет архитектурой. Изучая международные бизнес-системы в HFU (Германия), я не просто сокращаю разрыв между кодом и серверами — я сокращаю разрыв между техническим долгом и рыночной масштабируемостью.",
      p2: "Мой фокус — высокая доступность и отказоустойчивость. Я проектирую инфраструктуры, которые не просто «работают», а выживают при быстром росте и пиковых нагрузках. Если ваш бизнес готов к масштабированию, я гарантирую, что технологии станут двигателем, а не узким местом.",
    },
    cta: {
      badge: "READY FOR NEW DEPLOYMENTS",
      title: "Давайте построим что-то неубиваемое.",
      startBtn: "Начать проект",
      cvBtn: "Скачать CV",
    },
    popup: {
      title: "Связаться со мной",
      subtitle: "Выберите удобный способ связи",
    },
    footer: {
      rights: "Все права защищены | Engineered for Performance",
    },
  },
  en: {
    nav: {
      services: "Services",
      stack: "Stack",
      about: "About",
      contacts: "Contacts",
      status: "System: Online",
    },
    hero: {
      name: "Nikita Yechshenko",
      role: "Backend Architect & DevOps Engineer",
      description: "Building high-performance systems: from fast AI-powered landing pages to resilient microservice architectures.",
      contactBtn: "Contact Me",
      resumeBtn: "View Resume",
    },
    services: {
      title: "Engineering Services",
      srv01: {
        title: "Turnkey Web Development",
        subtitle: "Fast Launch & Lifetime Support",
        p1: "Ultra-fast Deploy: Website design and development from a few hours to 1 day.",
        p1Bold: "1 day",
        p2: "Zero Cost Hosting: Lifetime free hosting and built-in attack protection (WAF/DDoS).",
        p2Bold: "free hosting",
        p3: "Hypothesis Testing: I offer several design options and website concepts for free before starting work.",
        p4: "SEO-Ready: Fundamental preparation for promotion, SEO, and end-to-end analytics.",
      },
      srv02: {
        title: "Data Engineering & Analysis",
        subtitle: "Turning Raw Data into Business Intelligence",
        p1: "Smart Parsing: Development of custom parsers of any complexity for collecting data from open sources.",
        p2: "AI-Driven Analytics: Processing and deep data analysis using neural network models (AI).",
        p3: "Tracking & Metrics: Professional installation and configuration of analytics systems to track the user journey.",
      },
      srv03: {
        title: "Backend & DevOps",
        subtitle: "System Design & Scaling",
        p1: "Backend Ecosystem: Creating high-load server applications and microservices (Python/FastAPI/Django).",
        p2: "Full Lifecycle DevOps: Automated deployment, continuous support, and proactive 24/7 monitoring.",
        p3: "Deep Integration: Seamless integration with third-party services, APIs, and development of intelligent Telegram bots.",
      },
    },
    stack: {
      title: "Technical Stack",
      subtitle: "Curated toolset for high-availability systems",
    },
    about: {
      title: "My Approach",
      p1: "I build IT solutions where business logic drives the architecture. Having studied International Business Systems at HFU (Germany), I don’t just bridge the gap between code and servers — I bridge the gap between technical debt and market scalability.",
      p2: "My focus is on high availability and resilience. I design infrastructures that don't just \"work,\" but survive rapid growth and peak loads. If your business is ready to scale, I ensure your technology is the engine, not the bottleneck.",
    },
    cta: {
      badge: "READY FOR NEW DEPLOYMENTS",
      title: "Let's build something indestructible.",
      startBtn: "Start Project",
      cvBtn: "Download CV",
    },
    popup: {
      title: "Contact Me",
      subtitle: "Choose a convenient way to contact",
    },
    footer: {
      rights: "All rights reserved | Engineered for Performance",
    },
  },
};
