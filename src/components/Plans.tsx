import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Plans = () => {
  const plans = [
    {
      name: "Mensal",
      price: "R$ 89",
      period: "/mês",
      description: "Perfeito para começar sua jornada fitness",
      features: [
        "Acesso completo à academia",
        "Horário: 24h",
        "Área de musculação",
        "Área de cardio",
        "1 avaliação física gratuita"
      ],
      popular: false
    },
    {
      name: "Trimestral",
      price: "R$ 69",
      period: "/mês",
      description: "Nosso plano mais popular com melhor custo-benefício",
      features: [
        "Tudo do plano mensal",
        "3 avaliações físicas",
        "Acesso às aulas em grupo",
        "Desconto em suplementos",
        "App exclusivo de treinos",
        "Suporte nutricional básico"
      ],
      popular: true
    },
    {
      name: "Anual",
      price: "R$ 59",
      period: "/mês",
      description: "Máximo valor para quem leva o treino a sério",
      features: [
        "Tudo do plano trimestral",
        "Personal trainer 2x/semana",
        "Avaliações mensais",
        "Plano nutricional completo",
        "Acesso prioritário aos equipamentos",
        "Zona VIP de descanso",
        "2 meses grátis no ano"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" id="planos">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Escolha seu <span className="text-gradient">Plano</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Planos flexíveis que se adaptam ao seu estilo de vida e objetivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative card-gradient border transition-smooth hover:glow-effect ${
                plan.popular 
                  ? 'border-primary shadow-glow scale-105' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="hero-gradient text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    Mais Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
                <CardDescription className="text-base mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-6">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full transition-smooth ${
                    plan.popular 
                      ? 'hero-gradient hover:opacity-90 glow-effect' 
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                  size="lg"
                >
                  Começar agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Não tem certeza qual plano escolher?
          </p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Fale com nosso consultor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Plans;