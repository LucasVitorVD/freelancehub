import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  PanelsTopLeft,
  SquareUser,
  FileText,
  DollarSign,
  Star,
  LayoutDashboard,
} from "lucide-react";

export default function FunctionalitiesList() {
  return (
    <ul className="grid grid-cols-1 place-content-center gap-8 md:grid-cols-2 lg:grid-cols-3">
      <li>
        <Card className="h-full shadow-md transition-all hover:translate-x-2 hover:-translate-y-2 hover:shadow-lg">
          <CardHeader>
            <div className="flex items-center flex-col gap-3">
              <span className="bg-primary/25 p-2 rounded-full">
                <PanelsTopLeft className="text-primary size-6" />
              </span>
              <p className="text-md font-bold md:text-xl">
                Publicação de Projetos
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              Permita que empresas e indivíduos publiquem projetos detalhados,
              definindo requisitos, prazos e orçamentos. Os freelancers podem
              então visualizar e se candidatar aos projetos que se encaixam em
              suas habilidades.
            </p>
          </CardContent>
        </Card>
      </li>
      <li>
        <Card className="h-full shadow-md transition-all hover:translate-x-2 hover:-translate-y-2 hover:shadow-lg">
          <CardHeader>
            <div className="flex items-center flex-col gap-3">
              <span className="p-2 rounded-full bg-muted-foreground/25">
                <SquareUser className="text-muted-foreground size-6" />
              </span>
              <p className="text-md font-bold md:text-xl">
                Perfis de Freelancers
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              Freelancers podem criar perfis detalhados, exibindo suas
              habilidades, portfólio, avaliações e histórico de trabalho. Isso
              ajuda os empregadores a encontrar o profissional certo para suas
              necessidades específicas.
            </p>
          </CardContent>
        </Card>
      </li>
      <li>
        <Card className="h-full shadow-md transition-all hover:translate-x-2 hover:-translate-y-2 hover:shadow-lg">
          <CardHeader>
            <div className="flex items-center flex-col gap-3">
              <span className="p-2 rounded-full bg-secondary/25">
                <FileText className="text-secondary size-6" />
              </span>
              <p className="text-md font-bold md:text-xl">
                Sistema de Propostas
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              Freelancers podem enviar propostas personalizadas para projetos,
              detalhando suas abordagens, estimativas de tempo e custos. Os
              empregadores podem revisar e comparar propostas para tomar a
              melhor decisão.
            </p>
          </CardContent>
        </Card>
      </li>
      <li>
        <Card className="h-full shadow-md transition-all hover:translate-x-2 hover:-translate-y-2 hover:shadow-lg">
          <CardHeader>
            <div className="flex items-center flex-col gap-3">
              <span className="p-2 rounded-full bg-green-500/25">
                <DollarSign className="text-green-500 size-6" />
              </span>
              <p className="text-md font-bold md:text-xl">
                Sistema de Pagamentos
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              Garanta transações seguras e transparentes com nosso sistema de
              pagamentos integrado. Freelancers recebem pagamentos pontuais,
              enquanto empregadores têm a segurança de que seus fundos estão
              protegidos até a entrega do projeto.
            </p>
          </CardContent>
        </Card>
      </li>
      <li>
        <Card className="h-full shadow-md transition-all hover:translate-x-2 hover:-translate-y-2 hover:shadow-lg">
          <CardHeader>
            <div className="flex items-center flex-col gap-3">
              <span className="p-2 rounded-full bg-accent/25">
                <Star className="text-accent size-6" />
              </span>
              <p className="text-md font-bold md:text-xl">
                Avaliações e Feedback
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              Após a conclusão dos projetos, empregadores e freelancers podem
              deixar avaliações e feedback mútuo. Isso ajuda a construir uma
              reputação confiável e a manter altos padrões de qualidade na
              plataforma.
            </p>
          </CardContent>
        </Card>
      </li>
      <li>
        <Card className="h-full shadow-md transition-all hover:translate-x-2 hover:-translate-y-2 hover:shadow-lg">
          <CardHeader>
            <div className="flex items-center flex-col gap-3">
              <span className="p-2 rounded-full bg-black/25">
                <LayoutDashboard className="text-black size-6" />
              </span>
              <p className="text-md font-bold md:text-xl">
                Dashboard de Projetos
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              Gerencie todos os seus projetos em um único lugar com nosso
              dashboard intuitivo. Veja o status dos projetos, prazos e
              mensagens recentes de forma organizada e acessível.
            </p>
          </CardContent>
        </Card>
      </li>
    </ul>
  );
}
