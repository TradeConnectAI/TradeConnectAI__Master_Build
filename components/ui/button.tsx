"use client";

import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  const base =
    "px-6 py-3 rounded-lg font-semibold transition inline-block text-center";

  const variants = {
    primary: "bg-[#2D8CFF] text-white hover:bg-[#1A6EDC]",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  };

  const classes = clsx(base, variants[variant]);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
