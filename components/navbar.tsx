"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { appsUrl, homeUrl } from "@/lib/site";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { LanguageSwitch } from "@/components/language-switch";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar({ locale }: { locale: Locale }) {
  const t = content[locale].nav;
  const home = homeUrl(locale);
  const navItems = [
    { name: t.work, href: `${home}#work` },
    { name: t.experience, href: `${home}#experience` },
    { name: t.stack, href: `${home}#stack` },
    { name: t.apps, href: appsUrl(locale) },
    { name: t.contact, href: `${home}#contact` },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-paper/90 backdrop-blur-lg shadow-sm border-b border-border"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href={home}
              aria-label={t.home}
              className="text-xl font-display font-medium text-ink-950 uppercase tracking-tight"
            >
              Gabriel Fragoso
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-sm font-medium text-ink-600 hover:text-ink-950 transition-colors relative group font-ui"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <LanguageSwitch locale={locale} label={t.language} />
              <Button asChild size="sm">
                <Link href={`${home}#contact`}>{t.cta}</Link>
              </Button>
            </nav>

            <button
              className="md:hidden text-ink-600 hover:text-ink-950"
              aria-label={t.openMenu}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-paper/98 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-end p-6">
              <button
                className="text-ink-600 hover:text-ink-950"
                aria-label={t.closeMenu}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center h-full space-y-8 -mt-20">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-2xl font-display text-ink-800 hover:text-coral-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <LanguageSwitch locale={locale} label={t.language} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
