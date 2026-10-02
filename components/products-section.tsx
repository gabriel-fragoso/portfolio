"use client";

import { ProjectFlipCard } from "@/components/project-flip-card";
import { motion } from "framer-motion";

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
    role: "SaaS B2B",
    description:
      "Widget de feedback inteligente que coleta, analisa e transforma a opinião dos usuários em insights de produto.",
    logo: null,
    url: "https://feedget.com.br/",
  },
  {
    name: "Vai Anotando",
    role: "Micro-SaaS · Linha Vai (Doveon)",
    description:
      "Cardápio digital para restaurantes venderem direto pelo WhatsApp, sem comissão por pedido. Mais de 20 negócios ativos.",
    logo: "https://www.vaianotando.com.br/logo/texto-logo.png",
    url: "https://www.vaianotando.com.br/",
  },
  {
    name: "Narrio",
    role: "Co-fundador · Head de Tecnologia",
    description:
      "Plataforma B2B de inteligência para eventos que captura conversas de vendas ao vivo e as transforma em leads qualificados e dados de CRM.",
    logo: "https://narrio.com.br/narrio_logo_new.png",
    url: "https://narrio.com.br/",
  },
  {
    name: "Growth Mentor",
    role: "Co-fundador · Head de Tecnologia",
    description:
      "SaaS de geração de demanda que reúne descoberta de ICP, prospecção de leads, conteúdo e abordagem multicanal em um só sistema.",
    logo: "https://growthmentor.com.br/assets/logo-closed-BrOp-PfJ.png",
    url: "https://growthmentor.com.br/",
  },
  {
    name: "RevHouse",
    role: "Co-fundador · Head de Tecnologia",
    description:
      "Serviço de execução de GTM que monta operações completas de vendas B2B em 90 dias: estratégia, stack de tecnologia, geração de demanda e treinamento.",
    logo: null,
    url: "https://revhouse.com.br/",
  },
  {
    name: "Rezistro",
    role: "Head de Tecnologia",
    description:
      "Registro de marcas no Brasil e no exterior, com acompanhamento personalizado em todo o processo.",
    logo: "https://rezistro.com.br/wp-content/uploads/2024/11/logo-rezistro.png",
    url: "https://rezistro.com.br/",
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
            Produtos
          </motion.div>
          <h2 className="heading-lg text-ink-950 max-w-xl uppercase">
            Onde meu trabalho está no ar.
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
