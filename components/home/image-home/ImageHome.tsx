import React from "react";
import imageHomePresentation from "@/public/PNG/imagen_presentation.png";
import BackgroundImageComponent from "./components/BackgroundImageComponent";

function ImageHome() {
  return <BackgroundImageComponent imageUrl={imageHomePresentation.src} />;
}

export default ImageHome;
