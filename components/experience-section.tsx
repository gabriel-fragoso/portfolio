"use client";

import { motion } from "framer-motion";

type Experience = {
  period: string;
  role: string;
  company: string;
  description: string;
  stack: string[];
};

const experiences: Experience[] = [
  {
    period: "Jul 2025 — Jun 2026",
    role: "Tech Lead",
    company: "OfficeCom",
    description:
      "Led frontend development for the backoffice platform and the CerteiroFC app, driving feature development with a focus on performance, stability, and scalability.",
    stack: ["React", "Next.js", "TypeScript"],
  },
  {
    period: "Apr 2024 — Mar 2026",
    role: "Senior Software Engineer",
    company: "Virtual Pay",
    description:
      "Built a SaaS platform for game stores with a NestJS backend and microservices architecture. On the frontend, applied the Compound Component Pattern with Next.js, React Query, and Zustand. Also contributed to BizStore (PWA) and a Vue.js payment gateway integrated with Laravel.",
    stack: ["NestJS", "TypeORM", "MySQL", "Next.js", "React Query"],
  },
  {
    period: "Apr 2024 — Jul 2025",
    role: "Senior Software Engineer",
    company: "Ego Eimi",
    description:
      "Worked across multiple projects as a software engineer, contributing to both frontend and backend. Frontend with Next.js, TypeScript, Tailwind CSS, and Storybook; backend with NestJS, Prisma, FastAPI (Python), Docker, and AWS, plus AI work with LangGraph and LangChain.",
    stack: ["Next.js", "NestJS", "FastAPI", "LangChain", "AWS"],
  },
  {
    period: "May 2023 — May 2024",
    role: "Mid-Level Software Engineer",
    company: "iTechMed",
    description:
      "Worked across a diverse client base, focused on building dashboards for monitoring gateways and critical operations, using React, Node.js, and AWS (S3, CloudFront, Route 53).",
    stack: ["React", "Node.js", "Redux", "AWS"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-20">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-4"
          >
            Experience
          </motion.div>
          <h2 className="heading-lg text-ink-950 max-w-xl uppercase">
            The last few years, in short.
          </h2>
        </div>

        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className={`grid md:grid-cols-[180px_1fr] gap-4 md:gap-8 py-7 border-t border-border ${
                index === experiences.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="text-sm font-mono text-ink-400">
                {exp.period}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink-950 font-ui mb-1">
                  {exp.role}
                </h3>
                <div className="text-sm text-coral-600 font-semibold font-ui mb-2.5">
                  {exp.company}
                </div>
                <p className="body-sm text-ink-600 max-w-2xl mb-3">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs text-ink-600 bg-ink-100 px-2.5 py-1 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
