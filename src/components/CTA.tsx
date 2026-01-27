import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTA = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5588999735251', '_blank');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background" id="cta">
      <div className="max-w-4xl mx-auto">
        <div className="card-gradient border-primary/30 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
          {/* Background gradient effect */}
          <div className="absolute inset-0 hero-gradient opacity-10"></div>

          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6">
              Pronto para <span className="text-gradient">transformar sua vida</span>?
            </h2>

            <p className="text-xl text-muted-foreground mb-4">
              Não deixe para amanhã a mudança que você pode começar hoje.
            </p>

            <p className="text-lg text-foreground font-semibold mb-8">
              Agende agora mesmo uma visita e conheça toda nossa estrutura!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="hero-gradient hover:opacity-90 transition-smooth text-xl px-12 py-7 glow-effect font-bold group"
                onClick={handleWhatsAppClick}
              >
                Quero começar agora
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-xl px-12 py-7"
                onClick={handleWhatsAppClick}
              >
                <Phone className="mr-2 h-6 w-6" />
                (88) 99973-5251
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Sem taxa de matrícula</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Sem fidelidade</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Avaliação gratuita</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
