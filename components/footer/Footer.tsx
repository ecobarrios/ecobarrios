"use client";

import React from "react";
import Image from "next/image";
import iconosFooterIzquierda from "@/public/SVG/iconos_footer_izquierda.svg";
import { menuHeader } from "@/constants/menu";
import Link from "next/link";
import { rrss } from "@/constants/rrss";
import Rrss from "./Rrss";
import PasskeyModal from "../shared/PasskeyModal";
import { useSearchParams } from "next/navigation";

function Footer() {
  const searchParams = useSearchParams();
  const isAdmin = searchParams.get("admin") === "true";

  const currentYear = new Date().getFullYear();

  return (
    <section
      id="footer"
      className="flex flex-col gap-10 items-center bg-primary-mora pb-14 md:pb-0"
    >
      <div className="w-full">
        <div className="p-10 md:p-0 flex md:flex-row flex-col justify-between gap-5 max-w-[400px] md:max-w-[1200px] m-auto md:h-96">
          <div className="flex md:justify-start justify-center items-center md:h-full md:w-full">
            <Link href={"https://www.gobiernosantiago.cl/"}>
              <Image
                src={iconosFooterIzquierda}
                alt=""
                className="w-44 md:w-full"
                width={1000}
                height={1000}
              />
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center w-full h-full">
            <h1 className="text-secondary-cream mb-5 text-1xl md:text-2xl font-bold">
              Programa Ecobarrio
            </h1>
            {menuHeader.map((c) => (
              <Link
                href={`#${c.url}`}
                className="text-secondary-cream cursor-pointer hover:text-slate-50"
                key={c.title}
              >
                {c.title}
              </Link>
            ))}
             {isAdmin && <PasskeyModal />}
            <Link href="?admin=true" className="text-slate-200 hover:text-slate-400 mt-10">
              Admin
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center w-full h-full">
            <h1 className="text-secondary-cream mb-5 text-1xl md:text-2xl font-bold">
              Contacto
            </h1>
            <Link
              href={"https://www.gobiernosantiago.cl/"}
              className="text-secondary-cream cursor-pointer hover:text-slate-50"
            >
              Gobierno Regional Metropolitano
            </Link>
            <Link
              href={"#"}
              className="text-secondary-cream cursor-pointer hover:text-slate-50"
            >
              Consejo Regional
            </Link>
            <h1 className="text-secondary-cream mb-5 text-1xl md:text-2xl font-bold mt-5">
              Redes Sociales
            </h1>

            <div className="grid grid-cols-3 gap-5 ">
              {rrss.map((m) => (
                <Rrss
                  key={m.id}
                  url={m.href}
                  icon={m.icon}
                  titleRrss={m.name}
                />
              ))}
            </div>

           
          </div>
        </div>

        <div className="h-10 text-center text-white">
          <p className="text-[12px]">
            &copy; {currentYear} TitanDev. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
