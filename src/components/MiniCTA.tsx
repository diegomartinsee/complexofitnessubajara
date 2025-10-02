import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const MiniCTA = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5588999999999"; // Número da academia
    const message = encodeURIComponent("Olá! Gostaria de conhecer os planos e benefícios da Complexo Fitness.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
          Pronto para começar sua <span className="text-gradient">transformação?</span>
        </h3>
        <p className="text-lg text-muted-foreground mb-8">
          Agende sua visita gratuita e conheça nossa estrutura completa
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="hero-gradient hover:opacity-90 transition-smooth glow-effect font-semibold"
            onClick={handleWhatsAppClick}
          >
            Agendar visita gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth font-semibold"
            onClick={handleWhatsAppClick}
          >
            <Phone className="mr-2 h-5 w-5" />
            (88) 9 9999-9999
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MiniCTA;
