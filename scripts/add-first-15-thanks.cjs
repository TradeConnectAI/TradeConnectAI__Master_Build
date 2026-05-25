const fs = require("fs");

const file = "app/book-demo/thanks/page.tsx";
let text = fs.readFileSync(file, "utf8");

text = text.replace(
  `Thanks. Your request has been captured.`,
  `Thanks. Your beta request has been captured.`
);

text = text.replace(
  `We&apos;ll review the details and use them to shape a practical demo
          around your trade business workflow.`,
  `We&apos;ll review the details and, if you are one of the first 15 suitable trade businesses, we&apos;ll contact you about free founding beta access in exchange for honest feedback.`
);

fs.writeFileSync(file, text, "utf8");
console.log("Thank-you page beta offer updated.");
