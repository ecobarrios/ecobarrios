import New from "@/components/shared/New";
import { news } from "@/constants/news";
import React from "react";

function News() {
  return (
    <section id="noticias" className="md:py-20">
      <div className="text-left my-10">
        <h1 className="text-2xl md:text-4xl font-bold ">Noticias</h1>
        <div className="w-full md:w-[145px] h-2 bg-primary-yellow"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {news.map((n) => (
          <New
            key={n.id}
            title={n.title}
            textPrev={n.textPrev}
            noticeText={n.noticeText}
            src={n.src}
            href={n.href}
          />
        ))}
      </div>
    </section>
  );
}

export default News;
