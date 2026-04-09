/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const ALMATY_BUILD_HTML = `<!DOCTYPE html>
<html lang="ru"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>ALMATY BUILD | Профессиональный ремонт и отделка</title>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;family=Manrope:wght@700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "surface-variant": "#e1e2e7",
                        "on-primary": "#ffffff",
                        "surface-container-highest": "#e1e2e7",
                        "tertiary-container": "#9f4300",
                        "tertiary": "#793100",
                        "secondary-container": "#fe6b00",
                        "surface-container-low": "#f3f3f8",
                        "on-tertiary-fixed": "#341100",
                        "surface-container": "#edeef2",
                        "surface-dim": "#d9dade",
                        "secondary-fixed-dim": "#ffb693",
                        "surface-container-high": "#e7e8ec",
                        "on-error-container": "#93000a",
                        "tertiary-fixed": "#ffdbcb",
                        "on-tertiary-container": "#ffcfb9",
                        "on-background": "#191c1f",
                        "on-tertiary-fixed-variant": "#793100",
                        "on-secondary-fixed": "#351000",
                        "secondary": "#a04100",
                        "on-primary-container": "#c8daff",
                        "on-primary-fixed": "#001b3d",
                        "on-surface": "#191c1f",
                        "inverse-surface": "#2e3134",
                        "on-tertiary": "#ffffff",
                        "inverse-on-surface": "#f0f0f5",
                        "background": "#f8f9fe",
                        "error": "#ba1a1a",
                        "primary-fixed-dim": "#a9c7ff",
                        "secondary-fixed": "#ffdbcc",
                        "primary-fixed": "#d6e3ff",
                        "inverse-primary": "#a9c7ff",
                        "surface-tint": "#005db6",
                        "primary": "#00478d",
                        "outline": "#727783",
                        "on-surface-variant": "#424752",
                        "tertiary-fixed-dim": "#ffb691",
                        "primary-container": "#005eb8",
                        "on-secondary-container": "#572000",
                        "surface": "#f8f9fe",
                        "on-error": "#ffffff",
                        "error-container": "#ffdad6",
                        "on-primary-fixed-variant": "#00468c",
                        "on-secondary": "#ffffff",
                        "outline-variant": "#c2c6d4",
                        "surface-container-lowest": "#ffffff",
                        "surface-bright": "#f8f9fe",
                        "on-secondary-fixed-variant": "#7a3000"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "fontFamily": {
                        "headline": ["Manrope"],
                        "body": ["Inter"],
                        "label": ["Inter"]
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .architectural-grid {
            background-image: radial-gradient(circle, #c2c6d4 1px, transparent 1px);
            background-size: 40px 40px;
            opacity: 0.1;
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        body::-webkit-scrollbar {
            display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        body {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
    </style>
</head>
<body class="bg-surface font-body text-on-surface overflow-x-hidden">
<!-- Top Navigation -->
<nav class="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
<div class="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
<span class="text-2xl font-headline font-black tracking-tighter text-blue-900">ALMATY BUILD</span>
<div class="hidden md:flex items-center space-gap-8 gap-x-8">
<a class="text-blue-700 font-headline font-bold border-b-2 border-blue-700 pb-1" href="#services">Services</a>
<a class="text-slate-600 hover:text-blue-600 transition-colors" href="#gallery">Gallery</a>
<a class="text-slate-600 hover:text-blue-600 transition-colors" href="#estimate">Estimate</a>
<a class="text-slate-600 hover:text-blue-600 transition-colors" href="#contact">Contact</a>
<button class="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-medium hover:scale-95 transition-transform">Request Quote</button>
</div>
<div class="md:hidden">
<span class="material-symbols-outlined text-primary">menu</span>
</div>
</div>
</nav>
<main class="pt-20">
<!-- Hero Section -->
<section class="relative min-h-[921px] flex items-center overflow-hidden">
<div class="absolute inset-0 z-0">
<img class="w-full h-full object-cover" data-alt="luxury modern apartment interior in Almaty with floor-to-ceiling windows, minimalist furniture, and warm evening lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmxGBtJB6tlaIvC1w0YS0rhJQQeqLEdowAsjmonMSnh_qCC0zzhExwkOPFYVN4EZ9TS0gm8xk6pIq0wEr1r904UuyOtY_B0wnegMFwoYtoJ_nrJmERECWJZgbg2bwPcdOEIm788Rj0ShuvDAyR36C6dvpKqa8xbpdyeLMC3zoSzPNLcBhWGKD4bZ3oqz2Jikx0NzzWy6djjAxAT9PqCGgvYsyu2A7eqh_2rsiI2RbroYk5ObO6nEfgl4bCuc06uP_rmGU_4d5ylkc"/>
<div class="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
</div>
<div class="relative z-10 max-w-7xl mx-auto px-8 w-full">
<div class="max-w-2xl">
<span class="label-md inline-block py-1 px-3 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-widest mb-6">
                        МАСТЕРА В АЛМАТЫ
                    </span>
<h1 class="text-5xl md:text-7xl font-headline font-extrabold text-primary tracking-tight leading-[1.1] mb-6">
                        Профессиональный ремонт в Алматы
                    </h1>
<p class="text-xl text-on-surface-variant mb-10 leading-relaxed font-body">
                        От сантехники до полного дизайн-проекта. Качество, которому доверяют тысячи семей в нашем городе.
                    </p>
<div class="flex flex-col sm:flex-row gap-4">
<button class="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:translate-y-[-2px] transition-all">
                            Получить расчет
                        </button>
<button class="bg-surface-container-low text-primary px-8 py-4 rounded-lg font-bold text-lg border-2 border-primary/10 hover:bg-surface-container-high transition-colors">
                            Наши работы
                        </button>
</div>
</div>
</div>
</section>
<!-- Services Section -->
<section class="py-24 bg-surface-container-low relative" id="services">
<div class="architectural-grid absolute inset-0 pointer-events-none"></div>
<div class="max-w-7xl mx-auto px-8 relative z-10">
<div class="mb-16">
<h2 class="text-4xl font-headline font-bold text-primary mb-4">Наши Услуги</h2>
<div class="w-24 h-1 bg-secondary rounded-full"></div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<!-- Plumbing -->
<div class="bg-surface-container-lowest p-8 rounded-lg shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
<div class="flex justify-between items-start mb-6">
<span class="material-symbols-outlined text-4xl text-secondary">plumbing</span>
</div>
<h3 class="text-xl font-headline font-bold mb-3">Сантехника</h3>
<p class="text-on-surface-variant text-sm leading-relaxed">Профессиональный монтаж и ремонт систем водоснабжения и отопления любой сложности.</p>
</div>
<!-- Electrical -->
<div class="bg-surface-container-lowest p-8 rounded-lg shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
<div class="flex justify-between items-start mb-6">
<span class="material-symbols-outlined text-4xl text-secondary">electrical_services</span>
</div>
<h3 class="text-xl font-headline font-bold mb-3">Электрика</h3>
<p class="text-on-surface-variant text-sm leading-relaxed">Безопасная электропроводка, сборка щитов и установка умного освещения в вашем доме.</p>
</div>
<!-- Design -->
<div class="bg-surface-container-lowest p-8 rounded-lg shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
<div class="flex justify-between items-start mb-6">
<span class="material-symbols-outlined text-4xl text-secondary">architecture</span>
</div>
<h3 class="text-xl font-headline font-bold mb-3">Дизайн интерьера</h3>
<p class="text-on-surface-variant text-sm leading-relaxed">Создаем эргономичные и стильные пространства, отражающие ваш образ жизни.</p>
</div>
<!-- Construction -->
<div class="bg-surface-container-lowest p-8 rounded-lg shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
<div class="flex justify-between items-start mb-6">
<span class="material-symbols-outlined text-4xl text-secondary">construction</span>
</div>
<h3 class="text-xl font-headline font-bold mb-3">Общий ремонт</h3>
<p class="text-on-surface-variant text-sm leading-relaxed">Весь спектр строительных и отделочных работ под ключ с гарантией результата.</p>
</div>
</div>
</div>
</section>
<!-- Why Us Section -->
<section class="py-24 bg-surface">
<div class="max-w-7xl mx-auto px-8">
<div class="flex flex-col lg:flex-row items-center gap-16">
<div class="lg:w-1/2 relative">
<img class="rounded-lg shadow-xl relative z-10" data-alt="close-up of professional architect engineer checking blueprints on a digital tablet at a construction site with sun rays" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7XxOc8xD5urppil6j6kUS152aTOS0ogh8x8trcOMDLyd0vErDQDQEAwCR43Jd46o-EM_cTqh4LvL3b_HVep2PSO2fyjIMpLAkvu7C-EFiH2FIP8l-e_lDoGvwVzxW1pbgNC5fKeKEcS05d5J1Z9ufCqqt-lZK11KTVQptA00RgbObXekhMkxjQqrbIo3inm5y_I91ziy6WNfLjm9rratIUZQ8OHsR5lfHTtq9vt8O-nwsHDNYRnU1nb9c-hwc7Gtbs2IooVbDdoo"/>
<div class="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary-fixed rounded-lg -z-0"></div>
<div class="absolute top-12 left-12 p-4 bg-tertiary-container text-on-tertiary-container rounded-lg shadow-lg z-20">
<p class="text-xs font-bold uppercase tracking-widest mb-1">Status</p>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">verified</span>
<span class="font-bold">Master Assigned</span>
</div>
</div>
</div>
<div class="lg:w-1/2">
<h2 class="text-4xl font-headline font-bold text-primary mb-8 leading-tight">Почему выбирают Almaty Build Masters?</h2>
<div class="space-y-8">
<div class="flex gap-6">
<div class="flex-shrink-0 w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
<span class="material-symbols-outlined text-primary">history</span>
</div>
<div>
<h4 class="text-xl font-bold mb-2">10+ лет опыта</h4>
<p class="text-on-surface-variant">За десятилетие работы в Алматы мы отточили процессы до совершенства, зная особенности каждого типа застройки в городе.</p>
</div>
</div>
<div class="flex gap-6">
<div class="flex-shrink-0 w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
<span class="material-symbols-outlined text-primary">location_city</span>
</div>
<div>
<h4 class="text-xl font-bold mb-2">Локальные эксперты</h4>
<p class="text-on-surface-variant">Мы понимаем климатические особенности региона и используем материалы, проверенные временем в условиях Алматы.</p>
</div>
</div>
<div class="flex gap-6">
<div class="flex-shrink-0 w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
<span class="material-symbols-outlined text-primary">payments</span>
</div>
<div>
<h4 class="text-xl font-bold mb-2">Прозрачное ценообразование</h4>
<p class="text-on-surface-variant">Никаких скрытых платежей. Детальная смета предоставляется до начала работ и не меняется в процессе.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Gallery/Portfolio Section -->
<section class="py-24 bg-surface-container-low overflow-hidden" id="gallery">
<div class="max-w-7xl mx-auto px-8">
<div class="mb-16 flex justify-between items-end">
<div>
<h2 class="text-4xl font-headline font-bold text-primary mb-4">Наше Портфолио</h2>
<p class="text-on-surface-variant max-w-xl">Посмотрите на результаты нашей работы в жилых комплексах Алматы — от скромных студий до роскошных пентхаусов.</p>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
<div class="md:col-span-2 row-span-2 relative group overflow-hidden rounded-xl h-[600px]">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="ultra modern kitchen renovation with high-end appliances, sleek cabinets, and marble island in an Almaty apartment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQGXnAr52c6XZwFs1k8VaPGdwp06DRTV6pocS1olR5b6vRGJwpqjJZZ6ozbPvaM2flK7tT8Lbm5bV8Y2v78SLgkldD_Wl6Uwd_TTAb5waznnyTtx_IWYA7jcx-j9OBVnuJDMcnLPHPXB3UTkV-_fqjJ7HbOfsT0sU6XXnexNLpEnbWk9JPU97fNh10WdXfTn4HMJoaKCCuZMbNNgdfDNTKr1gB12WgcCUSgosXxQeErhmSUG5hxKxdwp4b4sHS-alo6uPSlPRCt5E"/>
<div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
<span class="text-white/70 uppercase text-xs tracking-widest mb-2">Кухня-гостиная</span>
<h4 class="text-white text-2xl font-bold">ЖК Esentai City</h4>
</div>
</div>
<div class="relative group overflow-hidden rounded-xl h-[292px]">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="luxury bathroom renovation with grey stone tiles, indirect warm lighting, and a modern walk-in shower" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPYcvVRovm_LM4mdsdbNo80Qvaa3oPSSv0EBoItGyAtHNlzbuVgmokKNudMy5I2z9AjNF_epSYrT0oijbPCDA0-ffabSlWIIvgma4OY7r_2610NJKaWztfyvkRHy-PodfkqCcrhRGmiX-T5A_cfe7-Sp9z9KM9IGmfozKvZwdmvm_N-mI-ohEcDqGKrqau-a_oXHxn_YjeBcNn3KBVsVbss8aAuCJskeaHBxtivA17MoVDc0Yn_NR7-ZZGAM0eLRJKzPZouRAk1bo"/>
<div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
<h4 class="text-white text-lg font-bold">Ванная комната, ЖК Almaty Arena</h4>
</div>
</div>
<div class="relative group overflow-hidden rounded-xl h-[292px]">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="modern minimalist bedroom interior design with neutral colors and architectural wooden accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKuk3UoElKKJ10w9NXnuqF_u2AtbKg81dxgbJpjlBFYnjmoBXXQ7N42pa0vmmhEI9P7YNd8nvn5x7OC5w5yhrCEPeXyxgSCY90XgydBr9XDMm6PNNJPNYdjZ5Q7dybXiAA4XxTIUXBhfZfVglqxzBMDaRo_pAnS-Vef7Zy-zW8-QFj7rSZdjMuaqBig26NT0JIJbFGU9f5We1WBIs4BEcpUdpJp7BhcnCoPiCZC2K4HC8EI8QwEp5MNSzF6qPPbWJdxE5ostcDiYs"/>
<div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
<h4 class="text-white text-lg font-bold">Спальня, ЖК Apple Town</h4>
</div>
</div>
</div>
</div>
</section>
<!-- Contact Section -->
<section class="py-24 bg-surface-container-lowest" id="contact">
<div class="max-w-7xl mx-auto px-8">
<div class="flex flex-col lg:flex-row gap-16">
<div class="lg:w-1/3">
<h2 class="text-4xl font-headline font-bold text-primary mb-8">Свяжитесь с нами</h2>
<div class="space-y-6">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-secondary">location_on</span>
<div>
<p class="font-bold">Адрес</p>
<p class="text-on-surface-variant">Проспект Абая 123, Алматы, Казахстан</p>
</div>
</div>
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-secondary">call</span>
<div>
<p class="font-bold">Телефон</p>
<p class="text-on-surface-variant">+7 (727) 345-67-89</p>
</div>
</div>
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-secondary">schedule</span>
<div>
<p class="font-bold">Часы работы</p>
<p class="text-on-surface-variant">Пн-Сб: 09:00 - 20:00</p>
</div>
</div>
</div>
</div>
<div class="lg:w-2/3 bg-surface-container-low p-10 rounded-2xl">
<form class="space-y-6">
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="space-y-2">
<label class="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">Ваше Имя</label>
<input class="w-full bg-surface-container-high border-none rounded-lg p-4 focus:ring-2 focus:ring-primary transition-all" placeholder="Александр" type="text"/>
</div>
<div class="space-y-2">
<label class="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">Телефон</label>
<input class="w-full bg-surface-container-high border-none rounded-lg p-4 focus:ring-2 focus:ring-primary transition-all" placeholder="+7 (___) ___-__-__" type="tel"/>
</div>
</div>
<div class="space-y-2">
<label class="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">Тип услуги</label>
<select class="w-full bg-surface-container-high border-none rounded-lg p-4 focus:ring-2 focus:ring-primary transition-all">
<option>Полный ремонт под ключ</option>
<option>Сантехнические работы</option>
<option>Электромонтажные работы</option>
<option>Дизайн интерьера</option>
</select>
</div>
<div class="space-y-2">
<label class="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">Ваш комментарий</label>
<textarea class="w-full bg-surface-container-high border-none rounded-lg p-4 focus:ring-2 focus:ring-primary transition-all" placeholder="Опишите ваши пожелания..." rows="4"></textarea>
</div>
<button class="w-full bg-primary text-on-primary font-headline font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all" type="submit">
                                Отправить запрос
                            </button>
</form>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full mt-20 bg-slate-50 border-t border-slate-100">
<div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-12 py-16 max-w-7xl mx-auto">
<div class="space-y-4">
<span class="font-headline font-bold text-blue-900 text-xl">ALMATY BUILD</span>
<p class="font-inter text-sm uppercase tracking-widest text-slate-500 leading-relaxed">
                    © 2024 Almaty Build Masters. 123 Abay Avenue, Almaty. Mon-Sat: 09:00 - 20:00
                </p>
</div>
<div class="flex flex-col gap-4">
<h4 class="font-headline font-bold text-primary mb-2">Навигация</h4>
<a class="text-slate-500 hover:underline decoration-blue-500 font-inter text-sm uppercase tracking-widest transition-opacity opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
<a class="text-slate-500 hover:underline decoration-blue-500 font-inter text-sm uppercase tracking-widest transition-opacity opacity-80 hover:opacity-100" href="#">Terms of Service</a>
<a class="text-slate-500 hover:underline decoration-blue-500 font-inter text-sm uppercase tracking-widest transition-opacity opacity-80 hover:opacity-100" href="#">FAQ</a>
<a class="text-slate-500 hover:underline decoration-blue-500 font-inter text-sm uppercase tracking-widest transition-opacity opacity-80 hover:opacity-100" href="#">Careers</a>
</div>
<div class="space-y-4">
<h4 class="font-headline font-bold text-primary mb-2">Следите за нами</h4>
<div class="flex gap-4">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-colors">
<span class="material-symbols-outlined">share</span>
</div>
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-colors">
<span class="material-symbols-outlined">camera</span>
</div>
</div>
</div>
</div>
</footer>
</body></html>`;
