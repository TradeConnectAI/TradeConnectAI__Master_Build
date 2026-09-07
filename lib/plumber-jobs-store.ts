import type { PlumberJob } from "@/lib/plumber-jobs";
import { isSupabaseAdminConfigured, supabaseAdmin } from "@/lib/supabaseAdmin";

/**
 * In-memory store for plumber jobs (works without env).
 * On serverless, cold starts can wipe this — clients also keep a localStorage copy.
 * When Supabase is configured, we also try table `tcai_plumber_jobs` (optional).
 */
const memoryJobs = new Map<string, PlumberJob>();

export type PlumberStoreMeta = {
  backend: "memory" | "supabase+memory";
  supabaseConfigured: boolean;
  supabaseOk: boolean;
  warning?: string;
};

export function getStoreMeta(supabaseOk = false, warning?: string): PlumberStoreMeta {
  const supabaseConfigured = isSupabaseAdminConfigured;
  return {
    backend: supabaseConfigured && supabaseOk ? "supabase+memory" : "memory",
    supabaseConfigured,
    supabaseOk,
    warning,
  };
}

export function listMemoryJobs(): PlumberJob[] {
  return Array.from(memoryJobs.values()).sort(
    (a, b) => +new Date(b.createdAt) - +new Date(a.createdAt)
  );
}

export function getMemoryJob(id: string): PlumberJob | null {
  return memoryJobs.get(id) || null;
}

export function putMemoryJob(job: PlumberJob) {
  memoryJobs.set(job.id, job);
}

export async function persistJob(job: PlumberJob): Promise<PlumberStoreMeta> {
  putMemoryJob(job);

  if (!isSupabaseAdminConfigured || !supabaseAdmin) {
    return getStoreMeta(
      false,
      "Using in-memory store (plus your phone browser localStorage). Optional: set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY, and create table tcai_plumber_jobs."
    );
  }

  try {
    const { error } = await supabaseAdmin.from("tcai_plumber_jobs").upsert(
      {
        id: job.id,
        customer_name: job.customerName,
        phone: job.phone,
        postcode: job.postcode,
        address: job.address,
        issue: job.issue,
        urgency: job.urgency,
        notes: job.notes,
        status: job.status,
        guide_price_pounds: job.guidePricePounds,
        created_at: job.createdAt,
      },
      { onConflict: "id" }
    );

    if (error) {
      return getStoreMeta(
        false,
        `Supabase save skipped (${error.message}). Job kept in memory + localStorage.`
      );
    }

    return getStoreMeta(true);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown Supabase error";
    return getStoreMeta(false, `Supabase save skipped (${message}). Job kept in memory + localStorage.`);
  }
}

export async function loadJobs(): Promise<{ jobs: PlumberJob[]; meta: PlumberStoreMeta }> {
  const memory = listMemoryJobs();

  if (!isSupabaseAdminConfigured || !supabaseAdmin) {
    return {
      jobs: memory,
      meta: getStoreMeta(
        false,
        "No Supabase env — listing in-memory jobs only. Your browser localStorage still holds jobs on this device."
      ),
    };
  }

  try {
    const { data, error } = await supabaseAdmin
      .from("tcai_plumber_jobs")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100);

    if (error) {
      return {
        jobs: memory,
        meta: getStoreMeta(false, `Supabase read skipped (${error.message}). Showing memory jobs.`),
      };
    }

    const fromDb: PlumberJob[] = (data || []).map((row: Record<string, unknown>) => ({
      id: String(row.id),
      customerName: String(row.customer_name || ""),
      phone: String(row.phone || ""),
      postcode: String(row.postcode || ""),
      address: String(row.address || ""),
      issue: String(row.issue || ""),
      urgency: (row.urgency as PlumberJob["urgency"]) || "this_week",
      notes: String(row.notes || ""),
      status: (row.status as PlumberJob["status"]) || "new",
      createdAt: String(row.created_at || new Date().toISOString()),
      guidePricePounds: Number(row.guide_price_pounds || 95),
    }));

    for (const job of fromDb) putMemoryJob(job);

    const byId = new Map<string, PlumberJob>();
    for (const job of [...fromDb, ...memory]) byId.set(job.id, job);

    return {
      jobs: Array.from(byId.values()).sort(
        (a, b) => +new Date(b.createdAt) - +new Date(a.createdAt)
      ),
      meta: getStoreMeta(true),
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown Supabase error";
    return {
      jobs: memory,
      meta: getStoreMeta(false, `Supabase read skipped (${message}). Showing memory jobs.`),
    };
  }
}

export async function loadJob(
  id: string
): Promise<{ job: PlumberJob | null; meta: PlumberStoreMeta }> {
  const cached = getMemoryJob(id);
  if (cached) {
    return { job: cached, meta: getStoreMeta(isSupabaseAdminConfigured) };
  }

  if (!isSupabaseAdminConfigured || !supabaseAdmin) {
    return { job: null, meta: getStoreMeta(false) };
  }

  try {
    const { data, error } = await supabaseAdmin
      .from("tcai_plumber_jobs")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error || !data) {
      return {
        job: null,
        meta: getStoreMeta(false, error ? error.message : undefined),
      };
    }

    const job: PlumberJob = {
      id: String(data.id),
      customerName: String(data.customer_name || ""),
      phone: String(data.phone || ""),
      postcode: String(data.postcode || ""),
      address: String(data.address || ""),
      issue: String(data.issue || ""),
      urgency: (data.urgency as PlumberJob["urgency"]) || "this_week",
      notes: String(data.notes || ""),
      status: (data.status as PlumberJob["status"]) || "new",
      createdAt: String(data.created_at || new Date().toISOString()),
      guidePricePounds: Number(data.guide_price_pounds || 95),
    };
    putMemoryJob(job);
    return { job, meta: getStoreMeta(true) };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return { job: null, meta: getStoreMeta(false, message) };
  }
}
