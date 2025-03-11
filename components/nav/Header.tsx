import React from "react";
import Image from "next/image";
import logoSVG from "@/public/SVG/logo_header_svg.svg";
import logoEcoSVG from "@/public/SVG/logo_ecobarrios_svg.svg";
import { menuHeader } from "@/constants/menu";
import subrayadoCeleste from "@/public/SVG/subrayado_celeste.svg";
import subrayadoMora from "@/public/SVG/subrayado_mora.svg";
import subrayadoRojo from "@/public/SVG/subrayado_red.svg";
import subrayadoAmarillo from "@/public/SVG/subrayado_amarillo.svg";
import subrayadoVerde from "@/public/SVG/subrayado_verde.svg";

function Header() {
  return (
    <nav className="w-full bg-slate-50 h-32 flex text-black items-center justify-center fixed shadow-sm z-50">
      <div className="grid grid-cols-9 max-w-screen-xl w-full mx-auto place-items-center">
        <div className="col-span-2 flex justify-center w-60">
          <Image
            src={logoSVG}
            alt="logo"
            width={1000}
            height={1000}
            className="w-60"
          />
        </div>

        <div className="col-span-2 flex justify-center w-60">
          <Image
            src={logoEcoSVG}
            alt="logo"
            width={1000}
            height={1000}
            className="w-60"
          />
        </div>

        <div className="col-span-5 flex gap-14 items-center justify-center">
          {menuHeader.map((m) => {
            let subrayado;

            switch (m.key) {
              case "inscription":
                subrayado = subrayadoRojo;
                break;
              case "news":
                subrayado = subrayadoAmarillo;
                break;
              case "activities":
                subrayado = subrayadoMora;
                break;
              case "red":
                subrayado = subrayadoCeleste;
                break;
              case "contact":
                subrayado = subrayadoVerde;
                break;
              default:
                subrayado = subrayadoCeleste;
                break;
            }
            return (
              <div key={m.key} className="flex flex-col items-center gap-2">
                <span className="cursor-pointer text-green-600 font-bold hover:text-green-800">
                  {m.title}
                </span>
                <Image
                  src={subrayado}
                  alt="sub"
                  width={1000}
                  height={1000}
                  className="w-20"
                />
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Header;
