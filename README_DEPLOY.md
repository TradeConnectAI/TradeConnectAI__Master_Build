# TradeConnectAI — Production SaaS Starter

## Stack
- Next.js App Router
- TypeScript
- TailwindCSS
- Supabase Auth
- Stripe Checkout (Starter £29 / Growth £49 GBP monthly)
- Vercel Deployment
- OpenAI Ready

## Deploy
1. Upload to GitHub
2. Import into Vercel
3. Add environment variables from `.env.example`
4. Deploy

## Stripe Checkout
Homepage pricing CTAs POST to `/api/checkout` with `{ plan: "starter" | "growth" }`.

- If `STRIPE_SECRET_KEY` is set: creates a Stripe Checkout Session (subscription, GBP) and redirects to Stripe.
- If keys are missing: API returns `503` with `{ fallback: true, bookDemoUrl: "/book-demo" }` and the UI sends the visitor to book a demo.
- Prefer Stripe Price IDs via `STRIPE_PRICE_STARTER` / `STRIPE_PRICE_GROWTH`. Without them, Checkout uses inline `price_data` (£29 / £49 monthly).
- `STRIPE_WEBHOOK_SECRET` is reserved for a later subscription lifecycle webhook (not required for Checkout redirect).

## Production Features
- AI Chat UI
- SaaS Dashboard
- Stripe Subscription Checkout (£29 Starter / £49 Growth)
- CRM Ready Structure
- Multi Tenant Ready
- Responsive UI
- Protected Routes

## Recommended Environment Variables
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_APP_URL=
STRIPE_PRICE_STARTER=
STRIPE_PRICE_GROWTH=
OPENAI_API_KEY=
