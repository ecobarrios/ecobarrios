import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  const news = await prisma.newsItem.findUnique({ where: { id } });

  if (!news) {
    return NextResponse.json(
      { error: "Noticia no encontrada" },
      { status: 404 }
    );
  }

  return NextResponse.json(news);
}
