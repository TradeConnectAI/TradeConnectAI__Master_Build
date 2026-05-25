type BrandWatermarkProps = {
  className?: string;
  position?: "hero" | "card" | "corner";
};

export default function BrandWatermark({
  className = "",
  position = "hero",
}: BrandWatermarkProps) {
  if (position !== "hero") return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute right-[-90px] top-[-50px] z-0 hidden w-[520px] select-none opacity-[0.07] mix-blend-screen md:block ${className}`}
    >
      <img
        src="/brand/tradeconnect-logo-clean.png"
        alt=""
        className="h-auto w-full object-contain"
      />
    </div>
  );
}
