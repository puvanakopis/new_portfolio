export type Project = {
  slug: string;
  img: string;
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
    title: "iStore – AI Agent & Full Stack",
    tags: ["Next.js", "FastAPI", "LangChain", "MongoDB", "Docker"],
    year: "2026",
    overview:
      "iStore is a full-stack e-commerce application integrated with an AI agent that enables conversational shopping. Users can interact with the system using natural language to browse products, manage wishlists, and complete purchases. The backend is powered by FastAPI, with a LangChain-based agent orchestrating intelligent user interactions, and the system is containerized using Docker for deployment.",
    githubUrl: "https://github.com/puvanakopis/iStore",
  },
  {
    slug: "ceylon-trip-ai",
    img: "/CeylonTrip_AI.png",
    title: "CeylonTrip AI - AI Agent",
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
    githubUrl: "https://github.com/puvanakopis/CeylonTrip-AI",
    liveUrl: "https://ceylontrip-ai.streamlit.app",
  },
  {
    slug: "cinebook",
    img: "/CineBook.png",
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
    githubUrl: "https://github.com/puvanakopis/Cinebook",
  },
  {
    slug: "campus-ease",
    img: "/CampusEase.png",
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
    slug: "InsightFlow_AI",
    img: "/InsightFlow_AI.png",
    title: "InsightFlow AI - AI Agent",
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
    githubUrl: "https://github.com/puvanakopis/data-analyst-multi-agents",
    liveUrl: "https://data-analyst-multi-agents.streamlit.app/",
  },
  {
    slug: "footstyle-ecommerce-platform",
    img: "/FootStyle.png",
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
    githubUrl: "https://github.com/puvanakopis/FootStyle",
  },
  {
    slug: "social-media-health-analysis",
    img: "/social-media-health-analysis.png",
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
    githubUrl: "https://github.com/puvanakopis/social-media-health-analysis",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}