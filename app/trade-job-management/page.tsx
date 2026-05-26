import SeoLandingPage from "@/components/seo/SeoLandingPage";

export const metadata = {
  title: "Trade Job Management with AI Support | TradeConnectAI",
  description: "Organise jobs, bookings, customer details, quotes and updates from one clean dashboard.",
};

export default function Page() {
  return (
    <SeoLandingPage
      badge="Job Management"
      title="Trade Job Management with AI Support"
      description="Organise jobs, bookings, customer details, quotes and updates from one clean dashboard."
      bullets={["Track live and upcoming jobs", "Keep customer records tidy", "Give teams clearer job information"]}
      transcript={[
        "☎️ Customer: Hi, I need a quote and availability.",
        "🤖 AI: No problem. What work do you need and where is the job?",
        "📋 Dashboard: New enquiry captured with customer details.",
        "✅ TradeConnectAI: Job record created, quote started and customer update ready."
      ]}
    />
  );
}
