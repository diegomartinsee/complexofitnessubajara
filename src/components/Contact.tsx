import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Instagram, Facebook, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5588999735251";
    const message = encodeURIComponent("Olá! Gostaria de conhecer a Complexo Fitness e saber mais sobre os planos.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" id="contato">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visite nossa academia, tire suas dúvidas ou agende sua avaliação gratuita
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-heading mb-6">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="hero-gradient p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Av. Constituintes, 360<br />
                      Centro - Ubajara, CE<br />
                      CEP: 62350-000, Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="hero-gradient p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefone</h4>
                    <p className="text-muted-foreground">
                      +55 88 99973-5251
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="hero-gradient p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Funcionamento</h4>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 05:30 – 22:00<br />
                      Sábado: 06:00 – 12:00<br />
                      Domingo: 08:00 – 12:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="hero-gradient p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">E-mail</h4>
                    <p className="text-muted-foreground">
                      contato@complexofitness.com.br
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">Siga-nos nas redes sociais</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Instagram className="h-4 w-4 mr-2" />
                  Instagram
                </Button>
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </Button>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA Card */}
          <Card className="card-gradient border-border p-8 flex flex-col items-center justify-center text-center space-y-6">
            <div className="hero-gradient p-6 rounded-full">
              <MessageCircle className="h-16 w-16 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-heading mb-3">Fale Conosco pelo WhatsApp</h3>
              <p className="text-muted-foreground mb-6">
                Entre em contato agora mesmo e tire todas as suas dúvidas.
                Nossa equipe está pronta para atender você!
              </p>
            </div>
            <Button
              size="lg"
              className="hero-gradient hover:opacity-90 transition-smooth glow-effect font-semibold w-full"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Conversar no WhatsApp
            </Button>
            <p className="text-sm text-muted-foreground">
              Resposta rápida em horário comercial
            </p>
          </Card>
        </div>

        {/* Google Maps */}
        <div className="mt-16">
          <Card className="card-gradient border-border overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.7983457365913!2d-40.9226058!3d-3.8534132000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x794cb9ebda54191%3A0xd73eddf3befa02f0!2sComplexo%20Fitness%20Ubajara!5e0!3m2!1spt-BR!2sbr!4v1769097309899!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Complexo Fitness"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;