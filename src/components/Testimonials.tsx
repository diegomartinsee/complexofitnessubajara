import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Lucas Oliveira",
      age: 22,
      result: "Meteu o shape: +8kg de massa",
      text: "Vim focado em ganhar corpo e a galera deu o maior suporte. A vibe aqui é animal e motiva demais quem tá começando agora!",
      rating: 5,
      initials: "LO"
    },
    {
      name: "Juliana Costa",
      age: 35,
      result: "Sente-se em casa",
      text: "O que mais me encantou foi a estrutura impecável e a organização. Como mulher, me sinto extremamente segura e à vontade para treinar em qualquer horário.",
      rating: 5,
      initials: "JC"
    },
    {
      name: "Roberto Mendes",
      age: 45,
      result: "Reduziu o percentual de gordura",
      text: "A estrutura e o suporte da Complexo foram fundamentais para me manter motivado e focado nos treinos. Resultados reais com um acompanhamento de excelência.",
      rating: 5,
      initials: "RM"
    },
    {
      name: "Sr. Joaquim",
      age: 72,
      result: "Recuperou a mobilidade",
      text: "Achei que academia não era mais para mim, mas fui muito bem acolhido. Hoje não sinto mais dores e tenho muito mais disposição no meu dia a dia.",
      rating: 5,
      initials: "SJ"
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
                <div className="flex items-start justify-between mb-4">
                  <Quote className="h-8 w-8 text-primary flex-shrink-0" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <Avatar className="h-12 w-12 bg-primary/20 border-2 border-primary/50">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
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

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-4">
            <Star className="h-5 w-5 fill-primary text-primary" />
            <span className="font-semibold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">Baseado em 200+ avaliações</span>
          </div>
          <p className="text-lg text-muted-foreground">
            Estes são apenas alguns exemplos. <span className="text-primary font-semibold">Você pode ser o próximo!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
