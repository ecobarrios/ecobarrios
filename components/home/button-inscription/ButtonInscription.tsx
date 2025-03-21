"use client";


import React, { useState } from "react";
import imageBaseButtonInscriptio from "@/public/SVG/image_base_button_inscription.svg";
import FormInscription from "./FormInscription";

function ButtonInscription() {
  const [formInscription, setFormInscription] = useState(false);
  return (
    <>
      <section id="inscripcion" className="flex justify-center flex-col items-center gap-2 m-auto md:mb-9 md:mt-6 w-full md:pt-20">
        <button
          onClick={() => setFormInscription(true)}
          className="text-secondary-cream py-2 p-5 rounded-full bg-primary-sky hover:bg-blue-500 w-5/6 text-1xl md:text-5xl font-bold   shadow-md hover:shadow-lg active:shadow-sm active:translate-y-1  transition-all duration-150 ease-in-out"
        >
          Inscríbete aquí
        </button>

       
      {formInscription && (
        <FormInscription onClose={() => setFormInscription(false)} />
      )}
      </section>

    </>
  );
}

export default ButtonInscription;
