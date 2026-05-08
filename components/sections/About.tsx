"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Brain, Code2, Layers, Zap } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI/ML Expertise",
    description:
      "Experienced in building LLM-powered applications, RAG pipelines, AI agents, and semantic search systems using LangChain and LangGraph.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "End-to-end development with React, Next.js, FastAPI, and Node.js — from UI to backend and deployment.",
  },
  {
    icon: Layers,
    title: "Scalable Backends",
    description:
      "Experienced with vector databases (ChromaDB, Pinecone) and semantic search for high-performance AI systems.",
  },
  {
    icon: Zap,
    title: "Fast Learner",
    description: "IBM-certified in RAG, Agentic AI, and Full-Stack AI Development with a strong foundation in Software Engineering principles"
  },
];

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <SectionHeader
            tag="About Me"
            title="Building Intelligent Systems That Matter"
          />
          <div className="space-y-5" style={{ color: "var(--text-secondary)" }}>
            <p className="leading-relaxed">
              I&apos;m a third-year Software Engineering undergraduate at{" "}
              <span style={{ color: "var(--accent)" }} className="font-medium">
                Sabaragamuwa University of Sri Lanka
              </span>
              , focused on Artificial Intelligence and Machine Learning.
              I build intelligent systems at the intersection of AI and software engineering
              to solve real-world problems.
            </p>

            <p className="leading-relaxed">
              I&apos;ve developed RAG-based chatbots, AI agents,
              and full-stack applications using tools like React, Next.js, FastAPI, and vector databases.
              As a freelance AI developer, I deliver end-to-end solutions—from idea to deployment—
              with a focus on reliability and impact.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-6">
            <div className="text-center">
              <p className=" text-3xl font-bold" style={{ color: "var(--accent)" }}>
                1+
              </p>
              <p className="text-xs font-mono tracking-wide mt-1" style={{ color: "var(--text-muted)" }}>
                Years Experience
              </p>
            </div>
            <div
              className="w-px h-12"
              style={{ backgroundColor: "var(--border)" }}
            />
            <div className="text-center">
              <p className=" text-3xl font-bold" style={{ color: "var(--accent)" }}>
                4+
              </p>
              <p className="text-xs font-mono tracking-wide mt-1" style={{ color: "var(--text-muted)" }}>
                AI Projects
              </p>
            </div>
            <div
              className="w-px h-12"
              style={{ backgroundColor: "var(--border)" }}
            />
            <div className="text-center">
              <p className=" text-3xl font-bold" style={{ color: "var(--accent)" }}>
                4
              </p>
              <p className="text-xs font-mono tracking-wide mt-1" style={{ color: "var(--text-muted)" }}>
                Certifications
              </p>
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 gap-8 w-full h-full">
          {highlights.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl border border-[var(--card-border)] transition-all duration-300 hover:border-accent group"
              style={{
                backgroundColor: "var(--card-bg)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-accent"
                style={{ backgroundColor: "var(--accent-subtle)" }}
              >
                <Icon
                  size={18}
                  style={{ color: "var(--accent)" }}
                  className="group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3
                className=" font-semibold text-sm mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
