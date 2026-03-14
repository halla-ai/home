import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    categories: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    summary: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    tools: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const faculty = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faculty' }),
  schema: z.object({
    name: z.string(),
    name_en: z.string().optional(),
    role: z.string().optional(),
    title: z.string(),
    photo: z.string(),
    specialization: z.string(),
    research_areas: z.array(z.string()),
    teaching_areas: z.array(z.string()).default([]),
    phone: z.string().optional(),
    email: z.string(),
    office: z.string().optional(),
    education: z.array(z.string()),
    experience: z.array(z.string()).default([]),
    website: z.string().optional(),
    scholar: z.string().optional(),
    github: z.string().optional(),
    linkedin: z.string().optional(),
    order: z.number().default(0),
  }),
});

const courses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    track: z.enum(['ai-core', 'sw-system', 'data-analysis', 'ai-application', 'capstone', 'general']),
    semester: z.string(),
    credits: z.number().default(3),
    type: z.enum(['required', 'elective']).default('elective'),
    description: z.string(),
    order: z.number().default(0),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    photo: z.string(),
    designation: z.string(),
    content: z.string(),
    order: z.number().default(0),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  posts,
  projects,
  faculty,
  courses,
  testimonials,
  pages,
};
