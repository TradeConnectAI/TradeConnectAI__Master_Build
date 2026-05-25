const fs = require("fs");

const file = "app/page.tsx";
let text = fs.readFileSync(file, "utf8");

text = text.replace(
`const pricing = [
  ["Starter", "£49/mo", "Sole traders testing AI calls and customer updates."],
  ["Trade Pro", "£99/mo", "Small teams needing calls, quotes, jobs and customer updates."],
  ["Managed Setup", "£249 setup + £149/mo", "Done-for-you setup, scripts, workflows and onboarding."],
];`,
`const pricing = [
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
];`
);

fs.writeFileSync(file, text, "utf8");
console.log("Homepage paid cards replaced.");
