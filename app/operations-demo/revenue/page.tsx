import Link from "next/link";

const invoices = [
  ["INV-1048", "John Davies", "£294", "Paid"],
  ["INV-1049", "BuildCo Wales", "£480", "Paid"],
  ["INV-1050", "R Morgan", "£245", "Unpaid"],
];

export default function Page(){
  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <Link href="/install-skips-demo" className="font-bold text-orange-400">← Back to Dashboard</Link>
      <h1 className="mt-6 text-4xl font-black">Revenue</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {[["Today","£4,820"],["Paid","£3,940"],["Outstanding","£880"],["Invoices","18"]].map(([a,b]) => (
          <div key={a} className="rounded-3xl bg-white/[0.04] p-5">
            <p className="text-slate-400">{a}</p>
            <p className="mt-2 text-3xl font-black">{b}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-3">
        {invoices.map(([id,customer,amount,status]) => (
          <div key={id} className="grid gap-4 rounded-2xl bg-white/[0.04] p-4 md:grid-cols-4">
            <b>{id}</b><span>{customer}</span><span>{amount}</span><span className={status === "Paid" ? "text-emerald-400" : "text-orange-300"}>{status}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
