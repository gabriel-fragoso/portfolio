import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { Button } from "@/components/ui/button";
import { formatDate, getPost, getPosts } from "@/lib/blog";
import { content } from "@/lib/content";
import { htmlLang, isLocale, locales } from "@/lib/i18n";
import {
  PERSON,
  SITE_URL,
  blogPath,
  blogUrl,
  clinicsPath,
  homeUrl,
  postUrl,
} from "@/lib/site";

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getPosts(locale).map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const post = getPost(locale, slug);
  if (!post) return {};
  const url = postUrl(locale, slug);
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: PERSON.name, url: SITE_URL }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [PERSON.name],
      tags: post.tags,
    },
  };
}

export default async function PostPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const post = getPost(locale, slug);
  if (!post) notFound();
  const t = content[locale].blog;
  const url = postUrl(locale, slug);
  const others = getPosts(locale)
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-paper text-ink-950">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BlogPosting",
              "@id": `${url}#article`,
              mainEntityOfPage: url,
              url,
              headline: post.title,
              description: post.description,
              inLanguage: htmlLang[locale],
              datePublished: post.date,
              dateModified: post.updated ?? post.date,
              keywords: post.tags.join(", "),
              wordCount: post.html.replace(/<[^>]+>/g, " ").split(/\s+/).length,
              image: `${SITE_URL}/opengraph-image`,
              author: { "@id": `${SITE_URL}/#person` },
              publisher: { "@id": `${SITE_URL}/#person` },
              isPartOf: { "@id": `${blogUrl(locale)}#blog` },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Gabriel Fragoso",
                  item: homeUrl(locale),
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: t.eyebrow,
                  item: blogUrl(locale),
                },
                { "@type": "ListItem", position: 3, name: post.title, item: url },
              ],
            },
          ],
        }}
      />
      <Navbar locale={locale} />

      <article className="container mx-auto px-6 pt-40 pb-16 max-w-3xl">
        <Link
          href={blogPath(locale)}
          className="font-ui text-sm font-semibold text-coral-600 hover:text-coral-500"
        >
          ← {t.back}
        </Link>
        <h1 className="heading-xl text-ink-950 uppercase mt-6 mb-5">
          {post.title}
        </h1>
        <p className="font-mono text-sm text-ink-400 mb-10">
          {t.published}{" "}
          <time dateTime={post.date}>{formatDate(post.date, locale)}</time> ·{" "}
          {t.minRead(post.minutes)} · {PERSON.name}
        </p>
        <div
          className="post-body"
          // Markdown comes from this repository (content/blog), not user input.
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>

      <section className="bg-white border-t border-border py-16">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="heading-md text-ink-950 uppercase">{t.ctaTitle}</h2>
          <p className="body-md text-ink-600 mt-3 mb-6">{t.ctaText}</p>
          <Button asChild size="lg" className="px-6">
            <Link href={clinicsPath(locale)}>{t.ctaButton}</Link>
          </Button>
        </div>
      </section>

      {others.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="font-ui text-lg font-semibold text-ink-950 mb-6">
              {t.related}
            </h2>
            <ul className="flex flex-col gap-3">
              {others.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`${blogPath(locale)}/${p.slug}`}
                    className="text-coral-600 hover:text-coral-500 underline underline-offset-4"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <Footer locale={locale} />
    </main>
  );
}
