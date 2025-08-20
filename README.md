# Three.js Portfolio (Next.js + Tailwind + React Three Fiber)

A sleek, production-ready portfolio template featuring a 3D hero built with React Three Fiber.
Optimized for one-click deploys on **Vercel**.

## Quick Start

```bash
# 1) Install deps
npm i

# 2) Run locally
npm run dev

# 3) Build & run production
npm run build && npm start
```

## Customize

Edit `data/site.js` to change your name, tagline, skills, and projects.

- `site.resumeUrl` — link to your resume/CV (Google Drive/public URL).
- `site.email` — your email for the contact button.
- `site.socials` — add/remove social links.
- `site.projects` — add your projects.

Hero background lives in `components/HeroCanvas.jsx`. Tweak geometries, colors, or lighting as you like.

## Deploy to Vercel

Option A (GitHub):
1. Create a new GitHub repo and push this project.
2. Go to **vercel.com/new**, import the repo, keep defaults.
3. Deploy. (Framework preset: Next.js)

Option B (Vercel CLI):
```bash
npm i -g vercel
vercel
```
Follow the prompts; subsequent deploys are `vercel --prod`.

## Tech

- Next.js app router
- Tailwind CSS
- React Three Fiber + Drei
- Framer Motion
