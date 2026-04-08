/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const initialLogs = [
      "[INFO] Infrastructure status: Stable",
      "[INFO] Security layers: Active",
      "[INFO] Ready for new project...",
    ];
    setLogs(initialLogs);

    const interval = setInterval(() => {
      const newLogs = [
        `[INFO] System heartbeat: ${new Date().toLocaleTimeString()}`,
        `[INFO] Traffic monitor: 0 threats detected`,
        `[INFO] Cache hit ratio: 98.4%`,
        `[INFO] WAF Status: Filtering active`,
      ];
      setLogs(prev => [...prev.slice(-2), newLogs[Math.floor(Math.random() * newLogs.length)]]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const links = [
    { name: "Telegram", href: "https://t.me/nikitayech" },
    { name: "WhatsApp", href: "https://wa.me/77078306593" },
    { name: "Email", href: "mailto:nikitayech@gmail.com" },
    { name: "GitHub", href: "https://github.com/NikitaYechshenko" },
  ];

  return (
    <footer className="w-full border-t border-white/5 bg-surface-container-lowest font-sans text-sm tracking-wide relative overflow-hidden">
      {/* Terminal Log Window */}
      <div className="absolute right-4 top-4 hidden xl:block">
        <div className="bg-black/80 backdrop-blur-md border border-outline-variant/20 rounded p-3 w-64 font-mono text-[10px] shadow-2xl">
          <div className="flex gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
          <div className="space-y-1">
            {logs.map((log, i) => (
              <div key={i} className="text-primary/70 animate-pulse">
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 gap-6 max-w-7xl mx-auto">
        <div className="font-display text-lg font-bold text-on-surface">
          Nikita.Dev
        </div>
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="text-on-surface-variant">
            © {new Date().getFullYear()} Nikita.Dev | {t.footer.rights}
          </div>
          <div className="text-[10px] font-mono text-on-surface-variant/60 uppercase tracking-widest">
            email: nikitayech | telegram: @nikitayech
          </div>
        </div>
        <div className="flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors hover:translate-y-[-2px]"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
