import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { getPosts } from "@/lib/blog";
import { APPS_URL, SITE_URL, blogUrl, clinicsUrl, postUrl } from "@/lib/site";

type Entry = MetadataRoute.Sitemap[number];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = (await headers()).get("host") ?? "";
  const bilingual = (
    en: string,
    pt: string,
    priority: number,
    changeFrequency: Entry["changeFrequency"] = "monthly"
  ): Entry[] => {
    const languages = { en, "pt-BR": pt };
    return [
      { url: en, changeFrequency, priority, alternates: { languages } },
      { url: pt, changeFrequency, priority: priority - 0.1, alternates: { languages } },
    ];
  };

  if (host.startsWith("apps.")) {
    return bilingual(APPS_URL, `${APPS_URL}/pt`, 1);
  }

  const posts: Entry[] = (["en", "pt"] as const).flatMap((locale) =>
    getPosts(locale).map((p) => ({
      url: postUrl(locale, p.slug),
      lastModified: p.updated ?? p.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    }))
  );

  return [
    ...bilingual(SITE_URL, `${SITE_URL}/pt`, 1),
    ...bilingual(clinicsUrl("en"), clinicsUrl("pt"), 0.9),
    ...bilingual(blogUrl("en"), blogUrl("pt"), 0.7, "weekly"),
    ...posts,
  ];
}
