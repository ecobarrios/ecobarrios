"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoEcoSVG from "@/public/SVG/logo_ecobarrios_svg.svg";
import logoHeaderSvg from "@/public/SVG/logo_header_svg.svg";
import { menuHeader } from "@/constants/menu";
import subrayadoCeleste from "@/public/SVG/subrayado_celeste.svg";
import subrayadoMora from "@/public/SVG/subrayado_mora.svg";
import subrayadoRojo from "@/public/SVG/subrayado_red.svg";
import subrayadoAmarillo from "@/public/SVG/subrayado_amarillo.svg";
import subrayadoVerde from "@/public/SVG/subrayado_verde.svg";
import Link from "next/link";

function Header() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <nav className="w-full bg-secondary-cream h-36 flex items-center justify-between md:justify-center gap-10 px-6 fixed shadow-sm z-50">
      <Link href={"#home"} className="hidden md:block">
        <Image src={logoHeaderSvg} alt="logo" width={300} height={300} className="w-60" />
      </Link>
      
      <Link href={"#home"} className="flex md:justify-center justify-start md:items-center  items-start">
        <Image src={logoEcoSVG} alt="logo" width={300} height={300} className="w-60"/>
      </Link>

      <div className="hidden md:flex gap-10 items-center">
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
            <Link
              href={`#${m.url}`}
              key={m.key}
              className="flex flex-col items-center gap-2"
            >
              <span className="cursor-pointer text-primary-green font-bold hover:text-secondary-green active:translate-y-1 transition-all duration-150 ease-in-out">
                {m.title}
              </span>
              <Image src={subrayado} alt="sub" width={1000} height={1000} className="w-20" />
            </Link>
          );
        })}
      </div>

      <div className="md:hidden flex items-center">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="flex justify-end">
              <Menu className=" text-primary-green"  size={50}/>
          </SheetTrigger>

          <SheetContent side="right" className="bg-secondary-cream w-3/4 p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-bold text-primary-green">Menú</span>
            
            </div>

            <div className="flex flex-col gap-4">
              {menuHeader.map((m) => (
                <Link
                  key={m.key}
                  href={`#${m.url}`}
                  className="text-2xl font-semibold text-primary-green hover:text-secondary-green transition-all duration-150"
                  onClick={handleClose}
                >
                  {m.title}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Header;
