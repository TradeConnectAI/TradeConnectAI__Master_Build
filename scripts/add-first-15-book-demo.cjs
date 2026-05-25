const fs = require("fs");

const file = "app/book-demo/page.tsx";
let text = fs.readFileSync(file, "utf8");

if (!text.includes("First 15 companies go free")) {
  text = text.replace(
    `<p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Tell us your trade, team size and what causes the most admin pain.
              We&apos;ll use that to shape the demo around your real day-to-day work.
            </p>`,
    `<p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Tell us your trade, team size and what causes the most admin pain.
              We&apos;ll use that to shape the demo around your real day-to-day work.
            </p>

            <div className="mt-6 rounded-[2rem] border border-emerald-300/30 bg-emerald-300/10 p-6">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-100">
                First 15 companies go free
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Founding beta access in exchange for honest feedback.
              </h2>
              <p className="mt-3 text-sm leading-6 text-emerald-100/85">
                No payment during the founding beta for the first 15 trade businesses accepted. Try the workflow, tell us what works, and help shape the product.
              </p>
            </div>`
  );

  text = text.replace(
    `<input type="hidden" name="source" value="book-demo" />`,
    `<input type="hidden" name="source" value="book-demo" />
              <input
                type="hidden"
                name="offer"
                value="Founding beta: free for first 15 companies in exchange for feedback"
              />`
  );

  text = text.replace(
    `Send beta request`,
    `Claim free beta spot`
  );

  text = text.replace(
    `This is a beta enquiry form. No payment is taken here.`,
    `This is a founding beta enquiry form. No payment is taken here. Free access is limited to the first 15 suitable trade businesses that agree to give feedback.`
  );
}

fs.writeFileSync(file, text, "utf8");
console.log("Book demo beta offer updated.");
