# SEO Hub Ltd

Starter setup for `seohubltd.com` built with Next.js, TypeScript, and Tailwind CSS.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4

## Included

- Marketing pages for an SEO services business
- Blog structure in code
- Contact form and API route
- SEO metadata, `robots.txt`, and `sitemap.xml`
- Reusable content layer in `content/`
- MongoDB-backed auth with password reset emails

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Environment variables

Copy `.env.example` into `.env` and fill in your real values.

- `MONGODB_URI` MongoDB connection string
- `MONGODB_DB` database name, for example `seohubltd`
- `AUTH_SECRET` secret used to sign sessions
- `APP_URL` app base URL, for example `http://localhost:3000`
- `SMTP_HOST` SMTP server host
- `SMTP_PORT` SMTP server port
- `SMTP_SECURE` `true` for SSL ports like `465`, otherwise `false`
- `SMTP_USER` SMTP account username
- `SMTP_PASS` SMTP account password or app password
- `SMTP_FROM` sender address shown on password reset emails

## Main folders

- `app/` routes and pages
- `components/` reusable UI
- `content/` site data, services, and blog content

## Next steps

1. Replace placeholder copy with your real agency messaging.
2. Add your logo, brand palette, and real case studies.
3. Connect `app/api/contact/route.ts` to email or your CRM.
4. Add individual service detail pages if you want stronger SEO targeting.
