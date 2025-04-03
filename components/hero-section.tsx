"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function HeroSection() {
  const { t, language } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Advanced particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      pulse: boolean;
      pulseSpeed: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 12000);

      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 2 + 0.5;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          speedX: Math.random() * 0.3 - 0.15,
          speedY: Math.random() * 0.3 - 0.15,
          color: `rgba(${Math.floor(Math.random() * 50 + 50)}, ${Math.floor(
            Math.random() * 100 + 100
          )}, ${Math.floor(Math.random() * 150 + 150)}`,
          opacity: Math.random() * 0.5 + 0.2,
          pulse: Math.random() > 0.5,
          pulseSpeed: Math.random() * 0.01 + 0.005,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        if (particle.pulse) {
          particle.opacity += particle.pulseSpeed;
          if (particle.opacity > 0.7 || particle.opacity < 0.2) {
            particle.pulseSpeed = -particle.pulseSpeed;
          }
        }

        ctx.fillStyle = `${particle.color}, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Connect particles that are close to each other
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 149, 237, ${
              0.1 * (1 - distance / 100)
            })`;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY;
        }
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  function handleDownloadCV() {
    const link = document.createElement("a");
    link.href = `/curriculo-${language}.pdf`;
    link.download = `curriculo-${language}.pdf`;
    link.click();
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-20"
    >
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-900/30 border border-blue-800/30 text-blue-400 text-sm font-medium"
              >
                Full Stack Developer
              </motion.div>

              <motion.h1
                className="heading-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                  {t("hero.title")}
                </span>
              </motion.h1>

              <motion.p
                className="mt-6 body-lg text-gray-300 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {t("hero.subtitle")}
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 rounded-full px-6">
                {t("hero.projects")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={handleDownloadCV}
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 rounded-full px-6"
              >
                {t("hero.cv")} <Download className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-4 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Link
                href="https://github.com/gabriel-fragoso"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-gray-800 hover:text-blue-400 transition-all"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://linkedin.com/in/gabriel-fragoso"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-gray-800 hover:text-blue-400 transition-all"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative mx-auto"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 rounded-full blur-3xl opacity-50"></div>
              <div className="relative bg-gradient-to-r from-blue-600/5 to-indigo-600/5 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-6 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
                <Image
                  src="/placeholder-user.png"
                  alt="Gabriel Fragoso"
                  width={500}
                  height={500}
                  className="rounded-2xl object-cover"
                />

                <div className="absolute -bottom-6 -right-6 bg-gray-900/90 backdrop-blur-sm rounded-lg p-5 shadow-lg border border-gray-800/50 transform rotate-2">
                  <code className="text-xs sm:text-sm font-mono">
                    <span className="text-pink-400">const</span>{" "}
                    <span className="text-green-400">developer</span>{" "}
                    <span className="text-white">=</span> {"{"}
                    <br />
                    &nbsp;&nbsp;<span className="text-purple-400">name</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-yellow-300">'Gabriel Fragoso'</span>,
                    <br />
                    &nbsp;&nbsp;<span className="text-purple-400">skills</span>
                    <span className="text-white">:</span> [
                    <span className="text-yellow-300">'Full Stack'</span>,{" "}
                    <span className="text-yellow-300">'React'</span>,{" "}
                    <span className="text-yellow-300">'Node.js'</span>
                    ],
                    <br />
                    &nbsp;&nbsp;<span className="text-purple-400">passion</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-yellow-300">
                      'Building amazing UIs'
                    </span>
                    <br />
                    {"}"};
                  </code>
                </div>

                <div className="absolute top-8 -left-12 bg-blue-900/20 backdrop-blur-sm rounded-full p-2 shadow-lg border border-blue-800/30 animate-pulse">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">3+</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            duration: 0.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
        <span className="text-xs text-gray-400 mt-2">Scroll</span>
      </div>
    </section>
  );
}
