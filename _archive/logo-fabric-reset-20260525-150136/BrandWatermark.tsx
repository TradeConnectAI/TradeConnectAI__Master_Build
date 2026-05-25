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
      ? "right-[-90px] top-16 w-[340px] opacity-[0.035] md:right-[-30px] md:top-10 md:w-[520px]"
      : position === "card"
        ? "right-5 bottom-5 w-36 opacity-[0.045] md:w-48"
        : "right-4 bottom-4 w-28 opacity-[0.055] md:w-36";

  return (
    <img
      src="/brand/tradeconnect-logo.jpeg"
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute z-0 select-none object-contain grayscale contrast-125 saturate-0 mix-blend-screen blur-[0.2px] ${positionClass} ${className}`}
    />
  );
}
