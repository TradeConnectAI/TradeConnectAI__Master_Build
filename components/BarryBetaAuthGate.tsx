"use client";

import { useEffect, useState } from "react";

export default function BarryBetaAuthGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [checking, setChecking] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    let active = true;

    async function checkSession() {
      try {
        const res = await fetch("/api/barry-session", {
          method: "GET",
          cache: "no-store",
        });

        const data = await res.json();

        if (!active) return;

        if (data?.authenticated) {
          setAllowed(true);
          setChecking(false);
          return;
        }

        const currentPath = window.location.pathname + window.location.search;
        window.location.href =
          "/barry-window-cleaners-login?redirect=" +
          encodeURIComponent(currentPath);
      } catch {
        if (!active) return;
        window.location.href = "/barry-window-cleaners-login";
      }
    }

    checkSession();

    return () => {
      active = false;
    };
  }, []);

  if (checking) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6 text-white">
        <div className="max-w-md rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 text-center shadow-2xl">
          <div className="mx-auto mb-5 h-12 w-12 animate-pulse rounded-2xl bg-cyan-300" />
          <h1 className="text-2xl font-black">Checking access...</h1>
          <p className="mt-2 text-sm text-slate-400">
            Opening Barry Window Cleaners beta.
          </p>
        </div>
      </main>
    );
  }

  if (!allowed) return null;

  return <>{children}</>;
}
