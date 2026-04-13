import { Car, Bike, Truck, ArrowRightLeft, Layers } from "lucide-react";

const services = [
  { icon: Car, title: "Primeira Habilitação", desc: "Comece seu processo com orientação completa." },
  { icon: Bike, title: "Categoria A (Moto)", desc: "Habilitação para motocicleta com suporte em cada etapa." },
  { icon: Car, title: "Categoria B (Carro)", desc: "Tire sua CNH para veículos de passeio." },
  { icon: Layers, title: "Categoria AB", desc: "Habilite-se para carro e moto ao mesmo tempo." },
  { icon: ArrowRightLeft, title: "Mudança de Categoria", desc: "Evolua sua CNH com facilidade e agilidade." },
  { icon: Truck, title: "Categorias Profissionais até D", desc: "Amplie suas oportunidades de trabalho." },
];

export const ServicesSection = () => (
  <section className="py-14 md:py-20">
    <div className="container">
      <h2 className="text-center font-heading text-2xl font-bold md:text-3xl">
        Nossos serviços
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">
        Atendemos desde a primeira habilitação até categorias profissionais.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition-shadow hover:shadow-md"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-heading font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
