"use client";

import { ProjectFlipCard } from "@/components/project-flip-card";
import { motion } from "framer-motion";
import { useState } from "react";
import { appsByLocale, type AppCategory } from "@/lib/apps";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type Filter = "all" | AppCategory;
const filterIds: Filter[] = ["all", "products", "webapps", "opensource"];

export function AppsGrid({ locale }: { locale: Locale }) {
  const [filter, setFilter] = useState<Filter>("all");
  const t = content[locale].apps;
  const apps = appsByLocale[locale];

  const filteredApps = apps.filter(
    (app) => filter === "all" || app.categories.includes(filter)
  );

  return (
    <div className="container mx-auto px-6 pb-24">
      <div className="flex gap-2.5 flex-wrap mb-4">
        {filterIds.map((id) => (
          <button
            key={id}
            onClick={() => setFilter(id)}
            aria-pressed={filter === id}
            className={`font-ui text-sm font-semibold px-4 py-2 rounded-full border transition-colors ${
              filter === id
                ? "bg-coral-500 text-white border-coral-500"
                : "bg-white text-ink-600 border-border hover:bg-coral-50 hover:text-coral-600"
            }`}
          >
            {t.filters[id]}
          </button>
        ))}
      </div>
      <div className="text-sm font-ui text-ink-400 mb-6">
        {t.count(filteredApps.length)}
      </div>

      {filteredApps.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-5">
          {filteredApps.map((app, index) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <ProjectFlipCard
                name={app.name}
                description={app.description}
                logo={app.icon}
                url={app.url}
                visitLabel={content[locale].work.visit}
                minHeight="min-h-[20rem]"
                footer={
                  <>
                    <div className="text-sm font-medium text-ink-400">
                      {app.tag}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {app.chips.map((chip, i) => (
                        <span
                          key={chip}
                          className={`font-mono text-xs px-2.5 py-1 rounded-sm ${
                            i === 0
                              ? "bg-coral-50 text-coral-600"
                              : "bg-ink-100 text-ink-600"
                          }`}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </>
                }
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-border rounded-card p-10 text-center text-sm text-ink-400 font-ui">
          {t.empty}
        </div>
      )}
    </div>
  );
}
