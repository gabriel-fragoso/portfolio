"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

type ProjectFlipCardProps = {
  name: string;
  description: string;
  logo: string | null;
  logoOnDark?: boolean;
  url: string;
  footer?: ReactNode;
  minHeight?: string;
};

export function ProjectFlipCard({
  name,
  description,
  logo,
  logoOnDark,
  url,
  footer,
  minHeight = "min-h-[22rem]",
}: ProjectFlipCardProps) {
  const [previewLoaded, setPreviewLoaded] = useState(false);

  const linkProps = {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
  };

  return (
    <div
      className={`group h-full ${minHeight} [perspective:1600px]`}
      onMouseEnter={() => setPreviewLoaded(true)}
    >
      <div className="relative h-full w-full transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <Link
          {...linkProps}
          className="absolute inset-0 flex flex-col gap-4 h-full bg-paper border border-border rounded-card p-7 [backface-visibility:hidden]"
        >
          <div className="h-9 flex items-center">
            {logo ? (
              <div
                className={
                  logoOnDark
                    ? "relative h-9 w-32 bg-ink-950 rounded-md p-1.5"
                    : "relative h-9 w-32"
                }
              >
                <Image
                  src={logo}
                  alt={name}
                  fill
                  className="object-contain object-left"
                  unoptimized
                />
              </div>
            ) : (
              <span className="font-display text-2xl text-ink-950 uppercase">
                {name}
              </span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-ink-950 font-ui">
            {name}
          </h3>
          <p className="body-sm text-ink-600 flex-1">{description}</p>
          {footer}
        </Link>

        {/* Back — live preview */}
        <div className="absolute inset-0 h-full overflow-hidden rounded-card border border-border bg-ink-950 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {previewLoaded && (
            <iframe
              src={url}
              title={`${name} preview`}
              loading="lazy"
              tabIndex={-1}
              aria-hidden="true"
              className="pointer-events-none w-[400%] h-[400%] origin-top-left [transform:scale(0.25)] border-0"
            />
          )}
          <Link
            {...linkProps}
            className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-ink-950/95 via-ink-950/10 to-transparent"
          >
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold font-ui text-paper">
              <ExternalLink className="h-3.5 w-3.5" />
              Visit {name}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
