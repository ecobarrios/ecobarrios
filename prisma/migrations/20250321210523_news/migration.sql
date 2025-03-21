-- CreateTable
CREATE TABLE "NewsItem" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "textPrev" TEXT NOT NULL,
    "srcImages" TEXT[],
    "urlVideos" TEXT[],
    "noticeTextP1" TEXT NOT NULL,
    "noticeTextP2" TEXT,
    "noticeTextP3" TEXT,
    "href" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NewsItem_pkey" PRIMARY KEY ("id")
);
