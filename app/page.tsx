import { HeroSection } from "@/components/hero-section";
import { ProductsSection } from "@/components/products-section";
import { ExperienceSection } from "@/components/experience-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink-950">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <ExperienceSection />
      <TechStackSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
