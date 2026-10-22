import type { Locale } from "@/lib/i18n";
import { PERSON } from "@/lib/site";

export type CaseStudy = {
  name: string;
  role: string;
  period: string;
  summary: string;
  problem: string;
  built: string[];
  stack: string[];
  url?: string;
};

export type OtherProject = {
  name: string;
  role: string;
  description: string;
  url: string;
};

export type ExperienceRole = {
  title: string;
  period: string;
  summary?: string;
  bullets?: string[];
};

export type ExperienceEntry = {
  company: string;
  location?: string;
  roles: ExperienceRole[];
};

export type Content = {
  meta: {
    title: string;
    ogTitle: string;
    description: string;
    keywords: string[];
    appsTitle: string;
    appsDescription: string;
  };
  nav: {
    work: string;
    experience: string;
    stack: string;
    apps: string;
    contact: string;
    cta: string;
    home: string;
    language: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    viewWork: string;
    downloadCv: string;
    availability: string;
    photoAlt: string;
    badge: string;
  };
  work: {
    eyebrow: string;
    title: string;
    role: string;
    problem: string;
    built: string;
    stack: string;
    visit: string;
    otherEyebrow: string;
    otherTitle: string;
    allApps: string;
    cases: CaseStudy[];
    others: OtherProject[];
  };
  experience: {
    eyebrow: string;
    title: string;
    entries: ExperienceEntry[];
    educationTitle: string;
    education: { school: string; degree: string; period: string };
  };
  stack: {
    eyebrow: string;
    title: string;
    groups: { name: string; items: string[] }[];
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { name: string; description: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  contact: {
    title: string;
    text: string;
    whatsapp: string;
  };
  footer: { legal: string };
  apps: {
    eyebrow: string;
    title: string;
    text: string;
    filters: { all: string; products: string; webapps: string; opensource: string };
    count: (n: number) => string;
    empty: string;
    jsonLdName: string;
  };
};

const en: Content = {
  meta: {
    title: "Gabriel Fragoso, Senior Frontend Engineer (React, Next.js)",
    ogTitle: "Gabriel Fragoso | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer from Brazil building fast, usable web products with React, Next.js and TypeScript. Open to remote roles and freelance.",
    keywords: [
      "senior frontend engineer",
      "React developer",
      "Next.js developer",
      "TypeScript developer",
      "remote frontend engineer",
      "freelance frontend developer",
      "full stack developer Node.js",
      "frontend engineer Brazil",
      "Gabriel Fragoso",
    ],
    appsTitle: "Apps and products built by Gabriel Fragoso",
    appsDescription:
      "Apps, SaaS and digital products built by Gabriel Fragoso, Senior Frontend Engineer: Vai Anotando, Feedget, Gado na Mão, Rachaí and more.",
  },
  nav: {
    work: "Work",
    experience: "Experience",
    stack: "Stack",
    apps: "Apps",
    contact: "Contact",
    cta: "Get in touch",
    home: "Gabriel Fragoso, home",
    language: "Language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    eyebrow: "Senior Frontend Engineer",
    title: "I build fast, usable web products with React & Next.js.",
    text: "4+ years shipping SaaS, dashboards and real-time apps, with a full stack background in Node.js. Founder of Feedget.",
    viewWork: "View my work",
    downloadCv: "Download CV",
    availability:
      "Open to remote full-time and contract roles · Brazil (UTC−3), overlapping with US hours",
    photoAlt: "Gabriel Fragoso, Senior Frontend Engineer",
    badge: "Brazil · UTC−3",
  },
  work: {
    eyebrow: "Selected work",
    title: "Products I've shipped.",
    role: "Role",
    problem: "Problem",
    built: "What I built",
    stack: "Stack",
    visit: "Visit",
    otherEyebrow: "Other projects",
    otherTitle: "More of my work.",
    allApps: "See all apps",
    cases: [
      {
        name: "Feedget",
        role: "Founder & Lead Engineer",
        period: "May 2023 – Present",
        summary:
          "A feedback platform: an embeddable widget for SaaS products and WhatsApp/QR Code surveys for service businesses, with AI triage.",
        problem:
          "SaaS and service businesses need to collect feedback where their users are, and make sense of it without reading every message.",
        built: [
          "Built the product end to end: Next.js dashboard, Fastify API, Prisma, PostgreSQL and Redis.",
          "Designed and shipped an embeddable widget published on npm, framework-agnostic (React, Next.js, Vue, Angular, Astro, plain JS).",
          "Implemented AI triage that classifies feedback by urgency, sentiment and category and detects duplicates.",
          "Built integrations with Slack, Discord, Telegram and Trello, and a public roadmap on custom subdomains.",
          "Owned product decisions, pricing and go-to-market, balancing time-to-market, tech debt and operating cost.",
        ],
        stack: ["Next.js", "Fastify", "Prisma", "PostgreSQL", "Redis", "npm"],
        url: "https://feedget.com.br/",
      },
      {
        name: "CerteiroFC",
        role: "Technical Lead · OfficeCom Brasil",
        period: "Aug 2025 – Jun 2026",
        summary:
          "High-traffic sports platform with heavy concurrent usage.",
        problem:
          "A platform with peak-traffic spikes needed to stay fast and stable while the codebase kept growing.",
        built: [
          "Led frontend development of the backoffice and the CerteiroFC app with React, Next.js and TypeScript.",
          "Built features designed for performance and stability under peak traffic.",
          "Set component and code standards that made the codebase easier to maintain and extend.",
          "Contributed to the Laravel backend: APIs and business rules.",
          "Coordinated frontend and backend integration with the engineering team.",
        ],
        stack: ["React", "Next.js", "TypeScript", "Laravel"],
      },
      {
        name: "VaiAnotando",
        role: "Full Stack Engineer",
        period: "In production · 20+ businesses",
        summary:
          "Digital menu for restaurants to sell directly through WhatsApp, with no per-order commission.",
        problem:
          "Restaurants wanted to sell directly through WhatsApp without paying a commission on every order.",
        built: [
          "Took the digital menu from MVP to production as a micro-SaaS, now used by 20+ active businesses.",
        ],
        stack: ["Next.js", "WhatsApp"],
        url: "https://www.vaianotando.com.br/",
      },
    ],
    others: [
      {
        name: "Narrio",
        role: "Tech Advisor",
        description:
          "Brazil's first wearable-as-a-service company. Advised on product architecture and technical roadmap.",
        url: "https://narrio.com.br/",
      },
      {
        name: "RevHouse",
        role: "Tech Advisor",
        description:
          "GTM execution service for B2B sales operations. Advised on product architecture and technical roadmap.",
        url: "https://revhouse.com.br/",
      },
      {
        name: "Growth Mentor",
        role: "Co-founder · Head of Tech",
        description:
          "Demand generation SaaS that unifies ICP discovery, lead prospecting, content and multi-channel outreach.",
        url: "https://growthmentor.com.br/",
      },
      {
        name: "Rezistro",
        role: "Head of Tech",
        description:
          "Trademark registration in Brazil and abroad, with personalized support through the whole process.",
        url: "https://rezistro.com.br/",
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "Where I've worked.",
    entries: [
      {
        company: "Feedget",
        roles: [
          {
            title: "Founder & Lead Engineer",
            period: "May 2023 – Present",
            summary:
              "Feedget is a feedback platform: an embeddable widget for SaaS products and WhatsApp/QR Code surveys for service businesses, with AI triage.",
            bullets: [
              "Built the product end to end: Next.js dashboard, Fastify API, Prisma, PostgreSQL and Redis",
              "Designed and shipped an embeddable widget published on npm, framework-agnostic (React, Next.js, Vue, Angular, Astro, plain JS)",
              "Implemented AI triage that classifies feedback by urgency, sentiment and category and detects duplicates",
              "Built integrations with Slack, Discord, Telegram and Trello, and a public roadmap on custom subdomains",
              "Owned product decisions, pricing and go-to-market, balancing time-to-market, tech debt and operating cost",
            ],
          },
        ],
      },
      {
        company: "RevHouse",
        roles: [
          {
            title: "Tech Advisor",
            period: "Nov 2025 – Oct 2026",
            summary:
              "Advised on product architecture and technical roadmap for Brazil's company.",
          },
        ],
      },
      {
        company: "Narrio, Brazil's first Wearable as a Service",
        roles: [
          {
            title: "Tech Advisor",
            period: "Nov 2025 – Oct 2026",
            summary:
              "Advised on product architecture and technical roadmap for Brazil's first wearable-as-a-service company.",
          },
        ],
      },
      {
        company: "OfficeCom Brasil",
        location: "Campina Grande, Paraíba, Brazil",
        roles: [
          {
            title: "Technical Lead",
            period: "Aug 2025 – Jun 2026",
            summary:
              "High-traffic sports platform (CerteiroFC) with heavy concurrent usage.",
            bullets: [
              "Led frontend development of the backoffice and the CerteiroFC app with React, Next.js and TypeScript",
              "Built features designed for performance and stability under peak traffic",
              "Set component and code standards that made the codebase easier to maintain and extend",
              "Contributed to the Laravel backend: APIs and business rules",
              "Coordinated frontend and backend integration with the engineering team",
            ],
          },
          {
            title: "Software Engineer",
            period: "Jul 2025 – Aug 2025",
            summary:
              "Built backoffice features and UX improvements with React, Next.js and TypeScript; promoted to Technical Lead after two months.",
          },
        ],
      },
      {
        company: "Ego Eimi",
        roles: [
          {
            title: "Senior Software Engineer",
            period: "Nov 2024 – Jul 2025",
            bullets: [
              "Led frontend development with Next.js, TypeScript, Tailwind CSS, shadcn/ui and Storybook",
              "Cut interface load time by 35% through code splitting, caching and rendering optimizations",
              "Built real-time features with WebSockets, React Query and Zustand",
              "Built GraphQL APIs with NestJS, Fastify and Prisma",
              "Set up Docker-based services and CI/CD on AWS, and expanded test coverage",
            ],
          },
          {
            title: "Mid-level Software Engineer",
            period: "May 2024 – Nov 2024",
            bullets: [
              "Built AI automations with Python, FastAPI, LangChain and LangGraph, delivering agent POCs in about 4 weeks each",
              "Applied Clean Architecture and DDD to reduce coupling in a growing codebase",
              "Migrated databases to Prisma and Supabase, improving query performance",
            ],
          },
        ],
      },
      {
        company: "Freelance",
        roles: [
          {
            title: "Full Stack Engineer",
            period: "Sep 2021 – Jul 2025",
            summary:
              "Delivered end-to-end web and mobile products for startups, companies and public institutions, from technical planning to production deploy.",
            bullets: [
              "Fintech: payment and promotion platforms (Virtual Pay, Pix do Milhão), with authentication, payment integrations and admin dashboards",
              "Public sector: transparency portals, heritage registry (E-Tombamento), voting apps for public institutions and a digital school record app for public schools (React Native, Expo)",
              "Business intelligence: BI dashboards (SinteseBI, ComercialBI) that turn operational data into reports for decision makers",
              "SaaS and products: a digital menu (VaiAnotando), logistics support (TruckHelp) and monitoring (MayaWatch), from MVP to production",
            ],
          },
        ],
      },
      {
        company: "ItechMed Tecnologia em Saúde",
        roles: [
          {
            title: "Mid-level Software Engineer",
            period: "May 2023 – May 2024",
            bullets: [
              "Built dashboards and backend services for critical healthcare systems",
              "Created monitoring dashboards that gave the operations team real-time visibility",
              "Implemented secure authentication and backend services",
              "Automated AWS deployments, cutting environment setup time",
              "Raised test coverage to 85%, reducing production failures",
            ],
          },
        ],
      },
      {
        company: "Cognum",
        roles: [
          {
            title: "Mid-level Software Engineer",
            period: "Sep 2023 – Mar 2024",
            bullets: [
              "Designed AI automation platforms and conversational flows that replaced manual tasks",
              "Shipped AI agents to production in roughly four-week cycles",
              "Mentored developers and improved architecture and code quality practices",
            ],
          },
        ],
      },
      {
        company: "LAB510 Consultancy",
        roles: [
          {
            title: "Mid Frontend Developer",
            period: "May 2022 – Dec 2023",
            bullets: [
              "Built web platforms, dashboards and internal tools with React and Next.js",
              "Improved performance, onboarding and conversion across multiple client products",
              "Delivered e-commerce and backoffice solutions for clients",
            ],
          },
        ],
      },
    ],
    educationTitle: "Education",
    education: {
      school: "Estácio",
      degree: "Bachelor's degree, Information Systems",
      period: "Mar 2022 – Dec 2025",
    },
  },
  stack: {
    eyebrow: "Stack",
    title: "Everyday tools.",
    groups: [
      {
        name: "Frontend",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
          "React Query",
          "Zustand",
          "Redux",
          "React Hook Form",
          "Zod",
          "Storybook",
          "React Native",
        ],
      },
      {
        name: "Backend",
        items: [
          "Node.js",
          "NestJS",
          "Fastify",
          "Prisma",
          "PostgreSQL",
          "Supabase",
          "Redis",
          "GraphQL",
          "WebSockets",
          "Python (FastAPI)",
        ],
      },
      {
        name: "Infra & AI",
        items: ["Docker", "AWS", "CI/CD", "LangChain", "LangGraph"],
      },
    ],
  },
  services: {
    eyebrow: "Freelance & contract",
    title: "Available for remote contract work.",
    intro:
      "Besides full-time roles, I take on contract projects for companies and founders who need to ship a product, evolve an existing system or add senior frontend capacity to a team.",
    items: [
      {
        name: "MVP and SaaS development",
        description:
          "From idea to a live product: architecture, backend, frontend, billing and deploy, focused on validating fast and scaling later.",
      },
      {
        name: "Web systems and dashboards",
        description:
          "Backoffices, portals and internal tools with React, Next.js, Node.js and NestJS.",
      },
      {
        name: "Sites and landing pages with SEO",
        description:
          "Fast, responsive sites optimized for Google and AI search engines.",
      },
      {
        name: "Integrations and automations",
        description:
          "APIs, WhatsApp, payment gateways and AI features (LangChain, LangGraph) connected to your business.",
      },
      {
        name: "Technical leadership",
        description:
          "Architecture reviews, stack decisions, code review and team guidance.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions.",
    items: [
      {
        q: "Who is Gabriel Fragoso?",
        a: "Gabriel Fragoso is a Senior Frontend Engineer from Brazil with 4+ years building web products with React, Next.js and TypeScript, and a full stack background in Node.js. He is the founder of Feedget and was Technical Lead at OfficeCom Brasil and Senior Software Engineer at Ego Eimi.",
      },
      {
        q: "Is Gabriel open to remote roles?",
        a: "Yes. He is open to remote full-time and contract roles with teams in the US, Europe and LATAM. He is based in Brazil (UTC−3) and overlaps with US working hours.",
      },
      {
        q: "What technologies does Gabriel use?",
        a: "React, Next.js, TypeScript, Tailwind CSS, shadcn/ui, React Query and Zustand on the frontend; Node.js (NestJS, Fastify), Prisma, PostgreSQL, Supabase and Redis on the backend; Docker, AWS and LangChain for infrastructure and AI.",
      },
      {
        q: "Does Gabriel take freelance projects?",
        a: "Yes. He takes contract projects such as MVPs, SaaS products, web systems, dashboards and integrations.",
      },
      {
        q: "What products has Gabriel built?",
        a: "Feedget (feedback platform with an embeddable widget and AI triage), VaiAnotando (digital menu for restaurants), CerteiroFC (high-traffic sports platform) Gado na Mão and Rachaí. See them at apps.gabrielfragoso.com.",
      },
      {
        q: "How can I contact Gabriel?",
        a: `Email ${PERSON.email}, message on LinkedIn (${PERSON.linkedin}), WhatsApp (${PERSON.phone}) or Instagram (@gabriel.code_).`,
      },
    ],
  },
  contact: {
    title: "Let's talk.",
    text: "About a role, a project, or just to swap ideas.",
    whatsapp: "WhatsApp",
  },
  footer: { legal: " · CNPJ 66.231.519/0001-99" },
  apps: {
    eyebrow: "Apps",
    title: "Stuff I've built.",
    text: "Every open-source project and app I ship, in one place.",
    filters: {
      all: "All",
      products: "Products",
      webapps: "Web Apps",
      opensource: "Open Source",
    },
    count: (n) => `${n} project${n === 1 ? "" : "s"}`,
    empty:
      "Nothing here yet — free and open-source projects will show up in this category as they ship.",
    jsonLdName: "Apps and products built by Gabriel Fragoso",
  },
};

const pt: Content = {
  meta: {
    title: "Gabriel Fragoso, Engenheiro Frontend Sênior (React, Next.js)",
    ogTitle: "Gabriel Fragoso | Engenheiro Frontend Sênior",
    description:
      "Engenheiro Frontend Sênior do Brasil que constrói produtos web rápidos e fáceis de usar com React, Next.js e TypeScript. Aberto a vagas remotas e a trabalhos freelancer sob demanda.",
    keywords: [
      "engenheiro frontend sênior",
      "desenvolvedor React",
      "desenvolvedor Next.js",
      "desenvolvedor freelancer",
      "desenvolvedor sob demanda",
      "desenvolvedor full stack freelancer",
      "contratar desenvolvedor",
      "criação de SaaS",
      "desenvolvimento de MVP",
      "Gabriel Fragoso",
    ],
    appsTitle: "Apps e produtos criados por Gabriel Fragoso",
    appsDescription:
      "Apps, SaaS e produtos digitais criados por Gabriel Fragoso, Engenheiro Frontend Sênior: Vai Anotando, Feedget, Gado na Mão, Rachaí e mais.",
  },
  nav: {
    work: "Trabalhos",
    experience: "Experiência",
    stack: "Tecnologias",
    apps: "Apps",
    contact: "Contato",
    cta: "Fale comigo",
    home: "Gabriel Fragoso, início",
    language: "Idioma",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
  hero: {
    eyebrow: "Engenheiro Frontend Sênior",
    title: "Construo produtos web rápidos e fáceis de usar com React e Next.js.",
    text: "Mais de 4 anos entregando SaaS, dashboards e apps em tempo real, com base full stack em Node.js. Fundador do Feedget.",
    viewWork: "Ver meus trabalhos",
    downloadCv: "Baixar currículo",
    availability:
      "Aberto a vagas remotas (tempo integral e contrato) · Brasil (UTC−3), com sobreposição de horário com os EUA",
    photoAlt: "Gabriel Fragoso, Engenheiro Frontend Sênior",
    badge: "Brasil · UTC−3",
  },
  work: {
    eyebrow: "Trabalhos selecionados",
    title: "Produtos que eu entreguei.",
    role: "Papel",
    problem: "Problema",
    built: "O que eu construí",
    stack: "Stack",
    visit: "Visitar",
    otherEyebrow: "Outros projetos",
    otherTitle: "Mais do meu trabalho.",
    allApps: "Ver todos os apps",
    cases: [
      {
        name: "Feedget",
        role: "Fundador e Engenheiro Líder",
        period: "Mai 2023 – Atual",
        summary:
          "Plataforma de feedback: um widget embutível para produtos SaaS e pesquisas por WhatsApp/QR Code para negócios de serviço, com triagem por IA.",
        problem:
          "Empresas de SaaS e de serviços precisam coletar feedback onde os usuários estão e entendê-lo sem ler cada mensagem.",
        built: [
          "Construí o produto de ponta a ponta: dashboard em Next.js, API em Fastify, Prisma, PostgreSQL e Redis.",
          "Projetei e publiquei um widget embutível no npm, agnóstico de framework (React, Next.js, Vue, Angular, Astro e JS puro).",
          "Implementei triagem por IA que classifica o feedback por urgência, sentimento e categoria e detecta duplicados.",
          "Criei integrações com Slack, Discord, Telegram e Trello, e um roadmap público em subdomínios personalizados.",
          "Assumi as decisões de produto, preço e go-to-market, equilibrando time-to-market, dívida técnica e custo de operação.",
        ],
        stack: ["Next.js", "Fastify", "Prisma", "PostgreSQL", "Redis", "npm"],
        url: "https://feedget.com.br/",
      },
      {
        name: "CerteiroFC",
        role: "Líder Técnico · OfficeCom Brasil",
        period: "Ago 2025 – Jun 2026",
        summary:
          "Plataforma esportiva de alto tráfego, com uso concorrente intenso.",
        problem:
          "Uma plataforma com picos de tráfego precisava continuar rápida e estável enquanto o código crescia.",
        built: [
          "Liderei o desenvolvimento frontend do backoffice e do app CerteiroFC com React, Next.js e TypeScript.",
          "Construí funcionalidades pensadas para desempenho e estabilidade em horários de pico.",
          "Defini padrões de componentes e de código que facilitaram a manutenção e a evolução do projeto.",
          "Contribuí com o backend em Laravel: APIs e regras de negócio.",
          "Coordenei a integração entre frontend e backend com o time de engenharia.",
        ],
        stack: ["React", "Next.js", "TypeScript", "Laravel"],
      },
      {
        name: "VaiAnotando",
        role: "Engenheiro Full Stack",
        period: "Em produção · mais de 20 negócios",
        summary:
          "Cardápio digital para restaurantes venderem direto pelo WhatsApp, sem comissão por pedido.",
        problem:
          "Restaurantes queriam vender direto pelo WhatsApp sem pagar comissão a cada pedido.",
        built: [
          "Levei o cardápio digital do MVP à produção como micro-SaaS, hoje usado por mais de 20 negócios ativos.",
        ],
        stack: ["Next.js", "WhatsApp"],
        url: "https://www.vaianotando.com.br/",
      },
    ],
    others: [
      {
        name: "Narrio",
        role: "Tech Advisor",
        description:
          "Primeira empresa de wearable como serviço do Brasil. Consultoria em arquitetura de produto e roadmap técnico.",
        url: "https://narrio.com.br/",
      },
      {
        name: "RevHouse",
        role: "Tech Advisor",
        description:
          "Serviço de execução de GTM para operações de vendas B2B. Consultoria em arquitetura de produto e roadmap técnico.",
        url: "https://revhouse.com.br/",
      },
      {
        name: "Growth Mentor",
        role: "Co-fundador · Head de Tecnologia",
        description:
          "SaaS de geração de demanda que reúne descoberta de ICP, prospecção de leads, conteúdo e abordagem multicanal.",
        url: "https://growthmentor.com.br/",
      },
      {
        name: "Rezistro",
        role: "Head de Tecnologia",
        description:
          "Registro de marcas no Brasil e no exterior, com acompanhamento personalizado em todo o processo.",
        url: "https://rezistro.com.br/",
      },
    ],
  },
  experience: {
    eyebrow: "Experiência",
    title: "Onde eu trabalhei.",
    entries: [
      {
        company: "Feedget",
        roles: [
          {
            title: "Fundador e Engenheiro Líder",
            period: "Mai 2023 – Atual",
            summary:
              "O Feedget é uma plataforma de feedback: um widget embutível para produtos SaaS e pesquisas por WhatsApp/QR Code para negócios de serviço, com triagem por IA.",
            bullets: [
              "Construí o produto de ponta a ponta: dashboard em Next.js, API em Fastify, Prisma, PostgreSQL e Redis",
              "Projetei e publiquei um widget embutível no npm, agnóstico de framework (React, Next.js, Vue, Angular, Astro e JS puro)",
              "Implementei triagem por IA que classifica o feedback por urgência, sentimento e categoria e detecta duplicados",
              "Criei integrações com Slack, Discord, Telegram e Trello, e um roadmap público em subdomínios personalizados",
              "Assumi as decisões de produto, preço e go-to-market, equilibrando time-to-market, dívida técnica e custo de operação",
            ],
          },
        ],
      },
      {
        company: "RevHouse",
        roles: [
          {
            title: "Tech Advisor",
            period: "Nov 2025 – Out 2026",
            summary:
              "Consultoria em arquitetura de produto e roadmap técnico da empresa.",
          },
        ],
      },
      {
        company: "Narrio, 1º Wearable as a Service do Brasil",
        roles: [
          {
            title: "Tech Advisor",
            period: "Nov 2025 – Out 2026",
            summary:
              "Consultoria em arquitetura de produto e roadmap técnico da primeira empresa de wearable como serviço do Brasil.",
          },
        ],
      },
      {
        company: "OfficeCom Brasil",
        location: "Campina Grande, Paraíba, Brasil",
        roles: [
          {
            title: "Líder Técnico",
            period: "Ago 2025 – Jun 2026",
            summary:
              "Plataforma esportiva de alto tráfego (CerteiroFC), com uso concorrente intenso.",
            bullets: [
              "Liderei o desenvolvimento frontend do backoffice e do app CerteiroFC com React, Next.js e TypeScript",
              "Construí funcionalidades pensadas para desempenho e estabilidade em horários de pico",
              "Defini padrões de componentes e de código que facilitaram a manutenção e a evolução do projeto",
              "Contribuí com o backend em Laravel: APIs e regras de negócio",
              "Coordenei a integração entre frontend e backend com o time de engenharia",
            ],
          },
          {
            title: "Engenheiro de Software",
            period: "Jul 2025 – Ago 2025",
            summary:
              "Construí funcionalidades de backoffice e melhorias de UX com React, Next.js e TypeScript; promovido a Líder Técnico após dois meses.",
          },
        ],
      },
      {
        company: "Ego Eimi",
        roles: [
          {
            title: "Engenheiro de Software Sênior",
            period: "Nov 2024 – Jul 2025",
            bullets: [
              "Liderei o desenvolvimento frontend com Next.js, TypeScript, Tailwind CSS, shadcn/ui e Storybook",
              "Reduzi em 35% o tempo de carregamento da interface com code splitting, cache e otimizações de renderização",
              "Construí funcionalidades em tempo real com WebSockets, React Query e Zustand",
              "Construí APIs GraphQL com NestJS, Fastify e Prisma",
              "Configurei serviços com Docker e CI/CD na AWS, e ampliei a cobertura de testes",
            ],
          },
          {
            title: "Engenheiro de Software Pleno",
            period: "Mai 2024 – Nov 2024",
            bullets: [
              "Construí automações de IA com Python, FastAPI, LangChain e LangGraph, entregando POCs de agentes em cerca de 4 semanas cada",
              "Apliquei Clean Architecture e DDD para reduzir o acoplamento em uma base de código em crescimento",
              "Migrei bancos de dados para Prisma e Supabase, melhorando o desempenho das consultas",
            ],
          },
        ],
      },
      {
        company: "Freelancer",
        roles: [
          {
            title: "Engenheiro Full Stack",
            period: "Set 2021 – Jul 2025",
            summary:
              "Entreguei produtos web e mobile de ponta a ponta para startups, empresas e instituições públicas, do planejamento técnico ao deploy em produção.",
            bullets: [
              "Fintech: plataformas de pagamento e promoção (Virtual Pay, Pix do Milhão), com autenticação, integrações de pagamento e dashboards administrativos",
              "Setor público: portais de transparência, registro de patrimônio (E-Tombamento), apps de votação para instituições públicas e um app de registro escolar digital para escolas públicas (React Native, Expo)",
              "Business intelligence: dashboards de BI (SinteseBI, ComercialBI) que transformam dados operacionais em relatórios para quem decide",
              "SaaS e produtos: um cardápio digital (VaiAnotando), apoio logístico (TruckHelp) e monitoramento (MayaWatch), do MVP à produção",
            ],
          },
        ],
      },
      {
        company: "ItechMed Tecnologia em Saúde",
        roles: [
          {
            title: "Engenheiro de Software Pleno",
            period: "Mai 2023 – Mai 2024",
            bullets: [
              "Construí dashboards e serviços de backend para sistemas críticos de saúde",
              "Criei dashboards de monitoramento que deram visibilidade em tempo real para o time de operações",
              "Implementei autenticação segura e serviços de backend",
              "Automatizei deploys na AWS, reduzindo o tempo de configuração de ambientes",
              "Elevei a cobertura de testes para 85%, reduzindo falhas em produção",
            ],
          },
        ],
      },
      {
        company: "Cognum",
        roles: [
          {
            title: "Engenheiro de Software Pleno",
            period: "Set 2023 – Mar 2024",
            bullets: [
              "Projetei plataformas de automação com IA e fluxos conversacionais que substituíram tarefas manuais",
              "Coloquei agentes de IA em produção em ciclos de aproximadamente quatro semanas",
              "Mentorei desenvolvedores e melhorei práticas de arquitetura e qualidade de código",
            ],
          },
        ],
      },
      {
        company: "LAB510 Consultancy",
        roles: [
          {
            title: "Desenvolvedor Frontend Pleno",
            period: "Mai 2022 – Dez 2023",
            bullets: [
              "Construí plataformas web, dashboards e ferramentas internas com React e Next.js",
              "Melhorei desempenho, onboarding e conversão em vários produtos de clientes",
              "Entreguei soluções de e-commerce e backoffice para clientes",
            ],
          },
        ],
      },
    ],
    educationTitle: "Formação",
    education: {
      school: "Estácio",
      degree: "Bacharelado em Sistemas de Informação",
      period: "Mar 2022 – Dez 2025",
    },
  },
  stack: {
    eyebrow: "Tecnologias",
    title: "Ferramentas do dia a dia.",
    groups: en.stack.groups.map((g) => ({
      ...g,
      name: g.name === "Infra & AI" ? "Infra e IA" : g.name,
    })),
  },
  services: {
    eyebrow: "Freelancer sob demanda",
    title: "Desenvolvedor freelancer sob demanda.",
    intro:
      "Além de vagas em tempo integral, atuo como desenvolvedor full stack freelancer para empresas e empreendedores que precisam tirar um produto do papel, evoluir um sistema existente ou reforçar o time com um engenheiro frontend sênior, sem contratar em tempo integral.",
    items: [
      {
        name: "Desenvolvimento de MVP e SaaS",
        description:
          "Da ideia ao produto no ar: arquitetura, backend, frontend, cobrança e deploy, com foco em validar rápido e escalar depois.",
      },
      {
        name: "Sistemas web e dashboards sob medida",
        description:
          "Backoffices, portais e ferramentas internas com React, Next.js, Node.js e NestJS.",
      },
      {
        name: "Sites e landing pages com SEO",
        description:
          "Sites rápidos, responsivos e otimizados para Google e para buscadores com IA.",
      },
      {
        name: "Integrações e automações",
        description:
          "APIs, WhatsApp, gateways de pagamento e recursos de IA (LangChain, LangGraph) integrados ao seu negócio.",
      },
      {
        name: "Consultoria e liderança técnica",
        description:
          "Revisão de arquitetura, definição de stack, code review e acompanhamento do time.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Perguntas frequentes.",
    items: [
      {
        q: "Quem é Gabriel Fragoso?",
        a: "Gabriel Fragoso é Engenheiro Frontend Sênior do Brasil, com mais de 4 anos construindo produtos web com React, Next.js e TypeScript e base full stack em Node.js. É fundador do Feedget e já foi Líder Técnico na OfficeCom Brasil e Engenheiro de Software Sênior na Ego Eimi.",
      },
      {
        q: "O Gabriel trabalha como desenvolvedor freelancer sob demanda?",
        a: "Sim. Além de vagas remotas em tempo integral, atende projetos pontuais, MVPs, sistemas web e consultoria técnica sob demanda, para empresas e empreendedores no Brasil e no exterior.",
      },
      {
        q: "Quais tecnologias o Gabriel usa?",
        a: "React, Next.js, TypeScript, Tailwind CSS, shadcn/ui, React Query e Zustand no frontend; Node.js (NestJS, Fastify), Prisma, PostgreSQL, Supabase e Redis no backend; Docker, AWS e LangChain em infraestrutura e IA.",
      },
      {
        q: "Que tipos de projeto ele desenvolve?",
        a: "MVPs e SaaS, sistemas web e dashboards, sites e landing pages com SEO, integrações com APIs, WhatsApp e gateways de pagamento, e soluções com inteligência artificial.",
      },
      {
        q: "Quais produtos o Gabriel já construiu?",
        a: "Feedget (plataforma de feedback com widget embutível e triagem por IA), VaiAnotando (cardápio digital para restaurantes), CerteiroFC (plataforma esportiva de alto tráfego) Gado na Mão e Rachaí. Veja todos em apps.gabrielfragoso.com.",
      },
      {
        q: "Como contratar o Gabriel Fragoso?",
        a: `Envie um e-mail para ${PERSON.email}, chame no LinkedIn (${PERSON.linkedin}), no WhatsApp (${PERSON.phone}) ou no Instagram (@gabriel.code_) contando um pouco sobre o projeto.`,
      },
    ],
  },
  contact: {
    title: "Vamos conversar.",
    text: "Sobre uma vaga, um projeto ou só para trocar ideias.",
    whatsapp: "WhatsApp",
  },
  footer: { legal: " · CNPJ 66.231.519/0001-99 · +55 83 99830 4284" },
  apps: {
    eyebrow: "Apps",
    title: "O que eu já construí.",
    text: "Todos os projetos open source e apps que eu publico, em um só lugar.",
    filters: {
      all: "Todos",
      products: "Produtos",
      webapps: "Web Apps",
      opensource: "Open Source",
    },
    count: (n) => `${n} projeto${n === 1 ? "" : "s"}`,
    empty:
      "Nada por aqui ainda — projetos gratuitos e open source aparecerão nesta categoria conforme forem lançados.",
    jsonLdName: "Apps e produtos criados por Gabriel Fragoso",
  },
};

export const content: Record<Locale, Content> = { en, pt };
