import { WhatsAppButton } from "./WhatsAppButton";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Atendimento rápido e humanizado via WhatsApp",
  "Processo explicado passo a passo, sem surpresas",
  "Acompanhamento real do início ao fim",
  "Estrutura profissional e organizada",
  "Foco na sua experiência, não só no preço",
];

export const WhyChooseSection = () => (
  <section className="bg-section-alt py-14 md:py-20">
    <div className="container max-w-3xl">
      <h2 className="text-center font-heading text-2xl font-bold md:text-3xl">
        Escolher bem faz toda a diferença
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
        Nem sempre o mais barato sai mais leve no fim. Quem busca uma autoescola
        organizada, com atendimento rápido e acompanhamento real, percebe a
        diferença no processo.
      </p>
      <ul className="mt-8 space-y-3">
        {points.map((p) => (
          <li key={p} className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
            <span className="font-medium">{p}</span>
          </li>
        ))}
      </ul>
      <div className="mt-10 text-center">
        <WhatsAppButton text="Agendar atendimento" />
      </div>
    </div>
  </section>
);
