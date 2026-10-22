import type { Locale } from "@/lib/i18n";

export const SITE_URL = "https://gabrielfragoso.com";
export const APPS_URL = "https://apps.gabrielfragoso.com";

export const PERSON = {
  name: "Gabriel Fragoso",
  email: "hello@gabrielfragoso.com",
  cnpj: "66.231.519/0001-99",
  phone: "+55 83 99830 4284",
  whatsapp: "https://wa.me/5583998304284",
  linkedin: "https://www.linkedin.com/in/gabriel-fragoso",
  github: "https://www.github.com/gabriel-fragoso",
  instagram: "https://www.instagram.com/gabriel.code_",
  jobTitle: "Senior Frontend Engineer",
};

/** Absolute URL of the portfolio home page in the given language. */
export const homeUrl = (locale: Locale) =>
  locale === "pt" ? `${SITE_URL}/pt` : SITE_URL;

/** Absolute URL of the apps page in the given language. */
export const appsUrl = (locale: Locale) =>
  locale === "pt" ? `${APPS_URL}/pt` : APPS_URL;

/** Path of the downloadable CV for the given language. */
export const cvPath = (locale: Locale) =>
  locale === "pt" ? "/curriculo-pt.pdf" : "/curriculo-en.pdf";
