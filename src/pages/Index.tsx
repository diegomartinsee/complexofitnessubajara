import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Plans from "@/components/Plans";
import Rewards from "@/components/Rewards";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <Hero />
        <Services />
        <Plans />
        <Rewards />
        <About />
        <Contact />
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;