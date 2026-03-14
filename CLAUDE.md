# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

halla.ai — 제주한라대학교 인공지능학과 (Cheju Halla University, Dept. of AI) official website.
Bilingual (ko/en), dark/light mode, deployed to https://halla.ai via GitHub Pages.

## Commands

```bash
make install     # Install dependencies (pnpm)
make dev         # Start dev server (localhost:4321)
make build       # Production build → astro/dist/
make preview     # Preview production build
make clean       # Remove build artifacts
```

## Architecture

### Tech Stack
- **Astro 6** (static output), **Tailwind CSS v4** (via @tailwindcss/vite), **TypeScript**
- Node.js >=22.12.0, pnpm as package manager

### Tailwind v4 Critical Notes
- Dark mode: `@custom-variant dark (&:where(.dark, .dark *));` in global.css — class-based, NOT media query
- Custom `.container` is defined OUTSIDE `@layer` to override Tailwind's built-in responsive container (max-width: 1200px)
- Theme colors defined in `@theme {}` block become Tailwind utilities (e.g., `--color-accent` → `bg-accent`)

### i18n
- Korean (ko) = default locale, no URL prefix: `/about/`
- English (en) = prefixed: `/en/about/`
- Translations: `src/i18n/ko.json`, `src/i18n/en.json`
- Helper: `t(locale, 'key.path')` for dot-notation translation lookup
- Every Korean page has an English mirror in `src/pages/en/`

### Content Collections (Astro Content Layer)
- `src/content/{collection}/{locale}/*.md` — locale-separated
- Collections: `posts`, `projects`, `faculty`, `courses`, `testimonials`, `pages`
- Filter by locale: `.filter(p => p.id.startsWith(\`${locale}/\`))`
- Schemas defined in `src/content.config.ts` with Zod

### Layouts
- `BaseLayout.astro` — root (header + footer + dark mode init + film grain + scroll observer)
  - Accepts `heroPage` prop → adds `has-hero` class to body, omits header spacer
- `PageLayout.astro` — inner pages (page hero + breadcrumb + content)
- `PostLayout.astro` — blog posts (tags, date, share, prev/next nav)

### Design System
- Color palette: void/abyss/deep (darks), accent/sky/cyan (blues), stone/chalk (lights)
- Card classes: `.card`, `.card-flat`, `.card-bento` — each with light/dark mode + hover effects
- Button classes: `.btn-solid-gradient`, `.btn-glow`
- Animations: `.hero-reveal`, `.fade-up`, hero gradient mesh, card shimmer
- Logo: `logo-icon.svg` (color) / `logo-icon-white.svg` (white) — CSS swaps based on header state

### Header States
- Fixed position, class-based state: `.header-solid` (scrolled) / `.header-transparent` (over hero)
- JS scroll listener in Header.astro toggles classes; checks `body.has-hero`
- Logo, nav links, brand text colors all controlled via CSS descendant selectors in global.css

### Dark Mode
- Toggle via ThemeToggle component (localStorage + system preference)
- Init script in BaseLayout runs before paint to prevent flash
- All components must use `dark:` Tailwind variants for colors/borders/backgrounds

## Conventions

- Every `dark:` class references the `.dark` class on `<html>`, not media queries
- Images in `astro/public/images/` — gitignore has exceptions for `astro/public/**/*.{png,jpg,jpeg,ico}`
- Static assets (logos, favicons) in `astro/public/`
- No Korean characters in file names (macOS NFD decomposition issues)

## Content Rules

- **Bilingual**: All content must be created in **both** `ko/` and `en/` directories simultaneously. Never create content in only one language.
- **University name**: English name is **"Cheju Halla University"** (NOT "Jeju Halla University"). The university uses the historical romanization "Cheju".

## Research Projects (연구)

- **Path**: `astro/src/content/projects/{locale}/YYYY-MM-DD-slug.md`
- **Rule**: Only register research projects that have a designated **지도교수 (Supervising Professor)** or **연구책임자 (Principal Investigator)**. Do NOT create project entries for general student exercises or coursework without faculty supervision.
- **Frontmatter**: `title`, `subtitle`, `summary`, `date`, `image`, `tools`, `draft`
- Each project page must include a "연구 정보" (Research Information) section at the bottom with the supervising professor.

## News Posts (소식)

- **Path**: `astro/src/content/posts/ko/YYYY-MM-DD-slug.md`
- **Frontmatter**: `title`, `description`, `date`, `image` (hero), `tags[]`, `categories`, `draft`
- **Images**: Store in `astro/public/images/posts/{slug}/`. First image in frontmatter `image` field becomes the hero.
- **Body images**: Automatically collected into a mosaic gallery at the bottom of the post with lightbox. Do NOT manually create gallery sections.
- **No hashtags**: Do NOT include `#Tag` lines at the end of posts. Tags go in frontmatter `tags` array only.
- **No mermaid**: Avoid mermaid diagrams in posts. Use HTML/CSS or images instead.
- **Image max width: 1920px (HD)** — all images in `astro/public/images/` must not exceed 1920px width. Resize with `sips --resampleWidth 1920` before committing. Check with: `find astro/public/images -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) -exec sips -g pixelWidth {} \; | awk '/pixelWidth/{if($2>1920) print}'`
