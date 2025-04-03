"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-gray-800/50 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <Link
              href="/"
              className="text-2xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600"
            >
              Gabriel Fragoso
            </Link>
            <p className="text-gray-400 mt-2">{t("footer.developer")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex gap-4"
          >
            <Link
              href="https://github.com/gabriel-fragoso"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-full hover:from-blue-900/30 hover:to-indigo-900/30 transition-all duration-300 border border-gray-700/50 hover:border-blue-700/50 group"
            >
              <Github className="h-5 w-5 group-hover:text-blue-400 transition-colors" />
              <span className="sr-only">GitHub</span>
            </Link>

            <Link
              href="https://linkedin.com/in/gabriel-fragoso"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-full hover:from-blue-900/30 hover:to-indigo-900/30 transition-all duration-300 border border-gray-700/50 hover:border-blue-700/50 group"
            >
              <Linkedin className="h-5 w-5 group-hover:text-blue-400 transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </Link>

            <Link
              href="mailto:fragosooliveira773@gmail.com"
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-full hover:from-blue-900/30 hover:to-indigo-900/30 transition-all duration-300 border border-gray-700/50 hover:border-blue-700/50 group"
            >
              <Mail className="h-5 w-5 group-hover:text-blue-400 transition-colors" />
              <span className="sr-only">Email</span>
            </Link>

            <Link
              href="#"
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-full hover:from-blue-900/30 hover:to-indigo-900/30 transition-all duration-300 border border-gray-700/50 hover:border-blue-700/50 group"
            >
              <Download className="h-5 w-5 group-hover:text-blue-400 transition-colors" />
              <span className="sr-only">Download CV</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center text-sm text-gray-500"
        >
          <p>
            &copy; {currentYear} Gabriel Fragoso. {t("footer.rights")}
          </p>
          <p className="mt-2">
            <Link href="https://www.gabrielfragoso.com" className="hover:text-blue-400 transition-colors">
              www.gabrielfragoso.com
            </Link>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

