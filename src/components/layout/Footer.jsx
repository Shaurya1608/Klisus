"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, Mail, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer className="w-full max-w-[1680px] mx-auto my-3 sm:my-6 px-2 sm:px-4 z-10">
      {/* RICH LUMINOUS ICE-GLASS CONTAINER CARD */}
      <div className="relative w-full rounded-[28px] sm:rounded-[40px] md:rounded-[48px] bg-gradient-to-b from-white via-[#f2f7fd] to-[#e1edf9] border border-blue-200/90 shadow-[0_16px_50px_rgba(15,23,42,0.06)] px-5 sm:px-10 md:px-16 lg:px-20 py-10 sm:py-16 md:py-20 overflow-hidden transition-all duration-500 hover:border-blue-300">
        
        {/* SUBTLE AMBIENT RADIAL LIGHT GLOW */}
        <div 
          className="absolute -top-28 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[300px] bg-gradient-to-b from-white via-blue-200/40 to-transparent blur-3xl pointer-events-none rounded-full" 
          aria-hidden="true" 
        />
        
        {/* SUBTLE GEOMETRIC WATERMARK GRID ACCENT */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#1e40af0d_1px,transparent_1px),linear-gradient(to_bottom,#1e40af0d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" 
          aria-hidden="true" 
        />

        {/* TOP EDITORIAL GRID */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start pb-10 sm:pb-16 border-b border-blue-200/80">
          
          {/* LEFT COLUMN: CLOSING STATEMENT & BRAND POSITIONING */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            {/* CLOSING LINE */}
            <div className="space-y-2">
              <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-blue-700 bg-white/95 backdrop-blur-md border border-blue-200/90 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span>CLOSING LINE</span>
              </span>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-slate-950 tracking-tight leading-[1.12]">
                Understand the change. <br />
                <span className="text-blue-600 font-normal">Build what comes next.</span>
              </h3>
            </div>

            {/* LOCATION & TAGLINE */}
            <div className="pt-2 space-y-1">
              <div className="text-sm sm:text-base font-semibold text-slate-900">
                Climate &amp; Sustainability Intelligence
              </div>
              <div className="text-xs text-slate-600 font-light flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Dubai, United Arab Emirates</span>
              </div>
            </div>

            {/* PILLAR BADGES */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              {["Intelligence", "Innovation", "Partnerships"].map((pillar, idx) => (
                <span
                  key={idx}
                  className="bg-white/95 text-slate-800 border border-blue-200/90 text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full shadow-sm hover:border-blue-300 transition-colors"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </div>

          {/* MIDDLE COLUMN: NEWSLETTER CONNECT BOX (Fabrica Style) */}
          <div className="lg:col-span-4 bg-white/95 backdrop-blur-md rounded-[20px] sm:rounded-[28px] p-5 sm:p-7 border border-blue-100/90 shadow-sm space-y-4">
            <div className="space-y-1.5">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-slate-400">
                STAY CONNECTED
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-950 tracking-tight">
                Subscribe to KliSus Intelligence
              </h4>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Receive original insights on climate tech, Earth observation, and environmental economics.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-slate-50 border border-blue-200/80 rounded-full px-4 py-2.5 pl-9 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                <button
                  type="submit"
                  className="absolute right-1 px-3.5 py-1.5 rounded-full bg-slate-950 text-white text-xs font-semibold hover:bg-blue-600 transition-colors flex items-center space-x-1 shadow-sm min-h-[34px]"
                >
                  {subscribed ? (
                    <>
                      <span>Joined</span>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    </>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT COLUMN: NAVIGATION LINKS & QUICK NAVIGATION */}
          <div className="lg:col-span-3 space-y-6 lg:pl-4">
            {/* NAVIGATION */}
            <div className="space-y-3">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-slate-400">
                NAVIGATION
              </span>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs sm:text-sm font-medium text-slate-700">
                <a href="/about" className="hover:text-blue-600 transition-colors inline-flex items-center space-x-1 group">
                  <span>About</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="#how-we-drive-impact" className="hover:text-blue-600 transition-colors inline-flex items-center space-x-1 group">
                  <span>Intelligence</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="#innovation" className="hover:text-blue-600 transition-colors inline-flex items-center space-x-1 group">
                  <span>Innovation</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="#how-we-drive-impact" className="hover:text-blue-600 transition-colors inline-flex items-center space-x-1 group">
                  <span>Partnerships</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="#innovation" className="hover:text-blue-600 transition-colors inline-flex items-center space-x-1 group">
                  <span>Insights</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="#final-cta" className="hover:text-blue-600 transition-colors inline-flex items-center space-x-1 group">
                  <span>Contact</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* HEADQUARTERS */}
            <div className="space-y-1.5 pt-2 border-t border-blue-200/60">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-slate-400">
                HEADQUARTERS
              </span>
              <div className="text-xs text-slate-700 font-light leading-relaxed">
                Dubai, UAE · Global Platform
              </div>
            </div>
          </div>

        </div>

        {/* MID SECTION DIVIDER WITH CROSSHAIR "+" ACCENTS */}
        <div className="relative z-10 flex items-center justify-between py-4 text-blue-400/80 text-xs font-mono">
          <span>+</span>
          <span>+</span>
          <span>+</span>
        </div>

        {/* BOTTOM SECTION: GIANT BRAND DISPLAY & LEGAL BAR */}
        <div className="relative z-10 pt-2 flex flex-col items-center text-center space-y-6">
          {/* GIANT BRAND TYPOGRAPHY */}
          <div className="space-y-1">
            <h2 className="text-[14vw] sm:text-[11vw] lg:text-[9.5vw] font-bold tracking-[0.06em] text-slate-950 uppercase leading-none select-none drop-shadow-sm">
              KliSus<span className="text-blue-600 text-[0.6em] align-top font-normal">®</span>
            </h2>
            <div className="text-xs sm:text-base font-medium tracking-widest text-slate-600 uppercase">
              Climate &amp; Sustainability Intelligence
            </div>
          </div>

          {/* LEGAL COPYRIGHT BAR */}
          <div className="w-full pt-6 border-t border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-light">
            <span>© 2026 KliSus. All rights reserved.</span>
            <div className="flex items-center space-x-6 font-medium text-slate-600">
              <a href="#privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
