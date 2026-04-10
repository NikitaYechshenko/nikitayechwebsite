/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useViewContext } from "../context/ContextContext";
import { CheckCircle2, Terminal as TerminalIcon, Github, Code2, Database, ShieldCheck } from "lucide-react";

export default function Hero({ onContactClick }: { onContactClick: () => void }) {
  const { t } = useLanguage();
  const { viewContext } = useViewContext();
  const [sessionId, setSessionId] = useState("8821-YX");

  useEffect(() => {
    const randomId = Math.floor(1000 + Math.random() * 9000);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomSuffix = chars[Math.floor(Math.random() * chars.length)] + chars[Math.floor(Math.random() * chars.length)];
    setSessionId(`${randomId}-${randomSuffix}`);
  }, []);

  const content = viewContext === "business" ? t.hero.business : t.hero.tech;

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-8 pt-24 pb-12 max-w-7xl mx-auto overflow-hidden relative">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 z-10"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="lg:hidden w-16 h-16 rounded-xl overflow-hidden border border-primary/30 bg-surface-container-low shrink-0 shadow-lg">
              <img 
                alt="Nikita Backend DevOps Engineer Avatar" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida/ADBb0uiOPgRjiQvE594aWwHCG3zmm_7u0YQDP8D4IP4KSHOLSJVB412_wIRtgH_ErgelAY_8NcI-OtrEYUI1x7WU3xJqDrU0ypkpeCTVNElnwn9kuNotIN9-jjmDqxEnLe6gBzgP5qn_vNkSapEnAjIzwTwW9YTYitHldWqWcfaCmPMAixuBqlpLDyaoGb7nEvxVjLPyI0jlf6aCD6zgtwHma4WY2MMcWAaagFQ_UwJ43nK4v8MMd82gGcZWwLKag4p11HnaKK-p88pi"
                referrerPolicy="no-referrer"
                width={64}
                height={64}
                loading="eager"
              />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-low border border-outline-variant/30 rounded">
              <span className="text-secondary text-xs font-mono">
                {viewContext === "business" ? "status: ready_to_launch" : "deployed: successful"}
              </span>
            </div>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={viewContext}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-mono text-primary/80 mb-2 uppercase tracking-tight">
                  {content.name}
                </h1>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tighter bg-gradient-to-r from-on-background to-on-surface-variant bg-clip-text text-transparent">
                  {content.role}
                </h2>
              </div>
              
              <div className="flex flex-col gap-4 mb-12">
                {[content.bullet1, content.bullet2, content.bullet3].map((bullet, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-3 text-on-surface-variant"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-xl md:text-2xl font-medium">{bullet}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={onContactClick}
              className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-bold rounded hover:shadow-[0_0_30px_rgba(142,228,175,0.2)] transition-all active:scale-95 duration-100"
            >
              {t.hero.contactBtn}
            </button>
            {viewContext === "tech" && (
              <a 
                href="https://github.com/NikitaYechshenko"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-surface-container-highest text-primary font-bold rounded hover:bg-surface-container-high transition-all active:scale-95 duration-100 border border-outline-variant/30 flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            )}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="hidden lg:block lg:col-span-5 relative"
        >
          <div className="aspect-square relative flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"></div>
            
            {viewContext === "tech" ? (
              <div className="relative z-10 w-full max-w-[420px] aspect-square rounded-2xl overflow-hidden border border-primary/30 bg-black/60 p-6 shadow-2xl font-mono text-[10px] text-primary/80">
                <div className="flex justify-between items-center mb-4 border-b border-primary/20 pb-2">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  </div>
                  <span>nikita@dev: ~</span>
                </div>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <span className="text-secondary">$</span>
                    <span>kubectl get pods -n production</span>
                  </div>
                  <div className="pl-4 text-on-surface-variant/60">
                    <div>api-v1-8821-yx   1/1   Running   0   12d</div>
                    <div>worker-77a2-bc   1/1   Running   0   12d</div>
                    <div>db-cluster-0     1/1   Running   0   45d</div>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-secondary">$</span>
                    <span>terraform plan</span>
                  </div>
                  <div className="pl-4 text-primary/40">
                    <div>Plan: 2 to add, 0 to change, 0 to destroy.</div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-primary/10 flex justify-around opacity-40">
                    <Code2 className="w-8 h-8" />
                    <Database className="w-8 h-8" />
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative z-10 w-full max-w-[420px] aspect-square rounded-2xl overflow-hidden border border-primary/30 bg-surface-container-low p-3 shadow-2xl">
                <img 
                  alt="Nikita Backend DevOps Engineer - Pixel Art Avatar" 
                  className="w-full h-full object-cover rounded-xl" 
                  src="https://lh3.googleusercontent.com/aida/ADBb0uiOPgRjiQvE594aWwHCG3zmm_7u0YQDP8D4IP4KSHOLSJVB412_wIRtgH_ErgelAY_8NcI-OtrEYUI1x7WU3xJqDrU0ypkpeCTVNElnwn9kuNotIN9-jjmDqxEnLe6gBzgP5qn_vNkSapEnAjIzwTwW9YTYitHldWqWcfaCmPMAixuBqlpLDyaoGb7nEvxVjLPyI0jlf6aCD6zgtwHma4WY2MMcWAaagFQ_UwJ43nK4v8MMd82gGcZWwLKag4p11HnaKK-p88pi"
                  referrerPolicy="no-referrer"
                  width={420}
                  height={420}
                  loading="eager"
                />
                <div className="absolute bottom-6 right-6 flex flex-col gap-1 items-end font-mono text-sm text-primary/70 bg-black/40 backdrop-blur-md p-2 rounded">
                  <span>ID: {sessionId}</span>
                  <span>LOC: HFU, DE</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
