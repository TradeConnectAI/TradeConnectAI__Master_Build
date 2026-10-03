import { NextResponse } from "next/server";
import { getStripe, isStripeConfigured } from "@/lib/stripe";

export const dynamic = "force-dynamic";

const PLANS = {
  starter: {
    name: "TradeConnectAI Starter",
    unitAmount: 2900,
    priceEnv: "STRIPE_PRICE_STARTER",
  },
  growth: {
    name: "TradeConnectAI Growth",
    unitAmount: 4900,
    priceEnv: "STRIPE_PRICE_GROWTH",
  },
} as const;

type PlanKey = keyof typeof PLANS;

const TRIAL_DAYS = 14;

function resolveBaseUrl(request: Request): string {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (appUrl) return appUrl.replace(/\/$/, "");

  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) {
    const host = vercelUrl.replace(/^https?:\/\//, "");
    return `https://${host}`;
  }

  return new URL(request.url).origin;
}

export async function POST(request: Request) {
  try {
    if (!isStripeConfigured()) {
      return NextResponse.json(
        {
          ok: false,
          fallback: true,
          message:
            "Stripe checkout is not configured yet. Book a demo and we will set up billing with you.",
          bookDemoUrl: "/book-demo",
        },
        { status: 503 }
      );
    }

    const body = await request.json().catch(() => ({}));
    const planRaw = String((body as { plan?: string })?.plan || "")
      .trim()
      .toLowerCase();

    if (planRaw !== "starter" && planRaw !== "growth") {
      return NextResponse.json(
        { ok: false, error: 'plan must be "starter" or "growth"' },
        { status: 400 }
      );
    }

    const plan = planRaw as PlanKey;
    const config = PLANS[plan];
    const priceId = process.env[config.priceEnv]?.trim();
    const baseUrl = resolveBaseUrl(request);
    const stripe = getStripe();

    const line_items = priceId
      ? [{ price: priceId, quantity: 1 }]
      : [
          {
            price_data: {
              currency: "gbp" as const,
              unit_amount: config.unitAmount,
              recurring: { interval: "month" as const },
              product_data: { name: config.name },
            },
            quantity: 1,
          },
        ];

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      adaptive_pricing: { enabled: false },
      line_items,
      // 14-day free trial on both Starter and Growth. Stripe Checkout still
      // collects a card by default and starts billing when the trial ends.
      subscription_data: { trial_period_days: TRIAL_DAYS },
      success_url: `${baseUrl}/?checkout=success`,
      cancel_url: `${baseUrl}/?checkout=cancelled`,
    });

    if (!session.url) {
      return NextResponse.json(
        {
          ok: false,
          fallback: true,
          message: "Checkout session could not be created. Please book a demo.",
          bookDemoUrl: "/book-demo",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Stripe checkout error", message);
    return NextResponse.json(
      {
        ok: false,
        fallback: true,
        message: "Checkout failed. Please book a demo instead.",
        bookDemoUrl: "/book-demo",
        error: message,
      },
      { status: 500 }
    );
  }
}
