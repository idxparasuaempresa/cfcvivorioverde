import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como funciona o processo para tirar a CNH?",
    a: "O processo inclui exame médico, aulas teóricas, prova teórica, aulas práticas e exame prático. Na Auto Escola Vivo, orientamos você em cada etapa. Fale com a gente no WhatsApp para saber mais.",
  },
  {
    q: "Posso tirar dúvidas pelo WhatsApp?",
    a: "Sim! Nosso atendimento pelo WhatsApp é rápido e direto. Você pode perguntar sobre valores, documentação, etapas e tudo mais.",
  },
  {
    q: "Vocês atendem mudança de categoria?",
    a: "Sim, atendemos mudança de categoria, incluindo categorias profissionais até D. Entre em contato para mais detalhes.",
  },
  {
    q: "Como faço para consultar valores?",
    a: "É só chamar no WhatsApp! Respondemos rápido com todas as informações que você precisa.",
  },
  {
    q: "Onde fica a Auto Escola Vivo?",
    a: (<>Estamos na <a href="https://maps.google.com/?q=R.+Augusta+Bastos,+1894+-+Jardim+Goias,+Rio+Verde+-+GO,+75903-370" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:brightness-110">R. Augusta Bastos, 1894 - Jardim Goias, Rio Verde - GO, 75903-370</a>. Fale conosco pelo WhatsApp para horários de atendimento.</>),
  },
  {
    q: "Como iniciar meu processo?",
    a: "O primeiro passo é falar com a gente! Pelo WhatsApp, explicamos tudo o que você precisa para começar com tranquilidade.",
  },
];

export const FaqSection = () => (
  <section className="bg-section-alt py-14 md:py-20">
    <div className="container max-w-2xl">
      <h2 className="text-center font-heading text-2xl font-bold md:text-3xl">
        Perguntas frequentes
      </h2>
      <Accordion type="single" collapsible className="mt-8">
        {faqs.map(({ q, a }, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-left font-heading font-semibold">
              {q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
