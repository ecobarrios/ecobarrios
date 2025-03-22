"use server"

import { NewsItemInterface } from "@/interfaces/news.interface";
import prisma from "@/lib/prismadb";

export async function createNews(news: NewsItemInterface) {
  try {
    const created = await prisma.newsItem.create({
      data: news,
    });
    return { success: true, news: created };
  } catch (error) {
    console.error("❌ Error en createNews:", error);
    return { success: false, error: (error as Error).message };
  }
}
