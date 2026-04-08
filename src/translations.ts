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
      name: "Никита | Backend & DevOps Engineer",
      role: "Реализую логику, настраиваю инфраструктуру и запускаю готовые веб-ресурсы.",
      description: "Использую связку «Backend-экспертиза + AI-инструменты», чтобы собирать фронтенд и запускать проекты в 5 раз быстрее обычного.",
      contactBtn: "Обсудить проект (TG)",
      resumeBtn: "Посмотреть CV (DevOps)",
    },
    services: {
      title: "Направления работы",
      fastWeb: {
        title: "Fast Web Production",
        subtitle: "Результат и экономия",
        p1: "Сверхбыстрый запуск (24ч): Дизайн и деплой сайта-визитки или лендинга за 1 день. Пока другие верстают кнопки, я запускаю ваш бизнес.",
        p2: "Zero Cost Hosting: Настраиваю Cloudflare/Vercel так, что вы платите 0$ за хостинг пожизненно.",
        p3: "WAF & DDoS Protection: Как DevOps, я сразу ставлю «броню» на ваш сайт. Безопасность — это база, а не доп. услуга.",
        p4: "SEO-Ready: Фундаментальная настройка под поиск и аналитику с первого дня.",
      },
      core: {
        title: "Core Backend & DevOps",
        subtitle: "Взрослая экспертиза",
        backend: "Backend: Разработка логики, работа с базами данных, API, серверная часть приложений.",
        devops: "DevOps: Linux/Bash, Docker & Compose, Nginx, CI/CD, Cloudflare.",
        p1: "Linux/Bash: Уверенное администрирование серверов.",
        p2: "Docker & Compose: Контейнеризация всего и вся.",
        p3: "Nginx: Настройка Reverse Proxy, SSL, балансировка нагрузки.",
        p4: "CI/CD: Автоматизация деплоя (GitHub Actions / GitLab CI).",
        p5: "Cloudflare: Глубокая настройка WAF, DNS и кэширования.",
      },
    },
    stack: {
      title: "Technical Stack",
      subtitle: "Инструментарий для высоконагруженных систем",
    },
    about: {
      title: "Честный подход",
      p1: "Я не фронтенд-разработчик по призванию. Я создаю фронтенд с помощью ИИ, чтобы выдавать клиентам готовый продукт максимально быстро. Моя истинная экспертиза — это серверы, деплой, логика и автоматизация.",
      p2: "Не продаю «часы работы», продаю запущенный и защищенный проект. Делаю так, чтобы сайт не падал и летал. SEO, WAF, Аналитика — включено в любой тариф.",
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
      name: "Nikita | Backend & DevOps Engineer",
      role: "Implementing logic, setting up infrastructure, and launching ready-to-use web resources.",
      description: "Using 'Backend expertise + AI tools' to build frontend and launch projects 5x faster than usual.",
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
      title: "Honest Approach",
      p1: "I'm not a frontend developer by vocation. I create frontend using AI to deliver a finished product to clients as quickly as possible. My true expertise is servers, deployment, logic, and automation.",
      p2: "I don't sell 'hours of work', I sell a launched and protected project. I make sure the site doesn't fall and flies. SEO, WAF, Analytics — included in any plan.",
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
