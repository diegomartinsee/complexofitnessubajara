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

type ChatState = 'asking-name' | 'asking-cpf' | 'ready';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatState, setChatState] = useState<ChatState>('asking-name');
  const [userName, setUserName] = useState("");
  const [userCPF, setUserCPF] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! Sou o assistente virtual da Academia Complexo Fitness Ubajara. Para começarmos, preciso de algumas informações. Qual é o seu nome?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const N8N_WEBHOOK_URL = "https://startprojectddd.app.n8n.cloud/webhook/chat-site";

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
      if (chatState === 'asking-name') {
        setUserName(inputMessage.trim());
        
        const botResponse: Message = {
          id: Date.now() + 1,
          text: `Prazer em conhecê-lo, ${inputMessage.trim()}! Agora, para finalizar, poderia me informar seu CPF (apenas números)?`,
          isBot: true,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botResponse]);
        setChatState('asking-cpf');
      } else if (chatState === 'asking-cpf') {
        const cpfNumbers = inputMessage.replace(/\D/g, '');
        
        if (cpfNumbers.length !== 11) {
          const errorResponse: Message = {
            id: Date.now() + 1,
            text: "Por favor, digite um CPF válido com 11 números.",
            isBot: true,
            timestamp: new Date()
          };
          setMessages(prev => [...prev, errorResponse]);
        } else {
          setUserCPF(cpfNumbers);
          
          const botResponse: Message = {
            id: Date.now() + 1,
            text: `Perfeito! Agora posso ajudá-lo com suas dúvidas sobre a Academia Complexo Fitness Ubajara. Como posso ajudar você hoje?`,
            isBot: true,
            timestamp: new Date()
          };
          
          setMessages(prev => [...prev, botResponse]);
          setChatState('ready');
        }
      } else {
        // Chat normal - comunicação com o webhook
        console.log("Enviando mensagem para n8n:", inputMessage);
        
        const response = await fetch(N8N_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: inputMessage,
            sessionId: userCPF
          }),
        });

        console.log("Resposta do n8n - Status:", response.status);

        if (response.ok) {
          const data = await response.json();
          console.log("Dados recebidos do n8n:", data);
          
          let responseText = "";

          // Se o n8n retornar um array com objeto
          if (Array.isArray(data) && data.length > 0) {
            if (data[0].output) {
              responseText = data[0].output;
            } else if (data[0].reply) {
              responseText = data[0].reply;
            } else {
              responseText = "Desculpe, não consegui processar sua mensagem. Tente novamente.";
            }
          } else if (typeof data === 'string') {
            responseText = data;
          } else if (data.reply) {
            responseText = data.reply;
          } else {
            responseText = "Desculpe, não consegui processar sua mensagem. Tente novamente.";
          }
          
          const botResponse: Message = {
            id: Date.now() + 1,
            text: responseText,
            isBot: true,
            timestamp: new Date()
          };
          
          setMessages(prev => [...prev, botResponse]);
        } else {
          console.error("Webhook retornou erro:", response.status);
          
          const errorResponse: Message = {
            id: Date.now() + 1,
            text: "Desculpe, estou temporariamente indisponível. Tente novamente em alguns instantes.",
            isBot: true,
            timestamp: new Date()
          };
          
          setMessages(prev => [...prev, errorResponse]);
        }
      }
      
    } catch (error) {
      console.error("Erro ao comunicar com o webhook:", error);
      
      const errorResponse: Message = {
        id: Date.now() + 1,
        text: "Desculpe, ocorreu um erro de conexão. Verifique sua internet e tente novamente.",
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorResponse]);
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
                    placeholder={
                      chatState === 'asking-name' ? "Digite seu nome..." :
                      chatState === 'asking-cpf' ? "Digite seu CPF (apenas números)..." :
                      "Digite sua pergunta..."
                    }
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
                {chatState === 'ready' && (
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
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;