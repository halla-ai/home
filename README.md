# Artificial Intelligence | Cheju Halla University

Official website for the Department of Artificial Intelligence at Cheju Halla University.

## Tech Stack

- [Astro](https://astro.build/) v6 — static site generator
- [Tailwind CSS](https://tailwindcss.com/) v4 — styling
- Node.js >= 22.12.0, pnpm

## Development

```bash
make install     # Install dependencies (pnpm)
make dev         # Start dev server (localhost:4321)
make build       # Production build → astro/dist/
make preview     # Preview production build
make clean       # Remove build artifacts
```

## Project Structure

```
astro/
├── src/
│   ├── components/   # UI components (home, people, research, news, etc.)
│   ├── content/      # Content collections (posts, projects, faculty, etc.)
│   │   ├── posts/    # News posts (ko/, en/)
│   │   ├── projects/ # Research projects (ko/, en/)
│   │   ├── faculty/  # Faculty profiles (ko/, en/)
│   │   ├── pages/    # Static pages (ko/, en/)
│   │   └── testimonials/ # Student testimonials (ko/, en/)
│   ├── i18n/         # Translations (ko.json, en.json)
│   ├── layouts/      # BaseLayout, PageLayout, PostLayout, ProjectLayout
│   ├── pages/        # Routes (index, about, curriculum, faculty, research, etc.)
│   └── styles/       # Global styles
├── public/           # Static assets
└── astro.config.mjs
```

## Content Rules

- **Bilingual**: All content must be created in **both** `ko/` and `en/` directories with the same filename. Never create content in only one language.
- **University name**: English name is **"Cheju Halla University"** (NOT "Jeju Halla University"). The university uses the historical romanization "Cheju".
- **Research projects**: Only register projects with a designated **supervising professor** or **principal investigator**. Each project must include a "Research Information" section.
- **Images**: Max width 1920px. Resize before committing.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Contact

Reach out via [Discussions](https://github.com/halla-ai/home/discussions) or [Issues](https://github.com/halla-ai/home/issues).
