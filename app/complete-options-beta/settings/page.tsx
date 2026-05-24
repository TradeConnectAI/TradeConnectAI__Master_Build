import { CompleteOptionsShell, DemoCard, StatusPill } from "@/components/complete-options-beta/CompleteOptionsShell";

export default function SettingsPage() {
  return (
    <CompleteOptionsShell
      title="Demo settings"
      subtitle="A polished settings page so the beta feels like a real product, even before the backend is fully wired."
    >
      <section className="grid gap-4 lg:grid-cols-2">
        <DemoCard>
          <StatusPill>Business profile</StatusPill>
          <h3 className="mt-4 text-2xl font-black">Complete Options</h3>
          <div className="mt-5 grid gap-3">
            {[
              ["Business type", "Home improvements, building and refurbishments"],
              ["Service area", "Plymouth, Saltash, Ivybridge and surrounding areas"],
              ["AI tone", "Friendly, professional, practical"],
              ["Escalation rule", "Urgent leaks and high-value work go to a real person"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">{label}</p>
                <p className="mt-2 font-bold">{value}</p>
              </div>
            ))}
          </div>
        </DemoCard>

        <DemoCard>
          <StatusPill>AI rules</StatusPill>
          <h3 className="mt-4 text-2xl font-black">Automation controls</h3>
          <div className="mt-5 grid gap-3">
            {[
              "Answer missed calls after 3 rings",
              "Send SMS confirmation after every booking",
              "Create draft quote when budget and photos are available",
              "Flag urgent jobs for human callback",
              "Chase open quotes after 48 hours"
            ].map((rule) => (
              <div key={rule} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-300 text-xs font-black text-slate-950">✓</span>
                <p className="text-sm font-bold text-slate-200">{rule}</p>
              </div>
            ))}
          </div>
        </DemoCard>
      </section>
    </CompleteOptionsShell>
  );
}
