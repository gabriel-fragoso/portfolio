"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code2, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { cvPath } from "@/lib/site";

export function HeroSection({ locale }: { locale: Locale }) {
  const t = content[locale].hero;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-20"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="eyebrow"
              >
                <Code2 className="h-3.5 w-3.5 mr-1.5" />
                {t.eyebrow}
              </motion.div>

              <motion.h1
                className="heading-xl text-ink-950 mt-6 uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {t.title}
              </motion.h1>

              <motion.p
                className="mt-6 body-lg text-ink-600 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {t.text}
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="px-6">
                  <Link href="#work">{t.viewWork}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-6">
                  <a href={cvPath(locale)} download>
                    {t.downloadCv}
                  </a>
                </Button>
              </div>
              <p className="flex items-start gap-2.5 font-ui text-sm text-ink-600 max-w-xl">
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-green-500"
                />
                {t.availability}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative mx-auto w-full"
          >
            <div className="relative w-full max-w-md aspect-square mx-auto">
              <Image
                src="/gabriel-fragoso.jpeg"
                alt={t.photoAlt}
                fill
                priority
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="rounded-surface object-cover shadow-md"
              />

              <div className="absolute -bottom-6 -left-6 bg-white border border-border rounded-card shadow-md px-5 py-3.5 flex items-center gap-2.5 font-ui text-sm font-semibold text-ink-950">
                <MapPin className="h-3.5 w-3.5 text-coral-500" />
                {t.badge}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
