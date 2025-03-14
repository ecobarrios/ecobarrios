import Image from "next/image";
import React from "react";
import imageBannerActionDos from "@/public/SVG/imagen-banner-action-2.svg";

function BannerActionDos() {
  return (
    <div className="flex flex-col bg-secondary-cream space-y-10 pb-10">
      <Image src={imageBannerActionDos} alt={""} className="w-full" />

      <div className="text-primary-mora text-center space-y-4">
        <p className="text-2xl md:text-5xl font-bold">
          Súmate al Programa Ecobarrios Santiago{" "}
        </p>
        <p className="text-1xl md:text-2xl">y construyamos juntos un futuro más verde</p>
      </div>
    </div>
  );
}

export default BannerActionDos;
