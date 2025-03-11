import BannerAction from "@/components/home/banner-action/BannerAction";
import BannerInformation from "@/components/home/banner-information/BannerInformation";
import ButtonInscription from "@/components/home/button-inscription/ButtonInscription";
import ImageHome from "@/components/home/image-home/ImageHome";
import React from "react";

function HomePage() {
  return (
    <div className="min-h-screen">
      <ImageHome />
      <ButtonInscription />
      <BannerAction/>
      <BannerInformation/>
    </div>
  );
}

export default HomePage;
