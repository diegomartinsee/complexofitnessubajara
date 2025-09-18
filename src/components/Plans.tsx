import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Plans = () => {
  const plans = [
    {
      name: "Diária",
      price: "R$ 20",
      period: "/dia",
      description: "Perfeito para experimentar nossa estrutura",
      features: [
        "Acesso completo à musculação",
        "Equipamentos de última geração", 
        "Ambiente climatizado",
        "Sem compromisso mensal"
      ],
      popular: false
    },
    {
      name: "Semanal", 
      price: "R$ 50",
      period: "/semana",
      description: "Ideal para visitantes ou teste prolongado",
      features: [
        "Acesso completo à academia",
        "7 dias corridos de acesso",
        "Horário flexível 24h",
        "Área de musculação e cardio"
      ],
      popular: false
    },
    {
      name: "Mensal Horário Fixo",
      price: "R$ 110",
      period: "/mês", 
      description: "Economia para quem tem rotina definida",
      features: [
        "Entrada entre 9h e 14h",
        "Permanência livre após entrada",
        "Acesso completo à musculação",
        "Taxa R$10 para horário extra"
      ],
      popular: false
    },
    {
      name: "Trimestral Standard",
      price: "R$ 123,40",
      period: "/mês",
      description: "Nosso plano mais popular com flexibilidade total",
      features: [
        "Acesso livre 24h",
        "Parcelamento em até 3x",
        "Valor total: R$ 370,20",
        "Flexibilidade de horários",
        "Equipamentos completos"
      ],
      popular: true
    },
    {
      name: "Semestral Standard", 
      price: "R$ 116,90",
      period: "/mês",
      description: "Compromisso de médio prazo com desconto",
      features: [
        "6 meses de acesso total",
        "Parcelamento em até 6x", 
        "Valor total: R$ 701,40",
        "Desconto progressivo",
        "Acesso livre 24h"
      ],
      popular: false
    },
    {
      name: "Anual Standard",
      price: "R$ 110,40", 
      period: "/mês",
      description: "Melhor custo-benefício para comprometidos",
      features: [
        "12 meses de acesso",
        "Parcelamento em até 12x",
        "Valor total: R$ 1.324,80", 
        "Melhor valor mensal",
        "Investimento na sua saúde"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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