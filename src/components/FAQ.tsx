import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [
    {
      question: "Preciso pagar taxa de matrícula?",
      answer: "Não! Na Complexo Fitness você não paga taxa de matrícula. Comece a treinar pagando apenas a mensalidade do plano escolhido."
    },
    {
      question: "Como eu consigo desconto nos parceiros?",
      answer: "Basta apresentar o aplicativo da academia, comprovando que seu plano está ativo. Com isso, você recebe o desconto nos serviços ou produtos oferecidos pelos nossos parceiros."
    },

    {
      question: "A academia oferece avaliação física?",
      answer: "Sim! Oferecemos avaliação física gratuita para todos os novos alunos, com análise corporal completa e orientação personalizada."
    },
    {
      question: "Tem espaço para crianças?",
      answer: "Sim! Contamos com uma Área Kids segura e supervisionada para que você possa treinar com tranquilidade enquanto seus filhos se divertem."
    },
    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer: "Aceitamos cartão de crédito, débito, PIX e dinheiro. Temos desconto de 5% para pagamento à vista em dinheiro nos planos de fidelidade."
    },
    {
      question: "Vocês oferecem personal trainer?",
      answer: "Sim! Temos profissionais qualificados para atendimento personalizado. Consulte valores e disponibilidade diretamente conosco."
    },
    {
      question: "O que é o Clube de Recompensas 'Tá pago!'?",
      answer: "É nosso programa de fidelidade! Você acumula Complexo Coins a cada treino e pode trocar por consultas, fisioterapia, produtos da FitStore, bebidas e muito mais."
    },
    {
      question: "Tem desconto para famílias?",
      answer: "Sim! Famílias com 2-3 pessoas pagam R$ 116,90/pessoa. Com 4 ou mais pessoas, apenas R$ 100,00/pessoa."
    },
    {
      question: "Posso fazer uma aula experimental antes de me matricular?",
      answer: "Atualmente não trabalhamos com aula experimental. Oferecemos a opção de diária, e caso o aluno realize a diária e decida se matricular no mesmo dia, o valor pago pela diária pode ser descontado da mensalidade."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-6">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre a Complexo Fitness
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="card-gradient border border-border rounded-lg px-6 hover:border-primary/50 transition-smooth"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Não encontrou a resposta que procurava?
          </p>
          <Button
            className="hero-gradient hover:opacity-90 transition-smooth"
            onClick={() => window.open('https://wa.me/5588999735251', '_blank')}
          >
            Fale conosco no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
