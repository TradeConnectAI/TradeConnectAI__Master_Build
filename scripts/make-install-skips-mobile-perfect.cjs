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
`const sidebar = [
  "Dashboard",
  "Jobs",
  "Collections",
  "Drivers",
  "Driver Phone",
  "Payments",
  "Permits",
  "Skips",
  "Live Map",
  "AI Handover",
  "Reports",
  "Customers",
  "Settings",
];

const stats = [
  ["Revenue", "£1,515", "Today"],
  ["Paid", "£645", "Today"],
  ["Unpaid", "£870", "Outstanding"],
  ["Jobs", "5", "Today"],
  ["Driver Sends", "2", "Today"],
  ["Permits", "4", "Active"],
  ["Collections", "2", "Due today"],
  ["Exchanges", "1", "Today"],
  ["Skips Out", "16", "On hire"],
  ["Completed", "0", "Today"],
];

const tabs = [
  "Jobs",
  "Collections",
  "Drivers",
  "Driver Phone",
  "Payments",
  "Permits",
  "Skips",
  "Live Map",
  "AI Handover",
];

const payments = [
  ["BB", "Barry Builders Ltd", "INV-1025", "Paid", "£275.00", "Today"],
  ["CJ", "Claire Jenkins", "INV-1024", "Paid", "£165.00", "Today"],
  ["RM", "Rhys Morgan", "INV-1023", "Unpaid", "£360.00", "Due 23 May"],
];

const jobs = [
  ["SK-1048", "Morgan Evans", "8 yard general waste", "Dean Horgan", "10:30", "Driver sent"],
  ["SK-1049", "Vale Roofing", "Hardcore skip", "Pending", "11:15", "Permit check"],
  ["SK-1050", "Barry Builders", "Grab hire", "Rhys P", "12:00", "Payment taken"],
];

const liveOps = [
  "SCANIA 340 delivering Barry",
  "2 collections due today",
  "£645 paid today",
  "2 jobs sent to phones",
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-orange-600 text-xl font-black text-black">
        C
      </div>
      <div className="min-w-0 leading-none">
        <p className="truncate text-2xl font-black tracking-tight text-white">
          INSTALL
        </p>
        <p className="mt-1 truncate text-xs font-black uppercase tracking-[0.18em] text-orange-500">
          Integrated Skips
        </p>
      </div>
    </div>
  );
}

export default function InstallSkipsDemoPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <div className="mx-auto w-full max-w-[1600px] lg:grid lg:min-h-screen lg:grid-cols-[260px_1fr]">
        <aside className="border-b border-white/10 bg-[#060708] lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r lg:border-white/10">
          <div className="flex flex-col gap-4 p-4 lg:h-full lg:justify-between">
            <div>
              <Logo />

              <nav className="mt-5 flex gap-2 overflow-x-auto pb-2 lg:mt-8 lg:flex-col lg:overflow-visible lg:pb-0">
                {sidebar.map((item, index) => (
                  <a
                    key={item}
                    href="#"
                    className={
                      index === 0
                        ? "shrink-0 whitespace-nowrap rounded-xl bg-orange-600 px-4 py-3 text-sm font-black text-white"
                        : "shrink-0 whitespace-nowrap rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 hover:bg-white/10"
                    }
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            <div className="hidden space-y-4 lg:block">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="font-black">AI Assistant</p>
                <p className="mt-1 text-sm text-slate-300">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-400" />
                  Online
                </p>
                <button className="mt-4 w-full rounded-xl bg-black px-4 py-3 text-sm font-black text-orange-500">
                  Open Chat
                </button>
              </div>

              <div className="rounded-2xl bg-white/[0.03] p-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-orange-600 text-sm font-black">
                    SN
                  </div>
                  <div>
                    <p className="font-bold">Steven Neilson</p>
                    <p className="text-sm text-slate-400">Admin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <section className="min-w-0 px-3 py-4 sm:px-5 lg:px-8">
          <header className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <h1 className="text-2xl font-black tracking-tight sm:text-4xl">
                Operations Control Room
              </h1>
              <p className="mt-2 text-sm text-slate-300 sm:text-base">
                AI booking, permits, payments and driver dispatch.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:flex">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-center text-xs font-bold sm:text-sm">
                22 May 2025
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-center text-xs font-bold sm:text-sm">
                08:20
              </div>
              <button className="col-span-2 rounded-xl bg-orange-600 px-5 py-3 text-sm font-black text-white sm:col-span-1">
                + New Job
              </button>
            </div>
          </header>

          <section className="mt-5 overflow-hidden rounded-3xl border border-white/10 bg-slate-950">
            <div className="relative min-h-[360px] bg-[radial-gradient(circle_at_80%_30%,rgba(249,115,22,0.48),transparent_28%),linear-gradient(90deg,rgba(0,0,0,0.96),rgba(0,0,0,0.68)),linear-gradient(135deg,#1f2937,#020617)] p-5 sm:p-8">
              <div className="absolute right-6 top-8 hidden rounded-3xl border border-orange-500/20 bg-orange-600/20 px-10 py-8 text-7xl font-black text-orange-500/50 xl:block">
                INSTALL
              </div>

              <div className="relative z-10 max-w-3xl">
                <h2 className="text-3xl font-black leading-tight sm:text-5xl">
                  Skip hire control room with{" "}
                  <span className="text-orange-500">
                    AI booking, permits, payments and driver dispatch.
                  </span>
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-200 sm:text-base">
                  A private demo for Install Integrated Skips. AI answers enquiries,
                  checks availability, organises permits, assigns drivers, sends tasks
                  to phones, takes payments and hands complex work to a real person.
                </p>

                <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
                  {["Book Skip ??", "Driver Board", "Collections", "Live Map", "£ Revenue"].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="shrink-0 rounded-full border border-orange-500/70 bg-black/45 px-4 py-2 text-sm font-black text-orange-400"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
            {stats.map(([label, value, note]) => (
              <div
                key={label}
                className="rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 p-4 text-black shadow-xl shadow-orange-950/30"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.14em] sm:text-xs">
                  {label}
                </p>
                <p className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  {value}
                </p>
                <p className="mt-1 text-xs font-medium text-orange-100 sm:text-sm">
                  {note}
                </p>
              </div>
            ))}
          </section>

          <section className="mt-5 rounded-2xl border border-orange-500/20 bg-white/[0.02] p-4">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-orange-500 sm:text-sm">
              Live Operations
            </p>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {liveOps.map((text) => (
                <div key={text} className="rounded-xl bg-black/40 p-3 text-sm font-semibold">
                  <span className="mr-2 inline-block h-3 w-3 rounded-full bg-orange-500" />
                  {text}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-4 flex gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02] p-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={
                  tab === "Payments"
                    ? "shrink-0 whitespace-nowrap rounded-xl bg-orange-600 px-4 py-3 text-sm font-black text-white"
                    : "shrink-0 whitespace-nowrap rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-bold text-white"
                }
              >
                {tab}
              </button>
            ))}
          </section>

          <section className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-black sm:text-2xl">Payments</h2>
                <a href="#" className="text-sm font-black text-orange-500">
                  View all
                </a>
              </div>

              <div className="mt-5 space-y-3">
                {payments.map(([initials, name, invoice, status, amount, due]) => (
                  <div
                    key={invoice}
                    className="flex items-center justify-between gap-3 rounded-2xl bg-black/35 p-3 sm:p-4"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-orange-600 text-sm font-black text-white">
                        {initials}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate font-black">{name}</p>
                        <p className="text-xs text-slate-400 sm:text-sm">
                          {invoice} ·{" "}
                          <span className={status === "Paid" ? "text-green-400" : "text-red-400"}>
                            {status}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="font-black">{amount}</p>
                      <p className="text-xs text-slate-400 sm:text-sm">{due}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <div className="flex items-center justify-between p-4 sm:p-5">
                <h2 className="text-xl font-black sm:text-2xl">Live Map</h2>
                <a href="#" className="text-sm font-black text-orange-500">
                  View full map
                </a>
              </div>

              <div className="relative min-h-[280px] bg-[radial-gradient(circle_at_22%_72%,rgba(34,197,94,0.5),transparent_10%),radial-gradient(circle_at_45%_37%,rgba(249,115,22,0.75),transparent_8%),radial-gradient(circle_at_60%_35%,rgba(249,115,22,0.75),transparent_8%),radial-gradient(circle_at_82%_36%,rgba(14,165,233,0.35),transparent_22%),linear-gradient(135deg,#164e63,#052e16_42%,#0f172a)]">
                <div className="absolute left-[16%] top-[68%] rounded-full bg-green-500 px-3 py-2 text-xs font-black">
                  Barry
                </div>
                <div className="absolute left-[40%] top-[32%] rounded-full bg-orange-600 px-3 py-2 text-xs font-black">
                  Phone
                </div>
                <div className="absolute left-[56%] top-[36%] rounded-full bg-orange-600 px-3 py-2 text-xs font-black">
                  Dinas
                </div>
                <div className="absolute right-4 top-4 grid gap-2">
                  <button className="rounded-lg bg-black/70 px-3 py-2 font-black">+</button>
                  <button className="rounded-lg bg-black/70 px-3 py-2 font-black">-</button>
                  <button className="rounded-lg bg-black/70 px-3 py-2 font-black">?</button>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-5 rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
            <h2 className="text-xl font-black sm:text-2xl">Today’s Jobs</h2>
            <div className="mt-4 grid grid-cols-1 gap-3 xl:grid-cols-3">
              {jobs.map(([ref, customer, type, driver, time, status]) => (
                <article key={ref} className="rounded-2xl bg-black/35 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-orange-500">
                        {ref}
                      </p>
                      <h3 className="mt-1 truncate text-lg font-black">{customer}</h3>
                    </div>
                    <span className="shrink-0 rounded-full bg-orange-500/15 px-3 py-1 text-xs font-black text-orange-300">
                      {time}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-300">{type}</p>
                  <div className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                    <p className="rounded-xl bg-white/[0.04] p-3">
                      <span className="block text-xs text-slate-500">Driver</span>
                      {driver}
                    </p>
                    <p className="rounded-xl bg-white/[0.04] p-3">
                      <span className="block text-xs text-slate-500">Status</span>
                      {status}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>
      </div>
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

write(
  path.join(root, "app", "globals.css"),
`@import "tailwindcss";

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
  background: #000;
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

a,
button {
  touch-action: manipulation;
}

@media (max-width: 768px) {
  html,
  body {
    overflow-x: hidden;
  }

  main {
    width: 100%;
    max-width: 100%;
  }

  .w-screen,
  .min-w-full {
    width: 100%;
    min-width: 0;
  }
}
`
);

fs.rmSync(path.join(root, ".next"), { recursive: true, force: true });

console.log("Running build...");
execSync("npm run build", { stdio: "inherit" });

console.log("Build passed.");

try {
  execSync("git add .", { stdio: "inherit" });
  execSync('git commit -m "Make install skips demo mobile perfect"', { stdio: "inherit" });
  execSync("git push", { stdio: "inherit" });
  console.log("Pushed to GitHub.");
} catch {
  console.log("Nothing to commit or git failed. Showing status:");
  execSync("git status", { stdio: "inherit" });
}

console.log("DONE. Clean demo URL remains https://www.tradeconnectai.co.uk/install-skips-demo");
