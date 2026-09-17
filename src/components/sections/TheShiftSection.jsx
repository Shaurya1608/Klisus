"use client";

import { motion } from "framer-motion";

export default function TheShiftSection() {
  return (
    <section id="the-shift" className="w-full max-w-[1680px] mx-auto my-3 sm:my-6 px-2 sm:px-4">
      {/* LIGHT NAVY CONTAINER CARD */}
      <div className="w-full rounded-[24px] sm:rounded-[32px] bg-[#e1eaf5] border border-blue-200/60 shadow-sm px-4 sm:px-8 md:px-16 lg:px-20 py-8 sm:py-16 md:py-20">
        
        {/* CENTERED EYEBROW BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <span className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-blue-700 bg-white/90 border border-blue-200/80 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>SECTION 02 — THE SHIFT</span>
          </span>
        </motion.div>

        {/* MAIN CENTERED HEADLINE WITH LINE-BY-LINE REVEAL */}
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-8">
          <h2 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-slate-950 tracking-tight leading-[1.15]">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="block"
            >
              Environmental change is
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="block text-blue-600 font-normal"
            >
              moving into the economy.
            </motion.span>
          </h2>

          {/* ELEGANT BODY COPY WITH STAGGERED REVEAL */}
          <div className="max-w-3xl mx-auto text-slate-700 text-sm sm:text-lg md:text-xl font-light leading-relaxed space-y-3 sm:space-y-4 pt-1 sm:pt-2">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              Climate, nature and resource pressures are no longer isolated environmental concerns.
              They are increasingly influencing capital, infrastructure, supply chains, markets and long-term business decisions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-slate-900 font-normal pt-1"
            >
              As these systems change, organisations need better ways to observe what is happening, understand what it means and act on what comes next.
            </motion.p>
          </div>
        </div>

      </div>
    </section>
  );
}
