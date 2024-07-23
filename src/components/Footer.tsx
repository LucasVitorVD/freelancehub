import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle"

export default function Footer() {
  return (
    <footer className="py-8 border-t shadow">
      <div className="container mx-auto px-4 space-y-8">
        <div className="flex items-center justify-between">
          <h4 className="text-2xl font-bold text-primary">FreelanceHub</h4>
          <div className="flex items-center mt-2 space-x-4">
            <a href="https://www.facebook.com" className="hover:text-primary">
              <Facebook className="size-6" />
            </a>
            <a href="https://www.twitter.com" className="hover:text-primary">
              <Twitter className="size-6" />
            </a>
            <a href="https://www.linkedin.com" className="hover:text-primary">
              <Linkedin className="size-6" />
            </a>
            <a href="https://www.instagram.com" className="hover:text-primary">
              <Instagram className="size-6" />
            </a>
            <ModeToggle />
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-6">
          <div className="w-full space-y-2 md:w-1/4">
            <h3 className="text-lg font-bold text-secondary">Sobre Nós</h3>
            <p className="text-sm">
              Somos uma plataforma que conecta freelancers talentosos com
              clientes que precisam de habilidades específicas para seus
              projetos.
            </p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-bold text-secondary">Links Úteis</h3>
            <ul className="text-sm mt-2 space-y-2">
              <li>
                <a href="/about" className="hover:underline">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:underline">
                  Projetos
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contato
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold text-secondary">Contato</h3>
            <p className="text-sm mt-2">
              Email: contato@plataforma.com
              <br />
              Telefone: (11) 1234-5678
              <br />
              Endereço: Rua Exemplo, 123, São Paulo, SP
            </p>
          </div>
        </div>
        <div className="mt-8 pt-4 text-sm text-center">
          © 2024 Plataforma de Freelancers. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
