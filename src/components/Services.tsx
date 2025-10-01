import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, Heart, Users, Timer, Activity, Stethoscope, Apple, ShoppingBag } from "lucide-react";
import weightsImage from "@/assets/weights.jpg";
import cardioImage from "@/assets/cardio.jpg";
import personalTrainingImage from "@/assets/personal-training.jpg";

const Services = () => {
  const services = [
    {
      icon: <Dumbbell className="h-12 w-12 text-primary" />,
      title: "Musculação",
      description: "Nosso serviço principal! Aparelhos premium e linha completa de pesos livres",
      image: weightsImage,
      isPrimary: true,
      features: ["Aparelhos premium", "Linha completa de pesos livres", "Equipamentos de última geração", "Horários flexíveis"]
    },
    {
      icon: <Activity className="h-12 w-12 text-primary" />,
      title: "Área Funcional",
      description: "Espaço preparado para treinos funcionais, circuitos e aulas em grupo",
      image: personalTrainingImage,
      features: ["Treinos funcionais", "Circuitos completos", "Aulas em grupo", "Espaço amplo"]
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Área Kids",
      description: "Espaço seguro e monitorado para crianças enquanto você treina",
      image: cardioImage,
      features: ["Espaço seguro", "Monitoramento profissional", "Entretenimento garantido", "Tranquilidade para os pais"]
    },
    {
      icon: <Activity className="h-12 w-12 text-primary" />,
      title: "Pilates",
      description: "Fortalecimento do core e melhoria da postura com exercícios controlados",
      image: personalTrainingImage,
      features: ["Exercícios funcionais", "Melhoria da postura", "Fortalecimento do core", "Aulas personalizadas"]
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-primary" />,
      title: "Fisioterapia",
      description: "Reabilitação e prevenção de lesões com profissionais especializados",
      image: cardioImage,
      features: ["Reabilitação", "Prevenção de lesões", "Avaliação postural", "Tratamento especializado"]
    },
    {
      icon: <Apple className="h-12 w-12 text-primary" />,
      title: "Nutrição",
      description: "Orientação nutricional personalizada para potencializar seus resultados",
      image: weightsImage,
      features: ["Avaliação nutricional", "Planos alimentares", "Acompanhamento contínuo", "Orientação especializada"]
    },
    {
      icon: <ShoppingBag className="h-12 w-12 text-primary" />,
      title: "FitStore",
      description: "Loja focada em roupas e acessórios fitness",
      image: personalTrainingImage,
      features: ["Roupas fitness", "Acessórios de treino", "Preços especiais para alunos", "Produtos de qualidade"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="servicos">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma variedade completa de modalidades para você atingir seus objetivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`card-gradient border-border hover:glow-effect transition-smooth group relative ${
              service.isPrimary ? 'lg:col-span-2 ring-2 ring-primary/30' : ''
            }`}>
              {service.isPrimary && (
                <Badge className="absolute top-4 right-4 z-10 hero-gradient text-primary-foreground">
                  Serviço Principal
                </Badge>
              )}
              
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
                <CardTitle className={`text-xl font-heading text-foreground ${service.isPrimary ? 'text-2xl' : ''}`}>
                  {service.title}
                </CardTitle>
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
            { icon: <Timer className="h-8 w-8" />, title: "Horários Flexíveis", desc: "Treinos cedo, tarde e fim de semana" },
            { icon: <Users className="h-8 w-8" />, title: "Personal Trainer", desc: "Acompanhamento profissional" },
            { icon: <Heart className="h-8 w-8" />, title: "Avaliação Física", desc: "Gratuita para novos alunos" },
            { icon: <Activity className="h-8 w-8" />, title: "Aplicativo", desc: "Treino e acompanhamento de evolução" }
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