import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClinicsPage } from "@/components/clinics-page";
import { content } from "@/lib/content";
import { clinicsUrl } from "@/lib/site";

// Served at /pt/clinicas (see middleware.ts).
const LOCALE = "pt" as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== LOCALE) return {};
  const t = content[LOCALE].clinics.meta;
  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: clinicsUrl(LOCALE),
      languages: {
        en: clinicsUrl("en"),
        "pt-BR": clinicsUrl("pt"),
        "x-default": clinicsUrl("en"),
      },
    },
    openGraph: {
      url: clinicsUrl(LOCALE),
      title: t.title,
      description: t.description,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== LOCALE) notFound();
  return <ClinicsPage locale={LOCALE} />;
}
