import Image from "next/image";
import React from "react";
import imageBottom from "@/public/JPG/DECO_FLORES_1.jpg";
import imageBannerAction from "@/public/SVG/image_base_button_inscription.svg";
import ImageBottom from "@/components/shared/ImageBottom";

function BannerAction() {
  return (
    <>
      <div className="bg-primary-green h-32 md:h-60 flex items-center rounded-xl">
        <div className="flex flex-col justify-center items-center m-auto md:w-full gap-2">
          <h1 className="font-extralight text-1xl md:text-5xl text-secondary-cream">
            Convierte tu barrio en{" "}
            <span className="font-extrabold">Ecobarrio</span>
          </h1> 

          <div className="md:w-full m-auto text-center">
            <p className="text-[14px] md:text-3xl font-bold text-secondary-cream">
              ¡Únete al Programa Ecobarrios Santiago <br />y transforma tu
              comunidad!
            </p>
          </div>
        </div>
      </div>

      <ImageBottom src={imageBottom.src} />

      <div className="bg-secondary-cream md:h-24 max-w-full">
        <Image src={imageBannerAction} alt={""} className="w-full h-full" />
      </div>
    </>
  );
}

export default BannerAction;
