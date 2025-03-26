import React from "react";
import Image from "next/image";
import logoGob from "@/public/SVG/logo_header_svg.svg";
import decoMolde from "@/public/PNG/DECO_MOLDE.png";

function OneProjectOf() {
  return (
    <div className="flex flex-col justify-center items-center my-10 w-full">
      <p>un proyecto de:</p>
      <Image
        src={logoGob}
        width={100}
        height={100}
        className="w-48 mt-3"
        alt="logo-gob"
      />
    </div>
  );
}

export default OneProjectOf;
