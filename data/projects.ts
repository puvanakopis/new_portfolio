export type ProjectCategory = "All" | "Full Stack" | "AI & ML";

export type Project = {
  slug: string;
  img: string;
  title: string;
  subtitle?: string;
  category: "Full Stack" | "AI & ML";
  featured?: boolean;
  tags: string[];
  year: string;
  overview: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "istore",
    img: "/iStore1.png",
    title: "iStore – AI Agent & Full Stack",
    subtitle: "Conversational E-Commerce & Agentic Shopping",
    category: "AI & ML",
    featured: true,
    tags: ["Next.js", "FastAPI", "LangChain", "MongoDB", "Docker"],
    year: "2026",
    overview:
      "iStore is a full-stack e-commerce application integrated with an AI agent that enables conversational shopping. Users can interact with the system using natural language to browse products, manage wishlists, and complete purchases. The backend is powered by FastAPI, with a LangChain-based agent orchestrating intelligent user interactions, and the system is containerized using Docker for deployment.",
    liveUrl: "https://istore-xi.vercel.app/",
    githubUrl: "https://github.com/puvanakopis/iStore",
  },
  {
    slug: "ceylon-trip-ai",
    img: "/CeylonTrip_AI.png",
    title: "CeylonTrip AI - AI Agent",
    subtitle: "Collaborative Multi-Agent Itinerary Architect",
    category: "AI & ML",
    featured: true,
    tags: [
      "Python",
      "LangChain",
      "Groq API",
      "ChatGroq",
      "Multi-Agent Systems",
    ],
    year: "2025",
    overview:
      "An intelligent travel planning platform that generates personalized Sri Lanka itineraries using a collaborative multi-agent AI architecture. The system helps travelers create optimized trips based on preferences, destinations, budgets, and travel duration.",
    githubUrl: "https://github.com/puvanakopis/CeylonTrip-AI",
    liveUrl: "https://ceylontrip-ai.streamlit.app",
  },
  {
    slug: "house-price-prediction",
    img: "/house-price-prediction.png",
    title: "House Price Prediction – ML Algorithm Comparison",
    subtitle: "Regression Benchmarking & Real-Time Valuation UI",
    category: "AI & ML",
    featured: true,
    tags: ["Python", "Scikit-Learn", "Streamlit", "Pandas", "Random Forest", "Gradient Boosting"],
    year: "2026",
    overview: "An end-to-end regression system comparing multiple ML algorithms—including Linear Regression, Ridge, Lasso, Random Forest, and Gradient Boosting—to identify optimal predictive performance on King County housing data, backed by automated feature engineering and an interactive Streamlit valuation app.",
    githubUrl: "https://github.com/puvanakopis/House-Price-Prediction",
  },
  {
    slug: "minimal-ecommerce-platform",
    img: "/Minimal.png",
    title: "Minimal - Full Stack",
    subtitle: "Modern Luxury Fashion Commerce with Spring Boot & Stripe",
    category: "Full Stack",
    tags: [
      "Next.js",
      "TypeScript",
      "Java",
      "Spring Boot",
      "MySQL",
      "Spring Security",
      "JWT",
      "Stripe",
      "Tailwind CSS",
    ],
    year: "2024",
    overview:
      "A minimalist luxury fashion e-commerce platform featuring role-based JWT authentication, interactive product catalog, wishlist and cart management, Stripe checkout, and a full-featured administrative portal.",
    githubUrl: "https://github.com/puvanakopis/minimal",
    liveUrl: "https://minimal-murex.vercel.app/",
  },
  {
    slug: "urbanbite-food-delivery-platform",
    img: "/UrbanBite.png",
    title: "UrbanBite - Full Stack",
    subtitle: "Multi-Portal Food Delivery & Restaurant Ecosystem with Spring Boot & Angular",
    category: "Full Stack",
    tags: [
      "Angular",
      "TypeScript",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Spring Security",
      "JWT",
      "Tailwind CSS",
      "RxJS",
      "REST API",
    ],
    year: "2025",
    overview:
      "A comprehensive multi-role food ordering and restaurant management platform featuring dedicated portals for customers, restaurant partners, delivery hubs, and system administrators, complete with role-based JWT authentication, interactive menu catalog, live order workflows, and automated email services.",
    githubUrl: "https://github.com/puvanakopis/UrbanBite",
  },
  {
    slug: "cinebook",
    img: "/CineBook.png",
    title: "CineBook - Full Stack",
    subtitle: "Cinema Booking Platform with AI Assistant",
    category: "Full Stack",
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
    subtitle: "University Marketplace with RAG Assistance",
    category: "AI & ML",
    featured: true,
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
    slug: "footstyle-ecommerce-platform",
    img: "/FootStyle.png",
    title: "FootStyle - Full Stack",
    subtitle: "High-Performance Footwear Commerce with Stripe",
    category: "Full Stack",
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
  }
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}