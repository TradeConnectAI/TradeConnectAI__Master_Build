import Image from "next/image";
import Link from "next/link";

type WordmarkProps = {
  tone?: "light" | "dark";
  href?: string;
  showTagline?: boolean;
};

/** Matches the app's "Trade Connect AI / Built for trades." lockup. */
export default function Wordmark({ tone = "light", href = "/", showTagline = true }: WordmarkProps) {
  const word = tone === "light" ? "text-cream" : "text-navy";
  const tag = tone === "light" ? "text-cream/85" : "text-ink-muted";
  return (
    <Link href={href} aria-label="TradeConnectAI home" className="flex min-h-[44px] shrink-0 items-center gap-2.5 no-underline">
      <Image
        src="/app/tradeconnectai-app-logo.png"
        alt=""
        width={40}
        height={40}
        priority
        className="h-9 w-9 rounded-[3px] min-[400px]:h-10 min-[400px]:w-10"
      />
      <span className="flex flex-col leading-none">
        <span className={`tc-display flex items-center gap-1.5 text-[1.25rem] font-bold min-[400px]:text-[1.45rem] ${word}`}>
          <span>
            Trade<span className="text-copper">Connect</span>
          </span>
          <span className="rounded-[2px] bg-copper px-1 py-px text-[0.7rem] font-extrabold leading-tight text-navy-deep">AI</span>
        </span>
        {showTagline ? (
          <span className={`mt-1 text-[0.75rem] min-[400px]:text-[0.8rem] font-semibold ${tag}`}>Built for trades.</span>
        ) : null}
      </span>
    </Link>
  );
}
