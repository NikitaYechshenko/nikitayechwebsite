/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, Cpu, ChevronDown, Server, ShieldCheck, Rocket, Globe, Database, Terminal, Box, Layers, Workflow, BarChart3 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useViewContext } from "../context/ContextContext";

export default function Services() {
  const { t } = useLanguage();
  const { viewContext } = useViewContext();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const content = viewContext === "business" ? t.services.business : t.services.tech;

  const services = [
    {
      id: "FAST-WEB",
      title: content.fastWeb.title,
      subtitle: content.fastWeb.subtitle,
      icon: <Rocket className="text-primary w-10 h-10" />,
      points: [
        { text: content.fastWeb.p1, icon: <Zap className="w-4 h-4 text-primary" /> },
        { text: content.fastWeb.p2, icon: <Globe className="w-4 h-4 text-primary" /> },
        { text: content.fastWeb.p3, icon: <ShieldCheck className="w-4 h-4 text-primary" /> },
        { text: content.fastWeb.p4, icon: <BarChart3 className="w-4 h-4 text-primary" /> },
      ],
      className: "md:col-span-7",
    },
    {
      id: "CORE-TECH",
      title: content.core.title,
      subtitle: content.core.subtitle,
      icon: <Server className="text-secondary w-10 h-10" />,
      points: [
        { text: content.core.p1, icon: <Database className="w-4 h-4 text-secondary" /> },
        { text: content.core.p2, icon: <Box className="w-4 h-4 text-secondary" /> },
        { text: content.core.p3, icon: <Layers className="w-4 h-4 text-secondary" /> },
        { text: content.core.p4, icon: <Workflow className="w-4 h-4 text-secondary" /> },
      ],
      className: "md:col-span-5",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.services.title}</h2>
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
              {/* Mobile Header */}
              <button 
                onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                className="md:hidden w-full p-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <span className="font-mono text-sm text-on-surface-variant block mb-1">{service.id}</span>
                    <h3 className="text-xl font-bold leading-tight">{service.title}</h3>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${expandedId === service.id ? "rotate-180" : ""}`} />
              </button>

              {/* Desktop Header */}
              <div className="hidden md:block p-8 pb-4">
                <div className="flex justify-between items-start mb-8">
                  {service.icon}
                  <span className="font-mono text-sm text-on-surface-variant uppercase tracking-widest">
                    {viewContext === "business" ? "Business Solution" : "Tech Stack"}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                <p className="text-primary text-base font-medium mb-6">{service.subtitle}</p>
              </div>

              <AnimatePresence initial={false}>
                {(expandedId === service.id || (typeof window !== 'undefined' && window.innerWidth >= 768)) && (
                  <motion.div
                    initial={typeof window !== 'undefined' && window.innerWidth < 768 ? { height: 0, opacity: 0 } : false}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="md:!h-auto md:!opacity-100 overflow-hidden"
                  >
                    <div className="px-6 pb-6 md:px-8 md:pb-8">
                      <ul className="space-y-6">
                        {service.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex gap-4">
                            <div className="mt-1 w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0">
                              {point.icon}
                            </div>
                            <p className="text-on-surface-variant text-base leading-relaxed">
                              {point.text}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
