import prisma from "@/lib/prismadb";

export async function getNewsById(id: string) {
  try {
    const newsItem = await prisma.newsItem.findUnique({
      where: { id },
    });

    return newsItem;
  } catch (error) {
    console.error("❌ Error al buscar la noticia:", error);
    throw new Error("Error interno al obtener la noticia");
  }
}
