import type { Metadata } from "next";
import IndustryPage from "@/components/site/IndustryPage";

export const metadata: Metadata = {
  title: "TradeConnectAI for heating, ventilation and air-con engineers",
  description: "The job, quote and customer app built for trades — including heating, ventilation and air conditioning.",
};

export default function HvacPage() {
  return <IndustryPage trade="heating and air-con engineers" examples="unit photos, model numbers and measurements" />;
}
