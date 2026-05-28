"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

function LoginForm() {
  const searchParams = useSearchParams();
  const redirect = useMemo(() => {
    return searchParams.get("redirect") || "/barry-window-cleaners-beta";
  }, [searchParams]);

  const [username, setUsername] = useState("ethan");
  const [password, setPassword] = useState("barry2026");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/barry-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        setError("Wrong username or password.");
        setLoading(false);
        return;
      }

      window.location.href = redirect;
    } catch {
      setError("Login failed. Try again.");
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleLogin}
      className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl"
    >
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2">
          <img
            src="/barry-window-cleaners-logo.png"
            alt="Barry Window Cleaners logo"
            className="h-full w-full object-contain"
          />
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
            Private beta
          </p>
          <h1 className="text-2xl font-black">Barry Window Cleaners</h1>
        </div>
      </div>

      <p className="mb-6 text-sm leading-6 text-slate-300">
        Login to view the AI answering, booking, quote and payment beta.
      </p>

      <label className="block">
        <span className="text-sm font-bold text-slate-300">Username</span>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-300"
          placeholder="ethan"
          autoComplete="username"
        />
      </label>

      <label className="mt-4 block">
        <span className="text-sm font-bold text-slate-300">Password</span>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-300"
          placeholder="barry2026"
          type="password"
          autoComplete="current-password"
        />
      </label>

      {error ? (
        <div className="mt-4 rounded-2xl border border-red-400/30 bg-red-400/10 p-3 text-sm font-bold text-red-200">
          {error}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full rounded-2xl bg-cyan-300 px-5 py-4 font-black text-slate-950 hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Checking..." : "Login to beta"}
      </button>

      <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950 p-4 text-xs text-slate-400">
        Demo access: <span className="font-bold text-white">ethan</span> /{" "}
        <span className="font-bold text-white">barry2026</span>
      </div>
    </form>
  );
}

export default function BarryWindowCleanersLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.16),transparent_30%)]" />
      <div className="relative w-full">
        <Suspense
          fallback={
            <div className="mx-auto max-w-md rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 text-center">
              Loading login...
            </div>
          }
        >
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
