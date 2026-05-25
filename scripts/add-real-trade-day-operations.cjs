const fs = require("fs");

const file = "app/operations-demo/page.tsx";
let text = fs.readFileSync(file, "utf8");

const fieldReality = `
        <section className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Real trade day
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">
            What happens while the team is out?
          </h2>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-red-300/20 bg-red-300/10 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-red-200">
                Without TradeConnectAI
              </p>
              <div className="mt-4 grid gap-3">
                {[
                  "Missed calls pile up while jobs are being done.",
                  "Customer details end up in texts, notes, memory and voicemails.",
                  "Quote follow-ups get forgotten after a long day.",
                  "Customers chase because they do not know what is happening.",
                  "Good enquiries go cold before anyone calls back.",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-black/25 p-4 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-emerald-300/20 bg-emerald-300/10 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-100">
                With TradeConnectAI
              </p>
              <div className="mt-4 grid gap-3">
                {[
                  "AI captures the call and turns it into a job card.",
                  "Customer, address, job type and urgency are organised.",
                  "A quote draft is prepared for you to check.",
                  "The customer gets a clear update instead of silence.",
                  "The dashboard shows what needs action when you get five minutes.",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-black/25 p-4 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
`;

if (!text.includes("Real trade day")) {
  text = text.replace(
    `        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_0.75fr]">`,
    `${fieldReality}

        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_0.75fr]">`
  );
}

fs.writeFileSync(file, text, "utf8");
console.log("Added real trade day section to operations demo.");
