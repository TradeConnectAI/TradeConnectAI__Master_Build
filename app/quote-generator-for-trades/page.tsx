import SeoLandingPage from "@/components/seo/SeoLandingPage";

export const metadata = {
  title: "Quote Generator for Trades | TradeConnectAI",
  description: "Create faster, clearer quotes from job details, materials and customer requirements.",
};

export default function Page() {
  return (
    <SeoLandingPage
      badge="Quote Generator"
      title="Quote Generator for Trades"
      description="Create faster, clearer quotes from job details, materials and customer requirements."
      bullets={["Turn enquiries into quote drafts", "Organise labour and materials", "Send professional customer updates"]}
      transcript={[
        "☎️ Customer: Hi, I need a quote and availability.",
        "🤖 AI: No problem. What work do you need and where is the job?",
        "📋 Dashboard: New enquiry captured with customer details.",
        "✅ TradeConnectAI: Job record created, quote started and customer update ready."
      ]}
    />
  );
}
