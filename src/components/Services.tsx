/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Zap, BarChart3, Cpu } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

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
    <section className="py-32 px-8 bg-surface-container-low" id="services">
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
              className={`${service.className} p-8 rounded-lg tech-card group flex flex-col justify-between`}
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  {service.icon}
                  <span className="font-mono text-[10px] text-on-surface-variant">{service.id}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-primary text-sm font-medium mb-6">{service.subtitle}</p>
                
                <ul className="space-y-4 text-on-surface-variant text-sm mb-8">
                  {service.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex gap-3">
                      <span className="w-1 h-1 bg-primary mt-2 shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-background/50 rounded border border-outline-variant/30 text-[10px] font-mono text-on-surface-variant">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
