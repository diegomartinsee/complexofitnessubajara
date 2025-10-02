import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      age: 34,
      result: "Perdeu 12kg em 4 meses",
      text: "A Complexo Fitness mudou minha vida! Os professores são atenciosos e a estrutura é impecável. Consegui emagrecer e me sinto muito mais disposta.",
      rating: 5
    },
    {
      name: "João Santos",
      age: 42,
      result: "Ganhou massa muscular",
      text: "Treino aqui há 6 meses e os resultados são incríveis. O acompanhamento personalizado faz toda a diferença. Recomendo demais!",
      rating: 5
    },
    {
      name: "Ana Paula",
      age: 28,
      result: "Melhorou a saúde",
      text: "Depois que comecei na Complexo, minha qualidade de vida mudou completamente. Durmo melhor, tenho mais energia e me sinto confiante.",
      rating: 5
    },
    {
      name: "Carlos Eduardo",
      age: 51,
      result: "Recuperou o condicionamento",
      text: "Estava sedentário há anos. A equipe me acolheu e me ajudou a voltar aos treinos sem pressa. Hoje me sinto 10 anos mais jovem!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background" id="depoimentos">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6">
            Histórias de <span className="text-gradient">transformação real</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja o que nossos alunos têm a dizer sobre suas conquistas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-gradient border-primary/20 hover:border-primary/50 hover:glow-effect transition-smooth">
              <CardContent className="pt-8 pb-6">
                <div className="flex items-start gap-4 mb-4">
                  <Quote className="h-8 w-8 text-primary flex-shrink-0" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.age} anos</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-primary">{testimonial.result}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            Estes são apenas alguns exemplos. <span className="text-primary font-semibold">Você pode ser o próximo!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
