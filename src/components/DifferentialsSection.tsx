import { WhatsAppButton } from "./WhatsAppButton";
import {
  Zap,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Users,
  ThumbsUp,
  Clock,
  Star,
} from "lucide-react";

const items = [
  { icon: Zap, title: "Agilidade no processo", desc: "Menos burocracia e mais eficiência em cada etapa." },
  { icon: HeartHandshake, title: "Atendimento atencioso", desc: "Equipe que ouve, orienta e acompanha você de verdade." },
  { icon: MapPin, title: "Orientação clara", desc: "Você sabe exatamente o que fazer em cada passo." },
  { icon: ShieldCheck, title: "Credibilidade local", desc: "Empresa reconhecida em Rio Verde pela qualidade." },
  { icon: Clock, title: "Acompanhamento próximo", desc: "Suporte contínuo do início ao fim do processo." },
  { icon: Users, title: "Bem recomendada", desc: "Indicação forte de quem já passou por aqui." },
  { icon: ThumbsUp, title: "Mais comodidade", desc: "Processos pensados para facilitar sua rotina." },
  { icon: Star, title: "Custo-benefício real", desc: "Foco em qualidade e resultado, não apenas em preço." },
];

export const DifferentialsSection = () => (
  <section className="py-14 md:py-20">
    <div className="container">
      <h2 className="text-center font-heading text-2xl font-bold md:text-3xl">
        Por que a Auto Escola Vivo é diferente?
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
        Mais do que uma autoescola, somos parceiros no seu processo de
        habilitação.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-lg border border-border bg-card p-5 text-center transition-shadow hover:shadow-md"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-heading font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <WhatsAppButton
          text="Tire suas dúvidas agora"
          trackingId="differentials-whatsapp-button"
          trackingLabel="Tire suas dúvidas agora"
        />
      </div>
    </div>
  </section>
);
