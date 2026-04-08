import { defineCollection} from "astro:content";
import { z } from "astro:content";
import { glob } from "astro/loaders"

const devlogsCollection = defineCollection({
    loader: glob({pattern: "**/*.md", base: "./src/content/devlogs" }),
    schema: z.object({
        categories: z.array(z.string()).optional(),
        date: z.string(),
        featured: z.boolean(),
        image: z.string().optional(),
        title: z.string(),
    })
});

export const collections = {
    devlogs: devlogsCollection
};