import { useState } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { LeadCaptureModal } from "./LeadCaptureModal";

const slugify = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

interface WhatsAppButtonProps {
  text?: string;
  micro?: string;
  size?: "default" | "lg";
  className?: string;
  trackingId?: string;
  trackingLabel?: string;
}

export const WhatsAppButton = ({
  text = "Falar no WhatsApp",
  micro,
  size = "default",
  className = "",
  trackingId,
  trackingLabel,
}: WhatsAppButtonProps) => {
  const resolvedTrackingId = trackingId ?? `whatsapp-${slugify(text)}`;
  const resolvedTrackingLabel = trackingLabel ?? text;
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        id={resolvedTrackingId}
        onClick={() => setOpen(true)}
        data-gtm="whatsapp-cta"
        data-gtm-id={resolvedTrackingId}
        data-gtm-text={resolvedTrackingLabel}
        data-testid={resolvedTrackingId}
        title={resolvedTrackingLabel}
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
      <LeadCaptureModal open={open} onOpenChange={setOpen} />
    </div>
  );
};

export const FloatingWhatsApp = () => {
  const floatingTrackingId = "botão-flutuante-do-whatsapp";
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        id={floatingTrackingId}
        onClick={() => setOpen(true)}
        aria-label="Falar no WhatsApp"
        data-gtm="whatsapp-float"
        data-gtm-id={floatingTrackingId}
        data-gtm-text="Falar no WhatsApp"
        data-testid={floatingTrackingId}
        title="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg animate-pulse-glow transition-transform hover:scale-110 active:scale-95 md:bottom-8 md:right-8"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </button>
      <LeadCaptureModal open={open} onOpenChange={setOpen} />
    </>
  );
};
