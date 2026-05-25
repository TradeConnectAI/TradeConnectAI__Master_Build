const fs = require("fs");

const file = "app/page.tsx";
let text = fs.readFileSync(file, "utf8");

const oldPricing = `const pricing = [
  ["Starter", "£49/mo", "Sole traders testing AI calls and customer updates."],
  ["Trade Pro", "£99/mo", "Small teams needing calls, quotes, jobs and customer updates."],
  ["Managed Setup", "£249 setup + £149/mo", "Done-for-you setup, scripts, workflows and onboarding."],
];`;

const newPricing = `const pricing = [
  [
    "Founding Beta",
    "Free",
    "For the first 15 suitable trade businesses that sign up and give honest feedback.",
  ],
  [
    "What we ask",
    "Feedback",
    "Use the beta, test the workflows, and tell us what would actually help your trade business day to day.",
  ],
  [
    "After beta",
    "Paid plans later",
    "Pricing will open after the founding beta once the product is shaped around real trade businesses.",
  ],
];`;

if (text.includes(oldPricing)) {
  text = text.replace(oldPricing, newPricing);
}

text = text.replaceAll("Founding beta pricing", "Founding beta offer");
text = text.replaceAll("Simple pricing while the beta grows.", "Free access for the first 15 companies.");
text = text.replaceAll("Simple pricing while the beta grows", "Free access for the first 15 companies");
text = text.replaceAll("Request beta access", "Claim free beta spot");

if (!text.includes("No payment during the founding beta. In return, we ask for honest feedback")) {
  text = text.replace(
`        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pricing.map(([plan, price, text]) => (`,
`        <div className="mt-6 rounded-[2rem] border border-emerald-300/30 bg-emerald-300/10 p-6 text-emerald-100">
          <p className="text-sm font-black uppercase tracking-[0.2em]">
            Limited founding beta
          </p>
          <p className="mt-2 text-lg font-black text-white">
            Only 15 founding beta places are available.
          </p>
          <p className="mt-2 text-sm leading-6 text-emerald-100/85">
            No payment during the founding beta. In return, we ask for honest feedback on calls, jobs, quotes and customer updates.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pricing.map(([plan, price, text]) => (`
  );
}

fs.writeFileSync(file, text, "utf8");

console.log("Homepage pricing cards replaced with founding beta offer.");
