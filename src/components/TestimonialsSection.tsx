import { Quote } from "lucide-react";

const testimonials = [
  { text: "Fiz minhas aulas com eles e amei! Consegui passar de primeira na prova pratica. As aulas foram excelentes meu instrutor conseguiu me ensinar tudo muito bem sendo que quando comecei eu nunca tinha dirigido na vida. A autosescola da Vivo também merece parabéns pela agilidade são muito eficazes", name: "Fernanda Balbino" },
  { text: "Autoescola Top de verdade ! Muito organizada, equipe de atendimento nota 1000 - agilidade - carros novos - instrutores que além de profissionais se tornam amigos ! Só elogios e gratidão por ter tido a oportunidade de passar por aqui. Pode vim que aqui você vai ser muito bem recebido e ter tudo resolvido.", name: "Giovanna Martins" },
  { text: "Desde o primeiro atendimento até a finalização do processo, fui muito bem acolhida e orientada por toda a equipe.", name: "Aluna da Auto Escola Vivo" },
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
