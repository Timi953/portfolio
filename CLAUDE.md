# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Start dev server with Turbopack (fast HMR)
pnpm build            # Production build
pnpm lint             # Run ESLint
pnpm generate-sitemap # Generate sitemap
ANALYZE=true pnpm build # Build with bundle analyzer
```

## Architecture

This is a Next.js 15 portfolio website using the App Router with React 19.

### Route Structure
- `app/(root)/page.jsx` - Homepage with fullpage scroll sections (Home, About, Projects, Contact)
- `app/about/page.jsx` - Detailed about page with nested components
- `app/projects/page.jsx` - Project showcase with category filtering
- `app/projects/[slug]/page.jsx` - Dynamic project detail pages
- `app/projects/archive/page.jsx` - Full project archive

### Key Patterns

**Fullpage Scroll System**: The homepage implements custom fullpage scrolling:
- `hooks/useFullpageScroll.js` - Custom hook handling smooth scroll (1000ms ease-in-out cubic), IntersectionObserver for section tracking, and URL hash synchronization
- `context/FullpageContext.jsx` - Provides `activeSection` and `scrollToSection` to child components
- Sections: home, about, projects, contact

**Theme System**: Light/dark mode via `context/ThemeContext.jsx`:
- Uses localStorage persistence
- Toggles `dark` class on `document.documentElement`
- Access via `useTheme()` hook

**Project Data**: Projects are defined in `json/data.json`:
- Each project has: show, title, desc[], year, preview, code, thumbnail, images[], tech[], slug, category[]
- Categories: 1 = Web Development, 2 = AI & Machine Learning, 9 = Other
- Filtered by `show: true` for display

**Animation**: Framer Motion throughout for:
- Page transitions
- Scroll-triggered animations via `whileInView`
- Spring physics for natural motion

### Component Organization
- `components/` - Shared UI components (Navbar, Sidebar, Button, Footer, Hr, ThemeToggle)
- `app/*/components/` - Page-specific components
- Images imported from `public/image/` using Next.js Image with blur placeholders

### Styling
- Tailwind CSS v4 with PostCSS
- Dark mode via `dark:` variant classes
- Global styles in `app/globals.css`

## Deployment

Automated CI/CD via GitHub Actions deploys to VPS on push to master/main.
- Build job: installs deps, lints, builds Next.js, creates artifact
- Deploy job: SSHs to VPS, extracts artifact, restarts PM2
- Health check ensures app responds before completing
