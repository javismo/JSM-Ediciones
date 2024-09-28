import { defineCollection, z } from "astro:content";

const books = defineCollection({
  schema: z.object({
    id: z.number(),
    title: z.string(),
    collection: z.string(),
    collectionDescription: z.string(),
    author: z.string(),
    category: z.string(),
    img: z.string(),
    imgDescription: z.string(),
    pages: z.number(),
    language: z.string(),
    description: z.string(),
    premium: z.boolean(),
    buy: z.object({
        us: z.string(),
        uk: z.string(),
        de: z.string(),
        fr: z.string(),
        es: z.string(),
        it: z.string(),
        nl: z.string(),
        pl: z.string(),
        se: z.string(),
        jp: z.string(),
        ca: z.string(),
        au: z.string(),
    }),
    buyPremium: z.object({
        us: z.string(),
        uk: z.string(),
        de: z.string(),
        fr: z.string(),
        es: z.string(),
        it: z.string(),
        nl: z.string(),
        pl: z.string(),
        se: z.string(),
        jp: z.string(),
        ca: z.string(),
        au: z.string(),
    }),
  })
})

export const collections = { books }