// Componente completo para crear una noticia con imágenes, usando React Hook Form, Zod y ShadCN

"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CldUploadButton } from "next-cloudinary";
import { NewsItemInterface } from "@/interfaces/news.interface";
import { newsSchema } from "@/schemas/news.schema";
import { createNews } from "@/actions/create.news.action";

const CreateNewsForm = () => {
  const { toast } = useToast();
  const form = useForm<NewsItemInterface>({
    resolver: zodResolver(newsSchema),
    defaultValues: {
      title: "",
      textPrev: "",
      srcImages: [],
      urlVideos: [""],
      noticeTextP1: "",
      noticeTextP2: "",
      noticeTextP3: "",
      href: "",
    },
  });

  async function onSubmit(values: z.infer<typeof newsSchema>) {
    const response = await createNews(values);
    console.log("response", response);
  }

  const handleCloudinaryUpload = (result: any) => {
    const url = result.info.secure_url;
    const currentImages = form.getValues("srcImages") || [];
    form.setValue("srcImages", [...currentImages, url]);
    toast({
      title: "UP¡",
      description: "imagenes subidas",
      className: "bg-green-400",
    });
  };

  return (
    <>
      <Form {...form}>
        <div className="mt-3 text-3xl text-black text-center">
          Crea una noticia
        </div>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 max-w-2xl mx-auto p-4"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Título</FormLabel>
                <FormControl>
                  <Input placeholder="Título de la noticia" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="textPrev"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Texto Previo / Resumen</FormLabel>
                <FormControl>
                  <Textarea placeholder="Resumen de la noticia" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {["noticeTextP1", "noticeTextP2", "noticeTextP3"].map(
            (name, index) => (
              <FormField
                key={name}
                control={form.control}
                name={name as "noticeTextP1" | "noticeTextP2" | "noticeTextP3"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{`Párrafo ${index + 1}`}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={`Contenido del párrafo ${index + 1}`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )
          )}

          <FormField
            control={form.control}
            name="href"
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL (link de más información)</FormLabel>
                <FormControl>
                  <Input placeholder="https://..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormItem className="flex flex-col">
            <FormLabel>Subir Imágenes</FormLabel>
            <CldUploadButton
              uploadPreset="ecobarrio"
              onSuccess={handleCloudinaryUpload}
              className="bg-green-400 hover:bg-green-600 py-2 px-3 rounded-xl text-white font-bold"
            />
          </FormItem>

          <FormField
            control={form.control}
            name="srcImages"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Imágenes Seleccionadas (URLs)</FormLabel>
                <FormControl>
                  <Textarea
                    readOnly
                    value={field.value ? field.value.join(",\n") : ""}
                    className="h-32"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="urlVideos"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Videos (URLs)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Pega aquí las URLs de videos, separadas por coma"
                    onChange={(e) =>
                      field.onChange(
                        e.target.value.split(",").map((url) => url.trim())
                      )
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Crear noticia</Button>
        </form>
      </Form>
    </>
  );
};

export default CreateNewsForm;
