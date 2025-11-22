import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "O curso é online ou presencial?",
    answer: "100% online! Você acessa a plataforma de qualquer lugar, a qualquer hora. As aulas ficam gravadas para você assistir no seu ritmo.",
  },
  {
    question: "Por quanto tempo tenho acesso ao conteúdo?",
    answer: "O acesso é vitalício! Você pode assistir as aulas quantas vezes quiser e terá acesso a todas as atualizações futuras do curso sem custo adicional.",
  },
  {
    question: "Preciso ter CNPJ antes de começar o curso?",
    answer: "Não! A primeira aula já ensina como abrir seu MEI gratuitamente. Você pode começar o curso sem ter empresa aberta.",
  },
  {
    question: "Quanto tempo leva para fazer a primeira importação?",
    answer: "Seguindo o método passo a passo, é possível fazer sua primeira importação em 15 a 30 dias após iniciar o curso. Alguns alunos conseguem em menos tempo.",
  },
  {
    question: "O suporte está incluído?",
    answer: "Sim! Você terá acesso ao grupo VIP de alunos onde pode tirar dúvidas diretamente com a equipe de suporte e outros importadores experientes.",
  },
  {
    question: "Posso importar qualquer tipo de produto?",
    answer: "Existem algumas restrições legais (armas, medicamentos controlados, etc.). No curso, ensinamos quais produtos são permitidos e como validar se um item pode ser importado legalmente.",
  },
  {
    question: "Preciso falar inglês para importar da China?",
    answer: "Não! O Alibaba tem tradutor integrado e fornecemos modelos prontos de mensagens. Você consegue negociar tranquilamente sem falar inglês.",
  },
  {
    question: "Como funciona a garantia de 30 dias?",
    answer: "Você tem 30 dias corridos para conhecer todo o conteúdo. Se não ficar satisfeito por qualquer motivo, basta enviar um e-mail e devolvemos 100% do seu investimento, sem perguntas ou burocracia.",
  },
  {
    question: "Preciso de muito espaço para estocar produtos?",
    answer: "No início, não. Você pode começar com importação direta (dropshipping internacional) ou com pequenos volumes que cabem em casa. Conforme escala, ensinamos soluções de logística.",
  },
  {
    question: "O método funciona em qualquer cidade do Brasil?",
    answer: "Sim! O método funciona em todo o território nacional. Você importa e recebe os produtos via correios ou transportadora, independente da sua localização.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Perguntas{" "}
              <span className="text-primary">Frequentes</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas últimas dúvidas antes de começar sua jornada
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-background border-2 rounded-lg px-6 hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-6 bg-background border-2 border-primary/20 rounded-lg">
            <p className="text-foreground font-medium mb-2">
              Não encontrou sua resposta?
            </p>
            <p className="text-sm text-muted-foreground">
              Entre em contato com nosso suporte:{" "}
              <a href="mailto:suporte@exemplo.com" className="text-primary hover:underline font-medium">
                suporte@exemplo.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
