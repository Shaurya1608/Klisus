"use client";

import { Compass, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavMenuOverlay({ isMenuOpen, setIsMenuOpen }) {
  const menuLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "The Shift", href: "/#the-shift" },
    { label: "Impact", href: "/#how-we-drive-impact" },
    { label: "Innovation", href: "/#innovation" },
    { label: "Partnerships", href: "/partnerships" },
  ];

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-12 text-white overflow-hidden"
        >
          {/* TOP BAR */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center justify-between max-w-6xl mx-auto w-full z-10"
          >
            <div className="flex items-center space-x-2 text-white/90 font-sans">
              <Compass className="w-5 h-5 text-blue-400 animate-spin-slow" />
              <span className="font-bold text-xs sm:text-sm tracking-widest uppercase text-blue-300">
                KliSus System Navigation
              </span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Navigation Overlay"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all border border-white/20 hover:scale-105 active:scale-95"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </motion.div>

          {/* STAGGERED MENU LINKS CONTAINER */}
          <div className="max-w-4xl mx-auto w-full my-auto py-8 text-center z-10">
            <nav className="flex flex-col space-y-4 sm:space-y-6 font-sans text-2xl sm:text-5xl uppercase tracking-wider font-light">
              {menuLinks.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + idx * 0.08,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group inline-flex items-center space-x-3 text-slate-300 hover:text-white transition-all duration-300 py-1"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {link.label}
                    </span>
                    <ArrowRight className="w-5 h-5 sm:w-8 sm:h-8 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 text-blue-400 transition-all duration-300" />
                  </a>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* FOOTER HINT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="max-w-6xl mx-auto w-full text-center text-xs text-white/40 border-t border-white/10 pt-4 z-10"
          >
            Click top right <span className="text-white/80 font-bold">X</span> or select a link to navigate
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
