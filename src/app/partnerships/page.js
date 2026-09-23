"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Handshake, Users, ShieldCheck, Zap } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import NavMenuOverlay from "@/components/ui/NavMenuOverlay";
import Footer from "@/components/layout/Footer";
import FadeInScroll from "@/components/ui/FadeInScroll";

export default function PartnershipsPage() {
  const [isLangEn, setIsLangEn] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const focusAreas = ["Research", "Technology", "Industry", "Capital"];

  const partnerships = [
    {
      badge: "01 — RESEARCH PARTNERS",
      index: "01 / 03",
      tag: "Science × Technology",
      title: "Academic & Scientific Coalition",
      desc: "Collaborating with researchers and scientific institutions to explore new environmental intelligence capabilities.",
      image: "/images/intelligence/paper-03.jpg",
      linkText: "Explore Partnership",
      accentBorder: "hover:border-blue-400/60",
      accentText: "text-blue-300",
    },
    {
      badge: "02 — TECHNOLOGY PARTNERS",
      index: "02 / 03",
      tag: "Technology × Environment",
      title: "Enterprise Technology Alliance",
      desc: "Working with technology companies and innovators to explore applications across emerging environmental challenges.",
      image: "/images/card-tech.jpg",
      linkText: "Explore Partnership",
      accentBorder: "hover:border-indigo-400/60",
      accentText: "text-indigo-300",
    },
    {
      badge: "03 — INDUSTRY PARTNERS",
      index: "03 / 03",
      tag: "Challenges × Applications",
      title: "Real-World Industry Solutions",
      desc: "Working with organisations to understand real-world problems and develop practical opportunities around them.",
      image: "/images/card-energy.jpg",
      linkText: "Explore Partnership",
      accentBorder: "hover:border-teal-400/60",
      accentText: "text-teal-300",
    },
  ];

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

      {/* MAIN PARTNERSHIPS CONTENT WRAPPER */}
      <main className="w-full max-w-[1680px] mx-auto px-2 sm:px-4 space-y-4 sm:space-y-6 pb-6">
        
        {/* SECTION 1: HERO / PARTNERSHIPS HEADER CARD */}
        <FadeInScroll direction="up">
          <section className="relative w-full rounded-[28px] sm:rounded-[36px] md:rounded-[48px] bg-gradient-to-b from-[#e6eff9] via-[#e2edfa] to-[#dae7f6] border border-blue-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.04)] px-5 sm:px-10 md:px-16 lg:px-20 py-10 sm:py-16 md:py-18 overflow-hidden transition-all duration-500 hover:border-blue-300">
            
            {/* SUBTLE AMBIENT RADIAL LIGHT GLOW */}
            <div 
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[300px] bg-gradient-to-b from-white/60 via-blue-200/30 to-transparent blur-3xl pointer-events-none rounded-full" 
              aria-hidden="true" 
            />
            
            {/* GEOMETRIC WATERMARK GRID ACCENT */}
            <div 
              className="absolute inset-0 bg-[linear-gradient(to_right,#1e40af0a_1px,transparent_1px),linear-gradient(to_bottom,#1e40af0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" 
              aria-hidden="true" 
            />

            {/* CONTENT LAYOUT */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
              
              {/* LEFT COLUMN: HEADLINE & FOCUS AREAS */}
              <div className="lg:col-span-6 space-y-4 sm:space-y-6">
                <span className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-blue-700 bg-white/95 backdrop-blur-md border border-blue-200/90 shadow-sm">
                  <Handshake className="w-3.5 h-3.5 text-blue-600" />
                  <span>PARTNERSHIPS</span>
                </span>

                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-slate-950 tracking-tight leading-[1.08]">
                  Build with <span className="text-blue-600 font-normal">others.</span>
                </h1>

                {/* FOCUS AREAS BADGES */}
                <div className="pt-1 flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1">Focus Areas:</span>
                  {focusAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="bg-white/95 text-slate-800 border border-blue-200/90 shadow-sm text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full hover:border-blue-300 transition-colors"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN: BODY COPY & MAIN CTA BUTTON */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-4 sm:space-y-6 pt-1 lg:pt-8">
                <div className="text-slate-700 text-sm sm:text-lg md:text-xl font-light leading-relaxed space-y-3 sm:space-y-4">
                  <p className="text-slate-950 font-normal">
                    The challenges created by environmental change are too complex to solve in isolation.
                  </p>
                  <p>
                    KliSus works with businesses, investors, researchers, institutions and technology partners to develop new capabilities, test ideas and create opportunities.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="#featured-partnerships"
                    className="inline-flex items-center space-x-3 px-7 py-3.5 rounded-full bg-slate-950 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-blue-600 transition-all duration-300 shadow-md group min-h-[44px]"
                  >
                    <span>Explore Partnerships</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

            </div>

          </section>
        </FadeInScroll>

        {/* SECTION 2: FEATURED PARTNERSHIPS CARDS GRID */}
        <FadeInScroll direction="up">
          <section id="featured-partnerships" className="relative w-full rounded-[28px] sm:rounded-[36px] md:rounded-[48px] bg-gradient-to-b from-[#e6eff9] via-[#e2edfa] to-[#dae7f6] border border-blue-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.04)] px-5 sm:px-10 md:px-16 lg:px-20 py-10 sm:py-16 md:py-20 overflow-hidden transition-all duration-500 hover:border-blue-300">
            
            {/* SUBTLE AMBIENT RADIAL LIGHT GLOW */}
            <div 
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[280px] bg-gradient-to-b from-white/60 via-blue-200/30 to-transparent blur-3xl pointer-events-none rounded-full" 
              aria-hidden="true" 
            />

            {/* FEATURED PARTNERSHIPS SECTION HEADING */}
            <div className="relative z-10 flex items-center justify-between border-b border-blue-200/80 pb-4 mb-8 sm:mb-12">
              <div className="space-y-1">
                <h2 className="text-xl sm:text-3xl font-semibold text-slate-950 tracking-tight">
                  Featured Partnerships
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-light">
                  Our growing ecosystem
                </p>
              </div>
              <span className="text-[10px] sm:text-xs font-mono font-medium text-slate-500 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-blue-200/80">
                ECOSYSTEM · 03 DOMAINS
              </span>
            </div>

            {/* PARTNERSHIP CARDS GRID */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {partnerships.map((card, idx) => (
                <div
                  key={idx}
                  className={`min-h-[380px] sm:min-h-[440px] rounded-[24px] relative overflow-hidden bg-[#020617] border border-blue-900/40 shadow-2xl p-6 sm:p-8 flex flex-col justify-between group transition-all duration-500 ${card.accentBorder} hover:shadow-2xl`}
                >
                  {/* BACKGROUND IMAGE */}
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.85]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/55 to-transparent pointer-events-none" />

                  {/* CARD TOP BAR */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className={`px-3.5 py-1.5 rounded-full text-[10px] font-mono font-semibold tracking-wider ${card.accentText} bg-blue-950/80 backdrop-blur-md border border-blue-500/40 shadow-lg`}>
                      {card.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 font-medium">
                      {card.index}
                    </span>
                  </div>

                  {/* CARD BOTTOM CONTENT */}
                  <div className="relative z-10 space-y-3 pt-8">
                    <div className="text-[10px] font-mono tracking-widest text-blue-400 uppercase font-semibold">
                      {card.tag}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white group-hover:text-blue-200 transition-colors leading-tight">
                      {card.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      {card.desc}
                    </p>

                    {/* ACTION LINK */}
                    <div className="pt-3 flex items-center justify-between border-t border-slate-800/80">
                      <a
                        href="#contact"
                        className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-blue-400 group-hover:text-white transition-colors"
                      >
                        <span>{card.linkText}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>

                      <div className="w-8 h-8 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-300 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all shadow-lg">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* BOTTOM CTA BANNER CARD */}
            <div className="relative z-10 mt-10 bg-white/95 backdrop-blur-md rounded-[24px] p-6 sm:p-9 flex flex-col sm:flex-row items-center justify-between border border-blue-100/90 shadow-md gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-lg sm:text-2xl font-bold text-slate-950 tracking-tight">
                  Interested in partnering with KliSus?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light">
                  Connect with our venture team to explore research, technology, industry and capital opportunities.
                </p>
              </div>

              <a
                href="#contact"
                className="shrink-0 inline-flex items-center space-x-3 px-7 py-3.5 rounded-full bg-slate-950 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-blue-600 transition-all duration-300 shadow-md group min-h-[44px]"
              >
                <span>Explore Partnerships</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
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
