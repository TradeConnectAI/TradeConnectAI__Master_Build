import SeoLandingPage from "@/components/seo/SeoLandingPage";

export const metadata = {
  title: "Customer Updates for Trade Businesses | TradeConnectAI",
  description: "Keep customers informed automatically so they stop chasing and your jobs feel more professional.",
};

export default function Page() {
  return (
    <SeoLandingPage
      badge="Customer Updates"
      title="Customer Updates for Trade Businesses"
      description="Keep customers informed automatically so they stop chasing and your jobs feel more professional."
      bullets={["Send booking confirmations", "Update customers when jobs move", "Improve trust before the job starts"]}
      transcript={[
        "☎️ Customer: Hi, I need a quote and availability.",
        "🤖 AI: No problem. What work do you need and where is the job?",
        "📋 Dashboard: New enquiry captured with customer details.",
        "✅ TradeConnectAI: Job record created, quote started and customer update ready."
      ]}
    />
  );
}
