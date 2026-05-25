"use client";

import { useEffect, useState } from "react";

type BetaCall = {
  id: string;
  created_at: string;
  status: string;
  confidence: number;
  customer_name: string | null;
  service: string | null;
};

type BetaJob = {
  id: string;
  created_at: string;
  status: string;
  customer_name: string;
  service: string | null;
  postcode: string | null;
  date_wanted: string | null;
};

export default function VoiceBetaAdminPage() {
  const [calls, setCalls] = useState<BetaCall[]>([]);
  const [jobs, setJobs] = useState<BetaJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function refresh() {
    setLoading(true);
    setError("");

    try {
      const [callsResponse, jobsResponse] = await Promise.all([
        fetch("/api/voice-beta/calls", { cache: "no-store" }),
        fetch("/api/voice-beta/jobs", { cache: "no-store" }),
      ]);

      const callsJson = await callsResponse.json();
      const jobsJson = await jobsResponse.json();

      if (!callsResponse.ok || !callsJson.ok) {
        throw new Error(callsJson.error || "Failed to load calls");
      }

      if (!jobsResponse.ok || !jobsJson.ok) {
        throw new Error(jobsJson.error || "Failed to load jobs");
      }

      setCalls(callsJson.calls || []);
      setJobs(jobsJson.jobs || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load beta data");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  const ready = jobs.filter((j) => j.status === "Needs admin review").length;
  const avg =
    calls.length > 0
      ? Math.round(calls.reduce((sum, c) => sum + (c.confidence || 0), 0) / calls.length)
      : 0;

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-6 text-white md:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
              Install Skips
            </p>
            <h1 className="mt-3 text-3xl font-black md:text-5xl">
              Voice Beta Admin
            </h1>
            <p className="mt-3 max-w-2xl text-slate-300">
              Supabase-backed review area for captured AI calls, transcripts and
              job cards.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={refresh}
              className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 font-bold hover:bg-white/15"
            >
              Refresh
            </button>
            <a
              href="/install-skips-demo/ai-call-beta"
              className="rounded-2xl bg-cyan-300 px-5 py-3 font-black text-slate-950 hover:bg-cyan-200"
            >
              Open AI call handler
            </a>
          </div>
        </div>

        {error && (
          <div className="mb-6 rounded-2xl border border-red-300/30 bg-red-300/10 p-4 text-sm text-red-100">
            {error}
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-4">
          <Stat label="Total calls" value={loading ? "..." : calls.length} />
          <Stat label="Jobs created" value={loading ? "..." : jobs.length} />
          <Stat label="Needs review" value={loading ? "..." : ready} />
          <Stat label="Avg capture" value={loading ? "..." : `${avg}%`} />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <a
            href="/install-skips-demo/admin/voice-beta/calls"
            className="rounded-[1.5rem] border border-cyan-300/20 bg-cyan-300/10 p-6 hover:bg-cyan-300/15"
          >
            <h2 className="text-xl font-black">AI Calls</h2>
            <p className="mt-2 text-sm text-cyan-100/80">
              View transcripts and captured customer details.
            </p>
          </a>

          <a
            href="/install-skips-demo/admin/voice-beta/jobs"
            className="rounded-[1.5rem] border border-emerald-300/20 bg-emerald-300/10 p-6 hover:bg-emerald-300/15"
          >
            <h2 className="text-xl font-black">Job Cards</h2>
            <p className="mt-2 text-sm text-emerald-100/80">
              Review enquiries ready for confirmation.
            </p>
          </a>
        </div>

        {!loading && calls.length === 0 && (
          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 text-slate-300">
            No Supabase calls yet. Open the AI call handler and save a test call.
          </div>
        )}
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
      <div className="text-sm text-slate-400">{label}</div>
      <div className="mt-2 text-4xl font-black">{value}</div>
    </div>
  );
}

