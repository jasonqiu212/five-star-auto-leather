import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/pages/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishedDate: z.date(),
      readingTime: z.number(),
      cover: image(),
      coverAlt: z.string(),
    }),
});

export const collections = { articles };
