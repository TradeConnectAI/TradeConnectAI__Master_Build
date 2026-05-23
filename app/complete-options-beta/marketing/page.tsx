"use client";

import { useState } from "react";

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

export default function MarketingPage() {
  const [form, setForm] = useState({
    title: "Home improvement and trade services campaign",
    goal: "Get more bookings this week",
    service: "Home improvement and trade services",
    area: "local service area",
    tone: "Friendly local",
    offer: "Same-week availability",
  });

  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function createCampaign() {
    setSaving(true);
    setError("");
    setCampaign(null);

    try {
      const response = await fetch("/api/growth/campaigns", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tenant, ...form }),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Failed to create campaign");
      }

      setCampaign(result.campaign);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create campaign");
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-6 text-white md:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-fuchsia-300">
              Complete Options AI Growth Engine
            </p>
            <h1 className="mt-3 text-3xl font-black md:text-5xl">
              AI Marketing Engine
            </h1>
            <p className="mt-3 max-w-2xl text-slate-300">
              Generate posts, SMS, email, flyer copy and Google Business content
              for real trade campaigns.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/complete-options-beta/job-finder"
              className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 font-bold hover:bg-white/15"
            >
              Job Finder
            </a>
            <a
              href="/complete-options-beta/admin/campaigns"
              className="rounded-2xl bg-fuchsia-300 px-5 py-3 font-black text-slate-950 hover:bg-fuchsia-200"
            >
              View campaigns
            </a>
          </div>
        </div>

        {error && (
          <div className="mb-5 rounded-2xl border border-red-300/30 bg-red-300/10 p-4 text-sm text-red-100">
            {error}
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-xl font-black">Campaign brief</h2>

            <div className="mt-5 grid gap-3">
              <Input label="Campaign title" value={form.title} onChange={(v) => setForm({ ...form, title: v })} />
              <Input label="Goal" value={form.goal} onChange={(v) => setForm({ ...form, goal: v })} />
              <Input label="Service" value={form.service} onChange={(v) => setForm({ ...form, service: v })} />
              <Input label="Area" value={form.area} onChange={(v) => setForm({ ...form, area: v })} />
              <Input label="Tone" value={form.tone} onChange={(v) => setForm({ ...form, tone: v })} />
              <Input label="Offer" value={form.offer} onChange={(v) => setForm({ ...form, offer: v })} />
            </div>

            <button
              onClick={createCampaign}
              disabled={saving}
              className="mt-5 rounded-2xl bg-fuchsia-300 px-5 py-3 font-black text-slate-950 hover:bg-fuchsia-200 disabled:opacity-50"
            >
              {saving ? "Creating..." : "Generate campaign"}
            </button>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-xl font-black">Generated marketing pack</h2>

            {!campaign && (
              <div className="mt-5 rounded-2xl border border-white/10 bg-black/25 p-5 text-slate-300">
                Create a campaign and this beta will produce copy for Facebook,
                Google Business, SMS, email and flyers.
              </div>
            )}

            {campaign && (
              <div className="mt-5 space-y-4">
                <div className="rounded-[1.5rem] border border-fuchsia-300/20 bg-fuchsia-300/10 p-5">
                  <div className="text-sm text-fuchsia-100/80">Campaign</div>
                  <div className="mt-2 text-3xl font-black">{campaign.title}</div>
                  <div className="mt-2 text-sm text-fuchsia-100">{campaign.status}</div>
                </div>

                <CopyBox title="Facebook post" text={campaign.facebook_post || ""} />
                <CopyBox title="Google Business post" text={campaign.google_business_post || ""} />
                <CopyBox title="SMS follow-up" text={campaign.sms_message || ""} />
                <CopyBox title={"Email: " + (campaign.email_subject || "")} text={campaign.email_body || ""} />
                <CopyBox title="Flyer / door-drop text" text={campaign.flyer_text || ""} />
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
        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white outline-none focus:border-fuchsia-300/50"
      />
    </label>
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

