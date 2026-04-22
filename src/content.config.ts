import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders"

const devlogsCollection = defineCollection({
    loader: glob({pattern: "**/*.md", base: "./src/content/devlogs" }),
    schema: z.object({
        project: z.string().optional(),
        date: z.string(),
        featured: z.boolean(),
        image: z.string().optional(),
        title: z.string(),
        link: z.string(),
    })
});

export const collections = {
    devlogs: devlogsCollection
};