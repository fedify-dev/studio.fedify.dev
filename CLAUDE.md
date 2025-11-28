# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the teaser landing page for **Fedify Studio**, an upcoming ActivityPub development and debugging platform (releasing H2 2026). It's a static Vue 3 application built with Vite and UnoCSS.

## Tech Stack

- **Vue 3** with Composition API and `<script setup>` syntax
- **Vite 7** as the build tool
- **UnoCSS** for atomic CSS (Tailwind-compatible utilities)
- **TypeScript** for type safety
- **pnpm** as the package manager

## Common Commands

```bash
pnpm install    # Install dependencies
pnpm dev        # Start dev server at http://localhost:5173
pnpm build      # Type-check and build for production
pnpm preview    # Preview production build
```

## Project Structure

- `src/components/` - Vue single-file components for each section
- `src/composables/` - Reusable composition functions (e.g., `useDarkMode`)
- `src/style.css` - Global styles, CSS variables for theming
- `uno.config.ts` - UnoCSS configuration (presets, theme colors, shortcuts)
- `public/` - Static assets (logos)

## Key Patterns

### Dark Mode
Dark mode is implemented via:
1. CSS class `.dark` on `<html>` element
2. CSS variables in `src/style.css` that change based on `.dark` class
3. `useDarkMode` composable for toggle logic
4. Initial detection in `index.html` script (prevents flash)

### Styling
- Use UnoCSS utility classes (Tailwind-compatible)
- Custom colors defined in `uno.config.ts` under `theme.colors.fedify`
- Shortcuts defined for common patterns (`btn`, `btn-primary`, `card`, etc.)
- Global animations defined in `src/style.css`

### Components
All section components are in `src/components/`:
- `TheHeader.vue` - Fixed header with nav and dark mode toggle
- `HeroSection.vue` - Hero with animated background
- `PainPointsSection.vue` - Problem statement cards
- `FeaturesSection.vue` - Feature grid with icons
- `RoadmapSection.vue` - Timeline of development phases
- `NewsletterSection.vue` - Email subscription form (UI only, no backend)
- `TheFooter.vue` - Footer with links

## Design Guidelines

- **Color palette**: Based on Fedify logo (sky blue #0ea5e9, violet #a855f7, pink #ec4899)
- **Typography**: IBM Plex Sans (body), Instrument Sans (display)
- **Style**: Clean, professional, subtle gradients, not overly flashy
- **Responsive**: Mobile-first, breakpoints at sm/md/lg

## Notes

- Newsletter form is frontend-only (no backend integration yet)
- The `WHITEPAPER.md` file contains detailed feature specifications
- Logo files are in both root directory and `public/` folder
