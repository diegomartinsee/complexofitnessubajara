import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Zap, Heart, Trophy, Sparkles, Brain, Shield } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Mais Energia no Dia a Dia",
      description: "Sinta-se mais disposto para trabalhar, estudar e aproveitar a vida com sua família."
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Saúde em Primeiro Lugar",
      description: "Previna doenças, melhore sua qualidade de vida e durma melhor com uma rotina de exercícios."
    },
    {
      icon: <Trophy className="h-12 w-12" />,
      title: "Desempenho Físico Superior",
      description: "Ganhe força, resistência e condicionamento. Supere seus limites a cada treino."
    },
    {
      icon: <Sparkles className="h-12 w-12" />,
      title: "Autoestima Elevada",
      description: "Veja seu corpo transformar e sinta-se mais confiante em todas as áreas da sua vida."
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: "Bem-estar Mental",
      description: "Reduza o estresse, melhore o foco e a concentração através do exercício físico regular."
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Resultados Garantidos",
      description: "Com acompanhamento profissional e equipamentos de qualidade, seus objetivos se tornam realidade."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" id="beneficios">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6">
            Os resultados que você vai <span className="text-gradient">conquistar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Muito além da estética: transforme sua saúde, energia e qualidade de vida
          </p>
        </div>

        <TooltipProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Tooltip key={index} delayDuration={200}>
                <TooltipTrigger asChild>
                  <Card 
                    className="card-gradient border-border hover:border-primary/50 hover:glow-effect transition-smooth group cursor-pointer"
                  >
                    <CardContent className="pt-8 pb-6 text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full hero-gradient mb-4 group-hover:scale-110 transition-smooth">
                        <div className="text-primary-foreground">
                          {benefit.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                    </CardContent>
                  </Card>
                </TooltipTrigger>
                <TooltipContent 
                  side="top" 
                  className="max-w-xs p-4 bg-foreground text-background border-border"
                >
                  <p className="text-sm leading-relaxed">{benefit.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default Benefits;
