import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, Heart, Users, Timer, Activity, Stethoscope, Apple, ShoppingBag, Check } from "lucide-react";
import weightsImage from "@/assets/weights.jpg";
import pilatesImage from "@/assets/pilates.png";
import nutritionImage from "@/assets/nutrition.png";
import physiotherapyImage from "@/assets/physiotherapy.png";
import aestheticsImage from "@/assets/aesthetics.jpg";
import fitstoreImage from "@/assets/fitstore.jpg";

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
      title: "Pilates",
      description: "Fortalecimento do core e melhoria da postura com exercícios controlados",
      image: pilatesImage,
      features: ["Exercícios funcionais", "Melhoria da postura", "Fortalecimento do core", "Aulas personalizadas"]
    },
    {
      icon: <Apple className="h-12 w-12 text-primary" />,
      title: "Nutrição",
      description: "Orientação nutricional personalizada para potencializar seus resultados",
      image: nutritionImage,
      features: ["Avaliação nutricional", "Planos alimentares", "Acompanhamento contínuo", "Orientação especializada"]
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-primary" />,
      title: "Fisioterapia",
      description: "Reabilitação e prevenção de lesões com profissionais especializados",
      image: physiotherapyImage,
      features: ["Reabilitação", "Prevenção de lesões", "Avaliação postural", "Tratamento especializado"]
    },
    {
      icon: <Heart className="h-12 w-12 text-primary" />,
      title: "Estética",
      description: "Tratamentos estéticos para complementar seus resultados na academia",
      image: aestheticsImage,
      features: ["Tratamentos corporais", "Drenagem linfática", "Procedimentos estéticos", "Cuidados especializados"]
    },
    {
      icon: <ShoppingBag className="h-12 w-12 text-primary" />,
      title: "Fitstore",
      description: "Loja de suplementos e acessórios para potencializar seus treinos",
      image: fitstoreImage,
      features: ["Suplementos", "Acessórios", "Vestuário fitness", "Consultoria especializada"]
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
            <Card key={index} className={`card-gradient border-border hover:glow-effect transition-smooth group relative reveal ${service.isPrimary ? 'lg:col-span-2 ring-2 ring-primary/30 active' : ''
              }`}>
              {service.isPrimary && (
                <Badge className="absolute top-4 right-4 z-10 hero-gradient text-primary-foreground">
                  Serviço Principal
                </Badge>
              )}

              <div className="relative overflow-hidden rounded-t-lg h-56">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/40 flex items-center justify-center group-hover:bg-background/20 transition-smooth">
                  <div className="bg-background/80 p-4 rounded-full backdrop-blur-sm border border-primary/20">
                    {service.icon}
                  </div>
                </div>

                {/* Desktop Hover Overlay with Features */}
                <div className="absolute inset-0 bg-background/95 opacity-0 group-hover:opacity-100 transition-smooth p-6 hidden md:flex flex-col justify-center">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <CardHeader>
                <CardTitle className={`text-xl font-heading text-foreground ${service.isPrimary ? 'text-2xl' : ''}`}>
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>

                {/* Mobile visible features */}
                <div className="mt-4 md:hidden">
                  <ul className="grid grid-cols-1 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                        <Check className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { icon: <Timer className="h-8 w-8" />, title: "Horários Flexíveis", desc: "Funcionamento amplo para se adaptar à sua rotina" },
            { icon: <Users className="h-8 w-8" />, title: "Área Kids", desc: "Treine enquanto seus filhos se divertem" },
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