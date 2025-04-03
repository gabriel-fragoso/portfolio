"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage, type Language } from "@/lib/language-context";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  { code: "en", name: "English", flag: "/flags/en.svg" },
  { code: "pt", name: "Português", flag: "/flags/pt.svg" },
  { code: "es", name: "Español", flag: "/flags/es.svg" },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [currentLanguage, setCurrentLanguage] = useState(
    languages.find((lang) => lang.code === language) || languages[0]
  );

  // Update current language when language context changes
  useEffect(() => {
    const langObj = languages.find((lang) => lang.code === language);
    if (langObj) {
      setCurrentLanguage(langObj);
    }
  }, [language]);

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as Language);
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 rounded-full bg-gray-800/80 px-4 py-2.5 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-700/80 transition-colors">
            <Image
              src={currentLanguage.flag || "/placeholder.svg"}
              alt={currentLanguage.name}
              width={20}
              height={15}
              className="rounded-sm"
            />
            <span className="text-sm font-medium">{currentLanguage.name}</span>
            <ChevronDown className="h-4 w-4 opacity-70" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-gray-800/90 backdrop-blur-sm text-white border-gray-700 rounded-xl p-1 shadow-xl"
          >
            <AnimatePresence>
              {languages.map((lang) => (
                <motion.div
                  key={lang.code}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                >
                  <DropdownMenuItem
                    className={`flex items-center gap-2 cursor-pointer rounded-lg px-3 py-2 my-1 transition-colors ${
                      language === lang.code
                        ? "bg-blue-600/20 text-blue-400"
                        : "hover:bg-gray-700/80"
                    }`}
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    <Image
                      src={lang.flag || "/placeholder.svg"}
                      alt={lang.name}
                      width={20}
                      height={15}
                      className="rounded-sm"
                    />
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                </motion.div>
              ))}
            </AnimatePresence>
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>
    </div>
  );
}
