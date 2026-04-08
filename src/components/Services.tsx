/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, BarChart3, Cpu, ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const services = [
    {
      id: "SRV-01",
      title: t.services.srv01.title,
      subtitle: t.services.srv01.subtitle,
      icon: <Zap className="text-primary w-10 h-10" />,
      points: [
        <><strong>{t.services.srv01.p1.split(":")[0]}:</strong> {t.services.srv01.p1.split(":")[1].replace(t.services.srv01.p1Bold, "")} <span className="text-primary font-bold">{t.services.srv01.p1Bold}</span>.</>,
        <><strong>{t.services.srv01.p2.split(":")[0]}:</strong> {t.services.srv01.p2.split(":")[1].replace(t.services.srv01.p2Bold, "")} <span className="text-primary font-bold">{t.services.srv01.p2Bold}</span>.</>,
        <><strong>{t.services.srv01.p3.split(":")[0]}:</strong> {t.services.srv01.p3.split(":")[1]}</>,
        <><strong>{t.services.srv01.p4.split(":")[0]}:</strong> {t.services.srv01.p4.split(":")[1]}</>,
      ],
      tags: ["React", "SEO", "Cloudflare", "WAF"],
      className: "md:col-span-8",
    },
    {
      id: "SRV-02",
      title: t.services.srv02.title,
      subtitle: t.services.srv02.subtitle,
      icon: <BarChart3 className="text-secondary w-10 h-10" />,
      points: [
        <><strong>{t.services.srv02.p1.split(":")[0]}:</strong> {t.services.srv02.p1.split(":")[1]}</>,
        <><strong>{t.services.srv02.p2.split(":")[0]}:</strong> {t.services.srv02.p2.split(":")[1]}</>,
        <><strong>{t.services.srv02.p3.split(":")[0]}:</strong> {t.services.srv02.p3.split(":")[1]}</>,
      ],
      tags: ["Python", "AI", "Scrapy", "GA4"],
      className: "md:col-span-4",
    },
    {
      id: "SRV-03",
      title: t.services.srv03.title,
      subtitle: t.services.srv03.subtitle,
      icon: <Cpu className="text-primary w-10 h-10" />,
      points: [
        <><strong>{t.services.srv03.p1.split(":")[0]}:</strong> {t.services.srv03.p1.split(":")[1]}</>,
        <><strong>{t.services.srv03.p2.split(":")[0]}:</strong> {t.services.srv03.p2.split(":")[1]}</>,
        <><strong>{t.services.srv03.p3.split(":")[0]}:</strong> {t.services.srv03.p3.split(":")[1]}</>,
      ],
      tags: ["Docker", "CI/CD", "K8s", "API"],
      className: "md:col-span-12",
    },
  ];

  return (
    <section className="py-32 px-6 md:px-8 bg-surface-container-low" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services.title}</h2>
          <div className="w-12 h-1 bg-primary"></div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${service.className} tech-card group flex flex-col overflow-hidden`}
            >
              {/* Mobile Header / Toggle */}
              <button 
                onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                className="md:hidden w-full p-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="scale-75 origin-left">
                    {service.icon}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-on-surface-variant block mb-1">{service.id}</span>
                    <h3 className="text-lg font-bold leading-tight">{service.title}</h3>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${expandedId === service.id ? "rotate-180" : ""}`} />
              </button>

              {/* Desktop Header */}
              <div className="hidden md:block p-8 pb-0">
                <div className="flex justify-between items-start mb-8">
                  {service.icon}
                  <span className="font-mono text-[10px] text-on-surface-variant">{service.id}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-primary text-sm font-medium mb-6">{service.subtitle}</p>
              </div>

              {/* Content (Toggleable on mobile, always visible on desktop) */}
              <AnimatePresence initial={false}>
                {(expandedId === service.id || typeof window !== 'undefined' && window.innerWidth >= 768) && (
                  <motion.div
                    initial={typeof window !== 'undefined' && window.innerWidth < 768 ? { height: 0, opacity: 0 } : false}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="md:!h-auto md:!opacity-100 overflow-hidden"
                  >
                    <div className="px-6 pb-6 md:px-8 md:pb-8">
                      <p className="md:hidden text-primary text-xs font-medium mb-4">{service.subtitle}</p>
                      <ul className="space-y-4 text-on-surface-variant text-sm mb-8">
                        {service.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex gap-3">
                            <span className="w-1 h-1 bg-primary mt-2 shrink-0"></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-background/50 rounded border border-outline-variant/30 text-[10px] font-mono text-on-surface-variant">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Fallback for desktop if JS innerWidth check is tricky in SSR/initial render */}
              <div className="hidden md:block p-8 pt-0">
                <ul className="space-y-4 text-on-surface-variant text-sm mb-8">
                  {service.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex gap-3">
                      <span className="w-1 h-1 bg-primary mt-2 shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-background/50 rounded border border-outline-variant/30 text-[10px] font-mono text-on-surface-variant">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
