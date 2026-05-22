import Link from "next/link";

export default function AIDashboardPage() {
  const tools = [
    {
      title: "Quote Generator",
      text: "Create a clean quote draft from a short job description.",
      href: "/dashboard/ai/quote",
    },
    {
      title: "Job Sheet Creator",
      text: "Turn job notes into a simple professional job sheet.",
      href: "/dashboard/ai/jobsheet",
    },
    {
      title: "Customer Reply",
      text: "Generate fast customer responses and follow-ups.",
      href: "/dashboard/ai/reply",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white">
      <div className="mx-auto w-full max-w-5xl">
        <Link href="/dashboard" className="inline-flex rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 font-bold text-cyan-300 hover:bg-cyan-400/20">
          ← Back to Dashboard
        </Link>

        <section className="mt-6 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
            AI Tools
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            Trade AI Copilot
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Demo tools for quotes, job sheets, customer replies, and admin support.
          </p>
        </section>

        <section className="mt-6 grid gap-5 md:grid-cols-3">
          {tools.map((tool) => (
            <Link key={tool.title} href={tool.href} className="block rounded-3xl border border-white/10 bg-white/[0.04] p-6 hover:border-cyan-400/40 hover:bg-white/[0.06]">
              <h2 className="text-2xl font-black">{tool.title}</h2>
              <p className="mt-3 text-slate-300">{tool.text}</p>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Open Tool
              </p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}

