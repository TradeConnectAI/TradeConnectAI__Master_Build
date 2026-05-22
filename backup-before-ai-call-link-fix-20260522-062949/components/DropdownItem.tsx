"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { KeyboardEvent } from "react";

type DropdownItemProps = {
  icon: React.ReactNode;
  label: string;
  href: string;
  danger?: boolean; // optional, only used for destructive actions
  onClick?: () => void; // supports logout handlers etc.
};

export default function DropdownItem({
  icon,
  label,
  href,
  danger = false,
  onClick,
}: DropdownItemProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      onClick?.();
    }
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors cursor-pointer select-none",
        "focus:outline-none focus:ring-2 focus:ring-blue-500",
        danger
          ? "text-red-400 hover:bg-red-500/10 hover:text-red-300"
          : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
      )}
      role="menuitem"
      tabIndex={0}
    >
      <span className="flex-shrink-0">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}
