"use client";

import { useEffect, useState } from "react";

type BetaJob = {
  id: string;
  call_id: string | null;
  created_at: string;
  status: string;
  customer_name: string;
  phone: string | null;
  service: string | null;
  skip_size: string | null;
  waste_type: string | null;
  postcode: string | null;
  date_wanted: string | null;
  permit: string | null;
  access: string | null;
  notes: string | null;
};

export default function VoiceBetaJobsPage() {
  const [jobs, setJobs] = useState<BetaJob[]>([]);
  const [error, setError] = useState("");
  const [savingId, setSavingId] = useState<string | null>(null);

  async function loadJobs() {
    setError("");

    try {
      const response = await fetch("/api/voice-beta/jobs", {
        cache: "no-store",
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Failed to load jobs");
      }

      setJobs(result.jobs || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load jobs");
    }
  }

  useEffect(() => {
    loadJobs();
  }, []);

  async function updateStatus(id: string, status: string) {
    setSavingId(id);
    setError("");

    try {
      const response = await fetch(`/api/voice-beta/jobs/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Failed to update job");
      }

      setJobs((prev) => prev.map((job) => (job.id === id ? result.job : job)));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update job");
    } finally {
      setSavingId(null);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-6 text-white md:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-300">
              Voice Beta
            </p>
            <h1 className="mt-3 text-3xl font-black md:text-5xl">
              AI-Created Job Cards
            </h1>
            <p className="mt-3 max-w-2xl text-slate-300">
              Supabase-backed jobs captured from the free browser AI call
              handler.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={loadJobs}
              className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 font-bold hover:bg-white/15"
            >
              Refresh
            </button>
            <a
              href="/install-skips-demo/admin/voice-beta"
              className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 font-bold hover:bg-white/15"
            >
              Admin
            </a>
            <a
              href="/install-skips-demo/ai-call-beta"
              className="rounded-2xl bg-cyan-300 px-5 py-3 font-black text-slate-950 hover:bg-cyan-200"
            >
              New call
            </a>
          </div>
        </div>

        {error && (
          <div className="mb-6 rounded-2xl border border-red-300/30 bg-red-300/10 p-4 text-sm text-red-100">
            {error}
          </div>
        )}

        <div className="grid gap-4">
          {jobs.map((job) => (
            <article
              key={job.id}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black">{job.customer_name}</h2>
                  <p className="mt-1 text-sm text-slate-400">
                    {new Date(job.created_at).toLocaleString()} ·{" "}
                    {job.phone || "No phone captured"}
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm font-bold text-emerald-100">
                  {job.status}
                </div>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-4">
                <Info label="Service" value={job.service} />
                <Info label="Skip size" value={job.skip_size} />
                <Info label="Waste" value={job.waste_type} />
                <Info label="Postcode" value={job.postcode} />
                <Info label="Date wanted" value={job.date_wanted} />
                <Info label="Permit" value={job.permit} />
                <Info label="Access" value={job.access} />
                <Info label="Phone" value={job.phone} />
              </div>

              {job.notes && (
                <div className="mt-4 rounded-2xl border border-white/10 bg-black/25 p-4">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    Notes
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-200">{job.notes}</p>
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => updateStatus(job.id, "Approved")}
                  disabled={savingId === job.id}
                  className="rounded-2xl border border-emerald-300/30 bg-emerald-300/15 px-4 py-2 text-sm font-bold text-emerald-100 hover:bg-emerald-300/20 disabled:opacity-50"
                >
                  Approve
                </button>
                <button
                  onClick={() => updateStatus(job.id, "Call back required")}
                  disabled={savingId === job.id}
                  className="rounded-2xl border border-amber-300/30 bg-amber-300/15 px-4 py-2 text-sm font-bold text-amber-100 hover:bg-amber-300/20 disabled:opacity-50"
                >
                  Call back
                </button>
                <button
                  onClick={() => updateStatus(job.id, "Parked")}
                  disabled={savingId === job.id}
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold hover:bg-white/15 disabled:opacity-50"
                >
                  Park
                </button>
              </div>
            </article>
          ))}
        </div>

        {jobs.length === 0 && !error && (
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 text-slate-300">
            No jobs saved in Supabase yet.
          </div>
        )}
      </section>
    </main>
  );
}

function Info({ label, value }: { label: string; value?: string | null }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
      <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold">{value || "Not captured"}</div>
    </div>
  );
}

