"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/Reveal";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    title: "AI Engineering",
    desc: "Building production-ready AI applications using LLMs, LangChain, LangGraph, RAG pipelines, embeddings, and modern AI frameworks.",
  },
  {
    num: "02",
    title: "Agentic AI Systems",
    desc: "Designing multi-agent workflows, tool-calling architectures, AI assistants, and autonomous systems that solve complex business problems.",
  },
  {
    num: "03",
    title: "Data Analytics",
    desc: "Transforming raw data into actionable insights through data analysis, dashboards, visualization, statistical analysis, and business intelligence solutions.",
  },
  {
    num: "04",
    title: "Full-Stack Development",
    desc: "Developing scalable AI-powered web applications using Next.js, FastAPI, Python, MongoDB, vector databases, and cloud-ready architectures.",
  },
];

export function Services() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate divider lines
      gsap.utils.toArray<HTMLElement>(".service-line").forEach((line, i) => {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left",
            ease: "power3.out",
            duration: 1.1,
            scrollTrigger: { trigger: line, start: "top 90%" },
          }
        );
      });

      // Staggered service row animations
      gsap.utils.toArray<HTMLElement>(".service-num").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          x: -30,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      gsap.utils.toArray<HTMLElement>(".service-title").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      gsap.utils.toArray<HTMLElement>(".service-desc").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          x: 40,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root}
      id="services"
      className="overflow-hidden px-6 pb-14 pt-10 md:pb-28 md:pt-16"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal as="span" className="mb-6 block text-sm uppercase tracking-[0.3em] text-[var(--primary)]" direction="left">
          Services
        </Reveal>
        <Reveal direction="up">
          <h2 className="text-display mb-16 max-w-2xl text-4xl text-[var(--foreground)] md:text-6xl">
            Building Intelligent Digital Solutions
          </h2>
        </Reveal>

        <div>
          {services.map((s) => (
            <div key={s.num} className="group">
              <span className="service-line block h-px w-full bg-[var(--border)]" />
              <div className="grid grid-cols-[auto_1fr] items-start gap-6 py-8 transition-colors md:grid-cols-[80px_1fr_1.2fr] md:items-center md:py-10">
                <span className="service-num text-sm text-[var(--muted-foreground)]">{s.num}</span>
                <h3 className="service-title text-display text-2xl text-[var(--foreground)] transition-transform duration-300 group-hover:translate-x-2 group-hover:text-[var(--primary)] md:text-4xl">
                  {s.title}
                </h3>
                <p className="service-desc col-span-2 max-h-0 overflow-hidden text-[var(--muted-foreground)] opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100 md:col-span-1 md:max-h-40 md:opacity-60 md:group-hover:opacity-100">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
          <span className="service-line block h-px w-full bg-[var(--border)]" />
        </div>
      </div>
    </section>
  );
}
