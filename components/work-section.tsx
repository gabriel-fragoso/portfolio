"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { appsUrl } from "@/lib/site";

export function WorkSection({ locale }: { locale: Locale }) {
  const t = content[locale].work;

  return (
    <section
      id="work"
      className="py-24 bg-white border-t border-b border-border relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-20">
        <div className="mb-16">
          <div className="eyebrow mb-4">{t.eyebrow}</div>
          <h2 className="heading-lg text-ink-950 max-w-xl uppercase">
            {t.title}
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {t.cases.map((c, index) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="grid lg:grid-cols-[320px_1fr] gap-6 lg:gap-12 border border-border rounded-card bg-paper p-7 md:p-9"
            >
              <header>
                <h3 className="font-display text-4xl uppercase text-ink-950">
                  {c.name}
                </h3>
                <p className="mt-2 font-ui text-sm font-semibold text-coral-600">
                  {c.role}
                </p>
                <p className="mt-1 font-mono text-sm text-ink-400">
                  {c.period}
                </p>
                <p className="mt-4 body-sm text-ink-600">{c.summary}</p>
                {c.url && (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 font-ui text-sm font-semibold text-ink-950 hover:text-coral-600 transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    {t.visit} {c.name}
                  </a>
                )}
              </header>

              <div className="flex flex-col gap-5">
                <div>
                  <h4 className="font-ui text-xs font-semibold uppercase tracking-widest text-ink-400 mb-1.5">
                    {t.problem}
                  </h4>
                  <p className="body-md text-ink-800">{c.problem}</p>
                </div>
                <div>
                  <h4 className="font-ui text-xs font-semibold uppercase tracking-widest text-ink-400 mb-1.5">
                    {t.built}
                  </h4>
                  <ul className="list-disc pl-5 space-y-1.5 body-sm text-ink-600">
                    {c.built.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
                <ul
                  aria-label={t.stack}
                  className="flex flex-wrap gap-2"
                >
                  {c.stack.map((tech) => (
                    <li
                      key={tech}
                      className="font-mono text-xs text-ink-600 bg-ink-100 px-2.5 py-1 rounded-sm"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20">
          <div className="eyebrow mb-4">{t.otherEyebrow}</div>
          <h3 className="heading-md text-ink-950 uppercase mb-8">
            {t.otherTitle}
          </h3>
          <ul className="grid md:grid-cols-2 gap-5">
            {t.others.map((o) => (
              <li
                key={o.name}
                className="border border-border rounded-card p-6 bg-paper"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <a
                    href={o.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-2xl uppercase text-ink-950 hover:text-coral-600 transition-colors"
                  >
                    {o.name}
                  </a>
                  <span className="font-mono text-xs text-coral-600 text-right">
                    {o.role}
                  </span>
                </div>
                <p className="mt-2 body-sm text-ink-600">{o.description}</p>
              </li>
            ))}
          </ul>
          <a
            href={appsUrl(locale)}
            className="mt-8 inline-flex items-center gap-1.5 font-ui text-sm font-semibold text-ink-950 hover:text-coral-600 transition-colors"
          >
            {t.allApps} →
          </a>
        </div>
      </div>
    </section>
  );
}
