import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! Sou o assistente virtual da Academia Complexo Fitness Ubajara. Como posso ajudar você hoje?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const { toast } = useToast();

  const botResponses = {
    horario: "Funcionamos 24 horas por dia, 7 dias da semana! Você pode treinar no horário que for melhor para você.",
    planos: "Oferecemos 3 planos: Mensal (R$89), Trimestral (R$69/mês) e Anual (R$59/mês). Qual te interessa mais?",
    endereco: "Estamos localizados em Ubajara. Entre em contato conosco para o endereço exato e direções!",
    equipamentos: "Temos equipamentos de última geração: aparelhos Life Fitness, esteiras, bikes, pesos livres e área funcional completa.",
    aulas: "Oferecemos Zumba, Spinning, Pilates e Crossfit. As aulas são incluídas nos planos Trimestral e Anual.",
    personal: "Nossos personal trainers são certificados e experientes. No plano Anual você tem 2 sessões por semana incluídas!",
    avaliacao: "A primeira avaliação física é gratuita para novos alunos! Agende a sua e conheça nossos profissionais.",
    default: "Obrigado pela pergunta! Para informações mais específicas, recomendo que você nos visite ou entre em contato por telefone. Posso ajudar com horários, planos, equipamentos ou aulas em grupo."
  };

  const getResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes("horário") || lowerMessage.includes("funciona") || lowerMessage.includes("aberto")) {
      return botResponses.horario;
    }
    if (lowerMessage.includes("plano") || lowerMessage.includes("preço") || lowerMessage.includes("valor") || lowerMessage.includes("mensalidade")) {
      return botResponses.planos;
    }
    if (lowerMessage.includes("endereço") || lowerMessage.includes("localização") || lowerMessage.includes("onde")) {
      return botResponses.endereco;
    }
    if (lowerMessage.includes("equipamento") || lowerMessage.includes("aparelho") || lowerMessage.includes("musculação")) {
      return botResponses.equipamentos;
    }
    if (lowerMessage.includes("aula") || lowerMessage.includes("grupo") || lowerMessage.includes("zumba") || lowerMessage.includes("spinning")) {
      return botResponses.aulas;
    }
    if (lowerMessage.includes("personal") || lowerMessage.includes("trainer") || lowerMessage.includes("instrutor")) {
      return botResponses.personal;
    }
    if (lowerMessage.includes("avaliação") || lowerMessage.includes("avaliacao") || lowerMessage.includes("teste")) {
      return botResponses.avaliacao;
    }
    
    return botResponses.default;
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    
    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chatbot Button */}
      <div className="chatbot-floating">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-16 h-16 hero-gradient hover:opacity-90 transition-smooth glow-effect animate-pulse-glow"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[90vw] z-50">
          <Card className="card-gradient border-primary shadow-2xl">
            <CardHeader className="hero-gradient text-primary-foreground rounded-t-lg">
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Assistente Virtual - Complexo Fitness
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-0">
              {/* Messages Area */}
              <div className="h-80 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isBot
                          ? 'bg-muted text-foreground'
                          : 'hero-gradient text-primary-foreground'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite sua pergunta..."
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="hero-gradient hover:opacity-90"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                
                {/* Quick Questions */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Horários", "Planos", "Equipamentos", "Aulas"].map((question) => (
                    <Button
                      key={question}
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => setInputMessage(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;