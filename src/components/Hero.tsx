import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import HeroImage from "../../public/hero-person.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-wrap items-center justify-around overflow-clip border-b shadow-sm pt-8 px-8">
      <div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold md:text-6xl">
            Transformando ideias
            <br />
            inovadoras em soluções
            <br />
            <button className="rounded-full bg-secondary text-white p-1 cursor-default md:p-2">
              <MoveRight className="size-4 md:size-8" />
            </button>{" "}
            incríveis
          </h1>
          <p className="text-sm md:text-base">
            Desenvolva seu negócio de forma rápida e segura. <br /> Conectamos
            você com milhares de talentos no seu idioma e fuso horário.
          </p>
        </div>

        <Button
          variant="secondary"
          className="mt-6 py-6 text-base"
        >
          Comece já!
        </Button>
      </div>

      <figure className="relative">
        <div className="bg-secondary rounded-full absolute -z-10 top-7 right-2 size-80 md:size-96" />
        <Image src={HeroImage} width={400} height={400} alt="Hero image" />
      </figure>
    </section>
  );
}
