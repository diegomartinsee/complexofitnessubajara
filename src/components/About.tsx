import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Trophy, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Respeito e Inclusão",
      description: "Ambiente acolhedor para todas as pessoas, independente do nível físico."
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Comunidade e Empatia",
      description: "Uma família fitness onde todos se apoiam para alcançar seus objetivos."
    },
    {
      icon: <Trophy className="h-12 w-12 text-primary" />,
      title: "Comprometimento",
      description: "Dedicação em ajudar cada pessoa a superar seus desafios pessoais."
    },
    {
      icon: <Heart className="h-12 w-12 text-primary" />,
      title: "Excelência com Simplicidade",
      description: "Serviços de qualidade com processos simples e acessíveis."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="sobre">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6">
              Sobre o <span className="text-gradient">Complexo Fitness</span>
            </h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
              <p className="text-lg text-muted-foreground">
                Ajudar pessoas a atingirem sua melhor versão, promovendo saúde física e mental por meio de um estilo de vida ativo, criando uma comunidade focada no bem-estar e na superação de desafios pessoais.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground text-sm">Profissionais Qualificados</div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-gradient border-border hover:glow-effect transition-smooth text-center p-6">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold font-heading mb-8">
            Nossa <span className="text-gradient">Equipe</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Ivan da Cruz", role: "Responsável Técnico", cert: "CREF 000000-G/CE" },
              { name: "Geazi", role: "Personal Trainer", cert: "CREF 000000-G/CE" },
              { name: "Dhaima", role: "Personal Trainer", cert: "CREF 000000-G/CE" },
              { name: "Jaiane", role: "Personal Trainer", cert: "CREF 000000-G/CE" },
              { name: "João Victor", role: "Personal Trainer", cert: "CREF 000000-G/CE" },
              { name: "Samille", role: "Personal Trainer", cert: "CREF 000000-G/CE" },
              { name: "Luiz", role: "Personal Trainer", cert: "CREF 000000-G/CE" }
            ].map((member, index) => (
              <Card key={index} className="card-gradient border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{member.name}</h4>
                  <p className="text-muted-foreground mb-1">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;