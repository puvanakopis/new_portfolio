"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Github } from "lucide-react";

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
      "LLMs"
    ],
    github: "https://github.com/puvanakopis/trip-planner-multi-agents",
    accent: "#2563eb",
    featured: true,
  },
  {
    image: "/project/CineBook.png",
    title: "CineBook",
    subtitle: "Movie Booking Platform with AI Multi-Agent System",
    description:
      "A full-featured movie ticket booking platform with a modular frontend architecture and an integrated AI multi-agent system. It enables users to browse movies, explore theaters, select seats, make secure payments, and receive intelligent assistance for movie discovery, showtimes, and booking decisions through AI agents.",
    tags: [
      "Next.js",
      "TypeScript",
      "AI Agents",
      "LangChain",
      "Multi-Agent System",
      "Node.js",
      "MongoDB",
      "Tailwind CSS"
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
      "An AI-powered e-commerce assistant built with LangGraph and SQLite for smart product browsing, order management, and multi-turn customer support conversations.",
    tags: ["Python", "LangGraph", "LangChain", "ChatGroq", "SQLite", "Pydantic"],
    github: "https://github.com/puvanakopis/ecommerce-ai-agent",
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
    image: "/project/FootStyle.png",
    title: "FootStyle E-Commerce Platform",
    subtitle: "Full-Stack Premium Footwear Store",
    description:
      "A full-stack e-commerce platform for premium footwear with secure authentication (OTP + Google OAuth), shopping cart, wishlist, order management, and a powerful admin dashboard for product, order, and user control.",
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
      "Multer"
    ],
    github: "https://github.com/puvanakopis/FootStyle",
    accent: "#2563eb",
    featured: false,
  },
  {
    image: "https://picsum.photos/600/400?random=3",
    title: "Smart Attendance System",
    subtitle: "AI Face Recognition & QR-Based Attendance",
    description:
      "A mobile-first attendance system using QR scanning, face recognition, and geolocation validation to prevent proxy attendance in real time.",
    tags: ["Flutter", "Python", "OpenCV", "Node.js", "MongoDB", "REST APIs"],
    github: "https://github.com/SE6101-Community-Project/Student_Attendance_System",
    demo: null,
    accent: "#3b82f6",
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
  function ProjectCard({
    project,
    index,
    large,
  }: {
    project: (typeof projects)[0];
    index: number;
    large: boolean;
  }) {

    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="group relative w-full h-[450px] rounded-2xl border border-[var(--card-border)] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-accent overflow-hidden"
        style={{
          backgroundColor: "var(--card-bg)",
        }}
      >
        {/* IMAGE FULL WIDTH */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-[200px] object-cover object-top"
          />
        </div>

        {/* CONTENT SECTION */}
        <div className="p-4 flex flex-col flex-1">
          <div className="flex flex-row items-start justify-between">
            <div>
              <h3 className="font-bold text-base" style={{ color: "var(--text-primary)" }}>
                {project.title}
              </h3>

              <p className="text-xs font-mono mb-1" style={{ color: project.accent }}>
                {project.subtitle}
              </p>
            </div>
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                className=" flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200"
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
          <p
            className={`text-sm leading-relaxed mb-2 ${large ? "" : "line-clamp-2"}`}
            style={{ color: "var(--text-secondary)" }}
          >
            {project.description}
          </p>


          <div className="mt-auto flex flex-wrap gap-1">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} large={false} />
        ))}
      </div>
    </SectionWrapper>
  );
}