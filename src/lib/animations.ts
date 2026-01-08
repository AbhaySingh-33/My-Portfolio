import { Variants } from "framer-motion";

/**
 * Fade in animation from a specific direction
 */
export const fadeIn = (
  direction: "up" | "down" | "left" | "right" = "up",
  delay: number = 0
): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

/**
 * Stagger container for animating children sequentially
 */
export const staggerContainer = (
  staggerChildren: number = 0.1,
  delayChildren: number = 0
): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};

/**
 * Scale animation for hover effects
 */
export const scaleOnHover: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

/**
 * Slide in animation with opacity
 */
export const slideIn = (
  direction: "left" | "right" | "up" | "down",
  delay: number = 0
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay,
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };
};

/**
 * Text variant for staggered text animations
 */
export const textVariant = (delay: number = 0): Variants => {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay,
      },
    },
  };
};

/**
 * Spring configuration presets
 */
export const springConfig = {
  soft: { type: "spring" as const, stiffness: 100, damping: 20 },
  medium: { type: "spring" as const, stiffness: 200, damping: 25 },
  stiff: { type: "spring" as const, stiffness: 300, damping: 30 },
};

/**
 * Scroll animation configuration for whileInView
 */
export const scrollAnimationConfig = {
  viewport: { once: true, amount: 0.25 },
};
