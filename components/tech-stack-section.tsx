"use client";

import { motion } from "framer-motion";

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "Tailwind CSS",
  "Zustand",
  "React Query",
  "Prisma",
  "FastAPI",
  "Python",
  "Docker",
  "AWS",
  "MongoDB",
  "MySQL",
  "LangChain",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export function TechStackSection() {
  return (
    <section id="stack" className="py-24 bg-ink-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-4"
          style={{ color: "var(--sun-400)" }}
        >
          Stack
        </motion.div>
        <h2 className="heading-lg text-paper max-w-xl mb-14 uppercase">
          Everyday tools.
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap gap-3"
        >
          {stack.map((tech) => (
            <motion.span
              key={tech}
              variants={item}
              className="font-mono text-sm text-paper bg-white/[0.08] px-4 py-2 rounded-full"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
