"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const skipPrices: Record<string, number> = {
  "4 Yard": 180,
  "6 Yard": 225,
  "8 Yard": 275,
  "12 Yard": 360,
  "16 Yard": 460,
};

export default function BookSkipPage() {
  const [step, setStep] = useState("form");
  const [skipSize, setSkipSize] = useState("8 Yard");
  const [location, setLocation] = useState("Road Permit Required");
  const [chatOpen, setChatOpen] = useState(true);

  const skipPrice = skipPrices[skipSize];
  const permit = location === "Road Permit Required" ? 40 : 0;
  const subtotal = skipPrice + permit;
  const vat = Math.round(subtotal * 0.2);
  const total = subtotal + vat;

  const aiStatus = useMemo(() => {
    if (step === "form") return "Waiting for booking details";
    if (step === "checking") return "Checking skips, grab hire, aggregates, permits and drivers";
    return "Booking created and sent to driver";
  }, [step]);

  return (
    <main className="min-min-min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 bg-slate-900/80 px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <p className="text-sm text-cyan-300">Install Integrated Skips Demo</p>
            <h1 className="text-2xl font-bold">Book Skips, Grab Hire & Aggregates</h1>
          </div>

          <Link
            href="/install-skips-demo"
            className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950"
          >
            Back to Demo
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl">
          <div className="mb-6">
            <h2 className="text-xl font-bold">Customer Booking Form</h2>
            <p className="text-sm text-slate-300">
              AI checks permits, driver availability, skip stock, grab hire slots, aggregates and collections.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-1 md:grid-cols-2">
            <Input label="Full Name" placeholder="John Davies" />
            <Input label="Company" placeholder="Optional" />
            <Input label="Phone" placeholder="07700 900123" />
            <Input label="Email" placeholder="john@email.com" />
            <Input label="Postcode" placeholder="CF62 7AA" />
            <Input label="Address" placeholder="Barry, South Wales" />

            <label className="space-y-2">
              <span className="text-sm font-semibold">Service Required</span>
              <select className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3">
                <option>General Waste Skip</option>
                <option>Hardcore Skip</option>
                <option>Waste Removal Service</option>
                <option>Grab Hire Service</option>
                <option>Aggregates Delivery</option>
                <option>Grab Hire + Aggregates Delivery</option>
              </select>
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold">Skip Size</span>
              <select
                value={skipSize}
                onChange={(e) => setSkipSize(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3"
              >
                {Object.keys(skipPrices).map((size) => (
                  <option key={size}>{size}</option>
                ))}
              </select>
            </label>

            <Input label="Aggregates Type" placeholder="MOT Type 1 / Sand / Gravel / Topsoil" />
            <Input label="Tonnes / Load Size" placeholder="Example: 8 tonnes" />
            <Input label="Delivery Date" placeholder="Monday AM" />
            <Input label="Collection Date" placeholder="Auto scheduled if skip" />

            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-semibold">Skip / Delivery Location</span>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3"
              >
                <option>Private Drive</option>
                <option>Road Permit Required</option>
                <option>Site Access Required</option>
                <option>Grab Lorry Access Required</option>
              </select>
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-semibold">Special Instructions</span>
              <textarea
                rows={4}
                placeholder="Gate code, access notes, narrow street, grab access, material type, collection notes..."
                className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3"
              />
            </label>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => setStep("checking")}
              className="rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950"
            >
              Check Availability
            </button>

            <button
              onClick={() => setStep("confirmed")}
              className="rounded-full bg-lime-400 px-6 py-3 font-bold text-slate-950"
            >
              Confirm Booking
            </button>
          </div>

          {step !== "form" && (
            <div className="mt-6 grid gap-3 rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-sm">
              <p>? Skip / service available</p>
              <p>? Driver and vehicle available</p>
              <p>? Permit / access check started</p>
              <p>? Aggregates stock checked</p>
              <p>? Job sent to driver phone</p>
              {step === "confirmed" && <p>?? Booking #SK-2048 confirmed</p>}
            </div>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-xl font-bold">Live Estimate</h2>

            <div className="mt-4 space-y-3 text-sm">
              <Row label={`${skipSize} Skip / Service`} value={`ï¿½${skipPrice}`} />
              <Row label="Permit / Access Check" value={`ï¿½${permit}`} />
              <Row label="VAT" value={`ï¿½${vat}`} />

              <div className="border-t border-white/10 pt-3">
                <Row label="Total" value={`ï¿½${total}`} big />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-orange-400/20 bg-orange-400/5 p-6">
            <h2 className="text-xl font-bold">Services Covered</h2>

            <div className="mt-4 space-y-2 text-sm">
              <p>?? General Waste Skips</p>
              <p>?? Hardcore Skips</p>
              <p>?? Waste Removal Service</p>
              <p>?? Grab Hire Services</p>
              <p>?? Aggregates Delivery</p>
              <p>?? Delivery of Aggregates</p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-xl font-bold">AI Operations Check</h2>
            <p className="mt-2 text-sm text-slate-300">{aiStatus}</p>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <Stat label="Revenue Today" value="ï¿½8,940" />
              <Stat label="Skips Out" value="32" />
              <Stat label="Drivers Active" value="8" />
              <Stat label="Permits" value="4" />
            </div>
          </div>

          <div className="rounded-3xl border border-lime-400/30 bg-lime-400/10 p-6">
            <h2 className="text-xl font-bold">Driver Phone Task</h2>

            <div className="mt-4 space-y-2 text-sm">
              <p>?? Deliver / collect: {skipSize}</p>
              <p>?? Barry, South Wales</p>
              <p>?? ETA: 08:20</p>
              <p>? Break remaining: 37 mins</p>
              <p>? Driving time: 3h 52m</p>
              <p>?? Task sent to driver phone</p>
            </div>
          </div>
        </aside>
      </section>

      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 shadow-xl"
      >
        AI Chat
      </button>

      {chatOpen && (
        <div className="fixed bottom-24 right-6 w-[360px] max-w-[calc(100vw-3rem)] overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
          <div className="bg-cyan-400 px-5 py-4 text-slate-950">
            <p className="font-bold">Trade Connect AI Assistant</p>
            <p className="text-xs font-semibold">? Online</p>
          </div>

          <div className="space-y-3 p-5 text-sm">
            <Bubble who="Customer">
              Need an 8 yard skip in Barry Monday. Might need hardcore taken away too.
            </Bubble>

            <Bubble who="AI">
              Morning ?? I can help with general waste skips, hardcore skips, waste removal, grab hire and aggregates delivery.
            </Bubble>

            <Bubble who="AI">
              Iï¿½m checking vehicle availability, driver schedules, permit rules, skip stock and aggregate delivery slots now.
            </Bubble>

            <Bubble who="AI">
              Good news. We have an 8 Yard skip available Monday AM. Is it going on private land, road, or a site entrance?
            </Bubble>

            <Bubble who="Customer">Road outside the property.</Bubble>

            <Bubble who="AI">
              No problem. Permit likely required. Estimate: Skip ï¿½275, Permit ï¿½40, VAT ï¿½63. Total ï¿½378.
            </Bubble>

            <Bubble who="AI">
              Booking created: #SK-2048. Driver assigned. Job sent to phone. Collection will be auto scheduled.
            </Bubble>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2">
              <button className="rounded-xl bg-lime-400 px-3 py-2 font-bold text-slate-950">
                Track Job
              </button>

              <button className="rounded-xl bg-white px-3 py-2 font-bold text-slate-950">
                Contact Team
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function Input({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <label className="space-y-2">
      <span className="text-sm font-semibold">{label}</span>
      <input
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 outline-none"
      />
    </label>
  );
}

function Row({
  label,
  value,
  big = false,
}: {
  label: string;
  value: string;
  big?: boolean;
}) {
  return (
    <div className={`flex justify-between ${big ? "text-lg font-bold" : ""}`}>
      <span className="text-slate-300">{label}</span>
      <span>{value}</span>
    </div>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-900 p-4">
      <p className="text-xs text-slate-400">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}

function Bubble({
  who,
  children,
}: {
  who: string;
  children: React.ReactNode;
}) {
  const isAi = who === "AI";

  return (
    <div className={isAi ? "text-left" : "text-right"}>
      <p className="mb-1 text-xs text-slate-400">{who}</p>

      <div
        className={
          isAi
            ? "inline-block rounded-2xl bg-white/10 px-4 py-3"
            : "inline-block rounded-2xl bg-cyan-400 px-4 py-3 text-slate-950"
        }
      >
        {children}
      </div>
    </div>
  );
}



