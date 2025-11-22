import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, TrendingUp, ArrowRight } from "lucide-react";

const Urgency = () => {
  const handleCTA = () => {
    window.open("https://kiwify.app", "_blank");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-primary/5">
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-destructive/10 backdrop-blur-sm border border-destructive/30 rounded-full px-4 py-2 mb-6 animate-pulse">
                  <Clock className="w-5 h-5 text-destructive" />
                  <span className="text-sm font-bold text-destructive">OFERTA POR TEMPO LIMITADO</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Últimas Vagas Disponíveis
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Para garantir a qualidade do suporte, limitamos o número de novos alunos por mês
                </p>
              </div>

              {/* Scarcity Indicators */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="text-center p-6 bg-background/50 backdrop-blur-sm rounded-lg">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">23</div>
                  <div className="text-sm text-muted-foreground">Vagas Restantes</div>
                </div>

                <div className="text-center p-6 bg-background/50 backdrop-blur-sm rounded-lg">
                  <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-accent mb-1">48h</div>
                  <div className="text-sm text-muted-foreground">Para Garantir Bônus</div>
                </div>

                <div className="text-center p-6 bg-background/50 backdrop-blur-sm rounded-lg">
                  <TrendingUp className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-secondary mb-1">67%</div>
                  <div className="text-sm text-muted-foreground">de Desconto Hoje</div>
                </div>
              </div>

              {/* Price Comparison */}
              <div className="bg-background/70 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">De:</p>
                    <p className="text-2xl text-muted-foreground line-through mb-2">R$ 2.997</p>
                    <p className="text-sm text-primary font-semibold mb-4">Por apenas:</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-primary">R$ 997</span>
                      <span className="text-lg text-muted-foreground">ou 12x de R$ 97</span>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <Button 
                      size="xl" 
                      variant="cta" 
                      onClick={handleCTA}
                      className="group shadow-glow"
                    >
                      Garantir Minha Vaga Agora
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-xs text-center text-muted-foreground mt-3">
                      🔒 Pagamento 100% seguro via Kiwify
                    </p>
                  </div>
                </div>
              </div>

              {/* Warning */}
              <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-4 text-sm">
                <p className="font-semibold text-foreground mb-1">⚠️ Atenção:</p>
                <p className="text-muted-foreground">
                  Após o preenchimento das vagas, o acesso será fechado até o próximo mês. 
                  O preço também voltará ao valor integral de R$ 2.997.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Urgency;
