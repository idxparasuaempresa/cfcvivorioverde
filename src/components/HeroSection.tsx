import { WhatsAppButton } from "./WhatsAppButton";
import heroImg from "@/assets/hero-driving.jpg";

export const HeroSection = () => (
  <section className="relative overflow-hidden bg-hero text-hero-foreground">
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Aluna sorrindo ao volante na Auto Escola Vivo"
        className="h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-hero/80 to-hero/95" />
    </div>
    <div className="container relative z-10 flex flex-col items-center py-16 text-center md:py-24 lg:py-32">
      <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground">
        Auto Escola em Rio Verde - GO
      </span>
      <h1 className="font-heading text-3xl font-extrabold leading-tight text-balance md:text-5xl lg:text-6xl max-w-3xl">
        Tire sua CNH com mais agilidade e atendimento de verdade em Rio Verde
      </h1>
      <p className="mt-5 max-w-xl text-lg text-hero-foreground/80 md:text-xl">
        Na Auto Escola Vivo, você conta com atendimento rápido, orientação clara
        e um processo mais organizado para conquistar sua habilitação com
        tranquilidade.
      </p>
      <div className="mt-8">
        <WhatsAppButton
          size="lg"
          trackingId="botão-hero-whatsapp"
          trackingLabel="Hero WhatsApp"
          micro="Atendimento rápido para tirar dúvidas, consultar valores e iniciar seu processo."
        />
      </div>
    </div>
  </section>
);
