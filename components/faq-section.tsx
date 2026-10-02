import { FAQ } from "@/lib/site";

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="py-24 border-t border-border"
    >
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="eyebrow mb-4">FAQ</div>
        <h2
          id="faq-title"
          className="heading-lg text-ink-950 uppercase mb-10"
        >
          Perguntas frequentes.
        </h2>
        <div className="flex flex-col">
          {FAQ.map((item, i) => (
            <details
              key={item.q}
              className={`group py-5 border-t border-border ${
                i === FAQ.length - 1 ? "border-b" : ""
              }`}
            >
              <summary className="cursor-pointer list-none font-ui font-semibold text-ink-950 flex justify-between gap-4">
                <h3 className="text-base font-semibold">{item.q}</h3>
                <span className="text-coral-500 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="body-md text-ink-600 mt-3">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
