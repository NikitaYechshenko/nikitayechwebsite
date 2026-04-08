/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Code, Database, Cloud } from "lucide-react";

const stack = [
  {
    title: "Languages & Frameworks",
    icon: <Code className="w-4 h-4" />,
    items: [
      { name: "Python 3.12+", level: "Expert", levelColor: "bg-primary/10 text-primary" },
      { name: "FastAPI", level: "Advanced", levelColor: "bg-surface-variant text-on-surface-variant" },
      { name: "Django Ninja", level: "Advanced", levelColor: "bg-surface-variant text-on-surface-variant" },
    ],
  },
  {
    title: "Databases & Data",
    icon: <Database className="w-4 h-4" />,
    items: [
      { name: "PostgreSQL", level: "Primary", levelColor: "bg-surface-variant text-on-surface-variant" },
      { name: "Redis", level: "Caching", levelColor: "bg-surface-variant text-on-surface-variant" },
      { name: "Kafka / gRPC", level: "Messaging", levelColor: "bg-surface-variant text-on-surface-variant" },
    ],
  },
  {
    title: "Infrastructure",
    icon: <Cloud className="w-4 h-4" />,
    items: [
      { name: "Docker / Compose", level: "Containerization", levelColor: "bg-surface-variant text-on-surface-variant" },
      { name: "Azure / GCP", level: "Cloud", levelColor: "bg-surface-variant text-on-surface-variant" },
      { name: "CI/CD Pipelines", level: "Automation", levelColor: "bg-surface-variant text-on-surface-variant" },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="py-32 px-8" id="stack">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Stack</h2>
            <p className="text-on-surface-variant">Curated toolset for high-availability systems</p>
          </motion.div>
          <div className="text-right font-mono text-xs text-primary">v3.12.0_stable</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-outline-variant/20 rounded overflow-hidden shadow-2xl">
          {stack.map((column, idx) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 border-outline-variant/20 backdrop-blur-md bg-surface-container-lowest/40 ${
                idx !== stack.length - 1 ? "border-b md:border-b-0 md:border-r" : ""
              }`}
            >
              <h4 className="text-primary font-bold mb-6 flex items-center gap-2">
                {column.icon} {column.title}
              </h4>
              <div className="space-y-4">
                {column.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-center group">
                    <span className="text-on-surface-variant group-hover:text-on-surface transition-colors">
                      {item.name}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${item.levelColor}`}>
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
