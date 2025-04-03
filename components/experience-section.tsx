"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronLeft, ChevronRight, Calendar, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

type Experience = {
  companyKey: string
  periodKey: string
  roleKey: string
  descriptionKey: string
}

export function ExperienceSection() {
  const { t } = useLanguage()

  const experiences: Experience[] = [
    {
      companyKey: "exp.company1",
      periodKey: "exp.period1",
      roleKey: "exp.role1",
      descriptionKey: "exp.desc1",
    },
    {
      companyKey: "exp.company2",
      periodKey: "exp.period2",
      roleKey: "exp.role2",
      descriptionKey: "exp.desc2",
    },
    {
      companyKey: "exp.company3",
      periodKey: "exp.period3",
      roleKey: "exp.role3",
      descriptionKey: "exp.desc3",
    },
    {
      companyKey: "exp.company4",
      periodKey: "exp.period4",
      roleKey: "exp.role4",
      descriptionKey: "exp.desc4",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev < experiences.length - 1 ? prev + 1 : prev))
  }

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="experience" className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <motion.div style={{ opacity }} className="container mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-900/30 border border-blue-800/30 text-blue-400 text-sm font-medium"
          >
            {t("exp.title")}
          </motion.div>
          <h2 className="heading-lg">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              {t("exp.title")}
            </span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="min-w-full px-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700/30 h-full">
                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-blue-900/30 rounded-full p-2">
                            <Calendar className="h-5 w-5 text-blue-400" />
                          </div>
                          <span className="text-sm font-medium text-blue-400">{t(exp.periodKey)}</span>
                        </div>

                        <div className="flex items-start gap-3 mb-2">
                          <div className="bg-indigo-900/30 rounded-full p-2 mt-1">
                            <Briefcase className="h-5 w-5 text-indigo-400" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white font-heading mb-1">{t(exp.companyKey)}</h3>
                            <p className="text-lg text-indigo-400">{t(exp.roleKey)}</p>
                          </div>
                        </div>
                      </div>

                      <p className="body-md text-gray-300 flex-grow">{t(exp.descriptionKey)}</p>

                      <div className="mt-8 pt-4 border-t border-gray-700/50">
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-400">
                            {index + 1} {t("exp.of")} {experiences.length}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              disabled={activeIndex === 0}
              className="rounded-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-blue-700 transition-all duration-300 disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">{t("exp.prev")}</span>
            </Button>

            <div className="flex gap-2">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "bg-blue-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={activeIndex === experiences.length - 1}
              className="rounded-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-blue-700 transition-all duration-300 disabled:opacity-50"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">{t("exp.next")}</span>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

