import Link from "next/link";
import InstallSkipsDemoNav from "@/components/InstallSkipsDemoNav";

const skips = [
  {
    id: "SKIP-014",
    size: "8 Yard",
    status: "Ready for Collection",
    customer: "A. Jenkins",
    address: "22 Redbrink Crescent, Barry, CF62",
    location: "Private driveway, nose facing road",
    driver: "Dean Horgan",
    permit: "No",
    ticket: "Signed",
    contents: "General waste, timber, small rubble",
    load: "85%",
    flag: "Clear",
  },
  {
    id: "SKIP-021",
    size: "6 Yard",
    status: "On Site",
    customer: "Barry Builders Ltd",
    address: "14 Dock View Road, Barry, CF63",
    location: "Left side of site gate",
    driver: "Dai Morgan",
    permit: "Yes",
    ticket: "Awaiting Contents",
    contents: "Hardcore expected",
    load: "40%",
    flag: "Permit active",
  },
  {
    id: "SKIP-033",
    size: "12 Yard",
    status: "Full",
    customer: "Vale Roofing",
    address: "Holton Road, Barry, CF63",
    location: "Rear lane access only",
    driver: "Rhys Evans",
    permit: "No",
    ticket: "Needs Signature",
    contents: "Mixed construction waste",
    load: "100%",
    flag: "Check plasterboard",
  },
  {
    id: "SKIP-041",
    size: "4 Yard",
    status: "Delivered",
    customer: "M. Thomas",
    address: "Romilly Park Road, Barry, CF62",
    location: "Front garden, clear access",
    driver: "Ceri Price",
    permit: "No",
    ticket: "Open",
    contents: "Garden waste",
    load: "15%",
    flag: "Clear",
  },
];

const stats = [
  ["Skips On Site", "38"],
  ["Ready for Collection", "14"],
  ["Tickets Awaiting Signature", "5"],
  ["Contamination Flags", "2"],
  ["Permits Active", "7"],
  ["Yard Tickets Sent Today", "18"],
];

export default function SkipOperationsPage() {
  return (
    <main className="min-h-screen bg-[#06110d] text-white">
      <InstallSkipsDemoNav />

      <section className="mx-auto max-w-[1800px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-emerald-300">Live Skip Locations</p>
          <h1 className="mt-2 text-4xl font-black">Skip Location + Paperwork Dashboard</h1>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Track every skip, customer site, driver, permit status, contents note,
            collection instruction and paperwork status.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {stats.map(([label, value]) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.06] p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{label}</p>
              <p className="mt-2 text-3xl font-black">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {skips.map((skip) => (
            <article key={skip.id} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-black text-emerald-300">{skip.id}</p>
                  <h2 className="mt-1 text-2xl font-black">{skip.size} Skip</h2>
                  <p className="mt-1 text-sm text-slate-300">{skip.customer}</p>
                </div>
                <span className="w-fit rounded-full bg-white/10 px-3 py-2 text-xs font-black">{skip.status}</span>
              </div>

              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                {[
                  ["Site Address", skip.address],
                  ["Exact Location", skip.location],
                  ["Driver", skip.driver],
                  ["Permit / Ticket", `Permit: ${skip.permit} · Ticket: ${skip.ticket}`],
                  ["Contents", skip.contents],
                  ["Load / Flag", `${skip.load} · ${skip.flag}`],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-black/25 p-3">
                    <p className="text-slate-400">{label}</p>
                    <p className="mt-1 font-bold">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Link href="/install-skips-demo/skip-ticket" className="rounded-2xl bg-emerald-400 px-4 py-3 text-sm font-black text-black hover:bg-emerald-300">
                  Open Digital Skip Ticket
                </Link>
                <Link href="/install-skips-demo/drivers" className="rounded-2xl border border-white/15 px-4 py-3 text-sm font-bold text-white hover:bg-white/10">
                  Send to Driver Phone
                </Link>
                <Link href="/install-skips-demo/customer-ticket" className="rounded-2xl border border-white/15 px-4 py-3 text-sm font-bold text-white hover:bg-white/10">
                  Contents Form
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

