import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import type { Locale } from "@/lib/i18n";

export type PostMeta = {
  slug: string;
  locale: Locale;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  updated?: string;
  tags: string[];
  minutes: number;
};

export type Post = PostMeta & { html: string };

const ROOT = path.join(process.cwd(), "content", "blog");

// Frontmatter is a small `key: value` block between `---` lines.
function parse(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) throw new Error("Missing frontmatter");
  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) {
      // Values may be wrapped in quotes (needed when they contain a colon).
      data[line.slice(0, i).trim()] = line
        .slice(i + 1)
        .trim()
        .replace(/^"(.*)"$/, "$1");
    }
  }
  return { data, body: match[2].trim() };
}

function readPost(locale: Locale, file: string): Post {
  const { data, body } = parse(
    fs.readFileSync(path.join(ROOT, locale, file), "utf8")
  );
  const words = body.split(/\s+/).length;
  return {
    slug: file.replace(/\.md$/, ""),
    locale,
    title: data.title,
    description: data.description,
    date: data.date,
    updated: data.updated,
    tags: (data.tags ?? "").split(",").map((t) => t.trim()).filter(Boolean),
    minutes: Math.max(1, Math.round(words / 200)),
    html: marked.parse(body, { async: false }) as string,
  };
}

/** All posts of a language, newest first. */
export function getPosts(locale: Locale): Post[] {
  const dir = path.join(ROOT, locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => readPost(locale, f))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(locale: Locale, slug: string): Post | undefined {
  return getPosts(locale).find((p) => p.slug === slug);
}

export function formatDate(date: string, locale: Locale) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString(
    locale === "pt" ? "pt-BR" : "en-US",
    { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }
  );
}
