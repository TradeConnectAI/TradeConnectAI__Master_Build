const fs = require("fs");

const file = "app/book-demo/page.tsx";
let text = fs.readFileSync(file, "utf8");

text = text.replace(
  `Tell us your trade, team size and what causes the most admin pain.
              We&apos;ll use that to shape the demo around your real day-to-day work.`,
  `Tell us your trade, team size and what happens when you are out working.
              We&apos;ll shape the demo around the real moments where calls, quotes and updates usually get missed.`
);

text = text.replace(
  `What is the biggest problem right now?`,
  `What gets missed when you are out working?`
);

text = text.replace(
  `Example: I miss calls while working, forget to follow up quotes, and customers chase me for updates...`,
  `Example: I miss calls while driving or on jobs, forget quote follow-ups after work, and customers chase for updates...`
);

fs.writeFileSync(file, text, "utf8");
console.log("Updated book-demo out-at-work copy.");
