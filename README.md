# Real Estate Landing Page

This repository contains a modern, premium landing page for a UK‑based real estate company.

## Features

- Elegant British branding (deep navy, muted gold, etc.)
- Sticky navigation with responsive hamburger menu
- Hero section with high‑quality property photograph
- Distinct sections for tenants and agents
- FAQ accordion
- Two functional enquiry forms (tenant & agent) with client‑side validation
- Server‑side Node.js/Express API with TypeScript
- MongoDB storage (separate schemas for tenant & agent enquiries)
- Email notification (configurable via environment variables)
- Smooth scrolling, lazy‑loaded responsive images, SEO meta tags, sitemap, robots.txt
- Accessibility‑friendly markup and UK‑specific form handling (GBP, UK phone/postcode formats)

## Project Structure

```
realestate-landing/
├─ public/                  # Static assets served by Express
│  ├─ index.html           # Landing page markup
│  ├─ css/styles.css       # Global styles (DM Sans, Playfair Display)
│  └─ js/main.ts           # Front‑end logic (smooth scroll, form handling)
├─ src/                     # Server‑side TypeScript code
│  ├─ server.ts            # Express server, routes, health check
│  ├─ models.ts            # Mongoose schemas for tenant & agent enquiries
│  └─ routes.ts            # API route handlers
├─ .env.example             # Example environment variables
├─ package.json
├─ tsconfig.json
└─ README.md                # This file
```

## Setup

1. **Install dependencies**
   ```bash
   cd /home/aniket923950/.gemini/antigravity/scratch/realestate-landing
   npm install
   ```
2. **Configure environment**
   - Copy `.env.example` to `.env` and fill in `MONGODB_URI` and email settings.
3. **Build front‑end TypeScript**
   ```bash
   npx tsc   # compiles src/*.ts and public/js/*.ts to JavaScript
   ```
4. **Run the server**
   ```bash
   npm start   # starts Express on port 3000 (configurable)
   ```

The landing page will be available at `http://localhost:3000`.

## Extending the Project

- Replace placeholder images in `public/images/` with real property photos.
- Update the brand logo in `public/images/logo.svg`.
- Provide actual company copy in the About section.
- Connect the email notification logic to your preferred service (SendGrid, Mailgun, etc.).

---

*Created with Antigravity – a powerful AI development assistant.*