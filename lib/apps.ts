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
    tag: "Digital menu for restaurants",
    description:
      "Digital menu for restaurants to sell directly through WhatsApp, with no per-order commission. 20+ active businesses.",
    icon: "https://www.vaianotando.com.br/logo/texto-logo.png",
    chips: ["Web Apps", "Next.js", "WhatsApp"],
    url: "https://www.vaianotando.com.br/",
  },
  {
    name: "Feedget",
    tag: "Feedback widget for products",
    description:
      "Smart feedback widget that collects, analyzes, and turns user opinions into product insights.",
    icon: null,
    chips: ["Products", "SaaS", "TypeScript"],
    url: "https://feedget.com.br/",
  },
  {
    name: "Boi na Mão",
    tag: "App",
    description:
      "Boi na Mão app. Learn more at boinamao.gabrielfragoso.com.",
    icon: null,
    chips: ["Web Apps"],
    url: "https://boinamao.gabrielfragoso.com/conheca",
  },
];

// Free / open-source apps and systems. Add new entries here as they ship.
const openSourceApps: App[] = [];

export const appsList: App[] = [...apps, ...openSourceApps];
