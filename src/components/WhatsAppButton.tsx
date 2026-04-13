import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/5564992042266";

interface WhatsAppButtonProps {
  text?: string;
  micro?: string;
  size?: "default" | "lg";
  className?: string;
}

export const WhatsAppButton = ({
  text = "Falar no WhatsApp",
  micro,
  size = "default",
  className = "",
}: WhatsAppButtonProps) => (
  <div className="flex flex-col items-center gap-2">
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 rounded-lg bg-whatsapp font-heading font-bold text-whatsapp-foreground transition-all hover:brightness-110 active:scale-95 ${
        size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3.5 text-base"
      } ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      {text}
    </a>
    {micro && (
      <span className="text-sm text-muted-foreground max-w-xs text-center">
        {micro}
      </span>
    )}
  </div>
);

export const FloatingWhatsApp = () => (
  <a
    href={WA_LINK}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg animate-pulse-glow transition-transform hover:scale-110 active:scale-95 md:bottom-8 md:right-8"
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);
