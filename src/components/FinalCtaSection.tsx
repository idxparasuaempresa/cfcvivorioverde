import { WhatsAppButton } from "./WhatsAppButton";

export const FinalCtaSection = () => (
  <section className="bg-hero py-16 text-hero-foreground md:py-24">
    <div className="container max-w-2xl text-center">
      <h2 className="font-heading text-2xl font-extrabold md:text-4xl">
        Fale agora com a Auto Escola Vivo e tire suas dúvidas no WhatsApp
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-hero-foreground/80 md:text-lg">
        Consulte valores, entenda o processo e receba atendimento rápido para
        começar sua habilitação com mais segurança.
      </p>
      <div className="mt-8">
        <WhatsAppButton
          text="Chamar no WhatsApp"
          size="lg"
          className="animate-pulse-glow"
        />
      </div>
    </div>
  </section>
);
