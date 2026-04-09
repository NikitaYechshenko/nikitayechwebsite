/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Send, FileText, Github } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useViewContext } from "../context/ContextContext";

export default function CTA({ onContactClick }: { onContactClick: () => void }) {
  const { t } = useLanguage();
  const { viewContext } = useViewContext();

  return (
    <section className="py-32 px-8" id="contacts">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary border border-primary/20 rounded mb-8 font-mono text-xs uppercase tracking-widest">
            {t.cta.badge}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">
            {t.cta.title}
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={onContactClick}
              className="flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-bold rounded hover:scale-105 transition-transform shadow-lg shadow-primary/10"
            >
              <Send className="w-5 h-5" />
              {t.cta.startBtn}
            </button>
            {viewContext === "tech" && (
              <a 
                href="https://github.com/NikitaYechshenko"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-10 py-5 bg-surface-container-high text-on-surface font-bold rounded hover:bg-surface-container-highest transition-colors border border-outline-variant/30"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
