import { APPS_URL, PERSON, SITE_URL } from "@/lib/site";
import { content } from "@/lib/content";

export const dynamic = "force-static";

export function GET() {
  const t = content.en;
  const body = `# ${PERSON.name}

> ${t.meta.description}

## Pages
- [Portfolio (English)](${SITE_URL}): selected work, experience, stack and contact.
- [Portfólio (Português)](${SITE_URL}/pt): the same content in Brazilian Portuguese.
- [Apps](${APPS_URL}): products and apps built by ${PERSON.name}.
- [CV (PDF)](${SITE_URL}/curriculo-en.pdf)

## Selected work
${t.work.cases.map((c) => `- ${c.name} (${c.role}, ${c.period}): ${c.summary}`).join("\n")}

## Experience
${t.experience.entries
  .flatMap((e) => e.roles.map((r) => `- ${r.title}, ${e.company} (${r.period})`))
  .join("\n")}

## Stack
${t.stack.groups.map((g) => `- ${g.name}: ${g.items.join(", ")}`).join("\n")}

## FAQ
${t.faq.items.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Contact
- Email: ${PERSON.email}
- LinkedIn: ${PERSON.linkedin}
- GitHub: ${PERSON.github}
- Instagram: ${PERSON.instagram}
- WhatsApp: ${PERSON.whatsapp}
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
