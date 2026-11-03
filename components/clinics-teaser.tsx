import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ClinicLpGrid } from "@/components/clinic-lp-grid";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { clinicsPath } from "@/lib/site";

export function ClinicsTeaser({ locale }: { locale: Locale }) {
  const t = content[locale].clinics;

  return (
    <section
      id="clinics"
      aria-labelledby="clinics-title"
      className="py-24 border-t border-border"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-end mb-12">
          <div>
            <div className="eyebrow mb-4">{t.teaserEyebrow}</div>
            <h2
              id="clinics-title"
              className="heading-lg text-ink-950 max-w-xl uppercase"
            >
              {t.teaserTitle}
            </h2>
          </div>
          <div>
            <p className="body-lg text-ink-600 max-w-xl">{t.teaserText}</p>
            <Button asChild size="lg" className="px-6 mt-6">
              <Link href={clinicsPath(locale)}>{t.teaserCta}</Link>
            </Button>
          </div>
        </div>
        <ClinicLpGrid locale={locale} limit={3} />
      </div>
    </section>
  );
}
