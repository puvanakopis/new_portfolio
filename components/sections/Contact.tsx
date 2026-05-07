"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Mail, Github, Linkedin, Phone, MapPin, Send } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "puvanakopis@gmail.com",
    href: "mailto:puvanakopis@gmail.com",
    color: "#2563eb",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 75 46 14 044",
    href: "tel:+94754614044",
    color: "#2563eb",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/puvanakopis",
    href: "https://github.com/puvanakopis",
    color: "#3b82f6",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/puvanakopis",
    href: "https://linkedin.com/in/puvanakopis",
    color: "#1d4ed8",
  },
];

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: Copy */}
        <div>
          <SectionHeader
            tag="Contact"
            title="Let's Build Something Together"
            subtitle="Open to internship opportunities, freelance projects, and collaborative AI/ML work."
          />

          <p className="leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
            Whether you have a project in mind, want to discuss AI/ML solutions,
            or are looking for a motivated engineering intern — I&apos;d love to hear from you.
            I respond within 24 hours.
          </p>

          <div
            className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--card-bg)",
            }}
          >
            <MapPin size={14} style={{ color: "var(--accent)" }} />
            <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Batticaloa, Sri Lanka
            </span>
          </div>
        </div>

        {/* Right: Links */}
        <div className="space-y-4">
          {contactLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group flex items-center gap-5 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--card-border)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    link.color + "50";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "var(--card-border)";
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                  style={{ backgroundColor: `${link.color}18` }}
                >
                  <Icon size={18} style={{ color: link.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-xs font-mono uppercase tracking-wider mb-0.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {link.label}
                  </p>
                  <p
                    className="text-sm font-medium truncate"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {link.value}
                  </p>
                </div>
                <Send
                  size={14}
                  className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: link.color }}
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
