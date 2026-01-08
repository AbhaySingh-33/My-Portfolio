"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { fadeIn, scrollAnimationConfig } from "@/lib/animations";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Your City, Country",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:your.email@example.com",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={scrollAnimationConfig.viewport}
          variants={fadeIn("down", 0)}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-gradient">Get In Touch</h2>
          <p className="mx-auto max-w-2xl">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={scrollAnimationConfig.viewport}
            variants={fadeIn("right", 0.1)}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-6 text-2xl font-bold">Let's Connect</h3>
              <p className="mb-8 leading-relaxed text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Drop me a message and
                let's create something amazing together!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  variants={fadeIn("right", 0.2 + index * 0.1)}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 rounded-xl border border-border bg-muted/30 p-4 transition-all hover:border-primary/50 hover:bg-muted/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <method.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {method.label}
                    </p>
                    <p className="font-semibold">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="mb-4 text-sm font-medium text-muted-foreground">
                Follow Me
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-muted/30 text-muted-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={scrollAnimationConfig.viewport}
            variants={fadeIn("left", 0.1)}
            className="rounded-2xl border border-border bg-muted/30 p-8"
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition-all hover:bg-accent hover:shadow-lg hover:shadow-accent/50"
              >
                Send Message
                <Send className="h-4 w-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />

      {/* Footer */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={scrollAnimationConfig.viewport}
        variants={fadeIn("up", 0.3)}
        className="mt-20 border-t border-border pt-8 text-center text-sm text-muted-foreground"
      >
        <p>© 2026 Your Name. Built with Next.js & Tailwind CSS.</p>
      </motion.div>
    </section>
  );
}
