"use client";

import { useMemo, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/site-links";

const questions = [
  { key: "helps", label: "What helps?", hint: "Anything that saves you time or hassle." },
  { key: "inTheWay", label: "What gets in the way?", hint: "Slow, fiddly or annoying bits." },
  { key: "confusing", label: "What’s confusing?", hint: "Anything you had to stop and work out." },
  { key: "missing", label: "What’s missing?", hint: "What would make you use it every day?" },
] as const;

type Key = (typeof questions)[number]["key"] | "name" | "email" | "trade";

export function buildFeedbackMailto(values: Partial<Record<Key, string>>) {
  const lines: string[] = [];
  for (const q of questions) {
    lines.push(`${q.label}\n${(values[q.key] || "").trim() || "-"}\n`);
  }
  lines.push(`Trade: ${(values.trade || "").trim() || "-"}`);
  lines.push(`Name: ${(values.name || "").trim() || "-"}`);
  lines.push(`Email: ${(values.email || "").trim() || "-"}`);
  lines.push("\nSent from the TradeConnectAI website feedback form.");
  const subject = "TradeConnectAI feedback";
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

export default function FeedbackForm() {
  const [values, setValues] = useState<Partial<Record<Key, string>>>({});
  const [sent, setSent] = useState(false);
  const href = useMemo(() => buildFeedbackMailto(values), [values]);
  const hasSomething = questions.some((q) => (values[q.key] || "").trim().length > 0);

  const set = (k: Key) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  return (
    <form
      className="grid gap-5"
      data-mailto={href}
      onSubmit={(e) => {
        e.preventDefault();
        if (!hasSomething) return;
        setSent(true);
        window.location.href = href;
      }}
    >
      {questions.map((q) => (
        <label key={q.key} className="grid gap-1.5">
          <span className="tc-display text-xl font-bold text-navy">{q.label}</span>
          <span className="text-sm text-ink-muted">{q.hint}</span>
          <textarea name={q.key} rows={3} className="tc-input" value={values[q.key] || ""} onChange={set(q.key)} />
        </label>
      ))}
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="grid gap-1.5">
          <span className="font-semibold text-navy">Your trade <span className="font-normal text-ink-muted">(optional)</span></span>
          <input name="trade" className="tc-input" autoComplete="organization-title" value={values.trade || ""} onChange={set("trade")} />
        </label>
        <label className="grid gap-1.5">
          <span className="font-semibold text-navy">Name <span className="font-normal text-ink-muted">(optional)</span></span>
          <input name="name" className="tc-input" autoComplete="name" value={values.name || ""} onChange={set("name")} />
        </label>
        <label className="grid gap-1.5">
          <span className="font-semibold text-navy">Email <span className="font-normal text-ink-muted">(optional)</span></span>
          <input name="email" type="email" className="tc-input" autoComplete="email" value={values.email || ""} onChange={set("email")} />
        </label>
      </div>

      {!hasSomething ? (
        <p className="text-base text-ink-muted">Fill in at least one of the questions above — a single line is fine.</p>
      ) : null}

      <button type="submit" disabled={!hasSomething} className="tc-btn tc-btn-primary text-lg disabled:cursor-not-allowed disabled:opacity-60">
        Send feedback by email
      </button>
      <p className="text-base text-ink-muted">
        This opens your email app with your answers filled in, addressed to {CONTACT_EMAIL}. Nothing is stored on this website.
      </p>
      {sent ? (
        <div role="status" className="border-l-4 border-ok bg-surface p-4 text-base text-ink">
          Thanks — your email app should have opened with your feedback ready to send. If it didn&apos;t,{" "}
          <a href={href} className="font-bold text-navy underline underline-offset-4">tap here to try again</a> or email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold text-navy underline underline-offset-4 break-all">{CONTACT_EMAIL}</a>.
        </div>
      ) : null}
    </form>
  );
}
