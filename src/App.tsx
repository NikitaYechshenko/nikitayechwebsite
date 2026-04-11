/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { MotionConfig } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ProjectGallery from "./components/ProjectGallery";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ContactPopup from "./components/ContactPopup";
import { LanguageProvider } from "./context/LanguageContext";
import { ContextProvider } from "./context/ContextContext";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleViewportChange = () => setIsMobile(mediaQuery.matches);

    handleViewportChange();
    mediaQuery.addEventListener("change", handleViewportChange);

    return () => mediaQuery.removeEventListener("change", handleViewportChange);
  }, []);

  return (
    <LanguageProvider>
      <ContextProvider>
        <MotionConfig reducedMotion={isMobile ? "always" : "never"}>
          <div className="min-h-screen min-h-[100svh] aurora-bg selection:bg-primary/30 selection:text-primary">
            <Navbar />
            <main>
              <Hero onContactClick={() => setIsContactOpen(true)} />
              <Services />
              <ProjectGallery />
              <About />
              <CTA onContactClick={() => setIsContactOpen(true)} />
            </main>
            <Footer />
            <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
          </div>
        </MotionConfig>
      </ContextProvider>
    </LanguageProvider>
  );
}
