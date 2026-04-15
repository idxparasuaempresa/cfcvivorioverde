import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WA_LINK =
  "https://wa.me/556492042266?text=Ol%C3%A1,%20tenho%20interesse%20em%20organizar%20minha%20CNH,%20vim%20do%20Google1";

interface LeadCaptureModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const openWhatsApp = (popup: Window | null) => {
  if (popup) {
    popup.location.href = WA_LINK;
    return;
  }

  window.location.href = WA_LINK;
};

export const LeadCaptureModal = ({ open, onOpenChange }: LeadCaptureModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const popup = window.open("", "_blank", "noopener,noreferrer");

    setSubmitting(true);

    // Push lead event to GTM dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "lead_whatsapp",
      lead_name: name.trim(),
      lead_phone: phone.trim(),
      lead_source: "whatsapp_cta",
      lead_timestamp: new Date().toISOString(),
    });

    // Small delay to ensure dataLayer push is processed
    setTimeout(() => {
      setSubmitting(false);
      setName("");
      setPhone("");
      onOpenChange(false);
      openWhatsApp(popup);
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl text-center">
            Antes de falar com a gente…
          </DialogTitle>
          <DialogDescription className="text-center">
            Preencha seus dados para agilizar seu atendimento no WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="lead-name">Seu nome</Label>
            <Input
              id="lead-name"
              placeholder="Ex: Maria Silva"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              maxLength={100}
              autoFocus
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lead-phone">Seu telefone</Label>
            <Input
              id="lead-phone"
              type="tel"
              placeholder="(64) 99999-9999"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              maxLength={20}
            />
          </div>

          <Button
            type="submit"
            disabled={submitting || !name.trim() || !phone.trim()}
            className="w-full gap-2 bg-whatsapp text-whatsapp-foreground hover:brightness-110"
            size="lg"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {submitting ? "Enviando…" : "Continuar para o WhatsApp"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Seus dados são usados apenas para contato. Não compartilhamos com terceiros.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
