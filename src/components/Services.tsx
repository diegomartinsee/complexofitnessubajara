import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Heart, Users, Timer } from "lucide-react";
import weightsImage from "@/assets/weights.jpg";
import cardioImage from "@/assets/cardio.jpg";
import personalTrainingImage from "@/assets/personal-training.jpg";

const Services = () => {
  const services = [
    {
      icon: <Dumbbell className="h-12 w-12 text-primary" />,
      title: "Musculação",
      description: "Equipamentos de última geração para todos os níveis de treino",
      image: weightsImage,
      features: ["Aparelhos Life Fitness", "Pesos livres completos", "Área de funcional"]
    },
    {
      icon: <Heart className="h-12 w-12 text-primary" />,
      title: "Cardio",
      description: "Zona cardiovascular completa para queimar calorias",
      image: cardioImage,
      features: ["Esteiras modernas", "Bikes ergométricas", "Elípticos"]
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Aulas em Grupo",
      description: "Modalidades variadas para todos os gostos",
      image: personalTrainingImage,
      features: ["Zumba", "Spinning", "Pilates", "Crossfit"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="servicos">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma variedade completa de modalidades para você atingir seus objetivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-gradient border-border hover:glow-effect transition-smooth group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { icon: <Timer className="h-8 w-8" />, title: "Horário Flexível", desc: "24h por dia" },
            { icon: <Users className="h-8 w-8" />, title: "Personal Trainer", desc: "Acompanhamento profissional" },
            { icon: <Heart className="h-8 w-8" />, title: "Avaliação Física", desc: "Gratuita para novos alunos" },
            { icon: <Dumbbell className="h-8 w-8" />, title: "Equipamentos", desc: "Sempre atualizados" }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 card-gradient rounded-lg border border-border">
              <div className="text-primary mb-3 flex justify-center">{item.icon}</div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;