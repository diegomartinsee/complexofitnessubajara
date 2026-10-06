import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Dumbbell, Heart, Users, Timer, Activity, Stethoscope, Apple, ShoppingBag, Check, Play, ExternalLink } from "lucide-react";
import weightsImage from "@/assets/weights.jpg";
import pilatesImage from "@/assets/pilates.png";
import nutritionImage from "@/assets/nutrition.png";
import physiotherapyImage from "@/assets/physiotherapy.png";
import aestheticsImage from "@/assets/aesthetics.jpg";
import fitstoreImage from "@/assets/fitstore.jpg";

interface ServiceItem {
  icon: JSX.Element;
  title: string;
  description: string;
  image: string;
  isPrimary?: boolean;
  features: string[];
  videoUrl?: string;
  embedUrl?: string;
}

const Services = () => {
  const [activeVideo, setActiveVideo] = useState<{ title: string; url: string; embedUrl: string } | null>(null);

  const services: ServiceItem[] = [
    {
      icon: <Dumbbell className="h-12 w-12 text-primary" />,
      title: "Musculação",
      description: "Nosso serviço principal! Aparelhos premium e linha completa de pesos livres",
      image: weightsImage,
      isPrimary: true,
      features: ["Aparelhos premium", "Linha completa de pesos livres", "Equipamentos de última geração", "Horários flexíveis"],
      videoUrl: "https://www.instagram.com/reel/DalaPWrK4CW/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
      embedUrl: "https://www.instagram.com/reel/DalaPWrK4CW/embed"
    },
    {
      icon: <Activity className="h-12 w-12 text-primary" />,
      title: "Pilates",
      description: "Fortalecimento do core e melhoria da postura com exercícios controlados",
      image: pilatesImage,
      features: ["Exercícios funcionais", "Melhoria da postura", "Fortalecimento do core", "Aulas personalizadas"],
      videoUrl: "https://www.instagram.com/reel/DF8BA96x7NP/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
      embedUrl: "https://www.instagram.com/reel/DF8BA96x7NP/embed"
    },
    {
      icon: <Apple className="h-12 w-12 text-primary" />,
      title: "Nutrição",
      description: "Orientação nutricional personalizada para potencializar seus resultados",
      image: nutritionImage,
      features: ["Avaliação nutricional", "Planos alimentares", "Acompanhamento contínuo", "Orientação especializada"],
      videoUrl: "https://www.instagram.com/reel/DJ9vYx8gv_e/",
      embedUrl: "https://www.instagram.com/reel/DJ9vYx8gv_e/embed"
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
      features: ["Suplementos", "Acessórios", "Vestuário fitness", "Consultoria especializada"],
      videoUrl: "https://www.instagram.com/reel/DM0-10wvOas/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
      embedUrl: "https://www.instagram.com/reel/DM0-10wvOas/embed"
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
            <Card key={index} className={`card-gradient border-border hover:glow-effect transition-smooth group relative reveal flex flex-col justify-between ${service.isPrimary ? 'lg:col-span-2 ring-2 ring-primary/30 active' : ''
              }`}>
              {service.isPrimary && (
                <Badge className="absolute top-4 right-4 z-10 hero-gradient text-primary-foreground">
                  Serviço Principal
                </Badge>
              )}

              <div>
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
              </div>

              {service.videoUrl && (
                <div className="p-6 pt-0">
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-primary/40 hover:bg-primary/10 text-primary font-semibold flex items-center justify-center gap-2 transition-smooth"
                    onClick={() => setActiveVideo({ title: service.title, url: service.videoUrl!, embedUrl: service.embedUrl! })}
                  >
                    <Play className="h-4 w-4 fill-primary" />
                    Ver Vídeo {service.title === "Fitstore" ? "da Fitstore" : `de ${service.title}`}
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Video Dialog Modal */}
        <Dialog open={!!activeVideo} onOpenChange={(open) => !open && setActiveVideo(null)}>
          <DialogContent className="max-w-md p-4 bg-background border-border">
            <DialogHeader className="mb-2">
              <DialogTitle className="text-xl font-bold flex items-center gap-2">
                <Play className="h-5 w-5 text-primary" />
                Vídeo {activeVideo?.title}
              </DialogTitle>
            </DialogHeader>
            {activeVideo && (
              <div className="flex flex-col items-center gap-4">
                <div className="w-full h-[480px] rounded-lg overflow-hidden border border-border bg-black/50">
                  <iframe
                    src={activeVideo.embedUrl}
                    className="w-full h-full border-0"
                    allowFullScreen
                    scrolling="no"
                    title={activeVideo.title}
                  ></iframe>
                </div>
                <Button
                  className="w-full hero-gradient text-primary-foreground font-bold flex items-center justify-center gap-2"
                  onClick={() => window.open(activeVideo.url, '_blank')}
                >
                  Assistir no Instagram <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>

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