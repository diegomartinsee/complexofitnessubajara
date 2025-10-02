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
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold font-heading mb-8 leading-tight">
          <span className="text-gradient">Complexo Fitness</span>
          <br />
          <span className="text-foreground">Ubajara</span>
        </h1>
        
        <p className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
          A sua academia completa no coração de Ubajara
        </p>
        
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          Equipamentos de última geração, profissionais qualificados, Área Kids e horários flexíveis. 
          Um espaço dedicado ao seu bem-estar e qualidade de vida.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="hero-gradient hover:opacity-90 transition-smooth text-lg px-10 py-6 glow-effect font-bold"
            onClick={() => document.querySelector('#planos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conheça nossos planos
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-lg px-10 py-6"
            onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Agende uma visita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;