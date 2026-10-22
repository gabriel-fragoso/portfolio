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
    name: "Gado na Mão",
    tag: "Farm and feedlot management",
    description:
      "Cattle farm and feedlot management app: daily feeding, weigh-ins, cost per arroba, team service orders and farm finances in one place, working even without internet.",
    icon: null,
    chips: ["Web App", "Offline-first"],
    categories: ["webapps"],
    url: "https://gadonamao.gabrielfragoso.com",
  },
  {
    name: "Rachaí",
    tag: "Bill splitting",
    description:
      "Splits the bill and settles up over Pix. No spreadsheet and no sign-up: create a split, share it in the group, and Rachaí tells who pays whom.",
    icon: null,
    chips: ["Web App", "Pix"],
    categories: ["webapps"],
    url: "https://usarachai.vercel.app/",
  },
  {
    name: "Growth Mentor",
    tag: "Demand generation SaaS",
    description:
      "Demand generation SaaS that unifies ICP discovery, lead prospecting, content and multi-channel outreach in one system.",
    icon: "https://growthmentor.com.br/assets/logo-closed-BrOp-PfJ.png",
    chips: ["Product", "SaaS", "B2B"],
    categories: ["products"],
    url: "https://growthmentor.com.br/",
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
    tag: "Gestão de fazenda e confinamento",
    description:
      "App de gestão de fazenda e confinamento de gado de corte: trato do dia, pesagem, custo da arroba, ordens de serviço da equipe e financeiro num só lugar, funcionando até sem internet.",
    chips: ["Web App", "Funciona offline"],
  },
  {
    ...appsEn[3],
    tag: "Divisão de contas",
    description:
      "Divide a conta do rolê e acerta tudo no Pix. Sem planilha e sem cadastro: cria o racha, manda no grupo e o Rachaí diz quem paga quem.",
  },
  {
    ...appsEn[4],
    tag: "SaaS de geração de demanda",
    description:
      "SaaS de geração de demanda que reúne descoberta de ICP, prospecção de leads, conteúdo e abordagem multicanal em um só sistema.",
    chips: ["Produto", "SaaS", "B2B"],
  },
];

// Free / open-source apps and systems. Add new entries to both lists as they ship.
export const appsByLocale: Record<Locale, App[]> = { en: appsEn, pt: appsPt };
