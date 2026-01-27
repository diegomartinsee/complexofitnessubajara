import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-gym.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="mb-8 reveal">
          <span className="text-secondary-foreground opacity-50 block text-2xl sm:text-3xl font-body font-bold mb-4 tracking-normal uppercase">Bem-vindo à Melhor de Ubajara</span>
          <span className="text-gradient">Complexo Fitness</span>
          <br />
          <span className="text-foreground">Ubajara</span>
        </h1>

        <p className="text-xl sm:text-2xl font-medium text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed reveal">
          Equipamentos premium, profissionais dedicados e o melhor ambiente para sua transformação.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center reveal">
          <Button
            size="lg"
            className="hero-gradient hover:opacity-90 transition-smooth text-lg px-12 py-7 glow-effect font-bold rounded-2xl"
            onClick={() => document.querySelector('#planos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Escolher meu plano
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-foreground hover:bg-white/5 transition-smooth text-lg px-12 py-7 font-bold border border-white/10 rounded-2xl"
            onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explorar serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;