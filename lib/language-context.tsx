"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useCallback,
} from "react";

export type Language = "en" | "pt" | "es";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Comprehensive translations for the entire site
const translations: Record<string, Record<Language, string>> = {
  // Hero Section
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
  "hero.projects": {
    en: "View Projects",
    pt: "Ver Projetos",
    es: "Ver Proyectos",
  },
  "hero.cv": {
    en: "Download CV",
    pt: "Download CV",
    es: "Descargar CV",
  },

  // About Section
  "about.title": {
    en: "About Me",
    pt: "Sobre Mim",
    es: "Sobre Mí",
  },
  "about.description1": {
    en: "I'm a passionate Full Stack Developer dedicated to creating elegant and efficient digital solutions. My journey in programming began more than 3 years ago, and since then I've been dedicated to improving my skills and knowledge to deliver high-quality products.",
    pt: "Sou um desenvolvedor Full Stack apaixonado por criar soluções digitais elegantes e eficientes. Minha jornada na programação começou há mais de 3 anos, e desde então tenho me dedicado a aprimorar minhas habilidades e conhecimentos para entregar produtos de alta qualidade.",
    es: "Soy un desarrollador Full Stack apasionado por crear soluciones digitales elegantes y eficientes. Mi viaje en la programación comenzó hace más de 3 años, y desde entonces me he dedicado a mejorar mis habilidades y conocimientos para entregar productos de alta calidad.",
  },
  "about.description2": {
    en: "My goal is always to deliver clean, well-tested, and scalable code, following best development practices and keeping up with the latest technologies and market trends.",
    pt: "Meu objetivo é sempre entregar código limpo, bem testado e escalável, seguindo as melhores práticas de desenvolvimento e mantendo-me atualizado com as mais recentes tecnologias e tendências do mercado.",
    es: "Mi objetivo es siempre entregar código limpio, bien probado y escalable, siguiendo las mejores prácticas de desarrollo y manteniéndome actualizado con las últimas tecnologías y tendencias del mercado.",
  },
  "about.highlight1": {
    en: "+3 years of experience as Full Stack",
    pt: "+3 anos de experiência como Full Stack",
    es: "+3 años de experiencia como Full Stack",
  },
  "about.highlight2": {
    en: "Focus on performance, architecture, testing and best practices",
    pt: "Foco em performance, arquitetura, testes e boas práticas",
    es: "Enfoque en rendimiento, arquitectura, pruebas y mejores prácticas",
  },
  "about.highlight3": {
    en: "Experience with various modern stacks and microservices architecture",
    pt: "Atuação com diversas stacks modernas e arquitetura de microsserviços",
    es: "Experiencia con varias stacks modernas y arquitectura de microservicios",
  },
  "about.highlight4": {
    en: "Advanced English",
    pt: "Inglês Avançado",
    es: "Inglés Avanzado",
  },
  "about.highlight5": {
    en: "Bachelor's in Information Systems (7/8 semesters)",
    pt: "Formação em Sistemas de Informação (7/8 períodos)",
    es: "Formación en Sistemas de Información (7/8 períodos)",
  },

  // Tech Stack Section
  "tech.title": {
    en: "Tech Stack",
    pt: "Stack Tecnológica",
    es: "Stack Tecnológico",
  },
  "tech.frontend": {
    en: "Frontend",
    pt: "Frontend",
    es: "Frontend",
  },
  "tech.backend": {
    en: "Backend",
    pt: "Backend",
    es: "Backend",
  },
  "tech.infra": {
    en: "Infrastructure",
    pt: "Infra",
    es: "Infraestructura",
  },
  "tech.testing": {
    en: "Testing",
    pt: "Testes",
    es: "Pruebas",
  },
  "tech.other": {
    en: "Others",
    pt: "Outros",
    es: "Otros",
  },

  // Experience Section
  "exp.title": {
    en: "Professional Experience",
    pt: "Experiência Profissional",
    es: "Experiencia Profesional",
  },
  "exp.company1": {
    en: "Ego Eimi",
    pt: "Ego Eimi",
    es: "Ego Eimi",
  },
  "exp.period1": {
    en: "2024 - Present",
    pt: "2024 - Presente",
    es: "2024 - Presente",
  },
  "exp.role1": {
    en: "Senior Software Engineer",
    pt: "Engenheiro de Software Sênior",
    es: "Ingeniero de Software Senior",
  },
  "exp.desc1": {
    en: "Full Stack: Next.js, NestJS, LangGraph, etc.",
    pt: "Full Stack: Next.js, NestJS, LangGraph, etc.",
    es: "Full Stack: Next.js, NestJS, LangGraph, etc.",
  },
  "exp.company2": {
    en: "Virtual Pay",
    pt: "Virtual Pay",
    es: "Virtual Pay",
  },
  "exp.period2": {
    en: "2024 - 2025",
    pt: "2024 - 2025",
    es: "2024 - 2025",
  },
  "exp.role2": {
    en: "Full Stack Developer",
    pt: "Desenvolvedor Full Stack",
    es: "Desarrollador Full Stack",
  },
  "exp.desc2": {
    en: "SaaS platform development with NestJS and microservices",
    pt: "Desenvolvimento de plataforma SaaS com NestJS e microserviços",
    es: "Desarrollo de plataforma SaaS con NestJS y microservicios",
  },
  "exp.company3": {
    en: "iTechMed",
    pt: "iTechMed",
    es: "iTechMed",
  },
  "exp.period3": {
    en: "2023 - 2024",
    pt: "2023 - 2024",
    es: "2023 - 2024",
  },
  "exp.role3": {
    en: "Full Stack Developer",
    pt: "Desenvolvedor Full Stack",
    es: "Desarrollador Full Stack",
  },
  "exp.desc3": {
    en: "Dashboards and full stack architecture with React and Node",
    pt: "Dashboards e arquitetura full stack com React e Node",
    es: "Dashboards y arquitectura full stack con React y Node",
  },
  "exp.company4": {
    en: "Lab 510",
    pt: "Lab 510",
    es: "Lab 510",
  },
  "exp.period4": {
    en: "2022 - 2023",
    pt: "2022 - 2023",
    es: "2022 - 2023",
  },
  "exp.role4": {
    en: "Frontend Developer",
    pt: "Desenvolvedor Frontend",
    es: "Desarrollador Frontend",
  },
  "exp.desc4": {
    en: "Frontend projects with ReactJS, StyledComponents and AWS integration",
    pt: "Projetos frontend com ReactJS, StyledComponents e integração com AWS",
    es: "Proyectos frontend con ReactJS, StyledComponents e integración con AWS",
  },
  "exp.of": {
    en: "of",
    pt: "de",
    es: "de",
  },
  "exp.prev": {
    en: "Previous",
    pt: "Anterior",
    es: "Anterior",
  },
  "exp.next": {
    en: "Next",
    pt: "Próximo",
    es: "Siguiente",
  },

  // Projects Section
  "projects.title": {
    en: "Projects & Case Studies",
    pt: "Projetos e Cases",
    es: "Proyectos y Casos",
  },
  "projects.filter.all": {
    en: "All",
    pt: "Todos",
    es: "Todos",
  },
  "projects.filter.react": {
    en: "React",
    pt: "React",
    es: "React",
  },
  "projects.filter.node": {
    en: "Node",
    pt: "Node",
    es: "Node",
  },
  "projects.filter.fullstack": {
    en: "Full Stack",
    pt: "Full Stack",
    es: "Full Stack",
  },
  "projects.filter.mobile": {
    en: "Mobile",
    pt: "Mobile",
    es: "Móvil",
  },
  "projects.project1.title": {
    en: "Supermarket Alvorada",
    pt: "Supermercado Alvorada",
    es: "Supermercado Alvorada",
  },
  "projects.project1.desc": {
    en: "Complete e-commerce platform with admin panel, payments and product management.",
    pt: "Plataforma completa de e-commerce com painel administrativo, pagamentos e gestão de produtos.",
    es: "Plataforma completa de comercio electrónico con panel de administración, pagos y gestión de productos.",
  },
  "projects.project2.title": {
    en: "Institute Setas",
    pt: "Instituto Setas",
    es: "Instituto Setas",
  },
  "projects.project2.desc": {
    en: "Landing Page demo of an NGO",
    pt: "Landing Page de demonstração de uma ONG",
    es: "Landing Page de demostración de una ONG",
  },
  "projects.project3.title": {
    en: "Public Transparency",
    pt: "Transparência Pública",
    es: "Transparencia Pública",
  },
  "projects.project3.desc": {
    en: "System for analyzing public data in transparency reports.",
    pt: "Sistema para analise de dados públicos em relatórios de transparência.",
    es: "Sistema para analizar datos públicos en informes de transparencia.",
  },
  "projects.project4.title": {
    en: "Bathroom Evaluation",
    pt: "Avaliação de Banheiros",
    es: "Evaluación de Baños",
  },
  "projects.project4.desc": {
    en: "Mobile app for bathroom evaluation",
    pt: "App mobile para avaliação de banheiros",
    es: "App mobile para evaluación de baños",
  },
  "projects.github": {
    en: "GitHub",
    pt: "GitHub",
    es: "GitHub",
  },
  "projects.demo": {
    en: "Demo",
    pt: "Demo",
    es: "Demo",
  },

  // Certifications Section
  "cert.title": {
    en: "Certifications",
    pt: "Certificações",
    es: "Certificaciones",
  },

  // Contact Section
  "contact.title": {
    en: "Let's Work Together",
    pt: "Vamos Trabalhar Juntos",
    es: "Trabajemos Juntos",
  },
  "contact.subtitle": {
    en: "Get in Touch",
    pt: "Entre em Contato",
    es: "Contáctame",
  },
  "contact.description": {
    en: "I'm available for freelance projects and fulltime positions. Feel free to reach out if you want to discuss a project or just say hello.",
    pt: "Estou disponível para projetos freelance e posições em tempo integral. Sinta-se à vontade para entrar em contato se quiser discutir um projeto ou apenas dizer olá.",
    es: "Estoy disponible para proyectos freelance y posiciones a tiempo completo. No dudes en contactarme si quieres discutir un proyecto o simplemente saludar.",
  },
  "contact.email": {
    en: "Email",
    pt: "Email",
    es: "Correo",
  },
  "contact.phone": {
    en: "Phone",
    pt: "Telefone",
    es: "Teléfono",
  },
  "contact.form.name": {
    en: "Name",
    pt: "Nome",
    es: "Nombre",
  },
  "contact.form.name.placeholder": {
    en: "Your name",
    pt: "Seu nome",
    es: "Tu nombre",
  },
  "contact.form.email": {
    en: "Email",
    pt: "Email",
    es: "Correo",
  },
  "contact.form.email.placeholder": {
    en: "Your email",
    pt: "Seu email",
    es: "Tu correo",
  },
  "contact.form.phone": {
    en: "Phone",
    pt: "Telefone",
    es: "Teléfono",
  },
  "contact.form.phone.placeholder": {
    en: "Your phone number",
    pt: "Seu número de telefone",
    es: "Tu número de teléfono",
  },
  "contact.form.message": {
    en: "Message",
    pt: "Mensagem",
    es: "Mensaje",
  },
  "contact.form.message.placeholder": {
    en: "Your message",
    pt: "Sua mensagem",
    es: "Tu mensaje",
  },
  "contact.form.submit": {
    en: "Send Message",
    pt: "Enviar Mensagem",
    es: "Enviar Mensaje",
  },
  "contact.form.submitting": {
    en: "Sending...",
    pt: "Enviando...",
    es: "Enviando...",
  },

  // Footer
  "footer.developer": {
    en: "Full Stack Developer",
    pt: "Desenvolvedor Full Stack",
    es: "Desarrollador Full Stack",
  },
  "footer.rights": {
    en: "All rights reserved.",
    pt: "Todos os direitos reservados.",
    es: "Todos los derechos reservados.",
  },
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  const t = useCallback(
    (key: string): string => {
      if (!translations[key]) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
      return translations[key][language];
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
