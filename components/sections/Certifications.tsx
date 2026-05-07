"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ExternalLink, Award, Users } from "lucide-react";

const certifications = [
  {
    title: "IBM RAG and Agentic AI Professional Certificate",
    issuer: "Coursera — IBM",
    description:
      "Mastered building advanced RAG systems, intelligent AI agents using LangChain, and deploying scalable LLM applications in production environments.",
    tags: ["RAG", "LangChain", "Agentic AI", "LLMs"],
    color: "#2563eb",
    href: "https://coursera.org/verify/professional-cert/DKF9EMROYALH",
  },
  {
    title: "IBM AI Developer Professional Certificate",
    issuer: "Coursera — IBM",
    description:
      "Developed expertise in full-stack AI development including Generative AI, model fine-tuning, Watson AI services, and API deployment.",
    tags: ["Generative AI", "Fine-Tuning", "Watson", "API Deployment"],
    color: "#2563eb",
    href: "https://coursera.org/verify/professional-cert/ZUVQR7F6DO3O",
  },
  {
    title: "Google Advanced Data Analytics Professional Certificate",
    issuer: "Coursera — Google",
    description:
      "Advanced training in predictive modeling, experimental design, regression analysis, and complex data visualization using Python and SQL.",
    tags: ["Python", "SQL", "Predictive Modeling", "Data Visualization"],
    color: "#3b82f6",
    href: "https://coursera.org/verify/professional-cert/F1IQRCDAIOR7",
  },
  {
    title: "Crash Course on Python",
    issuer: "Coursera — Google",
    description:
      "Foundation in automated task scripting, object-oriented programming, and fundamental Python data structures and algorithms.",
    tags: ["Python", "OOP", "Scripting", "Data Structures"],
    color: "#1d4ed8",
    href: "https://www.coursera.org/account/accomplishments/verify/EGD695AKI7LE",
  },
];

const volunteering = [
  {
    role: "Member",
    org: "IEEE Student Branch of SUSL",
    period: "Active",
    description:
      "Active member of the IEEE Student Branch at Sabaragamuwa University, contributing to technical events and professional development activities.",
  },
  {
    role: "Finance Team",
    org: "IEEE WIE Student Branch Affinity Group of SUSL — PearlHack",
    period: "March 2025",
    description:
      "Managed financial operations for PearlHack, a competitive hackathon organized by the IEEE Women in Engineering student branch.",
  },
  {
    role: "Program Team Member",
    org: "IEEE Student Branch of SUSL",
    period: "February 2025",
    description:
      "Contributed to the planning and execution of IEEE branch programs, supporting student-led technical and educational initiatives.",
  },
];

export function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionHeader
        tag="Credentials & Community"
        title="Certifications & Volunteering"
        subtitle="Professional growth through learning and community contributions."
      />

      <div className="space-y-8">
        {/* Certifications Section */}
        <div>
          <h3 className="text-lg font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative p-6 rounded-2xl border border-[var(--card-border)] flex flex-col gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent"
                style={{
                  backgroundColor: "var(--card-bg)",
                }}

              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${cert.color}18` }}
                  >
                    <Award size={18} style={{ color: cert.color }} />
                  </div>
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-200 hover:border-accent hover:text-accent flex-shrink-0"
                    style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                    aria-label="View certificate"
                  >
                    <ExternalLink size={13} />
                  </a>
                </div>

                <div>
                  <h4
                    className=" font-bold text-sm leading-snug mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {cert.title}
                  </h4>
                  <p className="text-xs font-mono" style={{ color: cert.color }}>
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full font-mono text-xs"
                      style={{
                        backgroundColor: `${cert.color}12`,
                        color: cert.color,
                        border: `1px solid ${cert.color}25`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Volunteering Section */}
        <div>
          <h3 className="text-lg font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Volunteering
          </h3>
          <div className="grid sm:grid-cols-3 gap-5">
            {volunteering.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (certifications.length + i) * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl border border-[var(--card-border)] flex flex-col gap-4 transition-all duration-300 hover:border-accent"
                style={{ backgroundColor: "var(--card-bg)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "var(--accent-subtle)" }}
                >
                  <Users size={18} style={{ color: "var(--accent)" }} />
                </div>

                <div>
                  <h4
                    className=" font-bold text-sm mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.role}
                  </h4>
                  <p
                    className="text-xs font-medium leading-snug mb-1"
                    style={{ color: "var(--accent)" }}
                  >
                    {item.org}
                  </p>
                  <p
                    className="text-xs font-mono"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.period}
                  </p>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
