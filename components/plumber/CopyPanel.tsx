"use client";

import { useState } from "react";

export default function CopyPanel({
  title,
  subtitle,
  text,
}: {
  title: string;
  subtitle: string;
  text: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback for older mobile browsers
      const area = document.createElement("textarea");
      area.value = text;
      area.style.position = "fixed";
      area.style.left = "-9999px";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      document.body.removeChild(area);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  }

  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-black text-white">{title}</h3>
          <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
        </div>
        <button
          type="button"
          onClick={copy}
          className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="mt-4 whitespace-pre-wrap rounded-2xl border border-white/10 bg-black/40 p-4 text-sm leading-6 text-slate-200">
        {text}
      </pre>
    </section>
  );
}
