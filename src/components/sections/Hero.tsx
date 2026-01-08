"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/20 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        {/* Greeting */}
        <motion.p
          variants={fadeIn("down", 0)}
          className="mb-4 text-lg font-medium text-accent sm:text-xl"
        >
          Hi, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={textVariant(0.1)}
          className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="text-gradient">Your Name</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          variants={textVariant(0.2)}
          className="mb-8 text-2xl font-semibold text-muted-foreground sm:text-3xl lg:text-4xl"
        >
          Full Stack Developer & Creative Designer
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeIn("up", 0.3)}
          className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          I craft beautiful, functional web experiences with modern technologies.
          Passionate about clean code, user experience, and bringing ideas to
          life.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground transition-all hover:scale-105 hover:bg-accent hover:shadow-lg hover:shadow-accent/50"
          >
            View My Work
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3 font-medium text-primary transition-all hover:scale-105 hover:border-accent hover:bg-accent/10 hover:text-accent"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          className="mt-12 flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-all hover:scale-110 hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-all hover:scale-110 hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-muted-foreground transition-all hover:scale-110 hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>
    </section>
  );
}
