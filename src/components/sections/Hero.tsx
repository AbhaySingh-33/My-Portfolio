"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Award, Code2, Sparkles } from "lucide-react";
import { fadeIn, staggerContainer, textVariant } from "@/lib/animations";
import TypewriterText from "@/components/ui/TypewriterText";
import InteractiveBackground from "@/components/ui/InteractiveBackground";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 pt-16 sm:px-6 lg:px-8"
    >
      {/* Interactive Background */}
      <div className="absolute inset-0 z-0">
        <InteractiveBackground />
      </div>

      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16"
      >
        {/* Left: Text Content */}
        <div className="flex flex-col justify-center space-y-8">
          {/* Greeting */}
          <motion.div
            variants={fadeIn("down", 0)}
            className="flex items-center gap-2 text-lg font-medium text-accent sm:text-xl"
          >
            <Sparkles className="h-5 w-5 animate-pulse" />
            <span>Hi, I'm</span>
          </motion.div>

          {/* Name with Typewriter Effect */}
          <motion.h1
            variants={textVariant(0.1)}
            className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
          >
             <span className="text-gradient">Abhay Kumar Singh</span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            variants={textVariant(0.2)}
            className="h-10 text-2xl font-semibold text-muted-foreground sm:text-3xl lg:text-4xl"
          >
            <TypewriterText
              text={[
                "Full-stack Developer",
                "MERN Stack Specialist", 
                "Problem Solver",
                "Tech Enthusiast"
              ]}
              speed={50}
              className="text-foreground"
            />
          </motion.div>

          <motion.p
            variants={fadeIn("up", 0.3)}
            className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            BTech CSE Student specializing in full-stack development with MERN, Next.js, and microservices.
            Building scalable applications with real-time features and AI integration.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            className="flex flex-col items-start gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/50"
            >
              <span className="relative z-10">View Projects</span>
              <ArrowDown className="relative z-10 h-4 w-4 transition-transform group-hover:translate-y-1" />
              <motion.div
                className="absolute inset-0 bg-accent"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3 font-medium text-primary transition-all hover:scale-105 hover:border-accent hover:bg-accent/10 hover:text-accent hover:shadow-lg hover:shadow-accent/30"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            className="flex items-center gap-6"
          >
            <a
              href="https://github.com/AbhaySingh-33"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all hover:scale-110 hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhay-singh-77b81833b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all hover:scale-110 hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:abhaysingh957152@gmail.com"
              className="text-muted-foreground transition-all hover:scale-110 hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </div>

        {/* Right: Profile Picture & Stats */}
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Floating Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative h-64 w-64 rounded-full bg-linear-to-br from-primary/30 via-accent/30 to-primary/30 p-2"
            >
              <div className="relative h-full w-full overflow-hidden rounded-full bg-background">
                <Image
                  src="/profile.jpg"
                  alt="Abhay Kumar Singh"
                  width={256}
                  height={256}
                  className="h-full w-full rounded-full object-cover"
                  priority
                />
              </div>
            </motion.div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-3xl" />
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            variants={staggerContainer(0.1, 0.6)}
            initial="hidden"
            animate="show"
            className="grid w-full max-w-md grid-cols-3 gap-4"
          >
            <motion.div
              variants={fadeIn("up", 0)}
              className="rounded-2xl border border-border bg-muted/30 p-4 text-center backdrop-blur-sm transition-transform hover:scale-105"
            >
              <Code2 className="mx-auto mb-2 h-8 w-8 text-primary" />
              <p className="text-2xl font-bold text-foreground">3</p>
              <p className="text-sm text-muted-foreground">Projects</p>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.1)}
              className="rounded-2xl border border-border bg-muted/30 p-4 text-center backdrop-blur-sm transition-transform hover:scale-105"
            >
              <Github className="mx-auto mb-2 h-8 w-8 text-primary" />
              <p className="text-2xl font-bold text-foreground">15+</p>
              <p className="text-sm text-muted-foreground">GitHub Stars</p>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.2)}
              className="rounded-2xl border border-border bg-muted/30 p-4 text-center backdrop-blur-sm transition-transform hover:scale-105"
            >
              <Award className="mx-auto mb-2 h-8 w-8 text-primary" />
              <p className="text-2xl font-bold text-foreground">3</p>
              <p className="text-sm text-muted-foreground">Certifications</p>
            </motion.div>
          </motion.div>
        </div>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>

      {/* Static Background Decoration - Reduced intensity */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-30">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>
    </section>
  );
}
