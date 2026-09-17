"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function ImpactSection() {
  const [activeTab, setActiveTab] = useState("intelligence");
  const scrollContainerRef = useRef(null);

  const tabs = [
    { id: "intelligence", label: "INTELLIGENCE" },
    { id: "innovations", label: "INNOVATIONS" },
    { id: "partnerships", label: "PARTNERSHIPS" },
  ];

  const tabData = {
    intelligence: {
      badge: "SECTION 03 — IMPACT",
      aboutTitle: "ABOUT INTELLIGENCE",
      headline: "Understand what is changing.",
      description:
        "KliSus explores the intersection of climate, environment, technology and economics through research, analysis and original perspectives. Our intelligence work makes complex change easier to understand.",
      focusAreas: ["Research", "Articles", "Papers", "Perspectives"],
      ctaText: "Explore Intelligence",
      ctaHref: "#intelligence",
      cards: [
        {
          badge: "01 — ARTICLE",
          index: "01 / 04",
          title: "Environmental Change Is Economic Change",
          desc: "How environmental change is increasingly influencing markets, infrastructure, capital and economic decisions.",
          image: "/images/intelligence/article-01.jpg",
          tag: "MARKETS · CAPITAL",
          linkText: "Read Article",
        },
        {
          badge: "02 — RESEARCH",
          index: "02 / 04",
          title: "The Emerging Environmental Intelligence Economy",
          desc: "Exploring the growing role of environmental data and intelligence in business and institutional decision-making.",
          image: "/images/intelligence/research-02.jpg",
          tag: "ECONOMY · DATA",
          linkText: "Read Research",
        },
        {
          badge: "03 — PAPER",
          index: "03 / 04",
          title: "From Earth Observation to Economic Intelligence",
          desc: "How advances in satellite data, geospatial technology and AI are changing the way environmental systems can be understood.",
          image: "/images/intelligence/paper-03.jpg",
          tag: "SATELLITE · AI",
          linkText: "Read Paper",
        },
        {
          badge: "04 — PERSPECTIVE",
          index: "04 / 04",
          title: "Geospatial Data in Institutional Markets",
          desc: "Original analytical perspectives on leveraging climate risk modeling for long-term institutional strategy.",
          image: "/images/card-digital.jpg",
          tag: "RISK · STRATEGY",
          linkText: "Read Perspective",
        },
      ],
    },
    innovations: {
      badge: "SECTION 03 — IMPACT",
      aboutTitle: "ABOUT INNOVATIONS",
      headline: "Build what comes next.",
      description:
        "KliSus turns emerging insights and environmental challenges into technologies, methodologies and practical applications. We explore how data, Earth observation and AI create new capabilities.",
      focusAreas: ["Technology", "Methodologies", "Applications", "Ventures"],
      ctaText: "Explore Innovations",
      ctaHref: "#innovations",
      cards: [
        {
          badge: "01 — TECHNOLOGY",
          index: "01 / 04",
          title: "Environmental Intelligence Systems",
          desc: "Exploring new ways to combine environmental data, technology and analytical models to make complex systems observable.",
          image: "/images/card-tech.jpg",
          tag: "DATA · AI · SYSTEMS",
          linkText: "Explore Technology",
        },
        {
          badge: "02 — CONCEPT",
          index: "02 / 04",
          title: "From Data to Decision",
          desc: "Developing approaches that translate fragmented environmental information into intelligence for real-world decisions.",
          image: "/images/card-digital.jpg",
          tag: "ANALYTICS · DECISION",
          linkText: "Explore Concept",
        },
        {
          badge: "03 — APPLICATION",
          index: "03 / 04",
          title: "Technology for a Changing Environment",
          desc: "Exploring practical applications of emerging technologies across climate, nature, land, water and environmental systems.",
          image: "/images/card-energy.jpg",
          tag: "CLIMATE · WATER",
          linkText: "Explore Application",
        },
        {
          badge: "04 — METHODOLOGY",
          index: "04 / 04",
          title: "AI-Driven Climate & Risk Analytics",
          desc: "Custom methodologies for real-time monitoring of planetary boundaries and supply chain vulnerabilities.",
          image: "/images/hero-video-thumb.jpg",
          tag: "AI · RISK · MONITORING",
          linkText: "Explore Methodology",
        },
      ],
    },
    partnerships: {
      badge: "SECTION 03 — IMPACT",
      aboutTitle: "ABOUT PARTNERSHIPS",
      headline: "Accelerate collective action.",
      description:
        "KliSus collaborates with institutions, industry leaders, technology developers and research organizations to scale environmental intelligence and build resilient economic models for tomorrow.",
      focusAreas: ["Institutions", "Enterprise", "Research", "Capital"],
      ctaText: "Explore Partnerships",
      ctaHref: "#partnerships",
      cards: [
        {
          badge: "01 — INSTITUTIONAL",
          index: "01 / 04",
          title: "Global Environmental Data Coalition",
          desc: "Uniting global institutions to standardize open environmental intelligence and satellite observation streams.",
          image: "/images/card-digital.jpg",
          tag: "INSTITUTIONS · DATA",
          linkText: "View Partnership",
        },
        {
          badge: "02 — ENTERPRISE",
          index: "02 / 04",
          title: "Enterprise Climate Resilience Framework",
          desc: "Co-developing enterprise-grade ESG and risk analytics platforms for global supply chain managers.",
          image: "/images/card-tech.jpg",
          tag: "ENTERPRISE · SUPPLY CHAIN",
          linkText: "View Partnership",
        },
        {
          badge: "03 — RESEARCH",
          index: "03 / 04",
          title: "Academic & Geospatial Science Lab",
          desc: "Partnering with leading university research centers to advance predictive modeling for climate-risk assets.",
          image: "/images/intelligence/paper-03.jpg",
          tag: "RESEARCH · LAB",
          linkText: "View Partnership",
        },
        {
          badge: "04 — CAPITAL",
          index: "04 / 04",
          title: "Capital & Nature Infrastructure Alliance",
          desc: "Connecting institutional investors with climate technology ventures to accelerate sustainable capital deployment.",
          image: "/images/card-energy.jpg",
          tag: "CAPITAL · INFRASTRUCTURE",
          linkText: "View Alliance",
        },
      ],
    },
  };

  const currentContent = tabData[activeTab];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="how-we-drive-impact" className="w-full max-w-[1680px] mx-auto my-3 sm:my-6 px-2 sm:px-4">
      {/* LIGHT NAVY CONTAINER CARD */}
      <div className="w-full rounded-[24px] sm:rounded-[32px] bg-[#e1eaf5] border border-blue-200/60 shadow-sm px-4 sm:px-8 lg:px-12 py-8 sm:py-14 md:py-16">
        
        {/* TOP SECTION HEADER & WEF-STYLE PILL NAVBAR SWITCHER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-blue-200/80 mb-8 sm:mb-10">
          {/* SECTION TITLE & EYEBROW */}
          <div className="space-y-1.5 sm:space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-blue-700 bg-white/90 border border-blue-200/80 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>{currentContent.badge}</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-semibold text-slate-950 tracking-tight">
              How we drive impact
            </h2>
          </div>

          {/* WEF STYLE PILL NAVBAR TABS - RESPONSIVE SEGMENTED CONTROL */}
          <div className="bg-slate-200/90 p-1 sm:p-1.5 rounded-2xl sm:rounded-full grid grid-cols-3 sm:flex sm:items-center gap-1 border border-blue-200/60 shadow-inner w-full sm:w-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-2 sm:px-6 py-2 sm:py-2.5 rounded-xl sm:rounded-full text-[10px] sm:text-sm font-semibold tracking-wider transition-all duration-300 min-h-[38px] sm:min-h-[44px] flex items-center justify-center text-center whitespace-nowrap ${
                    isActive
                      ? "bg-slate-950 text-white shadow-md scale-[1.02]"
                      : "text-slate-700 hover:text-slate-950 hover:bg-white/60"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* MAIN IMPACT GRID: LEFT INFO CARD + RIGHT SLIDER CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT COLUMN: WHITE ABOUT CARD */}
          <div className="lg:col-span-4 bg-white/95 rounded-[24px] p-5 sm:p-8 flex flex-col justify-between border border-blue-100/90 shadow-md min-h-[320px] sm:min-h-[380px]">
            <div className="space-y-4 sm:space-y-5">
              {/* CARD EYEBROW */}
              <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-slate-400">
                {currentContent.aboutTitle}
              </span>

              {/* CARD HEADLINE */}
              <h3 className="text-xl sm:text-3xl font-bold text-slate-950 tracking-tight leading-snug">
                {currentContent.headline}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-xs sm:text-base text-slate-600 font-light leading-relaxed">
                {currentContent.description}
              </p>

              {/* FOCUS AREAS BADGES */}
              <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-1.5">
                {currentContent.focusAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-100 text-slate-700 border border-slate-200/80 text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* ACTION BUTTON */}
            <div className="pt-4 sm:pt-6 border-t border-slate-100 mt-4 sm:mt-0">
              <a
                href={currentContent.ctaHref}
                className="inline-flex items-center justify-between w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-slate-950 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-blue-600 transition-all duration-300 shadow-md group min-h-[44px]"
              >
                <span>{currentContent.ctaText}</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: HORIZONTAL SCROLLABLE CARDS */}
          <div className="lg:col-span-8 relative flex flex-col justify-between space-y-4">
            
            {/* CARDS SCROLL CONTAINER */}
            <div
              ref={scrollContainerRef}
              className="flex items-center space-x-3 sm:space-x-4 overflow-x-auto scrollbar-none scroll-smooth pb-2 pt-1 px-1"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {currentContent.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="w-[250px] sm:w-[300px] h-[350px] sm:h-[380px] shrink-0 rounded-[24px] relative overflow-hidden bg-[#020617] border border-blue-900/40 shadow-xl p-5 sm:p-6 flex flex-col justify-between group transition-all duration-500 hover:border-blue-400/60"
                >
                  {/* BACKGROUND IMAGE */}
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.85]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent pointer-events-none" />

                  {/* CARD TOP BADGE & INDEX */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-mono font-semibold tracking-wider text-blue-300 bg-blue-950/80 backdrop-blur-md border border-blue-500/40 shadow-md">
                      {card.badge}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 font-medium">
                      {card.index}
                    </span>
                  </div>

                  {/* CARD CONTENT BOTTOM */}
                  <div className="relative z-10 space-y-2.5 sm:space-y-3 pt-6">
                    <h4 className="text-base sm:text-xl font-bold tracking-tight text-white group-hover:text-blue-200 transition-colors leading-snug drop-shadow-md">
                      {card.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-300 font-light leading-relaxed line-clamp-3">
                      {card.desc}
                    </p>

                    <div className="pt-2 flex items-center justify-between border-t border-slate-800/80">
                      <span className="text-[8.5px] sm:text-[9px] font-mono tracking-widest text-blue-400 uppercase font-semibold">
                        {card.tag}
                      </span>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-300 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all shadow-md">
                        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* BOTTOM NAVIGATION ARROWS & CONTROLS */}
            <div className="flex items-center justify-between pt-2 px-2">
              <div className="text-xs font-medium text-slate-500">
                Showing <span className="font-semibold text-slate-900">{currentContent.cards.length}</span> featured initiatives
              </div>

              {/* SCROLL CONTROLS ARROW BUTTONS */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => scroll("left")}
                  aria-label="Scroll left"
                  className="w-9 h-9 rounded-full bg-white/90 border border-blue-200/80 text-slate-700 hover:bg-slate-950 hover:text-white flex items-center justify-center transition-all shadow-sm active:scale-95 min-h-[36px] min-w-[36px]"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  aria-label="Scroll right"
                  className="w-9 h-9 rounded-full bg-white/90 border border-blue-200/80 text-slate-700 hover:bg-slate-950 hover:text-white flex items-center justify-center transition-all shadow-sm active:scale-95 min-h-[36px] min-w-[36px]"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
