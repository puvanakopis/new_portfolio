"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

type TimelineItem = {
    title: string;
    organization: string;
    location?: string;
    period: string;
    summary: string;
};

const experiences: TimelineItem[] = [
    {
        title: "AI Developer",
        organization: "ZENCORD",
        location: "Freelance",
        period: "Aug 2025 – Apr 2026",
        summary:
            "Designed and deployed AI solutions using LLMs, RAG pipelines, and agent-based architectures. Built scalable FastAPI backends with vector databases (ChromaDB, Pinecone) and delivered end-to-end AI applications like chatbots and data tools.",
    },
    {
        title: "Full Stack Engineer",
        organization: "Fiverr",
        location: "Freelance",
        period: "Feb 2024 – Dec 2024 · 11 mos",
        summary:
            "Developed responsive web applications using React.js and Next.js. Worked on full-stack features including REST APIs, UI optimization, authentication flows, and performance improvements. Delivered client projects across multiple domains with modern web technologies.",
    },
];

const education: TimelineItem[] = [
    {
        title: "BSc (Hons) Software Engineering",
        organization: "Sabaragamuwa University of Sri Lanka",
        period: "2023 – Present",
        summary:
            "Focused on AI, Machine Learning, NLP, Generative AI, Web Development, and Data Structures & Algorithms.",
    },
    {
        title: "G.C.E. Advanced Level (Physical Science Stream)",
        organization: "BT/PD/Kaluthavalai Maha Vidyalayam (National School)",
        period: "Jan 2014 – Feb 2021",
        summary:
            "Completed G.C.E. A/L in the Physical Science stream with Combined Mathematics, Physics, and Chemistry, building a strong foundation in analytical thinking and problem-solving.",
    },
];


export function Qualifications() {
    const [isExperience, setIsExperience] = useState(true);
    const items = isExperience ? experiences : education;
    const icon = isExperience ? Briefcase : GraduationCap;
    const Icon = icon;

    return (
        <SectionWrapper id="qualifications">
            <div className="mb-12">
                <SectionHeader
                    tag="Background"
                    title="Qualifications"
                    subtitle="A combined view of professional experience and academic background."
                />
            </div>

            {/* Toggle Button */}
            <div className="flex flex-wrap justify-center mb-10 sm:mb-12 gap-3 sm:gap-4">
                <button
                    onClick={() => setIsExperience(true)}
                    className={`inline-flex items-center px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 border ${isExperience
                        ? "bg-accent border-accent text-white"
                        : "border-[var(--border)] text-[var(--text-muted)] hover:border-accent"
                        }`}
                >
                    <Briefcase size={16} className="inline mr-2" />
                    Experience
                </button>
                <button
                    onClick={() => setIsExperience(false)}
                    className={`inline-flex items-center px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 border ${!isExperience
                        ? "bg-accent border-accent text-white"
                        : "border-[var(--border)] text-[var(--text-muted)] hover:border-accent"
                        }`}
                >
                    <GraduationCap size={16} className="inline mr-2" />
                    Education
                </button>
            </div>

            {/* Timeline */}
            <div className="relative">
                {/* Central timeline line */}
                <div
                    className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden md:block"
                    style={{
                        background:
                            "linear-gradient(180deg, var(--accent) 0%, var(--accent-subtle) 50%, transparent 100%)",
                    }}
                />
                {/* Mobile timeline line */}
                <div
                    className="absolute left-4 top-0 bottom-0 w-[2px] md:hidden"
                    style={{
                        background:
                            "linear-gradient(180deg, var(--accent) 0%, var(--accent-subtle) 50%, transparent 100%)",
                    }}
                />

                <div className="space-y-12 pt-16">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className={`relative flex justify-start ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 z-10">
                                <div
                                    className="w-4 h-4 rounded-full border-2 border-accent flex items-center justify-center"
                                    style={{ backgroundColor: "var(--bg)" }}
                                >
                                    <div
                                        className="w-2 h-2 rounded-full"
                                        style={{ backgroundColor: "var(--accent)" }}
                                    />
                                </div>
                            </div>

                            {/* Card */}
                            <div
                                className={`w-full pl-8 md:w-5/12 md:pl-0 ${i % 2 === 0 ? "md:pr-1" : "md:pl-1"
                                    }`}
                            >
                                <div
                                    className="p-4 sm:p-6 rounded-xl border border-[var(--card-border)] transition-all duration-300 hover:border-accent"
                                    style={{
                                        backgroundColor: "var(--card-bg)",
                                    }}
                                >
                                    <div className="flex items-start gap-3 mb-3">
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: "var(--accent-subtle)" }}
                                        >
                                            <Icon size={18} style={{ color: "var(--accent)" }} />
                                        </div>
                                        <div className="flex-1">
                                            <h3
                                                className="font-bold text-sm sm:text-base leading-tight"
                                                style={{ color: "var(--text-primary)" }}
                                            >
                                                {item.title}
                                            </h3>
                                            <p
                                                className="text-xs font-mono mt-1"
                                                style={{ color: "var(--accent)" }}
                                            >
                                                {item.organization}
                                            </p>
                                        </div>
                                    </div>

                                    {item.location && (
                                        <div
                                            className="text-xs flex items-center gap-1 mb-2"
                                            style={{ color: "var(--text-muted)" }}
                                        >
                                            <MapPin size={12} /> {item.location}
                                        </div>
                                    )}

                                    <div
                                        className="text-xs flex items-center gap-1 mb-3"
                                        style={{ color: "var(--text-muted)" }}
                                    >
                                        <Calendar size={12} /> {item.period}
                                    </div>

                                    <p
                                        className="text-sm leading-relaxed"
                                        style={{ color: "var(--text-secondary)" }}
                                    >
                                        {item.summary}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
