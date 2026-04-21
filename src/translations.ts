/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = "ru" | "en";

export const translations = {
  ru: {
    nav: {
      services: "Услуги",
      stack: "Проекты",
      about: "Мой подход",
      contacts: "Контакты",
      status: "System: Online",
      modeBusiness: "WebBuild.kz",
      modeTech: "IT / HR",
    },
    hero: {
      business: {
        name: "Никита | Запуск IT-продуктов",
        role: "Ваш проект в сети за 24 часа.",
        bullet1: "Экономлю до 70% бюджета на старте",
        bullet2: "0$ за хостинг пожизненно",
        bullet3: "Гарантия запуска и поддержки",
      },
      businessHubText: "Мой бизнес лежит тут",
      businessHubCta: "Перейти на webbuild.kz",
      tech: {
        name: "Никита | Backend & DevOps",
        role: "High-load системы и инфраструктура.",
        bullet1: "Python/FastAPI & Go экспертиза",
        bullet2: "Docker, K8s, CI/CD пайплайны",
        bullet3: "WAF, DDoS protection & Security",
      },
      contactBtn: "Обсудить проект",
      resumeBtn: "Посмотреть CV",
    },
    services: {
      title: "Направления работы",
      business: {
        fastWeb: {
          title: "Быстрый старт бизнеса",
          subtitle: "Результат и экономия",
          p1: "Запуск за 24ч: Пока другие обсуждают ТЗ, я уже деплою ваш лендинг или визитку.",
          p2: "Бесплатный хостинг: Настраиваю инфраструктуру так, что вы не платите за серверы.",
          p3: "Безопасность включена: Защита от взломов и атак на уровне банковских систем.",
          p4: "SEO-подготовка: Ваш сайт сразу готов к продвижению в поиске.",
        },
        core: {
          title: "Разработка и поддержка",
          subtitle: "Надежный тыл вашего IT",
          p1: "Создание сложных личных кабинетов и CRM.",
          p2: "Автоматизация рутинных процессов.",
          p3: "Интеграция с платежными системами и мессенджерами.",
          p4: "Техническое сопровождение 24/7.",
        }
      },
      tech: {
        fastWeb: {
          title: "Edge Computing & WAF",
          subtitle: "Performance & Security",
          p1: "Vercel/Cloudflare Edge: Минимальный TTFB и глобальное кэширование.",
          p2: "WAF Rules: Кастомные правила фильтрации трафика и Rate Limiting.",
          p3: "Infrastructure as Code: Быстрое развертывание через Terraform.",
          p4: "Lighthouse 100/100: Оптимизация Core Web Vitals.",
        },
        core: {
          title: "Backend & DevOps Core",
          subtitle: "Scalable Architecture",
          p1: "Python/FastAPI: Асинхронная разработка высоконагруженных API.",
          p2: "Docker & Compose: Контейнеризация и оркестрация.",
          p3: "CI/CD: GitHub Actions / GitLab CI автоматизация.",
          p4: "Monitoring: Prometheus, Grafana, ELK stack.",
        }
      }
    },
    about: {
      business: {
        title: "Почему я?",
        card1: {
          title: "Скорость",
          subtitle: "Запуск за 1 день.",
          details: "Я ценю ваше время. Мой стек позволяет выдавать результат, пока конкуренты только пишут ТЗ.",
        },
        card2: {
          title: "Экономия",
          subtitle: "0$ за серверы.",
          details: "Я знаю, как использовать облачные технологии так, чтобы вы не платили за них ни копейки.",
        },
        card3: {
          title: "Надежность",
          subtitle: "Один за всех.",
          details: "Я закрываю все вопросы: от дизайна до настройки серверов. Вам не нужно искать 5 разных людей.",
        },
      },
      tech: {
        title: "Инженерный подход",
        card1: {
          title: "Clean Code",
          subtitle: "SOLID, DRY, KISS.",
          details: "Пишу поддерживаемый код, который легко масштабировать и передать другой команде.",
        },
        card2: {
          title: "DevOps Mindset",
          subtitle: "Автоматизируй или умри.",
          details: "Все, что можно автоматизировать — автоматизировано. CI/CD, IaC, автотесты.",
        },
        card3: {
          title: "Security First",
          subtitle: "Zero Trust Architecture.",
          details: "Безопасность закладывается на этапе проектирования, а не добавляется в конце.",
        },
      }
    },
    solutions: {
      title: "Витрина решений",
      techTitle: "Project Gallery",
      cta: "Хочу такой же проект",
      techCta: "View Project",
      items: [
        {
          id: "web-landing",
          tag: "Web & Landing",
          title: "Сайты-визитки и Лендинги с конверсией",
          duration: "24 часа",
          feature: "0$ за хостинг навсегда + базовая SEO",
          oldPrice: "100$",
          price: "75$",
          image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1200",
          popup: {
            title: "Идеальный старт для вашего бизнеса в сети.",
            summary: "Я создаю сверхбыстрые сайты, которые не падают от нагрузок и сразу готовы приводить клиентов. Идеально для запуска нового продукта, сферы услуг или тестирования ниши.",
            box: [
              "Адаптивный дизайн (отлично выглядит и на ПК, и на iPhone).",
              "Подключение форм заявок (уведомления сразу летят к вам в Telegram или Email).",
              "Интеграция систем аналитики (Яндекс.Метрика / Google Analytics).",
              "Настройка Cloudflare: защита от DDoS и мгновенная загрузка.",
            ],
            benefit: "Я настраиваю современную Serverless-архитектуру. Это значит, что вам не нужно будет платить абонентскую плату за сервер. Ваш сайт будет работать бесплатно годами.",
            btn: "Обсудить мой сайт"
          }
        },
        {
          id: "ecommerce",
          tag: "E-commerce",
          title: "Интернет-магазины под ключ",
          duration: "1 неделя",
          feature: "WAF-защита транзакций и админ-панель",
          oldPrice: "250$",
          price: "200$",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
          popup: {
            title: "Полноценная торговая площадка для вашего бренда.",
            summary: "Мало просто выложить товары — магазин должен работать без сбоев, безопасно принимать платежи и быть удобным для покупателя. Я собираю надежные e-commerce решения на современном стеке.",
            box: [
              "Каталог товаров с умным поиском и фильтрами.",
              "Корзина и процесс оформления заказа (Checkout).",
              "Интеграция эквайринга (прием оплат картами).",
              "Удобная админ-панель для управления товарами.",
              "Инженерная безопасность данных покупателей.",
            ],
            benefit: "Ваш магазин не 'упадет' в черную пятницу или при наплыве трафика из рекламы. Инфраструктура готова к масштабированию.",
            btn: "Рассчитать стоимость магазина"
          }
        },
        {
          id: "tma",
          tag: "Telegram Apps",
          title: "Telegram-боты и Web Apps (TMA)",
          duration: "1 неделя",
          feature: "Бизнес в кармане клиента без установки приложений",
          price: "от 150$",
          image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1200",
          popup: {
            title: "Автоматизация и продажи внутри мессенджера.",
            summary: "Превратите Telegram в ваш главный канал продаж и поддержки. Я разрабатываю как классических текстовых ботов, так и современные Mini Apps (полноценные веб-приложения внутри Telegram).",
            box: [
              "Магазин в Telegram: покупка не выходя из чата.",
              "Автоматизация поддержки: бот-помощник (80% рутины).",
              "Личный кабинет и программы лояльности (CRM).",
              "Системы бронирования для услуг.",
            ],
            benefit: "Вы получаете прямой доступ к клиенту. Конверсия в Telegram часто в 2-3 раза выше, чем на классических сайтах, а разработка обходится дешевле.",
            btn: "Автоматизировать бизнес"
          }
        }
      ]
    },
    cta: {
      badge: "READY FOR NEW DEPLOYMENTS",
      title: "Давайте построим что-то крутое.",
      startBtn: "Начать проект",
      cvBtn: "Скачать CV",
    },
    popup: {
      title: "Связаться со мной",
      subtitle: "Выберите удобный способ связи",
    },
    footer: {
      rights: "Все права защищены | Nikita.Dev",
    },
  },
  en: {
    nav: {
      services: "Services",
      stack: "Projects",
      about: "Approach",
      contacts: "Contacts",
      status: "System: Online",
      modeBusiness: "WebBuild.kz",
      modeTech: "IT / HR",
    },
    hero: {
      business: {
        name: "Nikita | IT Product Launch",
        role: "Your project online in 24 hours.",
        bullet1: "Save up to 70% of budget at start",
        bullet2: "$0 for hosting for life",
        bullet3: "Launch & support guarantee",
      },
      businessHubText: "My business lives here",
      businessHubCta: "Open webbuild.kz",
      tech: {
        name: "Nikita | Backend & DevOps",
        role: "High-load systems & infrastructure.",
        bullet1: "Python/FastAPI & Go expertise",
        bullet2: "Docker, K8s, CI/CD pipelines",
        bullet3: "WAF, DDoS protection & Security",
      },
      contactBtn: "Discuss Project",
      resumeBtn: "View CV",
    },
    services: {
      title: "Work Directions",
      business: {
        fastWeb: {
          title: "Fast Business Start",
          subtitle: "Result & Savings",
          p1: "24h Launch: While others discuss specs, I'm already deploying your landing page.",
          p2: "Free Hosting: I set up infrastructure so you don't pay for servers.",
          p3: "Security Included: Protection against hacks at the banking system level.",
          p4: "SEO-Ready: Your site is ready for search promotion from day one.",
        },
        core: {
          title: "Dev & Support",
          subtitle: "Reliable IT backend",
          p1: "Creation of complex user accounts and CRMs.",
          p2: "Automation of routine processes.",
          p3: "Integration with payment systems and messengers.",
          p4: "Technical support 24/7.",
        }
      },
      tech: {
        fastWeb: {
          title: "Edge Computing & WAF",
          subtitle: "Performance & Security",
          p1: "Vercel/Cloudflare Edge: Minimal TTFB and global caching.",
          p2: "WAF Rules: Custom traffic filtering and Rate Limiting.",
          p3: "Infrastructure as Code: Rapid deployment via Terraform.",
          p4: "Lighthouse 100/100: Core Web Vitals optimization.",
        },
        core: {
          title: "Backend & DevOps Core",
          subtitle: "Scalable Architecture",
          p1: "Python/FastAPI: Async development of high-load APIs.",
          p2: "Docker & Compose: Containerization and orchestration.",
          p3: "CI/CD: GitHub Actions / GitLab CI automation.",
          p4: "Monitoring: Prometheus, Grafana, ELK stack.",
        }
      }
    },
    about: {
      business: {
        title: "Why me?",
        card1: {
          title: "Speed",
          subtitle: "1-day launch.",
          details: "I value your time. My stack allows me to deliver results while competitors are still writing specs.",
        },
        card2: {
          title: "Savings",
          subtitle: "$0 for servers.",
          details: "I know how to use cloud technologies so you don't pay a penny for them.",
        },
        card3: {
          title: "Reliability",
          subtitle: "One for all.",
          details: "I cover all issues: from design to server setup. You don't need to look for 5 different people.",
        },
      },
      tech: {
        title: "Engineering Approach",
        card1: {
          title: "Clean Code",
          subtitle: "SOLID, DRY, KISS.",
          details: "I write maintainable code that is easy to scale and hand over to another team.",
        },
        card2: {
          title: "DevOps Mindset",
          subtitle: "Automate or die.",
          details: "Everything that can be automated is automated. CI/CD, IaC, auto-tests.",
        },
        card3: {
          title: "Security First",
          subtitle: "Zero Trust Architecture.",
          details: "Security is built in at the design stage, not added at the end.",
        },
      }
    },
    solutions: {
      title: "Solutions Storefront",
      techTitle: "Project Gallery",
      cta: "I want this project",
      techCta: "View Project",
      items: [
        {
          id: "web-landing",
          tag: "Web & Landing",
          title: "Business Cards & High-Conversion Landings",
          duration: "24 hours",
          feature: "$0 hosting forever + basic SEO",
          oldPrice: "100$",
          price: "75$",
          image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1200",
          popup: {
            title: "Perfect start for your business online.",
            summary: "I create ultra-fast websites that don't crash under load and are immediately ready to bring in customers. Ideal for launching a new product, service area, or niche testing.",
            box: [
              "Responsive design (looks great on PC and iPhone).",
              "Application forms connection (notifications to Telegram/Email).",
              "Analytics systems integration (Google Analytics).",
              "Cloudflare setup: DDoS protection and instant loading.",
            ],
            benefit: "I set up a modern Serverless architecture. This means you won't have to pay a monthly fee for the server. Your site will work for free for years.",
            btn: "Discuss my site"
          }
        },
        {
          id: "ecommerce",
          tag: "E-commerce",
          title: "Turnkey Online Stores",
          duration: "1 week",
          feature: "WAF transaction protection & Admin panel",
          oldPrice: "250$",
          price: "200$",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
          popup: {
            title: "A full-fledged marketplace for your brand.",
            summary: "It's not enough to just list products — the store must work without failures, securely accept payments, and be convenient for the buyer. I build reliable e-commerce solutions on a modern stack.",
            box: [
              "Product catalog with smart search and filters.",
              "Cart and Checkout process.",
              "Acquiring integration (card payments).",
              "Convenient admin panel for managing products.",
              "Engineering security of customer data.",
            ],
            benefit: "Your store won't 'fall' on Black Friday or during a surge of traffic from ads. The infrastructure is ready for scaling.",
            btn: "Calculate store cost"
          }
        },
        {
          id: "tma",
          tag: "Telegram Bots & Web Apps (TMA)",
          duration: "1 week",
          feature: "Business in customer's pocket without app installation",
          price: "from 150$",
          image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1200",
          popup: {
            title: "Automation and sales inside the messenger.",
            summary: "Turn Telegram into your main sales and support channel. I develop both classic text bots and modern Mini Apps (full-fledged web applications inside Telegram).",
            box: [
              "Store in Telegram: purchase without leaving the chat.",
              "Support automation: assistant bot (80% of routine).",
              "Personal account and loyalty programs (CRM).",
              "Booking systems for services.",
            ],
            benefit: "You get direct access to the customer. Conversion in Telegram is often 2-3 times higher than on classic sites, and development is cheaper.",
            btn: "Automate business"
          }
        }
      ]
    },
    cta: {
      badge: "READY FOR NEW DEPLOYMENTS",
      title: "Let's build something cool.",
      startBtn: "Start Project",
      cvBtn: "Download CV",
    },
    popup: {
      title: "Contact Me",
      subtitle: "Choose a convenient way to contact",
    },
    footer: {
      rights: "All rights reserved | Nikita.Dev",
    },
  },
};
