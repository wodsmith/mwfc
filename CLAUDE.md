# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application using:
- **Framework**: Next.js 15.5.3 with Turbopack
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS v4 with PostCSS
- **Linting/Formatting**: Biome (replacing ESLint and Prettier)
- **Fonts**: Geist, Geist Mono, and Bebas Neue for h1, h2, h3 (loaded via next/font)

## Development Commands

```bash
npm run dev        # Start development server with Turbopack
npm run build      # Build production bundle with Turbopack
npm run start      # Start production server
npm run lint       # Run Biome linter checks
npm run format     # Auto-format code with Biome
```

## Code Architecture

### Project Structure
- `/src/app/` - Next.js App Router pages and layouts
- `/src/components/` - React components
- `@/*` - Path alias configured to resolve to `./src/*`

### Key Configuration
- **TypeScript**: Strict mode enabled with bundler module resolution
- **Biome**: Handles both linting and formatting with Next.js and React-specific rules
  - Indentation: 2 spaces
  - Includes all files except node_modules, .next, dist, build
  - Auto-organizes imports on save

### Styling Approach
- Tailwind CSS v4 is configured via PostCSS
- Custom font variables available: `--font-geist-sans`, `--font-geist-mono`, `--font-bebas-neue`