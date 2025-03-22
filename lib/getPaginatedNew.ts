
import prisma from "@/lib/prismadb";
import { PaginatedNewsResponse } from "@/interfaces/newsItemResponse.interface";

export async function getPaginatedNews(
  page: number = 1,
  pageSize: number = 5
): Promise<PaginatedNewsResponse> {
  const skip = (page - 1) * pageSize;

  try {
    const news = await prisma.newsItem.findMany({
      skip,
      take: pageSize,
      orderBy: { createdAt: "desc" },
    });

    const total = await prisma.newsItem.count();

    return {
      success: true,
      news,
      total,
      page,
      totalPages: Math.ceil(total / pageSize),
    };
  } catch (error) {
    console.error("❌ Error al obtener noticias paginadas:", error);
    return {
      success: false,
      news: [],
      total: 0,
      page,
      totalPages: 0,
    };
  }
}
