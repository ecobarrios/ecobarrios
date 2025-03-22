

export const dynamic = 'force-dynamic';
import NewsList from "@/components/home/news/NewsList";
import OneProjectOf from "@/components/shared/OneProjectOf";
import PaginationButtons from "@/components/shared/PaginationButtons";
import { getPaginatedNews } from "@/lib/getPaginatedNew";

interface PageProps {
  params: { page: string };
}

async function NewsEntryPage({ params }: PageProps) {
  if (params.page == "") {
    params.page = "1";
  }
  const pageNumber = parseInt(params.page, 10);
  const news = await getPaginatedNews(pageNumber);

  return (
    <div className="max-w-[1000px] flex flex-col justify-center items-center m-auto py-32">
      <h1 className="text-2xl md:text-4xl font-bold ">Noticias</h1>
      <div className="w-full md:w-[145px] h-1 md:h-2 bg-primary-yellow"></div>
      <NewsList items={news.news!} />
      {news.news?.length! > 0 && <PaginationButtons currentPage={pageNumber} />}
      <OneProjectOf/>
    </div>
  );
}

export default NewsEntryPage;
