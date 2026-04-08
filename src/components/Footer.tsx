/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    { name: "Telegram", href: "#" },
    { name: "WhatsApp", href: "#" },
    { name: "Email", href: "#" },
    { name: "GitHub", href: "#" },
  ];

  return (
    <footer className="w-full border-t border-white/5 bg-surface-container-lowest font-sans text-sm tracking-wide">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 gap-6 max-w-7xl mx-auto">
        <div className="font-display text-lg font-bold text-on-surface">
          Nikita.Dev
        </div>
        <div className="text-on-surface-variant">
          © {new Date().getFullYear()} Nikita.Dev | {t.footer.rights}
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
