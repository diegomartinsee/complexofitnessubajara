import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Users, Calendar } from "lucide-react";
import totalpassLogo from "@/assets/totalpass-logo.png";
import wellhubLogo from "@/assets/wellhub-logo.png";

const Plans = () => {
  const [activeTab, setActiveTab] = useState<'mensais' | 'fidelidade'>('fidelidade');

  const plans = [
    {
      name: "Mensal Standard",
      price: "129,90",
      period: "mês",
      description: "Flexibilidade total para sua rotina",
      category: 'mensais',
      features: [
        "Acesso em todos os horários",
        "Sem fidelidade",
        "Acesso completo à musculação",
        "Área funcional incluída",
        "Aplicativo de treino"
      ],
      popular: false
    },
    {
      name: "Mensal Horário Fixo",
      price: "110",
      period: "mês",
      description: "Economia para quem tem rotina definida",
      category: 'mensais',
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
      price: "123,40",
      period: "mês",
      description: "Flexibilidade total com parcelamento",
      category: 'fidelidade',
      features: [
        "Acesso em todos os horários",
        "Parcelamento em até 3x",
        "Valor total: R$ 370,20",
        "Até 15 dias de congelamento",
        "Equipamentos completos"
      ],
      popular: false
    },
    {
      name: "Semestral Standard",
      price: "116,90",
      period: "mês",
      description: "Compromisso de médio prazo",
      category: 'fidelidade',
      features: [
        "6 meses de acesso total",
        "Parcelamento em até 6x",
        "Valor total: R$ 701,40",
        "Desconto progressivo",
        "Até 20 dias de congelamento"
      ],
      popular: false
    },
    {
      name: "Anual Standard",
      price: "110,40",
      period: "mês",
      description: "Melhor custo-benefício para saúde",
      category: 'fidelidade',
      features: [
        "12 meses de acesso",
        "Parcelamento em até 12x",
        "Valor total: R$ 1.324,80",
        "Melhor valor mensal",
        "Até 30 dias de congelamento"
      ],
      popular: true
    }
  ];

  const filteredPlans = plans.filter(plan => plan.category === activeTab);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20 relative overflow-hidden" id="planos">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-gradient mb-6">Nossos Planos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Investir em você é o melhor negócio. Escolha o plano que mais combina com seu ritmo.
          </p>
        </div>

        {/* Custom Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-secondary p-1 rounded-xl flex items-center shadow-inner border border-border/50">
            <button
              onClick={() => setActiveTab('fidelidade')}
              className={`px-8 py-3 rounded-lg text-sm font-bold transition-smooth flex items-center gap-2 ${activeTab === 'fidelidade'
                  ? 'hero-gradient text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              <Calendar className="w-4 h-4" />
              Melhor Custo (Fidelidade)
            </button>
            <button
              onClick={() => setActiveTab('mensais')}
              className={`px-8 py-3 rounded-lg text-sm font-bold transition-smooth flex items-center gap-2 ${activeTab === 'mensais'
                  ? 'hero-gradient text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              Flexível (Mensal)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
          {filteredPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative card-gradient border transition-smooth hover:scale-[1.02] flex flex-col ${plan.popular
                ? 'border-primary/50 shadow-glow ring-1 ring-primary/20 lg:py-8'
                : 'border-border/50 hover:border-primary/30 min-h-[500px]'
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="hero-gradient text-primary-foreground px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-lg">
                    <Star className="h-3 w-3" />
                    Recomendado
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <CardTitle className="text-xl font-heading mb-4 tracking-tight">{plan.name}</CardTitle>
                <div className="flex flex-col items-center">
                  <div className="flex items-baseline">
                    <span className="text-sm font-bold text-muted-foreground mr-1">R$</span>
                    <span className={`font-black text-primary leading-none ${plan.popular ? 'text-6xl' : 'text-5xl'}`}>
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-muted-foreground text-sm font-medium mt-1">por {plan.period}</span>
                </div>
                <CardDescription className="text-sm mt-4 font-medium px-4">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-2 flex-grow flex flex-col">
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded-full mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-primary flex-shrink-0" />
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-6 text-base font-bold transition-smooth rounded-xl ${plan.popular
                    ? 'hero-gradient hover:opacity-90 glow-effect'
                    : 'bg-secondary hover:bg-secondary/80 text-foreground border border-border'
                    }`}
                  onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Começar agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ... (retaining opportunities and bonus cards but with refined styles) */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 opacity-90">
          {/* Simplified versions of bonus cards for cleaner look */}
          <div className="p-8 rounded-2xl bg-secondary/30 border border-primary/10 flex items-center gap-6">
            <div className="hero-gradient p-4 rounded-xl shadow-lg">
              <Users className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">Pacote Família</h4>
              <p className="text-sm text-primary font-bold">A partir de R$ 100,00/pessoa</p>
            </div>
          </div>
          <div className="p-8 rounded-2xl bg-secondary/30 border border-primary/10 flex items-center gap-6">
            <div className="hero-gradient p-4 rounded-xl shadow-lg">
              <Star className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">Pagamento à Vista</h4>
              <p className="text-sm text-primary font-bold">Ganhe 5% de desconto extra</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-20 pt-10 border-t border-border/50">
          <div className="mb-12">
            <h5 className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em] mb-8">Nossos Parceiros Acadêmicos</h5>
            <div className="flex justify-center items-center gap-12 flex-wrap grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-smooth">
              <img src={totalpassLogo} alt="TotalPass" className="h-7 w-auto" />
              <img src={wellhubLogo} alt="Wellhub" className="h-8 w-auto" />
            </div>
          </div>

          <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary transition-smooth" onClick={() => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' })}>
            Ainda tem dúvidas? Fale conosco
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Plans;
