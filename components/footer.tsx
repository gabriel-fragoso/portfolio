"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
  { name: "Products", href: "/#products" },
  { name: "Experience", href: "/#experience" },
  { name: "Apps", href: "/apps" },
  { name: "Contact", href: "/#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-14 border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link
            href="/"
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
          © {currentYear} Gabriel Fragoso · CNPJ 66.231.519/0001-99 · +55 83
          99830 4284
        </div>
      </div>
    </footer>
  );
}
