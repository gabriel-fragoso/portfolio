"use client";

import { motion } from "framer-motion";
import { ProjectFlipCard } from "@/components/project-flip-card";
import { clinicLps } from "@/lib/clinics";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

export function ClinicLpGrid({
  locale,
  limit,
}: {
  locale: Locale;
  limit?: number;
}) {
  const t = content[locale].clinics;
  const pages = clinicLps[locale].slice(0, limit);

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {pages.map((lp, index) => (
        <motion.div
          key={lp.url}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08, duration: 0.5 }}
          whileHover={{ y: -4 }}
        >
          <ProjectFlipCard
            name={lp.name}
            description={lp.description}
            logo={null}
            url={lp.url}
            visitLabel={t.visit}
            minHeight="min-h-[22rem]"
            footer={
              <>
                <div className="flex items-center gap-2 text-sm font-medium text-ink-400">
                  {lp.niche}
                  {lp.demo && (
                    <span className="font-mono text-xs bg-sun-400/30 text-ink-800 px-2 py-0.5 rounded-sm">
                      {t.demoBadge}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {lp.tags.map((tag, i) => (
                    <span
                      key={tag}
                      className={`font-mono text-xs px-2.5 py-1 rounded-sm ${
                        i === 0
                          ? "bg-coral-50 text-coral-600"
                          : "bg-ink-100 text-ink-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            }
          />
        </motion.div>
      ))}
    </div>
  );
}
