import { SERVICES } from "@/lib/site";

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="py-24 bg-white border-t border-b border-border"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="eyebrow mb-4">Serviços</div>
          <h2
            id="services-title"
            className="heading-lg text-ink-950 max-w-2xl uppercase"
          >
            Desenvolvedor freelancer sob demanda.
          </h2>
          <p className="body-lg text-ink-600 max-w-2xl mt-5">
            Atuo como desenvolvedor full stack freelancer para empresas e
            empreendedores que precisam tirar um produto do papel, evoluir um
            sistema existente ou reforçar o time com tecnologia, sem contratar
            em tempo integral.
          </p>
        </div>

        <ul className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <li
              key={service.name}
              className="border border-border rounded-card p-7 bg-paper"
            >
              <h3 className="font-display text-2xl uppercase text-ink-950 mb-3">
                {service.name}
              </h3>
              <p className="body-md text-ink-600">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
