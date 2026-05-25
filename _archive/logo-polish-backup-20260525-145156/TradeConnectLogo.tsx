import Image from "next/image";
import Link from "next/link";

type TradeConnectLogoProps = {
  href?: string;
  className?: string;
  imageClassName?: string;
};

export default function TradeConnectLogo({
  href = "/",
  className = "",
  imageClassName = "",
}: TradeConnectLogoProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 ${className}`}
      aria-label="TradeConnectAI home"
    >
      <Image
        src="/brand/tradeconnect-logo.jpeg"
        alt="TradeConnectAI logo"
        width={280}
        height={110}
        priority
        className={`h-10 w-auto rounded-xl object-contain shadow-[0_0_24px_rgba(56,189,248,0.18)] ring-1 ring-white/10 md:h-11 ${imageClassName}`}
      />
    </Link>
  );
}

