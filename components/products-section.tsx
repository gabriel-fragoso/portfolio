"use client";

import { motion } from "framer-motion";
import { ProjectFlipCard } from "@/components/project-flip-card";

type Product = {
  name: string;
  role: string;
  description: string;
  logo: string | null;
  logoOnDark?: boolean;
  url: string;
};

const products: Product[] = [
  {
    name: "Feedget",
    role: "B2B SaaS",
    description:
      "Smart feedback widget that collects, analyzes, and turns user opinions into product insights.",
    logo: null,
    url: "https://feedget.io/",
  },
  {
    name: "Vai Anotando",
    role: "Micro-SaaS · Vai line (Doveon)",
    description:
      "Digital menu for restaurants to sell directly through WhatsApp, with no per-order commission. 20+ active businesses.",
    logo: "https://www.vaianotando.com.br/logo/texto-logo.png",
    url: "https://www.vaianotando.com.br/",
  },
  {
    name: "Narrio",
    role: "Co-founder · Head of Tech",
    description:
      "B2B event intelligence platform that captures live sales conversations and turns them into qualified leads and CRM data.",
    logo: "https://narrio.com.br/narrio_logo_new.png",
    url: "https://narrio.com.br/",
  },
  {
    name: "Growth Mentor",
    role: "Co-founder · Head of Tech",
    description:
      "Demand generation SaaS that unifies ICP discovery, lead prospecting, content, and multi-channel outreach in one system.",
    logo: "https://growthmentor.com.br/assets/logo-closed-BrOp-PfJ.png",
    url: "https://growthmentor.com.br/",
  },
  {
    name: "RevHouse",
    role: "Co-founder · Head of Tech",
    description:
      "GTM execution service that builds complete B2B sales operations in 90 days: strategy, tech stack, demand gen, and training.",
    logo: null,
    url: "https://revhouse.com.br/",
  },
  {
    name: "Rezistro",
    role: "Head of Tech",
    description:
      "Trademark registration in Brazil and abroad, with personalized support through the whole process.",
    logo: "https://rezistro.com.br/wp-content/uploads/2024/11/logo-rezistro.png",
    url: "https://rezistro.com.br/",
  },
  {
    name: "Doveon",
    role: "Co-founder · Head of Product & Design",
    description:
      "Software engineering without borders: on-demand squads and in-house products, operating in Brazil, the US, and Spain.",
    logo: "https://www.doveon.com.br/DOVEON-LOGO.FT.png",
    logoOnDark: true,
    url: "https://www.doveon.com.br/",
  },
];

export function ProductsSection() {
  return (
    <section
      id="products"
      className="py-24 bg-white border-t border-b border-border relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-20">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-4"
          >
            Products
          </motion.div>
          <h2 className="heading-lg text-ink-950 max-w-xl uppercase">
            Where my work is live.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <ProjectFlipCard
                name={product.name}
                description={product.description}
                logo={product.logo}
                logoOnDark={product.logoOnDark}
                url={product.url}
                footer={
                  <div className="text-xs font-mono text-coral-600">
                    {product.role}
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
