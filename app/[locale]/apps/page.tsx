import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AppsGrid } from "@/components/apps-grid";
import { Package } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { appsByLocale } from "@/lib/apps";
import { content } from "@/lib/content";
import { htmlLang, isLocale } from "@/lib/i18n";
import { APPS_URL, SITE_URL, appsUrl, homeUrl } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = content[locale].meta;
  return {
    title: { absolute: t.appsTitle },
    description: t.appsDescription,
    alternates: {
      canonical: appsUrl(locale),
      languages: {
        en: APPS_URL,
        "pt-BR": `${APPS_URL}/pt`,
        "x-default": APPS_URL,
      },
    },
    openGraph: {
      url: appsUrl(locale),
      title: t.appsTitle,
      description: t.appsDescription,
    },
  };
}

export default async function AppsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = content[locale];
  const url = appsUrl(locale);

  return (
    <main className="min-h-screen bg-paper text-ink-950">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": `${url}#page`,
              url,
              name: t.apps.jsonLdName,
              inLanguage: htmlLang[locale],
              isPartOf: { "@id": `${SITE_URL}/#website` },
              about: { "@id": `${SITE_URL}/#person` },
              breadcrumb: { "@id": `${url}#breadcrumb` },
              mainEntity: {
                "@type": "ItemList",
                itemListElement: appsByLocale[locale].map((app, i) => ({
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
              "@id": `${url}#breadcrumb`,
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Gabriel Fragoso",
                  item: homeUrl(locale),
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Apps",
                  item: url,
                },
              ],
            },
          ],
        }}
      />
      <Navbar locale={locale} />

      <div className="container mx-auto px-6 pt-40 pb-10">
        <div className="eyebrow mb-4">
          <Package className="h-3.5 w-3.5 mr-1.5" />
          {t.apps.eyebrow}
        </div>
        <h1 className="heading-xl text-ink-950 uppercase mb-4">
          {t.apps.title}
        </h1>
        <p className="body-lg text-ink-600 max-w-xl mb-10">{t.apps.text}</p>
      </div>

      <AppsGrid locale={locale} />

      <Footer locale={locale} />
    </main>
  );
}
