import Image from "next/image";
import React from "react";
import imageBannerAction from '@/public/SVG/image_base_button_inscription.svg'

function BannerAction() {
  return (
    <>
      <div className="bg-primary-green h-32 md:h-60 flex items-center">
        <div className="flex flex-col justify-center items-center m-auto w-full gap-2">
          <h1 className="font-extralight text-2xl md:text-7xl text-secondary-cream">
            Convierte tu barrio en{" "}
            <span className="font-extrabold">Ecobarrio</span>
          </h1>

          <div className="md:w-1/2 m-auto flex text-center">
            <p className="text-1xl md:text-3xl font-bold text-secondary-cream">
              ¡Unete al Programa Ecobarrios Santiago y transforma tu comunidad!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-secondary-cream md:h-24 max-w-full">
        <Image src={imageBannerAction} alt={""} className="w-full h-full"       
        />
      </div>
    </>
  );
}

export default BannerAction;
