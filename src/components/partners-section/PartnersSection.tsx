import PartnersCarousel from "./PartnersCarousel";

export default function PartnersSection() {
  return (
    <section className="space-y-6 pt-10">
      <h2 
        className="text-2xl font-bold text-center md:text-4xl"
      >
        Nossos parceiros
      </h2>
      <PartnersCarousel />
    </section>
  );
}
