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
      "Liderei o desenvolvimento frontend da plataforma de backoffice e do app CerteiroFC, conduzindo a entrega de funcionalidades com foco em desempenho, estabilidade e escalabilidade.",
    stack: ["React", "Next.js", "TypeScript"],
  },
  {
    period: "Abr 2024 — Mar 2026",
    role: "Engenheiro de Software Sênior",
    company: "Virtual Pay",
    description:
      "Construí uma plataforma SaaS para lojas de jogos com backend em NestJS e arquitetura de microsserviços. No frontend, apliquei o Compound Component Pattern com Next.js, React Query e Zustand. Também contribuí com o BizStore (PWA) e com um gateway de pagamento em Vue.js integrado ao Laravel.",
    stack: ["NestJS", "TypeORM", "MySQL", "Next.js", "React Query"],
  },
  {
    period: "Abr 2024 — Jul 2025",
    role: "Engenheiro de Software Sênior",
    company: "Ego Eimi",
    description:
      "Atuei em vários projetos como engenheiro de software, no frontend e no backend. Frontend com Next.js, TypeScript, Tailwind CSS e Storybook; backend com NestJS, Prisma, FastAPI (Python), Docker e AWS, além de trabalhos de IA com LangGraph e LangChain.",
    stack: ["Next.js", "NestJS", "FastAPI", "LangChain", "AWS"],
  },
  {
    period: "Mai 2023 — Mai 2024",
    role: "Engenheiro de Software Pleno",
    company: "iTechMed",
    description:
      "Atendi uma base diversificada de clientes, com foco na construção de dashboards para monitoramento de gateways e operações críticas, usando React, Node.js e AWS (S3, CloudFront, Route 53).",
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
            Experiência
          </motion.div>
          <h2 className="heading-lg text-ink-950 max-w-xl uppercase">
            Os últimos anos, em resumo.
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
