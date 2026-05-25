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
  const size =
    variant === "hero"
      ? "h-24 w-[360px] sm:h-28 sm:w-[430px]"
      : variant === "compact"
        ? "h-10 w-[150px]"
        : "h-14 w-[250px]";

  return (
    <Link
      href={href}
      aria-label="Trade Connect AI home"
      className={`relative block shrink-0 ${size} ${className}`}
    >
      <Image
        src="/brand/tradeconnect-logo-clean.png"
        alt="Trade Connect AI"
        fill
        priority
        sizes="(max-width: 768px) 180px, 260px"
        className="object-contain object-left"
      />
    </Link>
  );
}
