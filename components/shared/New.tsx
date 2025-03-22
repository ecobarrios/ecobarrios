import { NewsItem } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  news: NewsItem;
}

function New(props: Props) {
  const { news } = props;

  return (
    <div className="flex flex-col md:flex-row gap-3 w-full min-h-60">
      <div className="w-full md:w-1/3">
        <Image
          src={news.littleImage ? news.littleImage : ""}
          alt="image"
          width={200}
          height={200}
          className="rounded-xl w-36 h-32"
        />
      </div>
      <div className="w-full md:w-2/3 flex flex-col span-y-2">
        <Link
          href={`/noticia/${news.id}`}
          className="font-bold md:text-2xl hover:text-gray-500 cursor-pointer"
        >
          {news.title}
        </Link>
        <p className="text-[12px]">`{news.textPrev}[...]`</p>

        <Link
          href={`/noticia/${news.id}`}
          className=" mt-4 md:text-1xlcursor-pointer text-primary-sky hover:text-blue-800"
        >
          Leer más
        </Link>
      </div>
    </div>
  );
}

export default New;
