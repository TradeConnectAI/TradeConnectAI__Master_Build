const fs = require("fs");

const file = "app/page.tsx";
let text = fs.readFileSync(file, "utf8");

const outAtWorkSection = `
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Built for when you are out working
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-6xl">
              You are on the tools. The office still needs to move.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              Most trades do not lose work because they are bad at the job.
              They lose it because the phone rings while they are driving,
              measuring up, carrying materials, finishing a job or talking to a customer.
            </p>

            <div className="mt-6 rounded-[2rem] border border-emerald-300/30 bg-emerald-300/10 p-6 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.2em]">
                Founding beta
              </p>
              <p className="mt-2 text-lg font-black text-white">
                Free for the first 15 trade businesses that sign up and give honest feedback.
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-100/85">
                Try it with realistic calls, job notes, quotes and customer updates before paid plans open.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              {
                time: "08:14",
                title: "Phone rings while driving to first job",
                text: "AI captures the enquiry, customer name, address, trade needed and urgency.",
              },
              {
                time: "09:37",
                title: "Customer asks for an update while you are working",
                text: "A clear update is prepared so they know what is happening without chasing again.",
              },
              {
                time: "11:22",
                title: "Quote request comes in during a job",
                text: "The details are organised into a quote draft for you to check later.",
              },
              {
                time: "14:05",
                title: "Missed call becomes a job card",
                text: "Instead of a voicemail disappearing, the lead lands in your dashboard ready to follow up.",
              },
            ].map((item) => (
              <div
                key={item.time}
                className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="shrink-0 rounded-full bg-cyan-300/10 px-3 py-1 text-sm font-black text-cyan-200">
                    {item.time}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
`;

if (!text.includes("Built for when you are out working")) {
  text = text.replace(
    `      <section id="how"`,
    `${outAtWorkSection}

      <section id="how"`
  );
}

fs.writeFileSync(file, text, "utf8");
console.log("Added out-at-work homepage section.");
