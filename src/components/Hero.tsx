/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 pt-24 pb-12 max-w-7xl mx-auto overflow-hidden relative">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-surface-container-low border border-outline-variant/30 rounded">
            <span className="text-secondary text-xs font-mono">sys_init: successful</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter mb-6 bg-gradient-to-r from-on-background to-on-surface-variant bg-clip-text text-transparent">
            Никита Ещенко — Архитектор Backend-решений и DevOps-инженер
          </h1>
          
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
            Создаю высокопроизводительные системы: от быстрых лендингов с ИИ до отказоустойчивых микросервисных архитектур.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-bold rounded hover:shadow-[0_0_30px_rgba(142,228,175,0.2)] transition-all active:scale-95 duration-100">
              Заказать проект
            </button>
            <button className="px-8 py-4 bg-surface-container-highest text-primary font-bold rounded hover:bg-surface-container-high transition-all active:scale-95 duration-100 border border-outline-variant/30">
              Посмотреть резюме
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="aspect-square relative flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 w-full max-w-[420px] aspect-square rounded-2xl overflow-hidden border border-primary/30 bg-surface-container-low p-3 shadow-2xl">
              <img 
                alt="Pixel art avatar of Nikita" 
                className="w-full h-full object-cover rounded-xl" 
                src="https://lh3.googleusercontent.com/aida/ADBb0uiOPgRjiQvE594aWwHCG3zmm_7u0YQDP8D4IP4KSHOLSJVB412_wIRtgH_ErgelAY_8NcI-OtrEYUI1x7WU3xJqDrU0ypkpeCTVNElnwn9kuNotIN9-jjmDqxEnLe6gBzgP5qn_vNkSapEnAjIzwTwW9YTYitHldWqWcfaCmPMAixuBqlpLDyaoGb7nEvxVjLPyI0jlf6aCD6zgtwHma4WY2MMcWAaagFQ_UwJ43nK4v8MMd82gGcZWwLKag4p11HnaKK-p88pi"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 right-6 flex flex-col gap-1 items-end font-mono text-[10px] text-primary/70 bg-black/40 backdrop-blur-md p-2 rounded">
                <span>ID: 8821-YX</span>
                <span>LOC: HFU, DE</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
