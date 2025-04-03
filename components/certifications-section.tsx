"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

type Certification = {
  title: string;
  issuer: string;
  logo: string;
  year: string;
};

export function CertificationsSection() {
  const { t } = useLanguage();

  const certifications: Certification[] = [
    {
      title: "UI Designer",
      issuer: "UI Start",
      logo: "/placeholder.svg?height=60&width=60",
      year: "2022",
    },
    {
      title: "Discover / Especializar / Fundamentar",
      issuer: "Rocketseat",
      logo: "/placeholder.svg?height=60&width=60",
      year: "2022",
    },
    {
      title: "Modern Web",
      issuer: "Cod3r",
      logo: "/placeholder.svg?height=60&width=60",
      year: "2021",
    },
    {
      title: "Mobile & Web Dev",
      issuer: "UNESA",
      logo: "/placeholder.svg?height=60&width=60",
      year: "2023",
    },
    {
      title: "Programming in Python, C, JavaScript, PHP",
      issuer: "UNESA",
      logo: "/placeholder.svg?height=60&width=60",
      year: "2023",
    },
    {
      title: "Formação NodeJs",
      issuer: "Rocketseat",
      logo: "/placeholder.svg?height=60&width=60",
      year: "2024",
    },
    {
      title: "Formação ReactJs",
      issuer: "Rocketseat",
      logo: "/placeholder.svg?height=60&width=60",
      year: "2024",
    },
    {
      title: "Formação React Native",
      issuer: "Rocketseat",
      logo: "/placeholder.svg?height=60&width=60",
      year: "2025",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-900/30 border border-blue-800/30 text-blue-400 text-sm font-medium"
          >
            {t("cert.title")}
          </motion.div>
          <h2 className="heading-lg">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              {t("cert.title")}
            </span>
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 flex items-center gap-4 shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 p-3 rounded-lg border border-blue-800/20">
                <Image
                  src={cert.logo || "/placeholder.svg"}
                  alt={cert.issuer}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="font-medium text-white font-heading">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                  <span>{cert.issuer}</span>
                  <span className="text-blue-500">•</span>
                  <span>{cert.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
