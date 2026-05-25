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
  const isHero = variant === "hero";
  const isCompact = variant === "compact";

  return (
    <Link
      href={href}
      aria-label="Trade Connect AI home"
      className={[
        "group relative inline-flex items-center overflow-hidden rounded-2xl border border-cyan-300/15",
        "bg-slate-950/70 shadow-[0_0_36px_rgba(34,211,238,0.12)] backdrop-blur-xl",
        "transition hover:border-cyan-300/35 hover:bg-slate-900/80",
        isHero ? "px-5 py-4" : "px-3 py-2",
        className,
      ].join(" ")}
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%)]" />
      <span className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />

      <Image
        src="/brand/tradeconnect-logo.jpeg"
        alt="Trade Connect AI"
        width={isHero ? 460 : 260}
        height={isHero ? 180 : 100}
        priority
        className={[
          "relative z-10 h-auto w-auto object-contain",
          isHero ? "max-h-28 max-w-[280px] sm:max-w-[360px]" : "max-h-12 max-w-[190px]",
          isCompact ? "max-h-10 max-w-[150px]" : "",
        ].join(" ")}
      />

      <span className="sr-only">Trade Connect AI</span>
    </Link>
  );
}
