import { NextResponse } from "next/server";
import { loadJob } from "@/lib/plumber-jobs-store";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> | { id: string } }
) {
  const params = await Promise.resolve(context.params);
  const id = String(params?.id || "").trim();
  if (!id) {
    return NextResponse.json({ ok: false, error: "Missing id" }, { status: 400 });
  }

  const { job, meta } = await loadJob(id);
  if (!job) {
    return NextResponse.json(
      { ok: false, error: "Job not found in server store", meta },
      { status: 404 }
    );
  }

  return NextResponse.json({ ok: true, job, meta });
}
