import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, TrendingUp, Users, Award } from "lucide-react";

const Rewards = () => {
  const partners = [
    {
      name: "ProLab",
      discount: "15% de desconto",
      description: "Exames laboratoriais (exceto toxicológico e paternidade)"
    },
    {
      name: "Dr. Aristófanes Rocha",
      discount: "10-15% de desconto",
      description: "Procedimentos estéticos avançados"
    },
    {
      name: "BlackFit",
      discount: "10% de desconto",
      description: "Produtos na loja"
    }
  ];

  const benefits = [
    {
      icon: <Gift className="h-8 w-8 text-primary" />,
      title: "Clube de Recompensas",
      description: "Programa 'Tá pago!' com vantagens exclusivas"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Descontos com Parceiros",
      description: "Benefícios em estabelecimentos parceiros"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "App de Treino",
      description: "Acesso ao aplicativo de treino e acompanhamento"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" id="beneficios">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6">
            Benefícios <span className="text-gradient">Exclusivos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ser aluno do Complexo Fitness vai muito além do treino
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="card-gradient border-border hover:glow-effect transition-smooth text-center">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Clube de Recompensas Card */}
        <Card className="card-gradient border-primary/30 mb-12">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="hero-gradient p-4 rounded-full">
                <Gift className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
            <CardTitle className="text-3xl font-heading">
              Clube de Recompensas <span className="text-gradient">"Tá pago!"</span>
            </CardTitle>
            <CardDescription className="text-base mt-4">
              Na Complexo Fitness, cada treino te aproxima de prêmios e vantagens exclusivas. 
              Troque seus Complexo Coins por consultas, sessões de fisioterapia, produtos da FitStore, 
              bebidas energéticas e mais.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Partners Section */}
        <div>
          <h3 className="text-3xl font-bold font-heading text-center mb-8">
            <span className="text-gradient">Parceiros</span> e Benefícios
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="card-gradient border-border hover:border-primary/50 transition-smooth">
                <CardHeader>
                  <CardTitle className="text-xl font-heading flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    {partner.name}
                  </CardTitle>
                  <div className="text-2xl font-bold text-primary mt-2">
                    {partner.discount}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;
