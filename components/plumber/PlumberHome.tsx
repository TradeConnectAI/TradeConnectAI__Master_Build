"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  createPlumberJob,
  loadJobsFromLocalStorage,
  type PlumberJob,
  type PlumberUrgency,
  upsertJobInLocalStorage,
  urgencyLabel,
} from "@/lib/plumber-jobs";

const theatreModules = [
  { label: "AI Webchat (static)", href: "/operations-demo/ai-webchat" },
  { label: "Calls (static)", href: "/operations-demo/calls" },
  { label: "Quotes board (static)", href: "/operations-demo/quotes" },
  { label: "Jobs board (static)", href: "/operations-demo/jobs" },
  { label: "Revenue (static)", href: "/operations-demo/revenue" },
];

type StoreMeta = {
  backend?: string;
  supabaseConfigured?: boolean;
  warning?: string;
};

export default function PlumberHome() {
  const router = useRouter();
  const [jobs, setJobs] = useState<PlumberJob[]>([]);
  const [meta, setMeta] = useState<StoreMeta | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    postcode: "",
    address: "",
    issue: "",
    urgency: "today" as PlumberUrgency,
    notes: "",
  });

  useEffect(() => {
    const local = loadJobsFromLocalStorage();
    setJobs(local);

    fetch("/api/plumber-jobs")
      .then((res) => res.json())
      .then((data) => {
        if (data?.meta) setMeta(data.meta);
        if (Array.isArray(data?.jobs) && data.jobs.length) {
          const byId = new Map<string, PlumberJob>();
          for (const job of [...data.jobs, ...local]) byId.set(job.id, job);
          const merged = Array.from(byId.values()).sort(
            (a, b) => +new Date(b.createdAt) - +new Date(a.createdAt)
          );
          setJobs(merged);
          for (const job of merged) upsertJobInLocalStorage(job);
        }
      })
      .catch(() => {
        /* localStorage already loaded */
      });
  }, []);

  const storageHint = useMemo(() => {
    if (meta?.warning) return meta.warning;
    if (meta?.supabaseConfigured) {
      return "Saving to Supabase when available, with a copy on this phone (localStorage).";
    }
    return "Jobs are saved on this phone (localStorage) and in server memory for this session. No secrets required.";
  }, [meta]);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setSaving(true);

    const localJob = createPlumberJob(form);

    try {
      const res = await fetch("/api/plumber-jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data?.ok || !data?.job) {
        // Still persist locally so the phone path works offline / without API
        upsertJobInLocalStorage(localJob);
        setJobs(loadJobsFromLocalStorage());
        if (data?.error) setError(String(data.error));
        router.push(`/operations-demo/job/${localJob.id}`);
        return;
      }

      if (data.meta) setMeta(data.meta);
      upsertJobInLocalStorage(data.job as PlumberJob);
      setJobs(loadJobsFromLocalStorage());
      router.push(`/operations-demo/job/${data.job.id}`);
    } catch {
      upsertJobInLocalStorage(localJob);
      setJobs(loadJobsFromLocalStorage());
      router.push(`/operations-demo/job/${localJob.id}`);
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <div className="mx-auto max-w-xl px-4 py-6 sm:px-5 sm:py-10">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="text-sm font-bold text-cyan-300">
            ← Home
          </Link>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
            Real plumber path
          </p>
        </div>

        <h1 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
          Enquiry → job card
        </h1>
        <p className="mt-3 text-base leading-7 text-slate-300">
          Capture a plumbing enquiry on your phone, open the job card, then copy
          a quote draft or customer text. Sole-trader / 2-van flow — not live
          phone-AI.
        </p>

        <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-50">
          {storageHint}
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-6 space-y-4 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-4 sm:p-5"
        >
          <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
            New enquiry
          </p>

          <label className="block space-y-2">
            <span className="text-sm text-slate-300">Customer name</span>
            <input
              required
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none focus:border-cyan-300/50"
              value={form.customerName}
              onChange={(e) =>
                setForm((f) => ({ ...f, customerName: e.target.value }))
              }
              placeholder="e.g. Jane Smith"
              autoComplete="name"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm text-slate-300">Phone</span>
            <input
              required
              type="tel"
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none focus:border-cyan-300/50"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              placeholder="07…"
              autoComplete="tel"
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block space-y-2">
              <span className="text-sm text-slate-300">Postcode</span>
              <input
                required
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none focus:border-cyan-300/50"
                value={form.postcode}
                onChange={(e) =>
                  setForm((f) => ({ ...f, postcode: e.target.value }))
                }
                placeholder="SW1A 1AA"
                autoComplete="postal-code"
              />
            </label>

            <label className="block space-y-2">
              <span className="text-sm text-slate-300">Urgency</span>
              <select
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none focus:border-cyan-300/50"
                value={form.urgency}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    urgency: e.target.value as PlumberUrgency,
                  }))
                }
              >
                <option value="today">Today / urgent</option>
                <option value="this_week">This week</option>
                <option value="flexible">Flexible</option>
              </select>
            </label>
          </div>

          <label className="block space-y-2">
            <span className="text-sm text-slate-300">Address (optional)</span>
            <input
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none focus:border-cyan-300/50"
              value={form.address}
              onChange={(e) =>
                setForm((f) => ({ ...f, address: e.target.value }))
              }
              placeholder="House number / street"
              autoComplete="street-address"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm text-slate-300">Issue</span>
            <input
              required
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none focus:border-cyan-300/50"
              value={form.issue}
              onChange={(e) => setForm((f) => ({ ...f, issue: e.target.value }))}
              placeholder="e.g. Leaking kitchen tap"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm text-slate-300">Notes (optional)</span>
            <textarea
              className="min-h-[88px] w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none focus:border-cyan-300/50"
              value={form.notes}
              onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
              placeholder="Access, boiler make, photos promised…"
            />
          </label>

          {error ? (
            <p className="rounded-2xl border border-amber-300/30 bg-amber-300/10 px-4 py-3 text-sm text-amber-100">
              {error} — job still saved on this phone.
            </p>
          ) : null}

          <button
            type="submit"
            disabled={saving}
            className="w-full rounded-full bg-white px-5 py-4 text-sm font-black text-slate-950 disabled:opacity-60"
          >
            {saving ? "Saving…" : "Create job card"}
          </button>
        </form>

        <section className="mt-8">
          <div className="flex items-end justify-between gap-3">
            <h2 className="text-2xl font-black">Your job cards</h2>
            <p className="text-xs text-slate-400">{jobs.length} saved</p>
          </div>

          {jobs.length === 0 ? (
            <p className="mt-4 rounded-2xl border border-dashed border-white/15 px-4 py-6 text-sm text-slate-400">
              No jobs yet. Submit the form above — that is the real path.
            </p>
          ) : (
            <ul className="mt-4 space-y-3">
              {jobs.map((job) => (
                <li key={job.id}>
                  <Link
                    href={`/operations-demo/job/${job.id}`}
                    className="block rounded-3xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.07]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-black text-white">{job.customerName}</p>
                        <p className="mt-1 text-sm text-slate-300">{job.issue}</p>
                        <p className="mt-2 text-xs text-slate-400">
                          {job.postcode} · {urgencyLabel(job.urgency)} · £
                          {job.guidePricePounds} guide
                        </p>
                      </div>
                      <span className="rounded-full bg-cyan-300/15 px-3 py-1 text-xs font-bold text-cyan-200">
                        Open
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <details className="mt-10 rounded-3xl border border-white/10 bg-black/20 p-4">
          <summary className="cursor-pointer text-sm font-bold text-slate-300">
            Other modules (static theatre — not this flow)
          </summary>
          <ul className="mt-4 space-y-2">
            {theatreModules.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-2xl border border-white/10 px-4 py-3 text-sm text-slate-400 hover:bg-white/5"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </main>
  );
}
