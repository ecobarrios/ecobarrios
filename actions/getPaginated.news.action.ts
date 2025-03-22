"use server";
import { PaginatedNewsResponse } from "@/interfaces/newsItemResponse.interface";

export async function getPaginatedNewsAction(page: number = 1) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  try {
    const response = await fetch(
      `${baseUrl}/api/news/getPaginatedNews?page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          tags: ["news"],
        },
      }
    );

    const data: PaginatedNewsResponse = await response.json();

    if (!response.ok) {
      throw new Error("Error al obtener noticias");
    }

    return {
      success: true,
      news: data.news,
      total: data.total,
      totalPages: data.totalPages,
      page: data.page,
    };
  } catch (error) {
    console.error("❌ Error en getPaginatedNews:", error);
    return { success: false, error: (error as Error).message };
  }
}
