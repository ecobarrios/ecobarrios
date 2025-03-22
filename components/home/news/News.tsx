import { getPaginatedNewsAction } from "@/actions/getPaginated.news.action";
import New from "@/components/shared/New";
import { NewsItem } from "@prisma/client";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

async function News() {
  const news = await getPaginatedNewsAction(1);

  return (
    <section id="noticias" className="md:py-20">
      <div className="text-left py-8 md:my-10 md:py-0">
        <h1 className="text-2xl md:text-4xl font-bold ">Noticias</h1>
        <div className="w-full md:w-[145px] h-2 bg-primary-yellow"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {news && news.news?.slice(0, 4).map((n: NewsItem) => <New news={n} />)}
      </div>
      <div className="mt-10 w-64">
        <Link
          className="bg-slate-600 flex gap-3 text-slate-50 hover:bg-slate-800 py-4 px-5 rounded-xl"
          href={"/noticias-entradas/1"}
        >
          {" "}
          <ChevronLeft className="text-white" />
          <h1>Entradas anteriores</h1>
        </Link>
      </div>
    </section>
  );
}

export default News;
