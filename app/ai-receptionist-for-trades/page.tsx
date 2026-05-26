import SeoLandingPage from "@/components/seo/SeoLandingPage";

export const metadata = {
  title: "AI Receptionist for Trade Businesses | TradeConnectAI",
  description: "Capture missed calls, qualify enquiries, book jobs and keep customers updated automatically.",
};

export default function Page() {
  return (
    <SeoLandingPage
      badge="AI Receptionist for Trades"
      title="AI Receptionist for Trade Businesses"
      description="Capture missed calls, qualify enquiries, book jobs and keep customers updated automatically."
      bullets={["Answer enquiries when you are on-site", "Create job notes from customer calls", "Reduce lost work from missed calls"]}
      transcript={[
        "☎️ Customer: Hi, I need a quote and availability.",
        "🤖 AI: No problem. What work do you need and where is the job?",
        "📋 Dashboard: New enquiry captured with customer details.",
        "✅ TradeConnectAI: Job record created, quote started and customer update ready."
      ]}
    />
  );
}
