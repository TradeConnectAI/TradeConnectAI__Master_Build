import Link from "next/link";
import InstallSkipsDemoNav from "@/components/InstallSkipsDemoNav";

export default function CustomerTicketPage() {
  return (
    <main className="min-h-screen install-skip-bg text-white">
      <InstallSkipsDemoNav />

      <section className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.075] p-6">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-yellow-300">Customer Contents Check</p>
          <h1 className="mt-2 text-4xl font-black">Confirm What Is In Your Skip</h1>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            The customer confirms waste type before collection. The AI flags anything the office needs to check.
          </p>
        </div>

        <section className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.07] p-5">
          <h2 className="text-2xl font-black">Waste Contents</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "General waste",
              "Hardcore / rubble",
              "Soil",
              "Green waste",
              "Timber",
              "Mixed construction waste",
              "Packaging",
              "Aggregates delivery / return",
            ].map((item) => (
              <label key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-4 text-sm font-bold text-slate-200">
                <input type="checkbox" className="h-5 w-5 accent-emerald-400" defaultChecked={["General waste", "Timber", "Packaging"].includes(item)} />
                {item}
              </label>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] border border-red-300/20 bg-red-400/10 p-5">
          <h2 className="text-2xl font-black">Restricted Item Check</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">If selected, the AI alerts the office before collection.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Asbestos",
              "Gas bottles",
              "Paint / chemicals",
              "Plasterboard",
              "Fridges / freezers",
              "Tyres",
              "Batteries",
              "Medical waste",
            ].map((item) => (
              <label key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-4 text-sm font-bold text-slate-200">
                <input type="checkbox" className="h-5 w-5 accent-red-400" />
                {item}
              </label>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.07] p-5">
          <h2 className="text-2xl font-black">Collection Notes</h2>
          <div className="mt-5 grid gap-4">
            <input defaultValue="Private driveway, nose facing road, clear access" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none" />
            <textarea defaultValue="Please collect after 2pm. Gate will be open." rows={4} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none" />
          </div>

          <div className="mt-5 rounded-3xl border border-yellow-300/25 bg-yellow-300/10 p-5">
            <p className="font-black text-yellow-200">AI Result</p>
            <p className="mt-2 text-sm leading-6 text-slate-200">
              No restricted items selected. Ticket can be generated and sent to the driver phone.
            </p>
          </div>

          <Link href="/install-skips-demo/skip-ticket" className="mt-5 inline-flex rounded-2xl bg-yellow-300 px-5 py-4 text-sm font-black text-black hover:bg-white">
            Generate Digital Skip Ticket
          </Link>
        </section>
      </section>
    </main>
  );
}


