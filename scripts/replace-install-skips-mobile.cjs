const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = process.cwd();
const stamp = new Date().toISOString().replace(/[:.]/g, "-");

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function backup(file) {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, `${file}.backup-${stamp}`);
    console.log("Backup:", path.relative(root, file));
  }
}

function write(file, content) {
  ensureDir(path.dirname(file));
  backup(file);
  fs.writeFileSync(file, content, "utf8");
  console.log("Written:", path.relative(root, file));
}

console.log("?? Replacing broken mobile demo pages...");

// 1. Replace broken install skips demo with proper mobile-first page
write(
  path.join(root, "app", "install-skips-demo", "page.tsx"),
`const stats = [
  ["Revenue", "£4,820", "+18% today"],
  ["Jobs", "21", "6 live now"],
  ["Skips Out", "38", "12 due back"],
  ["Drivers", "6", "4 on road"],
  ["Collections", "14", "8 complete"],
  ["Invoices", "18", "£3,410 paid"],
];

const liveJobs = [
  {
    ref: "SK-1048",
    customer: "Morgan Evans",
    type: "8 Yard General Waste",
    status: "Driver assigned",
    driver: "Dean Horgan",
    time: "10:30",
  },
  {
    ref: "SK-1049",
    customer: "Vale Roofing",
    type: "Hardcore Skip",
    status: "Permit check",
    driver: "Pending",
    time: "11:15",
  },
  {
    ref: "SK-1050",
    customer: "Barry Builders",
    type: "Grab Hire",
    status: "Payment taken",
    driver: "Rhys P",
    time: "12:00",
  },
];

const driverTasks = [
  ["Dean Horgan", "SK-1048", "On route", "Driving 2h 10m"],
  ["Rhys P", "SK-1050", "Loading", "Break due 13:00"],
  ["Carl M", "SK-1039", "Collection", "Driving 1h 25m"],
];

export default function InstallSkipsDemoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-5 sm:px-6 lg:px-8">
        <header className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-300">
                Install Integrated Skips Demo
              </p>
              <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                Live Skip Dispatch Map
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                Mobile-ready AI operations dashboard showing skip bookings, permits,
                driver allocation, collections, payments and customer updates.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:flex">
              <a
                href="/book-skip"
                className="rounded-2xl bg-emerald-400 px-4 py-3 text-center text-sm font-black text-slate-950 shadow-lg shadow-emerald-400/20"
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
        </header>

        <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {stats.map(([label, value, note]) => (
            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-slate-900/80 p-4"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                {label}
              </p>
              <p className="mt-2 text-2xl font-black">{value}</p>
              <p className="mt-1 text-xs text-emerald-300">{note}</p>
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

              <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/10 bg-black/40 p-4 backdrop-blur">
                <p className="text-sm font-black">AI dispatch note</p>
                <p className="mt-1 text-sm text-slate-300">
                  Customer needs an 8 yard general waste skip. AI checked availability,
                  flagged permit required, assigned Dean, and sent payment link.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            <div className="rounded-3xl border border-white/10 bg-slate-900 p-4">
              <h2 className="text-lg font-black">Jobs sent to drivers</h2>
              <div className="mt-4 space-y-3">
                {driverTasks.map(([driver, job, status, taco]) => (
                  <div
                    key={driver}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-black">{driver}</p>
                        <p className="text-sm text-slate-400">{job}</p>
                      </div>
                      <span className="rounded-full bg-blue-400/15 px-3 py-1 text-xs font-bold text-blue-300">
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
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300">
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

// 2. Replace bad UTF-8 appointments page with clean valid TSX
write(
  path.join(root, "app", "customer-demo", "appointments", "page.tsx"),
`const appointments = [
  ["Today", "10:30", "Skip delivery", "8 Yard General Waste", "Confirmed"],
  ["Today", "14:00", "Collection", "Hardcore skip", "Driver assigned"],
  ["Tomorrow", "09:15", "Grab hire", "Aggregates delivery", "Awaiting payment"],
];

export default function CustomerAppointmentsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto w-full max-w-5xl px-4 py-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">
            Customer Portal
          </p>
          <h1 className="mt-3 text-3xl font-black">Appointments</h1>
          <p className="mt-2 text-sm text-slate-400">
            Your upcoming deliveries, collections and site visits.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3">
          {appointments.map(([day, time, title, detail, status]) => (
            <article
              key={day + time + title}
              className="rounded-3xl border border-white/10 bg-slate-900 p-4"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-bold text-emerald-300">
                    {day} · {time}
                  </p>
                  <h2 className="mt-1 text-xl font-black">{title}</h2>
                  <p className="mt-1 text-sm text-slate-400">{detail}</p>
                </div>
                <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-200">
                  {status}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href="/customer-demo"
            className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-center text-sm font-bold"
          >
            Back to portal
          </a>
          <a
            href="/book-skip"
            className="rounded-2xl bg-emerald-400 px-4 py-3 text-center text-sm font-black text-slate-950"
          >
            Book another job
          </a>
        </div>
      </section>
    </main>
  );
}
`
);

// 3. Add friendly redirect route if people open /skips-demo
write(
  path.join(root, "app", "skips-demo", "page.tsx"),
`export { default } from "../install-skips-demo/page";
`
);

// 4. Ensure globals stays sane
write(
  path.join(root, "app", "globals.css"),
`@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
}

html,
body {
  margin: 0;
  min-height: 100%;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  background: #020617;
  color: white;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

img,
video,
iframe,
canvas,
svg {
  max-width: 100%;
  height: auto;
}

main,
section,
article,
aside,
header,
footer,
nav,
div {
  min-width: 0;
}

input,
select,
textarea,
button {
  font-size: 16px;
}

table,
pre,
code {
  max-width: 100%;
  overflow-x: auto;
}

@media (max-width: 768px) {
  main {
    width: 100%;
    max-width: 100%;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .w-screen,
  .min-w-full {
    width: 100%;
    min-width: 0;
  }

  nav {
    overflow-x: auto;
  }
}
`
);

// 5. Clear build cache
fs.rmSync(path.join(root, ".next"), { recursive: true, force: true });

console.log("?? Running build...");
execSync("npm run build", { stdio: "inherit" });

console.log("? Build passed");

console.log("?? Committing and pushing...");
try {
  execSync("git add .", { stdio: "inherit" });
  execSync('git commit -m "Replace install skips demo with mobile-first dashboard"', { stdio: "inherit" });
  execSync("git push", { stdio: "inherit" });
  console.log("?? Pushed to GitHub");
} catch (err) {
  console.log("Git had nothing to commit or push failed. Showing status:");
  execSync("git status", { stdio: "inherit" });
}

console.log("?? Done. Wait for Vercel deploy, then test /install-skips-demo on your phone.");
