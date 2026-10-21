export type SkillCategory =
  | "All"
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Database"
  | "AI"
  | "ML"
  | "DevOps & Tools";

export interface SkillItem {
  name: string;
  category:
    | "Languages"
    | "Frontend"
    | "Backend"
    | "Database"
    | "AI"
    | "ML"
    | "DevOps & Tools";
  icon: string;
  color: string;
}

export const skillsData: SkillItem[] = [
  // 1. Languages
  { name: "JavaScript", category: "Languages", icon: "SiJavascript", color: "#F7DF1E" },
  { name: "TypeScript", category: "Languages", icon: "SiTypescript", color: "#3178C6" },
  { name: "Python", category: "Languages", icon: "SiPython", color: "#3776AB" },
  { name: "Java", category: "Languages", icon: "FaJava", color: "#EA2D2E" },
  { name: "C", category: "Languages", icon: "SiC", color: "#659AD2" },
  { name: "C#", category: "Languages", icon: "TbBrandCSharp", color: "#9B4F96" },
  { name: "Go", category: "Languages", icon: "SiGo", color: "#00ADD8" },
  { name: "PHP", category: "Languages", icon: "SiPhp", color: "#777BB4" },

  // 2. Frontend
  { name: "React", category: "Frontend", icon: "SiReact", color: "#61DAFB" },
  { name: "Next.js", category: "Frontend", icon: "SiNextdotjs", color: "#FFFFFF" },
  { name: "Angular", category: "Frontend", icon: "SiAngular", color: "#DD0031" },
  { name: "React Native", category: "Frontend", icon: "SiReact", color: "#61DAFB" },
  { name: "Expo", category: "Frontend", icon: "SiExpo", color: "#FFFFFF" },
  { name: "Redux", category: "Frontend", icon: "SiRedux", color: "#764ABC" },
  { name: "Tailwind CSS", category: "Frontend", icon: "SiTailwindcss", color: "#06B6D4" },
  { name: "HTML5", category: "Frontend", icon: "SiHtml5", color: "#E34F26" },
  { name: "CSS3", category: "Frontend", icon: "FaCss3Alt", color: "#1572B6" },

  // 3. Backend
  { name: "Node.js", category: "Backend", icon: "SiNodedotjs", color: "#5FA04E" },
  { name: "Express", category: "Backend", icon: "SiExpress", color: "#FFFFFF" },
  { name: "FastAPI", category: "Backend", icon: "SiFastapi", color: "#009688" },
  { name: "Spring Boot", category: "Backend", icon: "SiSpring", color: "#6DB33F" },
  { name: "Flask", category: "Backend", icon: "SiFlask", color: "#FFFFFF" },

  // 4. Database
  { name: "PostgreSQL", category: "Database", icon: "SiPostgresql", color: "#4169E1" },
  { name: "MongoDB", category: "Database", icon: "SiMongodb", color: "#47A248" },
  { name: "MySQL", category: "Database", icon: "SiMysql", color: "#4479A1" },
  { name: "Redis", category: "Database", icon: "SiRedis", color: "#FF4438" },

  // 5. AI
  { name: "LangChain", category: "AI", icon: "SiLangchain", color: "#22C55E" },
  { name: "OpenAI", category: "AI", icon: "SiOpenai", color: "#10A37F" },
  { name: "Hugging Face", category: "AI", icon: "SiHuggingface", color: "#FFD21E" },

  // 6. ML
  { name: "PyTorch", category: "ML", icon: "SiPytorch", color: "#EE4C2C" },
  { name: "TensorFlow", category: "ML", icon: "SiTensorflow", color: "#FF6F00" },
  { name: "Scikit-learn", category: "ML", icon: "SiScikitlearn", color: "#F7931E" },
  { name: "Pandas", category: "ML", icon: "SiPandas", color: "#E70488" },
  { name: "NumPy", category: "ML", icon: "SiNumpy", color: "#4DABCF" },

  // 7. DevOps & Tools
  { name: "Docker", category: "DevOps & Tools", icon: "SiDocker", color: "#2496ED" },
  { name: "Git", category: "DevOps & Tools", icon: "SiGit", color: "#F05032" },
  { name: "GitHub", category: "DevOps & Tools", icon: "SiGithub", color: "#FFFFFF" },
  { name: "Postman", category: "DevOps & Tools", icon: "SiPostman", color: "#FF6C37" },
];
