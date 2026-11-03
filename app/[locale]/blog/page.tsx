import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { formatDate, getPosts } from "@/lib/blog";
import { content } from "@/lib/content";
import { htmlLang, isLocale } from "@/lib/i18n";
import { SITE_URL, blogPath, blogUrl, homeUrl, postUrl } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = content[locale].blog;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: blogUrl(locale),
      languages: {
        en: blogUrl("en"),
        "pt-BR": blogUrl("pt"),
        "x-default": blogUrl("en"),
      },
    },
    openGraph: {
      url: blogUrl(locale),
      title: `${t.metaTitle} | Gabriel Fragoso`,
      description: t.metaDescription,
    },
  };
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = content[locale].blog;
  const posts = getPosts(locale);
  const url = blogUrl(locale);

  return (
    <main className="min-h-screen bg-paper text-ink-950">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Blog",
              "@id": `${url}#blog`,
              url,
              name: `${t.metaTitle} | Gabriel Fragoso`,
              description: t.metaDescription,
              inLanguage: htmlLang[locale],
              publisher: { "@id": `${SITE_URL}/#person` },
              blogPost: posts.map((p) => ({
                "@type": "BlogPosting",
                headline: p.title,
                url: postUrl(locale, p.slug),
                datePublished: p.date,
              })),
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
                  item: url,
                },
              ],
            },
          ],
        }}
      />
      <Navbar
        locale={locale}
        switchPaths={{ en: blogPath("en"), pt: blogPath("pt") }}
      />

      <div className="container mx-auto px-6 pt-40 pb-24 max-w-3xl">
        <div className="eyebrow mb-4">{t.eyebrow}</div>
        <h1 className="heading-xl text-ink-950 uppercase mb-4">{t.title}</h1>
        <p className="body-lg text-ink-600 mb-14">{t.intro}</p>

        {posts.length === 0 ? (
          <p className="text-ink-400 font-ui">{t.empty}</p>
        ) : (
          <ul className="flex flex-col">
            {posts.map((post) => (
              <li key={post.slug} className="border-t border-border last:border-b">
                <article className="py-8">
                  <p className="font-mono text-sm text-ink-400 mb-2">
                    <time dateTime={post.date}>
                      {formatDate(post.date, locale)}
                    </time>{" "}
                    · {t.minRead(post.minutes)}
                  </p>
                  <h2 className="font-display text-3xl uppercase text-ink-950 leading-tight">
                    <Link
                      href={`${blogPath(locale)}/${post.slug}`}
                      className="hover:text-coral-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="body-md text-ink-600 mt-3">
                    {post.description}
                  </p>
                  <Link
                    href={`${blogPath(locale)}/${post.slug}`}
                    className="inline-block mt-4 font-ui text-sm font-semibold text-coral-600 hover:text-coral-500"
                  >
                    {t.readPost} →
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Footer locale={locale} />
    </main>
  );
}
