"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
}

export default function PaginationButtons({ currentPage }: PaginationProps) {
  const router = useRouter();

  const goToPage = (page: number) => {
    router.push(`/noticias-entradas/${page}`);
  };

  return (
    <div className="flex justify-between mt-4 w-full">
      <Button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1}
        className="bg-slate-600 px-4 py-2 rounded disabled:opacity-50"
      >
        <ChevronLeft />
        Entradas anteriores
      </Button>

      <Button
        onClick={() => goToPage(currentPage + 1)}
        className="bg-slate-600 px-4 py-2 rounded"
      >
        Entradas siguientes
        <ChevronRight />
      </Button>
    </div>
  );
}
