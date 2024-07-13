import Hero from "@/components/Hero";
import PartnersCarousel from "@/components/PartnersCarousel";
import DepoimentsList from "@/components/DepoimentsList";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-center md:text-4xl">
          Nossos parceiros
        </h2>
        <PartnersCarousel />
      </section>
      <section className="container space-y-8">
        <h3 className="text-2xl text-center font-bold">
          A COMUNIDADE LÍDER NA AMÉRICA LATINA
        </h3>
        <DepoimentsList />
      </section>
    </div>
  );
}