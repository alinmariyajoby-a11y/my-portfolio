# alin-cybersecurity-portfolio

Suggested GitHub repository name: `alin-cybersecurity-portfolio`

## Overview
A single-page portfolio for Alin Mariya Joby, a final-year Cyber Security engineering student. It leads with the Wi-Fi deauthentication detector and SafeSurf projects, then internships, skills and contact details. It follows the system light or dark setting.

## Tech stack
Next.js 14 (App Router), React 18, Tailwind CSS 3, `next/font` (Bricolage Grotesque, IBM Plex Sans, IBM Plex Mono). No API keys or environment variables.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000. Node.js 18.17 or newer is required. The first run needs internet access to download the fonts.

## Customize
- All text lives in `data/content.js`: profile, projects, internships, skills, education, certifications.
- Colors live in `app/globals.css` (CSS variables for dark and light).
- Sections are assembled in `app/page.js`; reusable pieces are in `components/`.

## Deploy
Push to GitHub, then import the repository in Vercel. The default Next.js settings work.
