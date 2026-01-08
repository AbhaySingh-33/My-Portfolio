"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { fadeIn, scrollAnimationConfig } from "@/lib/animations";
import { useState } from "react";

const projects = [
  {
    title: "HireHeaven - AI Job Portal",
    description:
      "Production-ready microservices-based job portal with Next.js frontend, event-driven architecture, and advanced AI career tools. Features NeonDB PostgreSQL with branching, Redis caching, Docker containerization, and OpenAI integration for resume analysis and career guidance.",
    image: "/project-1.jpg",
    tech: ["Next.js", "PostgreSQL (Neon)", "Express.js", "Redis", "Docker", "Kubernetes", "OpenAI API"],
    github: "https://github.com/AbhaySingh-33/Job-Portal",
    demo: "#",
    period: "Oct 2024 – Dec 2025",
  },
  {
    title: "Chattriz - Real-time Voice & Video Chat",
    description:
      "Real-time communication platform with WebRTC for peer-to-peer streaming, Simple-Peer for low-latency connections. Includes persistent chat storage with Redis Pub/Sub, comprehensive error handling, and multi-server scalability using Docker containers.",
    image: "/project-2.jpg",
    tech: ["React", "Node.js", "Socket.io", "WebRTC", "Simple-Peer", "Redis"],
    github: "https://github.com/AbhaySingh-33/chatApplication",
    demo: "#",
    period: "May 2025 – Aug 2025",
  },
  {
    title: "AI Blog Platform - Appwrite",
    description:
      "Modern AI-powered blog platform with Appwrite backend for database and storage. Features AI-assisted content generation via OpenAI API, secure GitHub OAuth authentication with password reset, and responsive UI across all devices built with Tailwind CSS and React (Vite).",
    image: "/project-3.jpg",
    tech: ["React (Vite)", "Appwrite", "OpenAI API", "GitHub OAuth", "Tailwind CSS"],
    github: "https://github.com/AbhaySingh-33/Blog-Application",
    demo: "#",
    period: "Dec 2024 – March 2025",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovering, setIsHovering] = useState(false);
  
  // 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovering) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={scrollAnimationConfig.viewport}
      variants={fadeIn("up", index * 0.1)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ z: 50 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-background shadow-lg transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
    >
      {/* Project Image Placeholder */}
      <div className="relative h-48 overflow-hidden bg-linear-to-br from-primary/20 to-accent/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="mb-2 text-5xl font-bold text-primary/30">
              {project.title.charAt(0)}
            </div>
            <p className="text-sm text-muted-foreground">
              {project.period}
            </p>
          </div>
        </div>
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      {/* Project Content */}
      <div className="p-6" style={{ transform: "translateZ(20px)" }}>
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
          {project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Card Shine Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-linear-to-tr from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100"
        style={{
          backgroundPosition: "0% 0%",
        }}
        animate={isHovering ? {
          backgroundPosition: ["0% 0%", "100% 100%"],
        } : {}}
        transition={{ duration: 0.5, ease: "linear" }}
      />
    </motion.div>
  );
}

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
            Production-ready applications with microservices, real-time features, and AI integration
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: "1000px" }}>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
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
            href="https://github.com/AbhaySingh-33"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3 font-medium text-primary transition-all hover:scale-105 hover:border-accent hover:bg-accent/10 hover:text-accent hover:shadow-lg hover:shadow-accent/30"
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
