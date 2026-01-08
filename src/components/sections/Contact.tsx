"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send, CheckCircle, XCircle } from "lucide-react";
import { fadeIn, scrollAnimationConfig } from "@/lib/animations";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "abhaysingh957152@gmail.com",
    href: "mailto:abhaysingh957152@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Vadodara, Gujarat, India",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/AbhaySingh-33",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abhay-singh-77b81833b",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:abhaysingh957152@gmail.com",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // EmailJS credentials from environment variables
      const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      
      // Reset error message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
                    whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-muted/30 text-muted-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Map Embed */}
            <motion.div
              variants={fadeIn("right", 0.4)}
              className="overflow-hidden rounded-2xl border border-border"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118143.42336790485!2d73.09955!3d22.30733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1641234567890!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={scrollAnimationConfig.viewport}
            variants={fadeIn("left", 0.1)}
            className="rounded-2xl border border-border bg-muted/30 p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:shadow-lg focus:shadow-primary/10"
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
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:shadow-lg focus:shadow-primary/10"
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
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  whileFocus={{ scale: 1.02 }}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:shadow-lg focus:shadow-primary/10"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex w-full items-center justify-center gap-2 rounded-lg px-8 py-3 font-medium transition-all ${
                  status === "loading"
                    ? "bg-muted text-muted-foreground cursor-not-allowed"
                    : status === "success"
                    ? "bg-green-600 text-white"
                    : status === "error"
                    ? "bg-red-600 text-white"
                    : "bg-primary text-primary-foreground hover:bg-accent hover:shadow-lg hover:shadow-accent/50"
                }`}
              >
                {status === "loading" && "Sending..."}
                {status === "success" && (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    Message Sent!
                  </>
                )}
                {status === "error" && (
                  <>
                    <XCircle className="h-4 w-4" />
                    Failed to Send
                  </>
                )}
                {status === "idle" && (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </motion.button>

              {status === "error" && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  Please configure EmailJS credentials in the Contact component.
                </p>
              )}
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
        <p>© 2026 Abhay Kumar Singh. Built with Next.js, Framer Motion & Tailwind CSS.</p>
      </motion.div>
    </section>
  );
}
