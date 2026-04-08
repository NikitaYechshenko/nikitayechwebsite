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
      name: "Никита | Backend & DevOps",
      role: "Запускаю веб-ресурсы под ключ.",
      bullet1: "Единая точка ответственности",
      bullet2: "Логика, деплой и WAF-защита",
      bullet3: "Настройка «под ключ» с гарантией работы",
      contactBtn: "Обсудить проект (TG)",
      resumeBtn: "Посмотреть CV (DevOps)",
    },
    services: {
      title: "Направления работы",
      fastWeb: {
        title: "Fast Web Production",
        subtitle: "Результат и экономия",
        p1: "Сверхбыстрый запуск (24ч): Дизайн и деплой сайта-визитки или лендинга за 1 день. Пока другие верстают кнопки, я запускаю ваш бизнес.",
        p2: "Zero Cost Hosting: Настраиваю Cloudflare/Vercel так, что вы платите 0$ за хостинг пожизненно.*",
        p3: "WAF & DDoS Protection: Как DevOps, я сразу ставлю «броню» на ваш сайт. Безопасность — это база, а не доп. услуга.",
        p4: "SEO-Ready: Фундаментальная настройка под поиск и аналитику с первого дня.",
        fixedPrice: "Фиксированная цена и запуск за 24 часа. Без бесконечных правок и затягивания сроков.",
        footnote: "*Подходит для лендингов, визиток и проектов с умеренной нагрузкой.",
      },
      core: {
        title: "Core Backend & DevOps",
        subtitle: "Взрослая экспертиза",
        backend: "Backend: Разработка логики, работа с базами данных, API, серверная часть приложений.",
        devops: "DevOps: Linux/Bash, Docker & Compose, Nginx, CI/CD, Cloudflare, Monitoring & Logging.",
        p1: "Linux/Bash: Уверенное администрирование серверов.",
        p2: "Docker & Compose: Контейнеризация всего и вся.",
        p3: "Nginx: Настройка Reverse Proxy, SSL, балансировка нагрузки.",
        p4: "CI/CD: Автоматизация деплоя (GitHub Actions / GitLab CI).",
        p5: "Cloudflare: Глубокая настройка WAF, DNS и кэширования.",
        p6: "Monitoring & Logging: Prometheus, Grafana, ELK/Graylog.",
        p7: "Infrastructure as Code: Ansible, Terraform.",
      },
    },
    stack: {
      title: "Technical Stack",
      subtitle: "Инструментарий для высоконагруженных систем",
    },
    about: {
      title: "Мой подход: Инженерная эффективность",
      card1: {
        title: "Результат > Процесс",
        subtitle: "Я не продаю «часы кодинга», я продаю работающий бизнес-инструмент.",
        details: "Моя цель — запустить ваш проект и сделать его прибыльным, а не бесконечно обсуждать дизайн-систему.",
      },
      card2: {
        title: "Hybrid Intelligence",
        subtitle: "В 5 раз быстрее за счет нейросетей.",
        details: "Я использую AI-стек для генерации интерфейсов. Пока другие тратят недели на верстку, я уже настраиваю логику и готовлюсь к деплою.",
      },
      card3: {
        title: "Deep Tech & Security",
        subtitle: "Неубиваемая инфраструктура.",
        details: "Python/FastAPI для ядра и Cloudflare/Docker для защиты. Сайт не просто «красивый» — он технически совершенен и готов к нагрузкам.",
      },
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
      rights: "Все права защищены | Product-focused Backend/DevOps Engineer",
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
      name: "Nikita | Backend & DevOps",
      role: "Turnkey web resources launch.",
      bullet1: "Single point of responsibility",
      bullet2: "Logic, deploy & WAF protection",
      bullet3: "Turnkey setup with work guarantee",
      contactBtn: "Discuss Project (TG)",
      resumeBtn: "View CV (DevOps)",
    },
    services: {
      title: "Work Directions",
      fastWeb: {
        title: "Fast Web Production",
        subtitle: "Result & Savings",
        p1: "Ultra-fast Launch (24h): Design and deploy a business card site or landing page in 1 day. While others are layouting buttons, I launch your business.",
        p2: "Zero Cost Hosting: Configuring Cloudflare/Vercel so you pay $0 for hosting for life.",
        p3: "WAF & DDoS Protection: As a DevOps, I immediately put 'armor' on your site. Security is a base, not an add-on service.",
        p4: "SEO-Ready: Fundamental setup for search and analytics from day one.",
      },
      core: {
        title: "Core Backend & DevOps",
        subtitle: "Expertise for scale",
        backend: "Backend: Logic development, databases, API, server-side applications.",
        devops: "DevOps: Linux/Bash, Docker & Compose, Nginx, CI/CD, Cloudflare.",
        p1: "Linux/Bash: Confident server administration.",
        p2: "Docker & Compose: Containerization of everything.",
        p3: "Nginx: Reverse Proxy, SSL, load balancing.",
        p4: "CI/CD: Deployment automation (GitHub Actions / GitLab CI).",
        p5: "Cloudflare: Deep WAF, DNS, and caching setup.",
      },
    },
    stack: {
      title: "Technical Stack",
      subtitle: "Toolset for high-load systems",
    },
    about: {
      title: "My Approach: Engineering Efficiency",
      card1: {
        title: "Result > Process",
        subtitle: "I don't sell 'coding hours', I sell a working business tool.",
        details: "My goal is to launch your project and make it profitable, not to endlessly discuss the design system.",
      },
      card2: {
        title: "Hybrid Intelligence",
        subtitle: "5x faster thanks to neural networks.",
        details: "I use an AI stack for interface generation. While others spend weeks on layout, I'm already setting up logic and preparing for deployment.",
      },
      card3: {
        title: "Deep Tech & Security",
        subtitle: "Indestructible infrastructure.",
        details: "Python/FastAPI for the core and Cloudflare/Docker for protection. The site isn't just 'beautiful' - it's technically perfect and ready for loads.",
      },
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
      rights: "All rights reserved | Product-focused Backend/DevOps Engineer",
    },
  },
};
