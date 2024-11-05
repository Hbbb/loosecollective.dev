import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    // using zod to define type-safe frontmatter of our mdx files
    // astro will generate types definitions for our project so we can use them in templates
    // also it will check every newly created frontmatter in the content/blog directory
    z.object({
      title: z.string(),
      tags: z.array(z.string()),
      date: z.coerce.date(),
    }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      description: z.string(),
      tags: z.array(z.string()),
      client: z.string().optional(),
      date: z.coerce.date().optional(),
    }),
});

// This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};
