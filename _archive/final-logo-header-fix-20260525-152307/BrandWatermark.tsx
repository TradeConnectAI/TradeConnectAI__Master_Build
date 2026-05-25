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
      className={`pointer-events-none absolute right-[-160px] top-[-120px] z-0 hidden w-[760px] select-none opacity-[0.055] mix-blend-screen blur-[0.4px] md:block ${className}`}
      style={{
        WebkitMaskImage:
          "radial-gradient(circle at center, black 0%, black 34%, transparent 72%)",
        maskImage:
          "radial-gradient(circle at center, black 0%, black 34%, transparent 72%)",
      }}
    >
      <img
        src="/brand/tradeconnect-logo.jpeg"
        alt=""
        className="h-auto w-full object-contain saturate-75"
      />
    </div>
  );
}
