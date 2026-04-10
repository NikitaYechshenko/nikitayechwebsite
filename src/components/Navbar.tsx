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
      <div className="px-3 sm:px-6 md:px-8 py-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-3 md:gap-6">
          <div className="text-base sm:text-xl font-bold tracking-tighter text-primary shrink-0 whitespace-nowrap">
            NikitaYech
          </div>

          <div className="flex justify-center min-w-0 px-1">
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

            <div className="lg:hidden inline-flex items-center bg-surface-container-low p-1 rounded-full border border-outline-variant/30 shadow-lg w-full max-w-[220px] overflow-hidden">
              <button
                onClick={() => setViewContext("business")}
                className={`flex-1 min-w-0 flex items-center justify-center gap-1 px-1.5 sm:px-2 py-1.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase transition-all whitespace-nowrap ${
                  viewContext === "business"
                    ? "bg-primary text-on-primary-container"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                <Briefcase className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                {t.nav.modeBusiness}
              </button>
              <button 
                onClick={() => setViewContext("tech")}
                className={`flex-1 min-w-0 flex items-center justify-center gap-1 px-1.5 sm:px-2 py-1.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase transition-all whitespace-nowrap ${
                  viewContext === "tech"
                    ? "bg-primary text-on-primary-container"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                <Cpu className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                {t.nav.modeTech}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-primary hover:opacity-80 transition-opacity"
            >
              <Globe className="hidden sm:block w-4 h-4" />
              <span className="text-xs sm:text-sm font-bold uppercase">{language}</span>
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 mt-3">
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
      </div>
    </nav>
  );
}
