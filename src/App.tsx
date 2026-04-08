/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ContactPopup from "./components/ContactPopup";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen aurora-bg selection:bg-primary/30 selection:text-primary">
        <Navbar />
        <main>
          <Hero onContactClick={() => setIsContactOpen(true)} />
          <Services />
          <TechStack />
          <About />
          <CTA onContactClick={() => setIsContactOpen(true)} />
        </main>
        <Footer />
        <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      </div>
    </LanguageProvider>
  );
}
