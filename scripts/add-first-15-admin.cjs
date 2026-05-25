const fs = require("fs");

const file = "app/admin/leads/page.tsx";
let text = fs.readFileSync(file, "utf8");

if (!text.includes("First 15 free beta places")) {
  text = text.replace(
    `<p className="mt-4 max-w-3xl text-slate-400">
              View beta demo requests from the website. Leads are emailed now,
              and this dashboard will store them when Supabase is connected.
            </p>`,
    `<p className="mt-4 max-w-3xl text-slate-400">
              View beta demo requests from the website. Leads are emailed and saved into Supabase.
            </p>

            <div className="mt-5 rounded-3xl border border-emerald-300/30 bg-emerald-300/10 p-5 text-emerald-100">
              <p className="text-sm font-black uppercase tracking-[0.2em]">
                First 15 free beta places
              </p>
              <p className="mt-2 text-sm leading-6">
                Founding beta offer: free access for the first 15 suitable trade businesses that sign up and give honest feedback.
              </p>
            </div>`
  );
}

fs.writeFileSync(file, text, "utf8");
console.log("Admin leads beta offer updated.");
