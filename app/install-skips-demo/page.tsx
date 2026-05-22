"use client";

import { useMemo, useState } from "react";

const PASSWORD = "install2026";

const jobs = [
  {
    id: 1,
    customer: "Barry Builders Ltd",
    service: "8 yard skip",
    type: "Delivery",
    location: "Barry",
    time: "09:30",
    value: 285,
    lorry: "Lorry 1",
    driver: "Mike",
    skip: "SK-108",
    status: "Booked",
    permit: "No permit needed",
    payment: "Paid",
    waste: "Rubble and timber",
    action: "Deliver to private driveway",
  },
  {
    id: 2,
    customer: "Claire Jenkins",
    service: "6 yard skip",
    type: "Delivery",
    location: "Cardiff",
    time: "11:00",
    value: 240,
    lorry: "Lorry 2",
    driver: "Tom",
    skip: "SK-064",
    status: "Permit check",
    permit: "Permit likely needed",
    payment: "Payment link sent",
    waste: "House clearance",
    action: "Hold until permit confirmed",
  },
  {
    id: 3,
    customer: "Rhys Morgan",
    service: "Grab hire",
    type: "Collection",
    location: "Penarth",
    time: "13:30",
    value: 420,
    lorry: "Grab 1",
    driver: "Gareth",
    skip: "N/A",
    status: "Human review",
    permit: "Not applicable",
    payment: "Not taken",
    waste: "Soil and hardcore",
    action: "Needs office pricing",
  },
  {
    id: 4,
    customer: "Vale Roofing",
    service: "12 yard exchange",
    type: "Exchange",
    location: "Dinas Powys",
    time: "15:00",
    value: 360,
    lorry: "Lorry 1",
    driver: "Mike",
    skip: "SK-212",
    status: "Driver assigned",
    permit: "No permit needed",
    payment: "Paid",
    waste: "Roofing waste",
    action: "Swap full skip for empty",
  },
];

const drivers = [
  {
    name: "Mike",
    vehicle: "Lorry 1",
    route: "Barry / Dinas Powys",
    jobs: 4,
    accepted: 3,
    driving: "4h 20m",
    duty: "6h 10m",
    break: "Due in 1h 40m",
    status: "OK",
  },
  {
    name: "Tom",
    vehicle: "Lorry 2",
    route: "Cardiff / Penarth",
    jobs: 3,
    accepted: 2,
    driving: "3h 45m",
    duty: "5h 30m",
    break: "Due in 2h 15m",
    status: "OK",
  },
  {
    name: "Gareth",
    vehicle: "Grab 1",
    route: "Commercial collections",
    jobs: 2,
    accepted: 1,
    driving: "5h 55m",
    duty: "7h 40m",
    break: "Break due soon",
    status: "Warning",
  },
];

const skipStock = [
  { size: "4 yard", available: 6, out: 2, revenue: 360 },
  { size: "6 yard", available: 10, out: 6, revenue: 1440 },
  { size: "8 yard", available: 8, out: 5, revenue: 1425 },
  { size: "12 yard", available: 4, out: 3, revenue: 1080 },
];

export default function InstallSkipsDemoPage() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(true);
  const [tab, setTab] = useState("Jobs");
  const [selectedJob, setSelectedJob] = useState(jobs[0]);
  const [selectedDriver, setSelectedDriver] = useState(drivers[0]);
  const [selectedSkip, setSelectedSkip] = useState(skipStock[0]);
  const [sentJobs, setSentJobs] = useState<number[]>([1, 4]);
  const [paidJobs, setPaidJobs] = useState<number[]>([1, 4]);

  const stats = useMemo(() => {
    const revenue = jobs.reduce((sum, job) => sum + job.value, 0);
    const paid = jobs
      .filter((job) => paidJobs.includes(job.id))
      .reduce((sum, job) => sum + job.value, 0);

    return {
      revenue,
      paid,
      unpaid: revenue - paid,
      jobs: jobs.length,
      permits: jobs.filter((job) => job.permit.includes("Permit")).length,
      sent: sentJobs.length,
      collections: jobs.filter((job) => job.type === "Collection").length,
      exchanges: jobs.filter((job) => job.type === "Exchange").length,
      warnings: drivers.filter((driver) => driver.status === "Warning").length,
      skipsOut: skipStock.reduce((sum, skip) => sum + skip.out, 0),
      skipsAvailable: skipStock.reduce((sum, skip) => sum + skip.available, 0),
    };
  }, [paidJobs, sentJobs]);

  function togglePaid(id: number) {
    setPaidJobs((current) =>
      current.includes(id)
        ? current.filter((jobId) => jobId !== id)
        : [...current, id]
    );
  }

  function sendToDriver(id: number) {
    setSentJobs((current) =>
      current.includes(id) ? current : [...current, id]
    );
  }

  if (!unlocked) {
    return (
      <main className="min-h-screen bg-[#101010] px-6 py-10 text-white">
        <div className="mx-auto flex min-h-[80vh] max-w-xl items-center">
          <div className="w-full rounded-3xl border border-yellow-400/30 bg-zinc-900 p-8 shadow-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              Private Install Skips Demo
            </p>
            <h1 className="mt-4 text-4xl font-black">Demo login</h1>
            <p className="mt-4 text-zinc-300">
              Enter the password to view the fully clickable AI operations demo.
            </p>

            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
              className="mt-6 w-full rounded-2xl border border-yellow-400/20 bg-black px-4 py-3 text-white outline-none"
            />

            <button
              onClick={() => setUnlocked(password === PASSWORD)}
              className="mt-4 w-full rounded-full bg-yellow-400 px-5 py-3 font-black text-black hover:bg-yellow-300"
            >
              Unlock demo
            </button>

            <p className="mt-4 text-sm text-zinc-500">Password: install2026</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#101010] px-6 py-8 text-white">
      <div className="mx-auto max-w-7xl space-y-6">
        <section className="rounded-3xl border border-yellow-400/30 bg-zinc-900 p-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
            Install Integrated Skips Limited
          </p>
          <h1 className="mt-3 text-4xl font-black md:text-6xl">
            Clickable AI skip hire control room
          </h1>
          <p className="mt-4 max-w-4xl text-zinc-300">
            Bookings, permits, driver phones, payments, skip stock, collections,
            exchanges, revenue and human handover in one working demo.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-5">
          {[
            ["Revenue", "£" + stats.revenue.toLocaleString(), "Payments"],
            ["Paid", "£" + stats.paid.toLocaleString(), "Payments"],
            ["Unpaid", "£" + stats.unpaid.toLocaleString(), "Payments"],
            ["Jobs", stats.jobs.toString(), "Jobs"],
            ["Driver sends", stats.sent.toString(), "Drivers"],
            ["Permits", stats.permits.toString(), "Permits"],
            ["Collections", stats.collections.toString(), "Collections"],
            ["Exchanges", stats.exchanges.toString(), "Collections"],
            ["Skips out", stats.skipsOut.toString(), "Skips"],
            ["Break alerts", stats.warnings.toString(), "Drivers"],
          ].map(([label, value, target]) => (
            <button
              key={label}
              onClick={() => setTab(target)}
              className="rounded-3xl bg-yellow-400 p-5 text-left text-black hover:scale-[1.02]"
            >
              <p className="text-sm font-black uppercase">{label}</p>
              <p className="mt-2 text-4xl font-black">{value}</p>
            </button>
          ))}
        </section>

        <nav className="flex flex-wrap gap-2 rounded-3xl border border-yellow-400/20 bg-zinc-900 p-3">
          {[
            "Jobs",
            "Payments",
            "Permits",
            "Drivers",
            "Skips",
            "Collections",
            "AI Handover",
          ].map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`rounded-full px-4 py-2 font-black ${
                tab === item
                  ? "bg-yellow-400 text-black"
                  : "bg-black text-zinc-300"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        {tab === "Jobs" && (
          <section className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-yellow-400/20 bg-zinc-900 p-6 lg:col-span-2">
              <h2 className="text-3xl font-black">Jobs board</h2>

              <div className="mt-5 space-y-3">
                {jobs.map((job) => (
                  <button
                    key={job.id}
                    onClick={() => setSelectedJob(job)}
                    className="w-full rounded-2xl bg-black p-4 text-left hover:ring-2 hover:ring-yellow-400"
                  >
                    <div className="flex flex-wrap justify-between gap-3">
                      <div>
                        <p className="text-xl font-black text-yellow-400">
                          {job.service}
                        </p>
                        <p className="text-zinc-300">
                          {job.customer} - {job.location}
                        </p>
                        <p className="text-sm text-zinc-500">
                          {job.time} | {job.type} | {job.driver}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-2xl font-black">£{job.value}</p>
                        <p className="text-sm text-zinc-400">{job.status}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <DetailPanel
              job={selectedJob}
              paid={paidJobs.includes(selectedJob.id)}
              sent={sentJobs.includes(selectedJob.id)}
              onPaid={() => togglePaid(selectedJob.id)}
              onSend={() => sendToDriver(selectedJob.id)}
            />
          </section>
        )}

        {tab === "Payments" && (
          <section className="rounded-3xl border border-yellow-400/20 bg-zinc-900 p-6">
            <h2 className="text-3xl font-black">Payments</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {jobs.map((job) => (
                <button
                  key={job.id}
                  onClick={() => togglePaid(job.id)}
                  className="rounded-2xl bg-black p-5 text-left hover:ring-2 hover:ring-yellow-400"
                >
                  <p className="text-xl font-black text-yellow-400">
                    {job.customer}
                  </p>
                  <p className="mt-1 text-zinc-300">{job.service}</p>
                  <p className="mt-3 text-3xl font-black">£{job.value}</p>
                  <p className="mt-2 text-sm text-zinc-400">
                    {paidJobs.includes(job.id)
                      ? "Paid and receipt sent"
                      : "Unpaid - payment link needed"}
                  </p>
                </button>
              ))}
            </div>
          </section>
        )}

        {tab === "Permits" && (
          <section className="rounded-3xl border border-yellow-400/20 bg-zinc-900 p-6">
            <h2 className="text-3xl font-black">Permit checks</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {jobs.map((job) => (
                <button
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className="rounded-2xl bg-black p-5 text-left hover:ring-2 hover:ring-yellow-400"
                >
                  <p className="text-xl font-black text-yellow-400">
                    {job.location}
                  </p>
                  <p className="mt-1 text-zinc-300">{job.service}</p>
                  <p className="mt-3 text-zinc-400">{job.permit}</p>
                  <p className="mt-3 text-sm text-zinc-500">
                    AI action: {job.action}
                  </p>
                </button>
              ))}
            </div>
          </section>
        )}

        {tab === "Drivers" && (
          <section className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-yellow-400/20 bg-zinc-900 p-6 lg:col-span-2">
              <h2 className="text-3xl font-black">Drivers and TACO hours</h2>

              <div className="mt-5 space-y-3">
                {drivers.map((driver) => (
                  <button
                    key={driver.name}
                    onClick={() => setSelectedDriver(driver)}
                    className="w-full rounded-2xl bg-black p-5 text-left hover:ring-2 hover:ring-yellow-400"
                  >
                    <div className="flex justify-between gap-3">
                      <div>
                        <p className="text-xl font-black text-yellow-400">
                          {driver.name} - {driver.vehicle}
                        </p>
                        <p className="text-zinc-300">{driver.route}</p>
                        <p className="text-sm text-zinc-500">
                          Driving {driver.driving} | Duty {driver.duty}
                        </p>
                      </div>
                      <p
                        className={
                          driver.status === "Warning"
                            ? "font-black text-red-300"
                            : "font-black text-green-300"
                        }
                      >
                        {driver.status}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <aside className="rounded-3xl border border-yellow-400/20 bg-zinc-900 p-6">
              <h2 className="text-3xl font-black">Driver detail</h2>
              <div className="mt-5 rounded-2xl bg-black p-5">
                <p className="text-2xl font-black text-yellow-400">
                  {selectedDriver.name}
                </p>
                <p className="text-zinc-300">{selectedDriver.vehicle}</p>
                <p className="mt-4">Jobs sent: {selectedDriver.jobs}</p>
                <p>Accepted: {selectedDriver.accepted}</p>
                <p>Driving: {selectedDriver.driving}</p>
                <p>Duty: {selectedDriver.duty}</p>
                <p>Break: {selectedDriver.break}</p>
              </div>
            </aside>
          </section>
        )}

        {tab === "Skips" && (
          <section className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-yellow-400/20 bg-zinc-900 p-6 lg:col-span-2">
              <h2 className="text-3xl font-black">Skip stock</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {skipStock.map((skip) => (
                  <button
                    key={skip.size}
                    onClick={() => setSelectedSkip(skip)}
                    className="rounded-2xl bg-black p-5 text-left hover:ring-2 hover:ring-yellow-400"
                  >
                    <p className="text-2xl font-black text-yellow-400">
                      {skip.size}
                    </p>
                    <p className="mt-2 text-zinc-300">
                      {skip.available} available | {skip.out} out
                    </p>
                    <p className="mt-2 text-zinc-500">
                      Revenue from this size: £{skip.revenue}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <aside className="rounded-3xl border border-yellow-400/20 bg-zinc-900 p-6">
              <h2 className="text-3xl font-black">Selected stock</h2>
              <div className="mt-5 rounded-2xl bg-black p-5">
                <p className="text-2xl font-black text-yellow-400">
                  {selectedSkip.size}
                </p>
                <p className="mt-3">Available: {selectedSkip.available}</p>
                <p>Out with customers: {selectedSkip.out}</p>
                <p>Revenue: £{selectedSkip.revenue}</p>
              </div>
            </aside>
          </section>
        )}

        {tab === "Collections" && (
          <section className="rounded-3xl border border-yellow-400/20 bg-zinc-900 p-6">
            <h2 className="text-3xl font-black">Collections and exchanges</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {jobs
                .filter((job) => job.type === "Collection" || job.type === "Exchange")
                .map((job) => (
                  <button
                    key={job.id}
                    onClick={() => setSelectedJob(job)}
                    className="rounded-2xl bg-black p-5 text-left hover:ring-2 hover:ring-yellow-400"
                  >
                    <p className="text-xl font-black text-yellow-400">
                      {job.service}
                    </p>
                    <p className="text-zinc-300">{job.customer}</p>
                    <p className="mt-2 text-zinc-500">{job.action}</p>
                  </button>
                ))}
            </div>
          </section>
        )}

        {tab === "AI Handover" && (
          <section className="rounded-3xl border border-yellow-400/20 bg-zinc-900 p-6">
            <h2 className="text-3xl font-black">AI handover rules</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {[
                "Permit uncertainty",
                "Hazardous waste mentioned",
                "Commercial account pricing",
                "No driver route available",
                "Customer disputes price",
                "Grab hire needs manual quote",
              ].map((rule) => (
                <button
                  key={rule}
                  className="rounded-2xl bg-black p-5 text-left text-zinc-300 hover:ring-2 hover:ring-yellow-400"
                >
                  <p className="font-black text-yellow-400">
                    Sent to real person
                  </p>
                  <p className="mt-2">{rule}</p>
                </button>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

function DetailPanel({
  job,
  paid,
  sent,
  onPaid,
  onSend,
}: {
  job: (typeof jobs)[number];
  paid: boolean;
  sent: boolean;
  onPaid: () => void;
  onSend: () => void;
}) {
  return (
    <aside className="rounded-3xl border border-yellow-400/20 bg-zinc-900 p-6">
      <h2 className="text-3xl font-black">Selected job</h2>

      <div className="mt-5 rounded-2xl bg-black p-5">
        <p className="text-2xl font-black text-yellow-400">{job.service}</p>
        <p className="mt-1 text-zinc-300">{job.customer}</p>
        <p className="text-sm text-zinc-500">{job.location}</p>

        <div className="mt-5 space-y-2 text-sm text-zinc-300">
          <p>Waste: {job.waste}</p>
          <p>Permit: {job.permit}</p>
          <p>Lorry: {job.lorry}</p>
          <p>Driver: {job.driver}</p>
          <p>Skip: {job.skip}</p>
          <p>AI decision: {job.action}</p>
        </div>

        <button
          onClick={onPaid}
          className="mt-5 w-full rounded-full bg-yellow-400 px-4 py-3 font-black text-black"
        >
          {paid ? "Payment received" : "Take payment"}
        </button>

        <button
          onClick={onSend}
          className="mt-3 w-full rounded-full bg-zinc-800 px-4 py-3 font-black text-yellow-400 hover:bg-yellow-400 hover:text-black"
        >
          {sent ? "On driver phone" : "Send to driver phone"}
        </button>

        <button className="mt-3 w-full rounded-full border border-yellow-400/40 px-4 py-3 font-black text-yellow-400 hover:bg-yellow-400 hover:text-black">
          Send to real person
        </button>
      </div>
    </aside>
  );
}
