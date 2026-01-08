"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface SkillsMarqueeProps {
  skills: string[];
  speed?: number;
}

export default function SkillsMarquee({ skills, speed = 30 }: SkillsMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="relative w-full overflow-hidden py-8">
      <motion.div
        ref={marqueeRef}
        className="flex gap-8"
        animate={{
          x: isPaused ? undefined : [0, -100 * (skills.length / 3) + "%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={() => setIsPaused(true)}
        onDragEnd={() => setIsPaused(false)}
      >
        {duplicatedSkills.map((skill, index) => (
          <motion.div
            key={`${skill}-${index}`}
            className="flex-shrink-0 rounded-2xl border-2 border-primary/30 bg-primary/10 px-8 py-4 backdrop-blur-sm"
            whileHover={{ scale: 1.1, borderColor: "var(--color-primary)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <span className="text-lg font-semibold text-foreground whitespace-nowrap">
              {skill}
            </span>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
