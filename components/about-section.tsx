"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  const highlights = [
    t("about.highlight1"),
    t("about.highlight2"),
    t("about.highlight3"),
    t("about.highlight4"),
    t("about.highlight5"),
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-900/30 border border-blue-800/30 text-blue-400 text-sm font-medium"
            >
              {t("about.title")}
            </motion.div>
            <h2 className="heading-lg">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                {t("about.title")}
              </span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700/30">
            <div className="space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="body-lg text-gray-300"
              >
                {t("about.description1")}
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-5">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-0.5 flex-shrink-0 bg-blue-900/30 rounded-full p-1 group-hover:bg-blue-800/50 transition-colors">
                      <CheckCircle className="h-4 w-4 text-blue-400" />
                    </div>
                    <span className="text-gray-200 group-hover:text-white transition-colors">{highlight}</span>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="body-lg text-gray-300"
              >
                {t("about.description2")}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

