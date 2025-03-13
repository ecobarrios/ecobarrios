import React from "react";
import imageHomePresentation from "@/public/principal.jpg";
import BackgroundImageComponent from "./components/BackgroundImageComponent";

function ImageHome() {
  return <BackgroundImageComponent imageUrl={imageHomePresentation.src} />;
}

export default ImageHome;