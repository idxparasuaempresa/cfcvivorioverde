import { CircleAlert } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const pains = [
  "Cansada de depender de carona?",
  "Com medo de escolher uma autoescola e ter dor de cabeça?",
  "Quer tirar sua CNH, mas não sabe por onde começar?",
  "Procurando uma autoescola com atendimento claro e rápido?",
  "Quer resolver isso com mais segurança e menos enrolação?",
];

export const PainPointsSection = () => (
  <section className="bg-section-alt py-14 md:py-20">
    <div className="container max-w-3xl text-center">
      <h2 className="font-heading text-2xl font-bold md:text-3xl">
        Você se identifica com alguma dessas situações?
      </h2>
      <ul className="mt-8 grid gap-4 text-left sm:grid-cols-2">
        {pains.map((p) => (
          <li
            key={p}
            className="flex items-start gap-3 rounded-lg bg-card p-4 shadow-sm"
          >
            <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <span className="text-foreground font-medium">{p}</span>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <WhatsAppButton
          text="Quero meu orçamento"
          trackingId="botão-whatsapp-pontos-de-dor"
          trackingLabel="Quero meu orçamento"
        />
      </div>
    </div>
  </section>
);
