"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
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
          Let&apos;s talk.
        </h2>
        <p className="body-md text-ink-600 mb-8">
          About a product, a project, or just to swap ideas.
        </p>

        <div className="flex flex-wrap gap-3.5 justify-center">
          <Button asChild size="lg" className="px-6">
            <Link href="mailto:fragosooliveira773@gmail.com">
              <Mail className="h-4 w-4 mr-2" />
              fragosooliveira773@gmail.com
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-6">
            <Link
              href="https://www.linkedin.com/in/gabriel-fragoso"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              LinkedIn
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-6">
            <Link
              href="https://www.github.com/gabriel-fragoso"
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
