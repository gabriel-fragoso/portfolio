import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AppsGrid } from "@/components/apps-grid";
import { Package } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { appsList } from "@/lib/apps";
import { APPS_URL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apps e Produtos Criados por Gabriel Fragoso",
  description:
    "Apps, SaaS e produtos digitais criados por Gabriel Fragoso, desenvolvedor full stack freelancer: Vai Anotando, Feedget, Boi na Mão e mais.",
  alternates: { canonical: APPS_URL },
  openGraph: {
    url: APPS_URL,
    title: "Apps e Produtos Criados por Gabriel Fragoso",
    description:
      "Apps, SaaS e produtos digitais criados por Gabriel Fragoso, desenvolvedor full stack freelancer.",
  },
};

export default function AppsPage() {
  return (
    <main className="min-h-screen bg-paper text-ink-950">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": `${APPS_URL}/#page`,
              url: APPS_URL,
              name: "Apps e produtos criados por Gabriel Fragoso",
              inLanguage: "pt-BR",
              isPartOf: { "@id": `${SITE_URL}/#website` },
              about: { "@id": `${SITE_URL}/#person` },
              breadcrumb: { "@id": `${APPS_URL}/#breadcrumb` },
              mainEntity: {
                "@type": "ItemList",
                itemListElement: appsList.map((app, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  item: {
                    "@type": "SoftwareApplication",
                    name: app.name,
                    description: app.description,
                    url: app.url,
                    applicationCategory: "BusinessApplication",
                    operatingSystem: "Web",
                    author: { "@id": `${SITE_URL}/#person` },
                  },
                })),
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${APPS_URL}/#breadcrumb`,
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Gabriel Fragoso", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Apps", item: APPS_URL },
              ],
            },
          ],
        }}
      />
      <Navbar />

      <div className="container mx-auto px-6 pt-40 pb-10">
        <div className="eyebrow mb-4">
          <Package className="h-3.5 w-3.5 mr-1.5" />
          Apps
        </div>
        <h1 className="heading-xl text-ink-950 uppercase mb-4">
          O que eu já construí.
        </h1>
        <p className="body-lg text-ink-600 max-w-xl mb-10">
          Todos os projetos open source e apps que eu publico, em um só lugar.
        </p>
      </div>

      <AppsGrid />

      <Footer />
    </main>
  );
}
