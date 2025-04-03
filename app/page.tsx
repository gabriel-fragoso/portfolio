import { LanguageSwitcher } from "@/components/language-switcher";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
