import { useState } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { LeadCaptureModal } from "./LeadCaptureModal";

const WA_LINK =
  "https://wa.me/556492042266?text=Ol%C3%A1,%20tenho%20interesse%20em%20organizar%20minha%20CNH,%20vim%20do%20Google1";

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
}: WhatsAppButtonProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={() => setModalOpen(true)}
        className={`inline-flex items-center gap-2.5 rounded-lg bg-whatsapp font-heading font-bold text-whatsapp-foreground transition-all hover:brightness-110 active:scale-95 ${
          size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3.5 text-base"
        } ${className}`}
      >
        <WhatsAppIcon className="h-5 w-5" />
        {text}
      </button>
      {micro && (
        <span className="text-sm text-muted-foreground max-w-xs text-center">
          {micro}
        </span>
      )}
      <LeadCaptureModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
};

export const FloatingWhatsApp = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg animate-pulse-glow transition-transform hover:scale-110 active:scale-95 md:bottom-8 md:right-8"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </button>
      <LeadCaptureModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};
