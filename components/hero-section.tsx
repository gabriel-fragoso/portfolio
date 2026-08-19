"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code2, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-20"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="eyebrow"
              >
                <Code2 className="h-3.5 w-3.5 mr-1.5" />
                Full-Stack Developer
              </motion.div>

              <motion.h1
                className="heading-xl text-ink-950 mt-6 uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Product and code,
                <br />
                from zero to production.
              </motion.h1>

              <motion.p
                className="mt-6 body-lg text-ink-600 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Co-founder and Head of Product &amp; Design at Doveon. I build
                interfaces and systems for products like Vai Anotando and
                Feedget, from first draft to launch, across Brazil, the US,
                and Spain.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Button asChild size="lg" className="px-6">
                <Link href="#products">See products</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-6">
                <Link href="#contact">Get in touch</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative mx-auto w-full"
          >
            <div className="relative w-full max-w-md aspect-square mx-auto">
              <Image
                src="/placeholder-user.png"
                alt="Gabriel Fragoso"
                fill
                className="rounded-surface object-cover shadow-md"
              />

              <div className="absolute -bottom-6 -left-6 bg-white border border-border rounded-card shadow-md px-5 py-3.5 flex items-center gap-2.5 font-ui text-sm font-semibold text-ink-950">
                <MapPin className="h-3.5 w-3.5 text-coral-500" />
                Brazil · US · Spain
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
