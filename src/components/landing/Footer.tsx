import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Importador do Zero</h3>
              <p className="text-sm text-background/80 mb-4">
                O método mais completo e acessível para você começar sua importadora legalizada do zero.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Sobre o Curso
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Perguntas Frequentes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Política de Reembolso
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="bg-background/20 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <p>© 2024 Importador do Zero. Todos os direitos reservados.</p>
            <p>CNPJ: 00.000.000/0001-00</p>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 text-xs text-background/60 text-center">
            <p>
              Este site não faz parte do website do Facebook ou Facebook Inc. Além disso, este site NÃO é 
              endossado pelo Facebook de forma alguma. FACEBOOK é uma marca registrada da FACEBOOK, Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
