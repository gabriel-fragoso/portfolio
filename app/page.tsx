import { HeroSection } from "@/components/hero-section";
import { ProductsSection } from "@/components/products-section";
import { ExperienceSection } from "@/components/experience-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { ContactSection } from "@/components/contact-section";
import { ServicesSection } from "@/components/services-section";
import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { APPS_URL, FAQ, PERSON, SERVICES, SITE_DESCRIPTION, SITE_URL } from "@/lib/site";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Home() {
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
              inLanguage: "pt-BR",
              publisher: { "@id": `${SITE_URL}/#person` },
            },
            {
              "@type": "WebPage",
              "@id": `${SITE_URL}/#webpage`,
              url: SITE_URL,
              name: "Gabriel Fragoso | Desenvolvedor Full Stack Freelancer",
              description: SITE_DESCRIPTION,
              inLanguage: "pt-BR",
              isPartOf: { "@id": `${SITE_URL}/#website` },
              about: { "@id": `${SITE_URL}/#person` },
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
              description: SITE_DESCRIPTION,
              nationality: { "@type": "Country", name: "Brazil" },
              sameAs: [PERSON.linkedin, PERSON.github, APPS_URL],
              knowsAbout: [
                "React", "Next.js", "TypeScript", "Node.js", "NestJS",
                "AWS", "SaaS", "MVP development", "Web development",
              ],
              worksFor: [
                { "@type": "Organization", name: "Narrio", url: "https://narrio.com.br/" },
                { "@type": "Organization", name: "Growth Mentor", url: "https://growthmentor.com.br/" },
                { "@type": "Organization", name: "RevHouse", url: "https://revhouse.com.br/" },
              ],
            },
            {
              "@type": "ProfessionalService",
              "@id": `${SITE_URL}/#service`,
              name: "Gabriel Fragoso, Desenvolvedor Freelancer",
              url: SITE_URL,
              image: `${SITE_URL}/gabriel-fragoso.jpeg`,
              description: SITE_DESCRIPTION,
              provider: { "@id": `${SITE_URL}/#person` },
              email: PERSON.email,
              areaServed: [
                { "@type": "Country", name: "Brazil" },
                { "@type": "Place", name: "Worldwide (remote)" },
              ],
              knowsLanguage: ["pt-BR", "en", "es"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Serviços de desenvolvimento",
                itemListElement: SERVICES.map((s) => ({
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
              "@id": `${SITE_URL}/#faq`,
              mainEntity: FAQ.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }}
      />
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <ServicesSection />
      <ExperienceSection />
      <TechStackSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
