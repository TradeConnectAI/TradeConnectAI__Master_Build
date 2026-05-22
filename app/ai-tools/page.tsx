import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import RealImageCard from "@/components/RealImageCard";
import { tradeImages } from "@/components/tradeImages";

const tools = [
  {
    title: "AI Call Helper",
    text: "Captures enquiries and turns calls into clear job notes.",
    image: tradeImages.phone,
    href: "/ai-call-demo",
  },
  {
    title: "Job Toolbox",
    text: "Keeps jobs, quotes, reminders and follow-ups in one clearer place.",
    image: tradeImages.tools,
    href: "/operations",
  },
  {
    title: "Customer Updates",
    text: "Helps customers stay informed so they chase less.",
    image: tradeImages.engineer,
    href: "/customer-portal",
  },
];

export default function AiToolsPage() {
  return (
    <main className="min-min-min-h-screen bg-slate-950 text-white">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">
          Toolbox
        </p>

        <h1 className="mt-4 max-w-4xl text-5xl font-black md:text-7xl">
          Practical AI tools for busy trade days.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Not flashy tech for the sake of it. Useful helpers for calls, jobs, follow-ups and customers.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-1 md:grid-cols-3">
          {tools.map((tool) => (
            <Link key={tool.title} href={tool.href}>
              <RealImageCard title={tool.title} text={tool.text} image={tool.image} />
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}


