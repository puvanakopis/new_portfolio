"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Github, ExternalLink, Bot, Building2, UserCheck, BarChart2, Globe } from "lucide-react";

const projects = [
  {
    icon: Bot,
    image: "https://picsum.photos/600/400?random=1",
    title: "E-Commerce AI Agent",
    subtitle: "Conversational AI Assistant for Online Store",
    period: "Apr 2026 – May 2026",
    description:
      "An AI-powered e-commerce assistant built with LangGraph and SQLite for smart product browsing, order management, and multi-turn customer support conversations.",
    tags: ["Python", "LangGraph", "LangChain", "ChatGroq", "SQLite", "Pydantic"],
    github: "https://github.com/puvanakopis/ecommerce-ai-agent",
    demo: "https://example.com",
    accent: "#2563eb",
    featured: true,
  },
  {
    icon: Building2,
    image: "/project/CampusEase.jpg",
    title: "CampusEase",
    subtitle: "University Accommodation & Vehicle Rental Platform",
    period: "Apr 2025 – Jul 2025",
    description:
      "A full-stack university platform for accommodation and vehicle rental with role-based access and a RAG-powered chatbot using ChromaDB.",
    tags: ["React", "FastAPI", "MongoDB", "ChromaDB", "Groq API", "RAG"],
    github: "https://github.com/puvanakopis/CampusEase",
    accent: "#2563eb",
    featured: true,
  },
  {
    icon: UserCheck,
    image: "https://picsum.photos/600/400?random=3",
    title: "Smart Attendance System",
    subtitle: "AI Face Recognition & QR-Based Attendance",
    period: "Mar 2026 – May 2026",
    description:
      "A mobile-first attendance system using QR scanning, face recognition, and geolocation validation to prevent proxy attendance in real time.",
    tags: ["Flutter", "Python", "OpenCV", "Node.js", "MongoDB", "REST APIs"],
    github: "https://github.com/SE6101-Community-Project/Student_Attendance_System",
    demo: null,
    accent: "#3b82f6",
    featured: false,
  },
  {
    icon: BarChart2,
    image: "https://picsum.photos/600/400?random=4",
    title: "Social Media Health Analysis",
    subtitle: "Data Science & ML Research Project",
    period: "Mar 2026 – Apr 2026",
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
  function ProjectCard({
    project,
    index,
    large,
  }: {
    project: (typeof projects)[0];
    index: number;
    large: boolean;
  }) {
    const Icon = project.icon;

    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="group relative w-full max-w-[520px] mx-auto rounded-2xl border border-[var(--card-border)] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-accent overflow-hidden"
        style={{
          backgroundColor: "var(--card-bg)",
        }}
      >
        {/* IMAGE FULL WIDTH */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className={`w-full object-cover ${large ? "h-48" : "h-36"}`}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, rgba(15, 23, 42, 0.14) 100%)",
            }}
          />
        </div>

        {/* CONTENT SECTION */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between mb-3">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${project.accent}18` }}
            >
              <Icon size={20} style={{ color: project.accent }} />
            </div>

            <div className="flex items-center gap-2">
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-200"
                  style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text-muted)";
                  }}
                >
                  <Globe size={16} />
                </motion.a>
              )}
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-200"
                  style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text-muted)";
                  }}
                >
                  <Github size={16} />
                </motion.a>
              )}
            </div>
          </div>

          <h3 className="font-bold text-base" style={{ color: "var(--text-primary)" }}>
            {project.title}
          </h3>

          <p className="text-xs font-mono mb-2" style={{ color: project.accent }}>
            {project.subtitle}
          </p>

          <p
            className={`text-sm leading-relaxed mb-3 ${large ? "" : "line-clamp-2"}`}
            style={{ color: "var(--text-secondary)" }}
          >
            {project.description}
          </p>

          <div className="mt-auto flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full font-mono text-xs"
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

          <p
            className="text-xs font-mono mt-4 pt-4 border-t"
            style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}
          >
            {project.period}
          </p>
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

      <div className="grid lg:grid-cols-2 gap-12">
        {projects
          .map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} large />
          ))}
      </div>
    </SectionWrapper>
  );
}