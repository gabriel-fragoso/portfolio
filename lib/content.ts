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
    clinics: string;
    blog: string;
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
  clinics: {
    meta: { title: string; description: string; keywords: string[] };
    eyebrow: string;
    title: string;
    intro: string;
    cta: string;
    ctaMessage: string;
    samplesEyebrow: string;
    samplesTitle: string;
    samplesText: string;
    demoBadge: string;
    visit: string;
    moreComing: string;
    includesTitle: string;
    includes: { name: string; description: string }[];
    processTitle: string;
    steps: { name: string; description: string }[];
    faqTitle: string;
    faq: { q: string; a: string }[];
    finalTitle: string;
    finalText: string;
    teaserEyebrow: string;
    teaserTitle: string;
    teaserText: string;
    teaserCta: string;
  };
  blog: {
    eyebrow: string;
    title: string;
    intro: string;
    metaTitle: string;
    metaDescription: string;
    readPost: string;
    minRead: (n: number) => string;
    published: string;
    back: string;
    related: string;
    empty: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
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
    clinics: "Clinics",
    blog: "Blog",
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
  clinics: {
    meta: {
      title: "Landing pages for clinics: dentistry, aesthetics and more",
      description:
        "Fast landing pages for dental, aesthetic and health clinics, built to show up on Google and turn visitors into WhatsApp appointment requests.",
      keywords: [
        "landing page for clinics",
        "dental clinic website",
        "aesthetic clinic landing page",
        "website for dentists",
        "clinic web design Brazil",
      ],
    },
    eyebrow: "Clinics",
    title: "Landing pages that turn searches into appointments.",
    intro:
      "I build fast, clear landing pages for dental, aesthetic and health clinics: a page that explains your treatments, builds trust and makes booking through WhatsApp one tap away.",
    cta: "Request a landing page",
    ctaMessage: "Hi! I'd like a landing page for my clinic.",
    samplesEyebrow: "Samples",
    samplesTitle: "Pages I've built.",
    samplesText:
      "Hover a card to see the live page, or open it in full. New landing pages are added here as they ship.",
    demoBadge: "Sample page",
    visit: "Open page",
    moreComing: "More landing pages coming soon.",
    includesTitle: "What's included",
    includes: [
      {
        name: "Clear structure",
        description:
          "Treatments, about the professional, first visit, FAQ and a direct call to action, in the order patients look for answers.",
      },
      {
        name: "WhatsApp booking",
        description:
          "Buttons with a pre-filled message, so the patient starts the conversation in one tap.",
      },
      {
        name: "Fast on mobile",
        description:
          "Most patients arrive from a phone. Pages are lightweight, responsive and built to load quickly.",
      },
      {
        name: "Ready for Google",
        description:
          "Title, description, structured data and local SEO basics, so the clinic can show up when people search in its city.",
      },
      {
        name: "Your identity",
        description:
          "Colors, photos and tone of voice that match the clinic, within the advertising rules of your professional council.",
      },
    ],
    processTitle: "How it works",
    steps: [
      {
        name: "Briefing",
        description:
          "A short conversation about your treatments, patients, city and goals.",
      },
      {
        name: "Design and content",
        description:
          "Page structure, texts and visual direction, reviewed with you.",
      },
      {
        name: "Build and review",
        description:
          "I build the page, you review it on your phone, and we adjust.",
      },
      {
        name: "Publish",
        description:
          "Domain, hosting, analytics and Google setup, so it goes live ready to be found.",
      },
    ],
    faqTitle: "Questions from clinics",
    faq: [
      {
        q: "What is a landing page for a clinic?",
        a: "It is a focused page that presents the clinic and its treatments and leads the patient to one action, usually booking an appointment through WhatsApp.",
      },
      {
        q: "Do I need a full website or is a landing page enough?",
        a: "For many clinics, one well-built page is enough to start getting appointment requests. A multi-page website makes sense when there are many treatments or professionals, and a landing page can grow into one.",
      },
      {
        q: "Can the page follow my professional council's advertising rules?",
        a: "The structure and texts are written with care, but each council (such as CRO or CFM) has its own rules. Review the final content against them, and with a professional if needed.",
      },
      {
        q: "How do I get started?",
        a: "Send a message on WhatsApp telling me your specialty and city, and I reply with the next steps.",
      },
    ],
    finalTitle: "Want a page like these for your clinic?",
    finalText:
      "Tell me your specialty and city on WhatsApp and I'll reply with the next steps.",
    teaserEyebrow: "For clinics",
    teaserTitle: "Landing pages for clinics.",
    teaserText:
      "Besides products and full-time roles, I build landing pages for dental, aesthetic and health clinics, designed to show up on Google and bring appointment requests through WhatsApp.",
    teaserCta: "See clinic landing pages",
  },
  blog: {
    eyebrow: "Blog",
    title: "Notes on web, SEO and products.",
    intro:
      "Short, practical articles on landing pages, local SEO and building web products.",
    metaTitle: "Blog",
    metaDescription:
      "Articles by Gabriel Fragoso on landing pages for clinics, local SEO and building fast web products.",
    readPost: "Read article",
    minRead: (n) => `${n} min read`,
    published: "Published on",
    back: "All articles",
    related: "Keep reading",
    empty: "No articles yet.",
    ctaTitle: "Need a landing page for your clinic?",
    ctaText:
      "I build fast landing pages for clinics that show up on Google and bring appointments through WhatsApp.",
    ctaButton: "See clinic landing pages",
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
    clinics: "Clínicas",
    blog: "Blog",
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
  clinics: {
    meta: {
      title: "Landing pages para clínicas: odontologia, estética e saúde",
      description:
        "Landing pages rápidas para clínicas odontológicas, de estética e de saúde, feitas para aparecer no Google e transformar visitas em pedidos de consulta pelo WhatsApp.",
      keywords: [
        "landing page para clínica",
        "site para clínica odontológica",
        "landing page para clínica de estética",
        "site para dentista",
        "criação de site para clínicas",
        "landing page para dentista",
      ],
    },
    eyebrow: "Clínicas",
    title: "Landing pages que transformam buscas em consultas.",
    intro:
      "Crio landing pages rápidas e claras para clínicas odontológicas, de estética e de saúde: uma página que explica os tratamentos, passa confiança e deixa o agendamento pelo WhatsApp a um toque.",
    cta: "Quero uma landing page",
    ctaMessage: "Olá! Quero uma landing page para a minha clínica.",
    samplesEyebrow: "Exemplos",
    samplesTitle: "Páginas que eu construí.",
    samplesText:
      "Passe o mouse no card para ver a página ao vivo, ou abra em tela cheia. Novas landing pages entram aqui conforme forem ficando prontas.",
    demoBadge: "Página de exemplo",
    visit: "Abrir página",
    moreComing: "Mais landing pages em breve.",
    includesTitle: "O que está incluído",
    includes: [
      {
        name: "Estrutura clara",
        description:
          "Tratamentos, sobre o profissional, primeira consulta, dúvidas e uma chamada direta para ação, na ordem em que o paciente procura as respostas.",
      },
      {
        name: "Agendamento pelo WhatsApp",
        description:
          "Botões com mensagem pronta, para o paciente iniciar a conversa com um toque.",
      },
      {
        name: "Rápida no celular",
        description:
          "A maioria dos pacientes chega pelo celular. As páginas são leves, responsivas e feitas para carregar rápido.",
      },
      {
        name: "Pronta para o Google",
        description:
          "Título, descrição, dados estruturados e o básico de SEO local, para a clínica poder aparecer quando buscarem na sua cidade.",
      },
      {
        name: "A cara da sua clínica",
        description:
          "Cores, fotos e tom de voz alinhados à clínica, respeitando as regras de publicidade do seu conselho profissional.",
      },
    ],
    processTitle: "Como funciona",
    steps: [
      {
        name: "Briefing",
        description:
          "Uma conversa rápida sobre seus tratamentos, pacientes, cidade e objetivos.",
      },
      {
        name: "Design e conteúdo",
        description:
          "Estrutura da página, textos e direção visual, revisados com você.",
      },
      {
        name: "Construção e revisão",
        description:
          "Eu construo a página, você revisa no celular e ajustamos.",
      },
      {
        name: "Publicação",
        description:
          "Domínio, hospedagem, analytics e configuração do Google, para a página entrar no ar pronta para ser encontrada.",
      },
    ],
    faqTitle: "Dúvidas de quem tem clínica",
    faq: [
      {
        q: "O que é uma landing page para clínica?",
        a: "É uma página focada que apresenta a clínica e seus tratamentos e leva o paciente a uma única ação, em geral agendar uma consulta pelo WhatsApp.",
      },
      {
        q: "Preciso de um site completo ou a landing page basta?",
        a: "Para muitas clínicas, uma página bem feita já basta para começar a receber pedidos de consulta. Um site com várias páginas faz sentido quando há muitos tratamentos ou profissionais, e a landing page pode crescer até lá.",
      },
      {
        q: "A página segue as regras de publicidade do meu conselho?",
        a: "A estrutura e os textos são escritos com cuidado, mas cada conselho (como CRO ou CFM) tem as suas regras. Revise o conteúdo final com elas em mãos e, se precisar, com um profissional.",
      },
      {
        q: "Como começo?",
        a: "Mande uma mensagem no WhatsApp contando sua especialidade e a cidade, e eu respondo com os próximos passos.",
      },
    ],
    finalTitle: "Quer uma página assim para a sua clínica?",
    finalText:
      "Conte sua especialidade e a cidade no WhatsApp que eu respondo com os próximos passos.",
    teaserEyebrow: "Para clínicas",
    teaserTitle: "Landing pages para clínicas.",
    teaserText:
      "Além de produtos e vagas em tempo integral, crio landing pages para clínicas odontológicas, de estética e de saúde, pensadas para aparecer no Google e trazer pedidos de consulta pelo WhatsApp.",
    teaserCta: "Ver landing pages para clínicas",
  },
  blog: {
    eyebrow: "Blog",
    title: "Notas sobre web, SEO e produtos.",
    intro:
      "Artigos curtos e práticos sobre landing pages, SEO local e como construir produtos web.",
    metaTitle: "Blog",
    metaDescription:
      "Artigos de Gabriel Fragoso sobre landing pages para clínicas, SEO local e como construir produtos web rápidos.",
    readPost: "Ler artigo",
    minRead: (n) => `${n} min de leitura`,
    published: "Publicado em",
    back: "Todos os artigos",
    related: "Continue lendo",
    empty: "Nenhum artigo ainda.",
    ctaTitle: "Precisa de uma landing page para a sua clínica?",
    ctaText:
      "Crio landing pages rápidas para clínicas, que aparecem no Google e trazem consultas pelo WhatsApp.",
    ctaButton: "Ver landing pages para clínicas",
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
