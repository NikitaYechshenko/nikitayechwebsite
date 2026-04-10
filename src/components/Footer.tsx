/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Cat } from "lucide-react";
import confetti from "canvas-confetti";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const handleCatClick = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00ff00', '#ffffff', '#22c55e']
    });
  };

  const links = [
    { name: "Telegram", href: "https://t.me/nikitayech" },
    { name: "WhatsApp", href: "https://wa.me/77078306593" },
    { name: "Email", href: "mailto:nikitayech@gmail.com" },
    { name: "GitHub", href: "https://github.com/NikitaYechshenko" },
  ];

  return (
    <footer className="w-full border-t border-white/5 bg-surface-container-lowest font-sans text-sm tracking-wide relative overflow-hidden">
      {/* Cat Icon for Confetti */}
      <div className="absolute right-8 top-8 hidden xl:block">
        <button
          onClick={handleCatClick}
          className="p-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-primary/60 hover:text-primary hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-2xl group"
          title="Click for a surprise!"
        >
          <Cat className="w-6 h-6" />
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-primary text-black text-sm font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            MEOW!
          </div>
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 gap-6 max-w-7xl mx-auto">
        <div className="font-display text-lg font-bold text-on-surface">
          Nikita.Dev
        </div>
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="text-on-surface-variant">
            © {new Date().getFullYear()} Nikita.Dev | {t.footer.rights}
          </div>
          <div className="text-sm font-mono text-on-surface-variant/60 uppercase tracking-widest">
            email: nikitayech | telegram: @nikitayech
          </div>
        </div>
        <div className="flex gap-6 md:gap-8 flex-wrap justify-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              aria-label={`Visit Nikita's ${link.name}`}
              className="text-on-surface-variant hover:text-primary transition-colors hover:translate-y-[-2px] py-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
