"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"

type TechCategory = {
  name: string
  translationKey: string
  techs: string[]
}

export function TechStackSection() {
  const { t } = useLanguage()

  const techCategories: TechCategory[] = [
    {
      name: "Frontend",
      translationKey: "tech.frontend",
      techs: ["React", "Next.js", "Tailwind", "Zustand", "React Query", "Zod", "Storybook"],
    },
    {
      name: "Backend",
      translationKey: "tech.backend",
      techs: ["NestJS", "Fastify", "Prisma", "MySQL", "TypeORM", "MongoDB", "Cron Jobs"],
    },
    {
      name: "Infra",
      translationKey: "tech.infra",
      techs: ["Docker", "AWS (S3, CloudFront, Route53)", "GitHub Actions"],
    },
    {
      name: "Testing",
      translationKey: "tech.testing",
      techs: ["Vitest", "Reflect", "Testes unitários", "E2E"],
    },
    {
      name: "Others",
      translationKey: "tech.other",
      techs: ["WebSockets", "Compound Component Pattern", "UI Design"],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900 to-transparent z-10"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-900/30 border border-blue-800/30 text-blue-400 text-sm font-medium"
          >
            {t("tech.title")}
          </motion.div>
          <h2 className="heading-lg">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              {t("tech.title")}
            </span>
          </h2>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-semibold text-white font-heading">{t(category.translationKey)}</h3>
                <div className="flex-grow h-px bg-gradient-to-r from-blue-600/50 to-transparent"></div>
              </div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.techs.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    variants={item}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm 
                              border border-gray-700/30 rounded-full px-5 py-2.5 text-sm font-medium
                              hover:from-blue-900/20 hover:to-indigo-900/20 hover:border-blue-700/30 transition-all duration-300
                              cursor-default shadow-lg"
                  >
                    {tech}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

