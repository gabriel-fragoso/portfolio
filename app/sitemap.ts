import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { APPS_URL, SITE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = (await headers()).get("host") ?? "";
  const base = host.startsWith("apps.") ? APPS_URL : SITE_URL;
  return [
    {
      url: base,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { en: base, "pt-BR": `${base}/pt` } },
    },
    {
      url: `${base}/pt`,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { en: base, "pt-BR": `${base}/pt` } },
    },
  ];
}
