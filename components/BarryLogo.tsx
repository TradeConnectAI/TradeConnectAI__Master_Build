import Link from "next/link";

type BarryLogoProps = {
  href?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
};

export default function BarryLogo({
  href = "/barry-window-cleaners-beta",
  size = "md",
  showText = true,
}: BarryLogoProps) {
  const imageSize =
    size === "lg" ? "h-20 w-20" : size === "sm" ? "h-11 w-11" : "h-14 w-14";

  return (
    <Link href={href} className="group inline-flex items-center gap-3">
      <span className="flex shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white p-2 shadow-lg shadow-cyan-950/30">
        <img
          src="/barry-window-cleaners-logo.png"
          alt="Barry Window Cleaners logo"
          className={`${imageSize} object-contain`}
        />
      </span>

      {showText ? (
        <span>
          <span className="block text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Barry Window Cleaners
          </span>
          <span className="block text-xs font-semibold text-slate-400">
            AI booking desk beta
          </span>
        </span>
      ) : null}
    </Link>
  );
}
