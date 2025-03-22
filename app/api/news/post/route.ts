import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { NewsItem } from "@prisma/client";
import { revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const data: NewsItem = await req.json();

    if (
      !data.title ||
      !data.textPrev ||
      !data.noticeTextP1 ||
      !data.srcImages?.length
    ) {
      return NextResponse.json(
        { success: false, error: "Faltan datos obligatorios" },
        { status: 400 }
      );
    }

    const newNewsItem = await prisma.newsItem.create({
      data,
    });

    revalidateTag("news");

    return NextResponse.json(
      { success: true, news: newNewsItem },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
