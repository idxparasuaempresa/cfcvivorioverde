import { Quote } from "lucide-react";

const testimonials = [
  { text: "Fiz minhas aulas com eles e amei! Consegui passar de primeira na prova pratica. As aulas foram excelentes meu instrutor conseguiu me ensinar tudo muito bem sendo que quando comecei eu nunca tinha dirigido na vida. A autosescola da Vivo também merece parabéns pela agilidade são muito eficazes", name: "Fernanda Balbino" },
  { text: "C.F.C VIVO top top top top, excelente qualidade magnífica, estou sem palavras pra expressar o quanto eu estou satisfeito com a minha aprendizagem com a C.F.C VIVO.", name: "Gleison Martins" },
  { text: "Melhor auto escola de rio verde estão sempre ajudando em questão de horários para quem é corrido como eu, e sempre preocupados para finalizar seu processo. Todos os instrutores foram 10 comigo super recomendo!!!", name: "Antonio Neto" },
  { text: "Auto escola vivo maravilhosa, super indico. Me apoiaram deis do inicio, meu instrutor e minha instrutora foram maravilhosos me deu todas as dicas possíveis, estiveram comigo no dia da prova me apoiando e torcendo por mim e pelos outros alunos. Parabéns a auto escola vivo por serem tão dedicados. 💛", name: "Gabriela Lima" },
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
