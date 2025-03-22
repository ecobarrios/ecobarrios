import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;

    const newsItem = await prisma.newsItem.findUnique({ 
      where: { id: id } 
    });

    if (!newsItem) {
      return NextResponse.json(
        { error: "Noticia no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(newsItem);
  } catch (error) {
    console.error("Error fetching news item:", error);
    return NextResponse.json(
      { error: "Error al buscar la noticia" },
      { status: 500 }
    );
  }
}