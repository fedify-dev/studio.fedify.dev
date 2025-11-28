# Fedify Studio Landing Page

Teaser landing page for **Fedify Studio**, a comprehensive web-based development and debugging platform for ActivityPub. Coming H2 2026.

Fedify Studio is a sister project of [Fedify](https://fedify.dev/), the TypeScript library for building federated server applications.

## Tech Stack

- **Build Tool**: [Vite](https://vite.dev/) 7.x
- **Framework**: [Vue](https://vuejs.org/) 3.x with Composition API
- **Styling**: [UnoCSS](https://unocss.dev/) (atomic CSS engine)
- **Icons**: [Lucide](https://lucide.dev/) via `@iconify-json/lucide`
- **Language**: TypeScript

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
src/
├── main.ts                 # App entry point
├── App.vue                 # Root component
├── style.css               # Global styles & CSS variables
├── composables/
│   └── useDarkMode.ts      # Dark mode toggle logic
└── components/
    ├── TheHeader.vue       # Navigation & dark mode toggle
    ├── HeroSection.vue     # Hero with gradient background
    ├── PainPointsSection.vue   # ActivityPub development challenges
    ├── FeaturesSection.vue     # Key features grid
    ├── RoadmapSection.vue      # Development roadmap timeline
    ├── NewsletterSection.vue   # Email subscription form
    └── TheFooter.vue       # Footer with links
```

## Features

- **Dark/Light Mode**: Respects system preference, with manual toggle
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: CSS animations with staggered delays
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation

## Deployment

The site is automatically deployed to [studio.fedify.dev](https://studio.fedify.dev/) via GitHub Actions when changes are pushed to the `main` branch.

## Related Links

- [Fedify Framework](https://fedify.dev/)
- [Fedify GitHub](https://github.com/fedify-dev/fedify)
- [Fedify Studio White Paper](./WHITEPAPER.md)
