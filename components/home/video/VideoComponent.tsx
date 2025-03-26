import ImageBottom from "@/components/shared/ImageBottom";
import VideoSite from "@/components/shared/VideoSite";
import { videos } from "@/constants/videos";
import imageBottomVideo from "@/public/SVG/image_base_button_inscription.svg";
import Image from "next/image";
import imageBottomBase from "@/public/JPG/DECO_FLORES_3.jpg";

import React from "react";

function VideoComponent() {
  return (
    <section className="flex flex-col md:my-10 md:py-10">
      <ImageBottom src={imageBottomBase.src} />
      <div className="bg-secondary-cream md:h-28 max-w-full">
        <Image src={imageBottomVideo} alt={""} className="w-full h-full" />
      </div>

      <div className="text-left py-10 md:py-20" id="galeria">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-600  " >Galería</h1>
        <div className="w-full md:w-[130px] h-2 bg-primary-green"></div>
      </div>
      <div className="grid grid-cols-1 m-auto md:grid-cols-3 md:gap-20 gap-5">
        {videos.map((v) => (
          <VideoSite key={v.id} url={v.url} />
        ))}
      </div>
    </section>
  );
}

export default VideoComponent;
