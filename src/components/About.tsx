/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-8 bg-surface-container-low overflow-hidden relative" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute -top-10 -left-10 text-[12rem] font-bold text-surface-container opacity-30 select-none font-display">
            01
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl font-bold mb-8">{t.about.title}</h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              <p>
                {t.about.p1}
              </p>
              <p>
                {t.about.p2}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
