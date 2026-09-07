"use client";

import { useState } from "react";

type Plan = "starter" | "growth";

type CheckoutButtonProps = {
  plan: Plan;
  className?: string;
  children: React.ReactNode;
};

export default function CheckoutButton({
  plan,
  className = "",
  children,
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  async function startCheckout() {
    if (loading) return;
    setLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        url?: string;
        fallback?: boolean;
        bookDemoUrl?: string;
      };

      if (data.ok && data.url) {
        window.location.href = data.url;
        return;
      }

      window.location.href = data.bookDemoUrl || "/book-demo";
    } catch {
      window.location.href = "/book-demo";
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={startCheckout}
      disabled={loading}
      className={className}
    >
      {loading ? "Redirecting…" : children}
    </button>
  );
}
