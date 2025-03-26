export const dynamic = 'force-dynamic';


import React from "react";
import Image from "next/image";
import Link from "next/link";
import OneProjectOf from "@/components/shared/OneProjectOf";
import { getNewsById } from "@/lib/news";

interface PageProps {
  params: {
    id: string;
  };
}

async function NewPage({ params }: PageProps) {
  const news = await getNewsById(params.id);

//   console.log("news", news);

  if (!news) {
    return <div>No se encontró la noticia</div>;
  }

  return (
    <div className="md:w-[1200px] px-10 md:px-0 flex flex-col justify-center m-auto py-40">
      <h1 className="md:text-7xl text-1xl  mb-2 md:mb-4 text-gray-600">{news.title}</h1>
      <div className="w-full md:w-full h-1 md:h-2 bg-primary-yellow my-2 md:my-5"></div>
      <Image
        src={news.srcImages[0]}
        alt="image"
        width={1000}
        height={1000}
        className="rounded-xl w-full m-auto"
      />

      {news.noticeTextP1 != "" && (
        <p className="mt-5 md:text-[20px] text-justify text-gray-600">{news.noticeTextP1}</p>
      )}

      {news.srcImages.length > 2 && (
        <img
          src={news.srcImages[1]}
          alt="imagen"
          className="w-full h-60 rounded-xl"
        />
      )}
      {news.noticeTextP2 != "" && (
        <p className="mt-5 md:text-[20px] text-justify text-gray-600">{news.noticeTextP2}</p>
      )}

      {news.srcImages.length > 2 && (
        <img
          src={news.srcImages[2]}
          alt="img"
          className="w-full h-60 rounded-xl"
        />
      )}
      {news.noticeTextP3 != "" && (
        <p className="mt-5 md:text-[20px] text-justify text-gray-600">
          {news.noticeTextP3}{" "}
         
        </p>
      )}

      <OneProjectOf />
    </div>
  );
}

export default NewPage;
