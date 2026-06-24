export type Project = {
  slug: string;
  img: string;
  projectPageImg: string;
  title: string;
  tags: string[];
  year: string;
  overview: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "istore",
    img: "/istore.png",
    projectPageImg: "/istore-full.png",
    title: "iStore – AI Agent & Full Stack",
    tags: ["Next.js", "FastAPI", "LangChain", "MongoDB", "Docker"],
    year: "2026",
    overview:
      "iStore is a full-stack e-commerce platform built for a premium Apple reseller. It features a conversational AI shopping assistant powered by LangChain agents, allowing customers to browse products, manage wishlists, place orders, and track order history — all through natural language. The entire stack is containerized with Docker for seamless one-command deployment.",
    githubUrl: "https://github.com/puvanakopis/iStore",
  },
  {
    slug: "sri-lanka-trip-planner-ai",
    img: "/trip-planner-multi-agents.png",
    projectPageImg: "/project-1.jpg",
    title: "Sri Lanka Trip Planner AI - AI Agent",
    tags: [
      "Python",
      "LangChain",
      "Groq API",
      "ChatGroq",
      "Pydantic",
      "Multi-Agent Systems",
    ],
    year: "2025",
    overview:
      "An intelligent travel planning platform that generates personalized Sri Lanka itineraries using a collaborative multi-agent AI architecture. The system helps travelers create optimized trips based on preferences, destinations, budgets, and travel duration.",
    githubUrl: "https://github.com/puvanakopis/trip-planner-multi-agents",
    liveUrl: "https://trip-planner-multi-agents.streamlit.app/",
  },
  {
    slug: "cinebook",
    img: "/CineBook.png",
    projectPageImg: "/project-2.jpg",
    title: "CineBook - Full Stack",
    tags: [
      "Next.js",
      "TypeScript",
      "AI Agents",
      "LangChain",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    year: "2025",
    overview:
      "A modern movie ticket booking platform enhanced with AI-powered assistants that help users discover movies, view showtimes, and complete bookings more efficiently.",
  },
  {
    slug: "ecommerce-ai-agent",
    img: "/ecommerce-ai-agent.png",
    projectPageImg: "/project-3.jpg",
    title: "E-Commerce AI Agent - AI Agent",
    tags: [
      "Python",
      "LangGraph",
      "LangChain",
      "ChatGroq",
      "SQLite",
      "Pydantic",
    ],
    year: "2025",
    overview:
      "A conversational AI shopping assistant designed to improve online shopping experiences by helping customers search products, track orders, and receive instant support.",
    liveUrl: "https://ecommerce-ai-agent-01.streamlit.app/",
  },
  {
    slug: "campus-ease",
    img: "/CampusEase.png",
    projectPageImg: "/project-4.jpg",
    title: "CampusEase - RAG & Full Stack",
    tags: [
      "React",
      "FastAPI",
      "MongoDB",
      "ChromaDB",
      "Groq API",
      "Llama 3",
      "RAG",
      "Leaflet Maps",
    ],
    year: "2024",
    overview:
      "CampusEase is a university-focused accommodation and vehicle rental marketplace designed for Sabaragamuwa University of Sri Lanka (SUSL) students and staff. It connects users with local property and vehicle owners, featuring a secure multi-role portal (Student, Staff, Owner, Admin), interactive map search via React Leaflet, a booking/reservation engine, and an AI-powered RAG assistant for natural language inquiry.",
    githubUrl: "https://github.com/puvanakopis/CampusEase",
  },
  {
    slug: "smart-data-analysis-pipeline",
    img: "/smart-data-analysis-pipeline.png",
    projectPageImg: "/project-1.jpg",
    title: "Smart Data Analysis Pipeline - AI Agent",
    tags: [
      "Python",
      "Streamlit",
      "Pandas",
      "Plotly",
      "LangChain",
      "Groq API",
      "FPDF",
      "Multi-Agent Systems",
    ],
    year: "2025",
    overview:
      "An end-to-end, AI-powered data analysis platform that automates the transition from raw CSV files to structured business intelligence. Built on Python and Streamlit, the platform utilizes a modular multi-agent architecture to orchestrate data cleaning, perform statistical exploratory analysis, auto-generate interactive visualizations, extract LLM-driven insights, and compile findings into a professional PDF report.",
    liveUrl: "https://data-analyst-multi-agents.streamlit.app/",
  },
  {
    slug: "footstyle-ecommerce-platform",
    img: "/FootStyle.png",
    projectPageImg: "/project-2.jpg",
    title: "FootStyle - Full Stack",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Stripe",
      "Tailwind CSS",
    ],
    year: "2024",
    overview:
      "A premium footwear e-commerce platform featuring secure authentication, shopping cart functionality, payment processing, and a comprehensive admin dashboard.",
  },
  {
    slug: "social-media-health-analysis",
    img: "/social-media-health-analysis.png",
    projectPageImg: "/project-3.jpg",
    title: "Social Media Health Analysis - Data Analysis",
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "EDA",
    ],
    year: "2024",
    overview:
      "A data science research project exploring the relationship between social media usage patterns and their impact on mental and physical health indicators.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}