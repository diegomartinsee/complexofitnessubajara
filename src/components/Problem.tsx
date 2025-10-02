import { AlertCircle, Clock, TrendingDown, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Problem = () => {
  const problems = [
    {
      icon: <TrendingDown className="h-10 w-10 text-destructive" />,
      title: "Falta de motivação",
      description: "Começou a treinar mas perdeu o ritmo? Sem acompanhamento profissional, é difícil manter a disciplina e ver resultados."
    },
    {
      icon: <Clock className="h-10 w-10 text-destructive" />,
      title: "Falta de tempo",
      description: "Horários limitados de academia impedem você de treinar quando pode? Sua rotina precisa de flexibilidade real."
    },
    {
      icon: <AlertCircle className="h-10 w-10 text-destructive" />,
      title: "Treinar sem orientação",
      description: "Exercícios errados podem causar lesões e não trazem os resultados que você busca. Orientação é essencial."
    },
    {
      icon: <Users className="h-10 w-10 text-destructive" />,
      title: "Ambiente desmotivador",
      description: "Academia lotada, sem estrutura ou ambiente pesado? O lugar onde você treina faz toda a diferença nos seus resultados."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background" id="problema">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6">
            Por que você ainda <span className="text-gradient">não conseguiu</span> os resultados que deseja?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sabemos que começar ou manter uma rotina de treinos não é fácil. 
            Estes são os principais obstáculos que impedem sua transformação:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="card-gradient border-border hover:border-destructive/50 transition-smooth">
              <CardContent className="pt-8 pb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {problem.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">{problem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-foreground font-semibold">
            A boa notícia? <span className="text-gradient">Todos esses problemas têm solução.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
