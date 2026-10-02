"use client";

import { ProjectFlipCard } from "@/components/project-flip-card";
import { motion } from "framer-motion";
import { useState } from "react";
import { appsList, type App } from "@/lib/apps";

const filters = ["All", "Products", "Web Apps", "Open Source"] as const;
type Filter = (typeof filters)[number];

export function AppsGrid() {
  const [filter, setFilter] = useState<Filter>("All");

  const allApps = appsList;
  const filteredApps = allApps.filter(
    (app) => filter === "All" || app.chips.includes(filter)
  );

  return (
    <div className="container mx-auto px-6 pb-24">
      <div className="flex gap-2.5 flex-wrap mb-4">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`font-ui text-sm font-semibold px-4 py-2 rounded-full border transition-colors ${
              filter === f
                ? "bg-coral-500 text-white border-coral-500"
                : "bg-white text-ink-600 border-border hover:bg-coral-50 hover:text-coral-600"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="text-sm font-ui text-ink-400 mb-6">
        {filteredApps.length} project{filteredApps.length === 1 ? "" : "s"}
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
          Nothing here yet — free and open-source projects will show up in
          this category as they ship.
        </div>
      )}
    </div>
  );
}
