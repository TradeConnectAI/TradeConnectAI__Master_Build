import Image from "next/image";
import Link from "next/link";

type TradeConnectLogoProps = {
  href?: string;
  className?: string;
  variant?: "nav" | "hero" | "compact";
};

const SRC = "/brand/tradeconnect-logo-header.png";

export default function TradeConnectLogo({
  href = "/",
  className = "",
  variant = "nav",
}: TradeConnectLogoProps) {
  const size =
    variant === "hero"
      ? "h-24 w-[280px] sm:h-28 sm:w-[340px]"
      : variant === "compact"
        ? "h-10 w-[140px]"
        : "h-12 w-[200px] sm:h-14 sm:w-[240px]";

  return (
    <Link
      href={href}
      aria-label="TradeConnectAI home"
      className={`relative block shrink-0 ${size} ${className}`}
    >
      <Image
        src={SRC}
        alt="TradeConnectAI"
        fill
        priority
        sizes="(max-width: 768px) 180px, 260px"
        className="object-contain object-left"
      />
    </Link>
  );
}
