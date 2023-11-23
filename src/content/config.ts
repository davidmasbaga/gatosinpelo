import { z, defineCollection } from "astro:content";

const postsCollections = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    category: z.array(z.string()),
    tags: z.array(z.string())
  }),
});



const pagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
}),
});


export const collections ={
    posts:postsCollections,
    pages:pagesCollection,
}