import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AppsGrid } from "@/components/apps-grid";
import { Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Apps | Gabriel Fragoso",
  description: "Every open-source project and app I ship, in one place.",
};

export default function AppsPage() {
  return (
    <main className="min-h-screen bg-paper text-ink-950">
      <Navbar />

      <div className="container mx-auto px-6 pt-40 pb-10">
        <div className="eyebrow mb-4">
          <Package className="h-3.5 w-3.5 mr-1.5" />
          Apps
        </div>
        <h1 className="heading-xl text-ink-950 uppercase mb-4">
          Stuff I&apos;ve built.
        </h1>
        <p className="body-lg text-ink-600 max-w-xl mb-10">
          Every open-source project and app I ship, in one place.
        </p>
      </div>

      <AppsGrid />

      <Footer />
    </main>
  );
}
