"use client";

import Link from "next/link";
import { appsUrl, homeUrl } from "@/lib/site";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { motion } from "framer-motion";

export function Footer({ locale }: { locale: Locale }) {
  const t = content[locale];
  const home = homeUrl(locale);
  const footerLinks = [
    { name: t.nav.work, href: `${home}#work` },
    { name: t.nav.experience, href: `${home}#experience` },
    { name: t.nav.apps, href: appsUrl(locale) },
    { name: t.nav.contact, href: `${home}#contact` },
  ];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-14 border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link
            href={home}
            className="text-base font-display font-medium text-ink-950 uppercase"
          >
            Gabriel Fragoso
          </Link>

          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-7 text-sm font-ui"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-ink-600 hover:text-ink-950 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>
        </div>

        <div className="mt-7 text-xs font-mono text-ink-400">
          © {currentYear} Gabriel Fragoso{t.footer.legal}
        </div>
      </div>
    </footer>
  );
}
