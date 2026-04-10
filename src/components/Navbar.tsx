/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Globe, Briefcase, Cpu } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useViewContext } from "../context/ContextContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { viewContext, setViewContext } = useViewContext();

  const toggleLanguage = () => {
    setLanguage(language === "ru" ? "en" : "ru");
  };

  const navItems = [
    { name: t.nav.services, id: "services" },
    { name: t.nav.stack, id: "projects" },
    { name: t.nav.about, id: "about" },
    { name: t.nav.contacts, id: "contacts" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav font-display tracking-tight">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <div className="text-xl font-bold tracking-tighter text-primary">
            NikitaYech
          </div>

          {/* Context Switcher */}
          <div className="hidden lg:flex items-center bg-surface-container-low p-1 rounded-full border border-outline-variant/30">
            <button
              onClick={() => setViewContext("business")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold uppercase transition-all ${
                viewContext === "business"
                  ? "bg-primary text-on-primary-container shadow-lg"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              <Briefcase className="w-3 h-3" />
              {t.nav.modeBusiness}
            </button>
            <button
              onClick={() => setViewContext("tech")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold uppercase transition-all ${
                viewContext === "tech"
                  ? "bg-primary text-on-primary-container shadow-lg"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              <Cpu className="w-3 h-3" />
              {t.nav.modeTech}
            </button>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-on-surface-variant hover:text-primary transition-colors text-sm"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-lg">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#8ee4af]"></span>
            <span className="tech-label">{t.nav.status}</span>
          </div>
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
          >
            <Globe className="w-5 h-5" />
            <span className="text-sm font-bold uppercase">{language}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
