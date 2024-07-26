import Hero from "@/components/Hero";
import PartnersCarousel from "@/components/PartnersCarousel";
import DepoimentsList from "@/components/DepoimentsList";
import FunctionalitiesList from "@/components/FunctionalitiesList";
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <section className="space-y-8 py-4">
        <h2 className="text-2xl font-bold text-center">Nossos parceiros</h2>
        <PartnersCarousel />
      </section>
      <section className="container space-y-8">
        <h3 className="text-2xl text-center font-bold">
          A COMUNIDADE LÍDER NA AMÉRICA LATINA
        </h3>
        <DepoimentsList />
      </section>
      <section className="container space-y-8 py-4">
        <div>
          <h4 className="text-2xl font-bold">
            DESCUBRA TALENTOS COM AS HABILIDADES QUE VOCÊ PRECISA
          </h4>
          <p className="text-sm text-muted-foreground">
            Conectamos freelancers com clientes nos EUA
          </p>
        </div>
        <FunctionalitiesList />
      </section>
      <section className="py-16">
        <div className="container mx-auto text-center space-y-8">
          <h3 className="text-3xl font-bold">
            Pronto para transformar suas ideias em soluções incríveis?
          </h3>
          <p className="text-lg">
            Cadastre-se agora e conecte-se com talentos de todo o mundo.
          </p>
          <Link className={`${buttonVariants({ variant: "secondary" })} py-6 px-8`} href="#">
            Cadastre-se Gratuitamente
          </Link>
        </div>
      </section>
    </div>
  );
}