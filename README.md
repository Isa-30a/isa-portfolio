# isa-portfolio

A bilingual, dark-themed single-page portfolio for **Isabella Alvarado**, a Frontend Engineer. Built with Next.js 16, React 19, Tailwind CSS v4, and shadcn/ui.

## Tech Stack

| Layer | Tech |
|---|---|
| **Framework** | Next.js 16 (App Router, RSC) |
| **UI** | React 19, Radix UI, shadcn/ui |
| **Styling** | Tailwind CSS v4, tw-animate-css |
| **Icons** | HugeIcons |
| **Language** | TypeScript (strict) |
| **Data** | JSON Resume schema |

## Features

- **Bilingual i18n** — English (`/en`) and Spanish (`/es`) with automatic locale detection via middleware
- **Typing animation** — Hero heading types itself in on load
- **Scroll animations** — Fade/slide reveals powered by IntersectionObserver
- **Data-driven** — All content sourced from `public/resume-isabella-alvarado.json`
- **Responsive** — Fully responsive dark-themed layout
- **Sections** — Hero, About, Skills, Projects, Resume, Experience, Contact

## Getting Started

```bash
bun dev         # development server
bun build       # production build
bun start       # start production server
bun lint        # ESLint
bun typecheck   # tsc --noEmit
bun format      # Prettier
```

## Project Structure

```
src/
├── app/
│   ├── [lang]/page.tsx    — Main portfolio page
│   ├── layout.tsx         — Root layout & metadata
│   ├── globals.css        — Tailwind v4 + theme tokens
│   └── _components/       — App-specific components
├── components/
│   └── ui/                — shadcn/ui primitives
├── hooks/                 — Custom React hooks
├── lib/                   — i18n, content, resume data, utilities
└── public/                — Static assets, resume JSON
```

## Stack Notes

This project uses Next.js 16 and React 19 — refer to `node_modules/next/dist/docs/` for framework-specific guidance as these versions may differ from published docs.
