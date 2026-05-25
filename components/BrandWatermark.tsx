type BrandWatermarkProps = {
  className?: string;
  position?: "hero" | "card" | "corner";
};

export default function BrandWatermark({
  className = "",
  position = "corner",
}: BrandWatermarkProps) {
  const positionClass =
    position === "hero"
      ? "right-[-120px] top-[-40px] w-[520px] opacity-[0.055] md:right-[-60px] md:top-[-80px] md:w-[720px]"
      : position === "card"
        ? "right-[-40px] bottom-[-40px] w-72 opacity-[0.045]"
        : "right-[-24px] bottom-[-24px] w-52 opacity-[0.05]";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-0 select-none ${positionClass} ${className}`}
    >
      <img
        src="/brand/tradeconnect-logo.jpeg"
        alt=""
        className="h-auto w-full rounded-[2rem] object-contain mix-blend-screen saturate-75 blur-[0.3px]"
      />
      <div className="absolute inset-0 rounded-[2rem] bg-slate-950/20" />
    </div>
  );
}
