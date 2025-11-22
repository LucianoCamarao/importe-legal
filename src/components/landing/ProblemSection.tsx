import { Card } from "@/components/ui/card";
import { AlertCircle, TrendingDown, DollarSign, Lock } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: TrendingDown,
    title: "Desemprego e Renda Insuficiente",
    description: "Trabalhar para os outros limita seu potencial de ganhos e não te dá controle sobre seu futuro financeiro.",
  },
  {
    icon: DollarSign,
    title: "Margens Baixas na Revenda",
    description: "Comprar de intermediários no Brasil reduz drasticamente seu lucro. Margens de 20-30% não são suficientes.",
  },
  {
    icon: AlertCircle,
    title: "Medo da Burocracia",
    description: "Importar parece complicado, ilegal ou exige conhecimentos técnicos que você não tem.",
  },
  {
    icon: Lock,
    title: "Crença de Alto Capital Inicial",
    description: "Você acha que precisa de dezenas de milhares para começar a importar de forma profissional.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Você se Identifica com Algum Desses{" "}
            <span className="text-primary">Problemas?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Se você está preso em uma ou mais dessas situações, está no lugar certo para mudar isso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-custom-lg transition-all duration-300 border-2 hover:border-primary/20 group h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                      <Icon className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {problem.title}
                      </h3>
                      <p className="text-muted-foreground">{problem.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
