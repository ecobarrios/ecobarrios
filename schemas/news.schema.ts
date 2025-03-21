import { z } from "zod";

export const newsSchema = z.object({
    title: z.string().min(5, "Título demasiado corto"),
    textPrev: z.string().min(10, "Resumen demasiado corto"),
    srcImages: z.array(z.string().url()).optional(),
    urlVideos: z.array(z.string().url()).optional(),
    noticeTextP1: z.string().min(10, "Primer párrafo requerido"),
    noticeTextP2: z.string().optional(),
    noticeTextP3: z.string().optional(),
    href: z.string().optional(),
  });