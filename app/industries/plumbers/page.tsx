import type { Metadata } from "next";
import IndustryPage from "@/components/site/IndustryPage";

export const metadata: Metadata = {
  title: "TradeConnectAI for plumbers and heating engineers",
  description: "The job, quote and customer app built for trades — including plumbing and heating.",
};

export default function PlumbersPage() {
  return <IndustryPage trade="plumbers and heating engineers" examples="leak and boiler photos, measurements and notes" />;
}
