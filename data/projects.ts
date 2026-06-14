export type Project = {
  slug: string;
  img: string;
  projectPageImg: string;
  title: string;
  tags: string[];
  year: string;
  role: string;
  client: string;
  overview: string;
  challenge: string;
  solution: string;
  outcome: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "istore",
    img: "/istore.png",
    projectPageImg: "/istore-full.png",
    title: "iStore – AI-Powered E-commerce Platform",
    tags: ["Next.js", "FastAPI", "LangChain", "MongoDB", "Docker"],
    year: "2026",
    role: "Full Stack Developer",
    client: "Personal Project",
    overview:
      "iStore is a full-stack e-commerce platform built for a premium Apple reseller. It features a conversational AI shopping assistant powered by LangChain agents, allowing customers to browse products, manage wishlists, place orders, and track order history — all through natural language. The entire stack is containerized with Docker for seamless one-command deployment.",
    challenge:
      "The core challenge was building a natural, reliable shopping experience driven purely by conversation — without forcing users to click through forms or navigate pages manually. This required designing a hierarchical multi-agent system that could accurately detect user intent, maintain context across multi-turn conversations, handle complex order flows (color, storage, quantity, confirmation), and do so efficiently without excessive LLM calls or latency.",
    solution:
      "Implemented a hierarchical LangChain agent architecture with four specialized agents: a Main Router Agent that dispatches by intent, a Product Agent (search, browse, recommendations, trending), an Order Agent (guided 4-step purchase flow), and a Wishlist Agent. The backend is built on FastAPI with MongoDB Atlas (async via Motor), JWT authentication, OTP email verification, and a role-based admin dashboard. The Next.js 14 frontend uses the App Router with Tailwind CSS and React Context for auth/state. The full stack is containerized using multi-stage Dockerfiles and Docker Compose with health checks.",
    outcome:
      "Delivered a production-ready, fully containerized full-stack application launchable with a single `docker compose up --build` command. The AI assistant handles end-to-end shopping tasks — from product discovery to order confirmation — entirely via chat, eliminating manual form interactions. The admin dashboard provides complete control over products, users, and orders, while the architecture supports easy LLM swapping (Groq, OpenAI, or any LangChain-compatible model).",
    liveUrl: "https://github.com/puvanakopis/iStore",
  },
  {
    slug: "sri-lanka-trip-planner-ai",
    img: "/trip-planner-multi-agents.png",
    projectPageImg: "/project-1.jpg",
    title: "Sri Lanka Trip Planner AI",
    tags: [
      "Python",
      "LangChain",
      "Groq API",
      "ChatGroq",
      "Pydantic",
      "Multi-Agent Systems",
    ],
    year: "2025",
    role: "AI Engineer & Full-Stack Developer",
    client: "Personal Project",
    overview:
      "An intelligent travel planning platform that generates personalized Sri Lanka itineraries using a collaborative multi-agent AI architecture. The system helps travelers create optimized trips based on preferences, destinations, budgets, and travel duration.",
    challenge:
      "Traditional trip planning requires extensive research across multiple sources, making itinerary creation time-consuming and often inefficient. The challenge was coordinating multiple AI agents to provide accurate recommendations while maintaining a seamless user experience.",
    solution:
      "Built a multi-agent system using LangChain and Groq LLMs. Specialized agents handle destination discovery, travel duration estimation, accommodation recommendations, activity suggestions, and travel advice. Structured outputs were enforced using Pydantic models to ensure reliable itinerary generation.",
    outcome:
      "Successfully deployed as a public Streamlit application capable of generating complete travel plans in seconds. Demonstrated practical implementation of multi-agent AI workflows and advanced prompt orchestration techniques.",
    liveUrl: "https://trip-planner-multi-agents.streamlit.app/",
  },
  {
    slug: "cinebook",
    img: "/CineBook.png",
    projectPageImg: "/project-2.jpg",
    title: "CineBook",
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
    role: "Full-Stack & AI Developer",
    client: "Personal Project",
    overview:
      "A modern movie ticket booking platform enhanced with AI-powered assistants that help users discover movies, view showtimes, and complete bookings more efficiently.",
    challenge:
      "Movie booking platforms often overwhelm users with options and lack intelligent guidance. The challenge was integrating conversational AI into a full booking workflow while maintaining fast performance and intuitive navigation.",
    solution:
      "Developed a full-stack application using Next.js, Node.js, and MongoDB. Integrated AI agents powered by LangChain to provide movie recommendations, booking assistance, and showtime discovery through natural language interactions.",
    outcome:
      "Created a complete cinema booking ecosystem that combines traditional reservation features with intelligent AI assistance, showcasing the practical integration of AI agents into consumer applications.",
  },

  {
    slug: "ecommerce-ai-agent",
    img: "/ecommerce-ai-agent.png",
    projectPageImg: "/project-3.jpg",
    title: "E-Commerce AI Agent",
    tags: [
      "Python",
      "LangGraph",
      "LangChain",
      "ChatGroq",
      "SQLite",
      "Pydantic",
    ],
    year: "2025",
    role: "AI Engineer",
    client: "Personal Project",
    overview:
      "A conversational AI shopping assistant designed to improve online shopping experiences by helping customers search products, track orders, and receive instant support.",
    challenge:
      "E-commerce customers often struggle to find relevant products and obtain quick support. Traditional chatbots lack contextual understanding and fail to manage complex shopping workflows.",
    solution:
      "Built a stateful AI assistant using LangGraph and LangChain. Implemented workflow orchestration for product discovery, order management, and customer support while maintaining conversational memory and structured outputs.",
    outcome:
      "Delivered a fully functional AI-powered shopping assistant deployed through Streamlit, demonstrating advanced conversational AI capabilities in retail environments.",
    liveUrl: "https://ecommerce-ai-agent-01.streamlit.app/",
  },

  {
    slug: "campus-ease",
    img: "/CampusEase.png",
    projectPageImg: "/project-4.jpg",
    title: "CampusEase",
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
    role: "Full-Stack Developer",
    client: "Academic Project (SUSL)",
    overview:
      "CampusEase is a university-focused accommodation and vehicle rental marketplace designed for Sabaragamuwa University of Sri Lanka (SUSL) students and staff. It connects users with local property and vehicle owners, featuring a secure multi-role portal (Student, Staff, Owner, Admin), interactive map search via React Leaflet, a booking/reservation engine, and an AI-powered RAG assistant for natural language inquiry.",
    challenge:
      "Students at SUSL face significant hurdles finding nearby accommodations (e.g., near Pambahinna junction or the main gate) and renting vehicles. The platform needed to support document-based user verification (IDs/photos), manage complex temporary booking workflows, and incorporate an intelligent assistant to parse listings, handle comparison queries, and filter availability with minimal latency.",
    solution:
      "Built a web application using React (Vite) and Tailwind CSS integrated with Leaflet maps, and a FastAPI backend using asynchronous MongoDB (Motor). Implemented a Retrieval-Augmented Generation (RAG) system with a persistent ChromaDB database using HuggingFace sentence-transformers (all-MiniLM-L6-v2) for local embedding generation and the Groq API (llama-3.3-70b-versatile) with conversational memory. Developed role-based workflows allowing owners to list items and manage bookings, students to search/reserve, and administrators to verify account profiles.",
    outcome:
      "Created a centralized hub that reduces student rental search times and secure transactions. Deployed an intelligent AI chatbot that answers questions based on real-time listings, proximity to campus landmarks, and platform policies, proving the utility of semantic search and localized RAG in academic communities.",
    liveUrl: "https://github.com/puvanakopis/CampusEase",
  },

  {
    slug: "smart-data-analysis-pipeline",
    img: "/smart-data-analysis-pipeline.png",
    projectPageImg: "/project-1.jpg",
    title: "Smart Data Analysis Pipeline",
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
    role: "AI & Data Engineer",
    client: "Personal Project",
    overview:
      "An end-to-end, AI-powered data analysis platform that automates the transition from raw CSV files to structured business intelligence. Built on Python and Streamlit, the platform utilizes a modular multi-agent architecture to orchestrate data cleaning, perform statistical exploratory analysis, auto-generate interactive visualizations, extract LLM-driven insights, and compile findings into a professional PDF report.",
    challenge:
      "Exploratory data analysis (EDA) and reporting workflows are traditionally repetitive, requiring manual data cleaning, statistical evaluation, chart rendering, and report compiling. Automating this entire lifecycle while maintaining high analytical reliability, handling unexpected data types or missing values, avoiding monolithic script failures, and rendering charts that dynamically adapt to any user-uploaded dataset was a major orchestrational challenge.",
    solution:
      "Developed a modular multi-agent pipeline using Python and LangChain. The pipeline coordinates four specialized agents: a DataCleaningAgent (handling duplicate removal, outlier capping via IQR, column normalizations, and auto-type conversion), a DataAnalysisAgent (calculating descriptive statistics, correlation matrices, and group-by aggregations), a VisualizationAgent (generating dynamic Plotly charts such as histograms, scatter plots with regression trendlines, box plots, heatmaps, and time-series), and an InsightGeneratorAgent using Groq's llama-3.3-70b-versatile to extract structured business insights. A custom FPDF-based reporting engine compiles all results into a download-ready PDF report.",
    outcome:
      "Delivered a responsive Streamlit dashboard where users can upload any CSV and receive structured statistical summaries, interactive Plotly visualizations, and AI-generated executive summaries and anomalies in seconds. The multi-agent workflow isolates processing stages, ensuring error resilience and detailed stage metrics while showcasing the practical applications of collaborative agentic systems in business intelligence.",
    liveUrl: "https://data-analyst-multi-agents.streamlit.app/",
  },

  {
    slug: "footstyle-ecommerce-platform",
    img: "/FootStyle.png",
    projectPageImg: "/project-2.jpg",
    title: "FootStyle E-Commerce Platform",
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
    role: "Full-Stack Developer",
    client: "Personal Project",
    overview:
      "A premium footwear e-commerce platform featuring secure authentication, shopping cart functionality, payment processing, and a comprehensive admin dashboard.",
    challenge:
      "Building a scalable e-commerce solution requires balancing performance, security, and user experience while handling payments, inventory, and order management.",
    solution:
      "Developed a complete full-stack platform using Next.js, Express.js, and MongoDB. Implemented JWT authentication, Stripe payments, file uploads, order management, and an administrative control panel.",
    outcome:
      "Delivered a production-ready online store demonstrating expertise in full-stack development, payment integration, and scalable e-commerce architecture.",
  },

  {
    slug: "social-media-health-analysis",
    img: "/social-media-health-analysis.png",
    projectPageImg: "/project-3.jpg",
    title: "Social Media Health Analysis",
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "EDA",
    ],
    year: "2024",
    role: "Data Analyst & Researcher",
    client: "Research Project",
    overview:
      "A data science research project exploring the relationship between social media usage patterns and their impact on mental and physical health indicators.",
    challenge:
      "Understanding how social media behavior influences health outcomes requires analyzing large datasets and uncovering meaningful statistical relationships.",
    solution:
      "Performed extensive exploratory data analysis using Python, Pandas, NumPy, and visualization libraries. Applied statistical techniques to identify trends, correlations, and behavioral patterns within the dataset.",
    outcome:
      "Generated valuable insights into the relationship between social media consumption and health outcomes while strengthening data analysis and research skills.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}