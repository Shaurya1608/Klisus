"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote, Globe, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import NavMenuOverlay from "@/components/ui/NavMenuOverlay";
import Footer from "@/components/layout/Footer";
import FadeInScroll from "@/components/ui/FadeInScroll";

export default function AboutPage() {
  const [isLangEn, setIsLangEn] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#eef2f6] text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      {/* NAVBAR */}
      <div className="w-full px-1 sm:px-2 md:px-3 pt-1 pb-2">
        <Navbar
          isLangEn={isLangEn}
          setIsLangEn={setIsLangEn}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>

      {/* MAIN ABOUT CONTENT WRAPPER */}
      <main className="w-full max-w-[1680px] mx-auto px-2 sm:px-4 space-y-4 sm:space-y-6 pb-6">
        
        {/* SECTION 1: HERO / MISSION CARD */}
        <FadeInScroll direction="up">
          <section className="relative w-full rounded-[24px] sm:rounded-[32px] md:rounded-[40px] bg-gradient-to-b from-[#e6eff9] via-[#e2edfa] to-[#dae7f6] border border-blue-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.04)] px-4 sm:px-8 md:px-14 lg:px-20 py-8 sm:py-14 md:py-16 overflow-hidden transition-all duration-500 hover:border-blue-300/90">
            
            {/* SUBTLE AMBIENT RADIAL LIGHT GLOW */}
            <div 
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[280px] bg-gradient-to-b from-white/60 via-blue-200/30 to-transparent blur-3xl pointer-events-none rounded-full" 
              aria-hidden="true" 
            />
            
            {/* GEOMETRIC WATERMARK GRID ACCENT */}
            <div 
              className="absolute inset-0 bg-[linear-gradient(to_right,#1e40af0a_1px,transparent_1px),linear-gradient(to_bottom,#1e40af0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" 
              aria-hidden="true" 
            />

            {/* CONTENT LAYOUT: LEFT SIDEBAR INDEX + RIGHT HERO TEXT */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
              
              {/* LEFT COLUMN: NAVIGATION / SECTION INDEX */}
              <div className="lg:col-span-3 space-y-4 pt-1">
                <span className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-blue-700 bg-white/95 backdrop-blur-md border border-blue-200/90 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                  <span>ABOUT KLISUS</span>
                </span>

                <div className="hidden lg:flex flex-col space-y-2 pt-4 text-xs font-semibold tracking-wider text-slate-500 uppercase border-l-2 border-blue-200 pl-3">
                  <a href="#mission" className="text-blue-600 hover:text-slate-950 transition-colors">01. Mission</a>
                  <a href="#purpose" className="hover:text-slate-950 transition-colors">02. Purpose</a>
                  <a href="#uae" className="hover:text-slate-950 transition-colors">03. The UAE</a>
                </div>
              </div>

              {/* RIGHT COLUMN: H1 TITLE & SUPPORTING COPY */}
              <div id="mission" className="lg:col-span-9 space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-slate-950 tracking-tight leading-[1.08]">
                  Building what a changing world <span className="text-blue-600 font-normal">needs.</span>
                </h1>

                <p className="text-sm sm:text-lg md:text-xl text-slate-700 font-light leading-relaxed max-w-4xl pt-1">
                  KliSus is a climate and sustainability venture bringing together science, technology, entrepreneurship, capital and collaboration — to understand emerging challenges, develop new ideas, and build the technologies, projects and ventures that create meaningful value.
                </p>
              </div>

            </div>

          </section>
        </FadeInScroll>

        {/* SECTION 2: EDITORIAL HERO BANNER IMAGE */}
        <FadeInScroll direction="up">
          <div className="relative w-full h-[280px] sm:h-[420px] md:h-[500px] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl border border-blue-900/30 group">
            <Image
              src="/images/card-digital.jpg"
              alt="KliSus Environment and Intelligence Systems"
              fill
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.9]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent pointer-events-none" />

            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 flex items-center justify-between text-white z-10">
              <span className="text-[10px] sm:text-xs font-mono font-medium tracking-widest uppercase bg-slate-950/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                SCIENCE · TECHNOLOGY · CAPITAL
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-slate-300 hidden sm:inline">
                KLISUS INTELLIGENCE & VENTURE PLATFORM
              </span>
            </div>
          </div>
        </FadeInScroll>

        {/* SECTION 3: PURPOSE & AMBITION QUOTE GRID */}
        <FadeInScroll direction="up">
          <section id="purpose" className="relative w-full rounded-[24px] sm:rounded-[32px] md:rounded-[40px] bg-gradient-to-b from-[#e6eff9] via-[#e2edfa] to-[#dae7f6] border border-blue-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.04)] px-4 sm:px-8 lg:px-14 py-8 sm:py-12 md:py-14 overflow-hidden transition-all duration-500 hover:border-blue-300/90">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch">
              
              {/* LEFT COLUMN: AMBITION QUOTE BOX */}
              <div className="lg:col-span-5 bg-white/95 backdrop-blur-md rounded-[20px] sm:rounded-[28px] p-6 sm:p-9 flex flex-col justify-between border border-blue-100/90 shadow-md">
                <div className="space-y-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 shadow-sm">
                    <Quote className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <h3 className="text-xl sm:text-3xl font-serif italic text-slate-950 leading-snug pt-2">
                    &ldquo;Our ambition is simple: understand the change, and build what comes next.&rdquo;
                  </h3>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-widest text-blue-700 uppercase">
                    OUR AMBITION
                  </span>
                  <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                </div>
              </div>

              {/* RIGHT COLUMN: OUR PURPOSE BODY CONTENT */}
              <div className="lg:col-span-7 bg-white/80 backdrop-blur-md rounded-[20px] sm:rounded-[28px] p-6 sm:p-9 flex flex-col justify-between border border-blue-200/60 shadow-sm space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-slate-400">
                    OUR PURPOSE
                  </span>

                  <h2 className="text-2xl sm:text-4xl font-normal text-slate-950 tracking-tight leading-snug">
                    Environmental change is one of the <span className="text-blue-600 font-normal">defining opportunities</span> of our time.
                  </h2>

                  <div className="text-xs sm:text-base text-slate-700 font-light leading-relaxed space-y-3 pt-1">
                    <p>
                      Climate, nature, resource and environmental pressures are changing how economies operate — influencing infrastructure, energy, water, supply chains, investment and long-term business decisions.
                    </p>
                    <p>
                      At the same time, advances in artificial intelligence, Earth observation, data and engineering are opening new ways to understand these challenges and act on them.
                    </p>
                    <p className="text-slate-950 font-normal pt-1">
                      KliSus operates at this intersection — where environmental change meets technology, economics and human systems — and explores what can be built there.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </section>
        </FadeInScroll>

        {/* SECTION 4: THE UAE PLATFORM */}
        <FadeInScroll direction="up">
          <section id="uae" className="relative w-full rounded-[24px] sm:rounded-[32px] md:rounded-[40px] bg-gradient-to-b from-[#e6eff9] via-[#e2edfa] to-[#dae7f6] border border-blue-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.04)] px-4 sm:px-8 lg:px-14 py-8 sm:py-12 md:py-14 overflow-hidden transition-all duration-500 hover:border-blue-300/90">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
              
              {/* LEFT COLUMN: THE UAE HEADLINE & BODY */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-blue-700 bg-white/95 backdrop-blur-md border border-blue-200/90 shadow-sm">
                  <Globe className="w-3.5 h-3.5 text-blue-600" />
                  <span>THE UAE PLATFORM</span>
                </div>

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-slate-950 tracking-tight leading-snug">
                  Built in the UAE. <span className="text-blue-600 font-normal">Designed for global relevance.</span>
                </h2>

                <div className="text-xs sm:text-base text-slate-700 font-light leading-relaxed space-y-3">
                  <p>
                    The UAE is emerging as a critical environment for the next generation of climate, sustainability and technology-driven development. Its position across global capital, emerging markets, infrastructure, energy and international trade creates a distinctive platform from which to build.
                  </p>
                  <p className="text-slate-950 font-normal">
                    For KliSus, Dubai is more than a location — it&apos;s a starting point from which we connect challenges with global technologies, capital and expertise.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-2">
                  {["Dubai Headquarters", "Global Capital", "Emerging Markets", "Infrastructure & Tech"].map((pill, idx) => (
                    <span
                      key={idx}
                      className="bg-white/90 text-slate-800 border border-blue-200/80 text-[10px] sm:text-xs font-medium px-3 py-1 rounded-full shadow-sm"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN: DUBAI VISUAL CARD */}
              <div className="lg:col-span-5 relative h-[260px] sm:h-[340px] rounded-[20px] sm:rounded-[28px] overflow-hidden border border-blue-900/30 shadow-xl group">
                <Image
                  src="/images/card-tech.jpg"
                  alt="Dubai and UAE Platform for Climate Tech"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono font-bold tracking-wider text-blue-300">DUBAI · UAE</div>
                    <div className="text-[11px] text-slate-300 font-light">Global Innovation & Capital Hub</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

            </div>

          </section>
        </FadeInScroll>

      </main>

      {/* FOOTER */}
      <Footer />

      {/* FULL NAVIGATION MENU OVERLAY */}
      <NavMenuOverlay
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </div>
  );
}
