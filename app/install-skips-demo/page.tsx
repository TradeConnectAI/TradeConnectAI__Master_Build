"use client";

import Link from "next/link";
import { useState } from "react";

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

const nav = [
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

export default function InstallSkipsDemo() {
  const [active, setActive] = useState("Dashboard");

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="flex">
        <aside className="fixed left-0 top-0 z-20 hidden h-screen w-72 border-r border-white/10 bg-[#080b0f] p-5 lg:block">
          <div className="mb-8 flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-orange-500 text-2xl font-black">
              I
            </div>
            <div>
              <h1 className="text-2xl font-black leading-none">INSTALL</h1>
              <p className="text-xs font-black text-orange-500">INTEGRATED SKIPS</p>
            </div>
          </div>

          <nav className="space-y-2">
            {nav.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`w-full rounded-xl px-4 py-3 text-left font-bold transition ${
                  active === item
                    ? "bg-orange-600 text-white"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="absolute bottom-6 left-5 right-5 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="font-bold">AI Assistant</p>
              <p className="text-sm text-lime-400">Online</p>
              <button className="mt-4 w-full rounded-xl bg-black px-4 py-3 font-bold text-orange-500">
                Open Chat
              </button>
            </div>

            <div className="rounded-2xl bg-black p-4">
              <p className="font-bold">Dean Horgan</p>
              <p className="text-sm text-slate-400">Operations Manager</p>
            </div>
          </div>
        </aside>

        <section className="w-full lg:ml-72">
          <header className="sticky top-0 z-10 border-b border-white/10 bg-[#050505]/90 px-6 py-5 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
              <div>
                <h2 className="text-3xl font-black">Operations Control Room</h2>
                <p className="text-slate-300">
                  AI booking, permits, payments and driver dispatch.
                </p>
              </div>

              <div className="hidden items-center gap-3 md:flex">
                <div className="rounded-xl border border-white/10 px-4 py-3">22 May 2025</div>
                <div className="rounded-xl border border-white/10 px-4 py-3">08:20</div>
                <Link
                  href="/book-skip"
                  className="rounded-xl bg-orange-600 px-5 py-3 font-black text-white"
                >
                  + New Job
                </Link>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-7xl space-y-6 px-6 py-6">
            <section className="overflow-hidden rounded-3xl border border-orange-500/20 bg-black">
              <div className="relative min-h-[360px] bg-gradient-to-br from-black via-zinc-900 to-orange-950">
                <div className="absolute inset-0 opacity-20">
                  <div className="h-full w-full bg-[radial-gradient(circle_at_70%_30%,#ff6a00_0,transparent_35%),linear-gradient(135deg,transparent_0_48%,#ff6a00_49%,transparent_50%)]" />
                </div>

                <div className="relative max-w-3xl p-8 md:p-10">
                  <h1 className="text-4xl font-black leading-tight md:text-6xl">
                    Skip hire control room with{" "}
                    <span className="text-orange-500">
                      AI booking, permits, payments and driver dispatch.
                    </span>
                  </h1>

                  <p className="mt-5 text-sm leading-7 text-slate-100 md:text-base">
                    A clickable private demo for Install Integrated Skips. AI answers enquiries,
                    checks availability, organises permits, assigns drivers, sends tasks to phones,
                    tracks TACO-style driver hours and hands complex work to a real person.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href="/book-skip" className="rounded-full border border-orange-500 px-5 py-3 font-black text-orange-500">
                      Book Skip
                    </Link>
                    <button onClick={() => setActive("Drivers")} className="rounded-full border border-orange-500 px-5 py-3 font-black text-orange-500">
                      Driver Board
                    </button>
                    <button onClick={() => setActive("Collections")} className="rounded-full border border-orange-500 px-5 py-3 font-black text-orange-500">
                      Collections
                    </button>
                    <button onClick={() => setActive("Live Map")} className="rounded-full border border-orange-500 px-5 py-3 font-black text-orange-500">
                      Live Map
                    </button>
                    <button onClick={() => setActive("Payments")} className="rounded-full border border-orange-500 px-5 py-3 font-black text-orange-500">
                      Revenue
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {stats.map(([label, value, sub]) => (
                <div key={label} className="rounded-2xl bg-orange-600 p-5 text-black">
                  <p className="text-xs font-black uppercase">{label}</p>
                  <p className="mt-2 text-3xl font-black">{value}</p>
                  <p className="text-sm font-semibold">{sub}</p>
                </div>
              ))}
            </section>

            <section className="rounded-2xl border border-orange-500/20 bg-white/[0.03] p-5">
              <h3 className="font-black text-orange-500">LIVE OPERATIONS</h3>
              <div className="mt-4 grid gap-3 md:grid-cols-4">
                <Live text="SCANIA 340 delivering Barry" />
                <Live text="2 collections due today" />
                <Live text="£645 paid today" />
                <Live text="2 jobs sent to phones" />
              </div>
            </section>

            <section className="grid gap-6 xl:grid-cols-2">
              <Panel title={active}>
                {active === "Dashboard" && <Dashboard />}
                {active === "Jobs" && <Jobs />}
                {active === "Collections" && <Collections />}
                {active === "Drivers" && <Drivers />}
                {active === "Driver Phone" && <DriverPhone />}
                {active === "Payments" && <Payments />}
                {active === "Permits" && <Permits />}
                {active === "Skips" && <Skips />}
                {active === "Live Map" && <LiveMap />}
                {active === "AI Handover" && <AIHandover />}
                {active === "Reports" && <Reports />}
                {active === "Customers" && <Customers />}
                {active === "Settings" && <Settings />}
              </Panel>

              <Panel title="Live Map">
                <LiveMap />
              </Panel>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <h3 className="mb-4 text-2xl font-black">{title}</h3>
      {children}
    </div>
  );
}

function Live({ text }: { text: string }) {
  return <div className="rounded-xl bg-black px-4 py-3 text-sm font-bold">{text}</div>;
}

function Row({ name, detail, amount }: { name: string; detail: string; amount?: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 py-4">
      <div>
        <p className="font-black text-orange-400">{name}</p>
        <p className="text-sm text-slate-300">{detail}</p>
      </div>
      {amount && <p className="font-black">{amount}</p>}
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <Row name="Barry Builders Ltd" detail="8 yard skip delivery | Paid" amount="£275" />
      <Row name="Claire Jenkins" detail="6 yard skip collection | Paid" amount="£165" />
      <Row name="Rhys Morgan" detail="Grab hire request | Unpaid" amount="£360" />
    </div>
  );
}

function Jobs() {
  return (
    <div>
      <Row name="JOB-2048" detail="8 Yard General Waste Skip | Barry | Driver assigned" />
      <Row name="JOB-2049" detail="Hardcore Skip | Penarth | Permit pending" />
      <Row name="JOB-2050" detail="Aggregates Delivery | Cardiff | MOT Type 1" />
    </div>
  );
}

function Collections() {
  return (
    <div>
      <Row name="Barry High Street" detail="8 Yard collection | 11:30 | Driver Mike" />
      <Row name="Penarth Road" detail="Exchange required | 14:00 | Driver Paul" />
      <Row name="Sully Site" detail="Waste removal | 16:15 | Grab lorry" />
    </div>
  );
}

function Drivers() {
  return (
    <div>
      <Row name="Mike J" detail="On road | 3h 52m driving | 37m break left" />
      <Row name="Paul D" detail="Loading yard | Next job Barry" />
      <Row name="Gareth W" detail="Grab hire route | Cardiff then Penarth" />
    </div>
  );
}

function DriverPhone() {
  return (
    <div className="rounded-3xl border border-lime-400/30 bg-lime-400/10 p-5">
      <p className="font-black text-lime-300">NEW DRIVER TASK</p>
      <p className="mt-3">Deliver 8 Yard Skip</p>
      <p>Barry, South Wales</p>
      <p>ETA 08:20</p>
      <p>Break remaining 37 mins</p>
      <p>Sent to driver phone</p>
    </div>
  );
}

function Payments() {
  return (
    <div>
      <Row name="Barry Builders Ltd" detail="INV-1025 | Paid" amount="£275.00" />
      <Row name="Claire Jenkins" detail="INV-1024 | Paid" amount="£165.00" />
      <Row name="Rhys Morgan" detail="INV-1023 | Unpaid" amount="£360.00" />
    </div>
  );
}

function Permits() {
  return (
    <div>
      <Row name="Barry Road Permit" detail="Submitted | Expected approval 24h" />
      <Row name="Penarth Permit" detail="Approved | Valid until Friday" />
      <Row name="Cardiff Access Check" detail="Needs real person review" />
    </div>
  );
}

function Skips() {
  return (
    <div>
      <Row name="4 Yard" detail="6 available | 2 out" />
      <Row name="8 Yard" detail="3 available | 9 out" />
      <Row name="12 Yard" detail="2 available | 5 out" />
    </div>
  );
}

function LiveMap() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#07140d]">
      <div className="relative h-[310px] bg-[radial-gradient(circle_at_20%_70%,#1f7a3a_0_6%,transparent_7%),radial-gradient(circle_at_68%_25%,#1f7a3a_0_5%,transparent_6%),radial-gradient(circle_at_53%_55%,#1e6091_0_7%,transparent_8%),linear-gradient(135deg,#16351f,#07140d_45%,#12324a)]">
        <div className="absolute left-0 top-[72%] h-1 w-full rotate-[-8deg] bg-white/20" />
        <div className="absolute left-[8%] top-[25%] h-1 w-[80%] rotate-[18deg] bg-white/10" />
        <Marker label="Barry" className="left-[22%] top-[68%]" />
        <Marker label="Penarth" className="left-[63%] top-[30%]" />
        <Marker label="Cardiff" className="left-[52%] top-[58%]" />
        <Marker label="Depot" className="left-[40%] top-[40%]" home />
      </div>
    </div>
  );
}

function Marker({
  label,
  className,
  home = false,
}: {
  label: string;
  className: string;
  home?: boolean;
}) {
  return (
    <div className={`absolute ${className}`}>
      <div className={`grid h-10 w-10 place-items-center rounded-full ${home ? "bg-lime-500" : "bg-orange-600"} font-black shadow-xl`}>
        {home ? "D" : "T"}
      </div>
      <p className="mt-1 rounded bg-black/70 px-2 py-1 text-xs font-bold">{label}</p>
    </div>
  );
}

function AIHandover() {
  return (
    <div>
      <Row name="Complex road closure" detail="AI flagged for human review" />
      <Row name="Blocked access" detail="Customer needs call back before driver arrives" />
      <Row name="Permit mismatch" detail="Council area uncertain, handover created" />
    </div>
  );
}

function Reports() {
  return (
    <div>
      <Row name="Daily Revenue" detail="£1,515 today | £645 paid" />
      <Row name="Utilisation" detail="16 skips out | 8 drivers active" />
      <Row name="AI Saves" detail="12 calls handled | 4 messages sent" />
    </div>
  );
}

function Customers() {
  return (
    <div>
      <Row name="Barry Builders Ltd" detail="Trade customer | 4 active jobs" />
      <Row name="Claire Jenkins" detail="Domestic customer | Collection due" />
      <Row name="Rhys Morgan" detail="Grab hire enquiry | Payment pending" />
    </div>
  );
}

function Settings() {
  return (
    <div>
      <Row name="AI Booking Rules" detail="Escalate permit uncertainty and blocked access" />
      <Row name="Driver Hours" detail="TACO-style road time and break tracking enabled" />
      <Row name="Payments" detail="Take payment before booking confirmation" />
    </div>
  );
}

