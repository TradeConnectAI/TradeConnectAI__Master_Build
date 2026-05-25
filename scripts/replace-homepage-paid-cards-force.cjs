const fs = require("fs");

const file = "app/page.tsx";
let text = fs.readFileSync(file, "utf8");

text = text.replaceAll('"Starter"', '"Founding Beta"');
text = text.replaceAll('"£49/mo"', '"Free"');
text = text.replaceAll(
  '"Sole traders testing AI calls and customer updates."',
  '"For the first 15 suitable trade businesses that sign up and give honest feedback."'
);

text = text.replaceAll('"Trade Pro"', '"What we ask"');
text = text.replaceAll('"£99/mo"', '"Feedback"');
text = text.replaceAll(
  '"Small teams needing calls, quotes, jobs and customer updates."',
  '"Use the beta, test the workflows, and tell us what would actually help your trade business day to day."'
);

text = text.replaceAll('"Managed Setup"', '"After beta"');
text = text.replaceAll('"£249 setup + £149/mo"', '"Paid plans later"');
text = text.replaceAll(
  '"Done-for-you setup, scripts, workflows and onboarding."',
  '"Pricing will open after the founding beta once the product is shaped around real trade businesses."'
);

text = text.replaceAll("Request beta access", "Claim free beta spot");

fs.writeFileSync(file, text, "utf8");
console.log("Homepage paid cards replaced.");
