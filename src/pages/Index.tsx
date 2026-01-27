import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Plans from "@/components/Plans";
import Rewards from "@/components/Rewards";
import MiniCTA from "@/components/MiniCTA";
import Guarantees from "@/components/Guarantees";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* 1. Headline Institucional */}
        <section className="reveal"><Hero /></section>

        {/* 2. Problema / Dor do Visitante */}
        <section className="reveal"><Problem /></section>

        {/* 3. Solução / O que oferecemos */}
        <section className="reveal"><Services /></section>

        {/* 4. Benefícios focados no resultado */}
        <section className="reveal"><Benefits /></section>

        {/* 5. Prova Social (Depoimentos) */}
        <section className="reveal"><Testimonials /></section>

        {/* 6. Clube de Recompensas e Parceiros */}
        <section className="reveal"><Rewards /></section>

        {/* 6.5 Mini CTA */}
        <section className="reveal"><MiniCTA /></section>

        {/* 7. Planos e Preços */}
        <section className="reveal"><Plans /></section>

        {/* 8. Garantias e Diferenciais */}
        <section className="reveal"><Guarantees /></section>

        {/* 9. CTA Principal */}
        <section className="reveal"><CTA /></section>

        {/* 10. FAQ */}
        <section className="reveal"><FAQ /></section>

        {/* 11. Sobre e Contato */}
        <section className="reveal"><About /></section>
        <section className="reveal"><Contact /></section>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;