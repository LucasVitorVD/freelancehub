import DepoimentCard from "@/components/DepoimentCard";

export default function DepoimentList() {
  const depoimentsList = [
    {
      title: "Transformou nossa produtividade",
      content: "A utilização da nossa plataforma tem sido transformadora para a gestão de projetos na Tech Innovations. A interface intuitiva e as funcionalidades avançadas nos permitiram otimizar nossos processos e aumentar a produtividade da equipe.",
      user: {
        name: "Ana Maria",
        profileImg: "https://randomuser.me/api/portraits/women/3.jpg",
        position: "Gerente de Projetos"
      }
    },
    {
      title: "Ferramenta indispensável",
      content: "Esta plataforma é uma ferramenta indispensável para desenvolvedores. As integrações com outras ferramentas de desenvolvimento e a facilidade de uso tornam o nosso trabalho muito mais ágil e eficiente.",
      user: {
        name: "João Silva",
        profileImg: "https://randomuser.me/api/portraits/men/2.jpg",
        position: "Desenvolvedor Full-Stack"
      }
    },
    {
      title: "Facilitou nossa colaboração",
      content: "A colaboração entre os membros da nossa equipe melhorou significativamente desde que começamos a usar esta plataforma. A comunicação é mais clara e as tarefas são gerenciadas de forma mais eficiente.",
      user: {
        name: "Laura Costa",
        profileImg: "https://randomuser.me/api/portraits/women/4.jpg",
        position: "Coordenadora de Equipe"
      }
    },
    {
      title: "Excelente suporte ao cliente",
      content: "O suporte ao cliente oferecido por esta plataforma é excepcional. Sempre que tivemos alguma dúvida ou problema, a equipe de suporte foi rápida e eficiente em nos ajudar. Recomendo a todos.",
      user: {
        name: "Roberto Carvalho",
        profileImg: "https://randomuser.me/api/portraits/men/4.jpg",
        position: "Gerente de Suporte"
      }
    },
  ]

  return (
    <ul className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2">
      {depoimentsList.map((depoiment, i) => (
        <li key={i}>
          <DepoimentCard
            title={depoiment.title}
            content={depoiment.content}
            user={depoiment.user}
          />
        </li>
      ))}
    </ul>
  );
}
