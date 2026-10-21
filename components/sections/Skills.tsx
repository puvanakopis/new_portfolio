"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { skillsData, type SkillCategory } from "@/data/skills";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiC,
  SiGo,
  SiPhp,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiExpo,
  SiRedux,
  SiTailwindcss,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiSpring,
  SiFastapi,
  SiLangchain,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiOpenai,
  SiHuggingface,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { FaCss3Alt, FaJava } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import { Code2, ArrowUpRight } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  SiHtml5,
  FaCss3Alt,
  SiJavascript,
  SiTypescript,
  SiC,
  FaJava,
  TbBrandCSharp,
  SiGo,
  SiPhp,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiExpo,
  SiRedux,
  SiTailwindcss,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiSpring,
  SiFastapi,
  SiLangchain,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiOpenai,
  SiHuggingface,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
};

const categories: { label: string; value: SkillCategory }[] = [
  { label: "All", value: "All" },
  { label: "Languages", value: "Languages" },
  { label: "Frontend", value: "Frontend" },
  { label: "Backend", value: "Backend" },
  { label: "Database", value: "Database" },
  { label: "AI", value: "AI" },
  { label: "ML", value: "ML" },
  { label: "DevOps & Tools", value: "DevOps & Tools" },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("All");
  const [showAll, setShowAll] = useState(false);
  const [columns, setColumns] = useState(7);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateColumns = () => {
      if (window.innerWidth >= 1024) setColumns(7);
      else if (window.innerWidth >= 768) setColumns(5);
      else if (window.innerWidth >= 640) setColumns(4);
      else setColumns(2);
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") return skillsData;
    return skillsData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Exactly 4 rows based on current grid columns
  const limit = mounted ? columns * 4 : 28;
  const hasMore = filteredSkills.length > limit;
  const visibleSkills = showAll || !hasMore ? filteredSkills : filteredSkills.slice(0, limit);

  const handleCategoryChange = (category: SkillCategory) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 pb-20 pt-12 md:pb-32 md:pt-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <Reveal
          as="span"
          className="mb-6 block text-sm uppercase tracking-[0.3em] text-[var(--primary)]"
          direction="left"
        >
          Tech Stack
        </Reveal>

        {/* Section Heading */}
        <Reveal direction="up">
          <h2 className="text-display text-4xl text-[var(--foreground)] md:text-5xl mb-8">
            Skills & <span className="text-[var(--primary)]">Technologies</span>
          </h2>
        </Reveal>

        {/* Category Filter in ONE minimalist line */}
        <Reveal direction="up" delay={0.2}>
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto whitespace-nowrap pb-3 scrollbar-none mb-10">
            {categories.map((cat) => {
              const count =
                cat.value === "All"
                  ? skillsData.length
                  : skillsData.filter((s) => s.category === cat.value).length;
              const isActive = activeCategory === cat.value;

              return (
                <button
                  key={cat.value}
                  onClick={() => handleCategoryChange(cat.value)}
                  className={`group relative flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-lg shadow-[var(--primary)]/20"
                      : "border border-[var(--border)] bg-[#121316] text-[var(--muted-foreground)] hover:border-white/30 hover:text-[var(--foreground)]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`ml-0.5 rounded-full px-1.5 py-0.2 text-[10px] font-semibold ${
                      isActive
                        ? "bg-black/20 text-black"
                        : "bg-white/5 text-[var(--muted-foreground)]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Skills Icon Grid - Clean 7-column layout matching reference image */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 sm:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {visibleSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon] || Code2;

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25, delay: (index % 14) * 0.02 }}
                  className="group relative flex flex-col items-center justify-center p-5 aspect-[4/3] sm:aspect-square rounded-2xl bg-[#131417] border border-white/[0.06] transition-all duration-300 hover:border-white/20 hover:bg-[#181a20] hover:scale-[1.03]"
                >
                  {/* Colorful Brand Icon */}
                  <div className="flex items-center justify-center h-12 w-12 transition-transform duration-300 group-hover:scale-110">
                    <IconComponent
                      className="h-10 w-10 sm:h-11 sm:w-11 transition-all duration-300"
                      style={{ color: skill.color }}
                    />
                  </div>

                  {/* Clean Text Label */}
                  <span className="mt-3 text-xs sm:text-sm font-medium text-neutral-300 group-hover:text-white transition-colors tracking-tight text-center line-clamp-1">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Show All / Show Less Toggle Button */}
        {hasMore && (
          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="group inline-flex items-center gap-3 rounded-full border border-[var(--primary)] px-8 py-3.5 text-xs font-mono uppercase tracking-widest text-[var(--primary)] transition-all duration-300 hover:bg-[var(--primary)] hover:text-black cursor-pointer"
              data-cursor-hover
            >
              <span>
                {showAll ? "Show Less" : `Show All (${filteredSkills.length})`}
              </span>
              <ArrowUpRight
                className={`h-4 w-4 transition-transform duration-300 ${
                  showAll
                    ? "-rotate-45"
                    : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
