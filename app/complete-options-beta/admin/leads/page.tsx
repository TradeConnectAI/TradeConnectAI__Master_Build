"use client";

import { useEffect, useState } from "react";

type Lead = {
  id: string;
  created_at: string;
  business_name: string | null;
  contact_name: string | null;
  phone: string | null;
  email: string | null;
  location: string | null;
  source: string | null;
  lead_type: string | null;
  job_type: string | null;
  notes: string | null;
  estimated_value: string | null;
  urgency: string;
  status: string;
  score: number;
  suggested_service: string | null;
  suggested_action: string | null;
  call_script: string | null;
  marketing_message: string | null;
};

const tenant = "complete-options";

export default function LeadsAdminPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [error, setError] = useState("");
  const [savingId, setSavingId] = useState<string | null>(null);

  async function loadLeads() {
    setError("");

    try {
      const response = await fetch("/api/growth/leads?tenant=" + tenant, {
        cache: "no-store",
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Failed to load leads");
      }

      setLeads(result.leads || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load leads");
    }
  }

  useEffect(() => {
    loadLeads();
  }, []);

  async function updateStatus(id: string, status: string) {
    setSavingId(id);
    setError("");

    try {
      const response = await fetch("/api/growth/leads/" + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Failed to update lead");
      }

      setLeads((prev) => prev.map((lead) => (lead.id === id ? result.lead : lead)));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update lead");
    } finally {
      setSavingId(null);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-6 text-white md:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
              Complete Options Growth Admin
            </p>
            <h1 className="mt-3 text-3xl font-black md:text-5xl">
              Leads
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={loadLeads}
              className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 font-bold hover:bg-white/15"
            >
              Refresh
            </button>
            <a
              href="/complete-options-beta/job-finder"
              className="rounded-2xl bg-cyan-300 px-5 py-3 font-black text-slate-950 hover:bg-cyan-200"
            >
              Add lead
            </a>
          </div>
        </div>

        {error && (
          <div className="mb-5 rounded-2xl border border-red-300/30 bg-red-300/10 p-4 text-sm text-red-100">
            {error}
          </div>
        )}

        <div className="grid gap-4">
          {leads.map((lead) => (
            <article
              key={lead.id}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black">
                    {lead.business_name || lead.contact_name || "Unnamed lead"}
                  </h2>
                  <p className="mt-1 text-sm text-slate-400">
                    {new Date(lead.created_at).toLocaleString()} · {lead.location || "No location"}
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-100">
                  <strong>{lead.score}%</strong> · {lead.urgency} · {lead.status}
                </div>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-4">
                <Info label="Service" value={lead.suggested_service} />
                <Info label="Phone" value={lead.phone} />
                <Info label="Email" value={lead.email} />
                <Info label="Source" value={lead.source} />
                <Info label="Lead type" value={lead.lead_type} />
                <Info label="Job type" value={lead.job_type} />
                <Info label="Value" value={lead.estimated_value} />
                <Info label="Action" value={lead.suggested_action} />
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <CopyBox title="Call script" text={lead.call_script || ""} />
                <CopyBox title="Message" text={lead.marketing_message || ""} />
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {["Contacted", "Follow-up needed", "Quoted", "Won", "Lost", "Parked"].map((status) => (
                  <button
                    key={status}
                    onClick={() => updateStatus(lead.id, status)}
                    disabled={savingId === lead.id}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold hover:bg-white/15 disabled:opacity-50"
                  >
                    {status}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>

        {leads.length === 0 && !error && (
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 text-slate-300">
            No leads yet. Add one from Job Finder.
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
      <div className="mt-1 text-sm font-semibold">{value || "Not set"}</div>
    </div>
  );
}

function CopyBox({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
      <div className="mb-2 flex items-center justify-between gap-3">
        <h3 className="font-black">{title}</h3>
        <button
          onClick={() => navigator.clipboard.writeText(text)}
          className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold hover:bg-white/15"
        >
          Copy
        </button>
      </div>
      <p className="whitespace-pre-wrap text-sm leading-6 text-slate-200">{text}</p>
    </div>
  );
}

