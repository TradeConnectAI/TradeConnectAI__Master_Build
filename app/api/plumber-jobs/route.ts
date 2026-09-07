import { NextResponse } from "next/server";
import {
  createPlumberJob,
  type PlumberEnquiryInput,
  type PlumberUrgency,
} from "@/lib/plumber-jobs";
import { loadJobs, persistJob } from "@/lib/plumber-jobs-store";

export const dynamic = "force-dynamic";

function clean(value: unknown) {
  return String(value ?? "").trim();
}

export async function GET() {
  const { jobs, meta } = await loadJobs();
  return NextResponse.json({ ok: true, jobs, meta });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const urgencyRaw = clean(body.urgency) || "this_week";
    const urgency = (
      ["today", "this_week", "flexible"].includes(urgencyRaw)
        ? urgencyRaw
        : "this_week"
    ) as PlumberUrgency;

    const input: PlumberEnquiryInput = {
      customerName: clean(body.customerName),
      phone: clean(body.phone),
      postcode: clean(body.postcode),
      address: clean(body.address),
      issue: clean(body.issue),
      urgency,
      notes: clean(body.notes),
    };

    if (!input.customerName || !input.phone || !input.postcode || !input.issue) {
      return NextResponse.json(
        {
          ok: false,
          error: "Name, phone, postcode and issue are required.",
        },
        { status: 400 }
      );
    }

    const job = createPlumberJob(input);
    const meta = await persistJob(job);

    return NextResponse.json({ ok: true, job, meta });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
