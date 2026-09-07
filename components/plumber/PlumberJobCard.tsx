"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  buildCustomerText,
  buildQuoteDraft,
  getJobFromLocalStorage,
  type PlumberJob,
  upsertJobInLocalStorage,
  urgencyLabel,
} from "@/lib/plumber-jobs";
import CopyPanel from "@/components/plumber/CopyPanel";

export default function PlumberJobCard({ jobId }: { jobId: string }) {
  const [job, setJob] = useState<PlumberJob | null>(null);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const local = getJobFromLocalStorage(jobId);
      if (local && !cancelled) {
        setJob(local);
        setLoading(false);
      }

      try {
        const res = await fetch(`/api/plumber-jobs/${jobId}`);
        const data = await res.json();
        if (!cancelled && data?.ok && data.job) {
          upsertJobInLocalStorage(data.job);
          setJob(data.job);
          if (data.meta?.warning) setNotice(data.meta.warning);
        } else if (!local && !cancelled) {
          setNotice(
            data?.meta?.warning ||
              "Job not found on this phone or in server memory. Create one from the enquiry form."
          );
        }
      } catch {
        if (!local && !cancelled) {
          setNotice("Could not reach the API. If you created this job on another device, it will not appear here.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [jobId]);

  const quote = useMemo(() => (job ? buildQuoteDraft(job) : ""), [job]);
  const customerText = useMemo(() => (job ? buildCustomerText(job) : ""), [job]);

  if (loading && !job) {
    return (
      <main className="min-h-screen bg-[#020817] px-4 py-10 text-white">
        <p className="text-slate-300">Loading job card…</p>
      </main>
    );
  }

  if (!job) {
    return (
      <main className="min-h-screen bg-[#020817] px-4 py-10 text-white">
        <div className="mx-auto max-w-xl">
          <Link href="/operations-demo" className="text-sm font-bold text-cyan-300">
            ← Back to enquiry form
          </Link>
          <h1 className="mt-6 text-3xl font-black">Job not found</h1>
          <p className="mt-3 text-slate-300">{notice}</p>
        </div>
      </main>
    );
  }

  const created = new Date(job.createdAt);
  const createdLabel = Number.isNaN(+created)
    ? job.createdAt
    : created.toLocaleString("en-GB", {
        timeZone: "Europe/London",
        dateStyle: "medium",
        timeStyle: "short",
      });

  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <div className="mx-auto max-w-xl px-4 py-6 sm:px-5 sm:py-10">
        <div className="flex items-center justify-between gap-3">
          <Link href="/operations-demo" className="text-sm font-bold text-cyan-300">
            ← All jobs
          </Link>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
            Job card
          </p>
        </div>

        <h1 className="mt-5 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
          {job.issue}
        </h1>
        <p className="mt-2 text-slate-300">
          {job.customerName} · {job.phone}
        </p>

        {notice ? (
          <p className="mt-4 rounded-2xl border border-amber-300/20 bg-amber-300/10 px-4 py-3 text-sm text-amber-50">
            {notice}
          </p>
        ) : null}

        <div className="mt-6 grid gap-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
              Location
            </p>
            <p className="mt-2 font-bold">
              {job.address ? `${job.address}, ` : ""}
              {job.postcode}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                Urgency
              </p>
              <p className="mt-2 font-bold">{urgencyLabel(job.urgency)}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                Guide
              </p>
              <p className="mt-2 font-bold">£{job.guidePricePounds}</p>
            </div>
          </div>
          {job.notes ? (
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                Notes
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-200">{job.notes}</p>
            </div>
          ) : null}
          <p className="px-1 text-xs text-slate-500">Created {createdLabel} (UK)</p>
        </div>

        <div className="mt-8 space-y-4">
          <CopyPanel
            title="Quote draft"
            subtitle="Copy, edit, then send however you usually quote."
            text={quote}
          />
          <CopyPanel
            title="Customer text"
            subtitle="Short SMS / WhatsApp you can paste and send."
            text={customerText}
          />
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          Drafts only — you stay in control. No automatic send. No Stripe in this
          flow.
        </p>
      </div>
    </main>
  );
}
