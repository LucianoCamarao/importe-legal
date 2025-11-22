import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Ex-desempregada, hoje importadora",
    content: "Comecei com apenas R$ 2.000 e no primeiro mês já tinha ROI de 266%. Hoje faturei R$ 45.000 no último trimestre!",
    result: "ROI de 266% no primeiro mês",
    avatar: "MS",
    stars: 5,
  },
  {
    name: "João Santos",
    role: "Ex-vendedor, agora empreendedor",
    content: "Estava cansado de trabalhar para ganhar pouco. Segui o método à risca e em 3 meses já tinha meu primeiro container. Mudou minha vida!",
    result: "Primeiro container em 3 meses",
    avatar: "JS",
    stars: 5,
  },
  {
    name: "Ana Oliveira",
    role: "Professora e importadora nas horas vagas",
    content: "Consegui manter meu emprego e começar minha importadora. O método simplificado me permitiu fazer tudo sem complicação.",
    result: "Renda extra de R$ 8.000/mês",
    avatar: "AO",
    stars: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Começou do zero há 6 meses",
    content: "Nunca imaginei que seria tão acessível. A importação simplificada realmente funciona e não precisa de despachante!",
    result: "Lucro de R$ 15.000 em 6 meses",
    avatar: "CM",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Veja o que Nossos Alunos{" "}
            <span className="text-primary">Estão Conquistando</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Resultados reais de pessoas que começaram do zero, assim como você
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-custom-lg transition-all duration-300 border-2 relative overflow-hidden group">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote className="w-20 h-20" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 italic relative z-10">
                "{testimonial.content}"
              </p>

              {/* Result Badge */}
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ✓ {testimonial.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12 bg-gradient-to-br from-primary to-secondary">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-bold">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional proof */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/30 rounded-full px-6 py-3">
            <span className="text-2xl">🎉</span>
            <span className="font-semibold text-foreground">
              +2.000 alunos já mudaram de vida com nosso método
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
