/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { ExternalLink, Terminal, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "E-commerce Backend",
    tag: "Backend + DevOps",
    image: "https://picsum.photos/seed/backend/800/600",
    link: "#",
    status: "PROD-READY",
  },
  {
    title: "SaaS Landing Page",
    tag: "Fast Track",
    image: "https://picsum.photos/seed/saas/800/600",
    link: "#",
    status: "LIVE",
  },
  {
    title: "API Gateway Service",
    tag: "Architecture",
    image: "https://picsum.photos/seed/api/800/600",
    link: "#",
    status: "STABLE",
  },
  {
    title: "Crypto Dashboard",
    tag: "Full Stack AI",
    image: "https://picsum.photos/seed/crypto/800/600",
    link: "#",
    status: "DEPLOEYD",
  },
  {
    title: "WAF Protection Layer",
    tag: "Security",
    image: "https://picsum.photos/seed/security/800/600",
    link: "#",
    status: "ACTIVE",
  },
];

export default function ProjectGallery() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-32 px-6 md:px-8 bg-background overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto mb-12 flex justify-between items-end">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.language === 'ru' ? 'Витрина проектов' : 'Project Gallery'}
          </h2>
          <div className="w-12 h-1 bg-primary"></div>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-2 font-mono text-[10px] text-on-surface-variant">
            <Terminal className="w-3 h-3" />
            <span>SCROLL_TO_EXPLORE</span>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded border border-outline-variant/30 hover:border-primary/50 hover:bg-primary/5 transition-all text-on-surface-variant hover:text-primary"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded border border-outline-variant/30 hover:border-primary/50 hover:bg-primary/5 transition-all text-on-surface-variant hover:text-primary"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8 px-4 -mx-4"
        style={{ cursor: 'grab' }}
      >
        {projects.map((project, idx) => (
          <motion.a
            key={idx}
            href={project.link}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative flex-none w-[300px] md:w-[400px] aspect-[4/3] bg-surface-container-low rounded-xl border border-outline-variant/20 overflow-hidden snap-center tech-card"
          >
            {/* Image Layer */}
            <div className="absolute inset-0">
              <img 
                src={project.image} 
                alt={`${project.title} - ${project.tag} project by Nikita`}
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                referrerPolicy="no-referrer"
                width={400}
                height={300}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </div>

            {/* Content Layer */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
              <div className="flex justify-between items-start">
                <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-mono rounded border border-primary/20">
                  {project.status}
                </span>
                <ExternalLink className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-colors" />
              </div>

              <div>
                <span className="text-[10px] font-mono text-primary uppercase tracking-widest mb-2 block">
                  {project.tag}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-on-surface group-hover:translate-x-1 transition-transform">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-primary/5" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Mobile Swipe Hint */}
      <div className="md:hidden flex justify-center mt-4">
        <div className="w-12 h-1 bg-outline-variant/30 rounded-full overflow-hidden">
          <motion.div 
            animate={{ x: [-48, 48] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-1/2 h-full bg-primary"
          />
        </div>
      </div>
    </section>
  );
}
