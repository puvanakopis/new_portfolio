export type Project = {
  slug: string;
  img: string;
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
    slug: "sri-lanka-trip-planner-ai",
    img: "/trip-planner-multi-agents.png",
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
    title: "CampusEase",
    tags: [
      "React",
      "FastAPI",
      "MongoDB",
      "ChromaDB",
      "Groq API",
      "RAG",
    ],
    year: "2024",
    role: "Full-Stack Developer",
    client: "Academic Project",
    overview:
      "A university-focused accommodation and vehicle rental platform that helps students find housing, rent vehicles, and access information through an AI-powered assistant.",
    challenge:
      "Students frequently face difficulties locating reliable accommodation and transportation options. The project required managing multiple user roles while providing intelligent search and support functionality.",
    solution:
      "Developed a full-stack platform using React, FastAPI, and MongoDB. Implemented role-based access control and integrated a Retrieval-Augmented Generation (RAG) chatbot powered by ChromaDB and Groq API for intelligent question answering.",
    outcome:
      "Created a centralized solution for student accommodation and transportation needs while demonstrating the integration of RAG systems into real-world applications.",
  },

  {
    slug: "smart-data-analysis-pipeline",
    img: "/smart-data-analysis-pipeline.png",
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
      "An AI-driven analytics platform that automates data cleaning, exploratory analysis, visualization generation, and PDF reporting using multiple specialized AI agents.",
    challenge:
      "Data analysis workflows are repetitive and require expertise in preprocessing, visualization, and reporting. The challenge was automating these tasks while maintaining analytical quality and reliability.",
    solution:
      "Built a multi-agent analytics system that processes datasets through dedicated agents responsible for cleaning, analysis, visualization, and report generation. Leveraged Pandas, Plotly, LangChain, and Groq LLMs for end-to-end automation.",
    outcome:
      "Reduced the effort required for exploratory data analysis and reporting while showcasing the potential of AI agents in business intelligence workflows.",
    liveUrl: "https://data-analyst-multi-agents.streamlit.app/",
  },

  {
    slug: "footstyle-ecommerce-platform",
    img: "/FootStyle.png",
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