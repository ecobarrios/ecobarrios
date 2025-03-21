import ImageBottom from "@/components/shared/ImageBottom";
import imageBottom2 from "@/public/JPG/DECO_FLORES_2.jpg"
import React from "react";

function BannerInformation() {
  return (
    <div className="w-full flex flex-col">

    <div className="flex justify-center items-center md:w-full m-auto mb-5 md:mb-0">
      <div className=" h-auto w-full justify-center flex items-center flex-col md:mt-10">
        <div className="bg-secondary-brown w-full h-auto text-center py-5 rounded-xl">
          <h1 className="font-extralight text-1xl md:text-7xl text-secondary-cream">
            ¿Qué entedemos por Ecobarrio?
          </h1>
        </div>
        <div className=" mt-5 md:py-5">
          <p className="text-secondary-brown text-[15px] md:text-2xl text-justify md:mx-20">
            Un <span className="font-bold">Ecobarrio</span> es una comunidad organizada que trabaja por un entorno más sustentable
            mejorando la calidad de vida y <span className="font-bold">protegiendo la naturaleza local</span>. A través de soluciones ecológicas y sociales, 
            impulsa cambios positivos y duraderos en su barrio, siempre con un compromiso ambiental.
          </p>
        </div>
      </div>
    </div>
    <ImageBottom src={imageBottom2.src} />
    </div>
  );
}

export default BannerInformation;
