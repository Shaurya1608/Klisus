"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function PartnershipsSection() {
  const focusAreas = ["Research", "Technology", "Industry", "Capital"];

  return (
    <section id="partnerships" className="w-full max-w-[1680px] mx-auto my-3 sm:my-6 px-2 sm:px-4">
      {/* LIGHT NAVY CONTAINER CARD */}
      <div className="w-full rounded-[24px] sm:rounded-[32px] bg-[#e1eaf5] border border-blue-200/60 shadow-sm px-4 sm:px-8 md:px-16 lg:px-20 py-8 sm:py-16 md:py-20">
        
        {/* TOP HEADER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-start mb-8 sm:mb-12 lg:mb-16">
          
          {/* TOP LEFT: HEADLINE & FOCUS AREAS */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            {/* HEADLINE */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-slate-950 tracking-tight leading-[1.12]">
              Build with <span className="text-blue-600 font-normal">others.</span>
            </h2>

            {/* FOCUS AREAS BADGES */}
            <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1 sm:mr-2">Focus Areas:</span>
              {focusAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="bg-white/80 hover:bg-white text-slate-800 border border-blue-200/50 shadow-sm text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full transition-colors cursor-pointer"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* TOP RIGHT: BODY COPY & MAIN CTA BUTTON */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4 sm:space-y-6">
            <div className="text-slate-600 text-sm sm:text-lg font-light leading-relaxed space-y-3 sm:space-y-4">
              <p>
                The challenges created by environmental change are too complex to solve in isolation.
              </p>
              <p>
                KliSus works with businesses, investors, researchers, institutions and technology partners to develop new capabilities, test ideas and create opportunities.
              </p>
            </div>

            {/* MAIN CTA BUTTON */}
            <div className="pt-1 sm:pt-2">
              <a
                href="#partnerships-explore"
                className="inline-flex items-center space-x-3 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-slate-950 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-blue-600 transition-all duration-300 shadow-lg group min-h-[44px]"
              >
                <span>Explore Partnerships</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>

        {/* FEATURED PARTNERSHIPS HEADING */}
        <div className="flex items-center justify-between border-b border-blue-200/80 pb-3 sm:pb-4 mb-6 sm:mb-8">
          <h3 className="text-base sm:text-xl font-semibold text-slate-950 tracking-tight">
            Featured Partnerships
          </h3>
          <span className="text-[11px] sm:text-xs font-medium text-slate-500">Our growing ecosystem</span>
        </div>

        {/* 3 EQUAL-WIDTH FEATURED PARTNERSHIPS BOXES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* BOX 01: RESEARCH PARTNERS */}
          <div className="min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] rounded-[24px] sm:rounded-[28px] relative overflow-hidden bg-[#020617] border border-blue-900/40 shadow-2xl p-5 sm:p-8 flex flex-col justify-between group transition-all duration-500 hover:border-blue-500/80 hover:shadow-blue-900/20 transform hover:-translate-y-1">
            
            {/* BACKGROUND IMAGE */}
            <Image
              src="/images/intelligence/paper-03.jpg"
              alt="Research Partners"
              fill
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent pointer-events-none" />

            {/* TOP BAR */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-blue-300 bg-blue-950/80 backdrop-blur-md border border-blue-500/40 shadow-lg">
                01 — RESEARCH
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono font-medium text-slate-300">
                Science × Technology
              </span>
            </div>

            {/* BOTTOM CONTENT */}
            <div className="relative z-10 space-y-3 sm:space-y-4 pt-8 sm:pt-12">
              <h4 className="text-lg sm:text-2xl font-bold tracking-tight text-white group-hover:text-blue-200 transition-colors leading-snug">
                Collaborating with researchers and scientific institutions
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Collaborating with researchers and scientific institutions to explore new environmental intelligence capabilities.
              </p>

              <div className="pt-3 sm:pt-4 flex items-center justify-between border-t border-slate-800/80">
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-blue-400 group-hover:text-white transition-colors"
                >
                  <span>Explore Partnership</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>

                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-300 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all shadow-lg">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* BOX 02: TECHNOLOGY PARTNERS */}
          <div className="min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] rounded-[24px] sm:rounded-[28px] relative overflow-hidden bg-[#020617] border border-blue-900/40 shadow-2xl p-5 sm:p-8 flex flex-col justify-between group transition-all duration-500 hover:border-indigo-500/80 hover:shadow-indigo-900/20 transform hover:-translate-y-1">
            
            <Image
              src="/images/card-digital.jpg"
              alt="Technology Partners"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent pointer-events-none" />

            {/* TOP BAR */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-indigo-300 bg-indigo-950/80 backdrop-blur-md border border-indigo-500/40 shadow-lg">
                02 — TECHNOLOGY
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono font-medium text-slate-300">
                Technology × Environment
              </span>
            </div>

            {/* BOTTOM CONTENT */}
            <div className="relative z-10 space-y-3 sm:space-y-4 pt-8 sm:pt-12">
              <h4 className="text-lg sm:text-2xl font-bold tracking-tight text-white group-hover:text-indigo-200 transition-colors leading-snug">
                Working with technology companies and innovators
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Working with technology companies and innovators to explore applications across emerging environmental challenges.
              </p>

              <div className="pt-3 sm:pt-4 flex items-center justify-between border-t border-slate-800/80">
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-indigo-400 group-hover:text-white transition-colors"
                >
                  <span>Explore Partnership</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>

                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center transition-all shadow-lg">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* BOX 03: INDUSTRY PARTNERS */}
          <div className="min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] rounded-[24px] sm:rounded-[28px] relative overflow-hidden bg-[#020617] border border-blue-900/40 shadow-2xl p-5 sm:p-8 flex flex-col justify-between group transition-all duration-500 hover:border-teal-500/80 hover:shadow-teal-900/20 transform hover:-translate-y-1">
            
            <Image
              src="/images/card-tech.jpg"
              alt="Industry Partners"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent pointer-events-none" />

            {/* TOP BAR */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-teal-300 bg-teal-950/80 backdrop-blur-md border border-teal-500/40 shadow-lg">
                03 — INDUSTRY
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono font-medium text-slate-300">
                Challenges × Applications
              </span>
            </div>

            {/* BOTTOM CONTENT */}
            <div className="relative z-10 space-y-3 sm:space-y-4 pt-8 sm:pt-12">
              <h4 className="text-lg sm:text-2xl font-bold tracking-tight text-white group-hover:text-teal-200 transition-colors leading-snug">
                Working with organisations on real-world problems
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Working with organisations to understand real-world problems and develop practical opportunities around them.
              </p>

              <div className="pt-3 sm:pt-4 flex items-center justify-between border-t border-slate-800/80">
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-teal-400 group-hover:text-white transition-colors"
                >
                  <span>Explore Partnership</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>

                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-teal-950/80 border border-teal-500/40 text-teal-300 group-hover:bg-teal-600 group-hover:text-white flex items-center justify-center transition-all shadow-lg">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
