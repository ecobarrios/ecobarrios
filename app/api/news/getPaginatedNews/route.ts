import { PaginatedNewsResponse } from "@/interfaces/newsItemResponse.interface";
import { NewsItem } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");

  const pageSize = 5;

  const skip = (page - 1) * pageSize;

  try {
    const news: NewsItem[] = await prisma.newsItem.findMany({
      skip,
      take: pageSize,
      orderBy: { createdAt: "desc" },
    });

    const total = await prisma.newsItem.count();

    const response: PaginatedNewsResponse = {
      success: true,
      news,
      total,
      page,
      totalPages: Math.ceil(total / pageSize),
    };

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Error al obtener noticias" },
      { status: 500 }
    );
  }
}
