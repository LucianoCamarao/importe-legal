import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const FinalCTA = () => {
  const handleCTA = () => {
    window.open("https://kiwify.app", "_blank");
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mb-8 shadow-glow">
            <Sparkles className="w-10 h-10 text-white" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Está Pronto Para Mudar de{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Vida?
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Você está a apenas um clique de distância de começar sua jornada como importador profissional
          </p>

          {/* Benefits List */}
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 text-left">
            {[
              "Método passo a passo validado por +2.000 alunos",
              "Comece com apenas R$ 1.000 de investimento",
              "100% legalizado e sem complicação",
              "Garantia incondicional de 30 dias",
              "Acesso vitalício + atualizações gratuitas",
              "Bônus no valor de R$ 1.388 inclusos",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mb-6">
            <Button 
              size="xl" 
              variant="cta" 
              onClick={handleCTA}
              className="group text-xl px-16 py-8 h-auto shadow-glow"
            >
              Sim, Quero Garantir Minha Vaga!
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mb-2">
            🔒 Ambiente seguro - Seus dados estão protegidos
          </p>
          <p className="text-xs text-muted-foreground">
            Ao clicar, você será redirecionado para a página de checkout seguro da Kiwify
          </p>

          {/* Final Message */}
          <div className="mt-12 p-6 bg-accent/10 border-l-4 border-accent rounded-r-lg max-w-2xl mx-auto">
            <p className="text-foreground font-medium italic">
              "A melhor decisão que você pode tomar hoje é investir em você mesmo. 
              Daqui a 6 meses, você vai agradecer por ter dado esse passo."
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              - Equipe Importador do Zero
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
