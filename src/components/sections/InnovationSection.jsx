"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function InnovationSection() {
  const focusAreas = ["Technology", "Methodologies", "Applications", "Ventures"];

  return (
    <section id="innovation" className="w-full max-w-[1680px] mx-auto my-2 sm:my-3 px-2 sm:px-4">
      {/* PREMIUM MINIMALIST GLASS CONTAINER CARD */}
      <div className="relative w-full rounded-[24px] sm:rounded-[32px] md:rounded-[40px] bg-gradient-to-b from-[#e6eff9] via-[#e2edfa] to-[#dae7f6] border border-blue-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.04)] px-4 sm:px-8 lg:px-14 py-6 sm:py-10 md:py-12 overflow-hidden transition-all duration-500 hover:border-blue-300/90 hover:shadow-[0_12px_36px_rgba(37,99,235,0.06)]">
        
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

        {/* TOP HEADER GRID */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-14 items-start mb-6 sm:mb-9 lg:mb-12">
          
          {/* TOP LEFT: HEADLINE & FOCUS AREAS */}
          <div className="lg:col-span-6 space-y-3.5 sm:space-y-5">
            {/* HEADLINE */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-slate-950 tracking-tight leading-[1.12]">
              Build what comes <span className="text-blue-600 font-normal">next.</span>
            </h2>

            {/* FOCUS AREAS BADGES */}
            <div className="pt-1 flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1">Focus Areas:</span>
              {focusAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="bg-white/90 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 text-slate-800 border border-blue-200/70 shadow-sm text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full transition-all duration-200 cursor-pointer"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* TOP RIGHT: BODY COPY & MAIN CTA BUTTON */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-3.5 sm:space-y-5">
            <div className="text-slate-600 text-sm sm:text-base md:text-lg font-light leading-relaxed space-y-2.5 sm:space-y-3">
              <p>
                KliSus turns emerging insights and environmental challenges into technologies, methodologies and practical applications.
              </p>
              <p>
                We explore how data, Earth observation, AI, analytics and other enabling technologies can create new capabilities across the climate and sustainability landscape.
              </p>
            </div>

            {/* MAIN CTA BUTTON */}
            <div className="pt-1">
              <a
                href="#innovation-explore"
                className="inline-flex items-center space-x-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-slate-950 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-blue-600 transition-all duration-300 shadow-md group min-h-[42px]"
              >
                <span>Explore Innovation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>

        {/* FEATURED INNOVATION HEADING */}
        <div className="relative z-10 flex items-center justify-between border-b border-blue-200/70 pb-3 mb-5 sm:mb-6">
          <h3 className="text-base sm:text-xl font-semibold text-slate-950 tracking-tight">
            Featured Innovation
          </h3>
          <span className="text-[11px] sm:text-xs font-medium text-slate-500">Selected technologies and concepts from KliSus</span>
        </div>

        {/* BENTO CARDS GRID */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* CARD 01: LEFT TALL TECHNOLOGY CARD (lg:col-span-6) */}
          <div className="lg:col-span-6 min-h-[400px] sm:min-h-[500px] lg:min-h-[560px] rounded-[20px] sm:rounded-[24px] relative overflow-hidden bg-[#020617] border border-blue-900/40 shadow-xl p-5 sm:p-8 flex flex-col justify-between group transition-all duration-500 hover:border-blue-400/60 hover:shadow-2xl">
            
            {/* HIGH-RES BACKGROUND IMAGE */}
            <Image
              src="/images/card-tech.jpg"
              alt="Environmental Intelligence Systems"
              fill
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.85]"
            />

            {/* DARK GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/55 to-transparent pointer-events-none" />

            {/* TOP BAR: BADGE & INDEX */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3.5 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-blue-300 bg-blue-950/80 backdrop-blur-md border border-blue-500/40 shadow-lg">
                01 — TECHNOLOGY
              </span>
              <span className="text-[11px] sm:text-xs font-mono font-medium text-slate-400">
                01 / 03
              </span>
            </div>

            {/* CARD BOTTOM CONTENT */}
            <div className="relative z-10 space-y-3 sm:space-y-4 pt-8 sm:pt-12">
              <h4 className="text-xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white group-hover:text-blue-200 transition-colors leading-tight">
                Environmental Intelligence Systems
              </h4>

              <p className="text-xs sm:text-base text-slate-300 font-light leading-relaxed max-w-lg">
                Exploring new ways to combine environmental data, technology and analytical models to make complex systems more observable and actionable.
              </p>

              {/* ACTION LINK WITH CIRCULAR ARROW BUTTON */}
              <div className="pt-3 sm:pt-4 flex items-center justify-between border-t border-slate-800/80">
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-400 group-hover:text-white transition-colors"
                >
                  <span>Explore Technology</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-300 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all shadow-lg">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CARD 02 & CARD 03 (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col space-y-5 sm:space-y-6">
            
            {/* CARD 02: CONCEPT CARD */}
            <div className="min-h-[210px] sm:min-h-[245px] lg:min-h-[265px] rounded-[20px] sm:rounded-[24px] relative overflow-hidden bg-[#020617] border border-blue-900/40 shadow-xl p-5 sm:p-7 flex flex-col justify-between group transition-all duration-500 hover:border-indigo-500/60 hover:shadow-2xl flex-1">
              
              <Image
                src="/images/card-digital.jpg"
                alt="From Data to Decision"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/55 to-transparent pointer-events-none" />

              {/* TOP BAR */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3.5 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-indigo-300 bg-indigo-950/80 backdrop-blur-md border border-indigo-500/40 shadow-lg">
                  02 — CONCEPT
                </span>
                <span className="text-[11px] sm:text-xs font-mono font-medium text-slate-400">
                  02 / 03
                </span>
              </div>

              {/* CARD BOTTOM CONTENT */}
              <div className="relative z-10 space-y-2 sm:space-y-2.5 pt-4 sm:pt-5">
                <h4 className="text-lg sm:text-2xl font-semibold tracking-tight text-white max-w-md group-hover:text-indigo-200 transition-colors">
                  From Data to Decision
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-sm">
                  Developing approaches that translate fragmented environmental information into intelligence for real-world decisions.
                </p>
              </div>

              {/* BOTTOM RIGHT ARROW BUTTON */}
              <div className="relative z-10 flex items-center justify-between pt-2">
                <div className="text-left border-l-2 border-indigo-500 pl-2.5 py-0.5">
                  <div className="text-[9px] font-mono tracking-[0.2em] text-slate-400 uppercase leading-tight">
                    TRANSLATE<br />INTELLIGENCE<br />DECISION
                  </div>
                </div>
                <a
                  href="#"
                  aria-label="Explore Concept"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-600 hover:text-white flex items-center justify-center transition-all shadow-lg group/btn"
                >
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* CARD 03: APPLICATION CARD */}
            <div className="min-h-[210px] sm:min-h-[245px] lg:min-h-[265px] rounded-[20px] sm:rounded-[24px] relative overflow-hidden bg-[#020617] border border-blue-900/40 shadow-xl p-5 sm:p-7 flex flex-col justify-between group transition-all duration-500 hover:border-teal-500/60 hover:shadow-2xl flex-1">
              
              <Image
                src="/images/card-energy.jpg"
                alt="Technology for a Changing Environment"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/55 to-transparent pointer-events-none" />

              {/* TOP BAR */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3.5 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-teal-300 bg-teal-950/80 backdrop-blur-md border border-teal-500/40 shadow-lg">
                  03 — APPLICATION
                </span>
                <span className="text-[11px] sm:text-xs font-mono font-medium text-slate-400">
                  03 / 03
                </span>
              </div>

              {/* CARD BOTTOM CONTENT */}
              <div className="relative z-10 space-y-2 sm:space-y-2.5 pt-4 sm:pt-5">
                <h4 className="text-lg sm:text-2xl font-semibold tracking-tight text-white max-w-md group-hover:text-teal-200 transition-colors">
                  Technology for a Changing Environment
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-sm">
                  Exploring practical applications of emerging technologies across climate, nature, land, water and environmental systems.
                </p>
              </div>

              {/* BOTTOM RIGHT ARROW BUTTON */}
              <div className="relative z-10 flex items-center justify-between pt-2">
                <div className="text-left border-l-2 border-teal-500 pl-2.5 py-0.5">
                  <div className="text-[9px] font-mono tracking-[0.2em] text-slate-400 uppercase leading-tight">
                    CLIMATE<br />NATURE<br />WATER
                  </div>
                </div>
                <a
                  href="#"
                  aria-label="Explore Application"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-300 hover:bg-teal-600 hover:text-white flex items-center justify-center transition-all shadow-lg group/btn"
                >
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
