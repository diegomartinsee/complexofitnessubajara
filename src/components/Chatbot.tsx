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
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const N8N_WEBHOOK_URL = "https://startprojectddd.app.n8n.cloud/webhook-test/db7c4514-0ee8-4821-9edd-7e924c7242c8";

  // Fallback responses para quando o n8n não estiver disponível
  const getFallbackResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes("horário") || lowerMessage.includes("funciona") || lowerMessage.includes("aberto")) {
      return "Funcionamos 24 horas por dia, 7 dias da semana! Você pode treinar no horário que for melhor para você.";
    }
    if (lowerMessage.includes("plano") || lowerMessage.includes("preço") || lowerMessage.includes("valor") || lowerMessage.includes("mensalidade")) {
      return "Oferecemos planos: Mensal Horário Fixo (R$110), Trimestral (R$123,40/mês), Semestral (R$116,90/mês) e Anual (R$110,40/mês). Também aceitamos TotalPass e Wellhub.";
    }
    if (lowerMessage.includes("endereço") || lowerMessage.includes("localização") || lowerMessage.includes("onde")) {
      return "Estamos localizados em Ubajara. Entre em contato conosco para o endereço exato e direções!";
    }
    if (lowerMessage.includes("equipamento") || lowerMessage.includes("aparelho") || lowerMessage.includes("musculação")) {
      return "Temos equipamentos de última geração para musculação, cardio e área funcional completa.";
    }
    if (lowerMessage.includes("aula") || lowerMessage.includes("pilates") || lowerMessage.includes("grupo")) {
      return "Oferecemos Pilates e outras modalidades. Entre em contato para saber mais sobre horários e disponibilidade.";
    }
    if (lowerMessage.includes("personal") || lowerMessage.includes("trainer") || lowerMessage.includes("instrutor")) {
      return "Temos personal trainers certificados e experientes. Entre em contato para agendar uma avaliação!";
    }
    if (lowerMessage.includes("nutrição") || lowerMessage.includes("nutricionist")) {
      return "Oferecemos serviços de nutrição para complementar seu treino. Agende uma consulta conosco!";
    }
    if (lowerMessage.includes("fisioterapia")) {
      return "Temos serviços de fisioterapia para reabilitação e prevenção de lesões.";
    }
    
    return "Obrigado pela pergunta! Para informações mais específicas, recomendo que você nos visite ou entre em contato diretamente. Posso ajudar com horários, planos, equipamentos ou serviços.";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      console.log("Enviando mensagem para n8n:", inputMessage);
      
      // Tentativa 1: Formato simples
      let response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputMessage
        }),
      });

      console.log("Primeira tentativa - Status:", response.status);

      // Se a primeira tentativa falhar, tenta formato alternativo
      if (!response.ok) {
        console.log("Tentando formato alternativo...");
        response = await fetch(N8N_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: inputMessage,
            user: "website_visitor",
            timestamp: new Date().toISOString()
          }),
        });
        
        console.log("Segunda tentativa - Status:", response.status);
      }

      // Se ainda não funcionou, tenta formato mais simples
      if (!response.ok) {
        console.log("Tentando formato string simples...");
        response = await fetch(N8N_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain",
          },
          body: inputMessage,
        });
        
        console.log("Terceira tentativa - Status:", response.status);
      }

      if (response.ok) {
        const data = await response.json().catch(() => response.text());
        console.log("Dados recebidos do n8n:", data);
        
        let responseText = "";
        if (typeof data === 'string') {
          responseText = data;
        } else if (data.response) {
          responseText = data.response;
        } else if (data.message) {
          responseText = data.message;
        } else if (data.text) {
          responseText = data.text;
        } else {
          responseText = getFallbackResponse(inputMessage);
        }
        
        const botResponse: Message = {
          id: Date.now() + 1,
          text: responseText,
          isBot: true,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botResponse]);
      } else {
        console.log("Todas as tentativas falharam, usando fallback");
        throw new Error('Webhook não está funcionando');
      }
      
    } catch (error) {
      console.error("Erro ao comunicar com o agente, usando fallback:", error);
      
      // Usar resposta de fallback em caso de erro
      const fallbackResponse: Message = {
        id: Date.now() + 1,
        text: getFallbackResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, fallbackResponse]);
    } finally {
      setIsLoading(false);
      setInputMessage("");
    }
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
                
                {/* Loading indicator */}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground p-3 rounded-lg max-w-[80%]">
                      <div className="flex items-center gap-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                        <span className="text-xs text-muted-foreground">Digitando...</span>
                      </div>
                    </div>
                  </div>
                )}
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
                    disabled={isLoading}
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="hero-gradient hover:opacity-90"
                    disabled={isLoading}
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
                      disabled={isLoading}
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