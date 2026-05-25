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
      ? "right-[-40px] top-10 w-[280px] opacity-[0.07] md:right-10 md:w-[420px]"
      : position === "card"
        ? "right-4 bottom-4 w-32 opacity-[0.08] md:w-40"
        : "right-4 bottom-4 w-24 opacity-[0.10] md:w-32";

  return (
    <img
      src="/brand/tradeconnect-logo.jpeg"
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute z-0 select-none rounded-2xl object-contain mix-blend-screen saturate-75 ${positionClass} ${className}`}
    />
  );
}
