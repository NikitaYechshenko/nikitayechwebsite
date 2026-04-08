/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Target, Cpu, ShieldCheck } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  const cards = [
    {
      ...t.about.card1,
      icon: <Target className="w-8 h-8 text-primary" />,
      delay: 0.1,
    },
    {
      ...t.about.card2,
      icon: <Cpu className="w-8 h-8 text-secondary" />,
      delay: 0.2,
    },
    {
      ...t.about.card3,
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      delay: 0.3,
    },
  ];

  return (
    <section className="py-32 px-6 md:px-8 bg-surface-container-low overflow-hidden relative" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.about.title}</h2>
          <div className="w-12 h-1 bg-primary"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: card.delay, duration: 0.5 }}
              className="tech-card p-8 flex flex-col h-full group hover:border-primary/50 transition-colors"
            >
              <div className="mb-6 p-4 rounded-xl bg-surface-container-high w-fit group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-on-surface">
                {card.title}
              </h3>
              <p className="text-primary font-medium text-sm mb-4 leading-snug">
                {card.subtitle}
              </p>
              <p className="text-on-surface-variant text-sm leading-relaxed mt-auto">
                {card.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
