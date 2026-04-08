/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Layers, Cpu, Terminal } from "lucide-react";

export default function Services() {
  return (
    <section className="py-32 px-8 bg-surface-container-low" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineering Services</h2>
          <div className="w-12 h-1 bg-primary"></div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-6">
          {/* Service 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-8 p-8 rounded-lg tech-card group"
          >
            <div className="flex justify-between items-start mb-12">
              <Layers className="text-primary w-10 h-10" />
              <span className="font-mono text-[10px] text-on-surface-variant">SRV-01</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Web-разработка «под ключ»</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <ul className="space-y-2 text-on-surface-variant text-sm">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary"></span> Speed: 1 day deployment</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary"></span> AI-integrated architecture</li>
              </ul>
              <ul className="space-y-2 text-on-surface-variant text-sm">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary"></span> Free hosting/WAF security</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary"></span> SEO-ready optimization</li>
              </ul>
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 p-8 rounded-lg tech-card group"
          >
            <div className="flex justify-between items-start mb-12">
              <Cpu className="text-secondary w-10 h-10" />
              <span className="font-mono text-[10px] text-on-surface-variant">SRV-02</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Backend & Интеграции</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Python 3.12+, AI Agents, complex REST/GraphQL APIs, WebSockets and high-performance gRPC communication layers.
            </p>
          </motion.div>

          {/* Service 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-12 p-10 rounded-lg relative overflow-hidden tech-card group bg-surface-container-highest/40"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Terminal className="w-[120px] h-[120px]" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <span className="font-mono text-[10px] text-primary mb-2 block">SRV-03</span>
                <h3 className="text-3xl font-bold mb-4">DevOps & Системный инжиниринг</h3>
                <p className="text-on-surface-variant mb-6">
                  Автоматизация CI/CD пайплайнов, облачная инфраструктура Azure/GCP, обеспечение безопасности и отказоустойчивости корпоративного уровня.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Docker", "K8s", "Terraform"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-background/50 rounded border border-outline-variant/30 text-xs font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
