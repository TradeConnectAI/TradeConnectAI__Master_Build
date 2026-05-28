import BarryBetaAuthGate from "@/components/BarryBetaAuthGate";

export default function BarryWindowCleanersBetaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BarryBetaAuthGate>{children}</BarryBetaAuthGate>;
}
