"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CompleteOptionsLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (password.trim().toLowerCase() === "complete2026") {
      localStorage.setItem("complete-options-beta-access", "true");
      router.push("/complete-options-demo");
      return;
    }

    setError("Wrong password. Try complete2026");
  }

  return (
    <main className="min-h-screen bg-[#050814] text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-5 py-10">
        <div className="grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-200">
              TradeConnectAI Private Beta
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
              Complete Options
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                AI Operations Demo
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              A private clickable beta showing how AI can answer enquiries, qualify jobs,
              create quotes, update customers, assign work, and keep the business moving.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["AI Calls", "Handles missed enquiries"],
                ["Job Control", "Books and tracks work"],
                ["Customer Updates", "Texts, emails and status"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-5">
                  <p className="font-black">{title}</p>
                  <p className="mt-2 text-sm text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={login}
            className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur"
          >
            <div className="rounded-3xl bg-slate-950/80 p-6">
              <div className="mb-6">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                  Secure Demo Login
                </p>
                <h2 className="mt-3 text-3xl font-black">Enter beta</h2>
                <p className="mt-2 text-sm text-slate-400">
                  Password protected client preview.
                </p>
              </div>

              <label className="text-sm font-bold text-slate-200">
                Demo password
              </label>

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="complete2026"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white px-4 py-4 text-black outline-none ring-cyan-400/40 focus:ring-4"
              />

              {error && (
                <p className="mt-3 rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-200">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 w-full rounded-2xl bg-cyan-300 px-5 py-4 text-lg font-black text-slate-950 transition hover:bg-white"
              >
                Open Complete Options Beta
              </button>

              <p className="mt-4 text-center text-xs text-slate-500">
                Demo login: complete2026
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
