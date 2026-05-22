"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const jobsStart = [
  {
    id: 1,
    customer: "Barry Builders Ltd",
    service: "8 yard skip delivery",
    type: "Delivery",
    location: "Barry",
    time: "09:30",
    value: 285,
    driver: "Mike",
    truck: "SCANIA 340",
    status: "Booked",
    permit: "No permit needed",
    waste: "Rubble and timber",
    action: "Deliver to private driveway",
  },
  {
    id: 2,
    customer: "Claire Jenkins",
    service: "6 yard skip delivery",
    type: "Delivery",
    location: "Cardiff",
    time: "11:00",
    value: 240,
    driver: "Tom",
    truck: "IVECO EuroCargo",
    status: "Permit check",
    permit: "Permit likely needed",
    waste: "House clearance",
    action: "Hold until permit confirmed",
  },
  {
    id: 3,
    customer: "Rhys Morgan",
    service: "Grab hire collection",
    type: "Collection",
    location: "Penarth",
    time: "13:30",
    value: 420,
    driver: "Gareth",
    truck: "Grab 1",
    status: "Human review",
    permit: "Not applicable",
    waste: "Soil and hardcore",
    action: "Needs office pricing before dispatch",
  },
  {
    id: 4,
    customer: "Vale Roofing",
    service: "12 yard exchange",
    type: "Exchange",
    location: "Dinas Powys",
    time: "15:00",
    value: 360,
    driver: "Mike",
    truck: "SCANIA 340",
    status: "Driver assigned",
    permit: "No permit needed",
    waste: "Roofing waste",
    action: "Collect full skip and drop empty replacement",
  },
  {
    id: 5,
    customer: "House Clearance Wales",
    service: "6 yard collection",
    type: "Collection",
    location: "Cardiff Bay",
    time: "16:15",
    value: 210,
    driver: "Unassigned",
    truck: "Unassigned",
    status: "Needs driver",
    permit: "Roadside permit active",
    waste: "Mixed household waste",
    action: "Collect full skip before permit expires",
  },
];

const drivers = [
  {
    name: "Mike",
    truck: "SCANIA 340",
    route: "Barry / Dinas Powys",
    driving: "4h 20m",
    duty: "6h 10m",
    breakDue: "1h 40m",
    status: "OK",
  },
  {
    name: "Tom",
    truck: "IVECO EuroCargo",
    route: "Cardiff / Penarth",
    driving: "3h 45m",
    duty: "5h 30m",
    breakDue: "2h 15m",
    status: "OK",
  },
  {
    name: "Gareth",
    truck: "Grab 1",
    route: "Commercial collections",
    driving: "5h 55m",
    duty: "7h 40m",
    breakDue: "Break due soon",
    status: "Warning",
  },
];

const skipStock = [
  { size: "4 yard", available: 6, out: 2 },
  { size: "6 yard", available: 10, out: 6 },
  { size: "8 yard", available: 8, out: 5 },
  { size: "12 yard", available: 4, out: 3 },
];

export default function InstallSkipsDemoPage() {
  const [tab, setTab] = useState("Jobs");
  const [jobs, setJobs] = useState(jobsStart);
  const [selectedJob, setSelectedJob] = useState(jobsStart[0]);
  const [selectedDriver, setSelectedDriver] = useState(drivers[0]);
  const [paid, setPaid] = useState<number[]>([1, 4]);
  const [sent, setSent] = useState<number[]>([1, 4]);
  const [completed, setCompleted] = useState<number[]>([]);

  const stats = useMemo(() => {
    const revenue = jobs.reduce((sum, job) => sum + job.value, 0);
    const paidRevenue = jobs
      .filter((job) => paid.includes(job.id))
      .reduce((sum, job) => sum + job.value, 0);

    return {
      revenue,
      paidRevenue,
      unpaid: revenue - paidRevenue,
      jobs: jobs.length,
      sent: sent.length,
      completed: completed.length,
      collections: jobs.filter((job) => job.type === "Collection").length,
      exchanges: jobs.filter((job) => job.type === "Exchange").length,
      permits: jobs.filter((job) => job.permit.toLowerCase().includes("permit")).length,
      skipsOut: skipStock.reduce((sum, skip) => sum + skip.out, 0),
      skipsAvailable: skipStock.reduce((sum, skip) => sum + skip.available, 0),
    };
  }, [jobs, paid, sent, completed]);

  function assignDriver(jobId: number, driver: string) {
    const chosenDriver = drivers.find((item) => item.name === driver);

    const updated = jobs.map((job) =>
      job.id === jobId
        ? {
            ...job,
            driver,
            truck: chosenDriver?.truck || "Unassigned",
            status: driver === "Unassigned" ? "Needs driver" : "Driver assigned",
          }
        : job
    );

    setJobs(updated);

    const fresh = updated.find((job) => job.id === jobId);
    if (fresh) setSelectedJob(fresh);
  }

  function aiAssignCollections() {
    const cycle = ["Mike", "Tom", "Gareth"];
    let i = 0;

    const updated = jobs.map((job) => {
      if (
        (job.type === "Collection" || job.type === "Exchange") &&
        job.driver === "Unassigned"
      ) {
        const driver = cycle[i % cycle.length];
        const chosenDriver = drivers.find((item) => item.name === driver);
        i++;

        return {
          ...job,
          driver,
          truck: chosenDriver?.truck || "Assigned vehicle",
          status: "AI assigned driver",
        };
      }

      return job;
    });

    setJobs(updated);
  }

  function togglePaid(id: number) {
    setPaid((current) =>
      current.includes(id) ? current.filter((x) => x !== id) : [...current, id]
    );
  }

  function sendToDriver(id: number) {
    setSent((current) => (current.includes(id) ? current : [...current, id]));
  }

  function completeJob(id: number) {
    setCompleted((current) =>
      current.includes(id) ? current : [...current, id]
    );
  }

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <section className="relative overflow-hidden border-b border-orange-500/30 bg-black">
        <div className="absolute inset-0 opacity-35">
          <Image
            src="/install-assets/install-lorries.webp"
            alt="Install Integrated Skips lorries"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="rounded-2xl bg-black/80 p-4 ring-1 ring-orange-500/30">
              <Image
                src="/install-assets/install-logo.webp"
                alt="Install Integrated Skips LTD"
                width={360}
                height={110}
                className="h-auto w-[280px] md:w-[360px]"
              />
            </div>

            <div className="rounded-2xl bg-orange-500 px-5 py-3 text-right font-black text-black">
              <p>AI Operations Demo</p>
              <p className="text-sm">Private client preview</p>
            </div>
          </div>

          <h1 className="mt-12 max-w-5xl text-5xl font-black tracking-tight md:text-7xl">
            Skip hire control room with AI booking, permits, payments and driver dispatch.
          </h1>

          <p className="mt-5 max-w-4xl text-lg text-zinc-200">
            A clickable private demo for Install Integrated Skips. AI answers enquiries,
            checks availability, organises permits, assigns drivers, sends tasks to phones,
            tracks TACO-style driver hours and hands complex work to a real person.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-6 px-6 py-8">
        <section className="grid gap-4 md:grid-cols-5">
          {[
            ["Revenue", "£" + stats.revenue.toLocaleString(), "Payments"],
            ["Paid", "£" + stats.paidRevenue.toLocaleString(), "Payments"],
            ["Unpaid", "£" + stats.unpaid.toLocaleString(), "Payments"],
            ["Jobs", stats.jobs.toString(), "Jobs"],
            ["Driver sends", stats.sent.toString(), "Drivers"],
            ["Permits", stats.permits.toString(), "Permits"],
            ["Collections", stats.collections.toString(), "Collections"],
            ["Exchanges", stats.exchanges.toString(), "Collections"],
            ["Skips out", stats.skipsOut.toString(), "Skips"],
            ["Completed", stats.completed.toString(), "Driver Phone"],
          ].map(([label, value, target]) => (
            <button
              key={label}
              onClick={() => setTab(target)}
              className="rounded-3xl bg-orange-500 p-5 text-left text-black shadow-lg shadow-orange-950/40 transition hover:scale-[1.02]"
            >
              <p className="text-sm font-black uppercase">{label}</p>
              <p className="mt-2 text-4xl font-black">{value}</p>
            </button>
          ))}
        </section>

        <nav className="flex flex-wrap gap-2 rounded-3xl border border-orange-500/20 bg-zinc-950 p-3">
          {[
            "Jobs",
            "Collections",
            "Drivers",
            "Driver Phone",
            "Payments",
            "Permits",
            "Skips",
            "AI Handover",
          ].map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`rounded-full px-4 py-2 font-black ${
                tab === item
                  ? "bg-orange-500 text-black"
                  : "bg-black text-zinc-300 hover:bg-zinc-900"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        {(tab === "Jobs" || tab === "Collections") && (
          <section className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-orange-500/20 bg-zinc-950 p-6 lg:col-span-2">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-3xl font-black">
                  {tab === "Collections" ? "Collections planner" : "Jobs board"}
                </h2>

                <button
                  onClick={aiAssignCollections}
                  className="rounded-full bg-orange-500 px-4 py-2 font-black text-black"
                >
                  AI auto assign collections
                </button>
              </div>

              <div className="mt-5 space-y-3">
                {jobs
                  .filter((job) =>
                    tab === "Collections"
                      ? job.type === "Collection" || job.type === "Exchange"
                      : true
                  )
                  .map((job) => (
                    <button
                      key={job.id}
                      onClick={() => setSelectedJob(job)}
                      className="w-full rounded-2xl bg-black p-4 text-left transition hover:ring-2 hover:ring-orange-500"
                    >
                      <div className="flex flex-wrap justify-between gap-3">
                        <div>
                          <p className="text-xl font-black text-orange-400">
                            {job.service}
                          </p>
                          <p className="text-zinc-300">
                            {job.customer} - {job.location}
                          </p>
                          <p className="text-sm text-zinc-500">
                            {job.time} | {job.type} | {job.truck}
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

            <JobPanel
              job={selectedJob}
              paid={paid.includes(selectedJob.id)}
              sent={sent.includes(selectedJob.id)}
              completed={completed.includes(selectedJob.id)}
              onPaid={() => togglePaid(selectedJob.id)}
              onSend={() => sendToDriver(selectedJob.id)}
              onComplete={() => completeJob(selectedJob.id)}
              onAssign={(driver) => assignDriver(selectedJob.id, driver)}
            />
          </section>
        )}

        {tab === "Drivers" && (
          <section className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-orange-500/20 bg-zinc-950 p-6 lg:col-span-2">
              <h2 className="text-3xl font-black">Fleet and TACO hours</h2>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {drivers.map((driver) => (
                  <button
                    key={driver.name}
                    onClick={() => setSelectedDriver(driver)}
                    className="rounded-2xl bg-black p-5 text-left hover:ring-2 hover:ring-orange-500"
                  >
                    <p className="text-2xl font-black text-orange-400">
                      {driver.truck}
                    </p>
                    <p className="mt-1 text-zinc-300">Driver: {driver.name}</p>
                    <p className="text-sm text-zinc-500">{driver.route}</p>
                    <p className="mt-4 text-sm">Driving: {driver.driving}</p>
                    <p className="text-sm">Duty: {driver.duty}</p>
                    <p
                      className={
                        driver.status === "Warning"
                          ? "mt-3 font-black text-red-300"
                          : "mt-3 font-black text-green-300"
                      }
                    >
                      {driver.status} - {driver.breakDue}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <aside className="rounded-3xl border border-orange-500/20 bg-zinc-950 p-6">
              <h2 className="text-3xl font-black">Selected driver</h2>
              <div className="mt-5 rounded-2xl bg-black p-5">
                <p className="text-2xl font-black text-orange-400">
                  {selectedDriver.name}
                </p>
                <p className="text-zinc-300">{selectedDriver.truck}</p>
                <p className="mt-4">Route: {selectedDriver.route}</p>
                <p>Driving today: {selectedDriver.driving}</p>
                <p>Duty today: {selectedDriver.duty}</p>
                <p>Break: {selectedDriver.breakDue}</p>
              </div>
            </aside>
          </section>
        )}

        {tab === "Driver Phone" && (
          <section className="grid gap-6 md:grid-cols-3">
            {drivers.map((driver) => (
              <div
                key={driver.name}
                className="rounded-[2rem] border border-orange-500/20 bg-zinc-950 p-5"
              >
                <div className="rounded-[2rem] border-4 border-zinc-800 bg-black p-4">
                  <p className="text-sm text-zinc-500">Driver phone</p>
                  <h2 className="text-2xl font-black text-orange-400">
                    {driver.name}
                  </h2>
                  <p className="text-sm text-zinc-400">{driver.truck}</p>

                  <div className="mt-5 space-y-3">
                    {jobs
                      .filter((job) => job.driver === driver.name)
                      .map((job) => (
                        <div key={job.id} className="rounded-2xl bg-zinc-900 p-4">
                          <p className="font-black text-orange-300">{job.service}</p>
                          <p className="text-sm text-zinc-400">
                            {job.time} - {job.location}
                          </p>
                          <p className="mt-2 text-sm text-zinc-300">{job.action}</p>

                          <div className="mt-3 grid grid-cols-2 gap-2">
                            <button
                              onClick={() => sendToDriver(job.id)}
                              className="rounded-xl bg-green-600 p-2 font-black"
                            >
                              Accept
                            </button>
                            <button className="rounded-xl bg-blue-600 p-2 font-black">
                              Navigate
                            </button>
                            <button className="rounded-xl bg-orange-500 p-2 font-black text-black">
                              Arrived
                            </button>
                            <button
                              onClick={() => completeJob(job.id)}
                              className="rounded-xl bg-zinc-700 p-2 font-black"
                            >
                              Complete
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}

        {tab === "Payments" && (
          <Grid title="Payments">
            {jobs.map((job) => (
              <button
                key={job.id}
                onClick={() => togglePaid(job.id)}
                className="rounded-2xl bg-black p-5 text-left hover:ring-2 hover:ring-orange-500"
              >
                <p className="text-xl font-black text-orange-400">{job.customer}</p>
                <p>{job.service}</p>
                <p className="mt-3 text-3xl font-black">£{job.value}</p>
                <p className="mt-2 text-zinc-400">
                  {paid.includes(job.id)
                    ? "Paid - receipt sent"
                    : "Unpaid - payment link needed"}
                </p>
              </button>
            ))}
          </Grid>
        )}

        {tab === "Permits" && (
          <Grid title="Permit checks">
            {jobs.map((job) => (
              <button
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className="rounded-2xl bg-black p-5 text-left hover:ring-2 hover:ring-orange-500"
              >
                <p className="text-xl font-black text-orange-400">{job.location}</p>
                <p>{job.service}</p>
                <p className="mt-3 text-zinc-400">{job.permit}</p>
                <p className="mt-2 text-sm text-zinc-500">{job.action}</p>
              </button>
            ))}
          </Grid>
        )}

        {tab === "Skips" && (
          <Grid title="Skip stock">
            {skipStock.map((skip) => (
              <div key={skip.size} className="rounded-2xl bg-black p-5">
                <p className="text-2xl font-black text-orange-400">{skip.size}</p>
                <p className="mt-2">{skip.available} available</p>
                <p>{skip.out} out with customers</p>
                <div className="mt-4 h-3 rounded-full bg-zinc-800">
                  <div
                    className="h-3 rounded-full bg-orange-500"
                    style={{
                      width: `${(skip.out / (skip.available + skip.out)) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </Grid>
        )}

        {tab === "AI Handover" && (
          <Grid title="AI handover rules">
            {[
              "Permit uncertainty",
              "Hazardous waste mentioned",
              "Commercial account pricing",
              "No driver route available",
              "Customer disputes price",
              "Grab hire needs manual quote",
            ].map((rule) => (
              <div key={rule} className="rounded-2xl bg-black p-5">
                <p className="font-black text-orange-400">Sent to real person</p>
                <p className="mt-2 text-zinc-300">{rule}</p>
              </div>
            ))}
          </Grid>
        )}
      </div>
    </main>
  );
}

function JobPanel({
  job,
  paid,
  sent,
  completed,
  onPaid,
  onSend,
  onComplete,
  onAssign,
}: {
  job: (typeof jobsStart)[number];
  paid: boolean;
  sent: boolean;
  completed: boolean;
  onPaid: () => void;
  onSend: () => void;
  onComplete: () => void;
  onAssign: (driver: string) => void;
}) {
  return (
    <aside className="rounded-3xl border border-orange-500/20 bg-zinc-950 p-6">
      <h2 className="text-3xl font-black">Selected job</h2>

      <div className="mt-5 rounded-2xl bg-black p-5">
        <p className="text-2xl font-black text-orange-400">{job.service}</p>
        <p className="mt-1 text-zinc-300">{job.customer}</p>
        <p className="text-sm text-zinc-500">{job.location}</p>

        <div className="mt-5 space-y-2 text-sm text-zinc-300">
          <p>Waste: {job.waste}</p>
          <p>Permit: {job.permit}</p>
          <p>Driver: {job.driver}</p>
          <p>Vehicle: {job.truck}</p>
          <p>AI decision: {job.action}</p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2">
          {["Mike", "Tom", "Gareth", "Unassigned"].map((driver) => (
            <button
              key={driver}
              onClick={() => onAssign(driver)}
              className="rounded-xl bg-zinc-800 p-3 font-black text-orange-400 hover:bg-orange-500 hover:text-black"
            >
              {driver}
            </button>
          ))}
        </div>

        <button
          onClick={onPaid}
          className="mt-5 w-full rounded-full bg-orange-500 px-4 py-3 font-black text-black"
        >
          {paid ? "Payment received" : "Take payment"}
        </button>

        <button
          onClick={onSend}
          className="mt-3 w-full rounded-full bg-zinc-800 px-4 py-3 font-black text-orange-400 hover:bg-orange-500 hover:text-black"
        >
          {sent ? "On driver phone" : "Send to driver phone"}
        </button>

        <button
          onClick={onComplete}
          className="mt-3 w-full rounded-full border border-orange-500/40 px-4 py-3 font-black text-orange-400 hover:bg-orange-500 hover:text-black"
        >
          {completed ? "Completed" : "Mark completed"}
        </button>
      </div>
    </aside>
  );
}

function Grid({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-orange-500/20 bg-zinc-950 p-6">
      <h2 className="text-3xl font-black">{title}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </section>
  );
}
