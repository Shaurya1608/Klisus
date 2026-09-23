"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section id="how-we-drive-impact" className="w-full max-w-[1680px] mx-auto my-2 sm:my-3 px-2 sm:px-4">
      {/* PREMIUM MINIMALIST GLASS CONTAINER CARD */}
      <div className="relative w-full rounded-[24px] sm:rounded-[32px] md:rounded-[40px] bg-gradient-to-b from-[#e6eff9] via-[#e2edfa] to-[#dae7f6] border border-blue-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.04)] px-4 sm:px-8 lg:px-12 py-6 sm:py-10 md:py-12 overflow-hidden transition-all duration-500 hover:border-blue-300/90 hover:shadow-[0_12px_36px_rgba(37,99,235,0.06)]">
        
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

        {/* TOP SECTION HEADER & WEF-STYLE PILL NAVBAR SWITCHER */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 pb-5 sm:pb-6 border-b border-blue-200/70 mb-6 sm:mb-8">
          {/* SECTION TITLE */}
          <div>
            <h2 className="text-xl sm:text-3xl font-semibold text-slate-950 tracking-tight">
              How we drive impact
            </h2>
          </div>

          {/* WEF STYLE PILL NAVBAR TABS WITH ANIMATED SLIDING PILL */}
          <div className="bg-white/80 backdrop-blur-md p-1 sm:p-1.5 rounded-2xl sm:rounded-full grid grid-cols-3 sm:flex sm:items-center gap-1 border border-blue-200/80 shadow-sm w-full sm:w-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-3 sm:px-6 py-2 sm:py-2.5 rounded-xl sm:rounded-full text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider transition-colors duration-300 min-h-[38px] sm:min-h-[42px] flex items-center justify-center text-center whitespace-nowrap ${
                    isActive ? "text-white" : "text-slate-700 hover:text-slate-950 hover:bg-white/60"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabImpact"
                      className="absolute inset-0 bg-slate-950 rounded-xl sm:rounded-full shadow-md"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* MAIN IMPACT GRID: LEFT INFO CARD + RIGHT SLIDER CARDS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch"
          >
            {/* LEFT COLUMN: WHITE ABOUT CARD */}
            <div className="lg:col-span-4 bg-white/95 backdrop-blur-md rounded-[20px] sm:rounded-[28px] p-5 sm:p-7 flex flex-col justify-between border border-blue-100/90 shadow-[0_4px_20px_rgba(15,23,42,0.03)] min-h-[310px] sm:min-h-[360px] transition-all duration-300 hover:border-blue-200 hover:shadow-md">
              <div className="space-y-3.5 sm:space-y-4">
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
                <div className="pt-1 flex flex-wrap items-center gap-1.5">
                  {currentContent.focusAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-100/90 text-slate-700 border border-slate-200/80 text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-full transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACTION BUTTON */}
              <div className="pt-4 border-t border-slate-100 mt-4 sm:mt-0">
                <a
                  href={currentContent.ctaHref}
                  className="inline-flex items-center justify-between w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white text-slate-950 border border-blue-200/90 text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all duration-300 shadow-md group min-h-[42px]"
                >
                  <span>{currentContent.ctaText}</span>
                  <div className="w-6 h-6 rounded-full bg-slate-950 text-white group-hover:bg-white group-hover:text-slate-950 flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
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
                    className="w-[250px] sm:w-[290px] h-[340px] sm:h-[370px] shrink-0 rounded-[20px] sm:rounded-[24px] relative overflow-hidden bg-gradient-to-b from-[#1b3456] to-[#0f1f36] border border-blue-300/30 shadow-xl p-5 sm:p-6 flex flex-col justify-between group transition-all duration-500 hover:border-blue-400/60 hover:shadow-2xl"
                  >
                    {/* BACKGROUND IMAGE */}
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.85] opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f36] via-[#142946]/60 to-transparent pointer-events-none" />

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
                    <div className="relative z-10 space-y-2 sm:space-y-2.5 pt-6">
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
              <div className="flex items-center justify-between pt-1 px-2">
                <div className="text-xs font-medium text-slate-500">
                  Showing <span className="font-semibold text-slate-900">{currentContent.cards.length}</span> featured initiatives
                </div>

                {/* SCROLL CONTROLS ARROW BUTTONS */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => scroll("left")}
                    aria-label="Scroll left"
                    className="w-9 h-9 rounded-full bg-white/95 border border-blue-200/90 text-slate-700 hover:bg-slate-950 hover:text-white flex items-center justify-center transition-all shadow-sm active:scale-95 min-h-[36px] min-w-[36px]"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => scroll("right")}
                    aria-label="Scroll right"
                    className="w-9 h-9 rounded-full bg-white/95 border border-blue-200/90 text-slate-700 hover:bg-slate-950 hover:text-white flex items-center justify-center transition-all shadow-sm active:scale-95 min-h-[36px] min-w-[36px]"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
