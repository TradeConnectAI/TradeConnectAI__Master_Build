import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export const dynamic = "force-dynamic";

type Booking = {
  name?: string;
  phone?: string;
  service?: string;
  postcode?: string;
  wasteType?: string;
  jobsize?: string;
  dateWanted?: string;
  accessCheck?: string;
  access?: string;
  notes?: string;
};

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from("tcai_beta_calls")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(100);

  if (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, calls: data ?? [] });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const booking: Booking = body.booking ?? {};
    const transcript = Array.isArray(body.transcript) ? body.transcript : [];

    const callPayload = {
      source: body.source || "Browser AI call beta",
      status: body.status || "In progress",
      confidence: Number(body.confidence || 0),
      customer_name: booking.name || null,
      phone: booking.phone || null,
      service: booking.service || null,
      postcode: booking.postcode || null,
      waste_type: booking.wasteType || null,
      skip_size: booking.jobsize || null,
      date_wanted: booking.dateWanted || null,
      accessCheck: booking.access check || null,
      access: booking.access || null,
      notes: booking.notes || null,
      transcript,
      booking,
    };

    const { data: call, error: callError } = await supabaseAdmin
      .from("tcai_beta_calls")
      .insert(callPayload)
      .select("*")
      .single();

    if (callError) {
      return NextResponse.json(
        { ok: false, error: callError.message },
        { status: 500 }
      );
    }

    const jobPayload = {
      call_id: call.id,
      status: "Needs admin review",
      customer_name: booking.name || "Unknown customer",
      phone: booking.phone || "Not captured",
      service: booking.service || "Not captured",
      skip_size: booking.jobsize || "Not captured",
      waste_type: booking.wasteType || "Not captured",
      postcode: booking.postcode || "Not captured",
      date_wanted: booking.dateWanted || "Not captured",
      accessCheck: booking.access check || "Not captured",
      access: booking.access || "None captured",
      notes: booking.notes || "",
    };

    const { data: job, error: jobError } = await supabaseAdmin
      .from("tcai_beta_jobs")
      .insert(jobPayload)
      .select("*")
      .single();

    if (jobError) {
      return NextResponse.json(
        { ok: false, error: jobError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, call, job });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
