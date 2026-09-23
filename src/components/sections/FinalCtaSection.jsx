"use client";

import { ArrowRight, Mail } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section id="final-cta" className="w-full max-w-[1680px] mx-auto my-2 sm:my-3 px-2 sm:px-4">
      {/* PREMIUM MINIMALIST GLASS CONTAINER CARD */}
      <div className="relative w-full rounded-[24px] sm:rounded-[32px] md:rounded-[40px] bg-gradient-to-b from-[#e6eff9] via-[#e2edfa] to-[#dae7f6] border border-blue-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.04)] px-5 sm:px-10 md:px-16 lg:px-20 py-10 sm:py-16 md:py-18 text-center overflow-hidden transition-all duration-500 hover:border-blue-300/90 hover:shadow-[0_12px_36px_rgba(37,99,235,0.06)]">
        
        {/* SUBTLE AMBIENT RADIAL LIGHT GLOW */}
        <div 
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[280px] bg-gradient-to-b from-white/60 via-blue-200/30 to-transparent blur-3xl pointer-events-none rounded-full" 
          aria-hidden="true" 
        />
        
        {/* SUBTLE GEOMETRIC WATERMARK GRID ACCENT */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#1e40af0a_1px,transparent_1px),linear-gradient(to_bottom,#1e40af0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" 
          aria-hidden="true" 
        />

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-5 sm:space-y-7">
          
          {/* HEADLINE */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-slate-950 tracking-tight leading-[1.08]">
            Build what comes <span className="text-blue-600 font-normal">next.</span>
          </h2>

          {/* BODY COPY */}
          <div className="max-w-3xl mx-auto text-slate-600 text-sm sm:text-base md:text-lg font-light leading-relaxed space-y-2.5 sm:space-y-3 pt-1">
            <p>
              KliSus works with businesses, investors, researchers, institutions and technology partners to explore emerging opportunities across climate and sustainability.
            </p>
            <p className="text-slate-800 font-normal">
              Whether you are looking to invest, collaborate, develop technology or explore a problem, we welcome conversations that can lead to meaningful possibilities.
            </p>
          </div>

          {/* DUAL ACTION BUTTONS */}
          <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {/* PRIMARY CTA */}
            <a
              href="#partner"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-7 py-3 sm:py-3.5 rounded-full bg-slate-950 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-blue-600 transition-all duration-300 shadow-md group min-h-[44px]"
            >
              <span>Partner with KliSus</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* SECONDARY CTA */}
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-7 py-3 sm:py-3.5 rounded-full bg-white/95 text-slate-900 border border-blue-200/90 text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-white hover:border-blue-300 hover:text-blue-700 transition-all duration-300 shadow-sm group min-h-[44px]"
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
