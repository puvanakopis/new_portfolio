"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "Python",
  "AI Agents",
  "LLMs",
  "RAG",
  "LangChain",
  "LangGraph",
  "FastAPI",
  "Next.js",
  "MongoDB",
  "PostgreSQL",
  "ChromaDB",
  "Pinecone",
  "OpenAI API",
  "Hugging Face",
  "Streamlit",
  "Docker",
  "Git",
  "Machine Learning",
];

const stats = [
  { value: 7, suffix: "+", label: "AI Projects" },
  { value: 3, suffix: "+", label: "Professional Certificates" },
  { value: 4, suffix: "+", label: "AI Agent Systems" },
];

export function About() {
  const root = useRef<HTMLElement>(null);
  const imgWrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image clip-path reveal
      gsap.fromTo(
        imgWrap.current,
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "power3.out",
          duration: 1.4,
          scrollTrigger: { trigger: imgWrap.current, start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".about-img-inner",
        { scale: 1.3 },
        {
          scale: 1,
          ease: "power3.out",
          duration: 1.4,
          scrollTrigger: { trigger: imgWrap.current, start: "top 80%" },
        }
      );

      // Skill tags stagger bounce in
      gsap.utils.toArray<HTMLElement>(".skill-tag").forEach((tag, i) => {
        gsap.from(tag, {
          opacity: 0,
          scale: 0.7,
          y: 20,
          duration: 0.5,
          delay: i * 0.045,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: ".skills-wrap", start: "top 85%" },
        });
      });

      // Stats counter section fade + slide
      gsap.utils.toArray<HTMLElement>(".stat-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.9,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".stats-section", start: "top 85%" },
        });
      });

      // Stats divider line
      gsap.fromTo(
        ".stats-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".stats-line", start: "top 88%" },
        }
      );

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        // Parallax on image
        gsap.to(".about-img-inner", {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
        // Content slide from right
        gsap.from(".about-content", {
          x: 80,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 75%",
            end: "top 35%",
            scrub: 1,
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="about"
      className="overflow-hidden px-6 pb-14 pt-4 md:pb-28 md:pt-1"
    >
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:gap-20">
        <div ref={imgWrap} className="overflow-hidden rounded-2xl">
          <Image
            src="/puvan_about.png"
            alt="Portrait of Puvanakopis Mehanathan"
            width={600}
            height={9000}
            loading="lazy"
            className="about-img-inner aspect-[4/5] w-full object-cover"
          />
        </div>

        <div className="about-content flex flex-col justify-center">
          <Reveal as="span" className="mb-6 text-sm uppercase tracking-[0.3em] text-[var(--primary)]" direction="left">
            About
          </Reveal>
          <Reveal direction="up">
            <h2 className="text-display mb-8 text-4xl text-[var(--foreground)] md:text-5xl">
              Transforming AI ideas into real-world products.
            </h2>
          </Reveal>
          <Reveal delay={1} direction="up">
            <p className="mb-5 max-w-lg leading-relaxed text-[var(--muted-foreground)]">
              I&apos;m a third-year Software Engineering undergraduate at
              Sabaragamuwa University of Sri Lanka, specializing in <strong>AI Engineering</strong>.
              I build and deploy production-grade LLM systems from multi agent conversational
              assistants to RAG powered platforms with a focus on real world impact.
            </p>

            <p className="mb-10 max-w-lg leading-relaxed text-[var(--muted-foreground)]">
              I&apos;ve developed end to end AI products including <strong>iStore</strong> (a LangGraph based
              multi agent shopping assistant), <strong>CampusEase</strong> (a RAG powered university accommodation
              platform using ChromaDB), and a <strong>Smart Data Analysis multi agent system</strong> for automated
              analytics. As a freelancer, I ship full stack solutions using FastAPI,
              Next.js, and Docker combining cutting edge AI with robust software engineering.
            </p>
          </Reveal>

          {/* Skill tags */}
          <div className="skills-wrap mb-10 flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s}
                className="skill-tag rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--muted-foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                {s}
              </span>
            ))}
          </div>

          <Reveal delay={3} direction="up">
            <a
              href="/Puvanakopis_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group uppercase inline-flex w-fit items-center gap-3 rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-medium text-[var(--primary-foreground)]"
            >
              View CV
              <span className="transition-transform group-hover:translate-y-0.5">
                ↗
              </span>
            </a>
          </Reveal>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-section mx-auto mt-24 max-w-7xl">
        <span className="stats-line block h-px w-full bg-[var(--border)]" />
        <div className="grid grid-cols-1 gap-10 pt-14 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="stat-card text-center sm:text-left">
              <div className="text-display text-5xl text-[var(--foreground)] md:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm uppercase tracking-wider text-[var(--muted-foreground)]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}