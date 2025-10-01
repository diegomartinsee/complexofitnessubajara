import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Users } from "lucide-react";
import totalpassLogo from "@/assets/totalpass-logo.png";
import wellhubLogo from "@/assets/wellhub-logo.png";

const Plans = () => {
  const plans = [
    {
      name: "Mensal Standard",
      price: "R$ 129,90",
      period: "/mês", 
      description: "Flexibilidade total para sua rotina",
      features: [
        "Acesso em todos os horários",
        "Sem fidelidade",
        "Acesso completo à musculação",
        "Área funcional incluída",
        "Aplicativo de treino"
      ],
      popular: true
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
      description: "Flexibilidade total com parcelamento facilitado",
      features: [
        "Acesso em todos os horários",
        "Parcelamento em até 3x",
        "Valor total: R$ 370,20",
        "Flexibilidade de horários",
        "Equipamentos completos"
      ],
      popular: false
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
        "Acesso em todos os horários"
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
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6">
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
                <CardTitle className="text-2xl font-bold font-heading">{plan.name}</CardTitle>
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

        {/* Oportunidades e Bônus */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="card-gradient border-primary/30">
            <CardHeader>
              <CardTitle className="text-xl font-heading flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Pacote Família
              </CardTitle>
              <CardDescription>Desconto especial para famílias que treinam juntas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">2 a 3 pessoas da mesma família</p>
                    <p className="text-sm text-muted-foreground">R$ 116,90 / pessoa / mês</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">4 ou mais pessoas da mesma família</p>
                    <p className="text-sm text-muted-foreground">R$ 100,00 / pessoa / mês</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-gradient border-primary/30">
            <CardHeader>
              <CardTitle className="text-xl font-heading flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Pagamento à Vista
              </CardTitle>
              <CardDescription>Desconto especial para planos de longo prazo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Pagamento em dinheiro à vista</p>
                    <p className="text-sm text-muted-foreground">5% de desconto no valor total</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="mb-8">
            <h3 className="text-xl font-semibold font-heading mb-6">Também aceitamos:</h3>
            <div className="flex justify-center items-center gap-12 flex-wrap">
              <div className="flex items-center">
                <img 
                  src={totalpassLogo} 
                  alt="TotalPass" 
                  className="h-8 w-auto"
                />
              </div>
              <div className="flex items-center">
                <img 
                  src={wellhubLogo} 
                  alt="Wellhub" 
                  className="h-10 w-auto"
                />
              </div>
            </div>
          </div>
          
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