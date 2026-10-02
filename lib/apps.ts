export type App = {
  name: string;
  tag: string;
  description: string;
  icon: string | null;
  chips: string[];
  url: string;
};

const apps: App[] = [
  {
    name: "Vai Anotando",
    tag: "Cardápio digital para restaurantes",
    description:
      "Cardápio digital para restaurantes venderem direto pelo WhatsApp, sem comissão por pedido. Mais de 20 negócios ativos.",
    icon: "https://www.vaianotando.com.br/logo/texto-logo.png",
    chips: ["Web Apps", "Next.js", "WhatsApp"],
    url: "https://www.vaianotando.com.br/",
  },
  {
    name: "Feedget",
    tag: "Widget de feedback para produtos",
    description:
      "Widget de feedback inteligente que coleta, analisa e transforma a opinião dos usuários em insights de produto.",
    icon: null,
    chips: ["Produtos", "SaaS", "TypeScript"],
    url: "https://feedget.com.br/",
  },
  {
    name: "Boi na Mão",
    tag: "Aplicativo",
    description:
      "App Boi na Mão. Saiba mais em boinamao.gabrielfragoso.com.",
    icon: null,
    chips: ["Web Apps"],
    url: "https://boinamao.gabrielfragoso.com/conheca",
  },
];

// Free / open-source apps and systems. Add new entries here as they ship.
const openSourceApps: App[] = [];

export const appsList: App[] = [...apps, ...openSourceApps];
