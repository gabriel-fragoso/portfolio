"use client";

import Link from "next/link";
import Image from "next/image";
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
    name: "Doveon",
    role: "Co-founder · Head of Product & Design",
    description:
      "Software engineering without borders: on-demand squads and in-house products, operating in Brazil, the US, and Spain.",
    logo: "https://www.doveon.com.br/DOVEON-LOGO.FT.png",
    logoOnDark: true,
    url: "https://www.doveon.com.br/",
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
    name: "Feedget",
    role: "B2B SaaS",
    description:
      "Smart feedback widget that collects, analyzes, and turns user opinions into product insights.",
    logo: null,
    url: "https://feedget.io/",
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
              <Link
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-4 h-full bg-paper border border-border rounded-card p-7 transition-shadow hover:shadow-md"
              >
                <div className="h-9 flex items-center">
                  {product.logo ? (
                    <div
                      className={
                        product.logoOnDark
                          ? "relative h-9 w-32 bg-ink-950 rounded-md p-1.5"
                          : "relative h-9 w-32"
                      }
                    >
                      <Image
                        src={product.logo}
                        alt={product.name}
                        fill
                        className="object-contain object-left"
                        unoptimized
                      />
                    </div>
                  ) : (
                    <span className="font-display text-2xl text-ink-950 uppercase">
                      {product.name}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-ink-950 font-ui">
                  {product.name}
                </h3>
                <p className="body-sm text-ink-600 flex-1">
                  {product.description}
                </p>
                <div className="text-xs font-mono text-coral-600">
                  {product.role}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
