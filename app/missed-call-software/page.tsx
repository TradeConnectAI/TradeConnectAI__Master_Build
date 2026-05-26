import SeoLandingPage from "@/components/seo/SeoLandingPage";

export const metadata = {
  title: "Missed Call Software for Busy Trade Businesses | TradeConnectAI",
  description: "Turn missed calls into booked jobs with AI call handling, customer replies and job records.",
};

export default function Page() {
  return (
    <SeoLandingPage
      badge="Missed Call Capture"
      title="Missed Call Software for Busy Trade Businesses"
      description="Turn missed calls into booked jobs with AI call handling, customer replies and job records."
      bullets={["Catch enquiries after hours", "Send instant customer responses", "Push jobs into your dashboard"]}
      transcript={[
        "☎️ Customer: Hi, I need a quote and availability.",
        "🤖 AI: No problem. What work do you need and where is the job?",
        "📋 Dashboard: New enquiry captured with customer details.",
        "✅ TradeConnectAI: Job record created, quote started and customer update ready."
      ]}
    />
  );
}
