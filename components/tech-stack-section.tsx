"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.03 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export function TechStackSection({ locale }: { locale: Locale }) {
  const t = content[locale].stack;

  return (
    <section id="stack" className="py-24 bg-ink-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-20">
        <div
          className="eyebrow mb-4 !bg-white/10"
          style={{ color: "var(--sun-400)" }}
        >
          {t.eyebrow}
        </div>
        <h2 className="heading-lg text-paper max-w-xl mb-14 uppercase">
          {t.title}
        </h2>

        <div className="flex flex-col gap-10">
          {t.groups.map((group) => (
            <div key={group.name}>
              <h3 className="font-ui text-sm font-semibold uppercase tracking-widest text-paper/60 mb-4">
                {group.name}
              </h3>
              <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {group.items.map((tech) => (
                  <motion.li
                    key={tech}
                    variants={item}
                    className="font-mono text-sm text-paper bg-white/[0.08] px-4 py-2 rounded-full"
                  >
                    {tech}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
