const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = process.cwd();
const stamp = new Date().toISOString().replace(/[:.]/g, "-");

function backup(file) {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, `${file}.backup-${stamp}`);
    console.log("Backup:", path.relative(root, file));
  }
}

function write(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  backup(file);
  fs.writeFileSync(file, content, "utf8");
  console.log("Written:", path.relative(root, file));
}

write(
  path.join(root, "app", "install-skips-demo", "page.tsx"),
`const stats = [
  ["Revenue", "£4,820", "+18% today", "£", "from-emerald-400 to-lime-300"],
  ["Jobs", "21", "6 live now", "J", "from-blue-400 to-cyan-300"],
  ["Skips Out", "38", "12 due back", "S", "from-yellow-300 to-orange-300"],
  ["Drivers", "6", "4 on road", "D", "from-purple-400 to-pink-300"],
  ["Collections", "14", "8 complete", "C", "from-teal-300 to-emerald-300"],
  ["Invoices", "18", "£3,410 paid", "I", "from-orange-300 to-red-300"],
];

const liveJobs = [
  {
    ref: "SK-1048",
    customer: "Morgan Evans",
    type: "8 Yard General Waste",
    status: "Driver assigned",
    driver: "Dean Horgan",
    time: "10:30",
    colour: "bg-emerald-400/15 text-emerald-300",
  },
  {
    ref: "SK-1049",
    customer: "Vale Roofing",
    type: "Hardcore Skip",
    status: "Permit check",
    driver: "Pending",
    time: "11:15",
    colour: "bg-yellow-400/15 text-yellow-300",
  },
  {
    ref: "SK-1050",
    customer: "Barry Builders",
    type: "Grab Hire",
    status: "Payment taken",
    driver: "Rhys P",
    time: "12:00",
    colour: "bg-blue-400/15 text-blue-300",
  },
];

const driverTasks = [
  ["Dean Horgan", "SK-1048", "On route", "Driving 2h 10m", "bg-emerald-400/15 text-emerald-300"],
  ["Rhys P", "SK-1050", "Loading", "Break due 13:00", "bg-blue-400/15 text-blue-300"],
  ["Carl M", "SK-1039", "Collection", "Driving 1h 25m", "bg-purple-400/15 text-purple-300"],
];

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-yellow-300 via-lime-300 to-emerald-500 shadow-lg shadow-emerald-500/20">
        <div className="absolute inset-1 rounded-xl border border-slate-950/20" />
        <span className="text-2xl font-black text-slate-950">IS</span>
      </div>

      <div>
        <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-300">
          Install
        </p>
        <p className="-mt-1 text-xl font-black tracking-tight text-white">
          Integrated Skips
        </p>
      </div>
    </div>
  );
}

export default function InstallSkipsDemoPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-5 sm:px-6 lg:px-8">
        <header className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/30">
          <div className="h-2 bg-gradient-to-r from-yellow-300 via-lime-300 to-emerald-500" />

          <div className="p-5">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-4">
                <LogoMark />

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-300">
                    Live branded demo dashboard
                  </p>
                  <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                    Live Skip Dispatch Map
                  </h1>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                    AI-powered skip booking, permits, driver allocation, payments,
                    collections and customer updates in one mobile-friendly dashboard.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:flex">
                <a
                  href="/book-skip"
                  className="rounded-2xl bg-gradient-to-r from-yellow-300 to-emerald-400 px-4 py-3 text-center text-sm font-black text-slate-950 shadow-lg shadow-emerald-400/20"
                >
                  Book Skip
                </a>
                <a
                  href="/operations-demo"
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-center text-sm font-bold text-white"
                >
                  Operations
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {stats.map(([label, value, note, icon, gradient]) => (
            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-slate-900/90 p-4 shadow-xl shadow-black/20"
            >
              <div className={\`grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br \${gradient} text-sm font-black text-slate-950\`}>
                {icon}
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                {label}
              </p>
              <p className="mt-2 text-2xl font-black">{value}</p>
              <p className="mt-1 text-xs font-bold text-emerald-300">{note}</p>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 gap-5 lg:grid-cols-[1.45fr_0.85fr]">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/30">
            <div className="flex flex-col gap-2 border-b border-white/10 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-black">Barry Dispatch Live</h2>
                <p className="text-sm text-slate-400">
                  6 lorries active · 38 skips out · 14 collections
                </p>
              </div>
              <span className="w-fit rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300">
                Satellite demo
              </span>
            </div>

            <div className="relative min-h-[420px] overflow-hidden bg-[radial-gradient(circle_at_35%_45%,rgba(34,197,94,0.34),transparent_28%),radial-gradient(circle_at_70%_62%,rgba(37,99,235,0.55),transparent_32%),linear-gradient(135deg,#07111f,#020617)]">
              <div className="absolute left-[12%] top-[20%] rounded-full bg-yellow-300 px-3 py-2 text-xs font-black text-slate-950 shadow-xl">
                SK08
              </div>
              <div className="absolute left-[58%] top-[42%] rounded-full bg-cyan-300 px-3 py-2 text-xs font-black text-slate-950 shadow-xl">
                GH02
              </div>
              <div className="absolute left-[72%] top-[28%] rounded-full bg-orange-300 px-3 py-2 text-xs font-black text-slate-950 shadow-xl">
                Skip 18
              </div>
              <div className="absolute left-[30%] top-[70%] rounded-full bg-emerald-300 px-3 py-2 text-xs font-black text-slate-950 shadow-xl">
                Pickup
              </div>
              <div className="absolute left-[76%] top-[15%] rounded-full bg-purple-300 px-3 py-2 text-xs font-black text-slate-950 shadow-xl">
                Permit
              </div>

              <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/10 bg-black/50 p-4 backdrop-blur">
                <p className="text-sm font-black text-yellow-300">AI dispatch note</p>
                <p className="mt-1 text-sm text-slate-300">
                  Customer needs an 8 yard general waste skip. AI checked
                  availability, flagged permit required, assigned Dean, and sent
                  payment link.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            <div className="rounded-3xl border border-white/10 bg-slate-900 p-4">
              <h2 className="text-lg font-black">Jobs sent to drivers</h2>
              <div className="mt-4 space-y-3">
                {driverTasks.map(([driver, job, status, taco, colour]) => (
                  <div
                    key={driver}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-black">{driver}</p>
                        <p className="text-sm text-slate-400">{job}</p>
                      </div>
                      <span className={\`rounded-full px-3 py-1 text-xs font-bold \${colour}\`}>
                        {status}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-slate-400">TACO: {taco}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900 p-4">
              <h2 className="text-lg font-black">AI Webchat</h2>
              <div className="mt-4 space-y-3 text-sm">
                <p className="rounded-2xl bg-white/10 p-3">
                  Customer: Need a skip in Barry tomorrow.
                </p>
                <p className="rounded-2xl bg-emerald-400/15 p-3 text-emerald-100">
                  AI: I can help. What waste type and skip size do you need?
                </p>
                <p className="rounded-2xl bg-white/10 p-3">
                  Customer: General waste, probably 8 yard.
                </p>
                <p className="rounded-2xl bg-emerald-400/15 p-3 text-emerald-100">
                  AI: Available tomorrow 10:30. Permit may be needed. I can send
                  payment link now.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-900 p-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-black">Live jobs</h2>
              <p className="text-sm text-slate-400">
                Tap-friendly mobile cards instead of broken desktop tables.
              </p>
            </div>
            <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-300">
              Updated now
            </span>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-3">
            {liveJobs.map((job) => (
              <article
                key={job.ref}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                      {job.ref}
                    </p>
                    <h3 className="mt-1 text-lg font-black">{job.customer}</h3>
                  </div>
                  <span className={\`rounded-full px-3 py-1 text-xs font-bold \${job.colour}\`}>
                    {job.time}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-300">{job.type}</p>
                <div className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                  <p className="rounded-2xl bg-black/25 p-3">
                    <span className="block text-xs text-slate-500">Status</span>
                    {job.status}
                  </p>
                  <p className="rounded-2xl bg-black/25 p-3">
                    <span className="block text-xs text-slate-500">Driver</span>
                    {job.driver}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
`
);

write(
  path.join(root, "app", "skips-demo", "page.tsx"),
`export { default } from "../install-skips-demo/page";
`
);

fs.rmSync(path.join(root, ".next"), { recursive: true, force: true });

console.log("Running build...");
execSync("npm run build", { stdio: "inherit" });

console.log("Build passed.");

try {
  execSync("git add .", { stdio: "inherit" });
  execSync('git commit -m "Restore install skips branding colours"', { stdio: "inherit" });
  execSync("git push", { stdio: "inherit" });
  console.log("Pushed to GitHub.");
} catch {
  console.log("Nothing to commit or git failed. Showing status:");
  execSync("git status", { stdio: "inherit" });
}

console.log("DONE. Test /install-skips-demo?v=brandfix");
