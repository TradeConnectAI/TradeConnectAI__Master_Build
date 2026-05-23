"use client";

import { useMemo, useState } from "react";

type Supplier = "Screwfix" | "Toolstation";

type KitItem = {
  id: string;
  name: string;
  qty: number;
  screwfixCode: string;
  screwfixPrice: number;
  screwfixStock: string;
  toolstationCode: string;
  toolstationPrice: number;
  toolstationStock: string;
};

const kits: Record<string, KitItem[]> = {
  "Bathroom extractor replacement": [
    {
      id: "1",
      name: "Bathroom extractor fan 100mm",
      qty: 1,
      screwfixCode: "SF-FAN-100",
      screwfixPrice: 42.99,
      screwfixStock: "In stock",
      toolstationCode: "TS-FAN-100",
      toolstationPrice: 39.98,
      toolstationStock: "In stock",
    },
    {
      id: "2",
      name: "Flexible aluminium ducting 100mm",
      qty: 1,
      screwfixCode: "SF-DUCT-100",
      screwfixPrice: 9.49,
      screwfixStock: "In stock",
      toolstationCode: "TS-DUCT-100",
      toolstationPrice: 8.79,
      toolstationStock: "In stock",
    },
    {
      id: "3",
      name: "White external grille",
      qty: 1,
      screwfixCode: "SF-GRILLE-W",
      screwfixPrice: 6.99,
      screwfixStock: "Low stock",
      toolstationCode: "TS-GRILLE-W",
      toolstationPrice: 7.29,
      toolstationStock: "In stock",
    },
    {
      id: "4",
      name: "Sealant and fixings pack",
      qty: 1,
      screwfixCode: "SF-SEAL-FIX",
      screwfixPrice: 11.49,
      screwfixStock: "In stock",
      toolstationCode: "TS-SEAL-FIX",
      toolstationPrice: 10.25,
      toolstationStock: "In stock",
    },
  ],
  "Roof leak repair kit": [
    {
      id: "5",
      name: "Exterior roof sealant",
      qty: 2,
      screwfixCode: "SF-ROOF-SEAL",
      screwfixPrice: 7.99,
      screwfixStock: "In stock",
      toolstationCode: "TS-ROOF-SEAL",
      toolstationPrice: 7.49,
      toolstationStock: "Low stock",
    },
    {
      id: "6",
      name: "Lead flashing tape 100mm",
      qty: 1,
      screwfixCode: "SF-LEAD-100",
      screwfixPrice: 18.99,
      screwfixStock: "In stock",
      toolstationCode: "TS-LEAD-100",
      toolstationPrice: 17.98,
      toolstationStock: "In stock",
    },
    {
      id: "7",
      name: "Roofing screws and washers",
      qty: 1,
      screwfixCode: "SF-ROOF-SCREW",
      screwfixPrice: 13.49,
      screwfixStock: "In stock",
      toolstationCode: "TS-ROOF-SCREW",
      toolstationPrice: 12.95,
      toolstationStock: "In stock",
    },
  ],
  "End of tenancy repair pack": [
    {
      id: "8",
      name: "Multi-purpose filler 1kg",
      qty: 2,
      screwfixCode: "SF-FILL-1KG",
      screwfixPrice: 6.49,
      screwfixStock: "In stock",
      toolstationCode: "TS-FILL-1KG",
      toolstationPrice: 5.98,
      toolstationStock: "In stock",
    },
    {
      id: "9",
      name: "Sanding sheets mixed pack",
      qty: 1,
      screwfixCode: "SF-SAND-MIX",
      screwfixPrice: 4.99,
      screwfixStock: "In stock",
      toolstationCode: "TS-SAND-MIX",
      toolstationPrice: 4.49,
      toolstationStock: "In stock",
    },
    {
      id: "10",
      name: "Trade white emulsion 5L",
      qty: 1,
      screwfixCode: "SF-PAINT-W5",
      screwfixPrice: 24.99,
      screwfixStock: "In stock",
      toolstationCode: "TS-PAINT-W5",
      toolstationPrice: 22.99,
      toolstationStock: "In stock",
    },
    {
      id: "11",
      name: "Decorator caulk",
      qty: 3,
      screwfixCode: "SF-CAULK-W",
      screwfixPrice: 2.99,
      screwfixStock: "In stock",
      toolstationCode: "TS-CAULK-W",
      toolstationPrice: 2.75,
      toolstationStock: "In stock",
    },
  ],
};

function money(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(value);
}

function bestSupplier(item: KitItem): Supplier {
  return item.screwfixPrice <= item.toolstationPrice ? "Screwfix" : "Toolstation";
}

function stockClass(stock: string) {
  if (stock.toLowerCase().includes("low")) {
    return "border-yellow-300/30 bg-yellow-300/10 text-yellow-100";
  }

  if (stock.toLowerCase().includes("out")) {
    return "border-red-300/30 bg-red-300/10 text-red-100";
  }

  return "border-green-300/30 bg-green-300/10 text-green-100";
}

export default function JobQuoterPage() {
  const [jobType, setJobType] = useState("Bathroom extractor replacement");
  const [customer, setCustomer] = useState("Complete Options customer");
  const [labourHours, setLabourHours] = useState(3);
  const [hourlyRate, setHourlyRate] = useState(55);
  const [callout, setCallout] = useState(45);
  const [markup, setMarkup] = useState(20);
  const [vatEnabled, setVatEnabled] = useState(true);
  const [supplierMode, setSupplierMode] = useState<"Best price" | Supplier>("Best price");

  const selectedKit = kits[jobType];

  const rows = useMemo(() => {
    return selectedKit.map((item) => {
      const supplier = supplierMode === "Best price" ? bestSupplier(item) : supplierMode;
      const unitPrice = supplier === "Screwfix" ? item.screwfixPrice : item.toolstationPrice;
      const baseTotal = unitPrice * item.qty;
      const sellTotal = baseTotal * (1 + markup / 100);

      return {
        ...item,
        supplier,
        unitPrice,
        baseTotal,
        sellTotal,
      };
    });
  }, [selectedKit, markup, supplierMode]);

  const materialsBase = rows.reduce((sum, item) => sum + item.baseTotal, 0);
  const materialsSell = rows.reduce((sum, item) => sum + item.sellTotal, 0);
  const labour = labourHours * hourlyRate;
  const net = materialsSell + labour + callout;
  const vat = vatEnabled ? net * 0.2 : 0;
  const total = net + vat;

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <header className="border-b border-white/10 bg-slate-950 px-5 py-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
            Complete Options · TradeConnectAI
          </p>
          <h1 className="mt-2 text-4xl font-black">Job Quoter</h1>
          <p className="mt-3 max-w-3xl text-slate-400">
            Build a customer-ready quote with Screwfix and Toolstation kit lists,
            estimated prices, stock status, labour, markup and VAT.
          </p>
          <a
            href="/complete-options"
            className="mt-5 inline-flex rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-black hover:bg-white/15"
          >
            Back to Complete Options
          </a>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-5 px-5 py-6 xl:grid-cols-[1fr_380px]">
        <section className="grid gap-5">
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
            <h2 className="text-2xl font-black">Quote setup</h2>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-bold text-slate-300">Job type</span>
                <select
                  value={jobType}
                  onChange={(event) => setJobType(event.target.value)}
                  className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white"
                >
                  {Object.keys(kits).map((kit) => (
                    <option key={kit}>{kit}</option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-slate-300">Customer</span>
                <input
                  value={customer}
                  onChange={(event) => setCustomer(event.target.value)}
                  className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-slate-300">Supplier mode</span>
                <select
                  value={supplierMode}
                  onChange={(event) =>
                    setSupplierMode(event.target.value as "Best price" | Supplier)
                  }
                  className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white"
                >
                  <option>Best price</option>
                  <option>Screwfix</option>
                  <option>Toolstation</option>
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-slate-300">Materials markup %</span>
                <input
                  type="number"
                  value={markup}
                  onChange={(event) => setMarkup(Number(event.target.value))}
                  className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white"
                />
              </label>
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
            <h2 className="text-2xl font-black">Screwfix / Toolstation kit list</h2>
            <p className="mt-2 text-sm text-slate-400">
              Demo prices and availability only. Real live supplier data can be connected later
              via approved API, trade feed or managed price book.
            </p>

            <div className="mt-5 grid gap-4">
              {rows.map((item) => (
                <article
                  key={item.id}
                  className="rounded-3xl border border-white/10 bg-slate-950/60 p-5"
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <h3 className="text-xl font-black">{item.name}</h3>
                      <p className="mt-2 text-sm text-slate-400">
                        Qty {item.qty} · Recommended supplier:{" "}
                        <strong className="text-cyan-200">{item.supplier}</strong>
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
                        <p className="font-black">Screwfix</p>
                        <p className="mt-1 text-sm text-slate-400">{item.screwfixCode}</p>
                        <p className="mt-2 text-2xl font-black">
                          {money(item.screwfixPrice)}
                        </p>
                        <span className={`mt-3 inline-flex rounded-full border px-3 py-1 text-xs font-black ${stockClass(item.screwfixStock)}`}>
                          {item.screwfixStock}
                        </span>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
                        <p className="font-black">Toolstation</p>
                        <p className="mt-1 text-sm text-slate-400">{item.toolstationCode}</p>
                        <p className="mt-2 text-2xl font-black">
                          {money(item.toolstationPrice)}
                        </p>
                        <span className={`mt-3 inline-flex rounded-full border px-3 py-1 text-xs font-black ${stockClass(item.toolstationStock)}`}>
                          {item.toolstationStock}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 border-t border-white/10 pt-4 text-sm sm:grid-cols-4">
                    <p>Unit used: <strong>{money(item.unitPrice)}</strong></p>
                    <p>Base: <strong>{money(item.baseTotal)}</strong></p>
                    <p>Markup: <strong>{markup}%</strong></p>
                    <p>Quote line: <strong>{money(item.sellTotal)}</strong></p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
            <h2 className="text-2xl font-black">Labour</h2>

            <div className="mt-5 grid gap-4 md:grid-cols-4">
              <label className="grid gap-2">
                <span className="text-sm font-bold text-slate-300">Labour hours</span>
                <input
                  type="number"
                  step="0.5"
                  value={labourHours}
                  onChange={(event) => setLabourHours(Number(event.target.value))}
                  className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-slate-300">Hourly rate</span>
                <input
                  type="number"
                  value={hourlyRate}
                  onChange={(event) => setHourlyRate(Number(event.target.value))}
                  className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-slate-300">Callout</span>
                <input
                  type="number"
                  value={callout}
                  onChange={(event) => setCallout(Number(event.target.value))}
                  className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white"
                />
              </label>

              <label className="flex items-end gap-3 rounded-2xl border border-white/10 bg-slate-950 px-4 py-3">
                <input
                  type="checkbox"
                  checked={vatEnabled}
                  onChange={(event) => setVatEnabled(event.target.checked)}
                  className="h-5 w-5"
                />
                <span className="font-bold">VAT 20%</span>
              </label>
            </div>
          </section>
        </section>

        <aside className="h-fit rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-6 xl:sticky xl:top-5">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-100">
            Quote summary
          </p>

          <h2 className="mt-2 text-3xl font-black">{customer}</h2>
          <p className="mt-2 text-sm text-slate-300">{jobType}</p>

          <div className="mt-5 grid gap-3 rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Materials base</span>
              <strong>{money(materialsBase)}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Materials sell</span>
              <strong>{money(materialsSell)}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Labour</span>
              <strong>{money(labour)}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Callout</span>
              <strong>{money(callout)}</strong>
            </div>
            <div className="border-t border-white/10 pt-3">
              <div className="flex justify-between">
                <span className="text-slate-400">Net</span>
                <strong>{money(net)}</strong>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">VAT</span>
              <strong>{money(vat)}</strong>
            </div>
            <div className="border-t border-white/10 pt-3">
              <div className="flex justify-between text-xl">
                <span className="font-black">Customer total</span>
                <strong className="text-cyan-100">{money(total)}</strong>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            <button className="rounded-2xl bg-cyan-300 px-5 py-4 text-sm font-black text-slate-950">
              Save quote
            </button>
            <button className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm font-black">
              Send to customer
            </button>
            <button className="rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4 text-sm font-black">
              Create supplier kit list
            </button>
          </div>
        </aside>
      </div>
    </main>
  );
}
