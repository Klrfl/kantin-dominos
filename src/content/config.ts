import { z, defineCollection } from "astro:content";

const commonSchema = z.object({
  title: z.string(),
  harga: z.string(),
  gambar: z.object({
    src: z.string().optional(),
    alt: z.string().optional(),
  }),
  rekomendasi: z.boolean().optional(),
});

const makananCollection = defineCollection({
  type: "content",
  schema: commonSchema,
});

const minumanCollection = defineCollection({
  type: "content",
  schema: commonSchema,
});

export const collections = {
  makanan: makananCollection,
  minuman: minumanCollection,
};
