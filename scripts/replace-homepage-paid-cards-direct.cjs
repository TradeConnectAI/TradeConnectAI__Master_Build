const fs = require("fs");

const file = "app/page.tsx";
let text = fs.readFileSync(file, "utf8");

text = text.replace(
  '["Starter", "£49/mo", "Sole traders testing AI calls and customer updates."]',
  '["Founding Beta", "Free", "For the first 15 suitable trade businesses that sign up and give honest feedback."]'
);

text = text.replace(
  '["Trade Pro", "£99/mo", "Small teams needing calls, quotes, jobs and customer updates."]',
  '["What we ask", "Feedback", "Use the beta, test the workflows, and tell us what would actually help your trade business day to day."]'
);

text = text.replace(
  '["Managed Setup", "£249 setup + £149/mo", "Done-for-you setup, scripts, workflows and onboarding."]',
  '["After beta", "Paid plans later", "Pricing will open after the founding beta once the product is shaped around real trade businesses."]'
);

text = text.replaceAll("Request beta access", "Claim free beta spot");

fs.writeFileSync(file, text, "utf8");
console.log("Homepage pricing cards replaced.");
