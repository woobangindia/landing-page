# Harbourline landing page - Next.js 14 (App Router)
    cp .env.example .env.local   # set MONGODB_URI; optional SMTP_*, NEXT_PUBLIC_SITE_URL
    npm install && npm run dev   # http://localhost:3000
    npm run build && npm start   # production

- Page: `app/page.jsx` (server component) + `components/ClientBehavior.jsx` (menu, validation, submit)
- API: `app/api/enquiries/{tenant,agent}/route.js`, `app/api/health/route.js`
- Shared: `lib/` (validators, Mongoose models, mailer, db cache, rate limit)
- Images: add `hero|tenants|agents|about` + `-800.jpg`/`-1600.jpg` to `public/images/`
- Deploys to Vercel as-is. Note the in-memory rate limiter is per instance: use Redis/Upstash for production serverless.
- Set `NEXT_PUBLIC_SITE_URL` and update `public/sitemap.xml` + `robots.txt` with your domain.
