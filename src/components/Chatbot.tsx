import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "5588999735251";
    const message = encodeURIComponent("Olá! Gostaria de conhecer a Complexo Fitness e saber mais sobre os planos.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <div className="chatbot-floating">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-16 h-16 hero-gradient hover:opacity-90 transition-smooth glow-effect animate-pulse-glow"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 max-w-[90vw] z-50">
          <Card className="card-gradient border-primary shadow-2xl">
            <CardHeader className="hero-gradient text-primary-foreground rounded-t-lg">
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Fale Conosco
              </CardTitle>
            </CardHeader>

            <CardContent className="p-6 space-y-4">
              <p className="text-sm text-foreground">
                Olá! Para tirar dúvidas, saber valores ou fazer sua matrícula, fale diretamente com nossa recepção pelo WhatsApp.
              </p>

              <Button
                onClick={handleWhatsAppClick}
                className="w-full hero-gradient hover:opacity-90"
              >
                Conversar no WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;