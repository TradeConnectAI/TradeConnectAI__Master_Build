import SeoLandingPage from "@/components/seo/SeoLandingPage";

export const metadata = {
  title: "Practical AI for Trades, Not Corporate Fluff | TradeConnectAI",
  description: "TradeConnectAI helps sole traders and small teams manage calls, quotes, jobs and customer updates.",
};

export default function Page() {
  return (
    <SeoLandingPage
      badge="Trade Business AI"
      title="Practical AI for Trades, Not Corporate Fluff"
      description="TradeConnectAI helps sole traders and small teams manage calls, quotes, jobs and customer updates."
      bullets={["Built for real trade workflows", "Simple dashboards and demos", "Designed for small businesses"]}
      transcript={[
        "☎️ Customer: Hi, I need a quote and availability.",
        "🤖 AI: No problem. What work do you need and where is the job?",
        "📋 Dashboard: New enquiry captured with customer details.",
        "✅ TradeConnectAI: Job record created, quote started and customer update ready."
      ]}
    />
  );
}
