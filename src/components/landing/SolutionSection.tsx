import { Button } from "@/components/ui/button";
import { CheckCircle2, TrendingUp, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle2,
    text: "Método passo a passo validado por +2.000 alunos",
  },
  {
    icon: TrendingUp,
    text: "Comece com apenas R$ 1.000 usando importação simplificada",
  },
  {
    icon: Shield,
    text: "100% legalizado com CNPJ e documentação correta",
  },
  {
    icon: Zap,
    text: "Sistema 'Reinvestir e Conquistar' para crescimento exponencial",
  },
];

const SolutionSection = () => {
  const handleCTA = () => {
    window.open("https://kiwify.app", "_blank");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                A SOLUÇÃO QUE VOCÊ PROCURAVA
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Transforme R$ 1.000 em um{" "}
                <span className="gradient-hero bg-clip-text text-transparent">
                  Negócio de 6 Dígitos
                </span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                Nosso método exclusivo te ensina a montar uma importadora 100% legalizada, começando com 
                investimento mínimo e escalando através do sistema de reinvestimento inteligente.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-foreground font-medium">{benefit.text}</p>
                    </div>
                  );
                })}
              </div>

              <Button size="xl" variant="cta" onClick={handleCTA} className="group">
                Garantir Minha Vaga Agora
                <CheckCircle2 className="ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>

            {/* Right Side - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary to-primary-light p-6 rounded-2xl shadow-custom-lg text-white">
                <div className="text-4xl font-bold mb-2">100-400%</div>
                <div className="text-sm opacity-90">ROI Médio por Operação</div>
              </div>
              
              <div className="bg-gradient-to-br from-secondary to-blue-600 p-6 rounded-2xl shadow-custom-lg text-white">
                <div className="text-4xl font-bold mb-2">R$ 1.000</div>
                <div className="text-sm opacity-90">Investimento Inicial</div>
              </div>
              
              <div className="bg-gradient-to-br from-accent to-yellow-500 p-6 rounded-2xl shadow-custom-lg text-accent-foreground">
                <div className="text-4xl font-bold mb-2">7 dias</div>
                <div className="text-sm opacity-90">China até Brasil</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl shadow-custom-lg text-white">
                <div className="text-4xl font-bold mb-2">+2.000</div>
                <div className="text-sm opacity-90">Alunos Ativos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
