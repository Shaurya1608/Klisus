"use client";

import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection({
  currentSlide,
  slides,
  activeSlide,
  setActiveSlide,
  setIsVideoModalOpen,
}) {
  return (
    <section className="relative w-full max-w-[1680px] mx-auto flex-1 rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden shadow-2xl bg-slate-950 text-white flex flex-col justify-between px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 lg:pt-5 pb-4 sm:pb-5 min-h-[460px] sm:min-h-[520px] lg:min-h-[550px] transition-all duration-700 border border-white/10">
      {/* HERO BACKGROUND VIDEO / IMAGE */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {currentSlide.bgVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            ref={(el) => {
              if (el) {
                el.muted = true;
                el.play().catch(() => {});
              }
            }}
            key={currentSlide.bgVideo}
            className="absolute inset-0 object-cover object-center w-full h-full scale-105 brightness-100 contrast-100 transition-all duration-1000"
          >
            <source src={currentSlide.bgVideo} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={currentSlide.bgImage}
            alt="KliSus Background"
            fill
            priority
            quality={100}
            className="object-cover object-center scale-105 brightness-[0.92] contrast-[1.05] transition-all duration-1000"
          />
        )}
      </div>

      {/* GRADIENT OVERLAY FOR HIGH-CONTRAST LEGIBILITY & AMBIENT DEPTH */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-slate-950/40 pointer-events-none" />

      {/* SUBTLE GEOMETRIC WATERMARK GRID ACCENT */}
      <div 
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* TOP & MIDDLE SECTION: GIANT TYPOGRAPHY "KLISUS", SUBTITLE & TAGS */}
      <div className="relative z-10 w-full flex flex-col items-center text-center mt-1 sm:mt-2 lg:mt-2 mb-2 sm:mb-auto">
        {/* Giant Background Brand Title */}
        <motion.h1
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-sans text-[13vw] sm:text-[10vw] lg:text-[8.5vw] font-extralight tracking-[0.1em] text-white/95 uppercase text-center leading-none select-none drop-shadow-[0_12px_36px_rgba(0,0,0,0.6)]"
        >
          KLISUS
        </motion.h1>

        {/* Subtitle & Side Tags Container */}
        <div className="w-full relative flex flex-col md:flex-row items-center justify-between -mt-1 sm:-mt-4 lg:-mt-5 px-1 sm:px-6 gap-3 md:gap-0">
          {/* Left Invisible Spacer for desktop center balance */}
          <div className="hidden md:block w-1/4" />

          {/* Centered Subtitle Tagline directly aligned below KLISUS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full md:w-2/4 text-center px-2 sm:px-4"
          >
            <p className="text-xs sm:text-base md:text-lg text-white/90 leading-snug font-light tracking-wide drop-shadow-md text-center">
              {currentSlide.subtitle}
            </p>
          </motion.div>

          {/* Translucent Glass Tags Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full md:w-1/4 flex flex-wrap md:flex-col items-center md:items-end justify-center md:justify-start gap-1.5 sm:gap-2 pt-1 md:pt-0"
          >
            {currentSlide.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-white/15 backdrop-blur-md border border-white/25 text-white text-[10px] sm:text-xs font-medium px-3 py-1 rounded-full tracking-wider shadow-sm hover:bg-white/25 hover:border-white/40 transition-all duration-300 cursor-default"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* BOTTOM SECTION: HEADING, CTA, SCROLL & PREVIEW CARD */}
      <div className="relative z-10 w-full flex-1 flex flex-col lg:grid lg:grid-cols-12 gap-3 sm:gap-4 items-center lg:items-end justify-between pt-0 sm:pt-1">
        {/* Bottom Left: Headline & CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left space-y-2.5 sm:space-y-4"
        >
          {/* Sub-Heading */}
          <h2 className="font-sans text-base sm:text-2xl lg:text-[30px] font-normal text-white uppercase tracking-wide leading-snug max-w-md drop-shadow-md">
            {currentSlide.title}
          </h2>

          {/* Action Pill Button */}
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="bg-white text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider px-5 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center space-x-2.5 sm:space-x-3 shadow-[0_8px_25px_rgba(255,255,255,0.2)] hover:bg-white hover:shadow-[0_12px_30px_rgba(255,255,255,0.35)] transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97] group min-h-[44px]"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
            </div>
            <span>Explore KliSus</span>
          </button>
        </motion.div>

        {/* Bottom Center: Scroll Now Indicator (Centered) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="hidden sm:flex lg:col-span-2 flex-col items-center justify-end pb-1 my-auto lg:my-0"
        >
          <a
            href="#the-shift"
            className="flex flex-col items-center group text-white/80 hover:text-white transition space-y-1.5"
          >
            <div className="w-5 h-8 rounded-full border-2 border-white/60 flex items-start justify-center p-1 group-hover:border-white transition-colors">
              <div className="w-1 h-2 rounded-full bg-white animate-bounce" />
            </div>
            <span className="text-[11px] font-medium tracking-wider text-white/80 uppercase text-center group-hover:text-white transition-colors">
              Scroll Now
            </span>
          </a>
        </motion.div>

        {/* Bottom Right: Picture-in-Picture Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="lg:col-span-5 w-full flex justify-center sm:justify-end pt-3 lg:pt-0 mt-auto lg:mt-0"
        >
          <div
            onClick={() => setIsVideoModalOpen(true)}
            className="relative w-full max-w-[190px] sm:max-w-[230px] rounded-2xl overflow-hidden border border-white/30 bg-slate-900/70 backdrop-blur-xl shadow-2xl cursor-pointer group transform transition-all duration-300 hover:scale-[1.03] hover:border-white/50 p-2"
          >
            {/* Main Card Image */}
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={currentSlide.previewImage}
                alt="Nature Preview Thumbnail"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

              {/* Play Button Badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/30 backdrop-blur-md border border-white/50 text-white flex items-center justify-center shadow-lg group-hover:bg-white group-hover:text-black transition-all duration-300 group-hover:scale-110">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
              </div>
            </div>

            {/* Bottom Mini Thumbnails Strip */}
            <div className="flex items-center justify-center space-x-1.5 pt-2 pb-0.5 px-0.5">
              {slides.map((s, idx) => (
                <div
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveSlide(idx);
                  }}
                  className={`relative w-7 h-4.5 sm:w-8 sm:h-5 rounded overflow-hidden border transition-all cursor-pointer ${
                    activeSlide === idx
                      ? "border-white ring-2 ring-white/60 scale-105 shadow-md"
                      : "border-white/30 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={s.bgImage}
                    alt="Mini preview"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
