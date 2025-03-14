"use client";

import Image from "next/image";
import React, { useState } from "react";
import imageBaseButtonInscriptio from "@/public/SVG/image_base_button_inscription.svg";
import FormInscription from "./FormInscription";

function ButtonInscription() {
  const [formInscription, setFormInscription] = useState(false);
  return (
    <>
      <section id="inscripcion" className="flex justify-center flex-col items-center gap-2 m-auto mt-3 md:mt-10">
        <button
          onClick={() => setFormInscription(true)}
          className="text-secondary-cream py-2 p-5 rounded-full bg-primary-sky hover:bg-blue-500 w-5/6 text-2xl md:text-5xl font-bold border-2  shadow-md hover:shadow-lg active:shadow-sm active:translate-y-1  transition-all duration-150 ease-in-out"
        >
          Inscribete aquí
        </button>

        <div className="md:h-10 w-full flex justify-center m-auto text-center md:mb-10">
          <Image
            src={imageBaseButtonInscriptio}
            width={1000}
            height={1000}
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
