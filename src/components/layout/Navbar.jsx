"use client";

import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar({
  isLangEn,
  setIsLangEn,
  setIsMenuOpen,
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="w-full max-w-[1680px] mx-auto px-3 sm:px-6 md:px-12 lg:px-16 py-2 sm:py-3 flex items-center justify-between z-20"
    >
      {/* Left Navigation Links */}
      <nav className="hidden lg:flex items-center space-x-6 lg:space-x-8 text-xs sm:text-sm font-medium tracking-wide text-slate-700">
        <a href="/" className="hover:text-slate-950 transition-colors relative group py-1">
          <span>Home</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full" />
        </a>
        <a href="/#the-shift" className="hover:text-slate-950 transition-colors relative group py-1">
          <span>The Shift</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full" />
        </a>
        <a href="/#how-we-drive-impact" className="hover:text-slate-950 transition-colors relative group py-1">
          <span>Impact</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full" />
        </a>
        <a href="/#innovation" className="hover:text-slate-950 transition-colors relative group py-1">
          <span>Innovation</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full" />
        </a>
        <a href="/partnerships" className="hover:text-slate-950 transition-colors relative group py-1">
          <span>Partnerships</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full" />
        </a>
        <a href="/about" className="hover:text-slate-950 transition-colors relative group py-1">
          <span>About Us</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full" />
        </a>
      </nav>

      {/* Mobile Hamburger / Left Menu */}
      <div className="flex lg:hidden items-center">
        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Navigation Menu"
          className="p-2 min-h-[44px] min-w-[44px] text-slate-800 hover:text-black rounded-lg hover:bg-slate-200/60 transition flex items-center justify-center"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Center Logo */}
      <div className="flex items-center justify-center">
        <a href="/" className="flex items-center space-x-1 font-sans text-xl sm:text-2xl font-bold tracking-tight text-slate-950 group">
          <span className="group-hover:opacity-85 transition-opacity">KliSus</span>
          <span className="text-[10px] font-sans tracking-widest text-slate-500 ml-0.5 transform group-hover:rotate-12 transition-transform">✈</span>
        </a>
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        {/* Language Switch Toggle */}
        <button
          onClick={() => setIsLangEn(!isLangEn)}
          className="flex items-center bg-slate-950 text-white rounded-full p-0.5 pl-2 sm:pl-2.5 pr-0.5 text-[11px] sm:text-xs font-semibold space-x-1 sm:space-x-1.5 border border-slate-800 shadow-sm hover:bg-slate-850 transition"
        >
          <span>{isLangEn ? "EN" : "FR"}</span>
          <span
            className={`w-3.5 h-3.5 rounded-full bg-white transition-transform ${
              isLangEn ? "translate-x-0" : "translate-x-0.5"
            }`}
          />
        </button>

        {/* Build with Us Link */}
        <a
          href="#build"
          className="hidden sm:inline-block text-xs sm:text-sm font-semibold text-slate-950 underline underline-offset-4 decoration-2 decoration-slate-400 hover:decoration-slate-950 transition-all"
        >
          Build with Us
        </a>

        {/* Circular Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Full Navigation Menu"
          className="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-slate-950 text-white flex items-center justify-center hover:bg-slate-800 transition-transform duration-200 hover:scale-105 shadow-md active:scale-95"
        >
          <Menu className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
        </button>
      </div>
    </motion.header>
  );
}
