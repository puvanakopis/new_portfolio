"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Users } from "lucide-react";

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

export function Volunteering() {
  return (
    <SectionWrapper id="volunteering">
      <SectionHeader
        tag="Community"
        title="Volunteering"
        subtitle="Contributing beyond code — to people and community."
      />

      <div className="grid sm:grid-cols-3 gap-5">
        {volunteering.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
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
              <h3
                className=" font-bold text-sm mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                {item.role}
              </h3>
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
    </SectionWrapper>
  );
}
