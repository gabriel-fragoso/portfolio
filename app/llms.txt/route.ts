import { APPS_URL, FAQ, PERSON, SERVICES, SITE_DESCRIPTION, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${PERSON.name}

> ${SITE_DESCRIPTION}

## Pages
- [Portfolio](${SITE_URL}): products, experience, stack and contact.
- [Apps](${APPS_URL}): products and apps built by ${PERSON.name}.

## Services
${SERVICES.map((s) => `- ${s.name}: ${s.description}`).join("\n")}

## FAQ
${FAQ.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Contact
- Email: ${PERSON.email}
- LinkedIn: ${PERSON.linkedin}
- GitHub: ${PERSON.github}
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
