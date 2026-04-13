import { Quote } from "lucide-react";

const testimonials = [
  { text: "Excelente atendimento do começo ao fim. Me senti acolhida e bem orientada.", name: "Aluna da Auto Escola Vivo" },
  { text: "Fui muito bem orientada em cada etapa. O processo foi mais tranquilo do que eu imaginava.", name: "Aluna da Auto Escola Vivo" },
  { text: "Equipe atenciosa e processo bem organizado. Recomendo de olhos fechados!", name: "Aluno da Auto Escola Vivo" },
  { text: "Me senti segura desde o primeiro contato. Isso fez toda a diferença pra mim.", name: "Aluna da Auto Escola Vivo" },
];

export const TestimonialsSection = () => (
  <section className="bg-section-alt py-14 md:py-20">
    <div className="container">
      <h2 className="text-center font-heading text-2xl font-bold md:text-3xl">
        Quem passou por aqui recomenda
      </h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {testimonials.map(({ text, name }, i) => (
          <div
            key={i}
            className="rounded-lg bg-card p-6 shadow-sm border border-border"
          >
            <Quote className="mb-3 h-6 w-6 text-primary/40" />
            <p className="text-foreground italic">"{text}"</p>
            <span className="mt-3 block text-sm font-medium text-muted-foreground">
              — {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
