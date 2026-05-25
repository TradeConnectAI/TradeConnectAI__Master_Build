import Link from "next/link";
import InstallSkipsDemoNav from "@/components/InstallSkipsDemoNav";

const messages = [
  ["AI", "Hi, you are through to Install Integrated Skips. Are you after a skip, grab hire, waste removal or aggregates?"],
  ["Customer", "I need an 8 yard skip in Barry for mixed house waste."],
  ["AI", "No problem. Will the skip be on private land or on the road?"],
  ["Customer", "Private driveway."],
  ["AI", "Great, no permit needed. Any plasterboard, asbestos, fridges, tyres, paint or gas bottles?"],
  ["Customer", "No, just general waste, timber and packaging."],
  ["AI", "Perfect. I have an 8 yard available tomorrow morning. I can take payment and send your booking confirmation now."],
];

export default function WebchatPage() {
  return (
    <main className="min-h-screen install-skip-bg text-white">
      <InstallSkipsDemoNav />

      <section className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.075] p-6">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-yellow-300">AI Webchat Demo</p>
          <h1 className="mt-2 text-4xl font-black">AI Books the Skip</h1>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            A realistic fake conversation showing the AI checking permit need, contents,
            restricted items and availability.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          {messages.map(([who, text], index) => (
            <div key={`${who}-${index}`} className={`rounded-3xl border border-white/10 p-4 ${who === "AI" ? "bg-yellow-300/10" : "bg-white/[0.075]"}`}>
              <p className="text-xs font-black uppercase tracking-widest text-yellow-300">{who}</p>
              <p className="mt-2 text-sm leading-6 text-slate-100">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/install-skips-demo/book" className="rounded-2xl bg-yellow-300 px-5 py-4 text-sm font-black text-black hover:bg-white">
            Convert to Booking
          </Link>
          <Link href="/install-skips-demo/operations" className="rounded-2xl border border-white/15 px-5 py-4 text-sm font-black text-white hover:bg-white/10">
            Send to Operations
          </Link>
        </div>
      </section>
    </main>
  );
}


