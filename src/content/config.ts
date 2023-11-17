import { z, defineCollection } from "astro:content";

const commonSchema = z.object({
  nama: z.string(),
  harga: z.string(),
  gambar: z.object({
    src: z.string(),
    alt: z.string(),
  }),
})

const makananCollection = defineCollection({
  type: "content",
  schema: commonSchema
});

const minumanCollection = defineCollection({
  type: "content",
  schema: commonSchema
});

export const collections = {
  makanan: makananCollection,
  minuman: minumanCollection,
};
