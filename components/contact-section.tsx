"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, MessageSquare, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/lib/language-context";
import { useToast } from "@/components/ui/use-toast";

export function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: formState.name,
          email: formState.email,
          message: formState.message,
          phoneNumber: formState.phoneNumber || "Não informado",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao enviar mensagem");
      }

      toast({
        title: "Mensagem enviada",
        description: "Sua mensagem foi enviada com sucesso.",
        variant: "default",
      });

      setFormState({ name: "", email: "", message: "", phoneNumber: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Erro",
        description:
          error instanceof Error
            ? error.message
            : "Ocorreu um erro ao enviar sua mensagem",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900 to-transparent z-10"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-900/30 border border-blue-800/30 text-blue-400 text-sm font-medium"
          >
            {t("contact.subtitle")}
          </motion.div>
          <h2 className="heading-lg">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              {t("contact.title")}
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="heading-md">{t("contact.subtitle")}</h3>
            <p className="body-lg text-gray-300">{t("contact.description")}</p>

            <div className="space-y-6 pt-4">
              <motion.div
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 p-3 rounded-full border border-blue-800/20 group-hover:from-blue-800/40 group-hover:to-indigo-800/40 transition-colors">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{t("contact.email")}</p>
                  <a
                    href="mailto:fragosooliveira773@gmail.com"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    fragosooliveira773@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 p-3 rounded-full border border-blue-800/20 group-hover:from-blue-800/40 group-hover:to-indigo-800/40 transition-colors">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{t("contact.phone")}</p>
                  <a
                    href="tel:+5583998304284"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    +55 83 99830-4284
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="relative mt-12 pt-12">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-blue-600/50 via-indigo-600/50 to-transparent"></div>
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-900/30 rounded-full p-2">
                    <MessageSquare className="h-5 w-5 text-blue-400" />
                  </div>
                  <h4 className="font-medium">Let's connect</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  Follow me on GitHub and LinkedIn to see my latest projects and
                  connect professionally.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 shadow-xl"
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-200">
                  {t("contact.form.name")}
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder={t("contact.form.name.placeholder")}
                  required
                  className="bg-gray-800/50 border-gray-700 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200">
                  {t("contact.form.email")}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder={t("contact.form.email.placeholder")}
                  required
                  className="bg-gray-800/50 border-gray-700 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-gray-200">
                  {t("contact.form.phone")}
                </Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  value={formState.phoneNumber}
                  onChange={handleChange}
                  placeholder={t("contact.form.phone.placeholder")}
                  className="bg-gray-800/50 border-gray-700 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-200">
                  {t("contact.form.message")}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder={t("contact.form.message.placeholder")}
                  rows={5}
                  required
                  className="bg-gray-800/50 border-gray-700 resize-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all duration-300"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 rounded-full py-6"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t("contact.form.submitting")}
                  </>
                ) : (
                  <>
                    {t("contact.form.submit")}
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
