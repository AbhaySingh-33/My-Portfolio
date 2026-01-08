"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Zap } from "lucide-react";
import { fadeIn, scrollAnimationConfig } from "@/lib/animations";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, Tailwind CSS",
  },
  {
    icon: Zap,
    title: "Backend Development",
    description: "Node.js, Express, PostgreSQL, MongoDB",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Adobe XD, Responsive Design",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimization, SEO, Web Vitals",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={scrollAnimationConfig.viewport}
          variants={fadeIn("down", 0)}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-gradient">About Me</h2>
          <p className="mx-auto max-w-2xl">
            Passionate developer with a love for creating seamless digital
            experiences
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* About Text */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={scrollAnimationConfig.viewport}
            variants={fadeIn("right", 0.1)}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Who I Am</h3>
            <p className="leading-relaxed">
              I'm a full-stack developer with a passion for building modern web
              applications. With expertise in React, Next.js, and TypeScript, I
              create performant and scalable solutions that users love.
            </p>
            <p className="leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "PostgreSQL"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={scrollAnimationConfig.viewport}
            variants={fadeIn("left", 0.1)}
            className="grid gap-6 sm:grid-cols-2"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={fadeIn("up", index * 0.1)}
                whileHover={{ scale: 1.05 }}
                className="group rounded-2xl border border-border bg-muted/30 p-6 transition-all hover:border-primary/50 hover:bg-muted/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                  <skill.icon className="h-6 w-6" />
                </div>
                <h4 className="mb-2 font-semibold">{skill.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />
    </section>
  );
}
