import { WhatsAppIcon } from "./WhatsAppIcon";

const WA_LINK =
  "https://wa.me/5564992042266?text=Ol%C3%A1,%20Tenho%20interesse%20na%20CNH,%20vim%20do%20Google!";

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

  return (
    <div className="flex flex-col items-center gap-2">
      <a
        id={resolvedTrackingId}
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
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
      </a>
      {micro && (
        <span className="text-sm text-muted-foreground max-w-xs text-center">
          {micro}
        </span>
      )}
    </div>
  );
};

export const FloatingWhatsApp = () => {
  return (
    <a
      id="floating-whatsapp-button"
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      data-gtm="whatsapp-float"
      data-gtm-id="floating-whatsapp-button"
      data-gtm-text="Falar no WhatsApp"
      data-testid="floating-whatsapp-button"
      title="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg animate-pulse-glow transition-transform hover:scale-110 active:scale-95 md:bottom-8 md:right-8"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
};
