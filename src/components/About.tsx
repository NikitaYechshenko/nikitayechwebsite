/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function About() {
  return (
    <section className="py-32 px-8 bg-surface-container-low overflow-hidden relative" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
        <div className="w-full md:w-1/2">
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
              <h2 className="text-4xl font-bold mb-8">System Architect Approach</h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  I am an alumnus of <span className="text-on-surface font-bold">HFU University (Germany)</span>, specifically the <span className="text-on-surface font-bold">IBS (International Business School)</span> faculty. My background combines deep technical engineering with international management standards.
                </p>
                <p>
                  My approach is purely <span className="text-primary italic">systemic</span>. I don't just write code; I design sustainable architectures that can scale, survive failures, and adapt to business needs. Every line of Python or configuration in Azure follows strict international production standards.
                </p>
                <div className="flex gap-12 pt-4">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-secondary font-bold mb-1">English</div>
                    <div className="text-2xl font-bold">C1</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-secondary font-bold mb-1">German</div>
                    <div className="text-2xl font-bold">B1</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded flex items-center justify-center border border-outline-variant/10 p-4 backdrop-blur-md bg-surface-container-high/40"
          >
            <img 
              alt="Code quality illustration" 
              className="w-full h-full object-cover rounded opacity-40 hover:opacity-100 transition-opacity" 
              src="https://picsum.photos/seed/code/800/1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="aspect-[4/5] rounded flex items-center justify-center border border-outline-variant/10 p-4 mt-8 backdrop-blur-md bg-surface-container-high/40"
          >
            <img 
              alt="Germany architecture context" 
              className="w-full h-full object-cover rounded opacity-40 hover:opacity-100 transition-opacity" 
              src="https://picsum.photos/seed/germany/800/1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
