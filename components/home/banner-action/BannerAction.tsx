import Image from "next/image";
import React from "react";

function BannerAction() {
  return (
    <>
      <div className="bg-green-600 h-60 flex items-center">
        <div className="flex flex-col justify-center items-center m-auto w-full gap-2">
          <h1 className="font-extralight text-7xl">
            Convierte tu barrio en{" "}
            <span className="font-extrabold">Ecobarrio</span>
          </h1>

          <div className="w-1/2 m-auto flex text-center">
            <p className="text-3xl font-bold">
              ¡Unete al Programa Ecobarrios Santiago y transforma tu comunidad!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-teal-50 h-24"></div>
    </>
  );
}

export default BannerAction;
