import { Card } from "@/components/ui/card";
import { FileText, Search, MessageSquare, Plane, Calculator, Shield } from "lucide-react";

const modules = [
  {
    number: "01",
    icon: FileText,
    title: "Abertura de CNPJ",
    description: "Aprenda a abrir seu MEI gratuitamente e de forma 100% legalizada, mesmo sem conhecimento prévio.",
  },
  {
    number: "02",
    icon: Search,
    title: "Encontrar Produtos Lucrativos",
    description: "Descubra os 3 pilares essenciais: demanda alta, oferta controlada e viabilidade de importação.",
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "Negociação com Fornecedores",
    description: "Aprenda a negociar no Alibaba mesmo sem falar inglês, usando as ferramentas certas.",
  },
  {
    number: "04",
    icon: Plane,
    title: "Importação Simplificada",
    description: "Importe até $3.000 USD sem precisar de despachante aduaneiro, reduzindo custos drasticamente.",
  },
  {
    number: "05",
    icon: Calculator,
    title: "Cálculo de Custos e Impostos",
    description: "Domine a 'Regra dos 2x' para calcular custos totais e garantir margens de lucro saudáveis.",
  },
  {
    number: "06",
    icon: Shield,
    title: "Documentação e Legalização",
    description: "Todos os documentos necessários, emissão de notas fiscais e conformidade total com a Receita Federal.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Como Funciona a{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Metodologia?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Um sistema passo a passo que te leva do zero até sua primeira importação lucrativa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Card
                key={index}
                className="relative p-6 hover:shadow-custom-lg transition-all duration-300 border-2 hover:border-primary/30 group overflow-hidden"
              >
                {/* Module Number Background */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                  {module.number}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {module.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {module.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA after modules */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Tudo isso em um treinamento completo com suporte e atualizações constantes
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
