import { NewsItem } from "@prisma/client";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  items: NewsItem[];
}

export default function NewsList({ items }: Props) {
  if (items.length === 0) {
    return (
      <div className="h-full flex flex-col justify-center md:p-40 p-10">
        <p className="text-center font-bold md:text-2xl text-gray-500">
          No hay más noticias disponibles.
        </p>
        <Link
          href="/"
          className="text-center font-bold md:text-2xl text-gray-500 hover:text-gray-700 flex justify-center items-center"
        >
          <ChevronLeft className="w-10" />Volver a Home
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 px-6 md:gap-2 gap-8 md:px-4 w-full m-auto mt-6">
      {items.map((news) => (
        <Link
          href={`/noticia/${news.id}`}
          key={news.id}
          className="flex flex-col gap-2 group cursor-pointer"
        >
          <div className="aspect-[2/1] relative overflow-hidden rounded">
            <Image
              src={news.srcImages[0]}
              alt={news.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h3 className="text-lg font-bold leading-snug hover:text-gray-500">
            {news.title}
          </h3>
        </Link>
      ))}
    </div>
  );
}
