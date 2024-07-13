import Hero from "@/components/Hero";
import PartnersCarousel from "@/components/PartnersCarousel";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <section className="space-y-6 pt-10">
        <h2 className="text-2xl font-bold text-center md:text-4xl">
          Nossos parceiros
        </h2>
        <PartnersCarousel />
      </section>
    </div>
  );
}