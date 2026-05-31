/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import PublicationsPage from "./components/PublicationsPage";
import ContactPage from "./components/ContactPage";

export default function App() {
  const [currentPage, setCurrentPage] = React.useState<string>("home");
  const isScrollingRef = React.useRef<boolean>(false);

  const scrollToSection = (id: string) => {
    isScrollingRef.current = true;
    setCurrentPage(id);
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    // Release the observer block after scroll completes
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  // Setup Intersection Observer to automatically highlight active Navbar tabs on user scroll
  React.useEffect(() => {
    const sections = ["home", "about", "publications", "contact"];
    const observers = sections.map((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          // Only update tab if we aren't currently triggering an explicit click-scroll
          if (entry.isIntersecting && !isScrollingRef.current) {
            setCurrentPage(sectionId);
          }
        },
        {
          root: document.getElementById("main-scroller"),
          rootMargin: "-30% 0px -55% 0px", // triggers when section accounts for substantial viewport height
          threshold: 0
        }
      );
      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, []);

  return (
    <div id="main-scroller" className="h-screen overflow-y-auto overflow-x-hidden snap-y snap-proximity flex flex-col bg-[#E2E8FO] font-sans selection:bg-[#A0522D] selection:text-white select-none scroll-smooth relative">
      
      {/* Dynamic Brand Navigation Block */}
      <Navbar currentPage={currentPage} setCurrentPage={scrollToSection} />

      {/* Primary Stacked Sections Stream displaying his full portfolio & CV */}
      <main className="flex-grow">
        
        <div id="home">
          <HomePage setCurrentPage={scrollToSection} />
        </div>
        
        <div id="about" className="bg-white/45">
          <AboutPage setCurrentPage={scrollToSection} />
        </div>

        <div id="publications" className="bg-[#E2E8FO]/30">
          <PublicationsPage setCurrentPage={scrollToSection} />
        </div>

        <div id="contact" className="bg-white">
          <ContactPage />
        </div>

      </main>

      {/* Footer block */}
      <Footer setCurrentPage={scrollToSection} />
      
    </div>
  );
}
