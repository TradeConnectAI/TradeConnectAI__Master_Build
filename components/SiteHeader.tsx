"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Wordmark from "@/components/site/Wordmark";
import { APP_SIGNIN_URL, APP_SIGNUP_URL, FEEDBACK_PATH } from "@/lib/site-links";

const navItems = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/#about" },
  { label: "Feedback", href: FEEDBACK_PATH },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-copper bg-navy text-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
        <Wordmark tone="light" />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-[44px] items-center px-3 text-[0.95rem] font-semibold text-cream hover:text-copper"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={APP_SIGNIN_URL}
            className="inline-flex min-h-[44px] items-center px-3 text-[0.95rem] font-semibold text-cream hover:text-copper"
          >
            Sign in
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a href={APP_SIGNUP_URL} className="tc-btn tc-btn-primary min-h-[44px] whitespace-nowrap px-3 py-2 text-base sm:px-4">
            Try the app
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 min-w-[44px] shrink-0 items-center justify-center rounded-[2px] border-2 border-cream/60 text-cream lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-cream/15 bg-navy px-4 pb-5 pt-2 lg:hidden">
          <ul className="grid">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[48px] items-center border-b border-cream/10 text-lg font-semibold text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={APP_SIGNIN_URL} className="flex min-h-[48px] items-center border-b border-cream/10 text-lg font-semibold text-cream">
                Sign in
              </a>
            </li>
          </ul>
          <a href={APP_SIGNUP_URL} className="tc-btn tc-btn-primary mt-4 w-full">
            Try the app
          </a>
          <Link
            href={FEEDBACK_PATH}
            onClick={() => setOpen(false)}
            className="tc-btn tc-btn-ghost-light mt-3 w-full"
          >
            Tell us what you think
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
