"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, #2563eb 0%, transparent 70%)" }}
        />
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(var(--text-primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="section-container relative z-10 pt-32 pb-20">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs tracking-wider mb-8"
              style={{
                borderColor: "var(--accent)",
                color: "var(--accent)",
                backgroundColor: "var(--accent-subtle)",
              }}
            >
              <Sparkles size={12} />
              Available for Internship &amp; Freelance
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Hi, I'm
              <br />
              <span style={{ color: "var(--accent)" }}>Puvankopis</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-xl sm:text-2xl font-medium mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              Backend Developer <span style={{ color: "var(--text-muted)" }}>|</span> <span style={{ color: "var(--accent)" }}>AI & Web Enthusiast</span>
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base sm:text-lg leading-relaxed max-w-xl mb-10"
              style={{ color: "var(--text-muted)" }}
            >
              I specialize in architecting robust server-side applications and integrating artificial intelligence into modern web solutions. Turning complex logic into seamless experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 mb-14"
            >
              <Button
                href="mailto:puvanakopis@gmail.com"
                size="lg"
              >
                <Mail size={16} />
                Contact Me
              </Button>
              <Button
                href="/Puvanakopis_AI_ML.pdf"
                variant="outline"
                size="lg"
                download
              >
                <Download size={16} />
                Download CV
              </Button>
            </motion.div>

            {/* Social links & Testimonial */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-4">
                {[
                  { icon: Github, href: "https://github.com/puvanakopis", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/puvanakopis", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:puvanakopis@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-200 hover:border-accent hover:text-accent"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text-muted)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                    }}
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm lg:max-w-md"
          >
            <div
              className="absolute -inset-6 rounded-[2rem] blur-3xl opacity-30"
              style={{ background: "radial-gradient(circle, rgba(37,99,235,0.45) 0%, transparent 70%)" }}
            />
            <div
              className="relative overflow-hidden rounded-[2rem] border p-3 shadow-2xl"
              style={{
                borderColor: "var(--border)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
              }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[rgba(15,23,42,0.85)]">
                <Image
                  src="/hero.jpg"
                  alt="Portrait of Puvanakopis Mehanathan"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div
                className="absolute left-6 right-6 bottom-6 rounded-2xl border px-4 py-3 backdrop-blur-md"
                style={{
                  borderColor: "rgba(255,255,255,0.12)",
                  backgroundColor: "rgba(2,6,23,0.55)",
                }}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] mb-1" style={{ color: "var(--text-muted)" }}>
                  Puvanakopis Mehanathan
                </p>
                <p className="text-sm" style={{ color: "var(--text-primary)" }}>
                  Backend Developer & AI Enthusiast
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => handleScroll("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hover:text-accent transition-colors"
        style={{ color: "var(--text-muted)" }}
      >
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
