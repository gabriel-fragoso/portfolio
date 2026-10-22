export const locales = ["en", "pt"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const htmlLang: Record<Locale, string> = { en: "en", pt: "pt-BR" };
export const ogLocale: Record<Locale, string> = { en: "en_US", pt: "pt_BR" };
