import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export const dynamic = "force-dynamic";

type CampaignBody = {
  tenant?: string;
  title?: string;
  goal?: string;
  service?: string;
  area?: string;
  tone?: string;
  offer?: string;
};

function brandName(tenant?: string) {
  if (tenant === "install-skips") return "Install Skips";
  if (tenant === "complete-options") return "Complete Options";
  return "TradeConnectAI";
}

function buildAssets(body: CampaignBody) {
  const brand = brandName(body.tenant);
  const service = body.service || "local trade services";
  const area = body.area || "the local area";
  const offer = body.offer || "fast availability and simple booking";
  const tone = body.tone || "friendly local";

  const facebook_post =
    `${brand} update 🚚\n\nNeed ${service.toLowerCase()} in ${area}? We’re helping customers book quickly with ${offer.toLowerCase()}.\n\nMessage us with your postcode and what you need moved, cleared, delivered or booked.`;

  const google_business_post =
    `${brand} is taking bookings for ${service.toLowerCase()} in ${area}. ${offer}. Contact us today to check availability.`;

  const sms_message =
    `Hi, it’s ${brand}. We can help with ${service.toLowerCase()} in ${area}. ${offer}. Reply YES and we’ll check availability.`;

  const email_subject =
    `${service} availability in ${area}`;

  const email_body =
    `Hi,\n\n${brand} can help with ${service.toLowerCase()} in ${area}.\n\nWe’re currently offering ${offer.toLowerCase()}.\n\nSend us your postcode, preferred date, and a quick description of the job and we’ll confirm the next step.\n\nThanks,\n${brand}`;

  const flyer_text =
    `${brand}\n\n${service} in ${area}\n\n${offer}\n\nFast response. Clear next steps. Local support.\n\nCall or message today to check availability.`;

  return {
    facebook_post,
    google_business_post,
    sms_message,
    email_subject,
    email_body,
    flyer_text,
    tone,
  };
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const tenant = url.searchParams.get("tenant");

  let query = supabaseAdmin
    .from("tcai_beta_campaigns")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(100);

  if (tenant) {
    query = query.eq("tenant", tenant);
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, campaigns: data ?? [] });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CampaignBody;

    if (!body.tenant) {
      return NextResponse.json({ ok: false, error: "Missing tenant" }, { status: 400 });
    }

    const assets = buildAssets(body);

    const payload = {
      tenant: body.tenant,
      title: body.title || `${body.service || "Marketing"} campaign`,
      goal: body.goal || null,
      service: body.service || null,
      area: body.area || null,
      tone: assets.tone,
      offer: body.offer || null,
      status: "Draft",
      facebook_post: assets.facebook_post,
      google_business_post: assets.google_business_post,
      sms_message: assets.sms_message,
      email_subject: assets.email_subject,
      email_body: assets.email_body,
      flyer_text: assets.flyer_text,
    };

    const { data, error } = await supabaseAdmin
      .from("tcai_beta_campaigns")
      .insert(payload)
      .select("*")
      .single();

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, campaign: data });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
