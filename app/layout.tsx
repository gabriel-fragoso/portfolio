import type React from "react";
import type { Metadata } from "next";
import { Antonio, Fustat, Poppins, Inconsolata } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";

// Condensed display face for big, punchy headlines
const antonio = Antonio({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Humanist body face for reading
const fustat = Fustat({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Geometric UI face for buttons/labels/chrome
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Monospace for anything data-like
const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gabriel Fragoso | Full Stack Developer",
  description:
    "Portfolio pessoal de Gabriel Fragoso, Desenvolvedor Full Stack com experiência em React, Next.js, Node.js e mais.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${antonio.variable} ${fustat.variable} ${poppins.variable} ${inconsolata.variable} font-sans antialiased`}
      >
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}

import "./globals.css";
