/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { X, Send, MessageCircle, Mail, Github } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const { t } = useLanguage();

  const socials = [
    { name: "Telegram", icon: <Send className="w-6 h-6" />, href: "#", color: "hover:text-[#229ED9]" },
    { name: "WhatsApp", icon: <MessageCircle className="w-6 h-6" />, href: "#", color: "hover:text-[#25D366]" },
    { name: "Email", icon: <Mail className="w-6 h-6" />, href: "mailto:contact@nikita.dev", color: "hover:text-primary" },
    { name: "GitHub", icon: <Github className="w-6 h-6" />, href: "#", color: "hover:text-white" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md tech-card p-8 rounded-2xl shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">{t.popup.title}</h3>
              <p className="text-on-surface-variant">{t.popup.subtitle}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-surface-container-low border border-outline-variant/30 transition-all duration-300 group ${social.color} hover:border-primary/50 hover:bg-surface-container-high`}
                >
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {social.icon}
                  </div>
                  <span className="font-display font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
