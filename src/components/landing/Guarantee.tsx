import { Card } from "@/components/ui/card";
import { Shield, Clock, CheckCircle } from "lucide-react";

const Guarantee = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-2 border-primary/20">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            
            {/* Content */}
            <div className="relative p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 shadow-glow">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Garantia Incondicional de{" "}
                  <span className="text-primary">30 Dias</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Estamos tão confiantes no nosso método que oferecemos garantia total. 
                  Se você não ficar satisfeito, devolvemos 100% do seu investimento.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">30 Dias Completos</h3>
                  <p className="text-sm text-muted-foreground">
                    Tempo suficiente para conhecer todo o conteúdo
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Sem Perguntas</h3>
                  <p className="text-sm text-muted-foreground">
                    Basta solicitar e o reembolso é processado
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Risco Zero</h3>
                  <p className="text-sm text-muted-foreground">
                    Todo o risco é por nossa conta
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-accent/10 border-l-4 border-accent rounded-r-lg">
                <p className="text-sm text-foreground font-medium">
                  <strong>Importante:</strong> Queremos que você tenha total confiança na sua decisão. 
                  Se por qualquer motivo você não estiver satisfeito, nós respeitamos e devolvemos seu investimento sem burocracia.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
