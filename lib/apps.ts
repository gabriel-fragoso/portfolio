import type { Locale } from "@/lib/i18n";

export type AppCategory = "products" | "webapps" | "opensource";

export type App = {
  name: string;
  tag: string;
  description: string;
  icon: string | null;
  chips: string[];
  categories: AppCategory[];
  url: string;
};

const appsEn: App[] = [
  {
    name: "Vai Anotando",
    tag: "Digital menu for restaurants",
    description:
      "Digital menu for restaurants to sell directly through WhatsApp, with no per-order commission. 20+ active businesses.",
    icon: "https://www.vaianotando.com.br/logo/texto-logo.png",
    chips: ["Web App", "Next.js", "WhatsApp"],
    categories: ["webapps"],
    url: "https://www.vaianotando.com.br/",
  },
  {
    name: "Feedget",
    tag: "Feedback platform",
    description:
      "Feedback platform with an embeddable widget for SaaS products, WhatsApp/QR Code surveys and AI triage.",
    icon: null,
    chips: ["Product", "SaaS", "TypeScript"],
    categories: ["products"],
    url: "https://feedget.com.br/",
  },
  {
    name: "Boi na Mão",
    tag: "App",
    description: "Boi na Mão app. Learn more at gadonamao.gabrielfragoso.com.",
    icon: null,
    chips: ["Web App"],
    categories: ["webapps"],
    url: "https://gadonamao.gabrielfragoso.com",
  },
];

const appsPt: App[] = [
  {
    ...appsEn[0],
    tag: "Cardápio digital para restaurantes",
    description:
      "Cardápio digital para restaurantes venderem direto pelo WhatsApp, sem comissão por pedido. Mais de 20 negócios ativos.",
  },
  {
    ...appsEn[1],
    tag: "Plataforma de feedback",
    description:
      "Plataforma de feedback com widget embutível para produtos SaaS, pesquisas por WhatsApp/QR Code e triagem por IA.",
    chips: ["Produto", "SaaS", "TypeScript"],
  },
  {
    ...appsEn[2],
    tag: "Aplicativo",
    description: "App Boi na Mão. Saiba mais em gadonamao.gabrielfragoso.com.",
  },
];

// Free / open-source apps and systems. Add new entries to both lists as they ship.
export const appsByLocale: Record<Locale, App[]> = { en: appsEn, pt: appsPt };
