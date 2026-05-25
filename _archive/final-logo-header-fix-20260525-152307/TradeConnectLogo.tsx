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
  const isCompact = variant === "compact";
  const isHero = variant === "hero";

  return (
    <Link
      href={href}
      aria-label="Trade Connect AI home"
      className={[
        "group relative inline-flex shrink-0 items-center overflow-hidden rounded-2xl",
        "border border-cyan-300/15 bg-[#030b16]/90",
        "shadow-[0_0_34px_rgba(34,211,238,0.13)] backdrop-blur-xl",
        "transition hover:border-cyan-300/35 hover:shadow-[0_0_44px_rgba(34,211,238,0.2)]",
        isHero ? "px-5 py-4" : isCompact ? "px-2.5 py-2" : "px-4 py-3",
        className,
      ].join(" ")}
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(34,211,238,0.18),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_48%)]" />
      <span className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

      <Image
        src="/brand/tradeconnect-logo.jpeg"
        alt="Trade Connect AI"
        width={isHero ? 520 : 360}
        height={isHero ? 200 : 135}
        priority
        className={[
          "relative z-10 block h-auto object-contain",
          isHero
            ? "max-h-24 w-[260px] sm:w-[340px]"
            : isCompact
              ? "max-h-10 w-[140px]"
              : "max-h-14 w-[210px]",
        ].join(" ")}
      />
    </Link>
  );
}
