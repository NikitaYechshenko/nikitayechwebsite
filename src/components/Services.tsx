/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, Cpu, ChevronDown, Server, ShieldCheck, Rocket, Globe, Database, Terminal, Box, Layers, Workflow } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const services = [
    {
      id: "FAST-WEB",
      title: t.services.fastWeb.title,
      subtitle: t.services.fastWeb.subtitle,
      icon: <Rocket className="text-primary w-10 h-10" />,
      points: [
        { text: t.services.fastWeb.p1, icon: <Zap className="w-4 h-4 text-primary" /> },
        { text: t.services.fastWeb.p2, icon: <Globe className="w-4 h-4 text-primary" /> },
        { text: t.services.fastWeb.p3, icon: <ShieldCheck className="w-4 h-4 text-primary" /> },
        { text: t.services.fastWeb.p4, icon: <BarChart3 className="w-4 h-4 text-primary" /> },
      ],
      className: "md:col-span-5",
    },
    {
      id: "CORE-TECH",
      title: t.services.core.title,
      subtitle: t.services.core.subtitle,
      icon: <Server className="text-secondary w-10 h-10" />,
      sections: [
        {
          title: "Backend",
          icon: <Database className="w-5 h-5 text-secondary" />,
          content: t.services.core.backend,
        },
        {
          title: "DevOps",
          icon: <Terminal className="w-5 h-5 text-secondary" />,
          points: [
            { text: t.services.core.p1, icon: <Terminal className="w-3 h-3" /> },
            { text: t.services.core.p2, icon: <Box className="w-3 h-3" /> },
            { text: t.services.core.p3, icon: <Layers className="w-3 h-3" /> },
            { text: t.services.core.p4, icon: <Workflow className="w-3 h-3" /> },
            { text: t.services.core.p5, icon: <ShieldCheck className="w-3 h-3" /> },
          ],
        }
      ],
      className: "md:col-span-7",
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
          {/* Fast Web Production Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 tech-card group flex flex-col overflow-hidden"
          >
            {/* Mobile Header */}
            <button 
              onClick={() => setExpandedId(expandedId === "FAST-WEB" ? null : "FAST-WEB")}
              className="md:hidden w-full p-6 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-4">
                <Rocket className="text-primary w-8 h-8" />
                <div>
                  <span className="font-mono text-[10px] text-on-surface-variant block mb-1">FAST-WEB</span>
                  <h3 className="text-lg font-bold leading-tight">{t.services.fastWeb.title}</h3>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${expandedId === "FAST-WEB" ? "rotate-180" : ""}`} />
            </button>

            {/* Desktop Header */}
            <div className="hidden md:block p-8 pb-4">
              <div className="flex justify-between items-start mb-8">
                <Rocket className="text-primary w-10 h-10" />
                <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Fast Track</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{t.services.fastWeb.title}</h3>
              <p className="text-primary text-sm font-medium mb-6">{t.services.fastWeb.subtitle}</p>
            </div>

            <AnimatePresence initial={false}>
              {(expandedId === "FAST-WEB" || (typeof window !== 'undefined' && window.innerWidth >= 768)) && (
                <motion.div
                  initial={typeof window !== 'undefined' && window.innerWidth < 768 ? { height: 0, opacity: 0 } : false}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="md:!h-auto md:!opacity-100 overflow-hidden"
                >
                  <div className="px-6 pb-6 md:px-8 md:pb-8">
                    <div className="mb-6 p-3 bg-primary/5 border-l-2 border-primary text-[11px] text-on-surface-variant italic">
                      {t.services.fastWeb.fixedPrice}
                    </div>
                    <ul className="space-y-6">
                      {services[0].points?.map((point, pIdx) => (
                        <li key={pIdx} className="flex gap-4">
                          <div className="mt-1 w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0">
                            {point.icon}
                          </div>
                          <p className="text-on-surface-variant text-sm leading-relaxed">
                            {point.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 text-[10px] text-on-surface-variant/50">
                      {t.services.fastWeb.footnote}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Core Backend & DevOps Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-7 tech-card group flex flex-col overflow-hidden"
          >
            {/* Mobile Header */}
            <button 
              onClick={() => setExpandedId(expandedId === "CORE-TECH" ? null : "CORE-TECH")}
              className="md:hidden w-full p-6 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-4">
                <Server className="text-secondary w-8 h-8" />
                <div>
                  <span className="font-mono text-[10px] text-on-surface-variant block mb-1">CORE-TECH</span>
                  <h3 className="text-lg font-bold leading-tight">{t.services.core.title}</h3>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-secondary transition-transform duration-300 ${expandedId === "CORE-TECH" ? "rotate-180" : ""}`} />
            </button>

            {/* Desktop Header */}
            <div className="hidden md:block p-8 pb-4">
              <div className="flex justify-between items-start mb-8">
                <Server className="text-secondary w-10 h-10" />
                <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Deep Tech</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{t.services.core.title}</h3>
              <p className="text-secondary text-sm font-medium mb-6">{t.services.core.subtitle}</p>
            </div>

            <AnimatePresence initial={false}>
              {(expandedId === "CORE-TECH" || (typeof window !== 'undefined' && window.innerWidth >= 768)) && (
                <motion.div
                  initial={typeof window !== 'undefined' && window.innerWidth < 768 ? { height: 0, opacity: 0 } : false}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="md:!h-auto md:!opacity-100 overflow-hidden"
                >
                  <div className="px-6 pb-6 md:px-8 md:pb-8 space-y-8">
                    {/* Backend Section */}
                    <div className="p-5 rounded-lg bg-surface-container-highest/50 border border-outline-variant/20">
                      <div className="flex items-center gap-3 mb-3">
                        <Database className="w-5 h-5 text-secondary" />
                        <h4 className="font-bold text-on-surface">Backend</h4>
                      </div>
                      <p className="text-on-surface-variant text-sm leading-relaxed">
                        {t.services.core.backend}
                      </p>
                    </div>

                    {/* DevOps Section */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Terminal className="w-5 h-5 text-secondary" />
                        <h4 className="font-bold text-on-surface">DevOps</h4>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          t.services.core.p1,
                          t.services.core.p2,
                          t.services.core.p3,
                          t.services.core.p4,
                          t.services.core.p5,
                        ].map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-3">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                            <span className="text-on-surface-variant text-xs leading-tight">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Missing icon import in the previous thought block
import { BarChart3 } from "lucide-react";
