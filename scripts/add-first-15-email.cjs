const fs = require("fs");

const file = "app/api/beta-leads/route.ts";
let text = fs.readFileSync(file, "utf8");

if (!text.includes("const offer = clean(formData.get(\"offer\"))")) {
  text = text.replace(
    `const needs = formData
    .getAll("needs")
    .map((value) => String(value).trim())
    .filter(Boolean);`,
    `const needs = formData
    .getAll("needs")
    .map((value) => String(value).trim())
    .filter(Boolean);

  const offer =
    clean(formData.get("offer")) ||
    "Founding beta: free for first 15 companies in exchange for feedback";`
  );

  text = text.replace(
    `<p><strong>Source:</strong> ${escapeHtml(lead.source)}</p>`,
    `<p><strong>Source:</strong> ${escapeHtml(lead.source)}</p>
        <p><strong>Offer:</strong> ${escapeHtml(offer)}</p>`
  );

  text = text.replace(
    `New TradeConnectAI beta lead -`,
    `New free founding beta lead -`
  );
}

fs.writeFileSync(file, text, "utf8");
console.log("Lead email beta offer updated.");
