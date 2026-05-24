"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    image: "/project/trip-planner-multi-agents.png",
    title: "Sri Lanka Trip Planner AI",
    subtitle: "Multi-Agent AI Travel Itinerary System",
    description:
      "A multi-agent travel planning system that generates Sri Lanka itineraries using LangChain and Groq LLMs. It uses specialized AI agents for places, travel time estimation, stay duration, accommodations, and travel tips.",
    tags: [
      "Python",
      "LangChain",
      "Groq API",
      "ChatGroq",
      "Pydantic",
      "Multi-Agent Systems",
      "LLMs",
    ],
    github: "https://github.com/puvanakopis/trip-planner-multi-agents",
    live: "https://trip-planner-multi-agents.streamlit.app/",
    accent: "#2563eb",
    featured: true,
  },
  {
    image: "/project/CineBook.png",
    title: "CineBook",
    subtitle: "Movie Booking Platform with AI Multi-Agent System",
    description:
      "A full movie ticket booking platform with AI agents for recommendations, showtimes, and booking assistance.",
    tags: [
      "Next.js",
      "TypeScript",
      "AI Agents",
      "LangChain",
      "Multi-Agent System",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    github: "https://github.com/puvanakopis/CineBook",
    accent: "#2563eb",
    featured: true,
  },
  {
    image: "/project/ecommerce-ai-agent.png",
    title: "E-Commerce AI Agent",
    subtitle: "Conversational AI Assistant for Online Store",
    description:
      "An AI shopping assistant for product search, orders, and customer support conversations.",
    tags: ["Python", "LangGraph", "LangChain", "ChatGroq", "SQLite", "Pydantic"],
    github: "https://github.com/puvanakopis/ecommerce-ai-agent",
    live: "https://ecommerce-ai-agent-01.streamlit.app/",
    accent: "#2563eb",
    featured: true,
  },
  {
    image: "/project/CampusEase.png",
    title: "CampusEase",
    subtitle: "University Accommodation & Vehicle Rental Platform",
    description:
      "A full-stack university platform for accommodation and vehicle rental with role-based access and a RAG-powered chatbot using ChromaDB.",
    tags: ["React", "FastAPI", "MongoDB", "ChromaDB", "Groq API", "RAG"],
    github: "https://github.com/puvanakopis/CampusEase",
    accent: "#2563eb",
    featured: true,
  },
  {
    image: "/project/smart-data-analysis-pipeline.png",
    title: "Smart Data Analysis Pipeline",
    subtitle: "Multi-Agent AI Data Analytics System",
    description:
      "An AI multi-agent system for automated data cleaning, analysis, visualization, and PDF reporting.",
    tags: [
      "Python",
      "Streamlit",
      "Pandas",
      "NumPy",
      "Plotly",
      "LangChain",
      "Groq API",
      "FPDF",
      "Multi-Agent Systems",
    ],
    github: "https://github.com/puvanakopis/data-analyst-multi-agents",
    live: "https://data-analyst-multi-agents.streamlit.app/",
    accent: "#2563eb",
    featured: true,
  },
  {
    image: "/project/FootStyle.png",
    title: "FootStyle E-Commerce Platform",
    subtitle: "Full-Stack Premium Footwear Store",
    description:
      "A full e-commerce platform with authentication, cart, orders, and admin dashboard.",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Passport.js",
      "Tailwind CSS",
      "Stripe",
      "Multer",
    ],
    github: "https://github.com/puvanakopis/FootStyle",
    accent: "#2563eb",
    featured: false,
  },
  {
    image: "/project/social-media-health-analysis.png",
    title: "Social Media Health Analysis",
    subtitle: "Data Science & ML Research Project",
    description:
      "A data science research project analyzing how social media usage impacts mental and physical health through EDA and statistical modeling.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA"],
    github: "https://github.com/puvanakopis/social-media-health-analysis",
    demo: null,
    accent: "#1d4ed8",
    featured: false,
  },
];

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  function ProjectCard({
    project,
    index,
  }: {
    project: (typeof projects)[0];
    index: number;
  }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.1,
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="group relative w-full max-w-[520px] mx-auto rounded-xl border border-[var(--card-border)] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-accent overflow-hidden"
        style={{ backgroundColor: "var(--card-bg)" }}
      >
        <div className="relative overflow-hidden w-full h-[180px]">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-4 sm:p-5 flex flex-col flex-1">
          <div className="flex flex-row items-start justify-between mb-1">
            <h3
              className="font-bold text-lg"
              style={{ color: "var(--text-primary)" }}
            >
              {project.title}
            </h3>

            <div className="flex items-center gap-2 ml-3">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    flex h-9 w-9 items-center justify-center rounded-full
                    border transition-all duration-200
                    border-[var(--border)]
                    text-[var(--text-muted)]
                    hover:border-accent hover:text-accent
                  "
                >
                  <Github size={16} />
                </motion.a>
              )}

              {"live" in project && project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    flex h-9 w-9 items-center justify-center rounded-full
                    border transition-all duration-200
                    border-[var(--border)]
                    text-[var(--text-muted)]
                    hover:border-accent hover:text-accent
                  "
                >
                  <ExternalLink size={16} />
                </motion.a>
              )}
            </div>
          </div>

          <p
            className="text-xs font-mono mb-3"
            style={{ color: project.accent }}
          >
            {project.subtitle}
          </p>

          <p
            className="text-xs leading-relaxed mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full font-mono text-[10px]"
                style={{
                  backgroundColor: `${project.accent}12`,
                  color: project.accent,
                  border: `1px solid ${project.accent}25`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <SectionWrapper id="projects">
      <SectionHeader
        tag="Portfolio"
        title="Featured Projects"
        subtitle="Real-world AI and full-stack applications built end-to-end."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-center">
        {visibleProjects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {projects.length > 6 && (
        <div className="flex justify-center mt-8">
          <Button
            onClick={() => setShowAll((prev) => !prev)}
            variant="outline"
            size="lg"
          >
            {showAll ? "Show Less" : "Show All Projects"}
          </Button>
        </div>
      )}
    </SectionWrapper>
  );
}