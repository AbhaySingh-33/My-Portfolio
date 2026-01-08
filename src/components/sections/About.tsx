"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Zap, GraduationCap, Briefcase, Award } from "lucide-react";
import { fadeIn, scrollAnimationConfig } from "@/lib/animations";
import SkillsMarquee from "@/components/ui/SkillsMarquee";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, WebRTC, Tailwind CSS",
  },
  {
    icon: Zap,
    title: "Backend & APIs",
    description: "Node.js, Express.js, REST APIs, Socket.io, Apache Kafka",
  },
  {
    icon: Palette,
    title: "Database & Caching",
    description: "MongoDB, PostgreSQL, MySQL, Redis, Appwrite",
  },
  {
    icon: Rocket,
    title: "Cloud & DevOps",
    description: "AWS Foundations, Docker, Kubernetes, Git, Linux",
  },
];

const marqueeSkills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express.js",
  "Socket.io",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "OpenAI API",
  "WebRTC",
  "Apache Kafka",
  "Tailwind CSS",
];

const timeline = [
  {
    type: "education",
    icon: GraduationCap,
    title: "BTech - Computer Science & Engineering",
    organization: "Parul Institute of Technology, Parul University",
    period: "Aug 2023 - May 2027",
    description: "CGPA: 8.77/10 | Vadodara, Gujarat",
  },
  {
    type: "cert",
    icon: Award,
    title: "AWS Academy Graduate - Cloud Foundations",
    organization: "Amazon Web Services",
    period: "Aug 2025",
    description: "20 hrs course covering AWS core services and cloud computing fundamentals",
  },
  {
    type: "cert",
    icon: Award,
    title: "Computer Networks & Internet Protocol",
    organization: "NPTEL - Elite + Silver (79%)",
    period: "2024",
    description: "Advanced certification in networking protocols and computer networks",
  },
  {
    type: "cert",
    icon: Briefcase,
    title: "Artificial Intelligence Fundamentals",
    organization: "IBM SkillsBuild",
    period: "2024",
    description: "AI concepts including NLP, Computer Vision, ML, and Deep Learning",
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
            BTech CSE Student at Parul University, building production-ready full-stack applications
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
            <h3 className="text-2xl font-bold">My Journey</h3>
            <p className="leading-relaxed">
              I'm a passionate Computer Science student at <strong>Parul Institute of Technology</strong> in Vadodara, Gujarat, 
              with a CGPA of 8.77/10. I specialize in full-stack development with expertise in <strong>MERN stack</strong>, 
              <strong> Next.js</strong>, and <strong>microservices architecture</strong>.
            </p>
            <p className="leading-relaxed">
              I've built production-ready applications including <strong>HireHeaven</strong> - an AI-powered job portal with 
              microservices architecture, <strong>Chattriz</strong> - a real-time voice & video chat platform, and an 
              <strong> AI-powered blogging platform</strong>. My projects leverage modern technologies like PostgreSQL, 
              Redis, Docker, and Kubernetes for scalability.
            </p>
            <p className="leading-relaxed">
              Certified in <strong>AWS Cloud Foundations</strong>, <strong>Computer Networks (NPTEL)</strong>, and 
              <strong> AI Fundamentals (IBM)</strong>, I'm constantly exploring cutting-edge technologies and contributing 
              to innovative solutions in web development and cloud computing.
            </p>
            <div className="flex flex-wrap gap-3">
              {["MERN Stack", "Next.js", "Microservices", "PostgreSQL", "Redis", "Docker", "AWS"].map(
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

        {/* Skills Marquee */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={scrollAnimationConfig.viewport}
          variants={fadeIn("up", 0.2)}
          className="mt-16"
        >
          <h3 className="mb-8 text-center text-2xl font-bold">Tech Stack</h3>
          <SkillsMarquee skills={marqueeSkills} speed={40} />
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Drag to pause • Hover to pause
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={scrollAnimationConfig.viewport}
          variants={fadeIn("up", 0.3)}
          className="mt-20"
        >
          <h3 className="mb-12 text-center text-2xl font-bold">Education & Certifications</h3>
          <div className="relative space-y-8">
            {/* Vertical Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 hidden sm:block" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn("right", index * 0.1)}
                className="relative flex gap-6 sm:pl-12"
              >
                {/* Icon */}
                <div className="absolute left-0 hidden sm:flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 rounded-2xl border border-border bg-muted/30 p-6 backdrop-blur-sm">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <h4 className="font-semibold">{item.title}</h4>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {item.period}
                    </span>
                  </div>
                  <p className="mb-2 text-sm font-medium text-muted-foreground">
                    {item.organization}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />
    </section>
  );
}
