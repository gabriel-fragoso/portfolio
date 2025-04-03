"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/language-context";

type Project = {
  titleKey: string;
  descriptionKey: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
};

type FilterType =
  | "All"
  | "React"
  | "Node"
  | "Full Stack"
  | "Mobile"
  | "Angular";

export function ProjectsSection() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<FilterType>("All");

  const projects: Project[] = [
    {
      titleKey: "projects.project1.title",
      descriptionKey: "projects.project1.desc",
      image: "/supermercado-alvorada.png",
      tags: ["React", "Redux", "Magento 2", "Full Stack"],
      liveUrl: "https://supermercadoalvorada.pro.loja.biz/",
    },
    {
      titleKey: "projects.project2.title",
      descriptionKey: "projects.project2.desc",
      image: "/instituto-setas.png",
      tags: ["Angular", "Bootstrap", "Scss"],
      liveUrl: "https://institutosetas.com/",
    },
    {
      titleKey: "projects.project3.title",
      descriptionKey: "projects.project3.desc",
      image: "/licariao.png",
      tags: ["Node.js", "NextJs", "Docker", "Full Stack", "Supabase", "React"],
    },
    {
      titleKey: "projects.project4.title",
      descriptionKey: "projects.project4.desc",
      image: "/banheirometro.png",
      tags: ["React Native", "NodeJs", "Mobile", "Full Stack", "NativeWind"],
    },
  ];

  const filters: FilterType[] = [
    "All",
    "React",
    "Node",
    "Full Stack",
    "Mobile",
    "Angular",
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    return project.tags.some((tag) => tag.includes(filter));
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900 to-transparent z-10"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-900/30 border border-blue-800/30 text-blue-400 text-sm font-medium"
          >
            {t("projects.title")}
          </motion.div>
          <h2 className="heading-lg">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              {t("projects.title")}
            </span>
          </h2>
        </div>

        <div className="flex justify-center mb-10 flex-wrap gap-3">
          {filters.map((filterName) => (
            <motion.button
              key={filterName}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(filterName)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                filter === filterName
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-700/20"
                  : "bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 border border-gray-700/50"
              }`}
            >
              {filterName === "All"
                ? t("projects.filter.all")
                : filterName === "React"
                ? t("projects.filter.react")
                : filterName === "Node"
                ? t("projects.filter.node")
                : filterName === "Full Stack"
                ? t("projects.filter.fullstack")
                : t("projects.filter.mobile")}
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/30 shadow-xl h-full">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={t(project.titleKey)}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>

                    <div className="absolute top-4 right-4 flex gap-2">
                      {project.tags.includes("Full Stack") && (
                        <div className="bg-indigo-900/70 backdrop-blur-sm rounded-full p-2 text-indigo-300">
                          <Layers className="h-4 w-4" />
                        </div>
                      )}
                      {(project.tags.includes("React") ||
                        project.tags.includes("React Native")) && (
                        <div className="bg-blue-900/70 backdrop-blur-sm rounded-full p-2 text-blue-300">
                          <Code className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors font-heading">
                      {t(project.titleKey)}
                    </h3>
                    <p className="body-md text-gray-300 mb-4">
                      {t(project.descriptionKey)}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-gray-800 text-gray-200 border border-gray-700/50"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-1.5 border-gray-700 hover:bg-gray-800 hover:border-blue-700 transition-all duration-300 rounded-full px-4"
                          >
                            <Github className="h-4 w-4" />
                            {t("projects.github")}
                          </Button>
                        </Link>
                      )}

                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="sm"
                            className="gap-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border-0 rounded-full px-4"
                          >
                            <ExternalLink className="h-4 w-4" />
                            {t("projects.demo")}
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
