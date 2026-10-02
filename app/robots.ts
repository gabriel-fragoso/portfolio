import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { APPS_URL, SITE_URL } from "@/lib/site";

// Search and AI crawlers are explicitly welcome so the site can be cited in
// Google, ChatGPT, Perplexity, Gemini, Claude, Copilot, etc.
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
];

export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = (await headers()).get("host") ?? "";
  const base = host.startsWith("apps.") ? APPS_URL : SITE_URL;
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_BOTS, allow: "/" },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
