import type { Locale } from "@/lib/i18n";

export type ClinicLp = {
  name: string;
  niche: string;
  description: string;
  tags: string[];
  url: string;
  /** Sample page built to show a clinic what their page could look like. */
  demo: boolean;
};

// Add every new landing page here, in both languages, as it ships.
export const clinicLps: Record<Locale, ClinicLp[]> = {
  pt: [
    {
      name: "Dra. Alana · Odontologia",
      niche: "Odontologia estética",
      description:
        "Landing page para consultório odontológico: estética dental, lentes de contato, clareamento, alinhadores e implantes, com agendamento de avaliação pelo WhatsApp.",
      tags: ["Odontologia", "WhatsApp", "SEO local"],
      url: "https://gabriel-fragoso.github.io/dra-alana-landing-page/",
      demo: true,
    },
  ],
  en: [
    {
      name: "Dra. Alana · Dentistry",
      niche: "Cosmetic dentistry",
      description:
        "Landing page for a dental practice: cosmetic dentistry, veneers, whitening, clear aligners and implants, with appointment booking through WhatsApp.",
      tags: ["Dentistry", "WhatsApp", "Local SEO"],
      url: "https://gabriel-fragoso.github.io/dra-alana-landing-page/",
      demo: true,
    },
  ],
};
