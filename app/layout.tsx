import type React from "react";
import type { Metadata } from "next";
import { Antonio, Fustat, Poppins, Inconsolata } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import { KEYWORDS, PERSON, SITE_DESCRIPTION, SITE_URL } from "@/lib/site";

// Condensed display face for big, punchy headlines
const antonio = Antonio({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Humanist body face for reading
const fustat = Fustat({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Geometric UI face for buttons/labels/chrome
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Monospace for anything data-like
const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Gabriel Fragoso | Desenvolvedor Full Stack Freelancer (Sob Demanda)",
    template: "%s | Gabriel Fragoso",
  },
  description: SITE_DESCRIPTION,
  keywords: KEYWORDS,
  applicationName: "Gabriel Fragoso",
  authors: [{ name: PERSON.name, url: SITE_URL }],
  creator: PERSON.name,
  publisher: PERSON.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Gabriel Fragoso",
    title: "Gabriel Fragoso | Desenvolvedor Full Stack Freelancer",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Fragoso | Desenvolvedor Full Stack Freelancer",
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${antonio.variable} ${fustat.variable} ${poppins.variable} ${inconsolata.variable} font-sans antialiased`}
      >
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}

import "./globals.css";
