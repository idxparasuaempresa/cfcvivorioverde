import { Building2, Heart, FileText, MessageCircle, Award, GraduationCap } from "lucide-react";

const items = [
  { icon: Building2, text: "Empresa local em Rio Verde" },
  { icon: Heart, text: "Atendimento humanizado" },
  { icon: FileText, text: "Processo explicado com clareza" },
  { icon: MessageCircle, text: "Suporte rápido via WhatsApp" },
  { icon: Award, text: "Estrutura profissional" },
  { icon: GraduationCap, text: "Foco na experiência do aluno" },
];

export const AuthoritySection = () => (
  <section className="py-14 md:py-20">
    <div className="container max-w-3xl text-center">
      <h2 className="font-heading text-2xl font-bold md:text-3xl">
        Confiança que você pode sentir
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
        Quem chega até a Auto Escola Vivo busca mais do que preço: busca
        confiança para fazer o processo com mais tranquilidade.
      </p>
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {items.map(({ icon: Icon, text }) => (
          <div key={text} className="flex flex-col items-center gap-2 rounded-lg bg-secondary p-4">
            <Icon className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground text-center">{text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
