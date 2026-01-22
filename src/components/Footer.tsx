import { Dumbbell, Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="hero-gradient p-2 rounded-lg">
                <Dumbbell className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Complexo Fitness</h3>
                <p className="text-sm text-muted-foreground">Ubajara</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Transformando vidas através do fitness em Ubajara desde outubro de 2024.
            </p>
            <div className="flex space-x-3">
              <div className="bg-primary/10 p-2 rounded-lg hover:bg-primary/20 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5 text-primary" />
              </div>
              <div className="bg-primary/10 p-2 rounded-lg hover:bg-primary/20 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Links Rápidos</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#planos" className="hover:text-primary transition-colors">Planos</a></li>
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Nossos Serviços</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Musculação</li>
              <li>Pilates</li>
              <li>Cardio</li>
              <li>Fisioterapia</li>
              <li>Nutrição</li>
              <li>Personal Trainer</li>
              <li>Avaliação Física</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contato</h4>
            <div className="space-y-3 text-muted-foreground text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Rua Principal, 123<br />Centro - Ubajara, CE</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>(88) 9 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span>contato@complexofitness.com.br</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} Complexo Fitness Ubajara. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-muted-foreground text-sm">
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;