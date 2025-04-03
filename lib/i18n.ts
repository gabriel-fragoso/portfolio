"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "pt" | "es"

type Translations = {
  [key: string]: {
    [key in Language]: string
  }
}

// Sample translations - would be expanded with all text content
const translations: Translations = {
  "hero.title": {
    en: "Hi, I'm Gabriel Fragoso. A Full Stack Developer passionate about solving problems with code.",
    pt: "Olá, sou Gabriel Fragoso. Desenvolvedor Full Stack apaixonado por resolver problemas com código.",
    es: "Hola, soy Gabriel Fragoso. Desarrollador Full Stack apasionado por resolver problemas con código.",
  },
  "hero.subtitle": {
    en: "Transforming ideas into scalable digital solutions with a focus on performance, architecture, and best practices.",
    pt: "Transformando ideias em soluções digitais escaláveis com foco em performance, arquitetura e boas práticas.",
    es: "Transformando ideas en soluciones digitales escalables con enfoque en rendimiento, arquitectura y buenas prácticas.",
  },
  // Add more translations as needed
}

type I18nContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    return translations[key][language]
  }

  return <I18nContext.Provider value={{ language, setLanguage, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}

