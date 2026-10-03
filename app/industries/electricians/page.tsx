import type { Metadata } from "next";
import IndustryPage from "@/components/site/IndustryPage";

export const metadata: Metadata = {
  title: "TradeConnectAI for electricians",
  description: "The job, quote and customer app built for trades — including electricians.",
};

export default function ElectriciansPage() {
  return <IndustryPage trade="electricians" examples="board photos, circuit notes and measurements" />;
}
