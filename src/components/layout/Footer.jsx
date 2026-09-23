"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full max-w-[1680px] mx-auto my-4 sm:my-8 px-2 sm:px-4 z-10">
      {/* LIGHT NAVY BLUE REFOKUS-STYLE CONTAINER CARD (100VH HEIGHT) */}
      <div className="relative w-full min-h-[calc(100vh-2rem)] rounded-[28px] sm:rounded-[40px] bg-gradient-to-b from-[#1b3456] via-[#142946] to-[#0f1f36] border border-blue-300/30 shadow-[0_20px_60px_rgba(15,31,54,0.3)] px-6 sm:px-10 md:px-14 py-8 sm:py-12 overflow-hidden text-white font-sans flex flex-col justify-between space-y-10 lg:space-y-0">
        
        {/* SUBTLE LIGHT NAVY GRID OVERLAY */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" 
          aria-hidden="true" 
        />

        {/* AMBIENT LIGHT BLUE RADIAL GLOW */}
        <div 
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[360px] bg-blue-400/15 blur-3xl pointer-events-none rounded-full" 
          aria-hidden="true" 
        />

        {/* TOP SECTION: DUAL BENTO ACTION CARDS */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch pt-2">
          
          {/* LEFT BENTO CARD: UP NEXT / PROJECTS & CASE STUDIES */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 bg-white/5 backdrop-blur-md rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 border border-white/10 hover:border-blue-400/40 transition-all flex flex-col justify-between space-y-8 group min-h-[220px]"
          >
            {/* CARD TOP ROW */}
            <div className="flex items-center justify-between text-xs text-blue-200/70 font-medium tracking-wide">
              <span>Up Next: Capabilities</span>
              <ArrowUpRight className="w-4 h-4 text-blue-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>

            {/* CARD CONTENT */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                Intelligence &amp; Case Studies
              </h3>
            </div>

            {/* CARD BOTTOM CAPTION */}
            <div className="flex items-end justify-between pt-4 border-t border-white/10 text-xs text-blue-200/60 leading-relaxed">
              <p className="max-w-[220px]">
                From Earth Observation to Climate Tech, our work speaks for itself.
              </p>
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse flex-shrink-0 mb-1" />
            </div>
          </motion.div>

          {/* RIGHT BENTO CARD: GET IN TOUCH / START A PROJECT */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 bg-white/5 backdrop-blur-md rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 border border-white/10 hover:border-blue-400/40 transition-all flex flex-col justify-between space-y-8 group min-h-[220px]"
          >
            {/* CARD TOP ROW */}
            <div className="flex items-center justify-between text-xs text-blue-200/70 font-medium tracking-wide">
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4 text-blue-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>

            {/* CARD MAIN CONTENT */}
            <div className="space-y-2">
              <p className="text-sm text-blue-200/80 font-normal">
                Let&apos;s get to it, together.
              </p>
              <h3 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-tight">
                Build What Comes Next.
              </h3>
            </div>

            {/* CTA BUTTON */}
            <div className="pt-2">
              <a
                href="#final-cta"
                className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-white text-slate-950 text-xs sm:text-sm font-semibold border border-blue-100 shadow-md hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97]"
              >
                <span>Contact us</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* MIDDLE SECTION: GIANT LOWERCASE BRAND + SITEMAP / SOCIALS */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-end my-auto py-6 sm:py-10">
          
          {/* LEFT: GIANT LOWERCASE BRAND LOGO */}
          <div className="lg:col-span-6">
            <h2 className="text-[18vw] sm:text-[14vw] lg:text-[9.5vw] font-bold tracking-tighter text-white uppercase leading-none select-none">
              klisus<span className="text-blue-400 font-normal">.</span>
            </h2>
          </div>

          {/* RIGHT: 3 NAV COLUMNS */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 pb-2">
            
            {/* COLUMN 1: SOCIALS */}
            <div className="space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-300/70">
                Socials
              </span>
              <div className="flex flex-col space-y-2 text-xs font-normal text-blue-100/90">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Twitter (X)
                </a>
                <a href="https://researchgate.net" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  ResearchGate
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </div>
            </div>

            {/* COLUMN 2: SITEMAP */}
            <div className="space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-300/70">
                Sitemap
              </span>
              <div className="flex flex-col space-y-2 text-xs font-normal text-blue-100/90">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <a href="/about" className="hover:text-white transition-colors">About Us</a>
                <a href="/#how-we-drive-impact" className="hover:text-white transition-colors">Intelligence</a>
                <a href="/partnerships" className="hover:text-white transition-colors">Partnerships</a>
                <a href="/#final-cta" className="hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            {/* COLUMN 3: PLATFORM DESCRIPTION & UAE BADGE */}
            <div className="col-span-2 sm:col-span-1 space-y-3">
              <p className="text-xs text-blue-200/80 leading-relaxed font-light">
                KliSus is a pioneering climate &amp; sustainability intelligence platform driven by science and technology.
              </p>
              
              {/* UAE BADGE */}
              <div className="pt-1">
                <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-[10px] font-semibold text-blue-200 bg-white/10 border border-white/10 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Dubai, UAE</span>
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM LEGAL BAR */}
        <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/60 font-light mt-auto">
          <div className="flex items-center space-x-6 font-normal">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#cookie" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p>© 2026 KliSus. All rights reserved.</p>
        </div>

      </div>

    </footer>
  );
}
