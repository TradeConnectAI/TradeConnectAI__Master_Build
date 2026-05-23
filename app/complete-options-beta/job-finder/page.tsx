"use client";

import { useState } from "react";

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

export default function JobFinderPage() {
  const [form, setForm] = useState({
    businessName: "",
    contactName: "",
    phone: "",
    email: "",
    location: "",
    source: "Manual lead",
    leadType: "",
    jobType: "",
    notes: "",
    estimatedValue: "",
  });

  const [lead, setLead] = useState<Lead | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function submitLead() {
    setSaving(true);
    setError("");
    setLead(null);

    try {
      const response = await fetch("/api/growth/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tenant, ...form }),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Failed to create lead");
      }

      setLead(result.lead);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create lead");
    } finally {
      setSaving(false);
    }
  }

  function sampleLead() {
    setForm({
      businessName: "Barry Kitchen Refurb",
      contactName: "Dean",
      phone: "07123 456789",
      email: "",
      location: "Barry / Vale of Glamorgan",
      source: "Facebook post",
      leadType: "Renovation",
      jobType: "home improvement / repair / installation",
      notes:
        "Customer is clearing builders waste this week and likely needs a fast slot. Driveway access looks possible.",
      estimatedValue: "£250-£450",
    });
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-6 text-white md:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
              Complete Options AI Growth Engine
            </p>
            <h1 className="mt-3 text-3xl font-black md:text-5xl">
              AI Job Finder
            </h1>
            <p className="mt-3 max-w-2xl text-slate-300">
              Add a possible lead, let the beta score it, suggest the service,
              and generate a call script plus follow-up message.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/complete-options-beta/marketing"
              className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 font-bold hover:bg-white/15"
            >
              Marketing
            </a>
            <a
              href="/complete-options-beta/admin/leads"
              className="rounded-2xl bg-cyan-300 px-5 py-3 font-black text-slate-950 hover:bg-cyan-200"
            >
              View leads
            </a>
          </div>
        </div>

        {error && (
          <div className="mb-5 rounded-2xl border border-red-300/30 bg-red-300/10 p-4 text-sm text-red-100">
            {error}
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-xl font-black">Add lead</h2>

            <div className="mt-5 grid gap-3">
              <Input label="Business / lead name" value={form.businessName} onChange={(v) => setForm({ ...form, businessName: v })} />
              <Input label="Contact name" value={form.contactName} onChange={(v) => setForm({ ...form, contactName: v })} />
              <Input label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
              <Input label="Email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              <Input label="Location" value={form.location} onChange={(v) => setForm({ ...form, location: v })} />
              <Input label="Source" value={form.source} onChange={(v) => setForm({ ...form, source: v })} />
              <Input label="Lead type" value={form.leadType} onChange={(v) => setForm({ ...form, leadType: v })} />
              <Input label="Job type" value={form.jobType} onChange={(v) => setForm({ ...form, jobType: v })} />
              <Input label="Estimated value" value={form.estimatedValue} onChange={(v) => setForm({ ...form, estimatedValue: v })} />

              <label className="block">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  Notes
                </span>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  rows={5}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white outline-none focus:border-cyan-300/50"
                />
              </label>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={submitLead}
                disabled={saving}
                className="rounded-2xl bg-cyan-300 px-5 py-3 font-black text-slate-950 hover:bg-cyan-200 disabled:opacity-50"
              >
                {saving ? "Scoring..." : "Score lead"}
              </button>
              <button
                onClick={sampleLead}
                className="rounded-2xl border border-fuchsia-300/30 bg-fuchsia-300/10 px-5 py-3 font-bold text-fuchsia-100 hover:bg-fuchsia-300/20"
              >
                Sample lead
              </button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-xl font-black">AI lead result</h2>

            {!lead && (
              <div className="mt-5 rounded-2xl border border-white/10 bg-black/25 p-5 text-slate-300">
                Add a lead and the beta will score it. This starts free with
                rule-based scoring, then can be upgraded to a real AI model later.
              </div>
            )}

            {lead && (
              <div className="mt-5 space-y-4">
                <div className="rounded-[1.5rem] border border-cyan-300/20 bg-cyan-300/10 p-5">
                  <div className="text-sm text-cyan-100/80">Lead score</div>
                  <div className="mt-2 text-6xl font-black">{lead.score}%</div>
                  <div className="mt-2 text-lg font-black">{lead.urgency} lead</div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <Info label="Suggested service" value={lead.suggested_service} />
                  <Info label="Suggested action" value={lead.suggested_action} />
                  <Info label="Status" value={lead.status} />
                  <Info label="Source" value={lead.source} />
                </div>

                <CopyBox title="Call script" text={lead.call_script || ""} />
                <CopyBox title="Marketing message" text={lead.marketing_message || ""} />
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
        {label}
      </span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white outline-none focus:border-cyan-300/50"
      />
    </label>
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
