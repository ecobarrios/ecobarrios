import React from "react";
import Image from "next/image";
import iconosFooterIzquierda from "@/public/SVG/iconos_footer_izquierda.svg";
import { menuHeader } from "@/constants/menu";
import socialNetwork from "@/public/SVG/redes-sociales.svg";
import Link from "next/link";

function Footer() {
  return (
    <section id="footer" className="w-full items-center bg-primary-mora">
      <div className="p-10 md:p-0 flex md:flex-row flex-col justify-between gap-5 max-w-[1200px] m-auto md:h-96">
        <div className="col-span-2 flex justify-start items-center h-full w-full">
          <Image
            src={iconosFooterIzquierda}
            alt={""}
            className=""
            width={1000}
            height={1000}
          />
        </div>
        <div className="col-span-2 flex flex-col justify-center items-center w-full h-full">
          <h1 className="text-secondary-cream mb-5 text-2xl font-bold">
            Programa Ecobarrio
          </h1>
          {menuHeader.map((c) => (
            <Link href={`#${c.url}`} className="text-secondary-cream cursor-pointer" key={c.title}>
              {c.title}
            </Link>
          ))}
        </div>
        <div className="col-span-2 flex flex-col justify-center items-center w-full h-full">
          <h1 className="text-secondary-cream mb-5 text-2xl font-bold">
            Contacto
          </h1>
          <span className="text-secondary-cream cursor-pointer">
            Gobierno Regional Metropolitano
          </span>
          <span className="text-secondary-cream cursor-pointer">
            Consejo Regional{" "}
          </span>
          <h1 className="text-secondary-cream mb-5 text-2xl font-bold mt-5">
            Redes Sociales
          </h1>
          <Image
            src={socialNetwork}
            alt={""}
            className=""
            width={300}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}

export default Footer;
