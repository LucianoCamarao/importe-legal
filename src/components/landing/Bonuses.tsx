import { Card } from "@/components/ui/card";
import { Gift, Bot } from "lucide-react";

const bonuses = [
  {
    icon: Bot,
    title: "IA Especialista em Importação Simplificada",
    description: "Você terá direito, por três meses, a uma IA especialista em processos na modalidade \"Importação Simplificada\" para responder todas as suas questões.",
    value: "R$ 180",
  },
];

const Bonuses = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6">
              <Gift className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-accent">BÔNUS EXCLUSIVOS</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Receba Este Bônus{" "}
              <span className="text-primary">
                Gratuitamente
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Suporte especializado para acelerar seus resultados
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
            {bonuses.map((bonus, index) => {
              const Icon = bonus.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-custom-lg transition-all duration-300 border-2 hover:border-accent/30 group relative overflow-hidden"
                >
                  {/* Value Badge */}
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                    Valor: {bonus.value}
                  </div>

                  <div className="flex items-start gap-4 mt-8">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                        {bonus.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {bonus.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
            </div>
          </div>

          {/* Total Value */}
          <div className="mt-12 text-center">
            <Card className="inline-block p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
              <p className="text-sm text-muted-foreground mb-2">Valor do bônus:</p>
              <p className="text-3xl font-bold text-primary mb-2">+ R$ 180</p>
              <p className="text-sm font-semibold text-accent">
                ✓ Seu por tempo limitado, sem custo adicional!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
