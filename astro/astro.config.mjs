// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://halla.ai',
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => {
        const tagMatch = new URL(page).pathname.match(/^\/(?:en\/)?tags\/([^/]+)\/?$/);
        if (!tagMatch) return true;
        const tag = decodeURIComponent(tagMatch[1]);
        return tag === tag.toLocaleLowerCase('en-US');
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
