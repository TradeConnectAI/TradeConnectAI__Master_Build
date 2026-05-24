import { CompleteOptionsShell, DemoCard, StatusPill } from "@/components/complete-options-beta/CompleteOptionsShell";
import { calendarItems } from "@/lib/completeOptionsData";

export default function CalendarPage() {
  return (
    <CompleteOptionsShell
      title="Calendar"
      subtitle="A clean diary view showing where the day is going, what AI booked, and what needs attention."
    >
      <DemoCard>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-black">Today’s schedule</h3>
            <p className="mt-1 text-sm text-slate-400">Demo appointments created from calls, webchat and admin tasks.</p>
          </div>
          <StatusPill>4 appointments</StatusPill>
        </div>

        <div className="mt-5 grid gap-3">
          {calendarItems.map((item) => (
            <div key={`${item.time}-${item.title}`} className="grid gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 md:grid-cols-[90px_1fr_180px] md:items-center">
              <p className="text-xl font-black text-cyan-200">{item.time}</p>
              <div>
                <p className="font-black">{item.title}</p>
                <p className="mt-1 text-sm text-slate-400">{item.customer}</p>
              </div>
              <p className="text-sm font-bold text-slate-300">{item.location}</p>
            </div>
          ))}
        </div>
      </DemoCard>
    </CompleteOptionsShell>
  );
}
