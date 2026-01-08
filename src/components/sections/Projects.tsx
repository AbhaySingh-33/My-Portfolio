"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { fadeIn, scrollAnimationConfig } from "@/lib/animations";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "/project-1.jpg",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, drag-and-drop interface, and team features.",
    image: "/project-2.jpg",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Portfolio CMS",
    description:
      "Headless CMS for managing portfolio content with rich text editor and media management.",
    image: "/project-3.jpg",
    tech: ["Next.js", "Tailwind", "Sanity", "Vercel"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-muted/20 px-4 py-20 sm:px-6 lg:px-8 lg:py-32"
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
          <h2 className="mb-4 text-gradient">Featured Projects</h2>
          <p className="mx-auto max-w-2xl">
            A selection of projects showcasing my skills and creativity
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="show"
              viewport={scrollAnimationConfig.viewport}
              variants={fadeIn("up", index * 0.1)}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background shadow-lg transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-2 text-4xl font-bold text-primary/30">
                      {project.title.charAt(0)}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Project Preview
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={scrollAnimationConfig.viewport}
          variants={fadeIn("up", 0.3)}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3 font-medium text-primary transition-all hover:scale-105 hover:border-accent hover:bg-accent/10 hover:text-accent"
          >
            View More on GitHub
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
}
