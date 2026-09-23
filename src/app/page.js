"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TheShiftSection from "@/components/sections/TheShiftSection";
import ImpactSection from "@/components/sections/ImpactSection";
import InnovationSection from "@/components/sections/InnovationSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import VideoModal from "@/components/ui/VideoModal";
import NavMenuOverlay from "@/components/ui/NavMenuOverlay";
import Footer from "@/components/layout/Footer";

import FadeInScroll from "@/components/ui/FadeInScroll";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isLangEn, setIsLangEn] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const slides = [
    {
      title: "BUILDING INTELLIGENCE & TECHNOLOGY FOR A CHANGING WORLD",
      subtitle: "Building intelligence and technology for a changing world.",
      bgImage: "/bg-landing/ChatGPT Image Sep 16, 2026, 11_10_43 PM.png",
      bgVideo: null,
      previewImage: "/images/card-tech.jpg",
      tags: ["Intelligence", "Technology", "Future"],
      primaryCta: "Explore KliSus",
      secondaryCta: "Build with Us",
    },
    {
      title: "EMPOWERING INNOVATION FOR A CHANGING WORLD",
      subtitle: "Building intelligence and technology for a changing world.",
      bgImage: "/bg-landing/ChatGPT Image Sep 16, 2026, 11_10_43 PM.png",
      bgVideo: null,
      previewImage: "/images/hero-video-thumb.jpg",
      tags: ["AI Systems", "Automation", "Scale"],
      primaryCta: "Explore KliSus",
      secondaryCta: "Build with Us",
    },
    {
      title: "ARCHITECTING NEXT-GEN SOLUTIONS FOR THE FUTURE",
      subtitle: "Building intelligence and technology for a changing world.",
      bgImage: "/bg-landing/ChatGPT Image Sep 16, 2026, 11_10_43 PM.png",
      bgVideo: null,
      previewImage: "/images/card-tech.jpg",
      tags: ["Enterprise", "Cloud Native", "KliSus"],
      primaryCta: "Explore KliSus",
      secondaryCta: "Build with Us",
    },
  ];

  const currentSlide = slides[activeSlide];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#eef2f6] text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      {/* FIRST FOLD: NAVBAR + HERO SECTION */}
      <div className="min-h-screen lg:h-[calc(100vh+50px)] w-full flex flex-col justify-between px-1 sm:px-2 md:px-3 pt-1 pb-2 space-y-2 sm:space-y-0">
        {/* TOP NAVIGATION BAR */}
        <Navbar
          isLangEn={isLangEn}
          setIsLangEn={setIsLangEn}
          setIsMenuOpen={setIsMenuOpen}
        />

        {/* SECTION 01 — HERO SECTION */}
        <HeroSection
          currentSlide={currentSlide}
          slides={slides}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
          setIsVideoModalOpen={setIsVideoModalOpen}
        />
      </div>

      {/* SECTION 02 — THE SHIFT */}
      <FadeInScroll direction="up">
        <TheShiftSection />
      </FadeInScroll>

      {/* SECTION 03 — HOW WE DRIVE IMPACT */}
      <FadeInScroll direction="up">
        <ImpactSection />
      </FadeInScroll>

      {/* SECTION 04 — INNOVATION */}
      <FadeInScroll direction="up">
        <InnovationSection />
      </FadeInScroll>

      {/* SECTION 07 — FINAL CTA */}
      <FadeInScroll direction="up">
        <FinalCtaSection />
      </FadeInScroll>

      {/* FOOTER BAR */}
      <Footer />

      {/* INTERACTIVE VIDEO MODAL */}
      <VideoModal
        isVideoModalOpen={isVideoModalOpen}
        setIsVideoModalOpen={setIsVideoModalOpen}
        currentSlideTitle={currentSlide.title}
      />

      {/* FULL NAVIGATION MENU OVERLAY */}
      <NavMenuOverlay
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </div>
  );
}
