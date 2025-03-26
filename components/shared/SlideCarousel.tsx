"use client";

import Autoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";
import slider1 from "@/public/PNG/slider_1.png";
import slider2 from "@/public/PNG/slider_2.png";
import slider3 from "@/public/PNG/slider_3.png";
import imgBaseSlider from "@/public/SVG/image_base_button_inscription.svg"
import Image from "next/image";
function SlideCarousel() {
  const plugin = useRef(Autoplay({ delay: 2500, stopOnInteraction: false }));

  const imagesSlide = [
    { id: 1, src: slider1 },
    { id: 2, src: slider2 },
    { id: 3, src: slider3 },
  ];

  return (
    <div className="relative w-full pt-28">
      <Carousel
        plugins={[plugin.current]}
        className="w-full "
       
      >
        <CarouselContent>
          {imagesSlide.map((i) => (
            <CarouselItem key={i.id}>
              <Card className="rounded-none shadow-none w-full bg-transparent">
                <div
                  className="flex md:min-h-[60vh] md:max-h-[60vh] h-[300px]  md:bg-cover bg-center bg-contain bg-no-repeat items-center justify-center p-6"
                  style={{ backgroundImage: `url(${i.src.src})` }}
                />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {" "}
        <CarouselPrevious className="absolute left-4 top-2/4 transform -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full" />
        <CarouselNext className="absolute right-4 top-2/4  transform -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full" />
      </Carousel>
      <div className="hidden md:flex w-full justify-center m-auto text-center md:mb-10" >
          <Image
            src={imgBaseSlider}
            width={1000}
            height={1000}
            alt="base"
            className="w-full"
          />
        </div>
    </div>
  );
}

export default SlideCarousel;
