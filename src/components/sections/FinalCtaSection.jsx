"use client";

import { ArrowRight, Mail } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section id="final-cta" className="w-full max-w-[1680px] mx-auto my-3 sm:my-6 px-2 sm:px-4">
      {/* HIGH-IMPACT HERO-GRADE CARD WITH LIGHT NAVY TINT & GRADIENT GLOW */}
      <div className="w-full rounded-[24px] sm:rounded-[32px] bg-gradient-to-br from-[#e1eaf5] via-[#e6effa] to-[#d8e4f5] border border-blue-200/80 shadow-md px-6 sm:px-12 md:px-16 lg:px-20 py-16 sm:py-24 text-center relative overflow-hidden">
        
        {/* BACKGROUND SUBTLE ACCENT ORB */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl pointer-events-none" />

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          
          {/* EYEBROW BADGE */}
          <div className="flex justify-center">
            <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase text-blue-700 bg-white/90 border border-blue-200/80 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span>SECTION 07 — BUILD WITH KLISUS</span>
            </span>
          </div>

          {/* HEADLINE */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal text-slate-950 tracking-tight leading-[1.08]">
            Build what comes <span className="text-blue-600 font-normal">next.</span>
          </h2>

          {/* BODY COPY */}
          <div className="max-w-3xl mx-auto text-slate-600 text-base sm:text-lg md:text-xl font-light leading-relaxed space-y-4 pt-2">
            <p>
              KliSus works with businesses, investors, researchers, institutions and technology partners to explore emerging opportunities across climate and sustainability.
            </p>
            <p className="text-slate-800 font-normal">
              Whether you are looking to invest, collaborate, develop technology or explore a problem, we welcome conversations that can lead to meaningful possibilities.
            </p>
          </div>

          {/* DUAL ACTION BUTTONS */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* PRIMARY CTA */}
            <a
              href="#partner"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-slate-950 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-blue-600 transition-all duration-300 shadow-xl group transform hover:scale-[1.02]"
            >
              <span>Partner with KliSus</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* SECONDARY CTA */}
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-white/90 text-slate-900 border border-slate-300 text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-slate-100 hover:text-blue-700 transition-all duration-300 shadow-md group transform hover:scale-[1.02]"
            >
              <Mail className="w-4 h-4 text-slate-600 group-hover:text-blue-700 transition-colors" />
              <span>Contact KliSus</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
