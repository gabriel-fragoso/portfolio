import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { APPS_URL, SITE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = (await headers()).get("host") ?? "";
  const isApps = host.startsWith("apps.");
  return [
    {
      url: isApps ? APPS_URL : SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
