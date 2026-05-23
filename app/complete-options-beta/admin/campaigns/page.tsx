"use client";

import { useEffect, useState } from "react";

type Campaign = {
  id: string;
  created_at: string;
  title: string;
  goal: string | null;
  service: string | null;
  area: string | null;
  tone: string | null;
  offer: string | null;
  status: string;
  facebook_post: string | null;
  google_business_post: string | null;
  sms_message: string | null;
  email_subject: string | null;
  email_body: string | null;
  flyer_text: string | null;
};

const tenant = "complete-options";

export default function CampaignsAdminPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [error, setError] = useState("");
  const [savingId, setSavingId] = useState<string | null>(null);

  async function loadCampaigns() {
    setError("");

    try {
      const response = await fetch("/api/growth/campaigns?tenant=" + tenant, {
        cache: "no-store",
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Failed to load campaigns");
      }

      setCampaigns(result.campaigns || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load campaigns");
    }
  }

  useEffect(() => {
    loadCampaigns();
  }, []);

  async function updateStatus(id: string, status: string) {
    setSavingId(id);
    setError("");

    try {
      const response = await fetch("/api/growth/campaigns/" + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Failed to update campaign");
      }

      setCampaigns((prev) =>
        prev.map((campaign) => (campaign.id === id ? result.campaign : campaign))
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update campaign");
    } finally {
      setSavingId(null);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-6 text-white md:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-fuchsia-300">
              Complete Options Growth Admin
            </p>
            <h1 className="mt-3 text-3xl font-black md:text-5xl">
              Campaigns
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={loadCampaigns}
              className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 font-bold hover:bg-white/15"
            >
              Refresh
            </button>
            <a
              href="/complete-options-beta/marketing"
              className="rounded-2xl bg-fuchsia-300 px-5 py-3 font-black text-slate-950 hover:bg-fuchsia-200"
            >
              New campaign
            </a>
          </div>
        </div>

        {error && (
          <div className="mb-5 rounded-2xl border border-red-300/30 bg-red-300/10 p-4 text-sm text-red-100">
            {error}
          </div>
        )}

        <div className="grid gap-4">
          {campaigns.map((campaign) => (
            <article
              key={campaign.id}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black">{campaign.title}</h2>
                  <p className="mt-1 text-sm text-slate-400">
                    {new Date(campaign.created_at).toLocaleString()} · {campaign.service || "No service"} · {campaign.area || "No area"}
                  </p>
                </div>

                <div className="rounded-2xl border border-fuchsia-300/20 bg-fuchsia-300/10 px-4 py-3 text-sm font-bold text-fuchsia-100">
                  {campaign.status}
                </div>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <CopyBox title="Facebook post" text={campaign.facebook_post || ""} />
                <CopyBox title="Google Business post" text={campaign.google_business_post || ""} />
                <CopyBox title="SMS" text={campaign.sms_message || ""} />
                <CopyBox title={"Email: " + (campaign.email_subject || "")} text={campaign.email_body || ""} />
                <CopyBox title="Flyer" text={campaign.flyer_text || ""} />
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {["Ready", "Used", "Archived"].map((status) => (
                  <button
                    key={status}
                    onClick={() => updateStatus(campaign.id, status)}
                    disabled={savingId === campaign.id}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold hover:bg-white/15 disabled:opacity-50"
                  >
                    {status}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>

        {campaigns.length === 0 && !error && (
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 text-slate-300">
            No campaigns yet. Create one from the Marketing Engine.
          </div>
        )}
      </section>
    </main>
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


