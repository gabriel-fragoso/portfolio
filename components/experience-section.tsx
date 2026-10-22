"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export function ExperienceSection({ locale }: { locale: Locale }) {
  const t = content[locale].experience;

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-20">
        <div className="mb-16">
          <div className="eyebrow mb-4">{t.eyebrow}</div>
          <h2 className="heading-lg text-ink-950 max-w-xl uppercase">
            {t.title}
          </h2>
        </div>

        <div className="flex flex-col">
          {t.entries.map((entry, index) => (
            <motion.div
              key={entry.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.03, duration: 0.5 }}
              className={`grid md:grid-cols-[240px_1fr] gap-4 md:gap-8 py-8 border-t border-border ${
                index === t.entries.length - 1 ? "border-b" : ""
              }`}
            >
              <div>
                <h3 className="text-lg font-semibold text-ink-950 font-ui">
                  {entry.company}
                </h3>
                {entry.location && (
                  <p className="text-sm text-ink-400 font-ui mt-1">
                    {entry.location}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-7">
                {entry.roles.map((role) => (
                  <div key={role.title + role.period}>
                    <h4 className="text-base font-semibold text-coral-600 font-ui">
                      {role.title}
                    </h4>
                    <p className="text-sm font-mono text-ink-400 mb-2.5">
                      {role.period}
                    </p>
                    {role.summary && (
                      <p className="body-sm text-ink-600 max-w-2xl mb-2.5">
                        {role.summary}
                      </p>
                    )}
                    {role.bullets && (
                      <ul className="list-disc pl-5 space-y-1.5 body-sm text-ink-600 max-w-2xl">
                        {role.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="font-ui text-lg font-semibold text-ink-950">
            {t.educationTitle}
          </h3>
          <p className="mt-2 body-sm text-ink-600">
            {t.education.school}, {t.education.degree}
          </p>
          <p className="font-mono text-sm text-ink-400">
            {t.education.period}
          </p>
        </div>
      </div>
    </section>
  );
}
