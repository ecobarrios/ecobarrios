import { NewsItemInterface } from "@/interfaces/news.interface";

export async function createNewsAction(news: NewsItemInterface) {
  try {
    const response = await fetch("/api/news/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(news),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Error al crear la noticia");
    }

    return { success: true, news: data.news };
  } catch (error) {
    console.error("❌ Error en createNews:", error);
    return { success: false, error: (error as Error).message };
  }
}
