import Image from "next/image";
import Link from "next/link";

type TradeConnectLogoProps = {
  href?: string;
  className?: string;
  variant?: "nav" | "hero" | "compact";
};

export default function TradeConnectLogo({
  href = "/",
  className = "",
  variant = "nav",
}: TradeConnectLogoProps) {
  const sizeClass =
    variant === "hero"
      ? "h-28 w-[420px]"
      : variant === "compact"
        ? "h-12 w-[170px]"
        : "h-16 w-[260px]";

  return (
    <Link
      href={href}
      aria-label="Trade Connect AI home"
      className={`relative block shrink-0 overflow-hidden rounded-2xl border border-cyan-300/20 bg-[#020817] shadow-[0_0_34px_rgba(34,211,238,0.16)] ring-1 ring-white/5 ${sizeClass} ${className}`}
    >
      <Image
        src="/brand/tradeconnect-logo.jpeg"
        alt="Trade Connect AI"
        fill
        priority
        sizes="260px"
        className="object-cover object-center"
      />

      <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/10 via-transparent to-slate-950/10" />
      <span className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
    </Link>
  );
}
