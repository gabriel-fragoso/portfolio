"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ExternalLink, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { PERSON } from "@/lib/site";

export function ContactSection({ locale }: { locale: Locale }) {
  const t = content[locale].contact;
  return (
    <section
      id="contact"
      className="py-24 text-center bg-white border-t border-border relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 relative z-20"
      >
        <h2 className="text-5xl font-display text-ink-950 uppercase tracking-tight mb-4">
          {t.title}
        </h2>
        <p className="body-md text-ink-600 mb-8">
          {t.text}
        </p>

        <div className="flex flex-wrap gap-3.5 justify-center">
          <Button asChild size="lg" className="px-6">
            <Link href={`mailto:${PERSON.email}`}>
              <Mail className="h-4 w-4 mr-2" />
              {PERSON.email}
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-6">
            <Link
              href={PERSON.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              {t.whatsapp}
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-6">
            <Link
              href={PERSON.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              LinkedIn
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-6">
            <Link
              href={PERSON.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              GitHub
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
