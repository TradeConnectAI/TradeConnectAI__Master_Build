"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CompleteOptionsLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");

    try {
      const res = await fetch("/api/complete-options-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        setError("Password not recognised. Try again.");
        setBusy(false);
        return;
      }

      router.push("/complete-options-demo");
      router.refresh();
    } catch {
      setError("Could not log in. Please try again.");
      setBusy(false);
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(83,183,223,0.28),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(30,92,175,0.3),transparent_38%)]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-5 py-10">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur md:grid-cols-2">
          <div className="flex min-h-[520px] flex-col justify-between bg-white p-8 text-slate-900">
            <div>
              <div className="relative h-28 w-full">
                <Image
                  src="/complete-options-logo.jpeg"
                  alt="Complete Options Home Improvements"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>

              <div className="mt-10">
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-sky-500">
                  Powered by TradeConnectAI
                </p>
                <h1 className="mt-4 text-4xl font-black tracking-tight text-[#0b4f9c] md:text-5xl">
                  Complete Options Beta Portal
                </h1>
                <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
                  A working demo for home improvement enquiries, AI call handling,
                  quote follow-ups, job planning, customer updates and operational
                  visibility.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <b className="block text-[#0b4f9c]">AI Reception</b>
                Missed calls answered.
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <b className="block text-[#0b4f9c]">Quote Flow</b>
                Leads chased cleanly.
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <b className="block text-[#0b4f9c]">Job Control</b>
                Tasks and visits logged.
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center p-8">
            <form
              onSubmit={handleLogin}
              className="w-full max-w-md rounded-[2rem] border border-white/10 bg-[#081a30]/80 p-7 shadow-xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Staff Demo Login
              </p>

              <h2 className="mt-4 text-3xl font-black">Enter the portal</h2>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Use the demo password to open the Complete Options operations dashboard.
              </p>

              <label className="mt-8 block text-sm font-semibold text-slate-200">
                Password
              </label>

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter demo password"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-slate-900 outline-none ring-cyan-300 transition focus:ring-4"
              />

              {error && (
                <p className="mt-4 rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={busy}
                className="mt-6 w-full rounded-2xl bg-[#0b63bd] px-5 py-4 text-sm font-black uppercase tracking-[0.22em] text-white shadow-lg shadow-blue-950/40 transition hover:bg-[#0e78dd] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {busy ? "Checking..." : "Open Complete Options"}
              </button>

              <div className="mt-5 rounded-2xl bg-white/5 p-4 text-xs leading-6 text-slate-300">
                Demo password: <b className="text-cyan-200">complete2026</b>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
