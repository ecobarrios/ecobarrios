import Footer from "@/components/footer/Footer";
import BannerActionDos from "@/components/home/banner-action-dos/BannerActionDos";
import BannerAction from "@/components/home/banner-action/BannerAction";
import BannerInformation from "@/components/home/banner-information/BannerInformation";
import ButtonInscription from "@/components/home/button-inscription/ButtonInscription";
import ImageHome from "@/components/home/image-home/ImageHome";
import News from "@/components/home/news/News";
import VideoComponent from "@/components/home/video/VideoComponent";
import React from "react";


function HomePage() {
  return (
    <div className="min-h-screen">
      <ImageHome />

      <div className="px-8 md:px-0 md:max-w-[1200px] m-auto flex flex-col space-y-5">
        <ButtonInscription />
        <BannerAction />
        <BannerInformation />
        <News />
        <VideoComponent />
        <BannerActionDos />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
