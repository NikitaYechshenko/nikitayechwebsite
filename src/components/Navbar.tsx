/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Globe } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav font-display tracking-tight">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-tighter text-primary">
          NikitaYech
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {["Services", "Stack", "About", "Contacts"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-on-surface-variant hover:text-primary transition-colors text-sm"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-lg">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#8ee4af]"></span>
            <span className="tech-label">System: Online</span>
          </div>
          <button className="text-primary hover:opacity-80 transition-opacity">
            <Globe className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
