import { NewsItem } from "@prisma/client";



export interface PaginatedNewsResponse {
  success: boolean;
  news: NewsItem[];
  total: number;
  page: number;
  totalPages: number;
}
