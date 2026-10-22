import Link from "next/link";
import type { Locale } from "@/lib/i18n";

// "/" and "/pt" resolve to the right page on both gabrielfragoso.com and
// apps.gabrielfragoso.com (see middleware.ts).
export function LanguageSwitch({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const options: { id: Locale; text: string; href: string }[] = [
    { id: "en", text: "EN", href: "/" },
    { id: "pt", text: "PT", href: "/pt" },
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
          href={o.href}
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
