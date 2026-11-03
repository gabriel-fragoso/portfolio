import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { ClinicLpGrid } from "@/components/clinic-lp-grid";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { content } from "@/lib/content";
import { htmlLang, type Locale } from "@/lib/i18n";
import {
  PERSON,
  SITE_URL,
  clinicsPath,
  clinicsUrl,
  homeUrl,
  whatsappLink,
} from "@/lib/site";

export function ClinicsPage({ locale }: { locale: Locale }) {
  const t = content[locale].clinics;
  const url = clinicsUrl(locale);
  const wa = whatsappLink(t.ctaMessage);

  return (
    <main className="min-h-screen bg-paper text-ink-950">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${url}#page`,
              url,
              name: t.meta.title,
              description: t.meta.description,
              inLanguage: htmlLang[locale],
              isPartOf: { "@id": `${SITE_URL}/#website` },
              breadcrumb: { "@id": `${url}#breadcrumb` },
              about: { "@id": `${url}#service` },
            },
            {
              "@type": "Service",
              "@id": `${url}#service`,
              name: t.title,
              serviceType: t.eyebrow,
              description: t.meta.description,
              provider: { "@id": `${SITE_URL}/#person` },
              areaServed: { "@type": "Country", name: "Brazil" },
              url,
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
                  name: t.eyebrow,
                  item: url,
                },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              inLanguage: htmlLang[locale],
              mainEntity: t.faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }}
      />
      <Navbar
        locale={locale}
        switchPaths={{ en: clinicsPath("en"), pt: clinicsPath("pt") }}
      />

      <header className="container mx-auto px-6 pt-40 pb-16">
        <div className="eyebrow mb-4">{t.eyebrow}</div>
        <h1 className="heading-xl text-ink-950 uppercase max-w-4xl">
          {t.title}
        </h1>
        <p className="body-lg text-ink-600 max-w-2xl mt-6">{t.intro}</p>
        <Button asChild size="lg" className="px-6 mt-8">
          <a href={wa} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4 mr-2" />
            {t.cta}
          </a>
        </Button>
      </header>

      <section
        aria-labelledby="samples-title"
        className="py-20 bg-white border-t border-b border-border"
      >
        <div className="container mx-auto px-6">
          <div className="eyebrow mb-4">{t.samplesEyebrow}</div>
          <h2
            id="samples-title"
            className="heading-lg text-ink-950 uppercase max-w-xl"
          >
            {t.samplesTitle}
          </h2>
          <p className="body-md text-ink-600 max-w-2xl mt-4 mb-10">
            {t.samplesText}
          </p>
          <ClinicLpGrid locale={locale} />
          <p className="mt-8 font-ui text-sm text-ink-400">{t.moreComing}</p>
        </div>
      </section>

      <section aria-labelledby="includes-title" className="py-20">
        <div className="container mx-auto px-6">
          <h2
            id="includes-title"
            className="heading-lg text-ink-950 uppercase mb-10"
          >
            {t.includesTitle}
          </h2>
          <ul className="grid md:grid-cols-3 gap-6">
            {t.includes.map((item) => (
              <li
                key={item.name}
                className="border border-border rounded-card p-7 bg-white"
              >
                <h3 className="font-display text-2xl uppercase text-ink-950 mb-3">
                  {item.name}
                </h3>
                <p className="body-md text-ink-600">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="process-title"
        className="py-20 bg-ink-950 text-paper"
      >
        <div className="container mx-auto px-6">
          <h2
            id="process-title"
            className="heading-lg uppercase mb-10 text-paper"
          >
            {t.processTitle}
          </h2>
          <ol className="grid md:grid-cols-4 gap-6">
            {t.steps.map((step, i) => (
              <li key={step.name} className="border-t border-white/20 pt-5">
                <span className="font-mono text-sm text-sun-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-ui text-lg font-semibold mt-2 mb-2">
                  {step.name}
                </h3>
                <p className="body-sm text-paper/70">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2
            id="faq-title"
            className="heading-lg text-ink-950 uppercase mb-10"
          >
            {t.faqTitle}
          </h2>
          <div className="flex flex-col">
            {t.faq.map((item, i) => (
              <details
                key={item.q}
                className={`group py-5 border-t border-border ${
                  i === t.faq.length - 1 ? "border-b" : ""
                }`}
              >
                <summary className="cursor-pointer list-none font-ui font-semibold text-ink-950 flex justify-between gap-4">
                  <h3 className="text-base font-semibold">{item.q}</h3>
                  <span
                    aria-hidden="true"
                    className="text-coral-500 group-open:rotate-45 transition-transform"
                  >
                    +
                  </span>
                </summary>
                <p className="body-md text-ink-600 mt-3">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center bg-white border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="heading-lg text-ink-950 uppercase max-w-2xl mx-auto">
            {t.finalTitle}
          </h2>
          <p className="body-md text-ink-600 mt-4 mb-8">{t.finalText}</p>
          <Button asChild size="lg" className="px-6">
            <a href={wa} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4 mr-2" />
              {t.cta}
            </a>
          </Button>
          <p className="mt-4 font-ui text-sm text-ink-400">
            {PERSON.phone}
          </p>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
