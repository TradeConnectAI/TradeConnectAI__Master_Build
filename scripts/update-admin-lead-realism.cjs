const fs = require("fs");

const file = "app/admin/leads/page.tsx";
let text = fs.readFileSync(file, "utf8");

text = text.replace(
  `help: "This is demo data. Connect Vercel KV to save real submitted leads here.",`,
  `help: "I miss calls while I am out working, then forget to call people back after a long day. I need help capturing job details and following up quotes.",`
);

text = text.replace(
  `Example Plumbing Ltd`,
  `Example Plumbing & Heating`
);

fs.writeFileSync(file, text, "utf8");
console.log("Updated admin lead fallback realism.");
