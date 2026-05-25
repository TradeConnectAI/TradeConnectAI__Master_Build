"use client";

import { useEffect, useState } from "react";

type Message = {
  id: string;
  role: string;
  text: string;
  at: string;
};

type BetaCall = {
  id: string;
  created_at: string;
  source: string;
  status: string;
  confidence: number;
  customer_name: string | null;
  phone: string | null;
  service: string | null;
  postcode: string | null;
  waste_type: string | null;
  skip_size: string | null;
  date_wanted: string | null;
  access check: string | null;
  access: string | null;
  notes: string | null;
  transcript: Message[];
  booking: any;
};

export default function VoiceBetaCallsPage() {
  const [calls, setCalls] = useState<BetaCall[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);
  const [error, setError] = useState("");

  async function loadCalls() {
    setError("");

    try {
      const response = await fetch("/api/voice-beta/calls", {
        cache: "no-store",
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Failed to load calls");
      }

      setCalls(result.calls || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load calls");
    }
  }

  useEffect(() => {
    loadCalls();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-6 text-white md:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
              Voice Beta
            </p>
            <h1 className="mt-3 text-3xl font-black md:text-5xl">
              AI Call Transcripts
            </h1>
          </div>

          <div className="flex gap-3">
            <button
              onClick={loadCalls}
              className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 font-bold hover:bg-white/15"
            >
              Refresh
            </button>
            <a
              href="/complete-options-beta/admin/voice-beta"
              className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 font-bold hover:bg-white/15"
            >
              Admin
            </a>
            <a
              href="/complete-options-beta/ai-call-beta"
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

        <div className="space-y-4">
          {calls.map((call) => (
            <article
              key={call.id}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-black">
                    {call.customer_name || "Unknown customer"}
                  </h2>
                  <p className="mt-1 text-sm text-slate-400">
                    {new Date(call.created_at).toLocaleString()} · {call.source}
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-100">
                  <strong>{call.confidence}%</strong> captured · {call.status}
                </div>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-4">
                <Info label="Service" value={call.service} />
                <Info label="Postcode" value={call.postcode} />
                <Info label="Waste" value={call.waste_type} />
                <Info label="Date" value={call.date_wanted} />
              </div>

              <button
                onClick={() => setOpenId(openId === call.id ? null : call.id)}
                className="mt-4 rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold hover:bg-white/15"
              >
                {openId === call.id ? "Hide transcript" : "View transcript"}
              </button>

              {openId === call.id && (
                <div className="mt-4 max-h-[520px] space-y-3 overflow-auto rounded-2xl border border-white/10 bg-black/25 p-4">
                  {(call.transcript || []).map((msg) => (
                    <div
                      key={msg.id}
                      className={`rounded-2xl p-4 ${
                        msg.role === "assistant"
                          ? "bg-cyan-300/10"
                          : msg.role === "customer"
                          ? "bg-white/10"
                          : "bg-emerald-300/10"
                      }`}
                    >
                      <div className="mb-1 text-xs uppercase tracking-[0.2em] text-slate-500">
                        {msg.role} · {msg.at}
                      </div>
                      <p className="text-sm leading-6 text-slate-100">
                        {msg.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        {calls.length === 0 && !error && (
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 text-slate-300">
            No calls saved in Supabase yet.
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

