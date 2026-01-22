import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, UserCheck, Calendar, Award, Baby } from "lucide-react";

const Guarantees = () => {
  const guarantees = [
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Sem Taxa de Matrícula",
      description: "Comece a treinar sem custos extras. Você paga apenas a mensalidade escolhida."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Liberdade de Escolha",
      description: "Planos flexíveis, benefícios exclusivos, estrutura completa e vantagens com parceiros para você treinar do seu jeito."
    },
    {
      icon: <UserCheck className="h-10 w-10 text-primary" />,
      title: "Avaliação Física Gratuita",
      description: "Análise completa do seu corpo e orientação personalizada na primeira visita."
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Horários Flexíveis",
      description: "Treine quando puder: de segunda a sexta das 5h30 às 22h, sábado das 6h às 12h e domingo das 8h às 12h."
    },
    {
      icon: <Baby className="h-10 w-10 text-primary" />,
      title: "Área Kids",
      description: "Treine enquanto seus filhos se divertem."
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Clube de Recompensas",
      description: "Ganhe benefícios exclusivos, descontos com parceiros e produtos gratuitos enquanto treina."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" id="garantias">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6">
            Por que escolher a <span className="text-gradient">Complexo Fitness</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Garantias e diferenciais que fazem toda a diferença na sua experiência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <Card key={index} className="card-gradient border-border hover:border-primary/50 transition-smooth">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="flex justify-center mb-4">
                  {guarantee.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{guarantee.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{guarantee.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantees;
