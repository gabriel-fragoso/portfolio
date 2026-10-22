import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/hero-section";
import { WorkSection } from "@/components/work-section";
import { ExperienceSection } from "@/components/experience-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { ServicesSection } from "@/components/services-section";
import { FaqSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { JsonLd } from "@/components/json-ld";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { content } from "@/lib/content";
import { htmlLang, isLocale } from "@/lib/i18n";
import { APPS_URL, PERSON, SITE_URL, cvPath, homeUrl } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    alternates: {
      canonical: homeUrl(locale),
      languages: {
        en: SITE_URL,
        "pt-BR": `${SITE_URL}/pt`,
        "x-default": SITE_URL,
      },
    },
    openGraph: { url: homeUrl(locale) },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = content[locale];
  const url = homeUrl(locale);

  return (
    <main className="min-h-screen bg-paper text-ink-950">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: SITE_URL,
              name: "Gabriel Fragoso",
              inLanguage: ["en", "pt-BR"],
              publisher: { "@id": `${SITE_URL}/#person` },
            },
            {
              "@type": "ProfilePage",
              "@id": `${url}#webpage`,
              url,
              name: t.meta.title,
              description: t.meta.description,
              inLanguage: htmlLang[locale],
              isPartOf: { "@id": `${SITE_URL}/#website` },
              mainEntity: { "@id": `${SITE_URL}/#person` },
              primaryImageOfPage: `${SITE_URL}/gabriel-fragoso.jpeg`,
            },
            {
              "@type": "Person",
              "@id": `${SITE_URL}/#person`,
              name: PERSON.name,
              url: SITE_URL,
              image: `${SITE_URL}/gabriel-fragoso.jpeg`,
              email: PERSON.email,
              jobTitle: PERSON.jobTitle,
              description: content.en.meta.description,
              nationality: { "@type": "Country", name: "Brazil" },
              sameAs: [PERSON.linkedin, PERSON.github, PERSON.instagram, APPS_URL],
              knowsLanguage: ["en", "pt-BR"],
              alumniOf: { "@type": "CollegeOrUniversity", name: "Estácio" },
              worksFor: {
                "@type": "Organization",
                name: "Feedget",
                url: "https://feedget.com.br/",
              },
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "NestJS",
                "Fastify",
                "PostgreSQL",
                "AWS",
                "SaaS",
                "Frontend engineering",
              ],
              subjectOf: {
                "@type": "DigitalDocument",
                name: "CV",
                url: `${SITE_URL}${cvPath(locale)}`,
              },
            },
            {
              "@type": "ProfessionalService",
              "@id": `${SITE_URL}/#service`,
              name: "Gabriel Fragoso, Frontend and Full Stack Engineer",
              url: SITE_URL,
              image: `${SITE_URL}/gabriel-fragoso.jpeg`,
              description: content.en.meta.description,
              provider: { "@id": `${SITE_URL}/#person` },
              email: PERSON.email,
              areaServed: [
                { "@type": "Country", name: "Brazil" },
                { "@type": "Place", name: "Worldwide (remote)" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: t.services.title,
                itemListElement: t.services.items.map((s) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: s.name,
                    description: s.description,
                  },
                })),
              },
            },
            {
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              inLanguage: htmlLang[locale],
              mainEntity: t.faq.items.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }}
      />
      <Navbar locale={locale} />
      <HeroSection locale={locale} />
      <WorkSection locale={locale} />
      <ExperienceSection locale={locale} />
      <TechStackSection locale={locale} />
      <ServicesSection locale={locale} />
      <FaqSection locale={locale} />
      <ContactSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
