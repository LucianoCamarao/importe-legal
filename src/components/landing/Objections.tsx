import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

const objections = [
  {
    question: "Preciso de muito dinheiro para começar?",
    answer: "Não! Você pode começar com apenas R$ 1.000 usando o regime de importação simplificada (até $3.000 USD). O método ensina a reinvestir seus lucros para crescer de forma sustentável.",
  },
  {
    question: "Importar é ilegal ou tem muita burocracia?",
    answer: "Importar é 100% legal quando feito corretamente! Te ensinamos a abrir seu CNPJ (MEI gratuito) e fazer tudo dentro da lei. A importação simplificada elimina a necessidade de despachante aduaneiro.",
  },
  {
    question: "Não sei inglês, consigo negociar com fornecedores?",
    answer: "Sim! O Alibaba possui tradutor nativo integrado e te mostramos modelos prontos de mensagens. Você não precisa falar inglês fluente para negociar.",
  },
  {
    question: "É muito complicado? Preciso de conhecimento técnico?",
    answer: "Nosso método é passo a passo e simplificado. Se você consegue fazer compras online, consegue importar seguindo nosso treinamento. Tudo é explicado de forma clara e didática.",
  },
  {
    question: "Quanto tempo demora para receber os produtos?",
    answer: "Na importação simplificada via aérea, o prazo médio é de 7 a 15 dias úteis da China até o Brasil. Te ensinamos a calcular e planejar corretamente.",
  },
  {
    question: "Os impostos não comem todo o lucro?",
    answer: "Não quando você calcula corretamente! Ensinamos a 'Regra dos 2x' para você calcular todos os custos (produto + frete + impostos) e ainda assim ter margens de 100-400% de ROI.",
  },
  {
    question: "E se eu não tiver tempo integral?",
    answer: "O método foi desenvolvido para quem tem outras atividades. Muitos alunos começaram mantendo seus empregos e dedicando algumas horas por semana até escalar o negócio.",
  },
  {
    question: "Como sei quais produtos vender?",
    answer: "Ensinamos os 3 pilares para validar produtos lucrativos: alta demanda, oferta controlada e viabilidade de importação. Você recebe também uma lista de produtos validados para começar!",
  },
];

const Objections = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Perguntas que Você Pode Ter{" "}
              <span className="text-primary">(Respondidas!)</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Quebrando todas as objeções e dúvidas mais comuns
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {objections.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border-2 rounded-lg px-6 hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="font-semibold text-lg">{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-9 pb-6 text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Ainda tem dúvidas? Entre em contato com nosso suporte antes de adquirir!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objections;
