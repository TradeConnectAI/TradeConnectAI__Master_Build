import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export const dynamic = "force-dynamic";

type LeadBody = {
  tenant?: string;
  businessName?: string;
  contactName?: string;
  phone?: string;
  email?: string;
  location?: string;
  source?: string;
  leadType?: string;
  jobType?: string;
  notes?: string;
  estimatedValue?: string;
};

function scoreLead(body: LeadBody) {
  const text = [
    body.businessName,
    body.contactName,
    body.location,
    body.source,
    body.leadType,
    body.jobType,
    body.notes,
    body.estimatedValue,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  let score = 45;

  if (text.match(/urgent|asap|today|tomorrow|this week|immediate/)) score += 25;
  if (text.match(/builder|contractor|kitchen|bathroom|roof|landscap|renovation|clearance/)) score += 18;
  if (text.match(/skip|waste|rubbish|grab|aggregate|hardcore|soil|builders waste/)) score += 18;
  if (body.phone) score += 8;
  if (body.email) score += 5;
  if (body.estimatedValue && body.estimatedValue !== "Unknown") score += 6;

  return Math.max(5, Math.min(98, score));
}

function suggestedService(body: LeadBody) {
  const text = [body.leadType, body.jobType, body.notes].filter(Boolean).join(" ").toLowerCase();

  if (text.match(/grab|soil|hardcore|muck away|loads/)) return "Grab hire";
  if (text.match(/aggregate|sand|stone|type 1|mot/)) return "Aggregates delivery";
  if (text.match(/clearance|rubbish|house clear|garden clear/)) return "Waste removal";
  if (text.match(/skip|renovation|kitchen|bathroom|builder|roof/)) return "Skip hire";
  return "Trade service follow-up";
}

function urgencyFromScore(score: number) {
  if (score >= 80) return "Hot";
  if (score >= 60) return "Warm";
  return "Cold";
}

function actionFromScore(score: number) {
  if (score >= 80) return "Call today and offer a fast slot.";
  if (score >= 60) return "Send a friendly message and follow up within 24 hours.";
  return "Add to nurture list and send a soft intro.";
}

function buildCallScript(body: LeadBody, service: string) {
  const name = body.contactName || body.businessName || "there";
  const area = body.location || "your area";

  return `Hi ${name}, it’s a quick one. I saw you may need help around ${area}. We can help with ${service.toLowerCase()}, availability checks, and fast booking. Is this something you still need sorting?`;
}

function buildMarketingMessage(body: LeadBody, service: string) {
  const area = body.location || "your area";

  return `Hi, we can help with ${service.toLowerCase()} in ${area}. Fast turnaround, clear pricing, and easy booking. Reply here or call us and we’ll check availability.`;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const tenant = url.searchParams.get("tenant");

  let query = supabaseAdmin
    .from("tcai_beta_leads")
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

  return NextResponse.json({ ok: true, leads: data ?? [] });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadBody;

    if (!body.tenant) {
      return NextResponse.json({ ok: false, error: "Missing tenant" }, { status: 400 });
    }

    const score = scoreLead(body);
    const service = suggestedService(body);
    const urgency = urgencyFromScore(score);

    const payload = {
      tenant: body.tenant,
      business_name: body.businessName || null,
      contact_name: body.contactName || null,
      phone: body.phone || null,
      email: body.email || null,
      location: body.location || null,
      source: body.source || null,
      lead_type: body.leadType || null,
      job_type: body.jobType || null,
      notes: body.notes || null,
      estimated_value: body.estimatedValue || null,
      urgency,
      status: "New lead",
      score,
      suggested_service: service,
      suggested_action: actionFromScore(score),
      call_script: buildCallScript(body, service),
      marketing_message: buildMarketingMessage(body, service),
    };

    const { data, error } = await supabaseAdmin
      .from("tcai_beta_leads")
      .insert(payload)
      .select("*")
      .single();

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, lead: data });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
