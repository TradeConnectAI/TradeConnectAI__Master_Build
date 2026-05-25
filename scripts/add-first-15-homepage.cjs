const fs = require("fs");

const home = "app/page.tsx";
let text = fs.readFileSync(home, "utf8");

if (!text.includes("Free for the first 15 trade businesses")) {
  text = text.replace(
    `AI receptionist and operations assistant for trade businesses`,
    `AI receptionist and operations assistant for trade businesses`
  );

  text = text.replace(
    `<p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              TradeConnectAI helps small trade businesses answer enquiries,
              organise jobs, create quotes and keep customers updated while the
              team is out doing the work.
            </p>`,
    `<p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              TradeConnectAI helps small trade businesses answer enquiries,
              organise jobs, create quotes and keep customers updated while the
              team is out doing the work.
            </p>

            <div className="mt-6 max-w-2xl rounded-3xl border border-emerald-300/30 bg-emerald-300/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.2em]">
                Founding beta offer
              </p>
              <p className="mt-2 text-lg font-black text-white">
                Free for the first 15 trade businesses that sign up and give honest feedback.
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-100/85">
                No payment needed during the founding beta. Help shape the product and get early access before paid plans open.
              </p>
            </div>`
  );

  text = text.replaceAll("Founding beta pricing", "Founding beta offer");

  text = text.replace(
    `Simple pricing while the beta grows.`,
    `Free access for the first 15 companies.`
  );

  text = text.replace(
    `Tell us what you do and what you need help with. We will use the
              beta to shape the workflows around real trade businesses.`,
    `Tell us what you do and what you need help with. The first 15 trade businesses that sign up and give honest feedback get beta access free.`
  );
}

fs.writeFileSync(home, text, "utf8");
console.log("Homepage beta offer updated.");
