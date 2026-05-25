import Image from "next/image";
import Link from "next/link";

type TradeConnectLogoProps = {
  href?: string;
  className?: string;
  imageClassName?: string;
  compact?: boolean;
};

export default function TradeConnectLogo({
  href = "/",
  className = "",
  imageClassName = "",
  compact = false,
}: TradeConnectLogoProps) {
  return (
    <Link
      href={href}
      aria-label="TradeConnectAI home"
      className={`group inline-flex items-center gap-3 rounded-2xl border border-cyan-300/15 bg-slate-950/55 px-3 py-2 shadow-[0_0_30px_rgba(34,211,238,0.10)] backdrop-blur-xl transition hover:border-cyan-300/35 hover:bg-slate-900/75 ${className}`}
    >
      <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/10 bg-white/8 shadow-inner">
        <span className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-500/20" />
        <Image
          src="/brand/tradeconnect-logo.jpeg"
          alt=""
          width={80}
          height={80}
          priority
          className={`relative h-8 w-8 rounded-lg object-cover object-left ${imageClassName}`}
        />
      </span>

      {!compact && (
        <span className="leading-tight">
          <span className="block text-sm font-black tracking-tight text-white">
            TradeConnect<span className="text-cyan-300">AI</span>
          </span>
          <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-cyan-100/55">
            Trades assistant
          </span>
        </span>
      )}
    </Link>
  );
}
