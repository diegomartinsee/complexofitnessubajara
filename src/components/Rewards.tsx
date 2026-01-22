import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
    },
    {
      name: "Terra Verde",
      discount: "10% de desconto",
      description: "Produtos na loja"
    }
  ];

  const benefits = [
    {
      icon: <Gift className="h-8 w-8 text-primary" />,
      title: "Clube de Recompensas",
      shortDescription: "Programa 'Tá pago!' com vantagens exclusivas",
      fullDescription: "Na Complexo Fitness, cada treino te aproxima de prêmios e vantagens exclusivas. Troque seus Complexo Coins por consultas, sessões de fisioterapia, produtos da FitStore, bebidas energéticas e muito mais."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Descontos com Parceiros",
      shortDescription: "Benefícios em estabelecimentos parceiros",
      fullDescription: "Desfrute de descontos exclusivos em ProLab (15% em exames laboratoriais), Dr. Aristófanes Rocha (10-15% em procedimentos estéticos), BlackFit (10% na loja) e muito mais."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "App de Treino",
      shortDescription: "Acesso ao aplicativo de treino e acompanhamento",
      fullDescription: "Tenha acesso ao nosso aplicativo exclusivo para acompanhar seus treinos, ver sua evolução, marcar consultas e gerenciar seus Complexo Coins de forma prática e intuitiva."
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

        {/* Benefits Accordion */}
        <Accordion type="single" collapsible className="w-full mb-16">
          {benefits.map((benefit, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg mb-4 card-gradient">
              <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                <div className="flex items-center gap-4 text-left w-full">
                  <div className="flex-shrink-0 group-hover:scale-110 transition-smooth">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.shortDescription}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-muted-foreground leading-relaxed pl-12">
                  {benefit.fullDescription}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

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
