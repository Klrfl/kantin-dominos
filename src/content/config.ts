import { z, defineCollection } from "astro:content";
const makananCollection = defineCollection({
  type: "content",
  schema: z.object({
    nama: z.string(),
    harga: z.string(),
    gambar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

const minumanCollection = defineCollection({
  type: "content",
  schema: z.object({
    nama: z.string(),
    harga: z.string(),
    gambar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = {
  makanan: makananCollection,
  minuman: minumanCollection,
};
