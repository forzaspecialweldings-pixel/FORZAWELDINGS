# Forza Special Welding LLC — Website

Marketing site for **Forza Special Welding LLC**, a metal fabrication and welding
business based in Mansfield, TX (Dallas–Fort Worth area). Built with Next.js and
exported as a static site for Cloudflare Pages.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, static export)
- React 19 + TypeScript
- Zod for form validation
- Plain CSS (no framework)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command         | Description                                   |
| --------------- | ---------------------------------------------- |
| `npm run dev`   | Start the local dev server                     |
| `npm run build` | Build the static site into `out/`              |
| `npm run start` | Serve the production build locally             |
| `npm run lint`  | Run ESLint                                     |

## Project Structure

```
app/      Next.js app router entry (layout, page, fonts, global styles)
view/     UI components/sections (Hero, Services, Contact, etc.)
model/    Typed business content and contact form logic
public/   Static assets (images, icons)
```

## Deployment

The site is statically exported (`output: "export"` in `next.config.ts`) and
deployed via **Cloudflare Pages**:

- **Build command:** `npm run build`
- **Build output directory:** `out`

Every push to `main` triggers an automatic deploy once connected to the
Cloudflare Pages project.
