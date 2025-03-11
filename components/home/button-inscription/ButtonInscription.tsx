"use client";

import Image from "next/image";
import React, { useState } from "react";
import imageBaseButtonInscriptio from "@/public/SVG/image_base_button_inscription.svg";
import FormInscription from "./FormInscription";

function ButtonInscription() {
  const [formInscription, setFormInscription] = useState(false);
  return (
    <>
      <section className="flex justify-center flex-col items-center gap-2 m-auto mt-10">
        <button
          onClick={() => setFormInscription(true)}
          className="text-white py-2 p-5 rounded-full bg-cyan-600 w-5/6 text-5xl font-bold border-2  shadow-md hover:shadow-lg active:shadow-sm active:translate-y-1  transition-all duration-150 ease-in-out"
        >
          Inscribete aquí
        </button>

        <div className="h-10 w-full flex justify-center m-auto text-center mb-10">
          <Image
            src={imageBaseButtonInscriptio}
            width={1000}
            height={100}
            alt="base"
          />
        </div>
      {formInscription && (
        <FormInscription onClose={() => setFormInscription(false)} />
      )}
      </section>

    </>
  );
}

export default ButtonInscription;
