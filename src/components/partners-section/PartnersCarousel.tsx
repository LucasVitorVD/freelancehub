"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import AblndevLogo from "@/assets/AblndevLogo";
import GlobantLogo from "@/assets/GlobantLogo";
import InnovdLogo from "@/assets/InnovdLogo";
import JonhsonLogo from "@/assets/JohnsonLogo";
import RiversideLogo from "@/assets/RiversideLogo";
import SwissMedicalLogo from "@/assets/SwissMedicalLogo";
import SeekLogo from "@/assets/SeekLogo";
import UnileverLogo from "@/assets/UnileverLogo";
import { Card, CardContent } from "@/components/ui/card";

export default function PartnersCarousel() {
  const partnersList = [
    { logo: <AblndevLogo /> },
    { logo: <GlobantLogo /> },
    { logo: <InnovdLogo /> },
    { logo: <JonhsonLogo /> },
    { logo: <RiversideLogo /> },
    { logo: <SwissMedicalLogo /> },
    { logo: <SeekLogo /> },
    { logo: <UnileverLogo /> }
  ];

  return (
    <Carousel className="w-full max-w-screen-sm mx-auto lg:max-w-full"
    opts={{
      loop: true,
      containScroll: false
    }}
    plugins={[
      AutoScroll({ stopOnInteraction: false }),
    ]}>
    <CarouselContent className="-ml-1">
      {partnersList.map((partner, index) => (
        <CarouselItem key={index} className="px-6 basis-1/2 lg:basis-1/5">
          <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                  {partner.logo}
                </CardContent>
              </Card>
            </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
  );
}