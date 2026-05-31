/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Mail, 
  User, 
  Home, 
  GraduationCap, 
  Terminal,
  Menu,
  X
} from "lucide-react";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const [isAtTop, setIsAtTop] = React.useState(true);
  const lastScrollY = React.useRef(0);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About & Teaching", icon: User },
    { id: "publications", label: "Publications", icon: BookOpen },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  React.useEffect(() => {
    const scroller = document.getElementById("main-scroller");
    if (!scroller) return;

    const handleScroll = () => {
      const currentScrollY = scroller.scrollTop;
      const atTop = currentScrollY < 50;

      setIsAtTop(atTop);

      if (atTop) {
        // At top: navbar hidden (transparent hero visible)
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling UP: show navbar
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 5) {
        // Scrolling DOWN: hide navbar
        setIsVisible(false);
        setIsOpen(false);
      }

      lastScrollY.current = currentScrollY;
    };

    scroller.addEventListener("scroll", handleScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine navbar background style
  const navBg = isAtTop
    ? "bg-transparent border-transparent shadow-none"
    : "bg-[#1A202C]/95 backdrop-blur-md border-[#D4AF37]/20 shadow-lg";

  return (
    <AnimatePresence>
      {(isVisible || isAtTop) && (
        <motion.nav
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          exit={{ y: -80 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`fixed top-0 left-0 right-0 z-50 border-b text-white transition-colors duration-300 ${navBg}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center h-16 relative">
              
              {/* Desktop Nav Items */}
              <div className="hidden md:flex items-center justify-center gap-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setCurrentPage(item.id)}
                      className={`relative px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 flex items-center gap-2 group cursor-pointer ${
                        isActive ? "text-[#D4AF37]" : "text-slate-300 hover:text-white"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-[#D4AF37]" : "text-slate-400 group-hover:text-amber-500"}`} />
                      <span>{item.label}</span>
                      
                      {/* Sliding active bar */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#A0522D]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Mobile hamburger triggers */}
              <div className="md:hidden absolute right-0 flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800/50 focus:outline-none cursor-pointer"
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Drawer menu */}
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-[#1A202C]/95 backdrop-blur-md border-b border-[#D4AF37]/20 px-2 pt-2 pb-4 space-y-1 sm:px-3"
            >
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-md font-medium text-base flex items-center gap-3 transition-colors ${
                      isActive 
                        ? "bg-[#A0522D] text-[#E2E8FO] border-l-4 border-[#D4AF37]" 
                        : "text-slate-300 hover:text-white hover:bg-slate-800"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? "text-[#E2E8FO]" : "text-slate-400"}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </motion.div>
          )}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
