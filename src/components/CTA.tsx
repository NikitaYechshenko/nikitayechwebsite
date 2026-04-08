/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Send, FileText } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 px-8" id="contacts">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary border border-primary/20 rounded mb-8 font-mono text-xs uppercase tracking-widest">
            READY FOR NEW DEPLOYMENTS
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">
            Let's build something indestructible.
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:contact@nikita.dev"
              className="flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-bold rounded hover:scale-105 transition-transform shadow-lg shadow-primary/10"
            >
              <Send className="w-5 h-5" />
              Start Project
            </a>
            <a 
              href="#"
              className="flex items-center justify-center gap-3 px-10 py-5 bg-surface-container-high text-on-surface font-bold rounded hover:bg-surface-container-highest transition-colors border border-outline-variant/30"
            >
              <FileText className="w-5 h-5" />
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
