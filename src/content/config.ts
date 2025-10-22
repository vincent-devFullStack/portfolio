// src/content/config.ts
import { defineCollection, z } from "astro:content";

export const collections = {
  work: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      img: z.string(),
      img_alt: z.string().optional(),
      demo: z.string().url().optional(),
      imgMobile: z.string().optional(),
      rank: z.number().int().min(0).optional(),
      pinned: z.boolean().default(false),
      isMini: z.boolean().default(false),
    }),
  }),
};
