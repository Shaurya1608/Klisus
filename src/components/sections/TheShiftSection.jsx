"use client";

import { motion } from "framer-motion";

export default function TheShiftSection() {
  return (
    <section id="the-shift" className="w-full max-w-[1680px] mx-auto my-2 sm:my-3 px-2 sm:px-4">
      {/* PREMIUM MINIMALIST GLASS CONTAINER CARD */}
      <div className="relative w-full rounded-[24px] sm:rounded-[32px] md:rounded-[40px] bg-gradient-to-b from-[#e6eff9] via-[#e2edfa] to-[#dae7f6] border border-blue-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.04)] px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-10 md:py-12 lg:py-14 overflow-hidden transition-all duration-500 hover:border-blue-300/90 hover:shadow-[0_12px_36px_rgba(37,99,235,0.06)]">
        
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

        {/* MAIN CENTERED HEADLINE WITH LINE-BY-LINE REVEAL */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-3.5 sm:space-y-5">
          <h2 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-slate-950 tracking-tight leading-[1.12]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="block"
            >
              Environmental change is
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="block text-blue-600 font-normal"
            >
              moving into the economy.
            </motion.span>
          </h2>

          {/* ELEGANT MINIMAL DIVIDER DOT ACCENT */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="flex items-center justify-center space-x-2.5 py-0.5"
          >
            <div className="w-10 h-[1px] bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
            <div className="w-1 h-1 rounded-full bg-blue-400" />
            <div className="w-10 h-[1px] bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
          </motion.div>

          {/* ELEGANT BODY COPY WITH STAGGERED REVEAL */}
          <div className="max-w-3xl mx-auto text-slate-700 text-xs sm:text-base md:text-lg font-light leading-relaxed space-y-2.5 sm:space-y-3">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              Climate, nature and resource pressures are no longer isolated environmental concerns.
              They are increasingly influencing capital, infrastructure, supply chains, markets and long-term business decisions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-slate-900 font-normal"
            >
              As these systems change, organisations need better ways to observe what is happening, understand what it means and act on what comes next.
            </motion.p>
          </div>
        </div>

      </div>
    </section>
  );
}
