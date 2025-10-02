import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Plans from "@/components/Plans";
import Rewards from "@/components/Rewards";
import Guarantees from "@/components/Guarantees";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* 1. Headline + Promessa Forte */}
        <Hero />
        
        {/* 2. Problema / Dor do Visitante */}
        <Problem />
        
        {/* 3. Solução / O que oferecemos */}
        <Services />
        
        {/* 4. Benefícios focados no resultado */}
        <Benefits />
        
        {/* 5. Prova Social (Depoimentos) */}
        <Testimonials />
        
        {/* 6. Planos e Preços */}
        <Plans />
        
        {/* 7. Clube de Recompensas e Parceiros */}
        <Rewards />
        
        {/* 8. Garantias e Diferenciais */}
        <Guarantees />
        
        {/* 9. CTA Principal */}
        <CTA />
        
        {/* 10. FAQ */}
        <FAQ />
        
        {/* 11. Sobre e Contato */}
        <About />
        <Contact />
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;