import type React from "react";
import type { Metadata } from "next";
import { Antonio, Fustat, Poppins, Inconsolata } from "next/font/google";
import "../globals.css";
import { Providers } from "../providers";
import { Analytics } from "@vercel/analytics/react";
import { notFound } from "next/navigation";
import { content } from "@/lib/content";
import { htmlLang, isLocale, locales, ogLocale } from "@/lib/i18n";
import { PERSON, SITE_URL } from "@/lib/site";

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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = content[locale].meta;
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t.title, template: "%s | Gabriel Fragoso" },
    description: t.description,
    keywords: t.keywords,
    applicationName: "Gabriel Fragoso",
    authors: [{ name: PERSON.name, url: SITE_URL }],
    creator: PERSON.name,
    publisher: PERSON.name,
    openGraph: {
      type: "website",
      locale: ogLocale[locale],
      siteName: "Gabriel Fragoso",
      title: t.ogTitle,
      description: t.description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.ogTitle,
      description: t.description,
      images: ["/opengraph-image"],
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
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={htmlLang[locale]}
      className="scroll-smooth"
      suppressHydrationWarning
    >
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
