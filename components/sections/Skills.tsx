"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";

const skillCategories = [
  {
    label: "AI / ML",
    emoji: "🧠",
    color: "#2563eb",
    skills: [
      "LLMs",
      "RAG Pipelines",
      "AI Agents",
      "Prompt Engineering",
      "Embeddings",
      "Semantic Search",
      "LangChain",
      "LangGraph",
      "Hugging Face Transformers",
      "OpenCV",
      "Scikit-learn",
    ],
  },
  {
    label: "Data Analysis",
    emoji: "📊",
    color: "#2563eb",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "EDA",
      "Data Cleaning",
      "Data Visualization",
      "Statistical Analysis",
    ],
  },
  {
    label: "Web & API",
    emoji: "🌐",
    color: "#2563eb",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "FastAPI",
      "Flask",
      "Node.js",
      "Express.js",
      "REST APIs",
      "React Native",
    ],
  },
  {
    label: "Databases",
    emoji: "🗄️",
    color: "#2563eb",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQLite",
      "ChromaDB",
      "Pinecone",
    ],
  },
  {
    label: "Languages",
    emoji: "💻",
    color: "#2563eb",
    skills: ["Python", "JavaScript", "TypeScript", "C"],
  },
  {
    label: "Tools & DevOps",
    emoji: "🛠️",
    color: "#1e40af",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Web Scraping",
      "API Integration",
      "Pydantic",
    ],
  },
];

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeader
        tag="Capabilities"
        title="Skills & Technologies"
        subtitle="A broad toolkit spanning AI/ML research and production-grade software engineering."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.08,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="p-6 rounded-2xl border border-[var(--card-border)] 
                       group hover:border-accent transition-all duration-300 
                       flex flex-col h-full min-h-[260px]"
            style={{
              backgroundColor: "var(--card-bg)",
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">{cat.emoji}</span>
              <h3
                className="font-bold text-sm tracking-wide"
                style={{ color: "var(--text-primary)" }}
              >
                {cat.label}
              </h3>
            </div>

            {/* Skills (this grows to fill space) */}
            <div className="flex flex-wrap gap-2 flex-grow content-start">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
                  style={{
                    backgroundColor: `${cat.color}12`,
                    color: cat.color,
                    border: `1px solid ${cat.color}30`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}