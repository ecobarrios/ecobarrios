import { NewsItem } from "@prisma/client";

export async function getNewsById(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/news/${id}`
    );

    if (!res.ok) {
      throw new Error("No se pudo cargar la noticia");
    }

    const news: NewsItem = await res.json();
    return news;
  } catch (error) {
    console.error("Error al obtener la noticia:", error);
    return null;
  }
}
