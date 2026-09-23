"use client";

import { motion } from "framer-motion";

export default function FadeInScroll({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) {
  const directionOffset = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initialOffset = directionOffset[direction] || directionOffset.up;

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...initialOffset,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1], // Apple-style smooth cubic-bezier curve
      }}
      className={`${className} transform-gpu`}
    >
      {children}
    </motion.div>
  );
}
