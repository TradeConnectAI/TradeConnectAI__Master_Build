import { CompleteOptionsShell, DemoCard, StatusPill } from "@/components/complete-options-beta/CompleteOptionsShell";
import { customers } from "@/lib/completeOptionsData";

export default function CustomersPage() {
  return (
    <CompleteOptionsShell
      title="Customer CRM"
      subtitle="A simple customer view showing who needs chasing, who is hot, and where the money is hiding."
    >
      <section className="grid gap-4 md:grid-cols-2">
        {customers.map((customer) => (
          <DemoCard key={customer.email}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-black">{customer.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{customer.email}</p>
                <p className="text-sm text-slate-400">{customer.phone}</p>
              </div>
              <StatusPill>{customer.tag}</StatusPill>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-sm text-slate-400">Last contact</p>
              <p className="mt-1 font-bold">{customer.lastContact}</p>
            </div>

            <div className="mt-3 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
              <p className="text-sm text-cyan-100">Pipeline value</p>
              <p className="mt-1 text-3xl font-black text-white">{customer.value}</p>
            </div>
          </DemoCard>
        ))}
      </section>
    </CompleteOptionsShell>
  );
}
