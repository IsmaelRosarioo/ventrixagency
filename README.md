# Ventrix Next.js Website

This is a local-first and Vercel-ready Next.js website for Ventrix Agency.

## 1) Run locally on your computer

Install Node.js first, then open a terminal inside this folder and run:

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## 2) Run as a production build locally

```bash
npm install
npm run build
npm start
```

This simulates the hosted version more closely.

## 3) Deploy free on Vercel

1. Create a GitHub repo and upload this project.
2. Go to Vercel and import the GitHub repo.
3. Deploy with the default Next.js settings.
4. In Vercel project settings, open **Domains**.
5. Add:
   - `ventrixagency.com`
   - `www.ventrixagency.com`
6. Copy the DNS records Vercel gives you into your domain registrar DNS panel.
7. Wait for DNS and SSL to finish.

## 4) Keep your email working

Do **not** remove your MX records. Your website records and email records are separate.

Keep or add emails like:
- `ismael@ventrixagency.com`
- `aiden@ventrixagency.com`
- `hello@ventrixagency.com`
- `support@ventrixagency.com`

## 5) Good next upgrades

- Contact form with Supabase
- Calendly booking embed
- Testimonials
- Real logo and founder photos
- Admin lead dashboard
