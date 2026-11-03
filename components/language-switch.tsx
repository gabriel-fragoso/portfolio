import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export type SwitchPaths = Record<Locale, string>;

const HOME: SwitchPaths = { en: "/", pt: "/pt" };

// "/" and "/pt" resolve to the right page on both gabrielfragoso.com and
// apps.gabrielfragoso.com (see middleware.ts). Pages that exist in both
// languages pass their own paths; others fall back to the home page.
export function LanguageSwitch({
  locale,
  label,
  paths = HOME,
}: {
  locale: Locale;
  label: string;
  paths?: SwitchPaths;
}) {
  const options: { id: Locale; text: string }[] = [
    { id: "en", text: "EN" },
    { id: "pt", text: "PT" },
  ];
  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center gap-1 font-ui text-xs font-semibold"
    >
      {options.map((o) => (
        <Link
          key={o.id}
          href={paths[o.id]}
          hrefLang={o.id === "pt" ? "pt-BR" : "en"}
          lang={o.id === "pt" ? "pt-BR" : "en"}
          aria-current={locale === o.id ? "true" : undefined}
          className={`px-2 py-1 rounded-full transition-colors ${
            locale === o.id
              ? "bg-ink-950 text-paper"
              : "text-ink-600 hover:text-ink-950"
          }`}
        >
          {o.text}
        </Link>
      ))}
    </div>
  );
}
