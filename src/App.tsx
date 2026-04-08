/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen aurora-bg selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TechStack />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
