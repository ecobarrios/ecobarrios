import React from "react";

function BannerInformation() {
  return (
    <div className="flex justify-center items-center w-full m-auto">
      <div className=" h-auto w-full justify-center flex items-center flex-col">
        <div className="bg-secondary-brown w-full h-auto text-center py-5">
          <h1 className="font-extralight text-2xl md:text-7xl text-secondary-cream">
            ¿Que entedemos por Ecobarrio?
          </h1>
        </div>
        <div className="max-w-[900px] md:py-5 p-5">
          <p className="text-secondary-brown md:text-2xl text-justify">
            Un <span className="font-bold">Ecobarrio</span> es una comunidad organizada que trabaja por un entorno mas sustentable
            mejorando la calidad de vida y <span className="font-bold">protegiendo la naturaleza local</span>. A través de soluciones ecológicas y sociales, 
            impulsan cambios positivos y duraderos en su barrio, siempre con un compromiso ambiental.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BannerInformation;
