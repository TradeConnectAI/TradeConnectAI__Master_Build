import DemoSidebar from "@/components/DemoSidebar";

const timeline = [
  { title: "Booking confirmed", time: "08:12", text: "Your appointment was booked and confirmed." },
  { title: "Worker assigned", time: "08:46", text: "Tom Hughes has been assigned to your job." },
  { title: "On the way", time: "09:20", text: "Estimated arrival between 09:45 and 10:10." },
  { title: "Job notes updated", time: "09:32", text: "Likely replacement valve added to the notes." },
];

export default function CustomerDemoPage() {
  return (
    <main className="min-min-min-h-screen bg-slate-950 text-white md:flex">
      <DemoSidebar />

      <section className="flex-1 p-6 md:p-10">
        <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">
          Customer Demo
        </p>

        <h1 className="mt-2 text-4xl font-black md:text-5xl">
          A simple customer update page.
        </h1>

        <p className="mt-3 max-w-3xl leading-8 text-slate-400">
          Customers can see what�s happening without constantly calling or messaging for updates.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-1 md:grid-cols-3">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-6 lg:col-span-2">
            <div className="text-sm text-cyan-200">Current Job</div>
            <h2 className="mt-2 text-3xl font-black">Boiler leak repair</h2>
            <p className="mt-3 text-slate-300">
              Tom Hughes is on the way. Current ETA is 09:45 to 10:10.
            </p>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-2/3 rounded-full bg-cyan-400" />
            </div>

            <div className="mt-3 text-sm text-slate-400">Job progress: On the way</div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <div className="text-sm text-slate-400">Assigned worker</div>
            <h3 className="mt-2 text-2xl font-black">Tom Hughes</h3>
            <p className="mt-2 text-slate-300">Heating engineer</p>
            <p className="mt-4 rounded-2xl bg-slate-950 p-4 text-sm text-slate-300">
              �I�m on my way now. I�ll check the leak first and confirm parts before any work starts.�
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <h2 className="text-xl font-black">Timeline</h2>

          <div className="mt-5 space-y-4">
            {timeline.map((item) => (
              <div key={`${item.title}-${item.time}`} className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                <div className="flex justify-between gap-4">
                  <div>
                    <div className="font-bold">{item.title}</div>
                    <div className="text-sm text-slate-400">{item.text}</div>
                  </div>
                  <div className="text-sm text-cyan-300">{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


