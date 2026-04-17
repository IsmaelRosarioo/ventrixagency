# Free Vercel deployment guide for ventrixagency.com

## What you need

- Your Ventrix project folder
- A GitHub account
- A Vercel account
- Access to the DNS settings for `ventrixagency.com`

## Deploy steps

1. Push this project to GitHub.
2. Log in to Vercel.
3. Click **Add New Project**.
4. Import the GitHub repository.
5. Keep the default Next.js build settings.
6. Deploy.

## Connect the domain

After deployment:

1. Open the project in Vercel.
2. Go to **Settings → Domains**.
3. Add `ventrixagency.com`.
4. Add `www.ventrixagency.com`.
5. Vercel will show the DNS records you need.
6. Go to your domain DNS panel and add exactly those records.
7. Wait for SSL and DNS propagation.

## Email safety

Only change the website DNS records requested by Vercel.
Do not delete the MX records used for `@ventrixagency.com` mailboxes.

## Suggested addresses

- `hello@ventrixagency.com`
- `ismael@ventrixagency.com`
- `aiden@ventrixagency.com`
- `support@ventrixagency.com`
